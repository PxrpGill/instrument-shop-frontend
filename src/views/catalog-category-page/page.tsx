import { CATALOG_FILTERS_SETTINGS } from "@/shared/config/catalog-filters.constants";
import CatalogSection from "@/widgets/catalog-section";
import css from "./index.module.css";
import { CATALOG_DATA } from "./models/catalog-category-page.constants";

export default function CatalogCategoryPage() {
	return (
		<main>
			<CatalogSection
				{...CATALOG_DATA}
				className={css.catalog}
				filterBlock={{ priceFilter: CATALOG_FILTERS_SETTINGS.priceFilter }}
			/>
		</main>
	);
}
