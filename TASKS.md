# Option A implementation — 25 November 2026

Owner explicitly approved sample A and GitHub/Vercel publication. Implemented global responsive typography in src/styles/global.css; no content, registration URLs, images, dependencies or interaction code changed. Browser computed sizes at 390 px match approved sample (18/19/38/26 px); screenshot saved under ignored .vercel/option-a-phone.jpg. At 320 px all six representative route types (home, registration, catalog, event details, About, Visit) fit without horizontal document overflow. At 1440 px registration titles are 20 px, dates 16 px and buttons retain 44 px minimum height; desktop screenshot reviewed. Viewport reset. Existing eight tests pass; build/link results recorded below. Publication pending.

# Approved festival date shift — 25 November 2026

Owner authorized shifting every website festival/event date one day earlier: 6→5, 7→6, 8→7 January 2027. Current festival dates are 5–7 January 2027. All workshop combos are 5 January; listed academic, cultural and online events are 6 January. This supersedes older date statements below. Registration URLs, fees and December deadlines are unchanged. Google Forms content is external and has not been edited. Historical schedule-before-date-update.json remains an archive, not a live content source.

# Event artwork — 25 November 2026

- Authorized: owner said Execute after the eight-image replacement plan. Local integration and preview are authorized; publication is separate.
- Implemented: eight distinct paintings for four academic and four cultural events; responsive 400/800/1200 px WebP assets; catalog/detail integration; relevant home category imagery; preserved PNG masters and labelled contact sheet. Existing workshops and online art preserved. Registration directory unchanged.
- Verified: npm run check passed; npm test passed 7/7; npm run build generated 21 pages; node scripts/audit-links.mjs found zero broken internal links. Twenty-four WebP derivatives total 2,716,660 bytes, individual files 24,612–235,096 bytes.
- Browser: all eight new catalog assets loaded; academic/cultural compositions visually inspected and solo-dance detail asset/alt confirmed. Narrow-screen viewport overrides rendered inconsistently in the in-app browser; exact 320 px/200% zoom validation remains unverified. No new interaction code or CSS was introduced.
- Pending: owner visual review, reliable phone-width verification, optional publication after separate approval. No commit, push or deployment performed for this artwork change.

# Current scoped update — 24 November 2026

## Presentation naming update — 24 November 2026

- [x] Rename “Scientific Paper Presentation” to “Research Paper Presentation” across public event, registration and retained schedule content.
- [x] Rename “Scientific Poster Presentation” to “Poster Presentation” across the same public content sources.
- [x] Verify content checks, 7 tests, 21-page production build, generated names and all internal links.
- [ ] Re-run visual responsive screenshots when a browser runner is available; the embedded preview browser was unavailable and local headless Chrome exited before capture. No layout or style code changed.
- [x] Push implementation commit `a36415d` to GitHub branch `codex/registration-pages`.
- [x] Deploy production build `dpl_7WFZqgSe8Azm1FfMbLAEKJQkTcFA`; verify Events, Registration and both detail routes return HTTP 200 with the new titles and neither old title.

## Registration fees page removal — 24 November 2026

- [x] Remove `/registration-fees/` and its visible links/text.
- [x] Redirect the former route to `/register/`.
- [x] Verify content checks, 7 tests, 21-page build, no fees route/links/text, and all internal links.
- [x] Push commits `381196a` and `c5a2030` to GitHub branch `codex/registration-pages`.
- [x] Deploy production build `dpl_Cb2G5yVHUdSGDZJWUyZS95ipVPJs`; verify the former fees URL returns a permanent redirect to `/register/`, and the live registration page has no fees link or “links will be added soon” text.

## Festival dates and schedule removal — 24 November 2026

- [x] Update festival-wide display dates to 6, 7 & 8 January 2027.
- [x] Remove Schedule from navigation, footer and homepage; replace homepage schedule preview with event discovery.
- [x] Remove the generated Schedule page and redirect `/schedule` to `/events/`.
- [x] Verify content checks, 7 tests, 22-page build, no Schedule route/navigation links, new festival dates and all internal links.
- [x] Update retained schedule data: remove the empty first day, rename workshop heading, and renumber the remaining days.
- [x] Push commit `c3767bc` to GitHub branch `codex/registration-pages`.
- [x] Deploy production build `dpl_C3UakACxTDfhKMMXDojQkAtJfdtL`; verify the live homepage shows 6 · 7 · 8 January 2027, has Explore Events, has no Schedule navigation, and `/schedule` returns a permanent redirect to `/events/`.

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

## Artwork publication authorization — 25 November 2026
Owner approved the visual result and explicitly requested GitHub push and Vercel deployment. This supersedes the separate-approval pending state above. Publishing the current local artwork implementation; live verification follows deployment.

## Artwork publication evidence — 25 November 2026

Owner approved GitHub and Vercel publication. Artwork commit 55e661838d87da4931661d9dcb38ced8cb6835dc is confirmed on origin/deploy-clean. Vercel deployment dpl_5AfwQwGK5Fr4qfua4pdMcwNmNp4v returned READY and aliased https://college-fest-plexus.vercel.app. A production HTTP request returned 200 and confirmed all eight new artwork paths in catalog HTML; authenticated Vercel verification also confirmed the new art. The temporary automation protection bypass created by Vercel curl was revoked and zero remaining bypasses verified. Exact phone-width QA remains pending as previously recorded.

## Event-specific registration links — 25 November 2026

Owner supplied fourteen Google Forms URLs and approved implementation plus GitHub/Vercel publication. src/content/registration-events.json is now the sole active link mapping for directory and detail buttons; general registration navigation still opens /register/. Thirteen forms loaded with matching event titles in the signed-in browser; no submissions performed. Anonymous HTTP returned 401 for those forms; upload fields were present, so signed-out access and end-to-end submission remain unverified. Basic Life Support + Heart Sounds returned Google Page not found: its exact URL is retained in suppliedRegistrationUrl, with registrationUrl null and a visible correction notice. Medical Quiz remains null with a repair notice. No guessed replacement URLs. Fees, dates, artwork and layout unchanged.

Verified: npm run check passed; npm test 8/8 passed; npm run build 21 pages; node scripts/audit-links.mjs zero broken internal links. Static HTML audit confirms all thirteen active directory destinations equal their detail-page destinations, both unavailable forms have no external action, and obsolete category-wide registration copy is absent. Ordinary HTML anchors support no-JS handoff. Browser responsive review and deployment evidence follow below.

Browser verification: directory shows 13 active Google Forms links and 2 disabled registration buttons; matching Research Paper detail href verified. Desktop screenshot and 390 px screenshot reviewed. At 320 px, scrollWidth 305 <= innerWidth 320 and all action groups fit; at 390 px, scrollWidth 375 <= 390. Viewport override reset. No forms submitted.

## Registration publication evidence — 25 November 2026
Implementation b0dbd49 pushed to origin/deploy-clean. Vercel deployment dpl_Ee8Kq2oUpwWj8MNwFshHu9WKkh2B returned READY and aliased https://college-fest-plexus.vercel.app. Live browser confirmed all thirteen supplied active hrefs, two disabled buttons and repair notices. Clicked Basic Surgical Skills View Details then Register on Google Forms: destination title matched Basic Surgical Skills + ECG Interpretation. No submission or payment performed. No temporary protection bypass created for verification.

## Date-shift verification — 25 November 2026
Implemented approved one-day shift across festival data, 19 event records, four registration groups, retained schedule data, homepage hero, catalog combo labels and combo headings. Shared footer, popup and default metadata inherit new content. npm run check passed; npm test 8/8 passed; npm run build generated 21 pages; internal links audit found zero broken links. All 21 HTML pages audited for updated festival footer and absence of obsolete dates; all 15 detail routes match registration dates. Field comparison against HEAD confirms registration URLs, fees and other event fields unchanged. Historical reference assets/archived schedule preserved. Publication and live checks follow.

Release integration: origin/deploy-clean advanced to 8fb7475 with corrected BLS and Medical Quiz forms. Merged those changes without replacing their links; all 15 registration entries are now active as in the remote baseline. Re-ran 8 tests, content check, 21-page build and link/date audits after merge. The final deployment includes this merged state.

## Date-shift publication — 25 November 2026
Merged release f476586 is on GitHub deploy-clean. Final Vercel deployment dpl_3dSC1oDks3SqzDDYkx1nTGp6VgeT returned READY and aliased https://college-fest-plexus.vercel.app. Read-only production HTTP checks passed on all 20 principal/event routes: HTTP 200, updated festival dates, no obsolete date signatures. Browser confirmed live homepage hero, popup, footer and description metadata use shifted dates. Further browser calls timed out, so fresh mobile screenshots were not completed for this text-only change. All 21 generated pages and all 15 event/combo dates audited. Existing BLS/Quiz registration fixes preserved; Google Forms' own date text was not edited.

Build verification: npm run check passed; npm test 8/8 passed; npm run build produced 21 static pages; node scripts/audit-links.mjs found zero broken internal links. git diff --check passed.

## Option A publication — 25 November 2026
Implementation 66d370d pushed to GitHub deploy-clean. Vercel dpl_6PTv3y4kv1wbSrKgCcgdYM1quvoh returned READY and aliased https://college-fest-plexus.vercel.app. Live browser at 390 px confirmed body 18 px, intro 19 px, page heading 38 px and no horizontal overflow; live registration titles 20 px, date labels 16 px and all 15 active form links retained. Viewport reset. No content or image changes.

## Accommodation ribbon — 25 November 2026
Owner approved implementation of a global gold ribbon below navigation, repeating “Register for Accommodation”. Implemented in AccommodationAnnouncement.astro via Base.astro, with a clipped transform marquee, pause/resume, hover/focus pause, and static reduced-motion/no-JavaScript fallback. Existing sticky navigation and event workflows are unchanged. No dependencies added.
Configuration: src/content/accommodation.json owns enabled, status (pending/open/closed), nullable url, organizerVerified, label and pendingLabel. Open requires an organizer-verified HTTPS Google Form; pending/closed never render a link. The URL has not been supplied, so the current ribbon says “Accommodation registration · Link coming soon”. Set the approved URL, organizerVerified=true and status=open together, then validate and rebuild. Config changes require rebuilding; do not infer form access or successful submission from URL validation.
Verified: npm run check; npm test (9/9); npm run build (21 pages); node scripts/audit-links.mjs (0 broken internal links). Browser preview at 127.0.0.1:4322 timed out in the in-app browser, so visual responsive, keyboard, reduced-motion and zoom verification remain pending. No commit, push or deployment performed. Generated design concept is not implementation verification.

## Accommodation form activation — 25 November 2026
Owner supplied and explicitly approved https://forms.gle/FJHof3Yb1JjoNgrd8 for the accommodation ribbon. Set status=open and organizerVerified=true on that owner authority. Ribbon now repeats Register for Accommodation and links directly to the supplied form. No form submission was attempted; external access restrictions are not established by URL validation.


## Shared background — 25 November 2026
Owner approved implementation and GitHub/Vercel publication. Replaced the repeating SVG turbulence texture with public/art/plexus-shared-background.webp (25,098 bytes), derived from the approved imagegen concept: faint gold botanical/anatomical linework on ivory. A single fixed decorative body pseudo-element displays the image without tiling or scroll-driven animation; solid ivory is the fallback. Header/footer use solid espresso. Removed home hero-emblem markup and disabled pagehead, Visit Gadag, accommodation and event-detail decorative watermark pseudo-elements globally. Main hero painting, logo and standalone informative images remain. Content, typography and registration workflows unchanged.
Verification: npm run check; npm test (9/9); npm run build (21 pages); node scripts/audit-links.mjs (0 broken links). Responsive visual/zoom verification not yet completed. This update supersedes earlier texture/collage recommendations.

