/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: <explanation> */

import type { FeedbackSectionHeaderProps } from "../../types/feedback-section.types";
import css from "./index.module.css";

export default function SectionHeader({
	title,
	description,
	className,
}: FeedbackSectionHeaderProps) {
	if (!(title || description)) return null;

	return (
		<div className={`${css.root} ${className}`.trim()}>
			{title && (
				<h4 dangerouslySetInnerHTML={{ __html: title }} className={css.title} />
			)}
			{description && (
				<p
					dangerouslySetInnerHTML={{ __html: description }}
					className={css.description}
				/>
			)}
		</div>
	);
}
