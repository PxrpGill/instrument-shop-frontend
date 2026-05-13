import type { PropsWithClassName } from "@/shared/types/props-with-classname";

export type FeedbackSectionHeaderProps = {
	title?: string;
	description?: string;
} & PropsWithClassName;

export type FeedbackSectionProps = {} & FeedbackSectionHeaderProps &
	PropsWithClassName;
