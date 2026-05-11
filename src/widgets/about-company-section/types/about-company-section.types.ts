import type { PropsWithClassName } from "@/shared/types/props-with-classname";
import type { PictureFormatType } from "@/shared/ui/picture";

export type AboutCompanySectionProps = {
	title?: string;
	content?: string;
	poster?: PictureFormatType;
} & PropsWithClassName;
