import {
  useRef,
} from "react";

import {
  motion,
  useReducedMotion,
  useTransform,
} from "motion/react";

import LandingNavigation from "../components/LandingNavigation.jsx";

import HeroSection from "./HeroSection.jsx";
import ExploreSection from "./ExploreSection.jsx";
import GallerySection from "./GallerySection.jsx";
import AboutSection from "./AboutSection.jsx";
import VisitSection from "./VisitSection.jsx";
import InstagramSection from "./InstagramSection.jsx";

import useLandingComposition from "./useLandingComposition.js";
import useLandingScrollTimeline from "./useLandingScrollTimeline.js";

import {
  LANDING_STATES,
  PHONE_LANDING_STATES,
  PHONE_STATE_RANGE,
  STATE_RANGE,
  phoneStateValues,
  stateValues,
} from "./landingScrollStates.js";

export default function LandingIntroScene() {
  const sceneRef = useRef(null);
  const stageRef = useRef(null);

  const prefersReducedMotion =
    useReducedMotion();

  const {
    geometry,
    progress,
    introProgress,
  } = useLandingScrollTimeline(
    sceneRef,
    stageRef,
  );

  const isPhone =
    geometry.mode === "phone";

  /*
   * Existing approved desktop composition.
   */
  const composition =
    useLandingComposition(
      progress,
    );

  const desktopHeroY =
    useTransform(
      progress,
      STATE_RANGE,
      stateValues("heroY"),
    );

  const desktopShade =
    useTransform(
      progress,
      STATE_RANGE,
      LANDING_STATES.map(
        (state) =>
          state.shade,
      ),
    );

  const desktopExploreY =
    useTransform(
      progress,
      STATE_RANGE,
      stateValues(
        "exploreY",
      ),
    );

  const desktopExploreX =
    useTransform(
      progress,
      STATE_RANGE,
      stateValues(
        "exploreX",
      ),
    );

  const desktopExploreOpacity =
    useTransform(
      progress,
      STATE_RANGE,
      LANDING_STATES.map(
        (state) =>
          state.exploreOpacity,
      ),
    );

  const desktopGalleryY =
    useTransform(
      progress,
      STATE_RANGE,
      stateValues(
        "galleryY",
      ),
    );

  const desktopGalleryOpacity =
    useTransform(
      progress,
      STATE_RANGE,
      LANDING_STATES.map(
        (state) =>
          state.galleryOpacity,
      ),
    );

  /*
   * Phone full-frame actors.
   *
   * Same 0 -> 7 progress domain as desktop, but actor travel
   * is calibrated against the 100vw x 120vw phone canvas.
   */
  const phoneHeroY =
    useTransform(
      progress,
      PHONE_STATE_RANGE,
      phoneStateValues(
        "heroY",
      ),
    );

  const phoneHeroOpacity =
    useTransform(
      progress,
      PHONE_STATE_RANGE,
      PHONE_LANDING_STATES.map(
        (state) =>
          state.heroOpacity,
      ),
    );

  const phoneExploreY =
    useTransform(
      progress,
      PHONE_STATE_RANGE,
      phoneStateValues(
        "exploreY",
      ),
    );

  const phoneExploreOpacity =
    useTransform(
      progress,
      PHONE_STATE_RANGE,
      PHONE_LANDING_STATES.map(
        (state) =>
          state.exploreOpacity,
      ),
    );

  const phoneGalleryY =
    useTransform(
      progress,
      PHONE_STATE_RANGE,
      phoneStateValues(
        "galleryY",
      ),
    );

  const phoneGalleryOpacity =
    useTransform(
      progress,
      PHONE_STATE_RANGE,
      PHONE_LANDING_STATES.map(
        (state) =>
          state.galleryOpacity,
      ),
    );

  const phoneAboutY =
    useTransform(
      progress,
      PHONE_STATE_RANGE,
      phoneStateValues(
        "aboutY",
      ),
    );

  const phoneAboutOpacity =
    useTransform(
      progress,
      PHONE_STATE_RANGE,
      PHONE_LANDING_STATES.map(
        (state) =>
          state.aboutOpacity,
      ),
    );

  const phoneVisitY =
    useTransform(
      progress,
      PHONE_STATE_RANGE,
      phoneStateValues(
        "visitY",
      ),
    );

  const phoneVisitOpacity =
    useTransform(
      progress,
      PHONE_STATE_RANGE,
      PHONE_LANDING_STATES.map(
        (state) =>
          state.visitOpacity,
      ),
    );

  const phoneInstagramY =
    useTransform(
      progress,
      PHONE_STATE_RANGE,
      phoneStateValues(
        "instagramY",
      ),
    );

  const phoneInstagramOpacity =
    useTransform(
      progress,
      PHONE_STATE_RANGE,
      PHONE_LANDING_STATES.map(
        (state) =>
          state.instagramOpacity,
      ),
    );

  /*
   * Reduced motion keeps the fixed-frame state model but
   * removes large actor travel. States crossfade instead.
   */
  const phoneY = (
    motionValue,
  ) =>
    prefersReducedMotion
      ? 0
      : motionValue;

  return (
    <>
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
          <div
            className="landing-intro__canvas"
            style={{
              "--landing-canvas-scale":
                geometry.canvasScale,
            }}
          >
            <motion.div
              className="landing-intro__hero-layer"
              style={
                isPhone
                  ? {
                      y:
                        phoneY(
                          phoneHeroY,
                        ),
                      opacity:
                        phoneHeroOpacity,
                    }
                  : {
                      y:
                        desktopHeroY,
                      opacity:
                        composition
                          .heroOpacity,
                    }
              }
            >
              <HeroSection
                progress={
                  introProgress
                }
              />

              <motion.div
                className="landing-intro__shade"
                style={{
                  opacity:
                    isPhone
                      ? 0
                      : desktopShade,
                }}
              />
            </motion.div>

            <motion.div
              className="landing-intro__explore"
              style={
                isPhone
                  ? {
                      x: 0,
                      y:
                        phoneY(
                          phoneExploreY,
                        ),
                      opacity:
                        phoneExploreOpacity,
                    }
                  : {
                      x:
                        desktopExploreX,
                      y:
                        desktopExploreY,
                      opacity:
                        desktopExploreOpacity,
                      ...composition
                        .explore,
                    }
              }
            >
              <ExploreSection staged />
            </motion.div>

            <motion.div
              className="landing-intro__gallery"
              style={
                isPhone
                  ? {
                      y:
                        phoneY(
                          phoneGalleryY,
                        ),
                      opacity:
                        phoneGalleryOpacity,
                    }
                  : {
                      y:
                        desktopGalleryY,
                      opacity:
                        desktopGalleryOpacity,
                      ...composition
                        .gallery,
                    }
              }
            >
              <GallerySection staged />
            </motion.div>

            <motion.div
              className="landing-intro__about"
              style={
                isPhone
                  ? {
                      y:
                        phoneY(
                          phoneAboutY,
                        ),
                      opacity:
                        phoneAboutOpacity,
                    }
                  : {
                      ...composition
                        .about,
                    }
              }
            >
              <AboutSection staged />
            </motion.div>

            <motion.div
              className="landing-intro__visit"
              style={
                isPhone
                  ? {
                      y:
                        phoneY(
                          phoneVisitY,
                        ),
                      opacity:
                        phoneVisitOpacity,
                    }
                  : {
                      ...composition
                        .visit,
                    }
              }
            >
              <VisitSection staged />
            </motion.div>

            <motion.div
              className="landing-intro__instagram"
              style={
                isPhone
                  ? {
                      y:
                        phoneY(
                          phoneInstagramY,
                        ),
                      opacity:
                        phoneInstagramOpacity,
                    }
                  : {
                      ...composition
                        .instagram,
                    }
              }
            >
              <InstagramSection staged />
            </motion.div>
          </div>
        </div>
      </div>

      <LandingNavigation
        canvasScale={
          geometry.canvasScale
        }
        progress={progress}
      />
    </>
  );
}
