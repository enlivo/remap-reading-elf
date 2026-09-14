import {
  motion,
  useScroll,
  useTransform,
} from "motion/react";
import { useRef } from "react";

import stripLogo from "../../../assets/images/story-box-page/strip-logo.png";

export default function StoryBoxTransitionSeam() {
  const transitionMarkerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: transitionMarkerRef,
    offset: [
      "start 20vh",
      "start -7vh",
    ],
  });

  const stickyTop = useTransform(
    scrollYProgress,
    [0, 0.35, 0.52, 1],
    ["9vh", "9vh", "0vh", "0vh"],
  );

  const zIndex = useTransform(
    scrollYProgress,
    (progress) =>
      progress < 0.04 || progress >= 0.5
        ? 158
        : 1,
  );

  return (
    <>
      <span
        ref={transitionMarkerRef}
        className="story-box-transition-seam__marker"
        aria-hidden="true"
      />

      <motion.div
        className="story-box-transition-seam"
        aria-hidden="true"
        style={{
          top: stickyTop,
          zIndex,
        }}
      >
        <img
          src={stripLogo}
          alt=""
        />
      </motion.div>
    </>
  );
}
