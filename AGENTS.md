# Implementation update — 19 November 2026

The owner authorized implementation. A local Astro static preview is now implemented; public publication remains pending confirmed content and launch authorization. Historical planning statements below are superseded by this update.

# Persistent project instructions

## Working standard

Act as a principal research scientist and software engineer specializing in machine learning, AI evaluations, and scientific computing, with rigorous software and design judgment. Understand the codebase, architecture, requirements, and relevant assets before executing. Ask precise questions when material ambiguity cannot safely be represented as a pending state. Prioritize correctness, challenge flawed assumptions, make minimal maintainable changes, verify edge cases, and never fabricate verification or completion.

## Current authorization and state

The owner requested documentation first, then review. As of 17 November 2026, only planning documents and artwork inspection aids exist. Do not scaffold, implement, install project dependencies, or publish until the owner approves continuation. Once continuation is authorized, do not repeatedly ask permission for ordinary reversible work within scope. Any later explicit owner instruction supersedes this checkpoint; record it in TASKS.md.

## Read first

Read PRD.md, DESIGN.md, ARCHITECTURE.md, TASKS.md, and README.md before changes. Inspect applicable nested instructions and current package scripts if implementation has begun. Do not infer current state from this file alone. Read relevant original artwork, not only filenames. Current owner instructions override legacy poster copy; preserve and document decisions that change established contracts.

## Non-negotiable constraints

- Frontend-only static site. Google Forms for registration. No Docker, database, auth, payment system, backend, or unnecessary infrastructure.
- Preserve `References images/` originals. Use derived assets separately. No guessed official marks or undocumented third-party assets.
- Preserve the permanent editorial Renaissance medical identity in DESIGN.md. Festival name/date/program/forms belong in content files and must be independently editable.
- Current working content: Plexus 2026, KH Patil Institution of Medical Sciences, provisional 14 December 2026. Do not restore the artwork's two-day dates or assume a second day.
- Missing operational information stays explicit and nullable. Never use random registration links, invented fees, contacts, venue directions, endorsements, attendance figures, or capacity claims.
- Pending/closed registration has no active submission link. Open registration requires validation and organizer verification of the correct form.
- Mobile-first, keyboard accessible, reduced-motion aware, HTML-first. Essential information and registration links must work without JS. Avoid decorative animation dependencies.

## Change workflow

1. Inspect the owning content/schema/component and relevant requirements.
2. Make the smallest coherent change; keep shared values in one source.
3. Run checks appropriate to the change and record commands/results honestly. If tooling is absent, describe that limitation.
4. Check affected responsive states and meaningful edge cases. Test no-JS behavior and keyboard navigation for interaction changes.
5. Update all affected living documents in the same change. TASKS.md must distinguish implemented, verified, blocked, and proposed work.
6. Report outcome, verification, and remaining limitations concisely. Do not claim production readiness from documentation or a successful build alone.

Do not add packages without a concrete need. Commit exact dependency resolution and runtime pins when scaffolding. Never commit secrets, form response exports, or attendee data. Do not force-push or overwrite unrelated owner work. Do not introduce a new deployment service as an assumed requirement. Keep local development and public launch distinct.

## Required edge cases

Long/replaced festival names, single or multiple dates, unknown venue, empty event lists, missing art, invalid event references, unknown vs free fees, pending/open/closed forms, expired confirmed deadlines, mixed combo/event registration, slow connections, 320 px reflow, 200% zoom, reduced motion, menu escape/focus return, and external form access restrictions.

## Documentation ownership

PRD owns scope and product facts; DESIGN owns appearance and interaction principles; ARCHITECTURE owns schemas/technical decisions; README owns tested operational instructions; TASKS owns state/next work; AGENTS owns persistent rules. Update linked contracts rather than copying inconsistent values into multiple files. Record material decisions with date, reason, and verification status. No chat history should be required for handover.
