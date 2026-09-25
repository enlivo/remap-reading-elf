import {
  motion,
  useReducedMotion,
  useTransform,
} from "motion/react";

import heroIllustration from "../../assets/images/hero-illustration.jpg";
import eventNews from "../../design-assets/Website/Landing Page/Event News.png";
import monthlyBest from "../../design-assets/Website/Landing Page/Monthly Best Quick Link.png";

import usePhoneLandingViewport from "./usePhoneLandingViewport.js";

export default function HeroSection({
  progress,
}) {
  const isPhone =
    usePhoneLandingViewport();

  const prefersReducedMotion =
    useReducedMotion();

  /*
   * Approved desktop Hero choreography.
   */
  const desktopHeadlineY =
    useTransform(
      progress,
      [0, 1],
      [
        "0vw",
        "4.9479vw",
      ],
    );

  const desktopParagraphY =
    useTransform(
      progress,
      [0, 1],
      [
        "0vw",
        "3.125vw",
      ],
    );

  const desktopParagraphOpacity =
    useTransform(
      progress,
      [
        0,
        0.1,
        0.68,
        1,
      ],
      [
        0,
        0,
        1,
        1,
      ],
    );

  const desktopParagraphFilter =
    useTransform(
      progress,
      [
        0,
        0.1,
        0.68,
        1,
      ],
      [
        "blur(12px)",
        "blur(12px)",
        "blur(0px)",
        "blur(0px)",
      ],
    );

  const desktopParagraphScale =
    useTransform(
      progress,
      [
        0,
        0.1,
        0.68,
        1,
      ],
      [
        0.975,
        0.975,
        1,
        1,
      ],
    );

  const desktopPromotionOpacity =
    useTransform(
      progress,
      [0, 1],
      [1, 0],
    );

  const desktopPromotionVisibility =
    useTransform(
      progress,
      (value) =>
        value >= 1
          ? "hidden"
          : "visible",
    );

  /*
   * Phone now receives the shared landing intro progress.
   *
   * State 0 -> 1 resolves the sentence while the full viewport
   * remains pinned. Hero -> Explore happens afterwards via the
   * outer actor timeline, not inside HeroSection.
   */
  const phoneHeadlineY =
    useTransform(
      progress,
      [0, 1],
      [
        "0vw",
        "1vw",
      ],
    );

  const phoneParagraphY =
    useTransform(
      progress,
      [
        0,
        0.08,
        0.62,
        1,
      ],
      [
        "1.8vw",
        "1.8vw",
        "0vw",
        "0vw",
      ],
    );

  const phoneParagraphOpacity =
    useTransform(
      progress,
      [
        0,
        0.08,
        0.62,
        1,
      ],
      [
        0,
        0,
        1,
        1,
      ],
    );

  const phoneParagraphFilter =
    useTransform(
      progress,
      [
        0,
        0.08,
        0.62,
        1,
      ],
      [
        "blur(10px)",
        "blur(10px)",
        "blur(0px)",
        "blur(0px)",
      ],
    );

  const phoneParagraphScale =
    useTransform(
      progress,
      [
        0,
        0.08,
        0.62,
        1,
      ],
      [
        0.98,
        0.98,
        1,
        1,
      ],
    );

  const phonePromotionOpacity =
    useTransform(
      progress,
      [
        0,
        0.48,
        1,
      ],
      [
        1,
        1,
        0,
      ],
    );

  const phonePromotionVisibility =
    useTransform(
      progress,
      (value) =>
        value >= 0.98
          ? "hidden"
          : "visible",
    );

  const headlineY =
    isPhone &&
    !prefersReducedMotion
      ? phoneHeadlineY
      : desktopHeadlineY;

  const paragraphY =
    isPhone
      ? (
          prefersReducedMotion
            ? 0
            : phoneParagraphY
        )
      : desktopParagraphY;

  const paragraphOpacity =
    isPhone
      ? (
          prefersReducedMotion
            ? 1
            : phoneParagraphOpacity
        )
      : desktopParagraphOpacity;

  const paragraphFilter =
    isPhone
      ? (
          prefersReducedMotion
            ? "none"
            : phoneParagraphFilter
        )
      : desktopParagraphFilter;

  const paragraphScale =
    isPhone
      ? (
          prefersReducedMotion
            ? 1
            : phoneParagraphScale
        )
      : desktopParagraphScale;

  const promotionOpacity =
    isPhone
      ? (
          prefersReducedMotion
            ? 1
            : phonePromotionOpacity
        )
      : desktopPromotionOpacity;

  const promotionVisibility =
    isPhone
      ? (
          prefersReducedMotion
            ? "visible"
            : phonePromotionVisibility
        )
      : desktopPromotionVisibility;

  return (
    <section
      className="landing-hero"
      aria-label="Welcome to The Reading Elf"
    >
      <img
        className="landing-hero__art"
        src={heroIllustration}
        alt=""
        aria-hidden="true"
      />

      <motion.a
        href="/events"
        className="landing-hero__event"
        style={{
          opacity:
            promotionOpacity,
          visibility:
            promotionVisibility,
        }}
      >
        <img
          src={eventNews}
          alt="Event News"
        />
      </motion.a>

      <motion.h1
        className="landing-hero__headline"
        style={{
          y: headlineY,
        }}
      >
        Where Children
        <span>
          Fall in love with Reading
        </span>
      </motion.h1>

      <motion.p
        className="landing-hero__description"
        style={{
          y: paragraphY,
          opacity:
            paragraphOpacity,
          filter:
            paragraphFilter,
          scale:
            paragraphScale,
        }}
      >
        A magical bookstore designed to<br />
        help kids discover the right books,<br />
        build lifelong reading habits,<br />
        and experience stories in ways they'll never forget.
      </motion.p>

      <motion.a
        href="/books"
        className="landing-hero__monthly"
        style={{
          opacity:
            promotionOpacity,
          visibility:
            promotionVisibility,
        }}
      >
        <img
          src={monthlyBest}
          alt="Monthly Best"
        />
      </motion.a>
    </section>
  );
}
