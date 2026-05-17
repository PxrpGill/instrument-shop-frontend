/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: <explanation> */

"use client";

import { ArrowUpRightIcon } from "@phosphor-icons/react";
import Link from "next/link";
import { APP_ROUTES } from "@/shared/config/app-routes";
import { FALLBACK_PRODUCT_IMAGE } from "@/shared/config/fallback-product-image";
import { concantenateUrlSegments } from "@/shared/lib/concantenate-url-segments";
import Button from "@/shared/ui/button";
import Picture from "@/shared/ui/picture";
import type { ProductCardProps } from "../../types/product-card.types";
import css from "./index.module.css";

export default function ProductCard({
	id,
	category,
	title,
	description,
	poster,
	className,
	price,
	sku,
	cardMode = "vertical",
	productControls,
}: ProductCardProps) {
	const [firstCategory] = category;
	const currentPoster = poster ?? FALLBACK_PRODUCT_IMAGE;

	return (
		<article className={`${css.root} ${className} ${css[cardMode]}`}>
			<div className={css.imageWrapper}>
				<Picture poster={currentPoster} alt="изображение товара" />
				<div className={css.backdrop} />
				<Button className={css.showMore} size="l" ariaLabel="иконка">
					<ArrowUpRightIcon className={css.arrow} />
				</Button>
			</div>
			<div className={css.informationWrapper}>
				{sku && (
					<p
						className={css.sku}
						dangerouslySetInnerHTML={{ __html: "Артикул: " + sku }}
					/>
				)}
				{(title || description) && (
					<div className={css.info}>
						{title && (
							<p
								className={css.title}
								dangerouslySetInnerHTML={{ __html: title }}
							/>
						)}
						{description && (
							<p
								className={css.description}
								dangerouslySetInnerHTML={{ __html: description }}
							/>
						)}
					</div>
				)}
				<div className={css.cartWrapper}>
					{price && <p className={css.price}>{price} ₽</p>}
					{productControls}
				</div>
			</div>
			<Link
				className={css.link}
				href={concantenateUrlSegments([
					APP_ROUTES.catalog,
					firstCategory.slug,
					id.toString(),
				])}
				aria-label="перейти на страницу товара"
			/>
		</article>
	);
}
