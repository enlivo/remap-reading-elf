# Cards → Gallery visual QA — 11 September 2026

Review candidate at http://127.0.0.1:5174/. No commit was made.

## Interpretation and source evidence

The foliage is a cropped background behind the card grid plus a vertically mirrored crop entering with Gallery. It is not a separate row between the cards. The final Gallery uses the designer’s complete Gallery background and photograph strip.

Inspected both the current 1:30 PM recording and desired prototype recordings. The new 2:23 PM recording supplies the Scroll 4 and Gallery endpoints. Static measurements came from Figma through the Akshay Roy Chrome profile, including an SVG copy of PC Scroll 4 (91:484). Figma MCP remained rate-limited; native Figma inspection worked.

## Geometry at a 1920 × 1080 canvas

| Item | Reference / implementation |
| --- | --- |
| Cards | Figma 812 × 360.575; browser 812 × 361, preserving raster aspect ratio |
| Column / row gap | 92 / 89 px |
| Scroll 3 card origins | Browser (135.99,348), (1039.99,348), lower row y798 |
| Scroll 4 card origins | Figma (105,-179), (1009,-179), lower row y270.575; browser lower row y271 |
| Foliage crop | 2586.42 × 777, x−464, top−23 in Scroll 4 |
| Mirrored crop | Top748 in Scroll 4 |
| Gallery title | Scroll 4 (101,953), width244; final calibrated (87,203) |
| Brown leaf, 120:300 | (1819,581), 106.89 × 118.85, Figma rotation0 |
| Green leaf | Approximately (23.57,825.10), width124 |

The approved Explore travel remains −600, then −1040 with x−24. BottomStrip timeline values remain 210,140,100; a separate artwork inset of 100,89,100 compensates for logo pixels above the cream bar. PC and Scroll 2 have zero new inset. The Gallery entry origin is750. Layout corrections and foliage/title opacity/position tracks share the existing scene progress MotionValue.

## Files changed in this pass

- `src/components/LandingNavigation.jsx`: later-state artwork-origin correction.
- `src/sections/LandingIntroScene.jsx`: composition hook integration and hero occlusion.
- `src/sections/landingScrollStates.js`: Gallery entry and explicit strip artwork inset.
- `src/sections/useLandingComposition.js`: new centralized layout and scenery tracks.
- `src/sections/ExploreSection.jsx`: cropped foliage and brown leaf.
- `src/sections/GallerySection.jsx`: mirrored entry foliage and green leaf.
- `src/styles/sections/explore.css`: measured grid and foliage crop.
- `src/styles/sections/gallery.css`: measured title, photos and calibrated curved photo mask.
- `assets/images/landing-elements/foliage-figma.png`: exact, unmodified embedded Figma image extracted from frame91:484.
- This QA report.

Existing HomePage, hero, footer and timeline changes were preserved. No new dependencies. Changed source files remain below 300 lines.

## Artwork mapping

- Four existing processed card PNGs retained after visual comparison. Original Books and Story Box exports are truncated in height; replacing the complete cards with them would remove content.
- Foliage source: exact Figma embedded 1536 × 1024 PNG; CSS reproduces Figma’s image-fill crop.
- Final Gallery: original `Landing Page/Background For Gallery.png`, `Images.png`, and `Gallery Title.png`.
- Leaves: original `Landing Page/Elements of Landing Page/5.png` (green), `6.png` (brown).
- Navigation: existing original Upper Tab and Strip artwork, rendered once.

## Validation

- `npm run build`: passed (469 modules).
- `npm run lint`: passed.
- `git diff --check`: passed.
- Browser QA at1920 ×1080: inspected PC, Scroll2, Scroll3, Scroll4, intermediate Gallery overlap, and final Gallery; exercised forward and reverse scrolling.
- Tracked the original seven DOM nodes across Gallery → Scroll3 → Scroll2 → PC → Gallery. All remained connected: four cards, one UpperTab, one BottomStrip, one Gallery.
- Source search confirms one LandingNavigation owner in LandingIntroScene; HeroSection has no UpperTab/BottomStrip render, and HomePage has no PersistentNavigation render.
- Corrected hero bleed-through at partial Gallery progress and used a photo mask so the curved edge remains intact during opacity interpolation.
- Temporary QA harness removed after verification.

## Remaining fidelity limit

The supplied Events/Elements of Events/3.png is a red starburst, while target120:300 is the brown leaf measured above. The newer recording skips the portion needed to establish the red element’s start/end angle, origin and timing. No guessed 0→105° rotation was added. That requested detail remains unimplemented and needs a reference showing its motion. Intermediate crop/opacity interpolation and the curved Gallery photo edge are calibrated from the recording, not claimed as exported Figma animation metadata.

The implemented composition is ready for visual review. Exact rotational fidelity is not signed off. This pass does not claim completion or revalidation of unrelated About, Visit, Instagram or Footer work.

## Working-tree summary

Before this report, tracked changes relative to HEAD covered9 files (528 insertions,61 deletions before the final small CSS adjustment). That total includes pre-existing changes and must not be attributed entirely to this pass. The state table and timeline hook were already untracked at the start; this pass adds the composition hook, foliage asset and report. Safety copies remain in `/tmp/elf-review/safety-20260911-145003`.
