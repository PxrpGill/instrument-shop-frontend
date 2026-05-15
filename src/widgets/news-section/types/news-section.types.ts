import type { NewsCardProps } from "@/entities/news/types/news-card.types";
import type { TabsProps } from "@/features/tabs/types/tabs.types";
import type { PropsWithClassName } from "@/shared/types/props-with-classname";

export type NewsSectionHeaderProps = {
	title?: string;
	description?: string;
} & PropsWithClassName;

export type NewsListProps = {
	news?: Array<NewsCardProps>;
} & PropsWithClassName;

export type NewsSectionProps = NewsListProps &
	PropsWithClassName &
	NewsSectionHeaderProps &
	Omit<TabsProps, "className">;
