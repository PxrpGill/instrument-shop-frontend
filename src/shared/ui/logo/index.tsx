import type { PropsWithClassName } from "@/shared/types/props-with-classname";
import css from "./index.module.css";

type LogoProps = { hideAddressOnMobile?: boolean } & PropsWithClassName;

export default function Logo({ className, hideAddressOnMobile }: LogoProps) {
	return (
		<div
			className={`${css.root} ${className} ${hideAddressOnMobile && css.withoutAddressOnMobile}`.trim()}
		>
			<p className={css.logo}>Инструмент</p>
			<div className={css.verticalDivider} />
			<address className={css.address}>Ростов&#8209;на&#8209;Дону</address>
		</div>
	);
}
