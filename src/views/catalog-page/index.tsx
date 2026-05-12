import CatalogSection from "@/widgets/catalog-section";
import css from "./index.module.css";
import { CATALOG_DATA } from "./models/catalog-page.constants";

export default function CatalogPage() {
	return (
		<main className={css.root}>
			<CatalogSection {...CATALOG_DATA} className={css.catalog} />
		</main>
	);
}
