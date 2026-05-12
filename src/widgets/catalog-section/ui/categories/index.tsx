/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: <explanation> */

import ProductCategoryCard from "@/entities/product-categories/ui/product-category-card";
import { AnimationWrapper } from "@/shared/ui/animation-wrapper";
import type { CatalogCategoriesProps } from "../../types/catalog-section.types";
import css from "./index.module.css";

export default function Categories({
	title,
	categories,
	className,
}: CatalogCategoriesProps) {
	if (!categories?.length) return null;

	return (
		<AnimationWrapper className={`${css.root} ${className}`.trim()}>
			{title && (
				<h5 dangerouslySetInnerHTML={{ __html: title }} className={css.title} />
			)}
			<ul className={css.list}>
				{categories.map((category) => (
					<AnimationWrapper as="li" key={`${category.slug}-${category.title}`}>
						<ProductCategoryCard {...category} className={css.card} />
					</AnimationWrapper>
				))}
			</ul>
		</AnimationWrapper>
	);
}
