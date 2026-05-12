import Logo from "@/shared/ui/logo";
import type { HeaderProps } from "../../types/header.types";
import HeaderNavigation from "./header-navigation";
import css from "./index.module.css";

export default function Header({ className }: HeaderProps) {
	return (
		<header className={`${css.root} ${className} container`.trim()}>
			<div className={css.wrapper}>
				<Logo hideAddressOnMobile className={css.logo} />
				<HeaderNavigation className={css.nav} />
			</div>
		</header>
	);
}
