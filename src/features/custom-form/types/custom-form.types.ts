import type { FormSettingsType } from "@/shared/types/form-settings.types";
import type { PropsWithClassName } from "@/shared/types/props-with-classname";

export type FeedbackFormProps = {
	submitButtonText: string;
	resetButtonText?: string;
} & PropsWithClassName &
	FormSettingsType;
