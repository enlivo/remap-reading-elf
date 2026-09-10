import {
  motion,
  useScroll,
  useTransform,
} from "motion/react";

import { useRef } from "react";

import heroIllustration from "../../assets/images/hero-illustration.png";

import eventNews from "../../design-assets/Website/Landing Page/Event News.png";
import monthlyBest from "../../design-assets/Website/Landing Page/Monthly Best Quick Link.png";

import {
  BottomStrip,
  UpperTab,
} from "../components/LandingNavigation.jsx";

export default function HeroSection() {
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: [
      "start start",
      "end start",
    ],
  });

  const copyY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -70],
  );

  const copyOpacity = useTransform(
    scrollYProgress,
    [0, 0.7, 1],
    [1, 1, 0],
  );

  const illustrationScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 1.025],
  );

  return (
    <section
      ref={heroRef}
      className="landing-hero"
      id="top"
    >
      <motion.img
        className="landing-hero__art"
        src={heroIllustration}
        alt=""
        aria-hidden="true"
        style={{
          scale: illustrationScale,
        }}
      />

      <motion.a
        href="/events"
        className="landing-hero__event"
        initial={{
          opacity: 0,
          y: -16,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.65,
          delay: 0.2,
        }}
      >
        <img
          src={eventNews}
          alt="Event News"
        />
      </motion.a>

      <UpperTab className="landing-hero__upper-tab" />

      <motion.div
        className="landing-hero__copy"
        style={{
          y: copyY,
          opacity: copyOpacity,
        }}
      >
        <h1>
          Where Children
          <span>
            Fall in love with Reading
          </span>
        </h1>

        <p>
          A magical bookstore designed to help
          kids discover the right books, build
          lifelong reading habits, and experience
          stories in ways they'll never forget.
        </p>
      </motion.div>

      <motion.a
        href="/books"
        className="landing-hero__monthly"
        initial={{
          opacity: 0,
          x: 35,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 0.7,
          delay: 0.35,
        }}
      >
        <img
          src={monthlyBest}
          alt="Monthly Best"
        />
      </motion.a>

      <BottomStrip className="landing-hero__bottom-strip" />
    </section>
  );
}
