"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { APP_ROUTES } from "@/shared/config/app-routes";
import { COOKIES_PANEL_TOKENS } from "@/shared/config/general-cookies-tokens";
import { CookiesManager } from "@/shared/lib/cookies-manager";
import Button from "@/shared/ui/button";
import { useAppLayoutContext } from "../../models/app-layout-context";
import css from "./index.module.css";

export default function CookiesPanel() {
	const { isFooterVisible } = useAppLayoutContext();
	const [isOpen, toggleOpen] = useState<boolean>(false);
	const timeoutRef = useRef<number>(0);

	useEffect(() => {
		if (timeoutRef.current) clearTimeout(timeoutRef.current);

		if (
			CookiesManager.get(COOKIES_PANEL_TOKENS.token) ===
			COOKIES_PANEL_TOKENS.value
		)
			return;

		timeoutRef.current = Number(
			setTimeout(() => {
				toggleOpen(true);
			}, 500),
		);
	}, []);

	const handleButtonClick = () => {
		CookiesManager.set(COOKIES_PANEL_TOKENS.token, COOKIES_PANEL_TOKENS.value);

		toggleOpen(false);
	};

	return (
		<dialog
			className={`${css.root} ${isOpen && !isFooterVisible && css.open}`.trim()}
			open
		>
			<div className={css.contentWrapper}>
				<p className={css.cookiesText}>
					Этот сайт использует cookies, чтобы наш сайт стал лучше&nbsp;&mdash;
					более персонализированным и&nbsp;удобным для вас.
					<br /> Пользуясь сайтом, вы&nbsp;принимаете нашу{" "}
					<Link href={APP_ROUTES.privacyPolicy} target="_blank">
						политику конфиденциальности
					</Link>{" "}
					и&nbsp;даете{" "}
					<Link href={APP_ROUTES.personalDataConsent} target="_blank">
						согласие на&nbsp;обработку персональных данных
					</Link>
					.
				</p>
				<div className={css.buttons}>
					<Button theme="light" onClick={handleButtonClick}>
						Принять
					</Button>
					<Button theme="light" href="about:blank">
						Отклонить
					</Button>
				</div>
			</div>
		</dialog>
	);
}
