import { test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { sync, withoutDates, advance, beijing } from "./sync-post-dates.mjs";

test("draft → public → edits → hidden → public, timestamp writes, rename, delete/recreate", () => {
	const cwd = fs.mkdtempSync(path.join(os.tmpdir(), "firefly-dates-"));
	const git = (...args) => execFileSync("git", args, { cwd, encoding: "utf8" });
	git("init");
	git("config", "user.name", "Date Test");
	git("config", "user.email", "test@example.invalid");
	git("config", "core.autocrlf", "false");
	const folder = path.join(cwd, "src/content/posts");
	fs.mkdirSync(folder, { recursive: true });
	let file = path.join(folder, "中文.md");
	let day = 1;
	const commit = () => {
		git("add", ".");
		const date = `2026-01-${String(day++).padStart(2, "0")}T19:12:34Z`;
		execFileSync("git", ["commit", "-m", "save"], {
			cwd,
			env: { ...process.env, GIT_AUTHOR_DATE: date, GIT_COMMITTER_DATE: date },
		});
		return beijing(date);
	};
	const read = () => sync(cwd)[0];
	const draft =
		"---\ntitle: Test\npublished: 2000-01-01\ndraft: true\n---\n中文 $\\frac{a}{b}$\n```js\nconst x = 1;\n```\n";
	fs.writeFileSync(file, draft);
	let at = commit();
	assert.equal(read().published, null);
	assert.equal(read().updated, at);
	fs.appendFileSync(file, "草稿修改\n");
	at = commit();
	assert.equal(read().updated, at);
	fs.writeFileSync(
		file,
		fs.readFileSync(file, "utf8").replace("draft: true", "draft: false"),
	);
	const first = commit();
	assert.equal(read().published, first);
	fs.appendFileSync(file, "公开修改\n");
	at = commit();
	assert.equal(read().published, first);
	assert.equal(read().updated, at);
	const original = withoutDates(fs.readFileSync(file, "utf8"));
	sync(cwd, true);
	assert.equal(withoutDates(fs.readFileSync(file, "utf8")), original);
	commit();
	assert.equal(read().updated, at);
	assert.equal(read().changed, false);
	fs.writeFileSync(
		file,
		fs.readFileSync(file, "utf8").replace("draft: false", "draft: true"),
	);
	commit();
	sync(cwd, true);
	assert.match(fs.readFileSync(file, "utf8"), /published: null/);
	fs.writeFileSync(
		file,
		fs.readFileSync(file, "utf8").replace("draft: true", "draft: false"),
	);
	const second = commit();
	assert.notEqual(second, first);
	assert.equal(read().published, second);
	const newFile = path.join(folder, "renamed.mdx");
	fs.renameSync(file, newFile);
	file = newFile;
	at = commit();
	assert.equal(read().published, second);
	assert.equal(read().updated, at);
	fs.unlinkSync(file);
	commit();
	assert.deepEqual(sync(cwd), []);
	fs.writeFileSync(file, draft.replace("draft: true", "draft: false"));
	at = commit();
	assert.equal(read().published, at);
	fs.appendFileSync(file, "unsaved change");
	assert.throws(() => sync(cwd, true), /Uncommitted content/);
});

test("timestamp-only saves do not change dates, and Beijing day rollover is explicit", () => {
	assert.equal(beijing("2026-11-08T19:30:31Z"), "2026-11-09T03:30:31+08:00");
	const a = "---\ntitle: A\ndraft: false\npublished: 2000-01-01\n---\nBody";
	const first = advance(null, a, "2026-01-01T00:00:00Z");
	assert.equal(
		advance(
			first,
			a.replace("2000-01-01", "2020-01-01"),
			"2026-01-02T00:00:00Z",
		),
		first,
	);
});
