import type { ProductCardProps } from "@/entities/product/types/product-card.types";

export const SINGLE_PRODUCT_DATA: ProductCardProps = {
	id: 0,
	title: "Дрель ударная Metabo SBE 650",
	description:
		"Мощность 650 Вт, патрон 1.5–13 мм, регулировка оборотов, реверс",
	sku: "MT-SBE-650",
	price: 5490,
	category: [
		{
			slug: "electro-instrument",
			title: "Электроинструмент",
		},
		{
			slug: "ruchnoi-instrument",
			title: "Ручной инструмент",
		},
	],
	gallery: [
		{
			webp: {
				src: "/assets/fallback-product/hammer-fallback.webp",
			},
		},
		{
			webp: {
				src: "/assets/fallback-product/hammer-fallback.webp",
			},
		},
		{
			webp: {
				src: "/assets/fallback-product/hammer-fallback.webp",
			},
		},
	],
};
