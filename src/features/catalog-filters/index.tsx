"use client";

import { FadersIcon } from "@phosphor-icons/react";

import css from "./index.module.css";
import type { CatalogFiltersProps } from "./types/catalog-filters.types";

export default function CatalogFilters({ className }: CatalogFiltersProps) {
	return (
		<aside className={`${css.root} ${className}`.trim()}>
			<div className={css.titleBlock}>
				<h3 className={css.title}>Фильтры</h3>
				<FadersIcon className={css.faders} />
			</div>
		</aside>
	);
}
