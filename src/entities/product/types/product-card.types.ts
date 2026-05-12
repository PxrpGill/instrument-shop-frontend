import type { ProductCategoryProps } from "@/entities/product-categories/types/product-categories.types";
import type { PropsWithClassName } from "@/shared/types/props-with-classname";
import type { PictureFormatType } from "@/shared/ui/picture";

export type ProductCardMode = "vertical" | "horizontal";

export type ProductCardProps = {
	id: number;
	category: Array<Omit<ProductCategoryProps, "className" | "poster">>;
	title?: string;
	description?: string;
	poster?: PictureFormatType;
	price?: number;
	sku?: string;
	cardMode?: ProductCardMode;
} & PropsWithClassName;
