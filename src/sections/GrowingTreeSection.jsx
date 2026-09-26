import {
  useRef,
} from "react";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";

import sprout from "../../assets/images/branch-leaves-only-cropped.png";
import grownBranch from "../../assets/images/footer-branch-lantern.png";

/*
 * Scroll-tied growth between Instagram and the footer.
 *
 * No standalone "full tree" illustration exists in the project
 * assets (checked assets/images and design-assets) - the footer
 * already hangs footer-branch-lantern.png from its top-right corner
 * (see .site-footer__tree in footer.css and the equivalent __branch
 * class in every other page's footer). Using that same asset as the
 * "grown" state, at the same top-right anchor the footer itself
 * uses, means this section visually hands off into the footer's own
 * decoration instead of introducing an unrelated tree graphic.
 *
 * If the client wants a literal branch -> full tree (trunk +
 * canopy) illustration, that's a new asset to commission - this
 * crossfades sprout -> grownBranch in the meantime, driven by real
 * scroll progress across this section's own height.
 */
export default function GrowingTreeSection() {
  const sectionRef = useRef(null);

  const prefersReducedMotion =
    useReducedMotion();

  const { scrollYProgress } =
    useScroll({
      target: sectionRef,
      offset: [
        "start end",
        "end start",
      ],
    });

  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    [0.4, 1],
  );

  const sproutOpacity =
    useTransform(
      scrollYProgress,
      [0, 0.18, 0.5, 0.7],
      [0, 1, 1, 0],
    );

  const grownOpacity =
    useTransform(
      scrollYProgress,
      [0.5, 0.72],
      [0, 1],
    );

  return (
    <section
      ref={sectionRef}
      className="growing-tree"
      aria-hidden="true"
    >
      <motion.img
        className="growing-tree__branch growing-tree__branch--sprout"
        src={sprout}
        alt=""
        style={
          prefersReducedMotion
            ? {
                opacity: 0,
              }
            : {
                scale,
                opacity:
                  sproutOpacity,
              }
        }
      />

      <motion.img
        className="growing-tree__branch growing-tree__branch--grown"
        src={grownBranch}
        alt=""
        style={
          prefersReducedMotion
            ? {
                opacity: 1,
              }
            : {
                scale,
                opacity:
                  grownOpacity,
              }
        }
      />
    </section>
  );
}
