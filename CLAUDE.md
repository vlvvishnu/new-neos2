# Project notes

## Component naming (do not churn on this)

The design-system check flags ~50 components as "named after nothing in the kit" (`Apple`, `AttachmentIcon`, `Badge`, `CaretDown*`, `Checkbox*`, `Heroicons*`, `Tag*`, …). These are **intentional, confirmed** members of this system — the shared primitive/glyph layer every composite builds on — and their names are final. See the "Components" section of `README.md`. Do **not** rename, remove, or re-materialize them; the flag is advisory and stays.

## Large source files

`FinalSummaryRow.jsx`, `AuthHeaderFilter.jsx`, `WellSkyLogos.jsx`, `eligibility-detail.jsx`, `prototype.jsx` etc. are large because they carry inlined Figma vector data and full screen logic. Leave them unless asked to slim them down.
