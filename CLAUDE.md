# Reading Elf — working notes

Vite + React, plain CSS, custom client-side routing in `src/App.jsx`.
No router library, no CSS framework, no component library.

## How to work in this repo

Single-pass builds. Make the change, run `npx vite build` to confirm it
compiles, and stop. Do not run a Playwright audit loop or a
self-verification pass unless something visibly breaks.
(Owner's standing preference: single pass, no audit loops, no self-verification.)

## CSS gotcha — duplicate @media blocks

`src/styles/responsive.css` has accumulated several near-duplicate
`@media (max-width: 767px)` blocks that target the same selectors. The
block that appears **later in the file wins**. A style change can
silently do nothing because a later block overrides it.

Before editing any responsive rule:

    grep -n "@media" src/styles/responsive.css
    grep -n "<the-class>" src/styles/responsive.css

and confirm which block is last. The same applies to
`src/styles/sections/gallery.css`, which has three separate
`@media (min-width: 901px)` blocks.

## CSS load order

`src/main.jsx` imports stylesheets in order. `responsive.css` loads
*after* the `styles/sections/*.css` files, so its `max-width` blocks
override section CSS on mobile. Desktop (`min-width: 901px`) rules live
in the section files.

## Landing page composition

The home page is a single scroll-driven scene: `LandingIntroScene.jsx`
stages Hero → Explore → Gallery → About → Visit → Instagram as absolutely
positioned actors on a 16:9 canvas, driven by Framer Motion values from
`useLandingScrollTimeline.js` and the state tables in
`landingScrollStates.js`. Sections rendered inside it get `staged`;
`.about-section--staged` / `.visit-section--staged` carry the desktop
landing geometry, which is *different* from the standalone section CSS.

## Images

Large photos get a compressed `.webp` sibling; JSX imports the `.webp`.
Gallery marquee photos live in `assets/images/gallery-marquee/` (webp,
560px tall) and are picked up automatically by an `import.meta.glob` in
`GallerySection.jsx` — dropping a new file in the folder adds it to the
board, no code change needed. Originals stay in `assets/images/gallery/`.
