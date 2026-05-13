"use client";

import { HeartIcon, UserIcon } from "@phosphor-icons/react";
import type { PropsWithClassName } from "@/shared/types/props-with-classname";
import Button from "@/shared/ui/button";
import CartButton from "./cart-button";
import css from "./index.module.css";

export default function HeaderControlNavigation({
	className,
}: PropsWithClassName) {
	return (
		<nav className={`${css.root} ${className}`}>
			<Button className={css.button}>
				<UserIcon className={css.icon} />
			</Button>
			<Button className={css.button}>
				<HeartIcon className={css.icon} />
			</Button>
			<CartButton />
		</nav>
	);
}
