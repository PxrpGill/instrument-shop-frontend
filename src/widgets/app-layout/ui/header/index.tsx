import type { HeaderProps } from "../../types/header.types";

import css from "./index.module.css";

export default function Header({ className }: HeaderProps) {
	return (
		<header className={`${css.root} ${className}`.trim()}>
			<p className={css.logo}>Инструмент</p>
		</header>
	);
}
