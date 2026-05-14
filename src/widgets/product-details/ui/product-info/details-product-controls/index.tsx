import ProductStatus from "@/entities/product/ui/product-status";
import ProductControls from "@/features/product-controls";
import type { DetailsProductControlsProps } from "@/widgets/product-details/types/product-details.types";
import css from "./index.module.css";

export default function DetailsProductControls({
	className,
	price,
	status,
}: DetailsProductControlsProps) {
	return (
		<div className={`${css.root} ${className}`.trim()}>
			{status && <ProductStatus {...status} />}
			<div className={css.priceWrap}>
				{price && <p className={css.price}>{price} ₽</p>}
				<ProductControls
					cartText="Добавить в корзину"
					favoriteText="Добавить в избранное"
					className={css.controls}
				/>
			</div>
		</div>
	);
}
