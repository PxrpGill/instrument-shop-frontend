import type { ProductCategoryProps } from "@/entities/product-categories/types/product-categories.types";
import type { PropsWithClassName } from "@/shared/types/props-with-classname";

export type CatalogFiltersProps = {
	priceFilter?: Omit<PriceFilterProps, "className">;
	categoriesFilter?: Omit<CategoriesFilterProps, "className">;
} & PropsWithClassName;

export type CategoriesFilterProps = {
	categories: Array<Omit<ProductCategoryProps, "className" | "poster">>;
} & PropsWithClassName;

export type PriceFilterProps = {
	startRange: number;
	endRange: number;
} & PropsWithClassName;
