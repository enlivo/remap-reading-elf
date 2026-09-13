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
