import ProductDetails from "@/widgets/product-details";
import ShowcaseSection from "@/widgets/showcase-section";
import css from "./index.module.css";
import {
	SHOWCASE_DATA,
	SINGLE_PRODUCT_DATA,
} from "./models/single-product-page.constants";

export default function SingleProductPage() {
	return (
		<main>
			<ProductDetails {...SINGLE_PRODUCT_DATA} className={css.productDetails} />
			<ShowcaseSection {...SHOWCASE_DATA} />
		</main>
	);
}
