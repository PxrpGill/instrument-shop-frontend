# Legal Pages Design

**Date:** 2026-05-14
**Status:** Approved

## Overview

Three legal pages for the instrument shop website. The site has user registration and authentication; purchases happen in-store (no payment system on the site). All documents comply with Federal Law No. 152-FZ "On Personal Data."

## Pages

| Route | View | Description |
|---|---|---|
| `/privacy-policy` | `views/privacy-policy-page` | Privacy Policy |
| `/user-agreement` | `views/user-agreement-page` | User Agreement |
| `/personal-data-consent` | `views/personal-data-consent-page` | Consent for Personal Data Processing |

## Architecture

**Approach:** Single shared widget `widgets/legal-page` used by all three pages.

### File Structure

```
widgets/
  legal-page/
    index.tsx
    index.module.css
    types/
      legal-page.types.ts

views/
  privacy-policy-page/
    index.tsx
    models/
      privacy-policy.constants.ts

  user-agreement-page/
    index.tsx
    models/
      user-agreement.constants.ts

  personal-data-consent-page/          ← new
    index.tsx
    models/
      personal-data-consent.constants.ts

app/
  personal-data-consent/               ← new route
    page.tsx

shared/config/app-routes.ts            ← + personalDataConsent
```

### Types

```ts
type LegalSection = {
  id: string       // anchor for sidebar navigation
  title: string    // section heading
  content: string  // section body text
}

type LegalPageProps = {
  title: string
  lastUpdated: string  // display date of last update
  sections: LegalSection[]
}
```

## UI Design

### Layout

Two-column layout: sticky sidebar on the left, scrollable content on the right.

```
┌─────────────────────────────────────────────────────┐
│  [Page Title]                   Updated: dd.mm.yyyy │
├──────────────┬──────────────────────────────────────┤
│  Sidebar     │  Main content                        │
│  (sticky)    │                                      │
│  1. Section  │  ## 1. Section                       │
│  2. Section  │  Text...                             │
│  3. Section  │                                      │
│  ...         │  ## 2. Section                       │
│              │  Text...                             │
└──────────────┴──────────────────────────────────────┘
```

### Sidebar Behaviour

- `position: sticky` — stays visible while scrolling
- Active section highlighted with `--color-accent` (`#f5c518`) — detected via `IntersectionObserver`
- Click on a sidebar item smoothly scrolls to the section anchor

### Mobile

Sidebar is hidden on mobile; content is read linearly.

### Typography

- Page title: `@mixin h2`
- Section headings: `@mixin h4`
- Body text: `@mixin body` with `line-height: 1.6`

### Related Documents Block

Each page ends with links to the other two legal pages.

## Document Content

Company data placeholders: `[НАЗВАНИЕ КОМПАНИИ]`, `[ИНН]`, `[АДРЕС]`, `[EMAIL]`.

### Privacy Policy — 9 sections

1. Общие положения
2. Какие данные мы собираем (при регистрации: email, имя, телефон; технические: cookies, IP)
3. Цели и основания обработки
4. Хранение и защита данных
5. Передача данных третьим лицам
6. Права пользователей (доступ, исправление, удаление)
7. Использование файлов cookie
8. Изменение политики
9. Контактная информация

### User Agreement — 9 sections

1. Общие положения
2. Регистрация и аккаунт
3. Права и обязанности пользователя
4. Права и обязанности компании
5. Правила использования сервиса (сайт — витрина, покупки в магазине)
6. Ответственность сторон
7. Конфиденциальность
8. Разрешение споров (досудебный порядок, суд по месту нахождения компании)
9. Изменение соглашения

### Personal Data Consent — 7 sections

1. Субъект персональных данных
2. Оператор персональных данных
3. Перечень персональных данных
4. Цели обработки
5. Способы обработки
6. Срок действия согласия
7. Порядок отзыва согласия

## Constraints

- No payment system references in any document
- Purchases are made in physical store only
- Site collects data only for: account creation, authentication, and contact purposes
- Governed by Russian Federal Law No. 152-FZ
