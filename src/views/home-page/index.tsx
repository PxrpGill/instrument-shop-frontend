import AboutCompanySection from "@/widgets/about-company-section";
import HeroSection from "@/widgets/hero-section";
import NewsCtaSection from "@/widgets/news-cta-section";
import ReviewsSection from "@/widgets/reviews-section";
import ShowcaseSection from "@/widgets/showcase-section";
import {
	ABOUT_COMPANY_DATA,
	HERO_SECTION_DATA,
	NEWS_CTA_SECTION_DATA,
	REVIEWS_DATA,
	SHOWCASE_DATA,
} from "./models/home-page.constants";

export default function HomePage() {
	return (
		<main>
			<HeroSection {...HERO_SECTION_DATA} />
			<AboutCompanySection {...ABOUT_COMPANY_DATA} />
			<ReviewsSection {...REVIEWS_DATA} />
			<ShowcaseSection {...SHOWCASE_DATA} />
			<NewsCtaSection {...NEWS_CTA_SECTION_DATA} />
		</main>
	);
}
