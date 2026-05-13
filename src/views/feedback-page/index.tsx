import FeedbackSection from "@/widgets/feedback-section";
import NewsCtaSection from "@/widgets/news-cta-section";
import css from "./index.module.css";
import {
	FEEDBACK_FORM_SETTINGS,
	FEEDBACK_SECTION_DATA,
	NEWS_CTA_SECTION_DATA,
} from "./models/feedback-page.constants";

export default function FeedbackPage() {
	return (
		<main>
			<FeedbackSection
				{...FEEDBACK_SECTION_DATA}
				formInputs={FEEDBACK_FORM_SETTINGS}
				className={css.feedback}
			/>
			<NewsCtaSection {...NEWS_CTA_SECTION_DATA} />
		</main>
	);
}
