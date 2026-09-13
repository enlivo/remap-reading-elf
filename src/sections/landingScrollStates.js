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

  // Gallery -> About.
  // Calibrated from the supplied prototype recording:
  // Gallery dissolves while the About image rises first;
  // the remaining About composition resolves behind it.
  {
    name: "About",
    node: "127:594",
    runwayVh: 100,

    heroY: -120,
    shade: 0.55,

    exploreY: -1040,
    exploreX: -24,
    exploreOpacity: 0,

    galleryY: 0,
    galleryOpacity: 0,

    stripArtworkInset: 100,
    stripY: 70,
    stripX: 0,
    upperY: 24,
  },

  // Custom continuation after Figma 127:594.
  //
  // Motion language intentionally matches the established
  // landing transitions:
  // outgoing section softens while the next section rises
  // vertically into the same viewport.
  {
    name: "Visit",
    node: null,
    runwayVh: 100,

    heroY: -120,
    shade: 0.55,

    exploreY: -1040,
    exploreX: -24,
    exploreOpacity: 0,

    galleryY: 0,
    galleryOpacity: 0,

    stripArtworkInset: 100,
    stripY: 70,
    stripX: 0,
    upperY: 24,
  },

  // Custom Visit -> Instagram continuation.
  //
  // Same scroll-scrubbed language as previous transitions,
  // but the primary Instagram panel enters diagonally from
  // the lower-right instead of rising straight upward.
  {
    name: "Instagram",
    node: null,
    runwayVh: 100,

    heroY: -120,
    shade: 0.55,

    exploreY: -1040,
    exploreX: -24,
    exploreOpacity: 0,

    galleryY: 0,
    galleryOpacity: 0,

    stripArtworkInset: 100,
    stripY: 70,
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


/* ==========================================================
   PHONE FULL-FRAME LANDING STATES

   Phone uses a real 100vw x 100svh camera.

   IMPORTANT:
   Actor travel below is expressed in viewport-height units,
   not vw. An incoming actor at +100 is therefore completely
   below the pinned frame regardless of phone aspect ratio.

   Progress remains 0 -> 7, matching desktop state count.
   ========================================================== */

export const PHONE_LANDING_STATES = [
  {
    name: "Phone Hero",
    runwayVh: 0,

    heroY: 0,
    heroOpacity: 1,

    exploreY: 100,
    exploreOpacity: 0,

    galleryY: 100,
    galleryOpacity: 0,

    aboutY: 100,
    aboutOpacity: 0,

    visitY: 100,
    visitOpacity: 0,

    instagramY: 100,
    instagramOpacity: 0,
  },

  {
    name: "Phone Hero Resolved",
    runwayVh: 80,

    heroY: 0,
    heroOpacity: 1,

    exploreY: 100,
    exploreOpacity: 0,

    galleryY: 100,
    galleryOpacity: 0,

    aboutY: 100,
    aboutOpacity: 0,

    visitY: 100,
    visitOpacity: 0,

    instagramY: 100,
    instagramOpacity: 0,
  },

  /*
   * Full-frame vertical exchange:
   * Hero leaves through the top while Explore rises from below.
   */
  {
    name: "Phone Explore Upper",
    runwayVh: 90,

    heroY: -100,
    heroOpacity: 0,

    exploreY: 0,
    exploreOpacity: 1,

    galleryY: 100,
    galleryOpacity: 0,

    aboutY: 100,
    aboutOpacity: 0,

    visitY: 100,
    visitOpacity: 0,

    instagramY: 100,
    instagramOpacity: 0,
  },

  /*
   * Explore has more vertical content than the other scenes.
   * Move its card stack through the camera before Gallery takes
   * over. Gallery only starts becoming visible near the bottom.
   */
  {
    name: "Phone Explore Lower",
    runwayVh: 90,

    heroY: -100,
    heroOpacity: 0,

    exploreY: -28,
    exploreOpacity: 1,

    galleryY: 72,
    galleryOpacity: 0.4,

    aboutY: 100,
    aboutOpacity: 0,

    visitY: 100,
    visitOpacity: 0,

    instagramY: 100,
    instagramOpacity: 0,
  },

  {
    name: "Phone Gallery",
    runwayVh: 95,

    heroY: -100,
    heroOpacity: 0,

    exploreY: -100,
    exploreOpacity: 0,

    galleryY: 0,
    galleryOpacity: 1,

    aboutY: 100,
    aboutOpacity: 0,

    visitY: 100,
    visitOpacity: 0,

    instagramY: 100,
    instagramOpacity: 0,
  },

  {
    name: "Phone About",
    runwayVh: 95,

    heroY: -100,
    heroOpacity: 0,

    exploreY: -100,
    exploreOpacity: 0,

    galleryY: -100,
    galleryOpacity: 0,

    aboutY: 0,
    aboutOpacity: 1,

    visitY: 0,
    visitOpacity: 1,

    instagramY: 100,
    instagramOpacity: 0,
  },

  {
    name: "Phone Visit",
    runwayVh: 95,

    heroY: -100,
    heroOpacity: 0,

    exploreY: -100,
    exploreOpacity: 0,

    galleryY: -100,
    galleryOpacity: 0,

    aboutY: 0,
    aboutOpacity: 1,

    visitY: 0,
    visitOpacity: 1,

    instagramY: 100,
    instagramOpacity: 0,
  },

  {
    name: "Phone Instagram",
    runwayVh: 95,

    heroY: -100,
    heroOpacity: 0,

    exploreY: -100,
    exploreOpacity: 0,

    galleryY: -100,
    galleryOpacity: 0,

    aboutY: -100,
    aboutOpacity: 0,

    visitY: -100,
    visitOpacity: 0,

    instagramY: 0,
    instagramOpacity: 1,
  },
];

export const PHONE_STATE_RANGE =
  PHONE_LANDING_STATES.map(
    (_, index) => index,
  );

/*
 * Phone actor translation belongs to the viewport camera,
 * therefore use svh rather than vw.
 */
export const phoneStateValues =
  (key) =>
    PHONE_LANDING_STATES.map(
      (state) =>
        `${state[key]}svh`,
    );

export const PHONE_TOTAL_RUNWAY_VH =
  PHONE_LANDING_STATES.reduce(
    (sum, state) =>
      sum + state.runwayVh,
    0,
  );
