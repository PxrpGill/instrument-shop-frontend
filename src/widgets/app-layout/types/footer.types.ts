import type { SiteLinkProps } from "@/shared/types/button.types";
import type { PropsWithClassName } from "@/shared/types/props-with-classname";

export type FooterProps = {} & PropsWithClassName;

export type TopFooterProps = {
	telephone?: string;
} & PropsWithClassName;

export type MiddleFooterProps = {
	links?: Array<SiteLinkProps>;
} & PropsWithClassName;
