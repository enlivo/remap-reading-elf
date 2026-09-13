import {
  useTransform,
} from "motion/react";

import {
  BOOKS_STATE_RANGE,
  stateNumbers,
  stateSvh,
} from "./booksScrollStates.js";

export default function useBooksComposition(
  progress,
) {
  return {
    heroOpacity:
      useTransform(
        progress,
        BOOKS_STATE_RANGE,
        stateNumbers(
          "heroOpacity",
        ),
      ),

    heroScale:
      useTransform(
        progress,
        BOOKS_STATE_RANGE,
        stateNumbers(
          "heroScale",
        ),
      ),

    redSurfaceOpacity:
      useTransform(
        progress,
        BOOKS_STATE_RANGE,
        stateNumbers(
          "redSurfaceOpacity",
        ),
      ),

    stripY:
      useTransform(
        progress,
        BOOKS_STATE_RANGE,
        stateSvh(
          "stripY",
        ),
      ),

    introY:
      useTransform(
        progress,
        BOOKS_STATE_RANGE,
        stateSvh(
          "introY",
        ),
      ),

    productsY:
      useTransform(
        progress,
        BOOKS_STATE_RANGE,
        stateSvh(
          "productsY",
        ),
      ),

    productsOpacity:
      useTransform(
        progress,
        BOOKS_STATE_RANGE,
        stateNumbers(
          "productsOpacity",
        ),
      ),
  };
}
