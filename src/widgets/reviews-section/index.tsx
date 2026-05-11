/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: <explanation> */

import { AnimationWrapper } from "@/shared/ui/animation-wrapper";
import ReviewCard from "@/shared/ui/review-card";
import css from "./index.module.css";
import type { ReviewsSectionProps } from "./types/reviews-section.types";

export default function ReviewsSection({
	className,
	title,
	reviews,
}: ReviewsSectionProps) {
	if (!reviews?.length) return null;

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
			<ul className={`${css.list} container`}>
				{reviews.map((review) => (
					<li key={`${review.title}-${review.grade}`}>
						<ReviewCard {...review} className={css.review} />
					</li>
				))}
			</ul>
		</AnimationWrapper>
	);
}
