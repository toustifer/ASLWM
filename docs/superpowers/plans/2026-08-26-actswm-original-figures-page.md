# ActSWM Original Figures Page Implementation Plan

**Goal:** Update the ASLWM English and Chinese project pages so the site title is ActSWM and all displayed research imagery comes from the original ActSWM paper figures.

**Files:**
- Modify `D:/myprogram/ASLWM/index.html`: set the browser/social title to ActSWM, keep the full paper title as the hero subtitle, remove non-paper SVGs from the quick-link row, and preserve the existing paper PNG figures and verified experiment data.
- Modify `D:/myprogram/ASLWM/zh/index.html`: apply the same title and image policy to the Chinese page with relative paths.
- Modify `D:/myprogram/ASLWM/css/app.css`: style the text-only quick-link row after its SVG icons are removed.

**Original figures already in the repository:** `paper_framework.png`, `model_architecture.png`, `step_drift_two_panel.png`, `step_drift_action_sensitivity.png`, `step_drift_combined.png`, `step_drift_cosine.png`, `step_drift_action_gap.png`, `planning_results.png`, `planning_by_task.png`, and `multi_track_pipeline.png`.

**Validation:** search both HTML files for placeholder or SVG image references, verify every PNG reference exists, run `git diff --check`, and verify the deployed English and Chinese URLs return HTTP 200 with the ActSWM title and representative original figures.
