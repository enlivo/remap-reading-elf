import {
  useLayoutEffect,
  useState,
} from "react";

import {
  useScroll,
  useTransform,
} from "motion/react";

import {
  LANDING_STATES,
  PHONE_LANDING_STATES,
  PHONE_TOTAL_RUNWAY_VH,
  TOTAL_RUNWAY_VH,
} from "./landingScrollStates.js";

export default function useLandingScrollTimeline(
  sceneRef,
  stageRef,
) {
  const [geometry, setGeometry] =
    useState({
      canvasScale: 1,
      height: 0,
      mode: "static",
      runway: 0,
      runwaySegments: [],
      start: 0,
      vh: 0,
    });

  const { scrollY } = useScroll();

  useLayoutEffect(() => {
    const measure = () => {
      const width =
        window.innerWidth;

      const desktop =
        width > 900;

      const phone =
        width <= 767;

      const mode = desktop
        ? "desktop"
        : (
            phone
              ? "phone"
              : "static"
          );

      const height =
        stageRef.current?.offsetHeight ??
        0;

      const desktopScale =
        Math.max(
          1,
          window.innerHeight /
            (
              window.innerWidth *
              9 /
              16
            ),
        );

      /*
       * Desktop scales its 16:9 design canvas when required.
       *
       * Phone must NOT scale the whole composition. Doing so
       * makes a tall viewport widen the 100vw canvas and clips
       * text/cards from both sides. Phone instead uses a real
       * 100vw x 100svh camera.
       */
      const canvasScale =
        desktop
          ? desktopScale
          : 1;

      const vh =
        desktop
          ? window.innerHeight / 100
          : (
              phone && height
                ? height / 100
                : 0
            );

      const activeStates =
        phone
          ? PHONE_LANDING_STATES
          : LANDING_STATES;

      const totalRunwayVh =
        phone
          ? PHONE_TOTAL_RUNWAY_VH
          : (
              desktop
                ? TOTAL_RUNWAY_VH
                : 0
            );

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
        canvasScale,
        height,
        mode,
        runway:
          vh * totalRunwayVh,
        runwaySegments:
          activeStates.map(
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

  const introProgress =
    useTransform(
      progress,
      (value) =>
        Math.min(
          1,
          value,
        ),
    );

  return {
    geometry,
    progress,
    introProgress,
  };
}
