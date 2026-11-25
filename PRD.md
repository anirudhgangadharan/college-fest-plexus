# Approved festival date shift — 25 November 2026

Owner authorized shifting every website festival/event date one day earlier: 6→5, 7→6, 8→7 January 2027. Current festival dates are 5–7 January 2027. All workshop combos are 5 January; listed academic, cultural and online events are 6 January. This supersedes older date statements below. Registration URLs, fees and December deadlines are unchanged. Google Forms content is external and has not been edited. Historical schedule-before-date-update.json remains an archive, not a live content source.

# Current scoped update — 24 November 2026

The owner approved the registration mockups and explicitly authorized implementation plus GitHub/Vercel publication on 24 November 2026. The broader redesign remains deferred. Current identity is PLEXUS ’27, 5–7 January 2027. The approved registration directory contains four workshop combos on 6 January and four academic events, four cultural events, and three online competitions on 7 January. Each card has Register Now and View Details. Both destinations remain null until supplied. The old fees/category-form information is preserved at /registration-fees/. Session times on corrected dates await confirmation; 5 January programme is unspecified. These decisions supersede earlier provisional 2026 content and launch checkpoints below.

---

# Implementation update — 19 November 2026

The owner authorized implementation. A local Astro static preview is now implemented; public publication remains pending confirmed content and launch authorization. Historical planning statements below are superseded by this update.

# Plexus 2026 — Product requirements

Status: documentation for review; implementation not started. Updated: 17 November 2026.

## Vision

Create a distinctive medical college festival website that feels like a contemporary exhibition of medical discovery: Renaissance illustration, scholarly typography, warm paper, and confident modern navigation. Earn attention through art direction and make the next action obvious. Visual ambition must survive on a small phone and a slow connection.

The website is a frontend-only information and discovery experience. Google Forms handles registration. The six root documents must be sufficient to resume work without chat history.

## Authority and confirmed decisions

1. Current explicit owner corrections override outdated text embedded in artwork.
2. `References images/1.png` through `26.png` are the visual reference, not a confirmed database of operational facts.
3. DESIGN.md owns the permanent identity; this file owns product requirements and content decisions; ARCHITECTURE.md owns technical contracts; TASKS.md owns execution status; README.md owns operating instructions; AGENTS.md owns agent rules.
4. The owner requested documentation first, then review. Do not implement or publish before that review.

| Item | Current value | Status |
| --- | --- | --- |
| Festival display name | Plexus 2026 | Provisional; editable |
| Institution display name | KH Patil Institution of Medical Sciences | Owner-supplied wording; final branding sign-off pending |
| Working date | 14 December 2026 | Provisional; not the artwork's 15–16 December |
| Timezone | Asia/Kolkata | Planning default |
| Duration / start time | Unspecified | Do not infer a second day or a start time |
| Venue | To be announced | Artwork mentions Gadag; exact venue unconfirmed |
| Language | English | Initial assumption |
| Registration | Google Forms, links absent | Owner will supply later |
| Fees, eligibility, deadlines, capacity, contacts | Unspecified | Explicit pending states |

Use an ISO date-only value `2026-12-14` for the working date. A date-only value must not become a midnight timestamp. Display “14 December 2026 · Provisional” in preview. No countdown or calendar export until dates, duration, and times are approved.

## Audience and priorities

- Prospective student: understand the festival, discover a relevant event, assess requirements, reach the correct registration form.
- Participant: find the latest schedule, event details, venue, and organizer help quickly on a phone.
- Faculty / guest: understand the academic purpose and find credible organizer information.
- Organizer: change names, dates, schedules, forms, and contacts through content files without redesigning components.

Priority order: accurate information, successful navigation and registration handoff, mobile readability, distinctive visual expression, restrained enhancement.

## Scope

MVP routes: `/`, `/events/`, `/events/[slug]/`, `/schedule/`, `/visit/`, `/404.html`. Home includes identity, provisional date, introductory story, workshop and academic tracks, selected events, schedule preview, registration guidance, FAQ, and organizer footer. Visit includes verified directions and contacts when available. Keep unavailable sections informative rather than filling them with invented facts.

Events must have independent detail URLs with descriptions, track, availability, eligibility, fee state, schedule state, and registration state. Event names from artwork are draft content, not approved program commitments. Provide workshop/academic filtering and a clear-all action; retain access to all events without JavaScript. Search is optional after a usability need is demonstrated.

Schedule uses accessible grouped lists with day/track filters if needed, event links, explicit timezone, and a clear pending state. Do not force provisional dates into the artwork's two-day schedule. Navigation: Events, Schedule, Visit, About anchor; primary home CTA “Explore events” until registration is ready.

Out of scope: database, accounts, API server, payment collection, seat inventory, registration status lookup, CMS service, Docker, real-time updates, chatbots, attendee dashboards, and invented sponsors/testimonials/attendance counts. Payment and capacity policy, if needed, belongs to organizers and their external workflow.

## Journeys and acceptance

| Journey | Required outcome |
| --- | --- |
| Discover → evaluate → register | From home reach an event, read conditions, and open its correct approved Google Form in at most three link activations |
| Registration unavailable | See “Registration details coming soon”; no dummy destination, active-looking dead link, or promise of a reserved seat |
| Find a session | Open Schedule, filter if configured, reach an event; unknown time reads “Time to be announced” |
| Plan a visit | Find verified address/map link and organizer contacts; otherwise explicit pending information |
| Edit content | Change festival name/date/form in the designated content source, validate, rebuild, and see consistent updates across all routes and metadata |
| Use assistive technology | Navigate and understand core content with keyboard and screen reader, including filters, menu, FAQ, and status text |

Google Forms handoff must explain that registration continues on Google Forms. The site cannot confirm submission, payment, acceptance, or remaining seats. A closed event has no active registration CTA. No embedded form by default. No personal-data collection or analytics by default.

## Quality acceptance

- WCAG 2.2 AA target: contrast, keyboard access, visible focus, semantic landmarks, meaningful headings, reflow, reduced motion, and comprehensible state labels. Validate with automated checks plus manual review; do not claim conformance from a score alone.
- Check widths 320, 375, 390, 768, 1024, and 1440 CSS pixels; no unintended horizontal scrolling or obscured content. Check 200% zoom and reflow at 320 CSS pixels.
- Core content and outbound registration links work without JavaScript. Filters enhance the initial all-events list.
- Performance targets: LCP ≤2.5 s, INP ≤200 ms, CLS ≤0.1 at the 75th percentile when field data exists. Before launch use repeatable mobile lab checks as proxies and record conditions. Initial first-load transfer target ≤1 MB; own interaction JavaScript ≤30 KB gzip; hero image ≤300 KB. Record and justify exceptions.
- Every published route has unique title, description, canonical URL, social preview, and valid heading hierarchy. Preview builds are noindex. Do not emit confirmed Event structured data from provisional content.
- No invalid internal references, missing assets, unsafe URLs, invented details, browser console errors, or registration state contradictions.

## Success and measurement

Usability goal: a first-time mobile visitor can locate a suitable event and identify registration availability within 60 seconds in a small moderated review. Record observations, not fabricated success rates. If analytics is later approved, measure outbound form clicks as handoffs only; form completions require separate organizer data. No tracking integration is included now.

## Unresolved decisions / release blockers

Owner must approve final festival/institution branding, dates and duration, program and spellings, venue, fees and eligibility, deadlines, forms and their access settings, contacts, image/logo rights, and final public copy. Organizers must clarify whether registration is festival-wide, event-specific, combo-based, or a mixture. Hosting account/domain and maintenance owner remain undecided. Exported Canva text-free assets, original logo, and font identification are requested when available, but are not prerequisites for a local prototype.

A clearly labelled preview may contain missing details. Public launch requires final core identity/date/venue/contact sign-off and valid forms for any event marked open. A public information-only launch with registration pending requires an explicit owner decision. Do not silently turn a preview into an official announcement.

## Registration update — 25 November 2026
Owner approved supplied event-specific Google Forms and publication. Thirteen matching forms are available in the signed-in browser. BLS form is missing and Medical Quiz is under repair; both remain visibly unavailable. General registration navigation opens the event directory. Do not infer anonymous availability or successful submission from form-title checks.
