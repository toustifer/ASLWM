# ActSWM Website Refresh Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Refresh the existing static ActSWM project page so it reads like a credible paper-results site, keeps the original single-page framework, and adds a dedicated Data Pipelines section with GIF demos.

**Architecture:** Keep the current `index.html`-driven single-page layout and Bootstrap base, but rewrite the content hierarchy so the page leads with ActSWM results, preserves the three experiment sections, and adds a new `Data Pipelines` section after experiments. Styling changes stay in `css/app.css`, and JavaScript changes stay minimal in `js/app.js`, mainly to remove stale video behavior and preserve navigation/copy interactions.

**Tech Stack:** Static HTML, Bootstrap 5 CDN, custom CSS, jQuery, clipboard.js, Python `http.server`, `rg`, `curl`

---

## File Structure

- `index.html`
  - Owns the entire single-page information architecture.
  - Will be updated in four zones:
    - `index.html:1-125` for document title, nav, hero, and top action bar.
    - `index.html:126-260` for the result-forward top visual, abstract, and method framing.
    - `index.html:263-427` for Exp.1 and Exp.2 copy/layout tightening.
    - `index.html:429-601` for Exp.3 rewrite, the new `Data Pipelines` section, updated contributions, BibTeX, and footer.
- `css/app.css`
  - Owns layout polish for hero/result framing, experiment takeaways, pipeline table/cards, GIF sizing, and responsive behavior.
- `js/app.js`
  - Keeps copy-to-clipboard, back-to-top, smooth-scroll, and active-nav behavior.
  - Drops stale hover-to-play video behavior once the page uses GIFs instead of embedded demo videos.
- `images/model_architecture.png`
  - Existing method figure, keep if it still matches the paper.
- `images/step_drift_two_panel.png`
  - Primary step-drift result visual; use early.
- `images/step_drift_action_sensitivity.png`
  - Method/diagnostic support visual.
- `images/step_drift_combined.png`
  - Exp.1 supporting result visual.
- `images/planning_results.png`
  - Exp.2 primary result visual.
- `images/planning_by_task.png`
  - Candidate static support visual for planning tasks.
- `images/pipeline-gta.gif`
  - New GTA V pipeline demo asset copied from the source materials folder.
- `images/pipeline-apex.gif`
  - New Apex Legends pipeline demo asset copied from the source materials folder.
- `images/pipeline-cs2.gif`
  - New CS2 pipeline demo asset copied from the source materials folder.
- `docs/superpowers/specs/2026-07-15-actswm-website-refresh.md`
  - Approved scope/spec document; read before editing.

### Task 1: Rebrand The Page Shell And Hero

**Files:**
- Modify: `index.html:1-125`
- Test: content smoke checks via `rg` on `index.html`

- [ ] **Step 1: Write the failing test**

Run:

```bash
rg -n "ASLWM|Author 1|Author 2|Your Institution|href=\"#\"" "D:/myprogram/ASLWM/index.html"
```

Expected: multiple matches showing old branding, placeholder author text, and unfinished hero links.

- [ ] **Step 2: Run test to verify it fails**

Run:

```bash
rg -n "ActSWM: Action-Sensitive World Models for Long-Horizon Planning in Open-World Games" "D:/myprogram/ASLWM/index.html"
```

Expected: no matches.

- [ ] **Step 3: Write minimal implementation**

Update the document title, nav, hero, and top action links so the page is clearly an ActSWM project page and no longer reads like an unfinished ASLWM template.

```html
<title>ActSWM: Action-Sensitive World Models for Long-Horizon Planning in Open-World Games</title>

<nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top border-bottom">
  <div class="container">
    <a class="navbar-brand fw-bold" href="#top">ActSWM</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item"><a class="nav-link" href="#abstract">Abstract</a></li>
        <li class="nav-item"><a class="nav-link" href="#method">Method</a></li>
        <li class="nav-item"><a class="nav-link" href="#exp1">Exp.1</a></li>
        <li class="nav-item"><a class="nav-link" href="#exp2">Exp.2</a></li>
        <li class="nav-item"><a class="nav-link" href="#exp3">Exp.3</a></li>
        <li class="nav-item"><a class="nav-link" href="#pipelines">Pipelines</a></li>
        <li class="nav-item"><a class="nav-link" href="#bibtex">BibTeX</a></li>
      </ul>
    </div>
  </div>
</nav>

<div class="container" id="main">
  <div class="row mt-5" id="top">
    <div class="col-md-12 text-center">
      <h1 class="fw-bold hero-title">ActSWM: Action-Sensitive World Models for Long-Horizon Planning in Open-World Games</h1>
      <h3 class="text-muted mt-2 hero-subtitle">
        Action-sensitive latent rollouts for long-horizon planning, cross-game action recovery, and scalable pseudo-labeling.
      </h3>
    </div>
  </div>

  <div class="row mt-3">
    <div class="col-md-12 text-center">
      <ul class="list-inline authors">
        <li class="list-inline-item">Anonymous Authors</li>
      </ul>
      <p class="text-muted">Affiliation withheld for review</p>
      <p class="hero-summary mx-auto">
        ActSWM identifies Context Collapse in latent world models and preserves action-conditioned rollout separation under long horizons.
      </p>
    </div>
  </div>

  <div class="row justify-content-md-center mt-4 links-bar">
    <div class="col-md-2 text-center">
      <a href="#abstract" class="text-decoration-none">
        <img src="images/icons/paper.svg" height="50" alt="Paper">
        <h5 class="mt-1"><strong>Paper</strong></h5>
      </a>
    </div>
    <div class="col-md-2 text-center">
      <a href="https://github.com/KeithBlackmore/ActsWM" target="_blank" class="text-decoration-none">
        <img src="images/icons/github.svg" height="50" alt="Code">
        <h5 class="mt-1"><strong>Code</strong></h5>
      </a>
    </div>
    <div class="col-md-2 text-center">
      <a href="#exp2" class="text-decoration-none">
        <img src="images/icons/video.svg" height="50" alt="Results">
        <h5 class="mt-1"><strong>Results</strong></h5>
      </a>
    </div>
    <div class="col-md-2 text-center">
      <a href="#pipelines" class="text-decoration-none">
        <img src="images/icons/data.svg" height="50" alt="Pipelines">
        <h5 class="mt-1"><strong>Pipelines</strong></h5>
      </a>
    </div>
    <div class="col-md-2 text-center">
      <a href="#bibtex" class="text-decoration-none">
        <img src="images/icons/model.svg" height="50" alt="Citation">
        <h5 class="mt-1"><strong>Citation</strong></h5>
      </a>
    </div>
  </div>
</div>
```

- [ ] **Step 4: Run test to verify it passes**

Run:

```bash
rg -n "ASLWM|Author 1|Author 2|Your Institution" "D:/myprogram/ASLWM/index.html"
```

Expected: no matches.

Then run:

```bash
rg -n "ActSWM: Action-Sensitive World Models for Long-Horizon Planning in Open-World Games|href=\"#pipelines\"|Anonymous Authors" "D:/myprogram/ASLWM/index.html"
```

Expected: matches for the new title, pipelines nav link, and neutral author treatment.

- [ ] **Step 5: Commit**

```bash
git -C "D:/myprogram/ASLWM" add index.html
git -C "D:/myprogram/ASLWM" commit -m "feat: rebrand project page hero to ActSWM"
```

### Task 2: Rewrite The Top Visual, Abstract, Method Framing, And Exp.1/Exp.2 Copy

**Files:**
- Modify: `index.html:126-427`
- Test: content regression checks via `rg` on `index.html`

- [ ] **Step 1: Write the failing test**

Run:

```bash
rg -n "Building generalist agents|We evaluate model variants on cumulative prediction error|We evaluate ASLWM \+ IGLS|Instruction-Grounded Latent Scorer \(IGLS\)" "D:/myprogram/ASLWM/index.html"
```

Expected: matches showing the old long-form copy and the older method/planning framing.

- [ ] **Step 2: Run test to verify it fails**

Run:

```bash
rg -n "Context Collapse|action-sensitive rollouts|planning reliability|pseudo-labeling" "D:/myprogram/ASLWM/index.html"
```

Expected: either no matches or only partial matches; the full refreshed framing is not present yet.

- [ ] **Step 3: Write minimal implementation**

Rework the top result visual, shorten the abstract, keep the method section but align it with the current paper story, and tighten Exp.1/Exp.2 into a clearer argument chain.

```html
<div class="row justify-content-md-center mt-5 hero-result-row">
  <div class="col-md-10 col-lg-9">
    <div class="hero-result-card">
      <p class="eyebrow text-uppercase mb-2">Key Result</p>
      <img src="images/step_drift_two_panel.png" width="100%" alt="ActSWM step-drift comparison" class="img-fluid border rounded">
      <p class="text-muted text-center small mt-3 mb-0">
        ActSWM preserves action-conditioned rollout separation under long horizons, avoiding the action-insensitive collapse seen in stronger-context LeWM baselines.
      </p>
    </div>
  </div>
</div>

<div class="row justify-content-md-center mt-4" id="abstract">
  <div class="col-md-10 col-lg-8">
    <h3 class="mt-4 mb-3 section-heading">Abstract</h3>
    <p>
      Latent world models are attractive for efficient planning, but long-horizon prediction quality alone does not guarantee that planned actions still change imagined futures in a useful way.
      We identify <strong>Context Collapse</strong>, a failure mode where stronger visual context preserves plausible rollouts while suppressing action-conditioned separation.
    </p>
    <p>
      <strong>ActSWM</strong> addresses this by explicitly encouraging action-sensitive latent rollouts. The model combines representation-space prediction with rollout separation pressure and a fixed inverse-dynamics constraint so that alternative actions remain distinguishable over long horizons.
    </p>
    <p>
      Across step-drift diagnosis, closed-loop Minecraft planning, and cross-game local action recovery, ActSWM improves planning reliability, preserves stronger action gaps, and supports pseudo-labeling from unlabeled gameplay videos.
    </p>
  </div>
</div>

<div class="row justify-content-md-center mt-4" id="method">
  <div class="col-md-10 col-lg-8">
    <h3 class="mt-4 mb-3 section-heading">Method</h3>
    <div class="card mb-4 bg-light">
      <div class="card-header"><h5 class="mb-0">Context Collapse</h5></div>
      <div class="card-body">
        <p>
          Longer latent context can improve future-state similarity while still making rollouts nearly invariant to action changes.
          For planning, this is a deeper failure than standard compounding error because the planner loses the ability to compare downstream consequences of different controls.
        </p>
        <p class="text-center mb-0">
          <img src="images/step_drift_action_sensitivity.png" width="80%" alt="Action sensitivity under long context" class="img-fluid border rounded">
        </p>
      </div>
    </div>

    <div class="card mb-4 bg-light">
      <div class="card-header"><h5 class="mb-0">ActSWM Design</h5></div>
      <div class="card-body">
        <div class="row">
          <div class="col-md-4 mb-3">
            <div class="card h-100 border-primary">
              <div class="card-body text-center">
                <h5 class="card-title text-primary">1. Prediction Backbone</h5>
                <p class="card-text small">A JEPA-style latent world model predicts future representations efficiently in action-conditioned latent space.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-3">
            <div class="card h-100 border-success">
              <div class="card-body text-center">
                <h5 class="card-title text-success">2. Rollout Separation</h5>
                <p class="card-text small">A hinge-style action-separation loss keeps true-action and alternative-action futures distinguishable during long rollouts.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-3">
            <div class="card h-100 border-warning">
              <div class="card-body text-center">
                <h5 class="card-title text-warning">3. Fixed IDM Constraint</h5>
                <p class="card-text small">A frozen inverse-dynamics readout turns action recovery into a stable geometric constraint on latent transitions.</p>
              </div>
            </div>
          </div>
        </div>
        <p class="text-center mb-0">
          <img src="images/model_architecture.png" width="100%" alt="ActSWM architecture" class="img-fluid border rounded">
        </p>
      </div>
    </div>
  </div>
</div>

<div class="row justify-content-md-center mt-4" id="exp1">
  <div class="col-md-10 col-lg-8">
    <h3 class="mt-4 mb-3 section-heading">Experiment 1: Diagnosing Context Collapse</h3>
    <p>
      We evaluate whether stronger context and stronger rollout prediction actually preserve action-conditioned separation. The key metric is not only future-state similarity, but the action gap between ground-truth-action and alternative-action rollouts.
    </p>
    <p class="text-center mt-3">
      <img src="images/step_drift_combined.png" width="90%" alt="Step-drift results" class="img-fluid border rounded">
    </p>
    <p class="text-muted text-center small">
      ActSWM preserves a much larger action gap than LeWM variants while maintaining strong rollout quality under long contexts.
    </p>
    <div class="alert alert-info takeaway-box">
      <strong>Takeaway:</strong> ActSWM improves long-horizon planning usefulness by fixing action-insensitive rollouts, not merely by increasing prediction fidelity.
    </div>
  </div>
</div>

<div class="row justify-content-md-center mt-4" id="exp2">
  <div class="col-md-10 col-lg-8">
    <h3 class="mt-4 mb-3 section-heading">Experiment 2: Closed-Loop Planning</h3>
    <p>
      We test whether action-sensitive latent dynamics improve real planning outcomes in MineStudio tasks. The largest gains appear on tasks that require sustained action consequences rather than short saturated behaviors.
    </p>
    <p class="text-center mt-3">
      <img src="images/planning_results.png" width="85%" alt="Planning success rates" class="img-fluid border rounded">
    </p>
    <p class="text-muted text-center small">
      Torch placement is nearly saturated, while stone mining and pillar building show the clearest gains from more reliable action-conditioned rollouts.
    </p>
    <div class="alert alert-info takeaway-box">
      <strong>Takeaway:</strong> Better action-sensitive latent dynamics translate into more reliable planning, not just better internal metrics.
    </div>
  </div>
</div>
```

- [ ] **Step 4: Run test to verify it passes**

Run:

```bash
rg -n "Building generalist agents|We evaluate model variants on cumulative prediction error|We evaluate ASLWM \+ IGLS" "D:/myprogram/ASLWM/index.html"
```

Expected: no matches.

Then run:

```bash
rg -n "Context Collapse|ActSWM Design|Takeaway:|planning reliability|pseudo-labeling" "D:/myprogram/ASLWM/index.html"
```

Expected: matches across the refreshed abstract, method, and experiment sections.

- [ ] **Step 5: Commit**

```bash
git -C "D:/myprogram/ASLWM" add index.html
git -C "D:/myprogram/ASLWM" commit -m "feat: rewrite ActSWM abstract and experiment narrative"
```

### Task 3: Rewrite Exp.3, Add The Data Pipelines Section, And Refresh Contributions

**Files:**
- Modify: `index.html:429-601`
- Test: structure/content checks via `rg` on `index.html`

- [ ] **Step 1: Write the failing test**

Run:

```bash
rg -n "Data Pipelines|pipeline-gta.gif|pipeline-apex.gif|pipeline-cs2.gif|placeholder-cs2|placeholder-gta|placeholder-apex" "D:/myprogram/ASLWM/index.html"
```

Expected: placeholder image matches exist, but the new `Data Pipelines` section and GIF references do not.

- [ ] **Step 2: Run test to verify it fails**

Run:

```bash
rg -n "Cross-Game Local Action Recovery|game-aware systems engineering|pseudo-labeling" "D:/myprogram/ASLWM/index.html"
```

Expected: either no matches or incomplete matches; the refreshed Exp.3 and pipelines framing is not in place yet.

- [ ] **Step 3: Write minimal implementation**

Keep Exp.3 as a real paper result, insert the new `Data Pipelines` section after experiments, and rewrite the contributions cards to match the approved 70/30 narrative.

```html
<div class="row justify-content-md-center mt-4" id="exp3">
  <div class="col-md-10 col-lg-8">
    <h3 class="mt-4 mb-3 section-heading">Experiment 3: Cross-Game Local Action Recovery</h3>
    <p>
      We evaluate whether ActSWM learns action-recoverable latent dynamics beyond the Minecraft planning setting. Using CS2, GTA V, and Apex Legends video windows, we test whether the model can recover action information from local transitions across visually different games.
    </p>
    <div class="table-responsive">
      <!-- keep the updated local-action-recovery results table here -->
    </div>
    <p class="text-muted text-center small">
      ActSWM improves cross-game action recovery quality and strengthens the case for pseudo-labeling from unlabeled gameplay videos.
    </p>
    <div class="alert alert-info takeaway-box">
      <strong>Takeaway:</strong> ActSWM learns action-recoverable dynamics that transfer beyond Minecraft planning into cross-game video understanding.
    </div>
  </div>
</div>

<div class="row justify-content-md-center mt-4" id="pipelines">
  <div class="col-md-10 col-lg-8">
    <h3 class="mt-4 mb-3 section-heading">Data Pipelines</h3>
    <p>
      To support world-model training, inverse-dynamics supervision, and cross-game evaluation, we built three game-aware data pipelines spanning weakly controlled public-video collection and strongly controlled replay-driven sample generation.
    </p>

    <div class="table-responsive mb-4">
      <table class="table table-bordered table-hover align-middle text-center pipeline-overview-table">
        <thead class="table-dark">
          <tr>
            <th>Game</th>
            <th>Data Source</th>
            <th>Core Pipeline</th>
            <th>Key Logic</th>
            <th>Output</th>
            <th>Engineering Focus</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>GTA V</td>
            <td>YouTube / Bilibili</td>
            <td>Discover → Download → Segment → Filter → Export</td>
            <td>Blacklist-style non-gameplay filtering</td>
            <td>Clean clips + manifest</td>
            <td>Large-scale automation and resumability</td>
          </tr>
          <tr>
            <td>Apex Legends</td>
            <td>YouTube</td>
            <td>Discover → Download → Segment → Filter → Export</td>
            <td>HUD-oriented gameplay whitelisting</td>
            <td>Clean clips + manifest</td>
            <td>Task-specific filtering redesign</td>
          </tr>
          <tr>
            <td>CS2</td>
            <td>Replay demos</td>
            <td>Parse → Control → Capture → Align → Export</td>
            <td>Replay control + frame-event synchronization</td>
            <td>Window-level training samples</td>
            <td>Programmatic data generation</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="pipeline-block mb-5">
      <h5 class="fw-bold">GTA V Pipeline</h5>
      <img src="images/pipeline-gta.gif" alt="GTA V pipeline demo" class="img-fluid border rounded pipeline-gif mb-3">
      <p><strong>Goal:</strong> Automatically discover and clean gameplay clips suitable for world-model and inverse-dynamics training.</p>
      <p><strong>Pipeline:</strong> Candidate discovery, low-resolution download, scene-based segmentation, blacklist-style filtering, and manifest-backed export.</p>
      <p><strong>Why it matters:</strong> The pipeline supports large-scale automation, resumability, and parallel clip cleaning in noisy public-video environments.</p>
    </div>

    <div class="pipeline-block mb-5">
      <h5 class="fw-bold">Apex Legends Pipeline</h5>
      <img src="images/pipeline-apex.gif" alt="Apex Legends pipeline demo" class="img-fluid border rounded pipeline-gif mb-3">
      <p><strong>Goal:</strong> Mine valid combat gameplay from public Apex videos without over-filtering stationary but meaningful combat states.</p>
      <p><strong>Pipeline:</strong> Multi-language discovery, low-resolution download, scene-based segmentation, and HUD-driven gameplay whitelisting.</p>
      <p><strong>Why it matters:</strong> This is a task-specific redesign rather than a GTA parameter port, with filtering logic rebuilt around combat HUD structure.</p>
    </div>

    <div class="pipeline-block mb-4">
      <h5 class="fw-bold">CS2 Pipeline</h5>
      <img src="images/pipeline-cs2.gif" alt="CS2 pipeline demo" class="img-fluid border rounded pipeline-gif mb-3">
      <p><strong>Goal:</strong> Generate synchronized training data directly from replay demos instead of relying on noisy public videos.</p>
      <p><strong>Pipeline:</strong> Demo parsing, programmatic replay control, WGC-based POV capture, frame-event alignment, and fixed-window export.</p>
      <p><strong>Why it matters:</strong> The pipeline produces high-control, high-reproducibility window-level training samples that directly support cross-game supervision and pseudo-labeling experiments.</p>
    </div>
  </div>
</div>

<div class="row justify-content-md-center mt-4" id="contributions">
  <div class="col-md-10 col-lg-8">
    <h3 class="mt-4 mb-3 section-heading">Contributions</h3>
    <div class="row">
      <div class="col-md-4 mb-3">
        <div class="card h-100 border-primary">
          <div class="card-body">
            <h5 class="card-title text-primary">1. ActSWM</h5>
            <p class="card-text small">An action-sensitive world model that keeps long-horizon latent rollouts responsive to action differences rather than collapsing into action-agnostic futures.</p>
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-3">
        <div class="card h-100 border-success">
          <div class="card-body">
            <h5 class="card-title text-success">2. Stronger Planning Results</h5>
            <p class="card-text small">A clearer link from latent rollout geometry to planning reliability, with strong gains on harder multi-step Minecraft tasks and cross-game action recovery.</p>
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-3">
        <div class="card h-100 border-warning">
          <div class="card-body">
            <h5 class="card-title text-warning">3. Data Systems Support</h5>
            <p class="card-text small">Three game-aware data pipelines spanning public-video cleaning and replay-driven sample generation for scalable training and pseudo-labeling support.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```

- [ ] **Step 4: Run test to verify it passes**

Run:

```bash
rg -n "Data Pipelines|pipeline-gta.gif|pipeline-apex.gif|pipeline-cs2.gif|Cross-Game Local Action Recovery|game-aware systems engineering|pseudo-labeling" "D:/myprogram/ASLWM/index.html"
```

Expected: matches for the new section, GIF references, and refreshed Exp.3 framing.

Then run:

```bash
rg -n "placeholder-cs2|placeholder-gta|placeholder-apex" "D:/myprogram/ASLWM/index.html"
```

Expected: no matches.

- [ ] **Step 5: Commit**

```bash
git -C "D:/myprogram/ASLWM" add index.html
git -C "D:/myprogram/ASLWM" commit -m "feat: add data pipelines section to ActSWM page"
```

### Task 4: Add CSS/JS Support And Stage The GIF Assets

**Files:**
- Modify: `css/app.css:1-190`
- Modify: `js/app.js:1-90`
- Create: `images/pipeline-gta.gif`
- Create: `images/pipeline-apex.gif`
- Create: `images/pipeline-cs2.gif`
- Test: CSS/JS token checks and asset presence checks

- [ ] **Step 1: Write the failing test**

Run:

```bash
rg -n "hero-result-row|hero-result-card|hero-summary|takeaway-box|pipeline-overview-table|pipeline-gif" "D:/myprogram/ASLWM/css/app.css"
```

Expected: no matches.

Then run:

```bash
rg -n "vid\.play\(|\$\('video'\)" "D:/myprogram/ASLWM/js/app.js"
```

Expected: matches for the old hover-video logic that is no longer needed.

- [ ] **Step 2: Run test to verify it fails**

Run:

```bash
ls "D:/myprogram/ASLWM/images/pipeline-gta.gif" "D:/myprogram/ASLWM/images/pipeline-apex.gif" "D:/myprogram/ASLWM/images/pipeline-cs2.gif"
```

Expected: missing-file errors.

- [ ] **Step 3: Write minimal implementation**

Add layout support for the new hero/result framing and pipeline section, simplify JavaScript by removing video hover behavior, and copy the three GIF assets into the repo using exact target names.

```css
.hero-title {
  font-size: 2.8rem;
  max-width: 980px;
  margin: 0 auto;
}

.hero-subtitle,
.hero-summary {
  max-width: 860px;
  margin-left: auto;
  margin-right: auto;
}

.hero-result-row {
  margin-bottom: 1rem;
}

.hero-result-card {
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 1.25rem;
}

.eyebrow {
  color: var(--aslwm-accent);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.06em;
}

.takeaway-box {
  border-left: 4px solid var(--aslwm-primary);
}

.pipeline-overview-table th,
.pipeline-overview-table td {
  font-size: 0.9rem;
  vertical-align: middle;
}

.pipeline-block {
  padding-top: 0.5rem;
}

.pipeline-gif {
  width: 100%;
  background: #f8f9fa;
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2rem;
  }

  .hero-result-card {
    padding: 0.85rem;
  }
}
```

```javascript
$(document).ready(function () {
    'use strict';

    var clipboard = new Clipboard('#copyBibtex');
    clipboard.on('success', function (e) {
        var btn = $('#copyBibtex');
        btn.text('Copied!');
        btn.removeClass('btn-outline-secondary').addClass('btn-success');
        setTimeout(function () {
            btn.text('Copy');
            btn.removeClass('btn-success').addClass('btn-outline-secondary');
        }, 2000);
        e.clearSelection();
    });

    clipboard.on('error', function () {
        var btn = $('#copyBibtex');
        btn.text('Press Ctrl+C');
        btn.removeClass('btn-outline-secondary').addClass('btn-danger');
        setTimeout(function () {
            btn.text('Copy');
            btn.removeClass('btn-danger').addClass('btn-outline-secondary');
        }, 2000);
    });

    var $backToTop = $('#backToTop');
    $(window).scroll(function () {
        if ($(this).scrollTop() > 400) {
            $backToTop.removeClass('d-none').addClass('fade-in');
        } else {
            $backToTop.addClass('d-none').removeClass('fade-in');
        }
    });

    $backToTop.on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 400);
        return false;
    });

    $('a[href^="#"]').on('click', function (e) {
        var target = $($(this).attr('href'));
        if (target.length) {
            e.preventDefault();
            var offset = target.offset().top - 70;
            $('html, body').animate({ scrollTop: offset }, 500);
        }
    });

    var sections = [];
    $('.section-heading').each(function () {
        var id = $(this).closest('[id]').attr('id');
        if (id) {
            sections.push(id);
        }
    });

    $(window).on('scroll', function () {
        var scrollPos = $(this).scrollTop() + 100;
        var currentSection = '';
        sections.forEach(function (id) {
            var el = $('#' + id);
            if (el.length && el.offset().top <= scrollPos) {
                currentSection = id;
            }
        });
        $('.nav-link').removeClass('active');
        $('.nav-link[href="#' + currentSection + '"]').addClass('active');
    });
});
```

```bash
cp "D:/obi/collected_program/论文/ActsWM/网站/素材/gta-pipeline.gif" "D:/myprogram/ASLWM/images/pipeline-gta.gif"
cp "D:/obi/collected_program/论文/ActsWM/网站/素材/apex-pipeline.gif" "D:/myprogram/ASLWM/images/pipeline-apex.gif"
cp "D:/obi/collected_program/论文/ActsWM/网站/素材/cs2-pipeline.gif" "D:/myprogram/ASLWM/images/pipeline-cs2.gif"
```

If the source GIFs are still named differently, rename them in `D:/obi/collected_program/论文/ActsWM/网站/素材/` to `gta-pipeline.gif`, `apex-pipeline.gif`, and `cs2-pipeline.gif` before running the copy commands above.

- [ ] **Step 4: Run test to verify it passes**

Run:

```bash
rg -n "hero-result-row|hero-result-card|hero-summary|takeaway-box|pipeline-overview-table|pipeline-gif" "D:/myprogram/ASLWM/css/app.css"
```

Expected: matches for the new CSS hooks.

Then run:

```bash
rg -n "vid\.play\(|\$\('video'\)" "D:/myprogram/ASLWM/js/app.js"
```

Expected: no matches.

Then run:

```bash
ls "D:/myprogram/ASLWM/images/pipeline-gta.gif" "D:/myprogram/ASLWM/images/pipeline-apex.gif" "D:/myprogram/ASLWM/images/pipeline-cs2.gif"
```

Expected: all three files are listed successfully.

- [ ] **Step 5: Commit**

```bash
git -C "D:/myprogram/ASLWM" add css/app.css js/app.js images/pipeline-gta.gif images/pipeline-apex.gif images/pipeline-cs2.gif
git -C "D:/myprogram/ASLWM" commit -m "feat: style and wire ActSWM pipeline assets"
```

### Task 5: Final Cleanup And Browser Verification

**Files:**
- Modify: `index.html:1-601`
- Test: `rg`, `curl`, and manual browser verification against the running static site

- [ ] **Step 1: Write the failing test**

Run:

```bash
rg -n "ASLWM|placeholder-|Author 1|Author 2|Author 3|Your Institution|arXiv:XXXX" "D:/myprogram/ASLWM/index.html"
```

Expected: any remaining stale strings are surfaced for final cleanup.

- [ ] **Step 2: Run test to verify it fails**

Start a local server:

```bash
python -m http.server 3181 --bind 127.0.0.1 --directory "D:/myprogram/ASLWM"
```

In another shell, run:

```bash
curl -I http://127.0.0.1:3181
```

Expected: `HTTP/1.0 200 OK`.

Then open the page manually in a browser and verify these visual checks fail or still look stale before the final cleanup pass:
- Hero still contains any old-version wording.
- Any placeholder section, placeholder media, or template-looking text remains.
- Data Pipelines section is missing GIFs or has layout overflow.

- [ ] **Step 3: Write minimal implementation**

Do a final pass on any remaining stale text and make the BibTeX/footer neutral and credible for an under-review project page.

```html
<pre class="bg-dark text-light p-3 rounded" style="overflow-x: auto;"><code id="bibtexContent">@article{actswm2026,
  title   = {ActSWM: Action-Sensitive World Models for Long-Horizon Planning in Open-World Games},
  author  = {Anonymous Authors},
  journal = {Under review},
  year    = {2026}
}</code></pre>

<p class="text-muted small mt-2">
  If you find this project page useful, please use the citation above as a temporary reference while the paper is under review.
</p>

<p class="text-muted small">
  &copy; 2026 ActSWM. Built with Bootstrap 5 and refreshed for the current paper version.
</p>
```

- [ ] **Step 4: Run test to verify it passes**

Run:

```bash
rg -n "ASLWM|placeholder-|Author 1|Author 2|Author 3|Your Institution|arXiv:XXXX" "D:/myprogram/ASLWM/index.html"
```

Expected: no matches.

Then run:

```bash
curl -I http://127.0.0.1:3181
```

Expected: `HTTP/1.0 200 OK`.

Then manually verify in the browser:
- The first screen reads as ActSWM immediately.
- Exp.1/Exp.2/Exp.3 read as a coherent argument chain.
- The Data Pipelines section appears after experiments with one overview table and three GIF-backed blocks.
- No media overflows on desktop width and mobile-responsive width.
- Back-to-top, section anchors, and BibTeX copy button still work.

- [ ] **Step 5: Commit**

```bash
git -C "D:/myprogram/ASLWM" add index.html
git -C "D:/myprogram/ASLWM" commit -m "feat: finalize ActSWM website refresh"
```
