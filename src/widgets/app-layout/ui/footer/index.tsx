import type { FooterProps } from "../../types/footer.types";

import css from "./index.module.css";

export default function Footer({ className }: FooterProps) {
	return <footer className={`${css.root} ${className}`.trim()}></footer>;
}
