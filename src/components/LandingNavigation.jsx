import {
  motion,
  useTransform,
} from "motion/react";

import {
  LANDING_STATES,
  canvasVw,
  STATE_RANGE,
  stateValues,
} from "../sections/landingScrollStates.js";

import upperTab from "../../design-assets/Website/Landing Page/Upper Tab to be fixed throughout.png";
import bottomStrip from "../../design-assets/Website/Landing Page/Strip that directs to top of the page.png";

const navLinks = [
  {
    label: "Books",
    href: "/books",
  },
  {
    label: "Story Box",
    href: "/story-box",
  },
  {
    label: "Experience",
    href: "/experience",
  },
  {
    label: "Events",
    href: "/events",
  },
  {
    label: "Our Story",
    href: "/our-story",
  },
  {
    label: "Blog",
    href: "/blog",
  },
];

function UpperTab({ style }) {
  return (
    <motion.nav
      style={style}
      className="upper-tab"
      aria-label="Primary navigation"
    >
      <img
        src={upperTab}
        alt=""
        aria-hidden="true"
      />

      <div className="upper-tab__hotspots">
        {navLinks.map((item) => (
          <a
            key={item.label}
            href={item.href}
            aria-label={item.label}
          />
        ))}
      </div>
    </motion.nav>
  );
}

function BottomStrip({ style }) {
  return (
    <motion.div
      className="bottom-strip"
      style={style}
    >
      <img
        src={bottomStrip}
        alt=""
        aria-hidden="true"
      />

      <div className="bottom-strip__hotspots">
        <a
          className="bottom-strip__find"
          href="#find-us"
          aria-label="Find Us"
        />

        <a
          className="bottom-strip__book"
          href="/books"
          aria-label="Book a Book"
        />

        <a
          className="bottom-strip__quiz"
          href="/story-box"
          aria-label="Check Your Reading Personality"
        />
      </div>
    </motion.div>
  );
}

export default function LandingNavigation({
  canvasScale = 1,
  progress,
}) {
  const upperY = useTransform(
    progress,
    STATE_RANGE,
    stateValues("upperY", 30),
  );

  const stripY = useTransform(
    progress,
    STATE_RANGE,
    LANDING_STATES.map((state) => canvasVw(state.stripY - 890 - state.stripArtworkInset)),
  );

  const stripX = useTransform(
    progress,
    STATE_RANGE,
    stateValues("stripX"),
  );

  return (
    <div
      className="landing-navigation"
      data-landing-navigation
      style={{
        "--landing-canvas-scale":
          canvasScale,
      }}
    >
      <UpperTab
        style={{
          y: upperY,
        }}
      />

      <BottomStrip
        style={{
          x: stripX,
          y: stripY,
        }}
      />
    </div>
  );
}
