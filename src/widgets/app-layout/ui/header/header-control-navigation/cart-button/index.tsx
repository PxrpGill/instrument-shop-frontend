import { BasketIcon } from "@phosphor-icons/react";
import type { PropsWithClassName } from "@/shared/types/props-with-classname";
import Button from "@/shared/ui/button";
import css from "./index.module.css";

export default function CartButton({ className }: PropsWithClassName) {
	return (
		<div className={`${css.root} ${className}}`}>
			<Button className={css.button} ariaLabel="Открыть корзину">
				<BasketIcon className={css.icon} />
			</Button>
			<p className={css.price}>1200 ₽</p>
		</div>
	);
}
