export type Segment = number | "...";

export function getPageRange(currentPage: number, totalPages: number): Segment[] {
	if (totalPages <= 1) return [];

	const pages = new Set<number>([
		1,
		totalPages,
		Math.max(1, currentPage - 1),
		currentPage,
		Math.min(totalPages, currentPage + 1),
	]);

	const sorted = Array.from(pages).sort((a, b) => a - b);

	const result: Segment[] = [];
	for (let i = 0; i < sorted.length; i++) {
		if (i > 0) {
			const gap = sorted[i] - sorted[i - 1];
			if (gap === 2) {
				result.push(sorted[i - 1] + 1);
			} else if (gap > 2) {
				result.push("...");
			}
		}
		result.push(sorted[i]);
	}

	return result;
}
