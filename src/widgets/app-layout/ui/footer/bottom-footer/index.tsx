import Link from "next/link";
import { APP_ROUTES } from "@/shared/config/app-routes";
import type { BottomFooterProps } from "@/widgets/app-layout/types/footer.types";
import css from "./index.module.css";

export default function BottomFooter({ className }: BottomFooterProps) {
	return (
		<nav className={`${css.root} ${className}`.trim()}>
			<div className={css.group}>
				<Link className={css.link} href={APP_ROUTES.privacyPolicy}>
					Политика конфиденциальности
				</Link>
				<Link className={css.link} href={APP_ROUTES.userAgreement}>
					Обработка персональных данных
				</Link>
			</div>
			<time className={css.time}>Инструмент, {new Date().getFullYear()}</time>
		</nav>
	);
}
