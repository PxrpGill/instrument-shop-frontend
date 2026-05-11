import HeroSection from "@/widgets/hero-section";
import { HERO_SECTION_DATA } from "./models/home-page.constants";

export default function HomePage() {
	return (
		<main>
			<HeroSection {...HERO_SECTION_DATA} />
		</main>
	);
}
