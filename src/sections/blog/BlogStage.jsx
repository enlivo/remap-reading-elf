import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

import heroPhoto from "../../../assets/images/blog-page/blog-post-photo-screentime.png";
import ribbonGreen from "../../../assets/images/blog-page/hero-deco-ribbon-green.png";
import swooshYellow from "../../../assets/images/blog-page/hero-deco-swoosh-yellow.png";
import trianglesBlue from "../../../assets/images/blog-page/hero-deco-triangles-blue.png";
import BlogNavigation from "../../components/blog/BlogNavigation.jsx";
import BlogFooter from "./BlogFooter.jsx";
import { READING_VS_SCREEN_TIME_PATH } from "../../pages/BlogPostPage.jsx";

function HeroState({ style }) {
  return (
    <motion.section className="blog-state blog-state--hero" style={style}>
      <div className="blog-state__canvas blog-hero">
        <img
          className="blog-hero__deco blog-hero__deco--swoosh"
          src={swooshYellow}
          alt=""
          aria-hidden="true"
        />
        <img
          className="blog-hero__deco blog-hero__deco--ribbon"
          src={ribbonGreen}
          alt=""
          aria-hidden="true"
        />
        <img
          className="blog-hero__deco blog-hero__deco--triangles"
          src={trianglesBlue}
          alt=""
          aria-hidden="true"
        />

        <div className="blog-hero__intro">
          <h1>
            More than a bookstore.
            <span>A place to belong.</span>
          </h1>
          <p>
            Reading clubs, workshops, and programmes built around the belief that
            reading grows better together.
          </p>
        </div>

        <a
          className="blog-hero__feature"
          href={READING_VS_SCREEN_TIME_PATH}
          aria-label="Read: Why Reading Is More Powerful Than Screen Time for Children"
        >
          <div className="blog-hero__copy">
            <h2>Read&gt;&gt;&gt;Screen Time</h2>
            <p>
              Why Reading Is More Powerful Than Screen Time for Children...
            </p>
          </div>
          <img
            className="blog-hero__photo"
            src={heroPhoto}
            alt="A child reading on a phone beside a sleeping dog"
          />
        </a>
      </div>
    </motion.section>
  );
}

function fadeBetween(progress, start, end, from, to) {
  if (progress <= start) return from;
  if (progress >= end) return to;

  const amount = (progress - start) / (end - start);
  return from + (to - from) * amount;
}

export default function BlogStage() {
  const runwayRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: runwayRef,
    offset: ["start start", "end end"],
  });

  const heroOpacity = useTransform(() =>
    fadeBetween(scrollYProgress.get(), 0.42, 0.62, 1, 0),
  );
  const footerOpacity = useTransform(() =>
    fadeBetween(scrollYProgress.get(), 0.42, 0.62, 0, 1),
  );

  // States are stacked on top of each other. A faded-out state must not
  // swallow clicks meant for the one underneath (e.g. the hero card link).
  const heroPointer = useTransform(heroOpacity, (v) => (v > 0.5 ? "auto" : "none"));
  const footerPointer = useTransform(footerOpacity, (v) => (v > 0.5 ? "auto" : "none"));

  const naturalStyle = prefersReducedMotion ? { opacity: 1 } : undefined;

  return (
    <div className="blog-stage-runway" ref={runwayRef}>
      <div className="blog-stage">
        <HeroState style={naturalStyle ?? { opacity: heroOpacity, pointerEvents: heroPointer }} />
        <motion.section
          className="blog-state blog-state--footer"
          style={naturalStyle ?? { opacity: footerOpacity, pointerEvents: footerPointer }}
        >
          <BlogFooter />
        </motion.section>

        <BlogNavigation chromeOpacity={naturalStyle ? 1 : heroOpacity} />
      </div>
    </div>
  );
}
