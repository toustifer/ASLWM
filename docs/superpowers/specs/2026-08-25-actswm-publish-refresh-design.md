# ActSWM Project Page — Publication Refresh Design

**Date:** 2026-08-25
**Status:** Approved by user (2026-08-25)

## Context

The ActSWM paper is now published on arXiv: `2607.26712` (submitted 2026-07-29, online 2026-08-15, CC BY 4.0). The project page at `D:\myprogram\ASLWM\index.html` still shows anonymous-review placeholders:

- Eyebrow: `AAAI 2027 Submission`
- Authors: `Anonymous Authors`
- Affiliation: `Affiliation withheld for review`
- BibTeX: `author = {Anonymous Authors}, journal = {Under review}`
- Paper button links to `#abstract` (no official link)

## User-Confirmed Decisions

1. **Venue label:** arXiv-only — `arXiv: 2607.26712` (no conference/journal name).
2. **Authors:** Show the real arXiv author list, no affiliations.
3. **Code link:** Keep `https://github.com/KeithBlackmore/ActsWM`.

## Official Metadata (from arXiv abs page)

- Title: ActSWM: Action-Sensitive World Models for Long-Horizon Planning in Open-World Games
- Authors: Zhenfeng Gan, ZiTong Zeng, Jiajun Cheng, Yeke Song, Yongyi Tang, Xueqian Wang
- arXiv ID: 2607.26712 · PDF: https://arxiv.org/pdf/2607.26712
- Primary class: cs.RO · License: CC BY 4.0

## Changes

### 1. Hero header
- Eyebrow `AAAI 2027 Submission` → `arXiv: 2607.26712`
- Replace `Anonymous Authors` with the six real author names (list-inline)
- Remove `Affiliation withheld for review`

### 2. Links bar
- Paper button: `href="#abstract"` → `https://arxiv.org/abs/2607.26712` (open in new tab)
- Add a new **PDF** button → `https://arxiv.org/pdf/2607.26712`, new icon `images/icons/pdf.svg` (accent-colored variant of paper.svg)
- Code link unchanged

### 3. BibTeX
Replace the under-review entry with a standard arXiv `@misc` entry:

```bibtex
@misc{actswm2026,
  title         = {ActSWM: Action-Sensitive World Models for Long-Horizon Planning in Open-World Games},
  author        = {Gan, Zhenfeng and Zeng, ZiTong and Cheng, Jiajun and Song, Yeke and Tang, Yongyi and Wang, Xueqian},
  year          = {2026},
  eprint        = {2607.26712},
  archivePrefix = {arXiv},
  primaryClass  = {cs.RO}
}
```

- Note under BibTeX: "…please cite our paper: arXiv:2607.26712" (with link)

### 4. Meta / OG
- `og:url` (currently empty) → `https://arxiv.org/abs/2607.26712`

### 5. Footer
- Add arXiv link; drop "refreshed for the current paper version" phrasing

## Out of Scope

- Affiliations, conference/journal venue name, datasets/videos hosting, final hosted page URL
- Any change to CSS layout or the data-pipelines section

## Acceptance Criteria

1. No "Anonymous", "under review", "Submission", or "withheld" text remains on the page.
2. Paper + PDF buttons open the correct arXiv URLs in a new tab.
3. BibTeX copy button works with the new arXiv entry.
4. Local static server serves the page (HTTP 200) and page renders.