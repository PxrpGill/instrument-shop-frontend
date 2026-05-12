import type { ProductCardProps } from "@/entities/product/types/product-card.types";
import type { SiteLinkProps } from "@/shared/types/button.types";
import type { PropsWithClassName } from "@/shared/types/props-with-classname";

export type ShowcaseSectionHeaderProps = {
	title?: string;
	button?: SiteLinkProps;
} & PropsWithClassName;

export type ShowcaseProductListProps = {
	title?: string;
	products?: Array<ProductCardProps>;
} & PropsWithClassName;

export type ShowcaseSectionProps = {
	showcases?: Array<ShowcaseProductListProps>;
} & ShowcaseSectionHeaderProps &
	PropsWithClassName;
