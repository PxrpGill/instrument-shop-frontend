/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: <explanation> */

import { AnimationWrapper } from "@/shared/ui/animation-wrapper";
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
