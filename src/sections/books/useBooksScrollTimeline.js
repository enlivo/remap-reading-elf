import {
  useLayoutEffect,
  useState,
} from "react";

import {
  useScroll,
  useTransform,
} from "motion/react";

import {
  BOOKS_STATES,
  BOOKS_TOTAL_RUNWAY_VH,
} from "./booksScrollStates.js";

export default function useBooksScrollTimeline(
  sceneRef,
  stageRef,
) {
  const [geometry, setGeometry] =
    useState({
      height: 0,
      runway: 0,
      runwaySegments: [],
      start: 0,
      vh: 0,
    });

  const {
    scrollY,
  } = useScroll();

  useLayoutEffect(() => {
    const measure = () => {
      const height =
        stageRef.current
          ?.offsetHeight ?? 0;

      const vh =
        window.innerHeight / 100;

      const start =
        sceneRef.current
          ? (
              sceneRef.current
                .getBoundingClientRect()
                .top +
              window.scrollY
            )
          : 0;

      setGeometry({
        height,
        runway:
          vh *
          BOOKS_TOTAL_RUNWAY_VH,
        runwaySegments:
          BOOKS_STATES.map(
            (state) =>
              state.runwayVh,
          ),
        start,
        vh,
      });
    };

    const observer =
      new ResizeObserver(
        measure,
      );

    if (stageRef.current) {
      observer.observe(
        stageRef.current,
      );
    }

    window.addEventListener(
      "resize",
      measure,
    );

    measure();

    return () => {
      observer.disconnect();

      window.removeEventListener(
        "resize",
        measure,
      );
    };
  }, [
    sceneRef,
    stageRef,
  ]);

  const progress =
    useTransform(
      scrollY,
      (scrollPosition) => {
        if (
          !geometry.vh ||
          geometry.runwaySegments
            .length < 2
        ) {
          return 0;
        }

        let remaining =
          Math.max(
            0,
            scrollPosition -
              geometry.start,
          );

        for (
          let index = 1;
          index <
          geometry
            .runwaySegments
            .length;
          index += 1
        ) {
          const distance =
            geometry
              .runwaySegments[
                index
              ] *
            geometry.vh;

          if (
            remaining <=
            distance
          ) {
            return (
              index -
              1 +
              remaining /
                distance
            );
          }

          remaining -=
            distance;
        }

        return (
          geometry
            .runwaySegments
            .length -
          1
        );
      },
    );

  return {
    geometry,
    progress,
  };
}
