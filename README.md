# Implementation update — 19 November 2026

The owner authorized implementation. A local Astro static preview is now implemented; public publication remains pending confirmed content and launch authorization. Historical planning statements below are superseded by this update.

# Plexus 2026 website

A planned mobile-first medical college festival website with an editorial Renaissance medical identity, independently editable content, and Google Forms registrations.

**Current state:** documentation only, ready for review. No website, package manifest, dependencies, build, or deployment exists. Do not run npm setup commands yet. The owner requested documentation first and review before implementation.

## Start here

| Document | Purpose |
| --- | --- |
| [PRD.md](PRD.md) | Vision, scope, user journeys, current facts, assumptions and launch gates |
| [DESIGN.md](DESIGN.md) | Permanent identity, artwork audit, typography, colour, layout and component behavior |
| [ARCHITECTURE.md](ARCHITECTURE.md) | Proposed stack, structure, editable data contracts, validation and deployment design |
| [AGENTS.md](AGENTS.md) | Persistent instructions and current authorization checkpoint |
| [TASKS.md](TASKS.md) | Completed work, roadmap, decision log and verification status |

## Reference artwork

`References images/` contains 26 original Canva PNGs. Preserve them. View [the contact sheet](artwork-contact-sheet.jpg) for the overall visual reference and [the detail sheet](artwork-detail-sheet.jpg) for workshop/academic summaries. These generated JPEGs are documentation aids, not website assets.

Owner-supplied institution wording: KH Patil Institution of Medical Sciences. “Plexus 2026” and 14 December 2026 are provisional. Do not copy the original artwork's 15–16 December schedule into the website. Venue, program details, fees, eligibility, registration URLs and contacts are not yet confirmed.

## Environment and setup

The inspection machine has Node 24.14.0, npm 11.9.0, and Git 2.51.2.windows.1. This is an observation, not a tested application compatibility matrix. No Docker or backend is required.

After review, the implementer must scaffold the static project, verify dependency compatibility, pin Node/npm and dependency versions, commit package-lock.json, and add package scripts before replacing this section with tested commands.

Planned workflow once scripts exist: npm ci → npm run check → npm test → npm run build; npm run dev for development and npm run preview to inspect the production build. These commands are a future contract and do not work in the current folder. Record exact versions, commands and outcomes here when verified. Never advise npm install without retaining a lockfile for handover.

## Content editing contract

Planned content locations are `src/content/festival.json`, `events/*.json`, `sessions/*.json`, and `faqs.json`; none exist yet. Change identity/date/contact details in festival data, individual event descriptions and registrations in event records, and times/locations in session records. Edit DESIGN tokens only for intentional identity changes. Routine content edits must not require component changes.

To add an event later: create a unique stable ID/slug, select a track, add approved description and art, declare fee/eligibility availability, set registration pending until the correct form is verified, and optionally add a session referencing its ID. Validate and preview all affected routes before deployment. Renaming a title should not change its slug automatically.

Unknown values use null/tagged pending states. Unknown fee is not free. Do not paste random URLs or use # as a registration destination. Once forms arrive, update the record's approved HTTPS URL and status together. Verify the Google Form title, intended event, sign-in restrictions, dates and response workflow on a phone. Closed and pending events must not expose active registration buttons. Website clicks are not proof of registration.

Changing a festival date must update display and metadata centrally and flag schedule conflicts for review. It must not silently reschedule sessions. Confirmed deadlines require organizer-managed updates/rebuilds as they pass. Content is build-time data: edits are not live until a new deployment succeeds.

## Deployment and rollback

No host, account, domain or public URL is configured. Choose a static host after review; the planned output directory is dist/. Do not add a server, Docker, SPA catch-all rewrite or database. Host-specific commands and ownership details must be filled in and tested before handover. Set site URL/base path, HTTPS, canonical URLs, preview noindex behavior and a real 404 page.

Planned release flow: update approved content → validate/types/test → production build → inspect locally → deploy preview → complete release checks → authorized public deployment → verify live routes/assets/forms. Retain the previous successful artifact/deployment and use the chosen host's tested rollback mechanism on failure. Do not claim rollback is configured until exercised or otherwise verified.

## Handover requirements

Before launch, supply final content, form ownership/access, verified venue/contact details, asset rights, host/domain ownership, exact setup/build/deploy commands, verification evidence, known limitations, and a named maintenance owner. Keep Google Forms response access separate from public source. Never commit attendee data, credentials, or private response spreadsheets.

Every meaningful change updates the owning document and TASKS.md. A successor should be able to identify what is proposed, implemented, tested and still pending from these files alone. The immediate next step is owner review of this documentation, not implementation.

## Current local workflow

Run `npm ci`, `npm run check`, `npm test`, `npm run build`, then `npm run preview`. Use `npm run dev` during editing. Output is `dist/`; deploy it to a static host only after launch approval.

Actual content sources: `src/content/festival.json` and `src/content/events.json`. Update names/date/tagline centrally; add events in the array with unique slugs. Registration has pending/open/closed states and a nullable URL. Build validates form destinations before generating pages. Schedule, FAQ and visitor copy currently live in their page files and still need extraction into validated content.

Current limitations: all programme data remains provisional; no actual form handoff can be verified. Google Fonts currently loads remotely with local fallbacks; local font packaging remains pending. Canonical/social metadata, detailed session schemas, advanced release validation and full browser/accessibility/performance QA remain pending. Original artwork is unchanged; web derivatives are cropped and compressed in public/art. Do not claim this preview is launch ready.

Verified: check, two tests and 19-page build pass. In restricted PowerShell environments first run `$env:ASTRO_TELEMETRY_DISABLED="1"` to avoid an Astro telemetry config write outside the workspace. Internal generated links/assets validated. Browser QA is outstanding.

## GitHub and Vercel CLI deployment

Remote: https://github.com/anirudhgangadharan/college-fest-plexus.git; branch: main. Commit source and package-lock.json, excluding local logs, .vercel, dependencies, generated output and secrets. Original Canva references are intentionally ignored; optimized public/art assets are included.

From the project root, run `npm run check`, `npm test`, `npm run build`, then `git add .`, `git commit -m "Implement Plexus festival website"`, and `git push -u origin main`.

Install CLI with `npm install -g vercel`, then run `vercel` and link/create the project in your signed-in account. Select Astro, build command npm run build, output dist, root ./, and Node 24.x if runtime selection is requested. No server adapter is needed for this static project. The initial deployment of a new Vercel project may be production even without --prod; the current content remains explicitly provisional. Later production updates use `vercel --prod`. GitHub pushing and CLI deploying are separate actions; automatic deployments require connecting the Git repository in Vercel. Host/domain ownership and live verification remain pending.
