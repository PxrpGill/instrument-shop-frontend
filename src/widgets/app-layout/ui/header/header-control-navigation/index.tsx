"use client";

import { HeartIcon, UserIcon } from "@phosphor-icons/react";
import type { PropsWithClassName } from "@/shared/types/props-with-classname";
import Button from "@/shared/ui/button";
import { useAppLayoutContext } from "@/widgets/app-layout/models/app-layout-context";
import CartButton from "./cart-button";
import css from "./index.module.css";

export default function HeaderControlNavigation({
	className,
}: PropsWithClassName) {
	const { toggleHeaderOpen, isHeaderOpened } = useAppLayoutContext();

	return (
		<nav className={`${css.root} ${className}`}>
			<Button
				className={css.button}
				onClick={() => toggleHeaderOpen(!isHeaderOpened)}
			>
				<UserIcon className={css.icon} />
			</Button>
			<Button
				className={css.button}
				onClick={() => toggleHeaderOpen(!isHeaderOpened)}
			>
				<HeartIcon className={css.icon} />
			</Button>
			<CartButton />
		</nav>
	);
}
