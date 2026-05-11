import Logo from "@/shared/ui/logo";
import type { HeaderProps } from "../../types/header.types";
import HeaderNavigation from "./header-navigation";
import css from "./index.module.css";

export default function Header({ className }: HeaderProps) {
	return (
		<header className={`${css.root} ${className} container`.trim()}>
			<Logo hideAddressOnMobile />
			<HeaderNavigation />
		</header>
	);
}
