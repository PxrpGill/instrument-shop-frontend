import FeedbackSection from "@/widgets/feedback-section";

import css from "./index.module.css";
import { FEEDBACK_SECTION_DATA } from "./models/feedback-page.constants";

export default function FeedbackPage() {
	return (
		<main>
			<FeedbackSection {...FEEDBACK_SECTION_DATA} className={css.feedback} />
		</main>
	);
}
