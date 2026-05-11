/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: <explanation> */
/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */

import { StarIcon } from "@phosphor-icons/react";

import type { PropsWithClassName } from "@/shared/types/props-with-classname";

import { AnimationWrapper } from "../animation-wrapper";
import css from "./index.module.css";
import type { ReviewAuthorProps } from "./review-author";
import ReviewAuthor from "./review-author";

export type ReviewCardProps = PropsWithClassName & {
	title: string;
	description?: string;
	author: ReviewAuthorProps;
	grade: number;
};

export default function ReviewCard({
	title,
	description,
	author,
	grade,
}: ReviewCardProps) {
	return (
		<AnimationWrapper as="article">
			<ReviewAuthor {...author} />
			{title && (
				<h5 dangerouslySetInnerHTML={{ __html: title }} className={css.title} />
			)}
			{description && (
				<p
					dangerouslySetInnerHTML={{ __html: description }}
					className={css.description}
				/>
			)}
			<div className={css.gradeWrapper}>
				{Array.from({ length: 5 }).map((_, key) => (
					<StarIcon
						key={key}
						className={css.starIcon}
						weight={key <= grade ? "fill" : "bold"}
					/>
				))}
			</div>
		</AnimationWrapper>
	);
}
