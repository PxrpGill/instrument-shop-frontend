import type { PropsWithClassName } from "@/shared/types/props-with-classname";
import type { PictureFormatType } from "@/shared/ui/picture";

export type ProductCategoryType = {
	title: string;
	slug: string;
};

export type ProductCardProps = {
	id: number;
	category: Array<ProductCategoryType>;
	title?: string;
	description?: string;
	poster?: PictureFormatType;
	price?: number;
	sku?: string;
} & PropsWithClassName;
