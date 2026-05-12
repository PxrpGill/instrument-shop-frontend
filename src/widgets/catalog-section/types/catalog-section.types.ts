import type { ProductCategoryProps } from "@/entities/product-categories/types/product-categories.types";
import type { PropsWithClassName } from "@/shared/types/props-with-classname";

export type CatalogCategoriesProps = {
	title?: string;
	categories?: Array<ProductCategoryProps>;
} & PropsWithClassName;

export type CatalogSectionProps = {
	categoriesBlock?: CatalogCategoriesProps;
} & PropsWithClassName;
