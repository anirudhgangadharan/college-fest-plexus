# Approved festival date shift — 25 November 2026

Owner authorized shifting every website festival/event date one day earlier: 6→5, 7→6, 8→7 January 2027. Current festival dates are 5–7 January 2027. All workshop combos are 5 January; listed academic, cultural and online events are 6 January. This supersedes older date statements below. Registration URLs, fees and December deadlines are unchanged. Google Forms content is external and has not been edited. Historical schedule-before-date-update.json remains an archive, not a live content source.

# Responsive event artwork — 25 November 2026

Optional event fields `artwork` (safe filename key) and `artworkAlt` select generated paintings under public/art/events. EventArtwork.astro emits 400/800/1200 px WebP srcset, sizes, explicit 4:5 dimensions, lazy loading and async decoding; legacy art/img fields remain supported. Content validation checks all three derivatives. Masters and manifest remain outside public; scripts/prepare-event-art.py reproducibly resamples them with Pillow. No new runtime or package dependencies.

# Current scoped update — 24 November 2026

The approved registration directory is src/content/registration-events.json. Four groups own ISO date-only dates; each item owns a stable ID, title, eventSlugs, registrationUrl, and detailsUrl. Null destinations render disabled buttons, never empty hrefs or random external links. Each future registrationUrl is validated as HTTPS Google Forms; each detailsUrl must be a site-relative URL. src/lib/registration.mjs validates references/IDs/dates and formats dates in Asia/Kolkata. Existing category forms in registration.json remain separate and power /registration-fees/ and existing event pages. The popup uses native dialog focus containment/Escape, focus return and scroll lock; core content/navigation remain server-rendered without JavaScript. Corrected event dates are reflected in event details and schedule; previous brochure timing data is archived in schedule-before-date-update.json for organizer review, outside public/.

---

# Implementation update — 19 November 2026

The owner authorized implementation. A local Astro static preview is now implemented; public publication remains pending confirmed content and launch authorization. Historical planning statements below are superseded by this update.

# Architecture and engineering decisions

Status: planned, not scaffolded. Updated: 17 November 2026.

## Decision: statically generated frontend

Proposed stack: Astro with TypeScript strict mode, semantic HTML, plain CSS custom properties, and small native browser scripts for menu/filter enhancements. Generate HTML at build time; deploy static output. No React runtime, database, server adapter, Docker, authentication, or custom submission endpoint is needed. Google Forms owns registration processing.

Astro is chosen over a client-only SPA for HTML-first event pages, static routes, and build-time content validation. Buildless HTML is feasible but would make repeated event pages and content validation more manual. The framework choice remains reviewable before implementation.

Reference documentation: [Astro project structure](https://docs.astro.build/en/basics/project-structure/) and [content collections](https://docs.astro.build/en/guides/content-collections/), consulted 17 November 2026. Verify APIs against the exact installed version, not moving documentation alone.

Observed local tools: Node 24.14.0, npm 11.9.0, Git 2.51.2.windows.1. No package manifest, dependencies, lockfile, build, or application currently exists. Compatibility is not yet verified. At scaffolding, select compatible stable dependencies, record exact versions, pin the runtime/npm version, and commit package-lock.json. Reproduction then uses npm ci. Do not claim the environment is reproducible before this is done.

## Proposed structure

```text
/
  PRD.md DESIGN.md ARCHITECTURE.md AGENTS.md TASKS.md README.md
  References images/           # immutable original exports
  src/
    content.config.ts          # content schemas and loaders
    content/
      festival.json            # global editable copy, dates, institution, contacts
      events/*.json            # stable IDs, event content and registration
      sessions/*.json          # schedule references to event IDs
      faqs.json
    assets/                    # production image derivatives and licensed fonts
    components/                # semantic reusable UI
    layouts/BaseLayout.astro
    pages/                     # static routes from PRD
    styles/tokens.css          # permanent design tokens
    styles/global.css
    scripts/                   # small progressive enhancements
    lib/                       # shared formatting, URL and content validation
  public/                      # favicon, robots, downloadable public files
  scripts/                     # build/release checks
  tests/                       # meaningful integration/accessibility checks
  package.json package-lock.json
  astro.config.mjs tsconfig.json
  .node-version .npmrc .gitignore
  dist/                        # generated, untracked
```

All source paths above are future contracts, not existing files. No runtime fetch of editable JSON from a service. Editing local content requires rebuild/redeploy; there is no admin UI.

## Content contract

Separate identity tokens/components from festival content. No festival name, date, fees, contact, event copy, or form destination hardcoded in components. Derived UI, page metadata, and any future calendar data use the same source. Stable IDs and slugs survive display-name edits; deliberate slug changes require redirect planning.

Festival data: displayName, institutionName, tagline, description, timezone, dateStatus (`provisional|confirmed|tba`), startDate (ISO date-only or null), endDate (null unless specified), venue (nullable structured address/map URL), contacts, siteUrl (nullable until hosting selected), publicationMode (`preview|public`). The initial record uses the owner-supplied name, provisional 2026-12-14, null endDate, and null operational details.

Event data: id, slug, title, subtitle, track (`workshop|academic`), description, image key/alt, eligibility (nullable), fee (tagged `tba|free|paid` with currency and amount only for paid), registration, and publication status (`draft|published`). Draft means explicitly provisional in preview and excluded from public output. Never interpret null fees as free.

Registration contract:

```json
{
  "status": "pending",
  "url": null,
  "deadline": null,
  "scope": "event"
}
```

Statuses: pending, open, closed. Scope: event, festival, combo; combo references stable included event IDs. Open requires a valid approved URL and explicit eligibility/fee state. Pending has no active link. Closed cannot emit a register link even if a URL is retained for editors. A past confirmed deadline takes precedence over open at build time; because static sites do not rebuild themselves, organizer must schedule a rebuild or manually close registration. No live capacity claims without an independent source.

Allow HTTPS `forms.gle` paths and Google Forms paths under `docs.google.com/forms/`; reject other schemes, credentials, and lookalike hosts. Structural validation does not prove ownership or form readiness. Resolve short links manually and verify final form identity, visibility, sign-in requirements, and mobile submission before opening registrations. Use null rather than example/random links.

Session data: stable ID, eventId, confirmed date/start/end or explicit tba, venue label, track. Store confirmed timestamps with offset and format using Asia/Kolkata. Validate end > start, event references, unique IDs/slugs, date syntax and real calendar validity, deadline validity, asset existence, and URL constraints. A schema must reject partial contradictory states. Changing a festival date must flag sessions outside the new range for review rather than silently moving their times.

## Build and runtime behavior

Content → schema/reference validation → static route generation → responsive assets → HTML/CSS/minimal JS → static host. Browser interactions only control presentation; Google Forms opens through an ordinary link. Do not POST form responses through this site or store participant information in localStorage. Google Forms response administration stays with organizers.

Core routes, descriptions, schedule and registration handoffs work without JS. Failures in menu/filter enhancement leave navigation and full event lists available. Render content as text, never unchecked HTML from JSON. External links use normal same-tab navigation by default; any deliberate new-tab behavior must be announced and use appropriate rel protection.

Preview mode visibly marks provisional content and sends noindex. Public validation fails for unapproved core facts or an open event with a missing/invalid form; pending events can appear only with accurate availability labels. Canonical and social URLs derive from the configured deployment URL. Do not embed user-specific local paths in the website.

## Verification and deployment

Planned scripts: dev, check (framework/type/content), test (content state and integration), build (including content validation), preview, and release:check (stricter public content checks). Define these in package.json during implementation before documenting them as executable. Tests should exercise registration state precedence, date edits, cross-references, filter/no-JS behavior, menu keyboard handling and generated route links, rather than mirroring markup.

Static host remains undecided; deployment contract is dist/ with index.html, event routes, assets, and a 404 page. No SPA catch-all rewrite. Set base path/site URL explicitly if deploying under a subdirectory. HTTPS required. Use host-appropriate caching: hashed assets long-lived; HTML revalidated. Add host security headers where supported and verify Google link behavior. Avoid inline-script policies that break Astro output without testing.

At implementation, document the chosen host's exact build command, output directory, domain, redirect rules, deploy ownership, and rollback procedure. A rebuild is required for content changes. Preserve previous deployments for rollback. No deployment account or domain has been created, and this documentation phase does not authorize publication.

## Shared event registration mapping — 25 November 2026
registrationForEvent(groups, slug) resolves individual events and both members of a workshop combo to the same directory entry. FormButton consumes that entry rather than legacy category-level URLs. registrationMessage supplies a visible unavailable state. A non-null registrationUrl cannot coexist with unavailableReason; suppliedRegistrationUrl optionally preserves a broken supplied destination without rendering an active action. registration.json retains legacy fee/category metadata only; it no longer owns active event buttons.

## Accommodation ribbon — 25 November 2026
Owner approved implementation of a global gold ribbon below navigation, repeating “Register for Accommodation”. Implemented in AccommodationAnnouncement.astro via Base.astro, with a clipped transform marquee, pause/resume, hover/focus pause, and static reduced-motion/no-JavaScript fallback. Existing sticky navigation and event workflows are unchanged. No dependencies added.
Configuration: src/content/accommodation.json owns enabled, status (pending/open/closed), nullable url, organizerVerified, label and pendingLabel. Open requires an organizer-verified HTTPS Google Form; pending/closed never render a link. The URL has not been supplied, so the current ribbon says “Accommodation registration · Link coming soon”. Set the approved URL, organizerVerified=true and status=open together, then validate and rebuild. Config changes require rebuilding; do not infer form access or successful submission from URL validation.
Verified: npm run check; npm test (9/9); npm run build (21 pages); node scripts/audit-links.mjs (0 broken internal links). Browser preview at 127.0.0.1:4322 timed out in the in-app browser, so visual responsive, keyboard, reduced-motion and zoom verification remain pending. No commit, push or deployment performed. Generated design concept is not implementation verification.

## Shared background — 25 November 2026
Owner approved implementation and GitHub/Vercel publication. Replaced the repeating SVG turbulence texture with public/art/plexus-shared-background.webp (25,098 bytes), derived from the approved imagegen concept: faint gold botanical/anatomical linework on ivory. A single fixed decorative body pseudo-element displays the image without tiling or scroll-driven animation; solid ivory is the fallback. Header/footer use solid espresso. Removed home hero-emblem markup and disabled pagehead, Visit Gadag, accommodation and event-detail decorative watermark pseudo-elements globally. Main hero painting, logo and standalone informative images remain. Content, typography and registration workflows unchanged.
Verification: npm run check; npm test (9/9); npm run build (21 pages); node scripts/audit-links.mjs (0 broken links). Responsive visual/zoom verification not yet completed. This update supersedes earlier texture/collage recommendations.

