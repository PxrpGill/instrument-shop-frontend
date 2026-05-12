"use client";

import { useScrollDown } from "@/shared/hooks/use-scroll-down";
import Logo from "@/shared/ui/logo";
import type { HeaderProps } from "../../types/header.types";
import HeaderNavigation from "./header-navigation";
import css from "./index.module.css";

export default function Header({ className }: HeaderProps) {
	const isScrolledDown = useScrollDown();

	return (
		<header
			className={`${css.root} ${className} ${isScrolledDown && css.hidden} container`.trim()}
		>
			<div className={css.wrapper}>
				<Logo hideAddressOnMobile className={css.logo} />
				<HeaderNavigation className={css.nav} />
			</div>
		</header>
	);
}
