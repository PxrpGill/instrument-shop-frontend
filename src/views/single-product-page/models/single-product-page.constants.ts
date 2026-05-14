import type { ProductCardProps } from "@/entities/product/types/product-card.types";
import { APP_ROUTES } from "@/shared/config/app-routes";
import type { ShowcaseSectionProps } from "@/widgets/showcase-section/types/showcase-section.types";

export const SINGLE_PRODUCT_DATA: ProductCardProps = {
	id: 0,
	title: "Дрель ударная Metabo SBE 650",
	description:
		"Мощность 650 Вт, патрон 1.5–13 мм, регулировка оборотов, реверс",
	sku: "MT-SBE-650",
	price: 5490,
	status: {
		title: "В наличии",
		slugStatus: "inStock",
	},
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
	descriptionParameters: [
		{
			title: "Общие характеристики",
			parameters:
				"<p>Тип: дрель ударная</p><p>Питание: сеть 220 В</p><p>Мощность: 650 Вт</p><p>Макс. оборотов: 2800 об/мин</p><p>Патрон: быстрозажимной 1.5–13 мм</p><p>Регулировка оборотов: есть</p><p>Реверс: есть</p>",
		},
		{
			title: "Комплектация",
			parameters:
				"<ul><li>Дрель Metabo SBE 650</li><li>Дополнительная рукоятка</li><li>Ограничитель глубины сверления</li><li>Кейс для хранения</li><li>Инструкция по эксплуатации</li></ul>",
		},
		{
			title: "Особенности",
			parameters:
				"<ul><li>Ударный механизм для сверления бетона и кирпича</li><li>Эргономичная рукоятка с мягким покрытием</li><li>Плавная регулировка частоты вращения</li><li>Быстрозажимной патрон для лёгкой смены оснастки</li><li>Защита от перегрузок с автоматическим отключением</li></ul>",
		},
	],
	techicalSpecifications: [
		{
			title: "Электрические параметры",
			specifications: [
				{ label: "Напряжение питания", value: "220 В" },
				{ label: "Потребляемая мощность", value: "650 Вт" },
				{ label: "Частота тока", value: "50 Гц" },
			],
		},
		{
			title: "Характеристики сверления",
			specifications: [
				{ label: "Макс. диаметр сверления (сталь)", value: "13 мм" },
				{ label: "Макс. диаметр сверления (дерево)", value: "40 мм" },
				{ label: "Макс. диаметр сверления (бетон)", value: "16 мм" },
				{ label: "Частота вращения холостого хода", value: "0–2800 об/мин" },
				{ label: "Частота ударов", value: "48000 уд/мин" },
			],
		},
		{
			title: "Конструкция",
			specifications: [
				{ label: "Тип патрона", value: "Быстрозажимной" },
				{ label: "Диаметр патрона", value: "1.5–13 мм" },
				{ label: "Регулировка оборотов", value: "Есть" },
				{ label: "Реверс", value: "Есть" },
				{ label: "Блокировка шпинделя", value: "Есть" },
			],
		},
		{
			title: "Габариты и вес",
			specifications: [
				{ label: "Вес", value: "2.1 кг" },
				{ label: "Длина сетевого кабеля", value: "2.5 м" },
				{ label: "Размеры (Д×Ш×В)", value: "300×80×200 мм" },
			],
		},
	],
};

export const SHOWCASE_DATA: ShowcaseSectionProps = {
	title: "Рекомендуем",
	button: {
		title: "В каталог",
		href: APP_ROUTES.catalog,
	},
	showcases: [
		{
			title: "Электроинструмент",
			products: [
				{
					id: 1,
					category: [
						{
							title: "Электроинструмент",
							slug: "electricity-instrument",
						},
					],
					title: "Дрель ударная Metabo SBE 650",
					description:
						"Мощность 650 Вт, патрон 1.5–13 мм, регулировка оборотов, реверс",
					sku: "MT-SBE-650",
					price: 5490,
				},
				{
					id: 2,
					category: [
						{
							title: "Электроинструмент",
							slug: "electricity-instrument",
						},
					],
					title: "Перфоратор Bosch GBH 2-26 DFR",
					description: "Энергия удара 2.7 Дж, патрон SDS-plus, 3 режима работы",
					sku: "BS-GBH-226",
					price: 8990,
				},
				{
					id: 3,
					category: [
						{
							title: "Электроинструмент",
							slug: "electricity-instrument",
						},
					],
					title: "Шуруповёрт Makita DF347DWE",
					description:
						"Аккумуляторный 18 В, крутящий момент 42 Н·м, 2 аккумулятора",
					sku: "MK-DF347",
					price: 7490,
				},
				{
					id: 4,
					category: [
						{
							title: "Электроинструмент",
							slug: "electricity-instrument",
						},
					],
					title: "УШМ Makita GA5030",
					description: "125 мм, 720 Вт, боковая рукоятка, защитный кожух",
					sku: "MK-GA5030",
					price: 3990,
				},
				{
					id: 5,
					category: [
						{
							title: "Электроинструмент",
							slug: "electricity-instrument",
						},
					],
					title: "Лобзик Bosch PST 700 E",
					description:
						"500 Вт, глубина пропила 70 мм, маятниковый ход, плавный пуск",
					sku: "BS-PST-700",
					price: 4290,
				},
				{
					id: 6,
					category: [
						{
							title: "Электроинструмент",
							slug: "electricity-instrument",
						},
					],
					title: "Пила циркулярная DeWalt DWE575",
					description:
						"1400 Вт, диск 184 мм, глубина пропила 67 мм, параллельный упор",
					sku: "DW-DWE575",
					price: 9990,
				},
				{
					id: 7,
					category: [
						{
							title: "Электроинструмент",
							slug: "electricity-instrument",
						},
					],
					title: "Фрезер ручной Makita RP0900K",
					description:
						"900 Вт, цанга 6/8 мм, регулировка глубины, плавный пуск",
					sku: "MK-RP0900",
					price: 8790,
				},
				{
					id: 8,
					category: [
						{
							title: "Электроинструмент",
							slug: "electricity-instrument",
						},
					],
					title: "Рубанок электрический Rebir IE-5708",
					description: "570 Вт, ширина строгания 82 мм, глубина 2 мм",
					sku: "RB-IE-5708",
					price: 5190,
				},
				{
					id: 9,
					category: [
						{
							title: "Электроинструмент",
							slug: "electricity-instrument",
						},
					],
					title: "Шлифмашинка ленточная Bosch GBS 75 AE",
					description: "750 Вт, скорость 350–400 м/мин, мешок для пыли",
					sku: "BS-GBS-75",
					price: 6490,
				},
				{
					id: 10,
					category: [
						{
							title: "Электроинструмент",
							slug: "electricity-instrument",
						},
					],
					title: "Фен строительный Bort BFH-2000",
					description: "2000 Вт, 2 режима, макс. 600 °C, 3 насадки",
					sku: "BR-BFH-2000",
					price: 1890,
				},
			],
		},
	],
};
