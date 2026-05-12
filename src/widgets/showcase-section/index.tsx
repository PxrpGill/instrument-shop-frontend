import { AnimationWrapper } from "@/shared/ui/animation-wrapper";

import css from "./index.module.css";
import type { ShowcaseSectionProps } from "./types/showcase-section.types";
import SectionHeader from "./ui/section-header";

export default function ShowcaseSection({
	title,
	button,
}: ShowcaseSectionProps) {
	return (
		<AnimationWrapper as="section" className={`${css.root}`.trim()}>
			<SectionHeader title={title} button={button} className={css.header} />
		</AnimationWrapper>
	);
}
