import type { HeaderProps } from "../../types/header.types";
import HeaderLogo from "./header-logo";
import css from "./index.module.css";

export default function Header({ className }: HeaderProps) {
	return (
		<header className={`${css.root} ${className} container`.trim()}>
			<HeaderLogo />
		</header>
	);
}
