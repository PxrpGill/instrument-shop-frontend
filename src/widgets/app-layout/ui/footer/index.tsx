import { FOOTER_LINKS } from "../../models/footer.constants";
import type { FooterProps } from "../../types/footer.types";

import css from "./index.module.css";
import MiddleFooter from "./middle-footer";
import TopFooter from "./top-footer";

export default function Footer({ className }: FooterProps) {
	return (
		<footer className={`${css.root} ${className} container`.trim()}>
			<TopFooter telephone="+7 (938) 111-99-77" />
			<MiddleFooter links={FOOTER_LINKS} />
		</footer>
	);
}
