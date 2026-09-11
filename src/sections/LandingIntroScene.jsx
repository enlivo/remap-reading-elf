import { useLayoutEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import LandingNavigation from "../components/LandingNavigation.jsx";
import HeroSection from "./HeroSection.jsx";
import ExploreSection from "./ExploreSection.jsx";

// Video-derived PC → PC Scroll 2 endpoints in a 1920 × 1080 canvas.
// The recording does not specify wheel distance; 90vh is a QA tuning value.
export default function LandingIntroScene() {
  const sceneRef = useRef(null);
  const stageRef = useRef(null);
  const [geometry, setGeometry] = useState({ height: 0, runway: 0 });
  const { scrollY } = useScroll();

  useLayoutEffect(() => {
    const measure = () => {
      const desktop = window.innerWidth > 900;
      setGeometry({
        height: stageRef.current.offsetHeight,
        runway: desktop ? window.innerHeight * 0.9 : 0,
        start: sceneRef.current.getBoundingClientRect().top + window.scrollY,
      });
    };
    const observer = new ResizeObserver(measure);
    observer.observe(stageRef.current);
    window.addEventListener("resize", measure);
    measure();
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  const progress = useTransform(scrollY, (y) => geometry.runway
    ? Math.max(0, Math.min(1, (y - geometry.start) / geometry.runway))
    : 0);
  const exploreY = useTransform(progress, [0, 1], ["9.375vw", "0vw"]);

  return (
    <div
      ref={sceneRef}
      className="landing-intro"
      id="top"
      style={geometry.height ? { height: geometry.height + geometry.runway } : undefined}
    >
      <div ref={stageRef} className="landing-intro__stage">
        <HeroSection progress={progress} />
        <LandingNavigation progress={progress} />
        <motion.div className="landing-intro__explore" style={{ y: exploreY }}>
          <ExploreSection staged />
        </motion.div>
      </div>
    </div>
  );
}
