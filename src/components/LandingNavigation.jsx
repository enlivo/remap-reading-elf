import { motion, useTransform } from "motion/react";
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
    <motion.div className="bottom-strip" style={style}>
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

export default function LandingNavigation({ progress }) {
  const upperY = useTransform(progress, [0, 1], [0, 0]);
  const stripY = useTransform(progress, [0, 1], ["0vw", "-9.375vw"]);
  const stripX = useTransform(progress, [0, 1], ["0.9375vw", "0vw"]);

  return (
    <div className="landing-navigation" data-landing-navigation>
      <UpperTab style={{ y: upperY }} />
      <BottomStrip style={{ x: stripX, y: stripY }} />
    </div>
  );
}
