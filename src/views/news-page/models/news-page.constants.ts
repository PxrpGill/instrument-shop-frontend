import type { NewsSectionProps } from "@/widgets/news-section/types/news-section.types";

export const NEWS_SECTION_DATA: NewsSectionProps = {
	title: "Новости магазина",
	description:
		"Будьте в&nbsp;курсе последних событий, акций и&nbsp;новинок в&nbsp;мире инструментов и&nbsp;стройматериалов",
	tabs: [
		{ title: "Все новости", slug: "all" },
		{ title: "Акции", slug: "sales" },
		{ title: "Новинки", slug: "new" },
		{ title: "Советы", slug: "tips" },
	],
	currentSlugTab: "all",
	news: [
		{
			title: "Сезонная распродажа электроинструментов до 40%",
			description:
				"Только до конца месяца скидки на дрели, шуруповёрты, перфораторы и болгарки ведущих брендов",
			date: "2026-05-15T12:34:56Z",
			slug: "seasonal-power-tools-sale",
		},
		{
			title: "Новая линейка садовой техники 2026",
			description:
				"В&nbsp;продажу поступили газонокосилки, триммеры и&nbsp;кусторезы с&nbsp;улучшенными аккумуляторами",
			date: "2026-05-15T12:34:56Z",
			slug: "new-garden-equipment-2026",
		},
		{
			title: "Как правильно выбрать сварочный аппарат: советы профессионалов",
			description:
				"Подробный гайд по выбору инверторных сварочных аппаратов для дома и производства",
			date: "2026-05-15T12:34:56Z",
			slug: "how-to-choose-welding-machine",
		},
		{
			title: "Акция «Купи перфоратор — получи бур в подарок»",
			description:
				"При покупке перфораторов Makita и DeWALT набор буров по бетону в подарок",
			date: "2026-05-15T12:34:56Z",
			slug: "buy-perforator-get-drill-set",
		},
		{
			title: "Поступление экологичных отделочных материалов",
			description:
				"Новая коллекция красок на водной основе, обоев из натуральных материалов и экологичного ламината",
			date: "2026-05-15T12:34:56Z",
			slug: "eco-friendly-materials",
		},
	],
};
