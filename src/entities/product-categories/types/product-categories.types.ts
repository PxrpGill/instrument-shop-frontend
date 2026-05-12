import type { PropsWithClassName } from "@/shared/types/props-with-classname";
import type { PictureFormatType } from "@/shared/ui/picture";

export type ProductCategoryProps = {
	title: string;
	slug: string;
	poster?: PictureFormatType;
} & PropsWithClassName;
