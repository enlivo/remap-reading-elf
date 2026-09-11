import {
  useRef,
} from "react";

import {
  motion,
  useTransform,
} from "motion/react";

import LandingNavigation from "../components/LandingNavigation.jsx";

import HeroSection from "./HeroSection.jsx";
import ExploreSection from "./ExploreSection.jsx";
import GallerySection from "./GallerySection.jsx";
import useLandingComposition from "./useLandingComposition.js";

import useLandingScrollTimeline from "./useLandingScrollTimeline.js";

import {
  LANDING_STATES,
  STATE_RANGE,
  stateValues,
} from "./landingScrollStates.js";

export default function LandingIntroScene() {
  const sceneRef = useRef(null);
  const stageRef = useRef(null);

  const {
    geometry,
    progress,
    introProgress,
  } = useLandingScrollTimeline(
    sceneRef,
    stageRef,
  );

  const composition = useLandingComposition(progress);

  const heroY = useTransform(
    progress,
    STATE_RANGE,
    stateValues("heroY"),
  );

  const shade = useTransform(
    progress,
    STATE_RANGE,
    LANDING_STATES.map(
      (state) => state.shade,
    ),
  );

  const exploreY = useTransform(
    progress,
    STATE_RANGE,
    stateValues("exploreY"),
  );

  const exploreX = useTransform(
    progress,
    STATE_RANGE,
    stateValues("exploreX"),
  );

  const exploreOpacity = useTransform(
    progress,
    STATE_RANGE,
    LANDING_STATES.map(
      (state) => state.exploreOpacity,
    ),
  );

  const galleryY = useTransform(
    progress,
    STATE_RANGE,
    stateValues("galleryY"),
  );

  const galleryOpacity = useTransform(
    progress,
    STATE_RANGE,
    LANDING_STATES.map(
      (state) => state.galleryOpacity,
    ),
  );

  return (
    <div
      ref={sceneRef}
      className="landing-intro"
      id="top"
      style={
        geometry.height
          ? {
              height:
                geometry.height +
                geometry.runway,
            }
          : undefined
      }
    >
      <div
        ref={stageRef}
        className="landing-intro__stage"
      >
        <motion.div
          className="landing-intro__hero-layer"
          style={{
            y: heroY,
            opacity: composition.heroOpacity,
          }}
        >
          <HeroSection
            progress={introProgress}
          />

          <motion.div
            className="landing-intro__shade"
            style={{
              opacity: shade,
            }}
          />
        </motion.div>

        <motion.div
          className="landing-intro__explore"
          style={{
            x: exploreX,
            y: exploreY,
            opacity: exploreOpacity,
            ...composition.explore,
          }}
        >
          <ExploreSection staged />
        </motion.div>

        <motion.div
          className="landing-intro__gallery"
          style={{
            y: galleryY,
            opacity: galleryOpacity,
            ...composition.gallery,
          }}
        >
          <GallerySection staged />
        </motion.div>

        <LandingNavigation
          progress={progress}
        />
      </div>
    </div>
  );
}
