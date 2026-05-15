import NewsSection from "@/widgets/news-section";
import css from "./index.module.css";
import { NEWS_SECTION_DATA } from "./models/news-page.constants";

export default function NewsPage() {
	return (
		<main>
			<NewsSection {...NEWS_SECTION_DATA} className={css.newsSection} />
		</main>
	);
}
