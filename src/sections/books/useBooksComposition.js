import {
  useTransform,
} from "motion/react";

import {
  booksStatesForMode,
} from "./booksScrollStates.js";

export default function useBooksComposition(
  progress,
  mode = "desktop",
) {
  const states =
    booksStatesForMode(mode);

  const range = states.map(
    (_, index) => index,
  );

  const numbers = (key) =>
    states.map(
      (state) => state[key],
    );

  const svh = (key) =>
    states.map(
      (state) =>
        `${state[key]}svh`,
    );

  return {
    heroOpacity:
      useTransform(
        progress,
        range,
        numbers(
          "heroOpacity",
        ),
      ),

    heroScale:
      useTransform(
        progress,
        range,
        numbers(
          "heroScale",
        ),
      ),

    redSurfaceOpacity:
      useTransform(
        progress,
        range,
        numbers(
          "redSurfaceOpacity",
        ),
      ),

    stripY:
      useTransform(
        progress,
        range,
        svh(
          "stripY",
        ),
      ),

    introY:
      useTransform(
        progress,
        range,
        svh(
          "introY",
        ),
      ),

    productsY:
      useTransform(
        progress,
        range,
        svh(
          "productsY",
        ),
      ),

    productsOpacity:
      useTransform(
        progress,
        range,
        numbers(
          "productsOpacity",
        ),
      ),
  };
}
