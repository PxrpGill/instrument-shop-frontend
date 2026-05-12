"use client";

import { FadersIcon } from "@phosphor-icons/react";

import css from "./index.module.css";
import type { CatalogFiltersProps } from "./types/catalog-filters.types";
import CategoryFilter from "./ui/category-filter";
import PriceFilter from "./ui/price-filter";

export default function CatalogFilters({
	className,
	priceFilter,
	categoriesFilter,
}: CatalogFiltersProps) {
	return (
		<aside className={`${css.root} ${className}`.trim()}>
			<div className={css.titleBlock}>
				<FadersIcon className={css.faders} />
				<h3 className={css.title}>Фильтры</h3>
			</div>
			<div className={css.filters}>
				{priceFilter && <PriceFilter {...priceFilter} />}
				{categoriesFilter && <CategoryFilter {...categoriesFilter} />}
			</div>
		</aside>
	);
}
