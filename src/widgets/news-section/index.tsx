import Tabs from "@/features/tabs";
import { AnimationWrapper } from "@/shared/ui/animation-wrapper";
import css from "./index.module.css";
import type { NewsSectionProps } from "./types/news-section.types";
import NewsList from "./ui/news-list";
import SectionHeader from "./ui/section-header";

export default function NewsSection({
	className,
	news,
	tabs,
	currentSlugTab,
	title,
	description,
}: NewsSectionProps) {
	return (
		<AnimationWrapper
			as="section"
			className={`${css.root} ${className}`.trim()}
		>
			<SectionHeader title={title} description={description} />
			<Tabs
				tabs={tabs}
				currentSlugTab={currentSlugTab}
				className={`${css.tabs} container`}
			/>
			<NewsList news={news} />
		</AnimationWrapper>
	);
}
