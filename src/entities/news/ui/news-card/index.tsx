/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: <explanation> */

"use client";

import { ArrowUpRightIcon } from "@phosphor-icons/react";
import Link from "next/link";
import { APP_ROUTES } from "@/shared/config/app-routes";
import { FALLBACK_PRODUCT_IMAGE } from "@/shared/config/fallback-product-image";
import { concantenateUrlSegments } from "@/shared/lib/concantenate-url-segments";
import Button from "@/shared/ui/button";
import Picture from "@/shared/ui/picture";
import { getDayMonthYearFormatter } from "../../lib/get-day-month-year-formatter";
import type { NewsCardProps } from "../../types/news-card.types";
import css from "./index.module.css";

export default function NewsCard({
	title,
	date,
	description,
	poster,
	className,
	slug,
}: NewsCardProps) {
	const currentPoster = poster ?? FALLBACK_PRODUCT_IMAGE;

	return (
		<article className={`${css.root} ${className}`.trim()}>
			<div className={css.imageWrapper}>
				<Picture poster={currentPoster} alt="изображение новости" />
				<div className={css.backdrop} />
				<Button className={css.showMore} size="l">
					<ArrowUpRightIcon className={css.arrow} />
				</Button>
			</div>
			<div className={css.contentWrapper}>
				{date && (
					<time className={css.time}>{getDayMonthYearFormatter(date)}</time>
				)}
				<div className={css.info}>
					{title && (
						<h4
							dangerouslySetInnerHTML={{ __html: title }}
							className={css.title}
						/>
					)}
					{description && (
						<p
							dangerouslySetInnerHTML={{ __html: description }}
							className={css.description}
						/>
					)}
				</div>
			</div>
			<Link
				className={css.link}
				href={concantenateUrlSegments([APP_ROUTES.news, slug ?? ""])}
				aria-label="читать новость"
			/>
		</article>
	);
}
