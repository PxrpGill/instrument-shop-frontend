/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */

"use client";

import NewsCard from "@/entities/news/ui/news-card";
import Pagination from "@/shared/ui/pagination";
import type { NewsListProps } from "../../types/news-section.types";
import css from "./index.module.css";

export default function NewsList({ news, className }: NewsListProps) {
	if (!news?.length) return null;

	return (
		<div className={`${css.root} ${className} container`.trim()}>
			<ul className={css.list}>
				{news.map((newsCard, index) => (
					<li key={`${index}-${newsCard.slug}-${newsCard.title}`}>
						<NewsCard {...newsCard} className={css.card} />
					</li>
				))}
			</ul>
			<Pagination
				totalPages={20}
				currentPage={1}
				onPageChange={() => {}}
				className={css.pagination}
			/>
		</div>
	);
}
