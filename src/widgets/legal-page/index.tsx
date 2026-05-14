/** biome-ignore-all lint/suspicious/useIterableCallbackReturn: <explanation> */

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { APP_ROUTES } from "@/shared/config/app-routes";
import css from "./index.module.css";
import type { LegalPageProps } from "./types/legal-page.types";

const RELATED_LINKS = [
	{ href: APP_ROUTES.privacyPolicy, label: "Политика конфиденциальности" },
	{ href: APP_ROUTES.userAgreement, label: "Пользовательское соглашение" },
	{
		href: APP_ROUTES.personalDataConsent,
		label: "Согласие на обработку персональных данных",
	},
];

export default function LegalPage({
	title,
	lastUpdated,
	sections,
}: LegalPageProps) {
	const [activeId, setActiveId] = useState<string>(sections[0]?.id ?? "");
	const sectionRefs = useRef<Map<string, HTMLElement>>(new Map());
	const pathname = usePathname();

	useEffect(() => {
		const observers: IntersectionObserver[] = [];

		sections.forEach(({ id }) => {
			const el = sectionRefs.current.get(id);
			if (!el) return;

			const observer = new IntersectionObserver(
				([entry]) => {
					if (entry.isIntersecting) setActiveId(id);
				},
				{ rootMargin: "-30% 0px -60% 0px" },
			);

			observer.observe(el);
			observers.push(observer);
		});

		return () => observers.forEach((o) => o.disconnect());
	}, [sections]);

	function scrollTo(id: string) {
		sectionRefs.current.get(id)?.scrollIntoView({ behavior: "smooth" });
	}

	return (
		<main className={css.root}>
			<div className={`${css.inner} container`}>
				<header className={css.header}>
					<h1 className={css.title}>{title}</h1>
					<time className={css.date}>Обновлено: {lastUpdated}</time>
				</header>

				<div className={css.layout}>
					<nav className={css.sidebar}>
						<ol className={css.navList}>
							{sections.map(({ id, title: sectionTitle }, index) => (
								<li key={id}>
									<button
										type="button"
										className={`${css.navItem} ${activeId === id ? css.navItemActive : ""}`}
										onClick={() => scrollTo(id)}
									>
										<span className={css.navIndex}>{index + 1}.</span>
										{sectionTitle}
									</button>
								</li>
							))}
						</ol>
					</nav>

					<div className={css.content}>
						{sections.map(({ id, title: sectionTitle, content }) => (
							<section
								key={id}
								id={id}
								ref={(el) => {
									if (el) sectionRefs.current.set(id, el);
									else sectionRefs.current.delete(id);
								}}
								className={css.section}
							>
								<h2 className={css.sectionTitle}>{sectionTitle}</h2>
								<div className={css.sectionBody}>
									{content.split("\n\n").map((paragraph, i) => (
										// biome-ignore lint/suspicious/noArrayIndexKey: static content
										<p key={i} className={css.paragraph}>
											{paragraph}
										</p>
									))}
								</div>
							</section>
						))}

						<footer className={css.relatedDocs}>
							<p className={css.relatedTitle}>Связанные документы</p>
							<div className={css.relatedLinks}>
								{RELATED_LINKS.filter(({ href }) => href !== pathname).map(
									({ href, label }) => (
										<Link key={href} href={href} className={css.relatedLink}>
											{label}
										</Link>
									),
								)}
							</div>
						</footer>
					</div>
				</div>
			</div>
		</main>
	);
}
