// Keep the original counter identity after the Pages repository is renamed.
export function visitPath(pathname: string): string {
	return `${pathname.replace(/^\/MyBlog(?=\/|$)/i, "/Firefly").replace(/\/+$/, "")}/`;
}
