import type { SiteLinkProps } from "@/shared/types/button.types";
import type { PropsWithClassName } from "@/shared/types/props-with-classname";
import type { PictureFormatType } from "@/shared/ui/picture";

export type HeroSectionProps = {
	title?: string;
	description?: string;
	poster?: PictureFormatType;
	button?: SiteLinkProps;
} & PropsWithClassName;
