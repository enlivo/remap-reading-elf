import {
  useLayoutEffect,
  useState,
} from "react";

import {
  useScroll,
  useTransform,
} from "motion/react";

import {
  booksStatesForMode,
} from "./booksScrollStates.js";

export default function useBooksScrollTimeline(
  sceneRef,
  stageRef,
  prefersReducedMotion = false,
) {
  const [mode, setMode] =
    useState("desktop");

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
    const desktopQuery =
      window.matchMedia(
        "(min-width: 1201px)",
      );

    const phoneQuery =
      window.matchMedia(
        "(max-width: 767px)",
      );

    const updateMode = () => {
      if (desktopQuery.matches) {
        setMode("desktop");
      } else if (phoneQuery.matches) {
        setMode("phone");
      } else {
        setMode("tablet");
      }
    };

    desktopQuery.addEventListener(
      "change",
      updateMode,
    );

    phoneQuery.addEventListener(
      "change",
      updateMode,
    );

    updateMode();

    return () => {
      desktopQuery.removeEventListener(
        "change",
        updateMode,
      );

      phoneQuery.removeEventListener(
        "change",
        updateMode,
      );
    };
  }, []);

  const isReducedStatic =
    Boolean(
      prefersReducedMotion &&
      mode !== "desktop",
    );

  useLayoutEffect(() => {
    const measure = () => {
      const states =
        booksStatesForMode(mode);

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
          isReducedStatic
            ? 0
            : vh *
              states.reduce(
                (total, state) =>
                  total +
                  state.runwayVh,
                0,
              ),
        runwaySegments:
          isReducedStatic
            ? []
            : states.map(
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
    mode,
    isReducedStatic,
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
    mode,
    isReducedStatic,
  };
}
