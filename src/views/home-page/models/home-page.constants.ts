import { APP_ROUTES } from "@/shared/config/app-routes";
import type { HeroSectionProps } from "@/widgets/hero-section/types/hero-section.types";

export const HERO_SECTION_DATA: HeroSectionProps = {
	title: "Инструменты для работы без компромиссов",
	description:
		"Профессиональное строительное оборудование и&nbsp;надежные инструменты для любых задач&nbsp;&mdash; от&nbsp;ремонта квартиры до&nbsp;масштабного строительства.<br /><br /> Подбираем решения, которые помогают работать быстрее, точнее и&nbsp;увереннее.",
	button: { title: "Бегом за покупками!", href: APP_ROUTES.catalog },
	poster: {
		webp: {
			src: "/mock/hero/hero.webp",
		},
	},
};
