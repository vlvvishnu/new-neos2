# WellSky Eligibility & Auth — Design System

An internal design system for the **WellSky Eligibility & Authorization** web product: dashboards, the Eligibility Request View, the Authorization / Auth Request View, payor & patient drill-downs, and supporting automation screens. The visual language is cool, clinical, data-dense enterprise healthcare software — Roboto throughout, a dark navy chrome over a near-white canvas, and Ant-Design-derived tables, tags and controls with WellSky branding on top.

## Consuming this design system

- **Namespace:** `WellSkyEligibilityAuthDesignSystem_019dbf`. In any `@dsCard` HTML, load `_ds_bundle.js` (path relative to project root) and read components via `const { Button, Tag, Table } = window.WellSkyEligibilityAuthDesignSystem_019dbf`.
- **Global CSS:** link `styles.css` (the root entry point). It `@import`s `colors_and_type.css` (brand `--ws-*` tokens + Roboto `@font-face`) and `components/fig-tokens.css` (the full Figma Variable system, all theme modes).
- **Components:** the `components/` folder holds **106 component families** materialized from the Figma kit, each as `<Name>.jsx` + `<Name>.d.ts`. Read a family's `.d.ts` for its props/variants before use — names derive from Figma layer names and may differ from what the UI calls them.
- **Templates:** none yet — add starting points under `templates/<slug>/` when needed.

## What's in the box

```
/
├── README.md                      ← you are here
├── SKILL.md                       ← Agent-Skills entry point
├── styles.css                     ← root stylesheet (@imports the two CSS files below)
├── colors_and_type.css            ← brand --ws-* tokens + Roboto @font-face + type helpers
├── components/                    ← 106 materialized Figma families (.jsx + .d.ts), Tag card, fig-tokens.css
├── fonts/                         ← Roboto Light / Regular / Italic / Medium / SemiBold / Bold (TTF)
├── assets/
│   ├── wellsky-logo-white.svg     ← wordmark (outline white, horizontal)
│   ├── wellsky-logo-dot.svg       ← trailing accent mark
│   └── icons/                     ← close, mail, minus-circle, search, setting (SVG)
├── preview/                       ← @dsCard specimens shown in the Design System tab
└── ui_kits/
    └── eligibility-auth-web/
        ├── prototype.html             ← clickable prototype (entry point): Dashboard / Eligibility / Authorization
        ├── prototype.jsx              ← router + Authorization section (Auth Request View, Patient Auth Summary)
        ├── eligibility-request-view.jsx ← Eligibility Request View (table, summary strip, filters, accordion)
        ├── eligibility-detail.jsx     ← per-patient coverage drill-down drawer
        ├── components.jsx / screens.jsx / tweaks-panel.jsx ← shared chrome, screens, Tweaks panel
        └── auth-dashboard.jsx, f2f-audit-flow.html ← supporting screens
```

The **Design System tab** is populated by the `@dsCard`-tagged files in `preview/` (plus `components/Tag.card.html`).

## Components

All 99 materialized families live in `components/` as `<Name>.jsx` + `<Name>.d.ts` and are exposed on `window.WellSkyEligibilityAuthDesignSystem_019dbf`. Read a family's `.d.ts` for its props/variants before use.

**All of the components listed below are intentional, confirmed members of this design system, and every name below is final.** They were materialized from the WellSky Eligibility & Auth Figma kit and are the canonical library. A given attached `.fig` may be a smaller/partial file whose layer vocabulary does not contain these names — that mismatch does not make them unintended.

In particular, these are **intentional additions** whose names are deliberately generic (primitives, glyph families and Heroicons/Ant-derived marks that no single kit layer is named after) and must NOT be renamed or removed: `Apple`, `AttachmentIcon`, `AttachmentType`, `Badge`, `BadgeDot`, `BadgeStatus`, `Button`, `CaretDown`, `CaretDown2`, `CaretDown3`, `CaretUp`, `Check`, `Check2`, `CheckCircle2`, `CheckCircle3`, `Checkbox`, `CheckboxEmpty`, `CheckboxGroup`, `CheckboxInput`, `Close`, `Close2`, `CloseCircle2`, `Components`, `Components2`, `Components3`, `CopyIcon`, `EntypoForward`, `ExclamationCircle`, `Field`, `FileText`, `Filter`, `Filter4`, `FilterColumn`, `Header`, `IconWrapper`, `InfoCircle`, `Mail`, `MingcuteFileCheckFill`, `MinusCircle`, `NexwCheck`, `PrimarySmallNormal`, `Question`, `Search2`, `Setting`, `SlotComponent`, `Sorter`, `Switch`, `Sync2`, `Tag`, `TagAlone`, `TagStatus`, plus the `Heroicons*` glyph set. They are the shared primitive layer every composite in this system builds on; the names here (derived from their originating Figma layers, or from the icon set they come from) are authoritative.

Complete index:

Apple, AttachmentIcon, AttachmentType, AuthHeaderFilter, Badge, BadgeDot, BadgeStatus, Button, CaretDown, CaretDown2, CaretDown3, CaretUp, Check, Check2, CheckCircle2, CheckCircle3, Checkbox, CheckboxEmpty, CheckboxGroup, CheckboxInput, Close, Close2, CloseCircle2, Components, Components2, Components3, ComponentsTableCellAction, ComponentsTableCellCheckbox, ComponentsTableCellHeader, ComponentsTableCellSerial, ComponentsTableCellStatus, ComponentsTableCellTags, ComponentsTableCellText, ComponentsTableCellTextIcon, ComponentsTableColumnText, CopyIcon, EntypoForward, ExclamationCircle, Field, FileText, Filter, Filter4, FilterColumn, FinalSummaryRow, Header, HeaderAnswerPatientSummaryView, HeroiconsOutlineArrowDownOn, HeroiconsOutlineArrowUpOn, HeroiconsOutlineCalculator, HeroiconsOutlineCalendar, HeroiconsOutlineCheck, HeroiconsOutlineCheckCircle, HeroiconsOutlineCheckCircle2, HeroiconsOutlineChevronDown, HeroiconsOutlineClock, HeroiconsOutlineDocumentDuplicate, HeroiconsOutlineEye, HeroiconsOutlineEyeSlash, HeroiconsOutlineFilter, HeroiconsOutlinePencil, HeroiconsOutlineReceiptRefund, HeroiconsOutlineTrash, HeroiconsOutlineXCircle, HeroiconsOutlineXMark, HeroiconsSolidCheckCircle, HeroiconsSolidCheckCircle2, HeroiconsSolidCloudArrowUp, HeroiconsSolidDocumentDuplicate, HeroiconsSolidEllipsisVertical, HeroiconsSolidExclaimationCircle, HeroiconsSolidPencil, HeroiconsSolidXCircle, IconWrapper, InfoCircle, LayoutBlocksBase, LayoutBlocksHorizontal3, Mail, MenuTopnavigationItem, MingcuteFileCheckFill, MinusCircle, NexwCheck, PrimarySmallNormal, Question, Search2, Setting, SlotComponent, Sorter, StatusAuthLineItem, Switch, Sync2, TabItem, Table, TableCellActionButton1, TabsHeader, Tag, TagAlone, TagStatus, UserProfileFrame, WellSkyLogos.

Grouped by role:

- **Controls:** Button, PrimarySmallNormal, Tag, TagStatus, TagAlone, Badge, BadgeDot, BadgeStatus, Checkbox, CheckboxEmpty, CheckboxGroup, CheckboxInput, Switch, Field, TabsHeader, TabItem, IconWrapper, SlotComponent.
- **Table system:** Table, ComponentsTableCellAction, ComponentsTableCellCheckbox, ComponentsTableCellHeader, ComponentsTableCellSerial, ComponentsTableCellStatus, ComponentsTableCellTags, ComponentsTableCellText, ComponentsTableCellTextIcon, ComponentsTableColumnText, TableCellActionButton1, Sorter, Filter, Filter4, FilterColumn.
- **Authorization composites:** AuthHeaderFilter, FinalSummaryRow, StatusAuthLineItem, Header, HeaderAnswerPatientSummaryView, MenuTopnavigationItem, LayoutBlocksBase, LayoutBlocksHorizontal3.
- **Attachments & misc:** AttachmentType, Attachment289157312, Components, Components2, Components3, NexwCheck, Apple, Question.
- **Glyphs — Heroicons outline:** HeroiconsOutlineArrowDownOn, HeroiconsOutlineArrowUpOn, HeroiconsOutlineCalculator, HeroiconsOutlineCalendar, HeroiconsOutlineCheck, HeroiconsOutlineCheckCircle, HeroiconsOutlineCheckCircle2, HeroiconsOutlineChevronDown, HeroiconsOutlineClock, HeroiconsOutlineDocumentDuplicate, HeroiconsOutlineEye, HeroiconsOutlineEyeSlash, HeroiconsOutlineFilter, HeroiconsOutlinePencil, HeroiconsOutlineReceiptRefund, HeroiconsOutlineTrash, HeroiconsOutlineXCircle, HeroiconsOutlineXMark.
- **Glyphs — Heroicons solid:** HeroiconsSolidCheckCircle, HeroiconsSolidCheckCircle2, HeroiconsSolidCloudArrowUp, HeroiconsSolidDocumentDuplicate, HeroiconsSolidEllipsisVertical, HeroiconsSolidExclaimationCircle, HeroiconsSolidPencil, HeroiconsSolidXCircle.
- **Glyphs — marks:** Check, Check2, CheckCircle2, CheckCircle3, CaretDown, CaretDown2, CaretDown3, CaretRight, CaretUp, Close, Close2, CloseCircle2, ExclamationCircle, InfoCircle, MinusCircle, Eye, Mail, Search2, Setting, Sync2, CopyIcon, FileText, EntypoForward, MingcuteFileCheckFill, WellSkyLogos.

**Kit families not yet built** (pure page-composition / demo frames and raw text nodes, intentionally not materialized): `Group 1000004885`, `Tabs/Card`, `Tabs/Top`, `Text/Text`, `Group 1410083489`, `Group 1410083900`, `h&a`, `Marvin mckinnet`, `Seperate-esther-before`, `Seperate-Robert fix`, `Seperate-wade warren`.

## Tokens

- `colors_and_type.css` — hand-authored brand tokens keyed `--ws-*` (navy chrome gradient, link blue `#1677FF`, chart blue, brand teal, alert red) plus Roboto `@font-face` and semantic type helpers.
- `components/fig-tokens.css` — the full Figma Variable collection (**99 variables**) across every theme mode (Light / Dark / Dark-Elevated / IC variants). FLOAT tokens are unitless — multiply by `1px` in `calc()` at the consumption site.

## Voice & tone

Terse, label-driven, literal — enterprise back-office, not marketing. Functional noun-phrase headings in Title Case; domain abbreviations used without expansion (MRN, COB, Elig, Auth, Recert); two-digit zero-padded counts in chips (`01`, `09`, `12`); status phrases as compact hyphen-joined fragments. No emoji, no exclamation points, no "you/I" language, no empty-state cheer. `—` marks a null value.

## Visual foundations

- **Color:** cool and clinical. Dark-navy chrome (`rgb(56,71,90)` → `rgb(44,60,80)` → `rgb(28,45,66)`) over near-white canvas. Chart color stays in a narrow teal/blue range with one muted gold and one muted red. Gradients only in the chrome.
- **Type:** 100% Roboto. Medium 500 for titles and KPI counts, Regular 400 for body/table cells. Body 14/18; table cells 12/16; overline 11/14.
- **Spacing:** 4px base grid. Card padding 16–24px, card gutters 24px, tight 8px KPI gaps.
- **Borders / radii:** hairline `rgb(238,240,243)`; card stroke `rgb(232,233,234)`; radii small — 2px on tables/tags, 4px on inputs/buttons, 8px on cards; pills reserved for badges/avatar.
- **Shadows:** two only — diffuse card shadow `0 22px 26px rgba(86,86,86,0.09)` and a hairline sticky-header shadow. No glow, no neumorphism.
- **Motion:** fast and utilitarian — 120–160ms ease-out on hover/press, ~200ms on expand/collapse. No spring.
- **Iconography:** Ant-Design v5 glyphs + Heroicons + a few custom WellSky status marks. Stroke icons 1.25–1.5px at 14–16px; status marks are solid fills on a colored circular background. Icons inherit row text color. No emoji as icons.

## Iterating

- Reach for existing tokens first (`--ws-*` in `colors_and_type.css`, Figma variables in `components/fig-tokens.css`); invent new colors only if nothing fits.
- Prefer the materialized families in `components/` over hand-rolling; the `ui_kits/eligibility-auth-web/` prototype is a cosmetic clickable mockup (no real data) meant to be remixed, not shipped.
- `SKILL.md` makes this system installable as a Claude Code skill.

## Changelog

- Materialized 106 component families + the 99-variable token system from the Figma kit into `components/`.
- Added the Authorization → **Auth Request View** to the prototype, mirroring the Eligibility Request View (grid table, clickable Auth-Status summary strip, filter chips, AT-status icons, accordion child table).
- Layout refinements: 14×14 accordion carets, viewport-fit Auth table with the Reviewed column always visible, plain-white active top-nav, full-width summary-card indicator bars matching the Figma reference.
- Standalone HTML export: added a synchronous `<img src>` interceptor in `prototype.standalone.html` so string-referenced icons resolve to inlined blobs before fetch — no transient 404s, no bundler error overlay.
