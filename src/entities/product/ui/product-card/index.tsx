/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: <explanation> */

import { AnimationWrapper } from "@/shared/ui/animation-wrapper";
import Picture from "@/shared/ui/picture";
import type { ProductCardProps } from "../../types/product-card.types";
import css from "./index.module.css";

export default function ProductCard({
	title,
	description,
	poster,
	className,
	price,
	sku,
}: ProductCardProps) {
	return (
		<AnimationWrapper as="article" className={`${css.root} ${className}`}>
			{poster && (
				<div className={css.imageWrapper}>
					<Picture poster={poster} />
				</div>
			)}
			{sku && (
				<p className={css.sku} dangerouslySetInnerHTML={{ __html: sku }} />
			)}
			{(title || description) && (
				<div className={css.info}>
					{title && (
						<h5
							className={css.title}
							dangerouslySetInnerHTML={{ __html: title }}
						/>
					)}
					{description && (
						<p
							className={css.description}
							dangerouslySetInnerHTML={{ __html: description }}
						/>
					)}
				</div>
			)}
			<div className={css.cartWrapper}>
				{price && <p className={css.price}>{price} ₽</p>}
			</div>
		</AnimationWrapper>
	);
}
