import type { ProductCardProps } from "@/entities/product/types/product-card.types";
import type { ProductCategoryProps } from "@/entities/product-categories/types/product-categories.types";
import type { CatalogFiltersProps } from "@/features/catalog-filters/types/catalog-filters.types";
import type { PropsWithClassName } from "@/shared/types/props-with-classname";

export type CatalogCategoriesProps = {
	title?: string;
	categories?: Array<Omit<ProductCategoryProps, "className">>;
} & PropsWithClassName;

export type CatalogProductsData = {
	title?: string;
	products?: Array<Omit<ProductCardProps, "className">>;
} & PropsWithClassName;

export type CatalogSectionProps = {
	categoriesBlock?: CatalogCategoriesProps;
	filterBlock?: CatalogFiltersProps;
	productsBlock?: CatalogProductsData;
} & PropsWithClassName;
