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
  TOTAL_RUNWAY_VH,
} from "./landingScrollStates.js";

export default function useLandingScrollTimeline(
  sceneRef,
  stageRef,
) {
  const [geometry, setGeometry] = useState({
    height: 0,
    runway: 0,
    vh: 0,
    start: 0,
  });

  const { scrollY } = useScroll();

  useLayoutEffect(() => {
    const measure = () => {
      const desktop = window.innerWidth > 900;

      const height =
        stageRef.current?.offsetHeight ?? 0;

      const vh = desktop
        ? window.innerHeight / 100
        : 0;

      setGeometry({
        height,
        runway: vh * TOTAL_RUNWAY_VH,
        vh,
        start:
          sceneRef.current.getBoundingClientRect().top +
          window.scrollY,
      });
    };

    const observer = new ResizeObserver(measure);

    observer.observe(stageRef.current);

    window.addEventListener("resize", measure);

    measure();

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [
    sceneRef,
    stageRef,
  ]);

  const progress = useTransform(
    scrollY,
    (scrollPosition) => {
      if (!geometry.vh) {
        return 0;
      }

      let remaining = Math.max(
        0,
        scrollPosition - geometry.start,
      );

      for (
        let index = 1;
        index < LANDING_STATES.length;
        index += 1
      ) {
        const distance =
          LANDING_STATES[index].runwayVh *
          geometry.vh;

        if (remaining <= distance) {
          return (
            index -
            1 +
            remaining / distance
          );
        }

        remaining -= distance;
      }

      return LANDING_STATES.length - 1;
    },
  );

  const introProgress = useTransform(
    progress,
    (value) => Math.min(1, value),
  );

  return {
    geometry,
    progress,
    introProgress,
  };
}
