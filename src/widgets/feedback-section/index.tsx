import CustomForm from "@/features/custom-form";
import { AnimationWrapper } from "@/shared/ui/animation-wrapper";
import YandexMap from "@/shared/ui/yandex-map";
import css from "./index.module.css";
import { FEEDBACK_FORM_BUTTONS } from "./models/feedback-form-section.constants";
import type { FeedbackSectionProps } from "./types/feedback-section.types";
import SectionHeader from "./ui/section-header";

export default function FeedbackSection({
	title,
	description,
	className,
	formInputs,
}: FeedbackSectionProps) {
	return (
		<AnimationWrapper
			as="section"
			className={`${css.root} ${className} container`.trim()}
		>
			<div className={css.mainContent}>
				<SectionHeader title={title} description={description} />
				<YandexMap className={css.mobileMap} />
				<CustomForm
					formInputs={formInputs}
					className={css.form}
					{...FEEDBACK_FORM_BUTTONS}
				/>
			</div>
			<YandexMap className={css.desktopMap} />
		</AnimationWrapper>
	);
}
