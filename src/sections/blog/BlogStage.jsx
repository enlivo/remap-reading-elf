import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

import reelArtwork from "../../../design-assets/Website/blog/blog-reel-to-movies.png";
import sheWritesArtwork from "../../../design-assets/Website/blog/blog-she-writes-too.png";
import heroPhoto from "../../../assets/images/blog-page/blog-post-photo-screentime.png";
import blogPhoto from "../../../assets/images/blog-page/blog-post-photo.png";
import ribbonGreen from "../../../assets/images/blog-page/hero-deco-ribbon-green.png";
import swooshYellow from "../../../assets/images/blog-page/hero-deco-swoosh-yellow.png";
import trianglesBlue from "../../../assets/images/blog-page/hero-deco-triangles-blue.png";
import BlogNavigation from "../../components/blog/BlogNavigation.jsx";
import BlogFooter from "./BlogFooter.jsx";

function ArtworkState({ className, src, alt, style, children }) {
  return (
    <motion.section className={`blog-state ${className}`} style={style}>
      <div className="blog-state__canvas blog-state__desktop-artwork">
        <img className="blog-state__artwork" src={src} alt={alt} />
      </div>
      {children}
    </motion.section>
  );
}

function MobileReelState() {
  const cards = [
    {
      title: "Reel to Movies",
      copy: "Some books make it to the big screens come find out if you can see your favorite characters on big screens!",
    },
    {
      title: "Blog",
      copy: "Saturday reading club for children. One book per month. One session led by Shweta.",
    },
  ];

  return (
    <div className="blog-mobile-cards" aria-label="Reel to Movies and Blog">
      {cards.map(({ title, copy }) => (
        <article className="blog-mobile-card" key={title}>
          <div>
            <h2>{title}</h2>
            <p>{copy}</p>
          </div>
          <img src={blogPhoto} alt="Children reading together outdoors" />
        </article>
      ))}
    </div>
  );
}

function MobileSheWritesState() {
  return (
    <div className="blog-mobile-she-writes" aria-label="She Writes Too">
      <article>
        <h2>She Writes Too</h2>
        <div className="blog-mobile-she-writes__book" aria-hidden="true" />
        <h3>Fascinating Flags</h3>
        <p>Buy it on Amazon</p>
      </article>
    </div>
  );
}

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

        <article className="blog-hero__feature">
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
        </article>
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
    fadeBetween(scrollYProgress.get(), 0.2, 0.27, 1, 0),
  );
  const reelOpacity = useTransform(() => {
    const progress = scrollYProgress.get();

    if (progress < 0.27) {
      return fadeBetween(progress, 0.2, 0.27, 0, 1);
    }

    return fadeBetween(progress, 0.43, 0.5, 1, 0);
  });
  const sheWritesOpacity = useTransform(() => {
    const progress = scrollYProgress.get();

    if (progress < 0.5) {
      return fadeBetween(progress, 0.43, 0.5, 0, 1);
    }

    return fadeBetween(progress, 0.67, 0.75, 1, 0);
  });
  const footerOpacity = useTransform(() =>
    fadeBetween(scrollYProgress.get(), 0.67, 0.75, 0, 1),
  );

  const naturalStyle = prefersReducedMotion ? { opacity: 1 } : undefined;

  return (
    <div className="blog-stage-runway" ref={runwayRef}>
      <div className="blog-stage">
        <HeroState style={naturalStyle ?? { opacity: heroOpacity }} />
        <ArtworkState
          className="blog-state--reel"
          src={reelArtwork}
          alt="Reel to Movies and Blog reading recommendations."
          style={naturalStyle ?? { opacity: reelOpacity }}
        >
          <MobileReelState />
        </ArtworkState>
        <ArtworkState
          className="blog-state--she-writes"
          src={sheWritesArtwork}
          alt="She Writes Too: Fascinating Flags."
          style={naturalStyle ?? { opacity: sheWritesOpacity }}
        >
          <MobileSheWritesState />
        </ArtworkState>
        <motion.section
          className="blog-state blog-state--footer"
          style={naturalStyle ?? { opacity: footerOpacity }}
        >
          <BlogFooter />
        </motion.section>

        <BlogNavigation chromeOpacity={naturalStyle ? 1 : heroOpacity} />
      </div>
    </div>
  );
}
