"use client";

import { FadersIcon } from "@phosphor-icons/react";

import css from "./index.module.css";
import type { CatalogFiltersProps } from "./types/catalog-filters.types";
import PriceFilter from "./ui/price-filter";

export default function CatalogFilters({ className }: CatalogFiltersProps) {
	return (
		<aside className={`${css.root} ${className}`.trim()}>
			<div className={css.titleBlock}>
				<FadersIcon className={css.faders} />
				<h3 className={css.title}>Фильтры</h3>
			</div>
			<PriceFilter startRange={4000} endRange={120000} />
		</aside>
	);
}
