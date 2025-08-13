export const withBase = (path: string): string => {
	const base = import.meta.env.BASE_URL || "/"
	if (path.startsWith("http") || path.startsWith("#")) return path
	return base + path.replace(/^\//, "")
}
