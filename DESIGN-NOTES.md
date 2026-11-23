# Plexus visual update

Local visual update, 23 November 2026. Based on commit 277d05d.

## Scope
Structure, routes, registration state and event copy retained. Rounded parchment surfaces, warm layered shadows, thin gold rims and CSS-only restrained artwork hover depth. No new runtime dependency, no framework migration, no WebGL. Reduced-motion rules remove nonessential transitions and transforms; hover depth is limited to fine pointers.

## Design references
- https://github.com/DavidHDev/react-bits , Tilted Card, MIT + Commons Clause.
- https://github.com/magicuidesign/magicui , Magic Card, MIT.
- https://github.com/ibelick/motion-primitives , Tilt, MIT.

These are technique references only. No source code from those repositories was copied. The CSS in this change is an original implementation.

## Brochure assets
Source: https://www.canva.com/design/DAHa0SJ45FQ/m1mcjUUS9iBH_t4_0ZRagA/view
Individual image files served by the authorized Canva viewer were downloaded, visually matched to the page, then converted to WebP. Not original print masters and not AI-upscaled. Existing text remains HTML.

- p4: institute illustration, served 554 x 554.
- p5: director portrait, served 720 x 1600 including transparent margin, trimmed to its visible content.
- p6: rectangular gold frame, 800 x 677; oval gold frame, 667 x 800. All five committee portraits are genuinely absent from the source, so honest placeholders remain.
- p50: organizing-batch photograph, 1600 x 1200. The separate Students Union frame is empty in the source.
- p51: architectural illustration, 1024 x 1024, and Basaveshwara statue cutout, 1194 x 1599. These are decorative brochure illustrations, not a verified campus photograph or a route map.
- p52: Veeranarayana 597 x 800; Trikuteshwara, Lakkundi and Doddabasappa each 799 x 536.
- p53: Magadi bird cutout 1599 x 1073; Kappatagudda and Gadag Zoo each 799 x 536. The bird image is brochure artwork, not asserted to be a location photograph. Basaveshwara cutout reused for Bhishma Kere.

No Canva edits, shares or account changes. No new destinations or QR links added. Full-quality print originals were not available from this viewer. Source files are bundled locally, not hotlinked to expiring viewer URLs.

## Hero watermark follow-up
Page headers use a decorative, pointer-inert Canva image at 10% opacity, with a left-edge fade to keep text clear. Events and Schedule use the p5 medical motif, About the institute illustration, Visit the travel-building illustration, Registration and event-detail introductions the Plexus emblem. Home keeps its existing hero art and uses the emblem at 10%. On Visit, a second faint statue sits to the right of the accommodation note, interpreting the unmarked follow-up screenshot as the same request. These decorations add no information or links and are CSS backgrounds, not screen-reader content.

The second follow-up reduces About/Visit section padding to 38px on desktop and 30px on mobile, narrows committee gaps, and adds a 10% temple silhouette between the two full-opacity travel illustrations. The accommodation-side decoration is hidden on narrow phones, where there is no genuine side space. Registration's source emblem has a radial edge fade to avoid a faint rectangular image boundary.

## Stronger collage follow-up, local review only
The 30% revision is a separate commit after 4e05651. Three composed 1800x900 WebP collages use existing brochure extracts: clinical treatment (12/13/14), institute/clinical teaching (institute/17/16), and Gadag heritage (Veeranarayana/Trikuteshwara/Basaveshwara). Feathered composition edges and a left-side reading fade blend the images into the parchment. Background layers are set to 30% opacity; the reading fade intentionally reduces visibility under text. No fabricated people or substitute photographs were used. The full-opacity Home clinical hero stays in place, its secondary emblem is now 30%.

Body type is 21px desktop / 22px mobile (previously 19px); introductory leads are 25px / 24px (previously 22px). Grid gaps reduce from 26px to 18px desktop / 16px mobile; section padding and committee spacing are tighter. Text, ordering, prices, forms and framework remain unchanged. This revision is NOT included in the separate permission to publish the frozen 4e05651 state.
