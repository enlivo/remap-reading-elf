import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

import ribbonGreen from "../../../assets/images/blog-page/hero-deco-ribbon-green.png";
import swooshYellow from "../../../assets/images/blog-page/hero-deco-swoosh-yellow.png";
import trianglesBlue from "../../../assets/images/blog-page/hero-deco-triangles-blue.png";
import starburstBrown from "../../../design-assets/Website/Events/Elements of Events/4.png";
import BlogNavigation from "../../components/blog/BlogNavigation.jsx";
import BlogFooter from "./BlogFooter.jsx";
import { BLOG_POSTS } from "./blogPostsData.js";

/*
 * Desktop scroll budget, once the hero's real rendered height is known
 * (see useHeroScroll below): FADE_SPAN svh to crossfade hero -> footer,
 * then SETTLE svh dwelling on the footer. These stay in plain svh because,
 * unlike the hero, they don't depend on the hero's own measured content
 * height - only on viewport height.
 */
const FADE_SPAN = 15;
const SETTLE = 25;

const CARD_DECOS = [
  // card 1 (existing)
  { swoosh: true },
  // card 2 (new)
  { starburst: true },
];

function HeroState({ style, heroRef }) {
  return (
    <motion.section className="blog-state blog-state--hero" style={style} ref={heroRef}>
      {BLOG_POSTS.map((post, index) => (
        <div
          className={`blog-hero-slot ${index === 0 ? "blog-hero-slot--first" : "blog-hero-slot--tight"}`}
          key={post.slug}
        >
          <div
            className={`blog-state__canvas blog-hero${index === 0 ? "" : " blog-state__canvas--tight"}`}
          >
            {CARD_DECOS[index]?.swoosh && (
              <>
                <img className="blog-hero__deco blog-hero__deco--swoosh" src={swooshYellow} alt="" aria-hidden="true" />
                <img className="blog-hero__deco blog-hero__deco--ribbon" src={ribbonGreen} alt="" aria-hidden="true" />
                <img className="blog-hero__deco blog-hero__deco--triangles" src={trianglesBlue} alt="" aria-hidden="true" />
              </>
            )}
            {CARD_DECOS[index]?.starburst && (
              <img className="blog-hero__deco blog-hero__deco--starburst" src={starburstBrown} alt="" aria-hidden="true" />
            )}

            <a
              className="blog-hero__feature"
              href={`/blog/${post.slug}`}
              aria-label={`Read: ${post.card.title}`}
            >
              <div className="blog-hero__copy">
                <h2>{post.card.title}</h2>
                {post.card.text.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
              <img
                className="blog-hero__photo"
                src={post.card.image}
                alt={post.card.imageAlt}
              />
            </a>
          </div>
        </div>
      ))}
    </motion.section>
  );
}

function fadeBetween(progress, start, end, from, to) {
  if (progress <= start) return from;
  if (progress >= end) return to;

  const amount = (progress - start) / (end - start);
  return from + (to - from) * amount;
}

/*
 * Only the desktop scroll-jacked composition needs a measured runway: at
 * <=900px, or with reduced motion, both CSS switches to plain document
 * flow (height: auto) and this must get out of the way entirely.
 */
function useIsDesktopMotion(prefersReducedMotion) {
  const [isDesktopMotion, setIsDesktopMotion] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(min-width: 901px)");
    const update = () => setIsDesktopMotion(mql.matches && !prefersReducedMotion);

    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, [prefersReducedMotion]);

  return isDesktopMotion;
}

export default function BlogStage() {
  const runwayRef = useRef(null);
  const heroRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const isDesktopMotion = useIsDesktopMotion(prefersReducedMotion);

  // Real pixel height of the hero's stacked slots, remeasured whenever the
  // hero or the viewport resizes, so the runway always has exactly enough
  // scroll room for it - no dead scroll, no cut-off card.
  const [heroHeight, setHeroHeight] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(0);

  useLayoutEffect(() => {
    if (!isDesktopMotion) {
      return undefined;
    }

    const heroEl = heroRef.current;

    const measure = () => {
      setHeroHeight(heroEl?.offsetHeight ?? 0);
      setViewportHeight(window.innerHeight);
    };

    measure();

    const observer = new ResizeObserver(measure);
    if (heroEl) observer.observe(heroEl);
    window.addEventListener("resize", measure);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [isDesktopMotion]);

  const heroExtraPx = Math.max(heroHeight - viewportHeight, 0);
  const fadeSpanPx = (FADE_SPAN / 100) * viewportHeight;
  const settlePx = (SETTLE / 100) * viewportHeight;
  const totalScrollPx = Math.max(heroExtraPx + fadeSpanPx + settlePx, 1);
  const revealEnd = heroExtraPx / totalScrollPx;
  const fadeEnd = (heroExtraPx + fadeSpanPx) / totalScrollPx;

  const { scrollYProgress } = useScroll({
    target: runwayRef,
    offset: ["start start", "end end"],
  });

  // Phase 1 (0 -> revealEnd): hero translates up by its own extra height,
  // fully opaque, revealing every card in turn.
  // Phase 2 (revealEnd -> fadeEnd): hero holds in place on the last card
  // and crossfades into the footer, exactly as the single-card version did.
  // Phase 3 (fadeEnd -> 1): footer dwells, fully visible.
  const heroY = useTransform(() => {
    const progress = Math.min(scrollYProgress.get(), revealEnd);
    const amount = revealEnd === 0 ? 1 : progress / revealEnd;
    return -heroExtraPx * amount;
  });

  const heroOpacity = useTransform(() =>
    fadeBetween(scrollYProgress.get(), revealEnd, fadeEnd, 1, 0),
  );
  const footerOpacity = useTransform(() =>
    fadeBetween(scrollYProgress.get(), revealEnd, fadeEnd, 0, 1),
  );

  // States are stacked on top of each other. A faded-out state must not
  // swallow clicks meant for the one underneath (e.g. the hero card links).
  const heroPointer = useTransform(heroOpacity, (v) => (v > 0.5 ? "auto" : "none"));
  const footerPointer = useTransform(footerOpacity, (v) => (v > 0.5 ? "auto" : "none"));

  const naturalStyle = prefersReducedMotion ? { opacity: 1 } : undefined;

  const runwayStyle = isDesktopMotion
    ? { height: `calc(${viewportHeight}px + ${totalScrollPx}px)` }
    : undefined;

  return (
    <div className="blog-stage-runway" ref={runwayRef} style={runwayStyle}>
      <div className="blog-stage">
        <HeroState
          heroRef={heroRef}
          style={
            naturalStyle
              ? naturalStyle
              : { y: heroY, opacity: heroOpacity, pointerEvents: heroPointer }
          }
        />
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
