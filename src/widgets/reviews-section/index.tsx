/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: <explanation> */

import { AnimationWrapper } from "@/shared/ui/animation-wrapper";

import css from "./index.module.css";
import type { ReviewsSectionProps } from "./types/reviews-section.types";

export default function ReviewsSection({
	className,
	title,
}: ReviewsSectionProps) {
	return (
		<AnimationWrapper
			as="section"
			className={`${css.root} ${className}`.trim()}
		>
			{title && (
				<h2
					className={`${css.title} container`}
					dangerouslySetInnerHTML={{ __html: title }}
				/>
			)}
		</AnimationWrapper>
	);
}
