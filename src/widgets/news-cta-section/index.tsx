/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: <explanation> */

"use client";

import { ArrowUpRightIcon } from "@phosphor-icons/react";

import { AnimationWrapper } from "@/shared/ui/animation-wrapper";
import Button from "@/shared/ui/button";
import Picture from "@/shared/ui/picture";

import css from "./index.module.css";
import type { NewsCtaSectionProps } from "./types/news-cta-section.types";

export default function NewsCtaSection({
	title,
	description,
	poster,
	button,
	className,
}: NewsCtaSectionProps) {
	return (
		<AnimationWrapper
			as="section"
			className={`${css.root} ${className} container`.trim()}
		>
			<div className={css.sectionWrapper}>
				{title && (
					<h2
						dangerouslySetInnerHTML={{ __html: title }}
						className={css.title}
					/>
				)}
				{description && (
					<p
						dangerouslySetInnerHTML={{ __html: description }}
						className={css.description}
					/>
				)}

				{button && (
					<Button
						href={button.href}
						className={css.button}
						rightIcon={<ArrowUpRightIcon className={css.icon} weight="bold" />}
					>
						{button.title}
					</Button>
				)}

				<div className={css.backdrop} />
				{poster && <Picture poster={poster} />}
			</div>
		</AnimationWrapper>
	);
}
