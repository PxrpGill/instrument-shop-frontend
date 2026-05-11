import AboutCompanySection from "@/widgets/about-company-section";
import HeroSection from "@/widgets/hero-section";
import ReviewsSection from "@/widgets/reviews-section";
import {
	ABOUT_COMPANY_DATA,
	HERO_SECTION_DATA,
} from "./models/home-page.constants";

export default function HomePage() {
	return (
		<main>
			<HeroSection {...HERO_SECTION_DATA} />
			<AboutCompanySection {...ABOUT_COMPANY_DATA} />
			<ReviewsSection title="Отзывы покупателей" />
		</main>
	);
}
