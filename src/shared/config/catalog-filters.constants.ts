import type { CatalogFiltersProps } from "@/features/catalog-filters/types/catalog-filters.types";

export const CATALOG_FILTERS_SETTINGS: CatalogFiltersProps = {
	priceFilter: {
		startRange: 1000,
		endRange: 90_000,
	},
	categoriesFilter: {
		categories: [
			{
				title: "Дрели и шуруповёрты",
				slug: "drills-and-screwdrivers",
			},
			{
				title: "Болгарки и пилы",
				slug: "grinders-and-saws",
			},
			{
				title: "Перфораторы и отбойники",
				slug: "hammers-and-breakers",
			},
			{
				title: "Шлифовальные машины",
				slug: "sanding-machines",
			},
			{
				title: "Измерительные приборы",
				slug: "measuring-tools",
			},
			{
				title: "Сварочное оборудование",
				slug: "welding-equipment",
			},
			{
				title: "Компрессоры и пневматика",
				slug: "compressors-and-pneumatics",
			},
			{
				title: "Садовый инструмент",
				slug: "garden-tools",
			},
			{
				title: "Строительный крепёж",
				slug: "construction-fasteners",
			},
			{
				title: "Оснастка и расходники",
				slug: "accessories-and-consumables",
			},
		],
	},
};
