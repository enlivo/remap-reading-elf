import { motion } from "motion/react";

import logoBadge from "../../../assets/images/books-page/logo-badge.png";
import stripLogo from "../../../assets/images/experience-page/strip-logo.png";
import upperTab from "../../../assets/images/experience-page/upper-tab.png";
import ExperienceMobileNavigation from "./ExperienceMobileNavigation.jsx";

const navLinks = [
  ["Books", "/books"],
  ["Story Box", "/story-box"],
  ["Experience", "/experience"],
  ["Events", "/events"],
  ["Our Story", "/our-story"],
  ["Blog", "/blog"],
];

export default function ExperienceNavigation({ stripOpacity }) {
  return (
    <div className="experience-navigation" data-experience-navigation>
      <a
        className="experience-navigation__logo"
        href="/"
        aria-label="The Reading Elf home"
      >
        <img src={logoBadge} alt="The Reading Elf" />
      </a>

      <nav className="experience-navigation__tab" aria-label="Primary navigation">
        <img src={upperTab} alt="" aria-hidden="true" />

        <div className="experience-navigation__hotspots">
          {navLinks.map(([label, href]) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              aria-current={href === "/experience" ? "page" : undefined}
            />
          ))}
        </div>
      </nav>

      <motion.div
        className="experience-navigation__strip"
        style={{ opacity: stripOpacity }}
        aria-hidden="true"
      >
        <img src={stripLogo} alt="" />
      </motion.div>

      <ExperienceMobileNavigation />
    </div>
  );
}
