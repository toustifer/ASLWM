# ActSWM Page Publication Refresh — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Turn the ActSWM project page from an anonymous under-review page into a published arXiv project page.

**Architecture:** Static single-page site (Bootstrap 5) at `D:\myprogram\ASLWM\`. All content changes live in `index.html`; one new icon `images/icons/pdf.svg`.

**Tech Stack:** HTML/CSS/JS static site (Bootstrap 5, jQuery).

---

### Task 1: Update hero header (venue label, authors, affiliation)

**Files:**
- Modify: `D:\myprogram\ASLWM\index.html` (eyebrow line ~59, authors block ~69-72)

- [ ] **Step 1:** Replace eyebrow `AAAI 2027 Submission` with `arXiv: 2607.26712`
- [ ] **Step 2:** Replace the authors `<ul>` with the six real names and delete the affiliation paragraph

---

### Task 2: Update links bar (Paper URL + new PDF button)

**Files:**
- Modify: `D:\myprogram\ASLWM\index.html` (links bar ~79-110)
- Create: `D:\myprogram\ASLWM\images\icons\pdf.svg`

- [ ] **Step 1:** Point Paper button at `https://arxiv.org/abs/2607.26712` with `target="_blank" rel="noopener"`
- [ ] **Step 2:** Insert a PDF button (col-md-2) before the Code button, linking `https://arxiv.org/pdf/2607.26712`, using `images/icons/pdf.svg`
- [ ] **Step 3:** Create `images/icons/pdf.svg` (same geometry as paper.svg, accent fill `#1a6b9c`)

---

### Task 3: BibTeX + citation note + meta + footer

**Files:**
- Modify: `D:\myprogram\ASLWM\index.html`

- [ ] **Step 1:** Replace BibTeX content with the arXiv `@misc{actswm2026, ...}` entry (eprint 2607.26712, archivePrefix arXiv, primaryClass cs.RO)
- [ ] **Step 2:** Replace the "temporary reference … under review" note with "please cite our paper: arXiv:2607.26712" (linked)
- [ ] **Step 3:** Fill `og:url` meta with `https://arxiv.org/abs/2607.26712`
- [ ] **Step 4:** Footer: add arXiv link, remove "refreshed for the current paper version"

---

### Task 4: Verify

- [ ] **Step 1:** Grep `index.html` for banned tokens and for the new links:

Run:
```powershell
rg -n "Anonymous|Under review|Submission|withheld" "D:/myprogram/ASLWM/index.html"
rg -n "arxiv.org/abs/2607.26712|arxiv.org/pdf/2607.26712|Zhenfeng Gan|primaryClass" "D:/myprogram/ASLWM/index.html"
```
Expected: no output from the first command; matches from the second.

- [ ] **Step 2:** Serve and check:

```powershell
python -m http.server 3181 --bind 127.0.0.1 --directory "D:/myprogram/ASLWM"
curl.exe -s -o NUL -w "%{http_code}" http://127.0.0.1:3181/
curl.exe -s http://127.0.0.1:3181/ | rg -o "arXiv: 2607.26712|Zhenfeng Gan|pdf.svg"
```
Expected: `200`; both patterns present.

---

### Task 5: Commit

- [ ] **Step 1:** Commit in the ASLWM repo:

```powershell
git -C "D:/myprogram/ASLWM" add index.html images/icons/pdf.svg docs/superpowers/specs/2026-08-25-actswm-publish-refresh-design.md docs/superpowers/plans/2026-08-25-actswm-publish-refresh.md
git -C "D:/myprogram/ASLWM" commit -m "feat: mark page as published on arXiv 2607.26712"
```