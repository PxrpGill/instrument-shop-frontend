"use client";

import { CaretLeftIcon, CaretRightIcon } from "@phosphor-icons/react";
import css from "./index.module.css";
import { getPageRange } from "./lib/get-page-range";

export type PaginationProps = {
	totalPages: number;
	currentPage: number;
	onPageChange: (page: number) => void;
	className?: string;
};

export default function Pagination({
	totalPages,
	currentPage,
	onPageChange,
	className = "",
}: PaginationProps) {
	if (totalPages <= 1) return null;

	const segments = getPageRange(currentPage, totalPages);

	return (
		<nav className={`${css.root} ${className}`.trim()} aria-label="Пагинация">
			<button
				type="button"
				className={`${css.seg} ${css.arrow} ${currentPage === 1 ? css.disabled : ""}`.trim()}
				onClick={() => onPageChange(currentPage - 1)}
				disabled={currentPage === 1}
				aria-label="Предыдущая страница"
			>
				<CaretLeftIcon weight="bold" />
			</button>

			{segments.map((seg, i) =>
				seg === "..." ? (
					<span
						key={`dots-${
							// biome-ignore lint/suspicious/noArrayIndexKey: ellipsis has no stable key
							i
						}`}
						className={`${css.seg} ${css.dots}`}
					>
						···
					</span>
				) : (
					<button
						key={seg}
						type="button"
						className={`${css.seg} ${seg === currentPage ? css.active : ""}`.trim()}
						onClick={() => seg !== currentPage && onPageChange(seg)}
						aria-label={`Страница ${seg}`}
						aria-current={seg === currentPage ? "page" : undefined}
					>
						{seg}
					</button>
				),
			)}

			<button
				type="button"
				className={`${css.seg} ${css.arrow} ${currentPage === totalPages ? css.disabled : ""}`.trim()}
				onClick={() => onPageChange(currentPage + 1)}
				disabled={currentPage === totalPages}
				aria-label="Следующая страница"
			>
				<CaretRightIcon weight="bold" />
			</button>
		</nav>
	);
}
