/*
 * Reading Elf Books — desktop pinned-camera choreography.
 *
 * Calibrated from the 1920 x 1080 Figma snapshots.
 *
 * State 0 -> 1:
 * Existing approved Hero -> partial Collection reveal.
 *
 * State 1 -> 2:
 * Collection takes over the full camera. The first book row
 * begins entering but the Picks strip has NOT docked yet.
 *
 * State 2 -> 3:
 * Third scroll transition. Collection intro exits, books rise,
 * and the Picks strip completes its movement into the fixed
 * position below the main menu.
 */

export const BOOKS_STATES = [
  {
    name: "Hero",
    runwayVh: 0,

    heroOpacity: 1,
    heroScale: 1,

    redSurfaceOpacity: 0,

    stripY: 94,

    introY: 103,

    productsY: 112,
    productsOpacity: 0,
  },

  {
    name: "Collection Reveal",
    runwayVh: 90,

    heroOpacity: 1,
    heroScale: 1.01,

    redSurfaceOpacity: 0,

    stripY: 43,

    introY: 55.8,

    productsY: 99,
    productsOpacity: 0,
  },

  {
    name: "Collection",
    runwayVh: 90,

    heroOpacity: 0,
    heroScale: 1.02,

    redSurfaceOpacity: 1,

    stripY: 13,

    introY: 25.1,

    productsY: 63.1,
    productsOpacity: 1,
  },

  {
    /*
     * Collection resolved.
     *
     * The Picks strip completes its final short move and stays
     * immediately below the upper navigation.
     *
     * The Collection panel does NOT leave yet. It settles into
     * the top of the red section and remains there for the
     * duration of the Collection. A future section transition
     * will own its eventual fade / exit.
     */
    name: "Collection Resolved",
    runwayVh: 90,

    heroOpacity: 0,
    heroScale: 1.025,

    redSurfaceOpacity: 1,

    stripY: 3.5,

    introY: 15.5,

    /*
     * Keep the first full product row inside the resolved
     * 100svh camera. Figma places this row noticeably higher
     * than our previous 58svh calibration.
     */
    productsY: 53.5,
    productsOpacity: 1,
  },
];

/*
 * Responsive choreography keeps the same four narrative beats as
 * desktop, with shorter runways and positions calibrated for the
 * taller tablet and phone cameras. The approved BOOKS_STATES table
 * above remains the sole desktop source of truth.
 */
export const BOOKS_TABLET_STATES = [
  {
    name: "Hero",
    runwayVh: 0,
    heroOpacity: 1,
    heroScale: 1,
    redSurfaceOpacity: 0,
    stripY: 94,
    introY: 104,
    productsY: 112,
    productsOpacity: 0,
  },
  {
    name: "Collection Reveal",
    runwayVh: 70,
    heroOpacity: 1,
    heroScale: 1.008,
    redSurfaceOpacity: 0,
    stripY: 42,
    introY: 62,
    productsY: 99,
    productsOpacity: 0,
  },
  {
    name: "Collection",
    runwayVh: 70,
    heroOpacity: 0,
    heroScale: 1.015,
    redSurfaceOpacity: 1,
    stripY: 15,
    introY: 27,
    productsY: 64,
    productsOpacity: 1,
  },
  {
    name: "Collection Resolved",
    runwayVh: 70,
    heroOpacity: 0,
    heroScale: 1.018,
    redSurfaceOpacity: 1,
    stripY: 6,
    introY: 13,
    productsY: 54,
    productsOpacity: 1,
  },
];

export const BOOKS_PHONE_STATES = [
  {
    name: "Hero",
    runwayVh: 0,
    heroOpacity: 1,
    heroScale: 1,
    redSurfaceOpacity: 0,
    stripY: 94,
    introY: 104,
    productsY: 112,
    productsOpacity: 0,
  },
  {
    name: "Collection Reveal",
    runwayVh: 50,
    heroOpacity: 1,
    heroScale: 1.006,
    redSurfaceOpacity: 0,
    stripY: 50,
    introY: 70,
    productsY: 99,
    productsOpacity: 0,
  },
  {
    name: "Collection",
    runwayVh: 50,
    heroOpacity: 0,
    heroScale: 1.01,
    redSurfaceOpacity: 1,
    stripY: 18,
    introY: 26,
    productsY: 63,
    productsOpacity: 1,
  },
  {
    name: "Collection Resolved",
    runwayVh: 50,
    heroOpacity: 0,
    heroScale: 1.012,
    redSurfaceOpacity: 1,
    stripY: 8,
    introY: 10,
    productsY: 54,
    productsOpacity: 1,
  },
];

export const BOOKS_STATE_RANGE =
  BOOKS_STATES.map(
    (_, index) => index,
  );

export const BOOKS_TOTAL_RUNWAY_VH =
  BOOKS_STATES.reduce(
    (total, state) =>
      total + state.runwayVh,
    0,
  );

export const booksStatesForMode = (
  mode,
) => {
  if (mode === "phone") {
    return BOOKS_PHONE_STATES;
  }

  if (mode === "tablet") {
    return BOOKS_TABLET_STATES;
  }

  return BOOKS_STATES;
};

export const stateNumbers = (
  key,
) =>
  BOOKS_STATES.map(
    (state) => state[key],
  );

export const stateSvh = (
  key,
) =>
  BOOKS_STATES.map(
    (state) =>
      `${state[key]}svh`,
  );
