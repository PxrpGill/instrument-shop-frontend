/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: <explanation> */

'use client';

import { ArrowUpRightIcon } from "@phosphor-icons/react";
import Link from "next/link";
import { APP_ROUTES } from "@/shared/config/app-routes";
import { AnimationWrapper } from "@/shared/ui/animation-wrapper";
import Button from "@/shared/ui/button";
import Picture from "@/shared/ui/picture";
import css from "./index.module.css";
import type { AboutCompanySectionProps } from "./types/about-company-section.types";

export default function AboutCompanySection({
	className,
	title,
	content,
	poster,
}: AboutCompanySectionProps) {
	return (
		<AnimationWrapper
			as="section"
			className={`${css.root} ${className} container`.trim()}
		>
			{title && (
				<h2 className={css.title} dangerouslySetInnerHTML={{ __html: title }} />
			)}
			<div className={css.contentWrapper}>
				{poster && (
					<div className={css.imageWrapper}>
						<Picture poster={poster} />
						<div className={css.backdrop} />
						<Button className={css.showMore} size="l">
							<ArrowUpRightIcon className={css.arrow} />
						</Button>
						<Link href={APP_ROUTES.about} className={css.link} />
					</div>
				)}
				<div className={css.content}>
					{content && (
						<div
							className={css.content}
							dangerouslySetInnerHTML={{ __html: content }}
						/>
					)}
				</div>
			</div>
		</AnimationWrapper>
	);
}
