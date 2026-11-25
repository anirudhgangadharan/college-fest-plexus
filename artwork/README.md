# Event paintings — 25 November 2026

Eight generated Renaissance-style paintings replace repeated academic/cultural card emblems. The owner authorized execution after approving the eight-image plan. Direct style inputs were owner-supplied `a3.png` and `a7.png` workshop illustrations: amber light, burgundy/umber/ivory fabric and finely painted figures. New full-frame backgrounds use muted olive. Cultural scenes retain Indian subjects and performance context.

`event-masters/` preserves the generated PNG originals; `manifest.json` records source output filenames, event slugs, titles and descriptions. The generation tool was the built-in imagegen tool. Images are illustrative, not clinical teaching diagrams or historical documentation. No existing workshop, online competition, logo or source artwork was overwritten.

Run `python scripts/prepare-event-art.py` from the site root with Pillow installed to regenerate 400/800/1200 px WebP files (quality 82) and `event-art-contact-sheet.jpg`. This performs full-frame resampling without cropping. Masters stay outside `public/` and are not shipped in the static build. Website files live under `public/art/events/`; all use a 4:5 display frame.

Content keys: `artwork` and `artworkAlt` in `src/content/events.json`; `EventArtwork.astro` renders responsive sources and reserved dimensions. Catalog cards are decorative within their labelled links; detail images have descriptive alt text. Home academic and cultural category cards reuse research and group-dance images. Registration cards intentionally retain their approved text-only layout.
