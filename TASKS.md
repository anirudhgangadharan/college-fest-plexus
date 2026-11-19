# Implementation update — 19 November 2026

The owner authorized implementation. A local Astro static preview is now implemented; public publication remains pending confirmed content and launch authorization. Historical planning statements below are superseded by this update.

# Implementation roadmap and project state

Updated: 17 November 2026. Stage: documentation ready for owner review. Website implementation has not started.

## Completed

- [x] Inventory 26 original Canva PNG exports (all 1414 × 2000).
- [x] Visually inspect the full contact sheet and enlarged cover/workshop/academic summaries.
- [x] Generate artwork-contact-sheet.jpg and artwork-detail-sheet.jpg for review.
- [x] Record owner corrections: institution name, provisional Plexus 2026 / 14 December, pending operational content.
- [x] Define product journeys, scope, quality targets and release blockers in PRD.md.
- [x] Define permanent art direction, asset map, tokens, responsive layouts and component states in DESIGN.md.
- [x] Define proposed static architecture, editable content model and validation rules in ARCHITECTURE.md.
- [x] Create persistent agent instructions and honest setup/handover guidance.

## Checkpoint

- [ ] Owner reviews documentation and authorizes local implementation. Required by the owner's explicit 17 November instruction, not by a tooling approval limitation.

## Phase 1 — Foundation (after review)

- [ ] Confirm framework choice; verify compatible dependencies; pin runtime/npm and commit lockfile.
- [ ] Scaffold static Astro/TypeScript project and define documented scripts.
- [ ] Implement schemas and central festival/events/sessions/FAQ data; use explicit null/pending values.
- [ ] Implement content/reference/registration validation with useful actionable errors.
- [ ] Prepare licensed local fonts and optimized derived images; record source and crop focal points.
- [ ] Establish tokens and global semantic layout.

Exit: reproducible npm ci/check/build on the pinned environment, no runtime backend, provisional content renders coherently.

## Phase 2 — Visual and functional implementation

- [ ] Build mobile-first editorial home and responsive header/navigation.
- [ ] Build catalog, workshop/academic filters, stable event detail routes and registration states.
- [ ] Build schedule with pending times and one/multi-day support.
- [ ] Build Visit, FAQ, footer, 404 and metadata.
- [ ] Add restrained progressive enhancement and reduced-motion behavior.
- [ ] Review visual fidelity against originals; review first mobile version with owner.

Exit: core journeys work with/without JS; missing content does not produce dead links; visual review completed.

## Phase 3 — Verification

- [ ] Verify registration state precedence, URL validation, actual dates, unique IDs/slugs, reference integrity and date-change conflicts.
- [ ] Verify all routes, missing/long content, unknown/free/paid fees and missing artwork fallbacks.
- [ ] Check 320/375/390/768/1024/1440 widths, zoom/reflow, keyboard, screen reader spot checks and reduced motion.
- [ ] Run automated accessibility checks and manual review; log limitations.
- [ ] Measure repeatable mobile performance, image/JS budgets and layout stability.
- [ ] Check supported current Chromium, Firefox and Safari, including a real mobile device when available; record untested platforms.
- [ ] Execute a usability walkthrough of discovery → event → correct form.

Exit: PRD acceptance criteria met or explicit deviations accepted; verification evidence recorded.

## Phase 4 — Content and launch

- [ ] Owner confirms final brand, dates/duration, program, transliterations, venue and public copy.
- [ ] Receive approved forms/fees/eligibility/deadlines/contacts and confirm registration scope/combo behavior.
- [ ] Verify form ownership, target events, permissions and mobile submission with organizers.
- [ ] Confirm artwork/logo/font rights and exports.
- [ ] Choose host/domain/maintenance owner, document exact deployment and rollback steps.
- [ ] Pass public release validation; remove preview labeling only for confirmed facts.
- [ ] Obtain public launch authorization, deploy, verify live routes and form handoffs.
- [ ] Handover a tested content edit/rebuild/redeploy/rollback walkthrough.

## Decision log

| Date | Decision | Rationale / status |
| --- | --- | --- |
| 2026-11-17 | Documentation first, owner review next | Explicit owner request; implementation paused at this checkpoint |
| 2026-11-17 | Working title/date Plexus 2026 / 14 December 2026 | Owner provisional values; duration unspecified |
| 2026-11-17 | Institution wording supplied by owner | Replaces initial mistaken reading; final branding approval pending |
| 2026-11-17 | Null form links with explicit pending state | Owner permits placeholders; safe replacement later without unrelated external destinations |
| 2026-11-17 | Astro static generation proposed | Structured multi-page content with minimal browser JS; pending review |

## Verification evidence

Inventory and image dimensions inspected with Python/Pillow; contact sheet and detailed selected artwork visually reviewed. Local commands returned Node 24.14.0, npm 11.9.0, Git 2.51.2.windows.1. No dependency installation, application build, UI tests, performance measurements, accessibility audit, or deployment has been performed. Documentation link/contract inspection is separate from application verification.

## Next action

Owner reviews the six documents. Incorporate feedback before beginning Phase 1. Operational details can arrive later: schemas and unavailable states must allow local implementation without inventing them.

## Verified implementation — 19 November 2026

Astro installed with exact dependency and package-lock.json. Static home/catalog/14 details/schedule/visit/404 built successfully (19 pages). Content validation and two registration-integrity tests passed. All generated internal links and image references resolve. Build requires ASTRO_TELEMETRY_DISABLED=1 in the restricted environment. Browser, accessibility, responsive, performance and external-form verification remain unperformed. See README current limitations; the original roadmap remains pending where not covered by this evidence.
