# Reusable prompt — "Replicate the Eligibility Request View as a new screen"

**How to use:** copy everything inside the fenced block below into a new chat in this
project. Fill every `⟨…⟩` blank. Delete any `OPTIONAL` block you don't want. Leave the
rest verbatim — the fixed parts are what make the clone faithful.

The `CDM` screen in this project was produced with exactly this pattern, so there is a
working precedent to point at (`ui_kits/eligibility-auth-web/cdm-request-view.jsx`).

---

```text
# TASK
Add a new screen to the WellSky/Neos clickable prototype at
ui_kits/eligibility-auth-web/prototype.html, replicating the **Eligibility Request View**
end to end, plus a new top-level tab for it in the top navigation.

# READ THESE FIRST (do not skip — build from this source, not from memory)
- ui_kits/eligibility-auth-web/eligibility-request-view.jsx   ← THE REFERENCE SCREEN.
  This is the canonical one (~1,770 lines). Ignore the stale copy at the project root
  (/eligibility-request-view.jsx) — it is an old, shorter version.
- ui_kits/eligibility-auth-web/cdm-request-view.jsx            ← a previous successful
  clone of that screen. Follow its file structure, its prefixing convention and its
  wiring; it is the proven template for this task.
- ui_kits/eligibility-auth-web/prototype.jsx                   ← TopNav, SectionBand,
  root router, and the shared popovers exposed on window (FilterPopover, DatePicker,
  dateInRange, defaultDateRange, AddNoteModal, AuthEntryDrawer).
- ui_kits/eligibility-auth-web/prototype.html                  ← script load order.
- ui_kits/eligibility-auth-web/erv-automation-log.jsx          ← Automation Log pattern.
- README.md + colors_and_type.css + components/fig-tokens.css  ← tokens, type, voice.
⟨OPTIONAL — ALSO REFERENCE ANOTHER EXISTING SCREEN:
  Additionally mirror ⟨path/to/other-screen.jsx⟩ for ⟨which aspect: its column set /
  its drawer / its summary cards / its child accordion⟩. Where the two references
  disagree, the Eligibility Request View wins on layout and the second reference wins
  on ⟨aspect⟩.⟩

# 1. SCREEN IDENTITY
- Top-nav tab label:        ⟨e.g. Claims⟩
- Router section key:       ⟨e.g. claims⟩   (lowercase, one word)
- Section band title:       ⟨e.g. Claims Center⟩
- Primary sub-tab label:    ⟨e.g. Claims Request View⟩
- New file:                 ui_kits/eligibility-auth-web/⟨slug⟩-request-view.jsx
- Component + globals:      ⟨Name⟩RequestView, exposed as window.⟨Name⟩RequestView,
  with a unique prefix on every top-level identifier in the file (ERV… → ⟨PFX⟩…) and
  unique React hook aliases (const { useState: use⟨PFX⟩, useEffect: use⟨PFX⟩E,
  useRef: use⟨PFX⟩R } = React) so nothing collides with the other babel files.
- Title-cluster mode dropdown options (the "All Elig Requests ▾" control):
  ⟨e.g. All Claims | All Non-Automated Claims | All Automated Claims⟩

# 2. TABLE COLUMNS  (this is the part that differs from Eligibility)
Replace the ERV column set entirely with the columns below. Keep the same CSS-grid
column mechanism (an array of { key, label, grid, sortable, align }, joined into one
gridTemplateColumns string) so columns distribute across the viewport width — flexible
columns as minmax(Npx, Nfr), fixed status/icon columns as a px value.

| # | Column label | data key | type | width behaviour | sortable |
|---|--------------|----------|------|-----------------|----------|
| 1 | ⟨Patient Name⟩ | ⟨name⟩ | link (opens the clickable summary) | flexible | yes |
| 2 | ⟨…⟩ | ⟨…⟩ | text / date / number / status-pill / icon / tag / checkbox / action-button | ⟨flexible or 78px⟩ | ⟨yes/no⟩ |
| … | ⟨add as many rows as needed⟩ | | | | |

Column rules to preserve from the reference:
- Row 1 cell carries the expand caret (14×14 triangle) when the accordion is enabled.
- Sortable headers show the two-arrow SortArrows glyph, active direction in #2563eb.
- Fixed-width trailing columns (Action, Reviewed?, doc icon) must stay visible without
  horizontal scroll at 1440px wide.
- Cell type contracts: status-pill = bordered pill {bg, border, text} per status;
  icon = 18×18 <img> with a title tooltip; action = "View Details" link or a filled
  button; "Reviewed?" = checkbox that persists in component state; "—" for nulls.

# 3. TABLE DATA
⟨PASTE ROWS HERE — either a JSON/table dump of the real rows, or:
"Generate ⟨N⟩ plausible rows using the patient names already used across the prototype
(Marvin Mckinney, Esther Howard, Wade Warren, Cameron Williamson, Robert Fox, Jenny
Wilson, Jacob Jones, Leslie Alexander, Guy Hawkins, Jane Cooper, Kristin Watson, Cody
Fisher, Kathryn Murphy, Devon Lane, Dianne Russell, Arlene McCoy, Theresa Webb,
Darlene Robertson, Courtney Henry, Ralph Edwards, Annette Black) so cross-screen data
looks consistent. Spread ⟨date column⟩ across ⟨date range⟩ and distribute statuses so
every summary counter and every filter returns a non-empty result."⟩

Expose the array on window as window.⟨PFX⟩_ROWS (like window.ERV_ROWS / window.CDM_ROWS)
so dashboards and other screens can derive counts from the same source.

# 4. STATUS SUMMARY BOX  (the clickable counter strip — REQUIRED)
Replicate the "Status Summary" card strip: each card is a full-width colored indicator
bar on top, a two-digit zero-padded count (01, 09, 12), a label, an optional 18×18
status icon, and click-to-filter behaviour. Cards are laid out with flex and per-card
`weight` values controlling relative width (as in ERV_STATUS / CDM_STATUS_ITEMS).

## 4a. Which counters go IN the box  ⟨CHOOSE ONE — delete the others⟩

⟨STYLE A — ELIGIBILITY STYLE: business statuses in the box, automation kept separate.
  The box holds the domain/coverage statuses only; the AT (automation) counters live in
  their own strip beside it (see §5). Use this when a record's business status and its
  automation status are two independent things a user filters on separately.
  Counters (id | label | bar color | icon | derived from):
    all       | All ⟨Records⟩ | #64748b | none | total rows (ALWAYS the full total)
    ⟨status1⟩ | ⟨label⟩       | ⟨hex⟩   | ⟨none⟩ | rows where ⟨field⟩ === ⟨value⟩
    ⟨…add the rest; Eligibility has 7⟩⟩

⟨STYLE B — CDM STYLE: AT / automation status IS the summary box, with icons in-card.
  This is the cdm-request-view.jsx pattern — copy CDM_STATUS_ITEMS + CDMStatusStrip.
  The automation states are the summary counters themselves, and each card carries its
  AT icon inline next to the count, so one box does both jobs. Use this when the
  record's status IS its automation outcome.
  Counters, in this order and with these exact colors and icons:
    all        | All ⟨Records⟩   | rgb(21,95,130)   | weight 1.2 | no icon | total rows
    completed  | Completed       | rgb(14,165,233)  | weight 1.0 | icons/at-completed.png
    ending     | In Progress     | rgb(148,163,184) | weight 1.0 | icons/at-in-progress.png
    late       | Needs Attention | rgb(245,158,11)  | weight 1.0 | icons/at-needs-attention.png
  ⟨OPTIONAL — add further AT states, e.g. Terminated / Failed, each with its own hex and
   its own 18×18 icon in icons/⟩
  Resolve every icon through window.__resources with the relative path as fallback, using
  the same `get icon()` getter form as CDM_STATUS_ITEMS, so the standalone export works:
    get icon(){ return (window.__resources&&window.__resources.atCompleted)||"icons/at-completed.png"; }
  In this style the separate AT strip in §5 is redundant — omit it (or keep it only as a
  secondary row if you explicitly want both).⟩

⟨STYLE C — BOTH IN ONE BOX: business statuses first, then a hairline divider, then the
  AT counters with icons, all inside the same card strip. Same click-to-filter contract
  for every card; a business card and an AT card can be active at the same time and
  compose (AND) rather than replacing one another.
  Business counters: ⟨list as in Style A⟩
  AT counters: ⟨list as in Style B⟩⟩

## 4b. Behaviour to preserve in ALL styles
- Clicking a card filters the table to that status; clicking it again clears it.
- The active card is visually selected, the non-active cards dim, AND a removable filter
  chip appears next to "Add More Filters"; removing the chip deselects the card.
- Counts recompute from the *currently filtered* subset (date range ∧ field filters ∧
  search ∧ any other active status), except "All ⟨Records⟩", which always shows the total.
- Icon cards render the icon at 18×18 with objectFit:"contain" and a title tooltip whose
  text equals the card label, so the icon is self-describing on hover.
- Caption line under the title: "⟨Status Summary of … ⟩", plus the hint box
  "Click ⟨Patient Name⟩ to view ⟨target⟩".
- Whatever icon a card uses, the matching table cell for that record uses the SAME icon
  asset at the same size — box and row must never disagree visually.

# 5. AUTOMATION  ⟨CHOOSE ONE — delete the others⟩
⟨FULL AUTOMATION (separate AT strip — pair with Style A above):
- Render the Automation (AT) Status strip beside the status summary, same as
  ERVAutomationStatus / CDMAutomationStatus: Completed / Needs Attention / In Progress,
  each a clickable counter with its 18×18 icon, label, and bold count, that filters the
  table and composes with the summary-box filter.
- Add an "AT Status" column rendering the same icon with a title tooltip.
- Add the "Automation Log" sub-tab as the second tab in the section band, modelled on
  erv-automation-log.jsx, in a sibling file ⟨slug⟩-automation-log.jsx exposing
  window.⟨Name⟩AutomationLogView. Log rows link back to the request row.
- Keep the title-cluster mode dropdown options for automated / non-automated / all.⟩
⟨AUTOMATION IN THE SUMMARY BOX ONLY (pair with Style B above):
- No separate AT strip — the summary box already carries the AT counters and icons.
- Still add the "AT Status" column and the "Automation Log" sub-tab as above.
- Keep the automated / non-automated / all mode dropdown options.⟩
⟨NO AUTOMATION:
- Omit the AT strip, the AT Status column, the Automation Log sub-tab, and the
  automated/non-automated options in the mode dropdown. The section band then shows a
  single sub-tab. Everything else is unchanged.⟩

# 6. CLICKABLE SUMMARY TARGET  ⟨CHOOSE ONE — delete the others⟩
Clicking ⟨the first column's link⟩ opens:
⟨A. PATIENT SUMMARY VIEW  — a patient-level roll-up screen in the style of the Patient
   Auth Summary View in prototype.jsx: breadcrumb in the SectionBand ("⟨Section⟩ /
   ⟨Patient Name⟩"), patient identity header, and ⟨N⟩ summary cards. Back returns to
   the table with all filters intact.⟩
⟨B. AUTOMATION LOG  — deep-links into the Automation Log sub-tab, pre-filtered to that
   record, matching erv-automation-log.jsx.⟩
⟨C. AUTH REQUEST VIEW STYLE DETAIL  — a full request-detail screen with the expandable
   line-item table and status timeline, per the Auth Request View in prototype.jsx.⟩
⟨D. SIDE DRAWER  — a right-hand drawer like EligEntryDrawer: read-only identity block
   at top, ⟨fields⟩ form below, Save + Add Note actions, Save writes back to the row
   (updates its status and flips its Action from Edit to View) and persists across
   navigation via state held in the root router.⟩
⟨E. CHILD ACCORDION ONLY  — expanding the row reveals the previous-check child table
   inline (ERVChildSection pattern), no separate screen.⟩
Regardless of choice: the row-level "Action" cell keeps its own target
(⟨View Details / Edit Details⟩) and the expand caret keeps the child accordion if
enabled in §2.

# 7. FILTER BAR — must all work, not be decorative
Reuse the shared controls from prototype.jsx (window.DatePicker, window.FilterPopover,
window.dateInRange, window.defaultDateRange) rather than rebuilding them.
- Date range picker, left-most, labelled "⟨Claim Initiated Date⟩ : MM/DD/YY – MM/DD/YY",
  filtering on ⟨date field⟩. Default range = window.defaultDateRange(unique dates, 30).
  Calendar popover closes on outside click; "All" when cleared.
- "＋ Add More Filters" popover with these multi-select fields, each option list derived
  from the actual row data (no hardcoded option lists):
  ⟨field label → data key⟩, ⟨…⟩, ⟨…⟩   ⟨add as many as you want⟩
- Every applied filter appears as a removable chip in the bar; "Clear all" appears when
  ≥1 chip is active.
- Search input, right-aligned, placeholder "Search ⟨Patient⟩ Records", 240px, live
  substring match (case-insensitive) across ⟨fields to search⟩.
- Filters compose: date ∧ field filters ∧ search ∧ summary-card status ∧ automation
  status. Summary counts, table rows and pagination all reflect the composed result.
- Filter-chip rows keep the existing .chip-scroll drag-to-scroll behaviour.

# 8. OTHER BEHAVIOUR TO CARRY OVER VERBATIM
- Sorting on every sortable column, asc/desc toggle, sort survives filtering.
- Pagination: "Showing X–Y of Z", page-size selector, page buttons, resets to page 1
  when filters change.
- Review Mode toggle in the section band, and the per-row "Reviewed?" checkbox.
- Follow-up date state and the Add Note modal (window.AddNoteModal) if §6 uses a drawer.
- Sticky table header with the hairline shadow; table height computed from
  window.innerHeight so it fits the viewport, recomputed on resize.
- data-screen-label on the screen root ("01 ⟨Section⟩") for review comments.

# 9. VISUAL FIDELITY — no new design language
Pixel-match the reference. Reuse, do not reinvent:
- Chrome gradient rgb(56,71,90) → rgb(28,45,66); filter bar #eef4fb with #e2e8f0 rule;
  table header #f8fafc; canvas #fff; hairline #e2e8f0; link/accent #2563eb; active
  sub-tab #1677FF on rgba(208,217,229,0.11).
- Roboto only. Table cells 12/16, body 14/18, section title 20/24 at weight 500,
  overline 11/14. Never below 12px.
- 4px spacing grid; radii 2px tables/tags, 4px inputs/buttons, 6–8px cards.
- Status pill palettes follow the ERV_COV convention: {bg, border, color} per status
  (green #16a34a, red #dc2626, orange #f97316, blue #3f7ba8, slate #64748b).
- No emoji as UI icons; use the icons/ PNG+SVG set. Voice: terse, label-driven,
  Title Case noun phrases, "—" for null.

# 10. WIRING
1. Create ui_kits/eligibility-auth-web/⟨slug⟩-request-view.jsx (plus
   ⟨slug⟩-automation-log.jsx if automation is on). Inline styles only, no new CSS files.
2. End each new file with the window exposures it needs; guard with
   `if (typeof window !== "undefined")`.
3. Add <script type="text/babel" src="⟨slug⟩-request-view.jsx"></script> to
   prototype.html BEFORE prototype.jsx, alongside the other view scripts.
4. In prototype.jsx: add { key:"⟨section⟩", label:"⟨Tab Label⟩" } to the TopNav items,
   add a ⟨Name⟩Section component in the CDMSection mould (SectionBand + sub-tabs +
   review toggle, reading the view off window with a "Loading…" fallback), and add the
   section branch to the root router with its own sub-tab state.
5. Also register the tab in prototype-standalone-src.html / the standalone export path
   and in the Home tiles if the ⟨section⟩ should appear there.
6. Do NOT modify the Eligibility, Authorization, CDM or Dashboard screens, or any file
   in components/ or the root CSS. New code goes in the new files plus the minimal
   additions in prototype.html / prototype.jsx described above.

# ACCEPTANCE CHECKLIST — verify each before you report back
[ ] New tab appears in the top nav and switches to the new screen; other tabs unaffected.
[ ] Every column from §2 renders with the right cell type and no horizontal scroll at 1440px.
[ ] Every summary counter's number equals the number of rows the table shows when you click it.
[ ] Clicking a counter twice returns to the unfiltered table.
[ ] Date picker, each Add-More-Filters field, and search each visibly change the row set,
    and combine correctly with one another.
[ ] Filter chips remove their own filter.
[ ] Sorting works on every column marked sortable, both directions.
[ ] Pagination totals match the filtered row count.
[ ] The §6 clickable-summary target opens and its Back returns with filters intact.
[ ] The summary box matches the §4a style chosen — right counters, right order, right
    colors, and (Style B/C) the AT icon rendered inside each card at 18×18 with a tooltip.
[ ] Each summary card's icon is the same asset as that record's icon in the table row.
[ ] Automation strip / column / log present or absent exactly per §5, with no duplicated
    AT counters when Style B is used.
[ ] No console errors, no missing icon 404s, no React key warnings.
[ ] Screenshot the new screen and the clickable-summary target and confirm they read as
    the same product as the Eligibility Request View.
```

---

## Filling it in — quick reference

| Blank | What to put |
|---|---|
| §1 | The tab name and one-word router key. Everything else derives from it. |
| §2 | Your column list. This is the main thing that changes screen to screen. |
| §3 | Your rows — paste real data, or ask for generated rows using the shared patient names. |
| §4a | Pick Style A (business statuses only), B (AT status with icons in the box, CDM style), or C (both in one box). Then list your counters with label, color and derivation rule. |
| §5 | Keep or delete the automation block — and pick the variant that matches your §4a style so AT counters aren't duplicated. |
| §6 | Pick A–E for what the first-column link opens. |
| §7 | Your date field, your filter fields, your searchable fields. |

Everything outside those blanks is deliberately fixed — it is the part that keeps each
new screen indistinguishable from the Eligibility Request View.
