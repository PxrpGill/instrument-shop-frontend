import Link from "next/link";
import { APP_ROUTES } from "@/shared/config/app-routes";
import { YANDEX_MAP_LINK } from "@/shared/config/yandex-map-link.constants";
import type { PropsWithClassName } from "@/shared/types/props-with-classname";
import css from "./index.module.css";

type LogoProps = { hideAddressOnMobile?: boolean } & PropsWithClassName;

export default function Logo({ className, hideAddressOnMobile }: LogoProps) {
	return (
		<div
			className={`${css.root} ${className} ${hideAddressOnMobile && css.withoutAddressOnMobile}`.trim()}
		>
			<Link href={APP_ROUTES.base} className={css.logo}>
				Инструмент
			</Link>
			<div className={css.verticalDivider} />
			<address className={css.address}>
				<Link href={YANDEX_MAP_LINK} className={css.link} target="_blank">
					Ростов&#8209;на&#8209;Дону
				</Link>
			</address>
		</div>
	);
}
