import type { HeaderProps } from "../../types/header.types";
import css from "./index.module.css";
import Logo from "../../../../shared/ui/logo";

export default function Header({ className }: HeaderProps) {
	return (
		<header className={`${css.root} ${className} container`.trim()}>
			<Logo />
		</header>
	);
}
