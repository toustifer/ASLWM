# ActSWM Website Refresh Spec

## Goal

Upgrade the existing single-page ASLWM project site into a more polished ActSWM paper page while preserving the current static-site framework. The refreshed site should present the paper contribution as the main story, with roughly 70% of the page focused on the ActSWM method and experiments, and 30% focused on the supporting cross-game data pipelines.

## Constraints

- Keep the existing single-page static HTML structure.
- Keep the current Bootstrap-based styling as the base.
- Prefer small structural changes over a full visual redesign.
- Do not introduce a build system or multi-page architecture.
- Do not formalize all header links in this pass.
- Replace all legacy `ASLWM` naming with `ActSWM`.
- Preserve `Exp.1`, `Exp.2`, `Exp.3`, and `BibTeX` as major sections.
- Add a dedicated `Data Pipelines` section after the experiments.

## Narrative Priorities

1. The page should read first as a paper results page, not as a template.
2. The strongest paper claim should appear early in the page.
3. The experiments should form a clear argument chain:
   - Exp.1 establishes the failure mode and shows ActSWM fixes it.
   - Exp.2 shows the planning benefit.
   - Exp.3 shows cross-game action-recovery value.
4. The data pipelines should appear as an explicit supporting engineering contribution, not as the main storyline.

## Information Architecture

### 1. Hero

Keep the current top-of-page title, author, and action-button region, but convert it from old placeholder/ASLWM wording into a credible ActSWM project header.

Required changes:
- Change the page title and visible hero title to:
  `ActSWM: Action-Sensitive World Models for Long-Horizon Planning in Open-World Games`
- Remove obvious old-version terminology.
- Keep the author and institution area in place, but make it look less like an unfinished template.
- Do not require final real publication/resource links yet.

Intent:
- The first screen should immediately signal that this is an ActSWM paper page with concrete results.

### 2. Front-Loaded Result Signal

Before the user gets deep into the page, they should already see the strongest evidence that the work matters.

Recommended direction:
- Use a result-forward visual near the top rather than letting the page feel like a method template.
- Prefer a key result figure such as the step-drift comparison or another strongest-summary result visual.
- If needed, pair the hero-adjacent visual with a short result summary sentence.

Intent:
- The page should feel paper-result-first, then method-second.

### 3. Abstract / Problem Framing

Retain an abstract section, but rewrite it for web reading.

Required changes:
- Compress the abstract into 2-3 readable web paragraphs.
- Emphasize:
  - Context Collapse as the key failure mode.
  - Action-sensitive long-horizon rollouts as the core objective.
  - Improvements in planning, cross-game action recovery, and pseudo-labeling potential.

Intent:
- The web abstract should summarize the paper, not reproduce a dense paper abstract block.

### 4. Method

Keep the method section in the current page skeleton, but align it with the current paper framing.

Required changes:
- Preserve the overall method block location.
- Keep the component-oriented explanation style.
- Update all wording to current ActSWM terminology.
- Keep the method architecture visual if it still matches the paper.
- If `IGLS` is no longer central to the current paper story, reduce its visual and textual prominence so it does not compete with the ActSWM core method.

Intent:
- The method section should explain why the approach works, not dominate the page with outdated or secondary details.

## Experiments Design

### Exp.1: Context Collapse / Step-Drift Diagnosis

Purpose:
- Define the failure mode clearly and show that ActSWM addresses action-insensitive long-horizon rollouts rather than only improving prediction fidelity.

Required content:
- Keep the main step-drift visual.
- Keep or simplify the ablation table only if it supports the main claim.
- Rewrite the section to focus on:
  - Longer context does not automatically preserve action conditioning.
  - Prediction similarity alone is insufficient.
  - ActSWM increases action gap while preserving useful rollout quality.

Required takeaway:
- End the section with a concise statement that ActSWM fixes action-insensitive long-horizon rollouts, not just standard prediction quality.

### Exp.2: Closed-Loop Planning

Purpose:
- Show that action-sensitive latent dynamics improve actual planning outcomes.

Required content:
- Keep the main planning result figure.
- Reduce visual weight of repetitive per-task filler if needed.
- Keep focus on the clearest gains, especially stone mining and pillar building.
- Treat torch placement as a smaller supporting result because it is already near saturation.

Required takeaway:
- Make clear that the method improves planning reliability, not only latent metrics.

### Exp.3: Cross-Game Local Action Recovery

Purpose:
- Keep this as a real paper experiment, not as an appendix-like add-on.

Required content:
- Preserve the cross-game framing across CS2, GTA V, and Apex Legends.
- Preserve the main result table, but rewrite interpretation around:
  - Cross-game transfer.
  - Better action-discriminative representations.
  - Pseudo-labeling relevance.

Required takeaway:
- State that ActSWM learns action-recoverable dynamics beyond the Minecraft planning setting.

### Experiments Cohesion

Across all three experiments, keep a consistent presentation rhythm:
- A short setup paragraph.
- One dominant figure or table.
- A short results explanation.
- One explicit takeaway sentence.

Intent:
- The experiments should read as one argument chain, not as disconnected result dumps.

## Data Pipelines Section

Add a new major section after the experiments named `Data Pipelines` or equivalent wording close to that.

Purpose:
- Present the cross-game data engineering contribution as a support pillar for the paper and for Exp.3.
- Show that the cross-game evaluation rests on substantial game-aware systems work.

### Section Introduction

Open the section with a short explanation that these pipelines were built to support ActSWM, IDM, and world-model training/evaluation across different game environments.

The intro should clearly frame the section as:
- Not a generic scraping workflow.
- Not the main paper storyline.
- A supporting engineering contribution that enables cross-game supervision and evaluation.

### Top-Level Comparison Table

Place a compact overview table at the start of the section.

Suggested columns:
- Game
- Data source
- Core pipeline stages
- Key filtering or synchronization logic
- Output format
- Engineering characteristic or complexity

Use the summary material from the pipeline notes, but compress it for webpage scanning.

### Per-Pipeline Expanded Blocks

After the overview table, expand the three pipelines vertically in this order:
1. GTA V
2. Apex Legends
3. CS2

For each pipeline block, use a consistent structure:
- A GIF demo.
- A short `Goal` explanation.
- A short `Pipeline` explanation.
- A short `Why it matters` explanation.

#### GTA V

Emphasize:
- Discover -> Download -> Segment -> Filter -> Export.
- Blacklist-style non-gameplay filtering.
- Large-scale automation, resumability, and parallelism.

#### Apex Legends

Emphasize:
- The pipeline is not just a GTA parameter port.
- The main redesign is gameplay detection via HUD-oriented whitelisting.
- Multi-language video discovery and HUD-template-based filtering.

#### CS2

Emphasize:
- Replay parsing.
- Programmatic replay control.
- WGC-based capture.
- Frame-event alignment.
- Direct generation of synchronized training samples rather than only cleaned videos.

### Section Closing

End the section with a short bridge back to the paper:
- These pipelines support cross-game action recovery and pseudo-labeling scenarios.
- Building trainable gameplay data across games requires substantial game-aware systems engineering.

Intent:
- The section should feel substantial, but it must still remain subordinate to the main ActSWM paper story.

## Contributions Section

Retain the contributions section near the end, but rewrite it to match the current paper and the refreshed page narrative.

Target contribution structure:
1. ActSWM as an action-sensitive world model for long-horizon planning.
2. Stronger planning and action-sensitive experimental results.
3. Cross-game data pipelines and pseudo-labeling-oriented data support.

Intent:
- The contributions cards should summarize the whole page after the user has seen method, results, and data support.

## Content Cleanup Rules

### Must Replace

- All visible `ASLWM` naming.
- Old-version terminology that conflicts with the current paper.
- Template-like filler wording in the hero, section intros, and contribution cards.
- Placeholder references that no longer belong in the refreshed page.

### Must Remove or Reduce

- Placeholder images and placeholder video references.
- Obvious template text such as generic author placeholders and unfinished institutional placeholders, or at minimum reduce their unfinished appearance in this pass.
- Overlong text blocks that read like raw paper paste.
- Secondary method elements that are no longer central to the current paper story.

### Must Preserve

- Existing single-page structure.
- Existing static-site implementation style.
- Existing major section skeleton.
- Existing real result assets already added to the repo.

## Assets Strategy

Expected asset mix for this refresh:
- Existing real paper result figures already placed in `images/`.
- GIF assets for the three data pipelines.
- Possibly some remaining static visuals tied to experiments or method.

Asset presentation rules:
- Use the strongest result figure early.
- Use GIFs only in the `Data Pipelines` section unless there is a strong paper-story reason elsewhere.
- Keep media grouped by section so the page feels intentional rather than patched together.

## Out of Scope for This Pass

- Full visual redesign.
- Migration to a framework or build pipeline.
- Multi-page site split.
- Complex interactive features.
- Finalization of all external resource links.
- Final publication metadata cleanup beyond what is needed for page credibility.

## Implementation Notes

Primary files expected to change:
- `index.html`
- `css/app.css`
- `js/app.js` only if section behavior or media presentation needs minor support changes
- `images/` and `videos/` assets as needed for the refreshed content

Expected editing style:
- Prefer restructuring and rewriting existing HTML over introducing a new architecture.
- Keep CSS changes scoped to layout polish and new section support.
- Keep JavaScript changes minimal and only for behavior that improves the current page experience.

## Acceptance Criteria

The refresh is successful if:
- The page reads as `ActSWM`, not `ASLWM`.
- The first screen communicates paper value quickly.
- The experiments are clearer and more argument-driven.
- Exp.3 remains a real paper result section.
- A new `Data Pipelines` section exists with:
  - one overview comparison table,
  - three vertically expanded pipeline blocks,
  - GIF-based demonstrations.
- The page still feels like the original site evolved, not like a completely different product.
- The overall narrative balance stays close to 70% paper / 30% pipelines.

## Summary

This refresh should turn the current old-version template-like paper page into a more convincing ActSWM project page by preserving the original static-site framework, bringing the strongest results forward, keeping the three-paper-experiment structure, and adding a dedicated but subordinate data-pipelines section that showcases GTA V, Apex Legends, and CS2 engineering support.