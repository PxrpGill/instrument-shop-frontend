"use client";

import { FadersIcon } from "@phosphor-icons/react";
import { AnimationWrapper } from "@/shared/ui/animation-wrapper";
import css from "./index.module.css";
import type { CatalogFiltersProps } from "./types/catalog-filters.types";
import CategoryFilter from "./ui/category-filter";
import PriceFilter from "./ui/price-filter";
import SearchFilter from "./ui/search-filter";

export default function CatalogFilters({
	className,
	priceFilter,
	categoriesFilter,
}: CatalogFiltersProps) {
	return (
		<AnimationWrapper as="aside" className={`${css.root} ${className}`.trim()}>
			<div className={css.titleBlock}>
				<FadersIcon className={css.faders} />
				<h3 className={css.title}>Фильтры</h3>
			</div>
			<div className={css.filters}>
				{priceFilter && <PriceFilter {...priceFilter} />}
				{categoriesFilter && <CategoryFilter {...categoriesFilter} />}
				<SearchFilter />
			</div>
		</AnimationWrapper>
	);
}
