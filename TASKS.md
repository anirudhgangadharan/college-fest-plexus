# Current scoped update — 24 November 2026

## Festival dates and schedule removal — 24 November 2026

- [x] Update festival-wide display dates to 6, 7 & 8 January 2027.
- [x] Remove Schedule from navigation, footer and homepage; replace homepage schedule preview with event discovery.
- [x] Remove the generated Schedule page and redirect `/schedule` to `/events/`.
- [x] Verify content checks, 7 tests, 22-page build, no Schedule route/navigation links, new festival dates and all internal links.
- [x] Update retained schedule data: remove the empty first day, rename workshop heading, and renumber the remaining days.
- [ ] Verify GitHub push and production deployment.

## Plain-English event titles — 24 November 2026

- [x] Replace legacy academic, cultural and online display names with their descriptive event names.
- [x] Update event cards, detail-page headings and metadata, registration, schedule, homepage and fee guidance.
- [x] Replace the Anveshanam track label with Academic Events or Scientific Sessions according to context.
- [x] Verify content checks, 7 tests, 23-page build, generated titles and all internal links.
- [x] Push implementation commit `ab3fbcc` to GitHub branch `codex/registration-pages`.
- [x] Deploy production build `dpl_2ajfF6jUPt9a6VqjM43KB9c2Ynuv`; verify Events, Registration, Schedule and representative academic, cultural and online detail pages return 200 with descriptive titles and no legacy display names.

## Descriptive event URLs — 24 November 2026

- [x] Replace legacy academic, cultural and online event slugs with descriptive English URLs.
- [x] Connect every registration-directory View Details button to its event page.
- [x] Update fees and schedule links and add permanent redirects from ten legacy paths.
- [x] Verify content checks, 7 tests, 23-page build and all generated internal links.
- [x] Push implementation commit `2388a80` to GitHub branch `codex/registration-pages`.
- [x] Deploy production build `dpl_BYwi2KtCvHD9erU9vQ3gLV1jsJ1C`; verify all 11 descriptive event routes return 200, all 15 View Details links are active, and a legacy path returns a permanent redirect to its replacement.

## Workshop consolidation — 24 November 2026

- [x] Replace eight standalone workshop routes and cards with four scientific-name combo pages.
- [x] Remove Sanskrit workshop titles from public workshop content.
- [x] Point registration and schedule links at the combined pages and configure permanent redirects from all eight legacy URLs.
- [x] Verify content checks, 7 tests, 23-page build, generated routes and internal links.
- [x] Push commit `25d9137` to GitHub branch `codex/registration-pages`.
- [x] Deploy production build `dpl_8dJXVkkrbe6qHqkb13BUmtwoyhyu`; verify all four combo routes and registration return 200, Events shows four combo cards with no legacy workshop names, and legacy workshop URLs return permanent redirects.

Authorization: owner approved both mockups, Source Serif 4 sitewide, blank View Details targets, implementation, GitHub push and Vercel publication. Broader upgrade deferred.

Implemented: homepage arrival dialog; 15-card registration directory; independent null destinations for each action; fees page preserved; single local font family; corrected event date labels/schedule; native dialog dismissal/focus return; mobile menu Escape/focus return; registration content integrity tests.

Verified so far: npm ci (0 reported vulnerabilities), content check, initial 27-page build; registration browser reflow at 320/375/390/768/1024/1440, all 15 cards and 30 disabled actions, loaded local font, Escape closes popup and returns focus, mobile menu Escape and focus return. A 320px action-row overflow was found and fixed, then rechecked. Final tests/build and publication evidence follow below.

Pending: organizer-supplied form/detail URLs; confirmed times on corrected dates; 5 January programme; real mobile/Safari/Firefox/screen-reader testing; full broader redesign. No form submissions or accessibility-conformance claim.

---

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

# Update — 23 November 2026 (brochure rebuild)

Owner instruction (WhatsApp, 23 Nov 2026): the Canva brochure (54 pages) is the approved source of truth for name, dates, content and design; the earlier site was a first draft. Design in DESIGN.md is superseded by the brochure look (parchment, gold frames, blackletter headings, brochure illustrations).

Implemented and locally verified (`npm run check`, `npm test`, `npm run build`, headless Chrome screenshots at 1280 px and 390 px):
- Plexus '27, 5, 6 & 7 January 2027, K. H. Patil Institute of Medical Sciences, Gadag (src/content/festival.json).
- 19 events in 4 tracks (src/content/events.json), schedule (schedule.json), committee (people.json).
- /register/ page (fees, workshop combos, forms) and a Register Now dialog with a no-JS fallback link.
- One Google Form per category in src/content/registration.json. All `url` values are null until real forms exist; buttons show "Form opens soon".
- /about/ with framed photo placeholders for committee members (director photo is from the brochure).

Open items: real Google Form URLs, abstract submission link, committee photos, brochure asset originals (some brochure illustrations are screenshots or older repo exports), website/Instagram/WhatsApp links (blank in the brochure), accommodation link/QR, verify the Day 2 vs Day 3 cultural listing with organisers, quiz prize pool (₹5,000 on its page, ₹20,000 category total).
Not verified: Vercel deployment settings; keyboard and screen reader audit beyond basic dialog/focus behaviour.

## Final local verification — 24 November 2026

- npm run check: passed. npm test: 7/7 passed. npm run build: 27 static pages built.
- Generated output audit: 610 internal links/assets/fragments resolve; one H1 per route; all 15 registration cards and 30 disabled controls present in static HTML; no empty/hash-only action links.
- Browser: registration checked at 320/375/390/768/1024/1440 CSS px. Local font loaded. Representative fees/catalog/event/schedule/about/visit pages checked at 320 and 1440; long fees heading reflow corrected. Popup Escape/focus return and mobile menu Escape/focus return verified. No captured console errors.
- No-JS content/navigation verified in generated HTML and noscript styles; full interactive browser JS-disabled testing, physical devices, other browsers, full automated accessibility audit and performance measurements were not performed.
- Detailed old brochure times for corrected event dates are not reasserted; retained in schedule-before-date-update.json for organizer review.
- Publishing is authorized, with form/detail destinations deliberately unavailable.

## Publication evidence — 24 November 2026

Implementation commit c00cad0 pushed to deploy-clean. Vercel production deployment dpl_ECvGkZ1kJRYSntfHUhAej1pVrNF6 returned READY and aliased https://college-fest-plexus.vercel.app. Live browser verification confirmed homepage popup, popup-to-/register/ navigation, 15 cards, 30 inactive blank-target buttons, loaded Source Serif 4 and no horizontal overflow at the desktop verification width; no captured console errors. Screenshots saved locally under ignored .vercel/. Preview verification used Vercel CLI authentication; the automatically created temporary preview bypass was revoked and its absence verified. Registration remains intentionally unavailable until organizer links are supplied.
