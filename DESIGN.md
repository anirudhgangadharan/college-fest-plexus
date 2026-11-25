# Approved Option A typography — 25 November 2026

Owner selected the Comfortable sample and authorized GitHub/Vercel publication. Body text is 18 px (1.125rem), lead paragraphs 19 px, quotations 20 px, phone page headings 38 px, detail section headings 26 px, registration card titles 20 px and dates 16 px. Retain Source Serif 4, existing artwork, palette, layout and button tap areas. Related headings, popup and supporting text follow the smaller responsive scale. CSS uses rem units to respect browser font preferences. This supersedes older large-text recommendations below.

# Approved festival date shift — 25 November 2026

Owner authorized shifting every website festival/event date one day earlier: 6→5, 7→6, 8→7 January 2027. Current festival dates are 5–7 January 2027. All workshop combos are 5 January; listed academic, cultural and online events are 6 January. This supersedes older date statements below. Registration URLs, fees and December deadlines are unchanged. Google Forms content is external and has not been edited. Historical schedule-before-date-update.json remains an archive, not a live content source.

# Event artwork update — 25 November 2026

Owner-authorized eight academic/cultural paintings match uploaded workshop references: finely painted Renaissance figures, amber light, burgundy/umber/ivory fabrics and quiet olive backgrounds. Cultural subjects retain Indian performance context. Images fill the existing 4:5 card frame; typography, palette tokens, layout, workshop and online art remain intact. See artwork/README.md for provenance and preservation. Local integration only; publication awaits separate approval for this change.

# Current scoped update — 24 November 2026

Approved registration design: parchment canvas, espresso filled Register Now button, outlined View Details button to its right, two-column cards on desktop and one column on phones; online cards use three columns only where space permits. Source Serif 4 is the single text family across every route, with Georgia/serif fallback. The Latin variable WOFF2 is hosted locally under public/fonts with its SIL Open Font License. The homepage opens a dismissible native dialog on each homepage load; its ordinary Register Now link opens /register/. No broader redesign is included.

---

# Implementation update — 19 November 2026

The owner authorized implementation. A local Astro static preview is now implemented; public publication remains pending confirmed content and launch authorization. Historical planning statements below are superseded by this update.

# Permanent visual identity and experience

Status: proposed design system for review. Updated: 17 November 2026. No interface implemented.

## Art direction: The Living Atlas of Medicine

Build a contemporary editorial atlas around the supplied Renaissance medical imagery. The signature is a monumental title, carefully framed anatomical art, warm ivory space, fine rules, chapter numerals, botanical green workshop chapters, and muted terracotta academic chapters. Alternate immersive image moments with quiet, highly readable information. This identity persists across future festival names, dates, and content.

Avoid generic neon festival styling, glass panels, gradients unrelated to the artwork, repeating identical card grids across every section, simulated dashboards, and decorative clutter. The ambition comes from composition, typography, art, and pacing. Do not copy dense poster layouts into webpages.

## Artwork audit and provenance

All 26 supplied PNGs are 1414 × 2000 pixels. Originals live in `References images/` and must remain unchanged. `artwork-contact-sheet.jpg` is a generated overview; `artwork-detail-sheet.jpg` enlarges the two program summaries. These are analysis aids, not production assets.

| Source | Observed content / proposed use |
| --- | --- |
| 1.png | Cover: institutional seal, caduceus, anatomical head emblem, parchment scroll, books; identity and hero mood |
| 2–5.png | Vision, festival introduction, institute, director message; editorial tone and institutional context; copy unapproved |
| 6–9.png | Two-day program posters; schedule structure reference only, dates/times must not be imported as current facts |
| 10.png | PRAYOGAH workshop summary; green track reference |
| 11.png | Workshop combo pack poster; packaging reference, combinations unconfirmed |
| 12–19.png | Eight workshop artworks; individual event art candidates with baked-in titles |
| 20.png | Green atmospheric composition with anatomical motif/emblem; candidate background, inspect crop and embedded marks |
| 21.png | ANVESHANAM academic summary; terracotta track reference |
| 22.png | Terracotta anatomical background; candidate academic chapter art |
| 23.png | Teal anatomy and institute composition; institutional story candidate |
| 24.png | Golden paper with building; visit/institute candidate |
| 25.png | Sepia ornamental frame with landscape details; restrained secondary reference |
| 26.png | “How to Reach” paper and building; directions mood, no verified route information |

Draft workshop names observed: Prana Raksha (Basic Life Support), Shastrakriya (Basic Surgical Skills), Janani Raksha (Obstetric Emergencies), Jeeva Raksha (Basic Trauma Life Support), Hridaya Naada (The Art of Auscultation), Hridaya Rekha (ECG Interpretation), Navaprana (Neonatal Resuscitation), Antardrishti (X-ray Interpretation). Draft academic names: Anusandhana (paper), Chitrabodha (poster), Roganveshana (clinical case), Dhishana (quiz), Vyadhi Vedha (diagnosis challenge), Shabdabheda (crossword). These are visual transcriptions requiring organizer confirmation, especially transliterations.

Exact Canva fonts and separate asset licenses are unknown. Request original vectors and text-free exports. Do not recreate an official seal or present a guessed font as an exact match. Do not extract legacy dates into new visible UI. If text-free art is unavailable, choose crops without conflicting text or use intact posters only in a clearly labelled reference/gallery context. Never rely on raster text for operational information.

## Colour tokens

These are proposed web interpretations, not exact sampled Canva values. Implement centrally as CSS custom properties; audit actual component/state contrast before acceptance.

| Token | Hex | Use |
| --- | --- | --- |
| paper | #F5ECDD | Main canvas |
| paper-light | #FFF9EF | Reading panels |
| ink | #29251D | Body and headings |
| forest | #263C30 | Primary actions, workshop section |
| gold | #B49352 | Decorative rules and accents; not small text on light paper |
| terracotta | #82483B | Academic accents |
| muted-ink | #625A4B | Secondary text; verify per surface |
| border | #D4C5AA | Decorative separation; use stronger ink for interactive boundaries |
| focus | #155A83 | Visible focus ring with light offset |

Use paper-light text on forest; ink on paper. Categories need written labels, not colour alone. Error, closed, and pending states need text and appropriate semantics. Gold remains decorative unless contrast is proven.

## Typography

Proposed pairing: Cormorant Garamond for editorial display, Source Sans 3 for body/UI, with locally hosted licensed WOFF2 subsets. Exact weights and licensing must be verified during asset preparation. Use Georgia and system sans as resilient fallbacks. Reserve any owner-supplied blackletter wordmark for the logo; no blackletter paragraphs or navigation.

- Hero title: fluid 64–144 px desktop; 48–72 px mobile; avoid clipping long replacement names.
- Section headings: 32–64 px; event titles 24–32 px; body 16–18 px at 1.55–1.7 line height; small labels at least 14 px.
- Reading measure 60–70 characters; sentence case UI; limited uppercase chapter labels with moderate tracking.
- At most two families, three necessary weights, font-display swap, and no essential content rendered as a font-dependent symbol.

## Layout and responsive composition

Base spacing scale: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128 px. Mobile gutters 20 px (16 px at 320); tablet 32; desktop 48. Main width max 1280 px. Use content-driven breakpoints around 640 and 1024 px, not device detection.

Mobile is a deliberately composed single column: compact wordmark and menu, provisional date, large live title, concise premise, primary CTA, then a framed illustration. Desktop hero becomes asymmetric: approximately 55% editorial title and 45% art, with a narrow chapter rail. Hero must not force the CTA below an artificial full-height screen. Decorative anatomy must not cross reading text.

Home sequence: hero → short festival premise → two distinct track chapters → curated event highlights → schedule preview → visit/help → FAQ/footer. Track chapters use varied art-led compositions; the event catalog uses consistent information cards. Maintain generous whitespace so texture does not become visual noise.

## Components and states

| Component | Rules |
| --- | --- |
| Header / mobile menu | Semantic navigation, menu button with expanded state, escape closes, focus returns, hidden links not focusable; non-JS navigation remains available |
| Hero | Live title/date/status and one clear primary action; image dimensions reserved; no misleading legacy title baked into crop |
| Event card | Art, track label, title, plain-language subtitle, schedule/fee availability, “View event”; avoid nested interactive elements |
| Event details | Breadcrumb, description, eligibility, fee state, time/location, registration state; facts before decorative secondary art |
| Register action | Real approved URL only when open; pending renders explanatory text; closed renders “Registration closed”; external destination communicated |
| Filters | Labelled native controls, current state, result count and no-results/reset; initial full list works without JS |
| Schedule | Day heading and chronological semantic list; no horizontal timetable required on mobile; unknown timing separated from confirmed slots |
| FAQ | Native details/summary or equivalent tested disclosure; usable without JS |
| Footer | Institution, confirmed contacts, update date, external registration/privacy explanation; omit invented social links |

Buttons/links need hover, focus, active, and unavailable states. Target touch controls 44 × 44 px minimum. Underline inline links. Sticky navigation must account for anchor offsets and keyboard focus; any bottom action bar must respect safe areas and never hide content. Prefer ordinary pages to detail modals.

## Motion, imagery, accessibility

One optional short hero reveal and restrained 150–250 ms interaction transitions. No scroll hijacking, forced preloader, autoplay sound, cursor replacement, continuous animation, or essential content hidden awaiting animation. Respect prefers-reduced-motion; default content visible before JS.

Use AVIF/WebP responsive derivatives with a fallback where needed. Hero eager-loads; below-fold artwork lazy-loads. Specify width/height and meaningful crop focal points. Use subtle texture behind quiet surfaces, not underneath dense copy. Decorative images use empty alt; informative images get purpose-based descriptions without repeating adjacent text.

Review mobile menu, keyboard order, form handoff, reduced motion, long titles, missing art, unknown prices, one-day/multi-day schedules, closed registration, and empty lists. Compare implementation against the supplied artwork for fidelity and against PRD acceptance criteria for usability. “World class” is an ambition to validate through visual and usability review, not an achieved claim.

## Accommodation ribbon — 25 November 2026
Owner approved implementation of a global gold ribbon below navigation, repeating “Register for Accommodation”. Implemented in AccommodationAnnouncement.astro via Base.astro, with a clipped transform marquee, pause/resume, hover/focus pause, and static reduced-motion/no-JavaScript fallback. Existing sticky navigation and event workflows are unchanged. No dependencies added.
Configuration: src/content/accommodation.json owns enabled, status (pending/open/closed), nullable url, organizerVerified, label and pendingLabel. Open requires an organizer-verified HTTPS Google Form; pending/closed never render a link. The URL has not been supplied, so the current ribbon says “Accommodation registration · Link coming soon”. Set the approved URL, organizerVerified=true and status=open together, then validate and rebuild. Config changes require rebuilding; do not infer form access or successful submission from URL validation.
Verified: npm run check; npm test (9/9); npm run build (21 pages); node scripts/audit-links.mjs (0 broken internal links). Browser preview at 127.0.0.1:4322 timed out in the in-app browser, so visual responsive, keyboard, reduced-motion and zoom verification remain pending. No commit, push or deployment performed. Generated design concept is not implementation verification.
