# Assignment 2 — WCB Manitoba Forms (Pug + Express)

Pug-rendered, print-ready recreations of the two WCB Manitoba PDF forms from
Assignment 1:

1. **Medical & Travel Expense Request** — `/expense-request`
2. **Worker Progress Report** — `/progress-report`

## Run

```bash
npm install
npm start
# open http://localhost:3000
```

## How each requirement is met

| # | Requirement | Where |
|---|-------------|-------|
| 1 | Pug templates render the pages | `views/*.pug` with a shared `layout.pug` |
| 2 | Output mimics the shared PDF forms | Same headers, sections, tables, boxes, marks, footers as the PDFs; values shown read-only |
| 3 | Simulated backend data, two switchable datasets, no on-screen entry | `data/expenseData.js` and `data/progressData.js` each export datasets 1 & 2; the on-page **dataset switcher** (`?dataset=1` / `?dataset=2`) swaps them live; every field renders read-only |
| 4 | Print to A4 with correct footer placement | `@page { size: A4 }` + `@media print` in `public/css/style.css`. The sheet becomes a flex column ≥ one page tall and the footer uses `margin-top:auto`, so short data (dataset 1) still puts the footer at the bottom edge of page 1, while long data (dataset 2) flows across pages with the footer at the end of the last page. Table rows/boxes never split across pages and table headers repeat on every page |

## Good coding practice

- **Mixins for reuse between forms** (`views/mixins/layout-mixins.pug`):
  `docHeader`, `introLine`, `sectionTitle`, `noteText`, `docFooter`,
  `datasetSwitcher` — both forms share the same header/footer/section markup.
- **Mixins for reuse within a form** (`views/mixins/field-mixins.pug`):
  one generic `dataTable` mixin renders **all six** expense tables from
  `{ columns, rows }` definitions; `optionRadio`, `optionCheck`,
  `underlineValue`, `freeText`, `painScale`, `questionBox` build every
  question in the progress report; `expenseSection` composes mixins
  inside a mixin.
- **Data-driven templates**: `expense-request.pug` is a single loop over
  `data.sections` — adding a new table section requires only a data change.
- **Comments** throughout `server.js`, both data files, every mixin file,
  every template, and the stylesheet.

## Demo flow

1. `npm start`, open a form.
2. Click **Dataset 1 / Dataset 2** to switch the simulated backend data.
3. Click **Print / Save as PDF** (or Ctrl+P), choose A4 → the switcher and
   any screen chrome disappear; verify footer placement with both datasets.
