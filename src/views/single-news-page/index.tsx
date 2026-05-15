import MarkupContent from "@/widgets/markup-content";
import NewsCtaSection from "@/widgets/news-cta-section";

import css from "./index.module.css";
import { SINGLE_NEWS_PAGE_DATA } from "./models/single-news-page.constants";

export default function SingleNewsPage() {
	const { banner, content } = SINGLE_NEWS_PAGE_DATA;

	return (
		<main className={css.root}>
			<NewsCtaSection {...banner} className={css.banner} />
			{content && (
				<MarkupContent content={content} className={css.content} />
			)}
		</main>
	);
}
