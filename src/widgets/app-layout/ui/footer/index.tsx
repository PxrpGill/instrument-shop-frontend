"use client";

import { useAppLayoutContext } from "../../models/app-layout-context";
import { FOOTER_LINKS } from "../../models/footer.constants";
import type { FooterProps } from "../../types/footer.types";
import BottomFooter from "./bottom-footer";
import css from "./index.module.css";
import MiddleFooter from "./middle-footer";
import TopFooter from "./top-footer";

export default function Footer({ className }: FooterProps) {
	const { footerRef } = useAppLayoutContext();

	return (
		<footer
			className={`${css.root} ${className} container`.trim()}
			ref={footerRef}
		>
			<TopFooter telephone="+7 (938) 111-99-77" />
			<MiddleFooter links={FOOTER_LINKS} />
			<BottomFooter />
		</footer>
	);
}
