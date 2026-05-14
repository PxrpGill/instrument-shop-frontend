/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: <explanation> */

"use client";

import { useState } from "react";
import ProductCard from "@/entities/product/ui/product-card";
import GridModes from "@/features/grid-modes";
import type { GridModeType } from "@/features/grid-modes/types/grid-modes.types";
import ProductControls from "@/features/product-controls";
import { AnimationWrapper } from "@/shared/ui/animation-wrapper";
import Pagination from "@/shared/ui/pagination";
import type { CatalogProductsData } from "../../types/catalog-section.types";
import css from "./index.module.css";

export default function Products({
	title,
	products,
	className,
}: CatalogProductsData) {
	const [mode, setMode] = useState<GridModeType>("vertical");

	if (!products?.length) return null;

	return (
		<div className={`${css.root} ${className}`.trim()}>
			<div className={css.titleBlock}>
				{title && (
					<h4
						className={css.title}
						dangerouslySetInnerHTML={{ __html: title }}
					/>
				)}
				<GridModes onChangeMode={setMode} className={css.modes} />
			</div>
			<ul className={`${css.list} ${css[mode]}`.trim()}>
				{products.map((product) => (
					<AnimationWrapper as="li" key={`${product.id}-${product.sku}`}>
						<ProductCard
							{...product}
							className={css.card}
							cardMode={mode}
							productControls={<ProductControls />}
						/>
					</AnimationWrapper>
				))}
			</ul>
			<Pagination
				totalPages={10}
				currentPage={1}
				onPageChange={() => {}}
				className={css.pagination}
			/>
		</div>
	);
}
