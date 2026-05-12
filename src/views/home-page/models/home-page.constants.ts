import { APP_ROUTES } from "@/shared/config/app-routes";
import type { AboutCompanySectionProps } from "@/widgets/about-company-section/types/about-company-section.types";
import type { HeroSectionProps } from "@/widgets/hero-section/types/hero-section.types";
import type { NewsCtaSectionProps } from "@/widgets/news-cta-section/types/news-cta-section.types";
import type { ReviewsSectionProps } from "@/widgets/reviews-section/types/reviews-section.types";
import type { ShowcaseSectionProps } from "@/widgets/showcase-section/types/showcase-section.types";

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

export const ABOUT_COMPANY_DATA: AboutCompanySectionProps = {
	title: "Немного о&nbsp;нас",
	content:
		"<h3>Мы&nbsp;за&nbsp;бескомпромиссное качество и&nbsp;широкий ассортимент</h3><p>Наш каталог включает много позиций: от&nbsp;бытовых шуруповертов до&nbsp;тяжелого промышленного оборудования и&nbsp;высокоточных измерительных приборов. Мы&nbsp;тщательно отбираем каждую модель, ориентируясь на&nbsp;долговечность, эргономику и&nbsp;соответствие международным стандартам безопасности. С&nbsp;нами вы&nbsp;можете быть уверены, что инструмент не&nbsp;подведет в&nbsp;самый ответственный момент.</p><h3>Сервис, выходящий за&nbsp;рамки простой продажи</h3><p>Мы&nbsp;верим, что покупка инструмента&nbsp;&mdash; это только начало сотрудничества. Наши специалисты всегда готовы провести профессиональную консультацию, помочь с&nbsp;подбором расходных материалов или организовать быструю доставку прямо на&nbsp;объект.</p><h3>Инновации и&nbsp;устойчивое развитие</h3><p>Строительные технологии не&nbsp;стоят на&nbsp;месте, и&nbsp;мы&nbsp;развиваемся вместе с&nbsp;ними. Мы&nbsp;регулярно обновляем ассортимент новинками аккумуляторного инструмента, внедряем цифровые системы управления заказами и&nbsp;предлагаем гибкие условия для постоянных партнеров. Наша цель&nbsp;&mdash; сделать процесс приобретения и&nbsp;эксплуатации инструмента максимально простым, эффективным и&nbsp;выгодным для каждого клиента.</p>",

	poster: {
		webp: {
			src: "/mock/about-company/about-company.webp",
		},
	},
};

export const REVIEWS_DATA: ReviewsSectionProps = {
	title: "Отзывы покупателей",
	reviews: [
		{
			title: "Надежный инструмент для ежедневной работы",
			description:
				"Заказывал здесь комплект аккумуляторного инструмента для бригады. Доставили быстро, всё оригинальное, с&nbsp;гарантией. Работаем на&nbsp;объектах уже третий месяц&nbsp;&mdash; полет нормальный. Особенно порадовала цена на&nbsp;расходники, теперь буду закупаться только у&nbsp;вас.",
			author: {
				icon: "/mock/reviews/1.png",
				fullName: "Алексей Смирнов",
			},
			grade: 5,
		},
		{
			title: "Идеально для ремонта в&nbsp;квартире",
			description:
				"Брал перфоратор и&nbsp;лазерный уровень для самостоятельного ремонта. Инструмент очень удобный, в&nbsp;руке лежит как влитой. Отдельное спасибо консультантам: помогли выбрать модель, которая не&nbsp;перегревается при долгой работе, и&nbsp;при этом не&nbsp;стоит как крыло самолета.",
			author: {
				icon: "/mock/reviews/2.png",
				fullName: "Дмитрий Волков",
			},
			grade: 5,
		},
		{
			title: "Отличное пополнение для гаража",
			description:
				"Купил торцовочную пилу для строительства беседки на&nbsp;даче. Рез ровный, люфтов нет, настройки точные прямо из&nbsp;коробки. Сайт очень понятный, легко нашел нужные характеристики. Доставка в&nbsp;область заняла всего два дня, курьер заранее позвонил. Рекомендую!",
			author: {
				icon: "/mock/reviews/3.png",
				fullName: "Игорь Николаев",
			},
			grade: 5,
		},
		{
			title: "Качество сервиса на&nbsp;высоте",
			description:
				"Долго искал конкретную модель промышленного пылесоса, здесь она оказалась в&nbsp;наличии по&nbsp;адекватной цене. Оформил заказ через корзину, менеджер перезвонил буквально через 10&nbsp;минут, чтобы уточнить детали и&nbsp;подтвердить бронь. Оплачивал уже при получении после проверки товара. Упаковано было на&nbsp;совесть, даже коробка не&nbsp;помялась. Приятно иметь дело с&nbsp;профессионалами своего дела.",
			author: {
				icon: "/mock/reviews/4.png",
				fullName: "Максим Соколов",
			},
			grade: 5,
		},
	],
};

export const SHOWCASE_DATA: ShowcaseSectionProps = {
	title: "Наши товары",
	button: {
		title: "Перейти в каталог",
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
		{
			title: "Ручной инструмент",
			products: [
				{
					id: 11,
					category: [
						{
							title: "Ручной инструмент",
							slug: "hand-instrument",
						},
					],
					title: "Молоток слесарный Sturm 500 г",
					description:
						"Масса 500 г, рукоятка стеклопластик, ударная часть закалённая",
					sku: "ST-HM-500",
					price: 690,
				},
				{
					id: 12,
					category: [
						{
							title: "Ручной инструмент",
							slug: "hand-instrument",
						},
					],
					title: "Набор отвёрток Kraftool 6 предметов",
					description:
						"Шлицевые и крестовые, наконечники из хромомолибденовой стали",
					sku: "KF-SD-6",
					price: 890,
				},
				{
					id: 13,
					category: [
						{
							title: "Ручной инструмент",
							slug: "hand-instrument",
						},
					],
					title: "Ключ разводной Stanley 12 дюймов",
					description: "Длина 300 мм, зев до 36 мм, хромированное покрытие",
					sku: "SN-WR-12",
					price: 1290,
				},
				{
					id: 14,
					category: [
						{
							title: "Ручной инструмент",
							slug: "hand-instrument",
						},
					],
					title: "Пассатижи NEO 1-00340",
					description:
						"Длина 200 мм, двухкомпонентные рукоятки, индукционная закалка",
					sku: "NE-PL-200",
					price: 590,
				},
				{
					id: 15,
					category: [
						{
							title: "Ручной инструмент",
							slug: "hand-instrument",
						},
					],
					title: "Рулетка Stanley PowerLock 5 м",
					description: "Длина 5 м, ширина ленты 25 мм, магнитный наконечник",
					sku: "SN-TL-5M",
					price: 790,
				},
				{
					id: 16,
					category: [
						{
							title: "Ручной инструмент",
							slug: "hand-instrument",
						},
					],
					title: "Нож строительный OLPA 18 мм",
					description: "Автоматический фиксатор лезвия, металлический корпус",
					sku: "OL-KN-18",
					price: 350,
				},
				{
					id: 17,
					category: [
						{
							title: "Ручной инструмент",
							slug: "hand-instrument",
						},
					],
					title: "Стамеска Irwin 20 мм",
					description:
						"Ширина 20 мм, рукоятка ударопрочная, лезвие из легированной стали",
					sku: "IR-CH-20",
					price: 490,
				},
				{
					id: 18,
					category: [
						{
							title: "Ручной инструмент",
							slug: "hand-instrument",
						},
					],
					title: "Ножницы по металлу Kraftool 250 мм",
					description: "Режут лист до 1.2 мм, правый рез, эргономичные ручки",
					sku: "KF-MS-250",
					price: 890,
				},
				{
					id: 19,
					category: [
						{
							title: "Ручной инструмент",
							slug: "hand-instrument",
						},
					],
					title: "Тиски слесарные Sturm 100 мм",
					description: "Ширина губок 100 мм, ход 80 мм, поворотные 360°",
					sku: "ST-VC-100",
					price: 2490,
				},
				{
					id: 20,
					category: [
						{
							title: "Ручной инструмент",
							slug: "hand-instrument",
						},
					],
					title: "Набор напильников Stanley 5 шт.",
					description:
						"Различные формы сечения, насечка №1–3, деревянная рукоятка",
					sku: "SN-FL-5",
					price: 650,
				},
			],
		},
		{
			title: "Измерительный инструмент",
			products: [
				{
					id: 20,
					category: [
						{
							title: "Измерительный инструмент",
							slug: "izmeritelniy-instrument",
						},
					],
					title: "Лазерный уровень Bosch GLL 3-60 CG",
					description:
						"Зелёный луч, 3 плоскости, дальность 60 м, самовыравнивание",
					sku: "BS-GLL-360",
					price: 18990,
				},
				{
					id: 21,
					category: [
						{
							title: "Измерительный инструмент",
							slug: "izmeritelniy-instrument",
						},
					],
					title: "Дальномер лазерный Makita LD080P",
					description: "Дальность 80 м, точность ±1.5 мм, память 20 измерений",
					sku: "MK-LD080",
					price: 6990,
				},
				{
					id: 23,
					category: [
						{
							title: "Измерительный инструмент",
							slug: "izmeritelniy-instrument",
						},
					],
					title: "Уровень строительный Kapro 2 м",
					description: "Длина 200 см, 3 глазка, магниты, ударопрочный корпус",
					sku: "KP-LV-200",
					price: 3490,
				},
				{
					id: 24,
					category: [
						{
							title: "Измерительный инструмент",
							slug: "izmeritelniy-instrument",
						},
					],
					title: "Штангенциркуль электронный Norgau 150 мм",
					description: "Диапазон 0–150 мм, точность 0.01 мм, ЖК-дисплей",
					sku: "NG-SC-150",
					price: 1890,
				},
				{
					id: 25,
					category: [
						{
							title: "Измерительный инструмент",
							slug: "izmeritelniy-instrument",
						},
					],
					title: "Угольник столярный Stanley 300 мм",
					description:
						"Длина 300 мм, точный прямой угол, сталь с матовым хромом",
					sku: "SN-SQ-300",
					price: 690,
				},
				{
					id: 26,
					category: [
						{
							title: "Измерительный инструмент",
							slug: "izmeritelniy-instrument",
						},
					],
					title: "Угломер цифровой Bosch GAM 220",
					description: "Диапазон 0–360°, точность 0.1°, складная ножка",
					sku: "BS-GAM-220",
					price: 3990,
				},
				{
					id: 27,
					category: [
						{
							title: "Измерительный инструмент",
							slug: "izmeritelniy-instrument",
						},
					],
					title: "Влагомер древесины Testo 606-2",
					description:
						"Измерение влажности древесины 5–50%, стройматериалов 1–50%",
					sku: "TS-606-2",
					price: 5490,
				},
				{
					id: 28,
					category: [
						{
							title: "Измерительный инструмент",
							slug: "izmeritelniy-instrument",
						},
					],
					title: "Толщиномер лакокрасочного покрытия Etari ET-111",
					description: "Диапазон 0–1200 мкм, для металла, авторежим",
					sku: "ET-ET-111",
					price: 2490,
				},
				{
					id: 29,
					category: [
						{
							title: "Измерительный инструмент",
							slug: "izmeritelniy-instrument",
						},
					],
					title: "Отвес магнитный Kraftool 400 г",
					description: "Масса 400 г, длина шнура 5 м, магнитное основание",
					sku: "KF-PB-400",
					price: 490,
				},
				{
					id: 30,
					category: [
						{
							title: "Измерительный инструмент",
							slug: "izmeritelniy-instrument",
						},
					],
					title: "Тепловизор инфракрасный Fluke TiS20+",
					description:
						"Разрешение 120×90, диапазон −20…+350 °C, лазерный целеуказатель",
					sku: "FL-TIS-20",
					price: 74990,
				},
			],
		},
	],
};

export const NEWS_CTA_SECTION_DATA: NewsCtaSectionProps = {
	title: "Жизнь нашего магазина",
	description:
		"Мы&nbsp;постоянно обновляем ассортимент и&nbsp;делимся внутренними новостями: от&nbsp;графиков работы в&nbsp;праздники до&nbsp;фотоотчетов с&nbsp;испытаний нового оборудования.",
	button: {
		title: "Смотреть новости",
		href: APP_ROUTES.news,
	},
	poster: {
		webp: {
			src: "/mock/hero/hero.webp",
		},
	},
};
