import type { PropsWithClassName } from "@/shared/types/props-with-classname";
import type { ReviewCardProps } from "@/shared/ui/review-card";

export type ReviewsSectionProps = {
	title?: string;
	reviews?: Array<ReviewCardProps>;
} & PropsWithClassName;
