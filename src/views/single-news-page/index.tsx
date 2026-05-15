import NewsCtaSection from "@/widgets/news-cta-section";

import css from "./index.module.css";
import { SINGLE_NEWS_PAGE_DATA } from "./models/single-news-page.constants";

export default function SingleNewsPage() {
	const { banner } = SINGLE_NEWS_PAGE_DATA;

	return (
		<main>
			<NewsCtaSection {...banner} className={css.banner} />
		</main>
	);
}
