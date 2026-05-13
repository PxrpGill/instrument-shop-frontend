import type { FormSettingsType } from "@/shared/types/form-settings.types";
import type { PropsWithClassName } from "@/shared/types/props-with-classname";

export type FeedbackSectionHeaderProps = {
	title?: string;
	description?: string;
} & PropsWithClassName;

export type FeedbackSectionProps = {} & FormSettingsType &
	FeedbackSectionHeaderProps &
	PropsWithClassName;
