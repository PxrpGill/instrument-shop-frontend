import ProductDetails from "@/widgets/product-details";
import css from "./index.module.css";
import { SINGLE_PRODUCT_DATA } from "./models/single-product-page.constants";

export default function SingleProductPage() {
	return (
		<main>
			<ProductDetails {...SINGLE_PRODUCT_DATA} className={css.productDetails} />
		</main>
	);
}
