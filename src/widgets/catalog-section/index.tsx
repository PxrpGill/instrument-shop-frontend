import CatalogFilters from "@/features/catalog-filters";
import { AnimationWrapper } from "@/shared/ui/animation-wrapper";
import css from "./index.module.css";
import type { CatalogSectionProps } from "./types/catalog-section.types";
import Categories from "./ui/categories";

export default function CatalogSection({
	categoriesBlock,
	className,
	filterBlock,
}: CatalogSectionProps) {
	return (
		<AnimationWrapper
			as="section"
			className={`${css.root} ${className} container`}
		>
			{filterBlock ? <CatalogFilters {...filterBlock} /> : <div />}
			<div className={css.contentWrapper}>
				<Categories {...categoriesBlock} />
			</div>
		</AnimationWrapper>
	);
}
