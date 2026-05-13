import FeedbackForm from "@/features/feedback-form";
import { AnimationWrapper } from "@/shared/ui/animation-wrapper";
import YandexMap from "@/shared/ui/yandex-map";
import css from "./index.module.css";
import type { FeedbackSectionProps } from "./types/feedback-section.types";
import SectionHeader from "./ui/section-header";

export default function FeedbackSection({
	title,
	description,
	className,
}: FeedbackSectionProps) {
	return (
		<AnimationWrapper
			as="section"
			className={`${css.root} ${className} container`.trim()}
		>
			<div className={css.mainContent}>
				<SectionHeader title={title} description={description} />
				<FeedbackForm />
			</div>
			<YandexMap />
		</AnimationWrapper>
	);
}
