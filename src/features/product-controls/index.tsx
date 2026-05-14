"use client";

import { BasketIcon, HeartIcon } from "@phosphor-icons/react";
import Button from "@/shared/ui/button";

import css from "./index.module.css";
import type { ProductControlsProps } from "./types/product-controls.types";

export default function ProductControls({ className }: ProductControlsProps) {
	return (
		<div className={`${css.buttons} ${className}`.trim()}>
			<Button className={css.favoriteButton}>
				<HeartIcon className={css.icon} />
			</Button>
			<Button leftIcon={<BasketIcon className={css.icon} />}>Добавить</Button>
		</div>
	);
}
