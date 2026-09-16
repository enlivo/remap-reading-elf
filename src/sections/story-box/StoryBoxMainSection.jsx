import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { useRef } from "react";

import storyBoxPanel from "../../../assets/images/story-box-page/story-box-panel.png";
import greenBurst from "../../../assets/images/story-box-page/starbursts/starburst-green.png";

const waitlistUrl =
  "https://wa.me/919500056482?text=Hi!%20I'd%20like%20to%20join%20the%20Story%20Box%20waitlist.";

export default function StoryBoxMainSection() {
  const sectionRef = useRef(null);
  const prefersReducedMotion =
    useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: [
      "start 100vh",
      "end 100vh",
    ],
  });

  const panelY = useTransform(
    scrollYProgress,
    [0, 0.3314, 1],
    ["8vh", "0vh", "0vh"],
  );

  const burstY = useTransform(
    scrollYProgress,
    [0, 0.3314, 1],
    [20, 0, 0],
  );

  const burstRotate = useTransform(
    scrollYProgress,
    [0, 0.3314, 1],
    [2, 0, 0],
  );

  return (
    <section
      ref={sectionRef}
      className="story-box-main-scroll"
      aria-label="Story Box subscription"
    >
      <div className="story-box-main">
        <motion.img
          className="story-box-main__green-burst"
          src={greenBurst}
          alt=""
          aria-hidden="true"
          style={{
            y: prefersReducedMotion
              ? 0
              : burstY,
            rotate: prefersReducedMotion
              ? 0
              : burstRotate,
          }}
        />

        <motion.div
          className="story-box-main__panel"
          style={{
            y: prefersReducedMotion
              ? 0
              : panelY,
          }}
        >
          <img
            className="story-box-main__panel-image"
            src={storyBoxPanel}
            alt="Story Box. Every child is different. Six handpicked monthly features include books, a story companion guide, a creative activity, a reading passport, collectibles, and a mystery envelope."
          />

          <a
            className="story-box-main__waitlist-link"
            href={waitlistUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Join the Story Box waitlist on WhatsApp"
          />
        </motion.div>
      </div>
    </section>
  );
}
