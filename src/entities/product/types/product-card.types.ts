import type { PropsWithClassName } from "@/shared/types/props-with-classname";
import type { PictureFormatType } from "@/shared/ui/picture";

export type ProductCardProps = {
	title?: string;
	description?: string;
	poster?: PictureFormatType;
	price?: number;
	sku?: string;
} & PropsWithClassName;
