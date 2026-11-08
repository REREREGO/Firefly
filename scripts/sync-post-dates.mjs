import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
import matter from "gray-matter";

const posts = "src/content/posts";
const isPost = (p) => p.startsWith(`${posts}/`) && /\.mdx?$/.test(p);
const git = (cwd, ...args) =>
	execFileSync("git", args, {
		cwd,
		encoding: "utf8",
		maxBuffer: 64 * 1024 * 1024,
	});

// Preserve the body byte-for-byte. Never reserialize formulas or other frontmatter.
function split(source) {
	const match = source.match(
		/^(\uFEFF?---\r?\n)([\s\S]*?)(\r?\n---(?:\r?\n|$))/,
	);
	if (!match) throw new Error("Missing YAML frontmatter");
	return {
		start: match[1],
		yaml: match[2],
		end: match[3],
		body: source.slice(match[0].length),
	};
}
export function withoutDates(source) {
	const f = split(source);
	const yaml = f.yaml
		.split(/\r?\n/)
		.filter((line) => !/^(published|updated):/.test(line))
		.join("\n");
	return yaml + "\n---\n" + f.body.replace(/\r\n/g, "\n");
}
export function stamp(source, state) {
	const f = split(source),
		eol = f.start.includes("\r\n") ? "\r\n" : "\n";
	const lines = f.yaml
		.split(/\r?\n/)
		.filter((line) => !/^(published|updated):/.test(line));
	lines.push(
		"published: " +
			(state.published ? JSON.stringify(state.published) : "null"),
	);
	lines.push("updated: " + JSON.stringify(state.updated));
	return f.start + lines.join(eol) + f.end + f.body;
}
export function beijing(time) {
	return new Date(Date.parse(time) + 8 * 3600_000)
		.toISOString()
		.replace(".000Z", "+08:00");
}
export function advance(previous, source, time, renamed = false) {
	const fingerprint = withoutDates(source);
	if (previous?.fingerprint === fingerprint && !renamed) return previous;
	const draft = matter(source).data.draft === true;
	return {
		fingerprint,
		draft,
		updated: beijing(time),
		published: draft
			? null
			: !previous || previous.draft
				? beijing(time)
				: previous.published,
	};
}

export function sync(cwd, write = false) {
	if (git(cwd, "rev-parse", "--is-shallow-repository").trim() === "true")
		throw new Error("Full Git history required (fetch-depth: 0)");
	const states = new Map();
	const current = git(
		cwd,
		"ls-tree",
		"-r",
		"--name-only",
		"-z",
		"HEAD",
		"--",
		posts,
	)
		.split("\0")
		.filter(isPost);
	if (!current.length) return [];
	// Only read surviving articles and their previous names, not deleted theme demos.
	const relevant = new Set(current);
	for (const file of current) {
		for (const name of git(
			cwd,
			"log",
			"--first-parent",
			"--follow",
			"--find-renames=100%",
			"--format=",
			"--name-only",
			"-z",
			"HEAD",
			"--",
			file,
		).split("\0")) {
			const previousName = name.replace(/^\n+/, "");
			if (isPost(previousName)) relevant.add(previousName);
		}
	}
	// First-parent snapshots reflect commits actually landing on the published branch.
	const commits = git(
		cwd,
		"log",
		"--first-parent",
		"--reverse",
		"--format=%H %cI",
		"HEAD",
		"--",
		...relevant,
	)
		.trim()
		.split("\n")
		.filter(Boolean);
	for (const entry of commits) {
		const [sha, time] = entry.split(" ");
		const parent = git(cwd, "rev-list", "--parents", "-n", "1", sha)
			.trim()
			.split(" ")[1];
		const args = parent
			? [
					"diff",
					"--name-status",
					"-z",
					"-M100%",
					parent,
					sha,
					"--",
					...relevant,
				]
			: [
					"diff-tree",
					"--root",
					"--no-commit-id",
					"--name-status",
					"-z",
					"-r",
					sha,
					"--",
					...relevant,
				];
		const tokens = git(cwd, ...args)
			.split("\0")
			.filter(Boolean);
		for (let i = 0; i < tokens.length; ) {
			const status = tokens[i++],
				oldPath = tokens[i++];
			const renamed = status.startsWith("R"),
				file = renamed ? tokens[i++] : oldPath;
			if (status === "D") {
				states.delete(file);
				continue;
			}
			if (!isPost(file)) {
				if (renamed) states.delete(oldPath);
				continue;
			}
			const previous = states.get(renamed ? oldPath : file);
			if (renamed) states.delete(oldPath);
			states.set(
				file,
				advance(previous, git(cwd, "show", `${sha}:${file}`), time, renamed),
			);
		}
	}
	const report = [];
	for (const [file, state] of states) {
		if (!current.includes(file)) continue;
		const target = path.join(cwd, file),
			source = fs.readFileSync(target, "utf8");
		if (withoutDates(source) !== state.fingerprint)
			throw new Error(`Uncommitted content changes: ${file}`);
		const next = stamp(source, state),
			changed = next !== source;
		if (write && changed) fs.writeFileSync(target, next);
		report.push({
			file,
			published: state.published,
			updated: state.updated,
			changed,
		});
	}
	return report;
}
if (
	process.argv[1] &&
	import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href
) {
	console.log(
		JSON.stringify(
			sync(process.cwd(), process.argv.includes("--write")),
			null,
			2,
		),
	);
}
