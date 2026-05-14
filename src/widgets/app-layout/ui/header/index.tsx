"use client";

import { useEffect, useRef } from "react";
import { useScrollDown } from "@/shared/hooks/use-scroll-down";
import Logo from "@/shared/ui/logo";
import { useAppLayoutContext } from "../../models/app-layout-context";
import type { HeaderProps } from "../../types/header.types";
import HeaderControlNavigation from "./header-control-navigation";
import HeaderMainNavigation from "./header-control-navigation/header-main-navigation";
import css from "./index.module.css";

export default function Header({ className }: HeaderProps) {
	const isScrolledDown = useScrollDown();
	const { isHeaderOpened } = useAppLayoutContext();
	const headerRef = useRef<HTMLElement>(null);

	useEffect(() => {
		const header = headerRef.current;
		if (!header) return;
		header.style.setProperty("--_collapsed-h", `${header.offsetHeight}px`);
	}, []);

	return (
		<header
			ref={headerRef}
			className={`${css.root} ${className} ${isScrolledDown && css.hidden} ${isHeaderOpened && css.opened} container`.trim()}
		>
			<div className={css.wrapper}>
				<div className={css.mainHeader}>
					<Logo hideAddressOnMobile className={css.logo} />
					<HeaderMainNavigation className={css.mainNav} />
					<HeaderControlNavigation className={css.nav} />
				</div>
			</div>
		</header>
	);
}
