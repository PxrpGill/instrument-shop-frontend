# Legal Pages Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create three legal pages (Privacy Policy, User Agreement, Personal Data Consent) using a single shared `LegalPage` widget with a sticky sidebar and full Russian legal text.

**Architecture:** Shared widget `widgets/legal-page` accepts `title`, `lastUpdated`, and `sections[]`. Each view passes its own constants. `IntersectionObserver` tracks active section for sidebar highlighting. Three new view constants files hold full document text with company placeholders.

**Tech Stack:** Next.js 16, React 19, TypeScript, CSS Modules, PostCSS (postcss-mixins, postcss-nested, postcss-simple-vars), FSD architecture.

---

## File Map

| Action | Path | Responsibility |
|---|---|---|
| Modify | `src/shared/config/app-routes.ts` | Add `personalDataConsent` route |
| Create | `src/widgets/legal-page/types/legal-page.types.ts` | `LegalSection` and `LegalPageProps` types |
| Create | `src/widgets/legal-page/index.tsx` | Shared widget — sidebar + content render |
| Create | `src/widgets/legal-page/index.module.css` | Two-column layout, sidebar sticky, active state |
| Create | `src/views/privacy-policy-page/models/privacy-policy.constants.ts` | Privacy Policy sections text |
| Modify | `src/views/privacy-policy-page/index.tsx` | Render `<LegalPage>` with constants |
| Create | `src/views/user-agreement-page/models/user-agreement.constants.ts` | User Agreement sections text |
| Modify | `src/views/user-agreement-page/index.tsx` | Render `<LegalPage>` with constants |
| Create | `src/views/personal-data-consent-page/index.tsx` | New view — render `<LegalPage>` |
| Create | `src/views/personal-data-consent-page/models/personal-data-consent.constants.ts` | Consent sections text |
| Create | `src/app/personal-data-consent/page.tsx` | New Next.js route |

---

## Task 1: Add route constant

**Files:**
- Modify: `src/shared/config/app-routes.ts`

- [ ] **Step 1: Add `personalDataConsent` to APP_ROUTES**

```ts
export const APP_ROUTES = {
	base: "/",
	privacyPolicy: "/privacy-policy",
	userAgreement: "/user-agreement",
	personalDataConsent: "/personal-data-consent",
	catalog: "/catalog",
	news: "/news",
	about: "/about-us",
	feedback: "/feedback",
	buyers: "/buyers",
} as const;
```

- [ ] **Step 2: Commit**

```bash
git add src/shared/config/app-routes.ts
git commit -m "feat: add personalDataConsent route"
```

---

## Task 2: Create LegalPage widget types

**Files:**
- Create: `src/widgets/legal-page/types/legal-page.types.ts`

- [ ] **Step 1: Create the types file**

```ts
export type LegalSection = {
	id: string;
	title: string;
	content: string;
};

export type LegalPageProps = {
	title: string;
	lastUpdated: string;
	sections: LegalSection[];
};
```

- [ ] **Step 2: Commit**

```bash
git add src/widgets/legal-page/types/legal-page.types.ts
git commit -m "feat: add LegalPage types"
```

---

## Task 3: Create LegalPage widget — component

**Files:**
- Create: `src/widgets/legal-page/index.tsx`

- [ ] **Step 1: Create the widget**

```tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import type { LegalPageProps } from "./types/legal-page.types";
import css from "./index.module.css";

const RELATED_LINKS = [
	{ href: "/privacy-policy", label: "Политика конфиденциальности" },
	{ href: "/user-agreement", label: "Пользовательское соглашение" },
	{ href: "/personal-data-consent", label: "Согласие на обработку персональных данных" },
];

export default function LegalPage({ title, lastUpdated, sections }: LegalPageProps) {
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
								{RELATED_LINKS.filter(({ href }) => href !== pathname).map(({ href, label }) => (
									<Link key={href} href={href} className={css.relatedLink}>
										{label}
									</Link>
								))}
							</div>
						</footer>
					</div>
				</div>
			</div>
		</main>
	);
}
```

- [ ] **Step 2: Commit**

```bash
git add src/widgets/legal-page/index.tsx
git commit -m "feat: add LegalPage widget component"
```

---

## Task 4: Create LegalPage widget — styles

**Files:**
- Create: `src/widgets/legal-page/index.module.css`

- [ ] **Step 1: Create the styles**

```css
.root {
	@mixin responsive padding-block, 40, 80;
}

.inner {
	@mixin responsive gap, 20, 40;

	display: flex;
	flex-direction: column;
}

.header {
	@mixin responsive gap, 6, 10;

	display: flex;
	flex-direction: column;
}

.title {
	@mixin h2;
}

.date {
	@mixin small;

	color: var(--color-text-muted);
}

.layout {
	@mixin responsive gap, 20, 60;

	display: grid;
	grid-template-columns: 220px 1fr;
	align-items: start;

	@media (max-width: $mobile) {
		grid-template-columns: 1fr;
	}
}

/* Sidebar */

.sidebar {
	position: sticky;
	top: 20px;

	@media (max-width: $mobile) {
		display: none;
	}
}

.navList {
	@mixin responsive gap, 4, 6;

	display: flex;
	flex-direction: column;
}

.navItem {
	@mixin small;
	@mixin transitionOptions;

	display: flex;
	gap: 6px;
	text-align: left;
	color: var(--color-text-muted);
	transition-property: color;
	cursor: pointer;
	line-height: 1.4;

	@media (hover: hover) {
		&:hover {
			color: var(--color-text-secondary);
		}
	}
}

.navItemActive {
	color: var(--color-accent);

	@media (hover: hover) {
		&:hover {
			color: var(--color-accent-hover);
		}
	}
}

.navIndex {
	flex-shrink: 0;
}

/* Content */

.content {
	@mixin responsive gap, 30, 50;

	display: flex;
	flex-direction: column;
}

.section {
	@mixin responsive gap, 12, 20;

	display: flex;
	flex-direction: column;
	scroll-margin-top: 20px;
}

.sectionTitle {
	@mixin h4;
}

.sectionBody {
	@mixin responsive gap, 8, 12;

	display: flex;
	flex-direction: column;
}

.paragraph {
	@mixin body;

	line-height: 1.7;
	color: var(--color-text-secondary);
}

/* Related docs */

.relatedDocs {
	@mixin responsive gap, 10, 16;
	@mixin responsive padding-block-start, 20, 30;

	display: flex;
	flex-direction: column;
	border-top: 1px solid var(--color-border);
}

.relatedTitle {
	@mixin small;

	color: var(--color-text-muted);
	text-transform: uppercase;
	letter-spacing: 0.05em;
}

.relatedLinks {
	@mixin responsive gap, 8, 12;

	display: flex;
	flex-wrap: wrap;
}

.relatedLink {
	@mixin small;
	@mixin transitionOptions;

	color: var(--color-accent);
	transition-property: opacity;

	@media (hover: hover) {
		&:hover {
			opacity: 0.7;
		}
	}
}
```

- [ ] **Step 2: Commit**

```bash
git add src/widgets/legal-page/index.module.css
git commit -m "feat: add LegalPage widget styles"
```

---

## Task 5: Privacy Policy constants

**Files:**
- Create: `src/views/privacy-policy-page/models/privacy-policy.constants.ts`

- [ ] **Step 1: Create the constants**

```ts
import type { LegalPageProps } from "@/widgets/legal-page/types/legal-page.types";

export const PRIVACY_POLICY_DATA: LegalPageProps = {
	title: "Политика конфиденциальности",
	lastUpdated: "01.01.2025",
	sections: [
		{
			id: "general",
			title: "Общие положения",
			content: `Настоящая политика конфиденциальности (далее — «Политика») описывает, как [НАЗВАНИЕ КОМПАНИИ] (ИНН: [ИНН], адрес: [АДРЕС]; далее — «Оператор») обрабатывает персональные данные пользователей сайта (далее — «Сайт»).

Настоящая Политика разработана в соответствии с Федеральным законом от 27.07.2006 № 152-ФЗ «О персональных данных».

Используя Сайт и регистрируя личный кабинет, вы соглашаетесь с условиями настоящей Политики.`,
		},
		{
			id: "data-collected",
			title: "Какие данные мы собираем",
			content: `При регистрации и использовании Сайта мы можем собирать следующие персональные данные: имя (или псевдоним), адрес электронной почты, номер телефона, иные данные, добровольно предоставленные вами при заполнении форм на Сайте.

В автоматическом режиме мы также собираем технические данные: IP-адрес, тип браузера, данные об устройстве, информацию о посещённых страницах и файлы cookie. Эти данные не позволяют идентифицировать вас лично.`,
		},
		{
			id: "purposes",
			title: "Цели и основания обработки",
			content: `Оператор обрабатывает персональные данные в следующих целях: регистрация и аутентификация пользователя на Сайте; обеспечение работы личного кабинета; связь с пользователем по его запросу; улучшение качества работы Сайта; соблюдение требований законодательства Российской Федерации.

Основание обработки — согласие субъекта персональных данных (ст. 9 ФЗ-152) и исполнение договора (ст. 6 ФЗ-152).`,
		},
		{
			id: "storage",
			title: "Хранение и защита данных",
			content: `Оператор принимает организационные и технические меры для защиты персональных данных от несанкционированного доступа, изменения, раскрытия или уничтожения.

Персональные данные хранятся на серверах, расположенных на территории Российской Федерации.

Срок хранения персональных данных — до момента удаления аккаунта пользователем или до отзыва согласия на обработку персональных данных, если иное не предусмотрено законодательством.`,
		},
		{
			id: "third-parties",
			title: "Передача данных третьим лицам",
			content: `Оператор не передаёт персональные данные пользователей третьим лицам, за исключением случаев: получения согласия пользователя на такую передачу; передачи данных контрагентам, действующим от имени Оператора и обязанным соблюдать настоящую Политику; передачи данных в случаях, предусмотренных законодательством Российской Федерации.

Оператор не продаёт персональные данные третьим лицам.`,
		},
		{
			id: "user-rights",
			title: "Права пользователей",
			content: `В соответствии с законодательством вы имеете право: получить информацию об обработке ваших персональных данных; потребовать уточнения, блокирования или уничтожения персональных данных, если они неполны, устарели или обрабатываются незаконно; отозвать согласие на обработку персональных данных; обратиться в уполномоченный орган по защите прав субъектов персональных данных (Роскомнадзор).

Для реализации своих прав направьте обращение по адресу: [EMAIL].`,
		},
		{
			id: "cookies",
			title: "Использование файлов cookie",
			content: `Сайт использует файлы cookie — небольшие текстовые файлы, хранящиеся на вашем устройстве. Cookie необходимы для корректной работы Сайта: сохранения сессии авторизации, запоминания настроек, анализа посещаемости.

Вы можете отключить использование cookie в настройках браузера. Обратите внимание, что это может привести к некорректной работе отдельных функций Сайта.`,
		},
		{
			id: "updates",
			title: "Изменение политики",
			content: `Оператор оставляет за собой право в любое время вносить изменения в настоящую Политику. Актуальная версия всегда доступна на данной странице.

При внесении существенных изменений мы уведомим зарегистрированных пользователей по указанному ими адресу электронной почты.

Продолжение использования Сайта после внесения изменений означает ваше согласие с обновлённой Политикой.`,
		},
		{
			id: "contacts",
			title: "Контактная информация",
			content: `По вопросам, связанным с настоящей Политикой и обработкой персональных данных, обращайтесь:

[НАЗВАНИЕ КОМПАНИИ]
ИНН: [ИНН]
Юридический адрес: [АДРЕС]
Электронная почта: [EMAIL]`,
		},
	],
};
```

- [ ] **Step 2: Commit**

```bash
git add src/views/privacy-policy-page/models/privacy-policy.constants.ts
git commit -m "feat: add Privacy Policy text constants"
```

---

## Task 6: Update Privacy Policy page view

**Files:**
- Modify: `src/views/privacy-policy-page/index.tsx`

- [ ] **Step 1: Replace stub with LegalPage**

```tsx
import LegalPage from "@/widgets/legal-page";
import { PRIVACY_POLICY_DATA } from "./models/privacy-policy.constants";

export default function PrivacyPolicyPage() {
	return <LegalPage {...PRIVACY_POLICY_DATA} />;
}
```

- [ ] **Step 2: Commit**

```bash
git add src/views/privacy-policy-page/index.tsx
git commit -m "feat: implement Privacy Policy page"
```

---

## Task 7: User Agreement constants

**Files:**
- Create: `src/views/user-agreement-page/models/user-agreement.constants.ts`

- [ ] **Step 1: Create the constants**

```ts
import type { LegalPageProps } from "@/widgets/legal-page/types/legal-page.types";

export const USER_AGREEMENT_DATA: LegalPageProps = {
	title: "Пользовательское соглашение",
	lastUpdated: "01.01.2025",
	sections: [
		{
			id: "general",
			title: "Общие положения",
			content: `Настоящее пользовательское соглашение (далее — «Соглашение») регулирует отношения между [НАЗВАНИЕ КОМПАНИИ] (ИНН: [ИНН], адрес: [АДРЕС]; далее — «Компания») и пользователем сайта (далее — «Пользователь»).

Используя Сайт и регистрируясь на нём, Пользователь подтверждает, что прочитал, понял и принимает настоящее Соглашение.

Если вы не согласны с условиями Соглашения, пожалуйста, прекратите использование Сайта.`,
		},
		{
			id: "account",
			title: "Регистрация и аккаунт",
			content: `Для доступа к отдельным функциям Сайта необходима регистрация. При регистрации Пользователь обязан предоставить достоверные данные.

Пользователь несёт ответственность за конфиденциальность своего пароля и за все действия, совершённые с использованием его аккаунта.

При утере или компрометации данных для входа Пользователь обязан незамедлительно уведомить Компанию по адресу: [EMAIL].

Компания вправе заблокировать или удалить аккаунт пользователя, нарушающего условия настоящего Соглашения.`,
		},
		{
			id: "user-obligations",
			title: "Права и обязанности пользователя",
			content: `Пользователь вправе: просматривать каталог товаров и информацию о них; регистрировать личный кабинет и использовать доступные функции Сайта; обращаться в службу поддержки по вопросам использования Сайта.

Пользователь обязан: соблюдать условия настоящего Соглашения; не совершать действий, нарушающих работу Сайта; не использовать Сайт в противоправных целях; не пытаться получить несанкционированный доступ к данным других пользователей или системам Компании.`,
		},
		{
			id: "company-obligations",
			title: "Права и обязанности компании",
			content: `Компания вправе: изменять, приостанавливать или прекращать работу Сайта или его отдельных функций; блокировать доступ пользователей, нарушающих настоящее Соглашение; вносить изменения в настоящее Соглашение.

Компания обязана: обеспечивать доступность Сайта в штатном режиме работы; обрабатывать персональные данные Пользователей в соответствии с Политикой конфиденциальности и законодательством Российской Федерации; рассматривать обоснованные обращения пользователей в разумные сроки.`,
		},
		{
			id: "service-rules",
			title: "Правила использования сервиса",
			content: `Сайт является витриной товаров магазина «Инструмент». Информация о товарах, ценах и их наличии носит информационный характер.

Все покупки осуществляются непосредственно в торговой точке. Сайт не является площадкой для совершения платёжных операций — оплата товаров на Сайте не предусмотрена.

Компания прилагает усилия для обеспечения актуальности информации на Сайте, однако не гарантирует её полноту и точность. Наличие и стоимость товаров следует уточнять в магазине.`,
		},
		{
			id: "liability",
			title: "Ответственность сторон",
			content: `Компания не несёт ответственности за: временную недоступность Сайта по техническим причинам; действия третьих лиц, повлёкшие ущерб Пользователю; содержание сторонних ресурсов, на которые ведут ссылки с Сайта; расхождение между информацией на Сайте и фактическим наличием или ценой товара в магазине.

Совокупная ответственность Компании по всем основаниям ограничена суммами, прямо предусмотренными действующим законодательством Российской Федерации.`,
		},
		{
			id: "privacy",
			title: "Конфиденциальность",
			content: `Обработка персональных данных Пользователя осуществляется в соответствии с Политикой конфиденциальности, являющейся неотъемлемой частью настоящего Соглашения.

Ознакомиться с Политикой конфиденциальности можно в разделе «Политика конфиденциальности» на данном Сайте.`,
		},
		{
			id: "disputes",
			title: "Разрешение споров",
			content: `Все разногласия, возникающие в связи с настоящим Соглашением, стороны стремятся урегулировать путём переговоров.

До обращения в суд Пользователь обязан направить письменную претензию на адрес: [EMAIL]. Срок рассмотрения претензии — 30 календарных дней.

В случае невозможности урегулирования спора в досудебном порядке он передаётся на рассмотрение суда по месту нахождения Компании в соответствии с законодательством Российской Федерации.`,
		},
		{
			id: "updates",
			title: "Изменение соглашения",
			content: `Компания вправе в одностороннем порядке вносить изменения в настоящее Соглашение. Актуальная версия Соглашения всегда размещена на данной странице.

Продолжение использования Сайта после публикации изменений означает согласие Пользователя с обновлённым Соглашением.

Если вы не согласны с изменениями, прекратите использование Сайта и удалите свой аккаунт.`,
		},
	],
};
```

- [ ] **Step 2: Commit**

```bash
git add src/views/user-agreement-page/models/user-agreement.constants.ts
git commit -m "feat: add User Agreement text constants"
```

---

## Task 8: Update User Agreement page view

**Files:**
- Modify: `src/views/user-agreement-page/index.tsx`

- [ ] **Step 1: Replace stub with LegalPage**

```tsx
import LegalPage from "@/widgets/legal-page";
import { USER_AGREEMENT_DATA } from "./models/user-agreement.constants";

export default function UserAgreementPage() {
	return <LegalPage {...USER_AGREEMENT_DATA} />;
}
```

- [ ] **Step 2: Commit**

```bash
git add src/views/user-agreement-page/index.tsx
git commit -m "feat: implement User Agreement page"
```

---

## Task 9: Personal Data Consent constants

**Files:**
- Create: `src/views/personal-data-consent-page/models/personal-data-consent.constants.ts`

- [ ] **Step 1: Create the constants**

```ts
import type { LegalPageProps } from "@/widgets/legal-page/types/legal-page.types";

export const PERSONAL_DATA_CONSENT_DATA: LegalPageProps = {
	title: "Согласие на обработку персональных данных",
	lastUpdated: "01.01.2025",
	sections: [
		{
			id: "subject",
			title: "Субъект персональных данных",
			content: `Настоящее Согласие распространяется на физических лиц, регистрирующихся на Сайте (далее — «Субъект»).

Регистрируясь на Сайте и отмечая соответствующую отметку в форме регистрации, Субъект выражает добровольное, конкретное, информированное и однозначное согласие на обработку своих персональных данных в соответствии с условиями настоящего документа.`,
		},
		{
			id: "operator",
			title: "Оператор персональных данных",
			content: `Оператором персональных данных является:

[НАЗВАНИЕ КОМПАНИИ]
ИНН: [ИНН]
Юридический адрес: [АДРЕС]
Электронная почта: [EMAIL]`,
		},
		{
			id: "data-list",
			title: "Перечень персональных данных",
			content: `Субъект даёт согласие на обработку следующих персональных данных: фамилия, имя, отчество (при указании); адрес электронной почты; номер телефона (при указании); иные данные, добровольно предоставленные Субъектом в процессе использования Сайта.`,
		},
		{
			id: "purposes",
			title: "Цели обработки",
			content: `Персональные данные обрабатываются в следующих целях: идентификация Субъекта при регистрации и авторизации на Сайте; обеспечение функционирования личного кабинета; направление информационных сообщений по запросу Субъекта; улучшение качества работы Сайта и пользовательского опыта; исполнение требований законодательства Российской Федерации.`,
		},
		{
			id: "methods",
			title: "Способы обработки",
			content: `Обработка персональных данных включает: сбор, запись, систематизацию, накопление, хранение, уточнение (обновление, изменение), извлечение, использование, передачу (при наличии оснований), обезличивание, блокирование, удаление и уничтожение.

Обработка осуществляется с использованием средств автоматизации, а также без использования таких средств.`,
		},
		{
			id: "validity",
			title: "Срок действия согласия",
			content: `Настоящее Согласие действует с момента его предоставления и до момента его отзыва Субъектом, либо до удаления аккаунта Субъекта, либо по истечении срока хранения данных, установленного законодательством, — в зависимости от того, что наступит раньше.`,
		},
		{
			id: "revocation",
			title: "Порядок отзыва согласия",
			content: `Субъект вправе в любое время отозвать настоящее Согласие, направив письменное заявление на адрес электронной почты: [EMAIL], или удалив свой аккаунт на Сайте.

После отзыва Согласия Оператор прекращает обработку персональных данных и уничтожает их в течение 30 дней, если иное не предусмотрено законодательством Российской Федерации.

Отзыв Согласия не затрагивает законность обработки персональных данных, осуществлённой до его отзыва.`,
		},
	],
};
```

- [ ] **Step 2: Commit**

```bash
git add src/views/personal-data-consent-page/models/personal-data-consent.constants.ts
git commit -m "feat: add Personal Data Consent text constants"
```

---

## Task 10: Create Personal Data Consent page view

**Files:**
- Create: `src/views/personal-data-consent-page/index.tsx`

- [ ] **Step 1: Create the view**

```tsx
import LegalPage from "@/widgets/legal-page";
import { PERSONAL_DATA_CONSENT_DATA } from "./models/personal-data-consent.constants";

export default function PersonalDataConsentPage() {
	return <LegalPage {...PERSONAL_DATA_CONSENT_DATA} />;
}
```

- [ ] **Step 2: Commit**

```bash
git add src/views/personal-data-consent-page/index.tsx
git commit -m "feat: add PersonalDataConsent page view"
```

---

## Task 11: Create /personal-data-consent Next.js route

**Files:**
- Create: `src/app/personal-data-consent/page.tsx`

- [ ] **Step 1: Create the page**

```tsx
import PersonalDataConsentPage from "@/views/personal-data-consent-page";

export default function PersonalDataConsent() {
	return <PersonalDataConsentPage />;
}
```

- [ ] **Step 2: Commit**

```bash
git add src/app/personal-data-consent/page.tsx
git commit -m "feat: add /personal-data-consent route"
```

---

## Task 12: Visual verification

- [ ] **Step 1: Start dev server**

```bash
cd src && pnpm dev
```

- [ ] **Step 2: Open all three pages in browser and verify**

- `http://localhost:3000/privacy-policy` — sidebar visible, 9 sections, active highlight works on scroll
- `http://localhost:3000/user-agreement` — sidebar visible, 9 sections, related docs block at bottom
- `http://localhost:3000/personal-data-consent` — sidebar visible, 7 sections
- Mobile view (767px or less) — sidebar hidden, content readable

- [ ] **Step 3: Check footer links still work**

Navigate to footer → click "Политика конфиденциальности" → lands on `/privacy-policy` ✓
Navigate to footer → click "Обработка персональных данных" → lands on `/user-agreement` ✓
