import { AnimationWrapper } from "@/shared/ui/animation-wrapper";

import css from "./index.module.css";
import type { ProductDetailsProps } from "./types/product-details.types";
import ProductGallery from "./ui/product-gallery";
import ProductInfo from "./ui/product-info";

export default function ProductDetails({
	className,
	id,
	gallery,
	title,
	category,
	description,
	sku,
}: ProductDetailsProps) {
	return (
		<AnimationWrapper
			as="section"
			className={`${css.root} ${className} container`.trim()}
		>
			<ProductGallery gallery={gallery} className={css.gallery} />
			<ProductInfo
				id={id}
				sku={sku}
				title={title}
				description={description}
				category={category}
			/>
		</AnimationWrapper>
	);
}
