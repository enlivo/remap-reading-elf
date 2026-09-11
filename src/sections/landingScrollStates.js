// Landing choreography is calibrated against the 1920 x 1080 prototype.
//
// State 0 -> State 1 is the already-approved first transition.
//
// After that, the scene is deliberately NOT one translated page.
// Hero, Explore, Gallery and the BottomStrip move independently.

export const LANDING_STATES = [
  {
    name: "PC",
    node: "29:339",
    runwayVh: 0,

    heroY: 0,
    shade: 0,

    exploreY: 180,
    exploreX: 0,
    exploreOpacity: 1,

    galleryY: 1080,
    galleryOpacity: 0,

    stripArtworkInset: 0,
    stripY: 890,
    stripX: 18,
    upperY: 30,
  },

  {
    name: "PC Scroll 2",
    node: "91:157",
    runwayVh: 90,

    heroY: 0,
    shade: 0,

    exploreY: 0,
    exploreX: 0,
    exploreOpacity: 1,

    galleryY: 1080,
    galleryOpacity: 0,

    stripArtworkInset: 0,
    stripY: 710,
    stripX: 0,
    upperY: 30,
  },

  // User screenshot: position immediately after the next scroll.
  // First card row is fully visible and the strip has moved into the card scene.
  {
    name: "PC Scroll 3",
    node: "91:326",
    runwayVh: 90,

    heroY: -120,
    shade: 0.55,

    exploreY: -600,
    exploreX: 0,
    exploreOpacity: 1,

    galleryY: 1080,
    galleryOpacity: 0,

    stripArtworkInset: 100,
    stripY: 210,
    stripX: 0,
    upperY: 24,
  },

  // The important transition:
  // cards make a large upward move and a small left slip,
  // while the strip itself only makes a relatively small move.
  {
    name: "PC Scroll 4",
    node: "91:484",
    runwayVh: 90,

    heroY: -120,
    shade: 0.55,

    exploreY: -1040,
    exploreX: -24,
    exploreOpacity: 1,

    // Figma 91:484: title y=953, gallery origin=750.
    galleryY: 750,
    galleryOpacity: 1,

    stripArtworkInset: 89,
    stripY: 140,
    stripX: 0,
    upperY: 24,
  },

  // Cards do not keep travelling a huge distance.
  // They crossfade away while Gallery takes over the same viewport.
  {
    name: "PC Scroll 5",
    node: "91:658",
    runwayVh: 100,

    heroY: -120,
    shade: 0.55,

    exploreY: -1040,
    exploreX: -24,
    exploreOpacity: 0,

    galleryY: 0,
    galleryOpacity: 1,

    stripArtworkInset: 100,
    stripY: 100,
    stripX: 0,
    upperY: 24,
  },
];

export const STATE_RANGE = LANDING_STATES.map((_, index) => index);

export const canvasVw = (value) => `${value / 19.2}vw`;

export const stateValues = (key, origin = 0) =>
  LANDING_STATES.map((state) => canvasVw(state[key] - origin));

export const TOTAL_RUNWAY_VH = LANDING_STATES.reduce(
  (sum, state) => sum + state.runwayVh,
  0,
);
