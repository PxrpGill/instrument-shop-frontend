/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: <explanation> */

import { AnimationWrapper } from "@/shared/ui/animation-wrapper";
import Button from "@/shared/ui/button";
import Picture from "@/shared/ui/picture";
import css from "./index.module.css";
import type { HeroSectionProps } from "./types/hero-section.types";

export default function HeroSection({
	title,
	description,
	className,
	poster,
	button,
}: HeroSectionProps) {
	return (
		<AnimationWrapper
			as="section"
			className={`${css.root} ${className} container`.trim()}
		>
			<div className={css.wrapper}>
				{title && (
					<h1
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
						target={button.target}
						className={css.button}
					>
						{button.title}
					</Button>
				)}
			</div>
			<div className={css.backdrop} />
			{poster && <Picture poster={poster} className={css.poster}/>}
		</AnimationWrapper>
	);
}
