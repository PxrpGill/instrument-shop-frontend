import CatalogFilters from "@/features/catalog-filters";
import { AnimationWrapper } from "@/shared/ui/animation-wrapper";
import css from "./index.module.css";
import type { CatalogSectionProps } from "./types/catalog-section.types";
import Categories from "./ui/categories";
import Products from "./ui/products";

export default function CatalogSection({
	categoriesBlock,
	className,
	filterBlock,
	productsBlock,
}: CatalogSectionProps) {
	return (
		<section className={`${css.root} ${className} container`}>
			<CatalogFilters {...filterBlock} className={css.filters} />

			<div className={css.contentWrapper}>
				{categoriesBlock && (
					<>
						<Categories {...categoriesBlock} />
						<AnimationWrapper className={css.divider} />
					</>
				)}
				<Products {...productsBlock} />
			</div>
		</section>
	);
}
