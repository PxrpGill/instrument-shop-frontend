/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: <explanation> */

"use client";

import { ArrowUpRightIcon } from "@phosphor-icons/react";
import Link from "next/link";

import { APP_ROUTES } from "@/shared/config/app-routes";
import { FALLBACK_PRODUCT_IMAGE } from "@/shared/config/fallback-product-image";
import { concantenateUrlSegments } from "@/shared/lib/concantenate-url-segments";
import Button from "@/shared/ui/button";
import Picture from "@/shared/ui/picture";

import type { ProductCategoryProps } from "../../types/product-categories.types";
import css from "./index.module.css";

export default function ProductCategoryCard({
	title,
	className,
	slug,
	poster,
}: ProductCategoryProps) {
	const currentPoster = poster ?? FALLBACK_PRODUCT_IMAGE;

	return (
		<article className={`${css.root} ${className}`}>
			<div className={css.imageWrapper}>
				<Picture poster={currentPoster} />
				<div className={css.backdrop} />
				<Button className={css.showMore} size="l">
					<ArrowUpRightIcon className={css.arrow} />
				</Button>
			</div>
			{title && (
				<h4 className={css.title} dangerouslySetInnerHTML={{ __html: title }} />
			)}
			<Link
				href={concantenateUrlSegments([APP_ROUTES.catalog, slug])}
				className={css.link}
			/>
		</article>
	);
}
