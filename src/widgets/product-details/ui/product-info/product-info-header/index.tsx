/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: <explanation> */

import type { ProductInfoHeaderProps } from "@/widgets/product-details/types/product-details.types";

import css from "./index.module.css";

export default function ProductInfoHeader({
	title,
	description,
	sku,
	className,
}: ProductInfoHeaderProps) {
	return (
		<div className={`${css.root} ${className}`}>
			{title && (
				<h4 dangerouslySetInnerHTML={{ __html: title }} className={css.title} />
			)}
			{description && (
				<p
					dangerouslySetInnerHTML={{ __html: description }}
					className={css.description}
				/>
			)}
			{sku && <p className={css.sku}>Артикул: {sku}</p>}
		</div>
	);
}
