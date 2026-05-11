import AboutCompanySection from "@/widgets/about-company-section";
import HeroSection from "@/widgets/hero-section";
import ReviewsSection from "@/widgets/reviews-section";
import {
	ABOUT_COMPANY_DATA,
	HERO_SECTION_DATA,
	REVIEWS_DATA,
} from "./models/home-page.constants";

export default function HomePage() {
	return (
		<main>
			<HeroSection {...HERO_SECTION_DATA} />
			<AboutCompanySection {...ABOUT_COMPANY_DATA} />
			<ReviewsSection {...REVIEWS_DATA} />
		</main>
	);
}
