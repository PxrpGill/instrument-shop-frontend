import type { PropsWithClassName } from "@/shared/types/props-with-classname";

export type TabType = {
	title?: string;
	slug?: string;
};

export type TabsProps = {
	currentSlugTab?: string;
	tabs?: Array<TabType>;
} & PropsWithClassName;
