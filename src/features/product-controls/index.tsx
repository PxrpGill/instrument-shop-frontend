"use client";

import { BasketIcon, HeartIcon } from "@phosphor-icons/react";
import Button from "@/shared/ui/button";

import css from "./index.module.css";
import type { ProductControlsProps } from "./types/product-controls.types";

export default function ProductControls({
	className,
	cartText = "Добавить",
	favoriteText,
}: ProductControlsProps) {
	return (
		<div className={`${css.buttons} ${className}`.trim()}>
			<Button
				className={`${css.favoriteButton} ${!favoriteText && css.withoutText}`.trim()}
				leftIcon={<HeartIcon className={css.icon} />}
				ariaLabel="Добавить в избранное"
			>
				{favoriteText}
			</Button>
			<Button
				leftIcon={<BasketIcon className={css.icon} />}
				ariaLabel="Добавить в корзину"
			>
				{cartText}
			</Button>
		</div>
	);
}
