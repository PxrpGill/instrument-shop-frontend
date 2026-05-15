import type { PropsWithClassName } from "@/shared/types/props-with-classname";
import type { PictureFormatType } from "@/shared/ui/picture";

export type NewsCardProps = {
	title?: string;
	description?: string;
	date?: string;
	slug?: string;
	poster?: PictureFormatType;
} & PropsWithClassName;
