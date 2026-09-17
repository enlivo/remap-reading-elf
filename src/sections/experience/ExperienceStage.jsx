import {
  motion,
  useReducedMotion,
  useScroll,
  useMotionValueEvent,
  useTransform,
} from "motion/react";
import { useRef, useState } from "react";

import ExperienceNavigation from "../../components/experience/ExperienceNavigation.jsx";
import ExperienceFooter from "./ExperienceFooter.jsx";

import wednesdayPanel from "../../../assets/images/experience-page/wednesday-returns-panel.png";
import parentPanel from "../../../assets/images/experience-page/parent-child-panel.png";
import storyPanel from "../../../assets/images/experience-page/story-keepers-panel.png";
import creamBurst from "../../../design-assets/Website/Experience/Elements of Experience/1.png";
import redBurstLeft from "../../../design-assets/Website/Experience/Elements of Experience/3.png";
import brownBurst from "../../../design-assets/Website/Experience/Elements of Experience/4.png";
import wednesdayBrownBurst from "../../../design-assets/Website/Experience/Elements of Experience/5.png";
import redBurstRight from "../../../design-assets/Website/Experience/Elements of Experience/6.png";
import foliage from "../../../assets/images/footer-leaf-sprig.png";

export default function ExperienceStage() {
  const sceneRef = useRef(null);
  const [wednesdayExited, setWednesdayExited] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sceneRef,
    offset: ["start start", "end end"],
  });

  const introOpacity = useTransform(scrollYProgress, [0, 0.16, 0.3], [1, 1, 0]);
  const wednesdayOpacity = useTransform(scrollYProgress, [0, 0.15, 0.31, 1], [1, 1, 0, 0]);
  const wednesdayY = useTransform(scrollYProgress, [0, 0.15, 0.31], ["0svh", "0svh", "-10svh"]);
  const wednesdayDecorOpacity = useTransform(scrollYProgress, [0, 0.15, 0.31, 1], [1, 1, 0, 0]);
  const wednesdayDecorY = useTransform(scrollYProgress, [0, 0.15, 0.31], ["0svh", "0svh", "8svh"]);

  const parentOpacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.28, 0.53, 0.66, 0.7],
    [0, 0, 1, 1, 1, 0],
  );
  const parentY = useTransform(
    scrollYProgress,
    [0, 0.15, 0.28, 0.47, 0.66, 0.7],
    ["12svh", "12svh", "0svh", "0svh", "-82svh", "-92svh"],
  );

  const storyOpacity = useTransform(
    scrollYProgress,
    [0, 0.45, 0.61, 0.8, 0.94],
    [0, 0, 1, 1, 0],
  );
  const storyY = useTransform(
    scrollYProgress,
    [0, 0.45, 0.61, 0.8, 0.94],
    ["105svh", "105svh", "0svh", "0svh", "-14svh"],
  );

  const footerOpacity = useTransform(scrollYProgress, [0, 0.76, 0.86, 1], [0, 0, 1, 1]);
  const footerY = useTransform(scrollYProgress, [0, 0.76, 0.97, 1], ["100svh", "100svh", "0svh", "0svh"]);
  const stripOpacity = useTransform(scrollYProgress, [0, 0.8, 0.91, 1], [1, 1, 0, 0]);

  const parentDecorOpacity = useTransform(scrollYProgress, [0.17, 0.3, 0.53, 0.68], [0, 1, 1, 0]);
  const storyDecorOpacity = useTransform(scrollYProgress, [0.48, 0.62, 0.8, 0.94], [0, 1, 1, 0]);
  const storyFoliageY = useTransform(scrollYProgress, [0.5, 0.66, 0.8], [120, 0, 0]);

  const moving = (values) => prefersReducedMotion ? undefined : values;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const shouldHide = window.matchMedia(
      "(min-width: 901px) and (prefers-reduced-motion: no-preference)",
    ).matches && latest >= 0.31;
    setWednesdayExited((current) => current === shouldHide ? current : shouldHide);
  });

  return (
    <section ref={sceneRef} className="experience-stage-runway" aria-label="Reading Elf experiences">
      <div className="experience-stage">
        <ExperienceNavigation stripOpacity={prefersReducedMotion ? 1 : stripOpacity} />

        <motion.header
          className="experience-stage__intro"
          style={moving({ opacity: introOpacity })}
        >
          <h1>More than a bookstore.<br />A place to belong.</h1>
          <p>
            Reading clubs, workshops, and programmes built around the belief<br />
            that reading grows better together.
          </p>
        </motion.header>

        <motion.article
          className="experience-card experience-card--wednesday"
          data-exited={wednesdayExited ? "true" : undefined}
          style={moving({ opacity: wednesdayOpacity, y: wednesdayY })}
        >
          <img
            src={wednesdayPanel}
            alt="The Wednesday Returns, a reading club for mothers at The Reading Elf in Thoraipakkam."
          />
          <div className="experience-card__mobile-decor experience-card__mobile-decor--wednesday" aria-hidden="true">
            <img src={redBurstLeft} alt="" />
            <img src={wednesdayBrownBurst} alt="" />
          </div>
        </motion.article>

        <motion.div
          className="experience-decorations experience-decorations--wednesday"
          data-exited={wednesdayExited ? "true" : undefined}
          style={moving({ opacity: wednesdayDecorOpacity, y: wednesdayDecorY })}
          aria-hidden="true"
        >
          <img className="experience-burst experience-burst--wednesday-left" src={redBurstLeft} alt="" />
          <img className="experience-burst experience-burst--wednesday-right" src={wednesdayBrownBurst} alt="" />
        </motion.div>

        <motion.div
          className="experience-decorations experience-decorations--parent"
          style={moving({ opacity: parentDecorOpacity })}
          aria-hidden="true"
        >
          <img className="experience-burst experience-burst--parent-cream" src={creamBurst} alt="" />
          <img className="experience-burst experience-burst--parent-left" src={redBurstLeft} alt="" />
          <img className="experience-burst experience-burst--parent-right" src={redBurstRight} alt="" />
        </motion.div>

        <motion.article
          className="experience-card experience-card--parent"
          style={moving({ opacity: parentOpacity, y: parentY })}
        >
          <img
            src={parentPanel}
            alt="Parent Child Experience, a weekly story-together session for ages two to six."
          />
          <div className="experience-card__mobile-decor experience-card__mobile-decor--parent" aria-hidden="true">
            <img src={creamBurst} alt="" />
            <img src={redBurstRight} alt="" />
          </div>
        </motion.article>

        <motion.div
          className="experience-decorations experience-decorations--story"
          style={moving({ opacity: storyDecorOpacity })}
          aria-hidden="true"
        >
          <img className="experience-burst experience-burst--story-left" src={redBurstLeft} alt="" />
          <img className="experience-burst experience-burst--story-cream" src={creamBurst} alt="" />
          <img className="experience-burst experience-burst--story-right" src={brownBurst} alt="" />
          <motion.img
            className="experience-stage__foliage"
            src={foliage}
            alt=""
            style={moving({ y: storyFoliageY })}
          />
        </motion.div>

        <motion.article
          className="experience-card experience-card--story"
          style={moving({ opacity: storyOpacity, y: storyY })}
        >
          <img
            src={storyPanel}
            alt="Story Keepers, a Saturday reading club for children ages six to fourteen."
          />
          <div className="experience-card__mobile-decor experience-card__mobile-decor--story" aria-hidden="true">
            <img src={redBurstLeft} alt="" />
            <img src={creamBurst} alt="" />
            <img src={foliage} alt="" />
          </div>
        </motion.article>

        <ExperienceFooter
          opacity={prefersReducedMotion ? 1 : footerOpacity}
          y={prefersReducedMotion ? 0 : footerY}
        />
      </div>
    </section>
  );
}
