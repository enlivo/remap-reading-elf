import { motion } from "motion/react";

import blogHeroArtwork from "../../../design-assets/Website/blog/blog-hero-bookstagram.png";
import logoBadge from "../../../assets/images/books-page/logo-badge.png";
import stripLogo from "../../../assets/images/our-story-page/strip-logo.png";
import BlogMobileNavigation from "./BlogMobileNavigation.jsx";

const navLinks = [
  ["Books", "/books"],
  ["Story Box", "/story-box"],
  ["Experience", "/experience"],
  ["Events", "/events"],
  ["Our Story", "/our-story"],
  ["Blog", "/blog"],
];

export default function BlogNavigation({ chromeOpacity }) {
  return (
    <div className="blog-navigation" data-blog-navigation>
      <a className="blog-navigation__mobile-logo" href="/" aria-label="The Reading Elf home">
        <motion.img style={{ opacity: chromeOpacity }} src={logoBadge} alt="The Reading Elf" />
      </a>

      <nav className="blog-navigation__tab" aria-label="Primary navigation">
        <motion.span
          className="blog-navigation__tab-artwork"
          style={{ opacity: chromeOpacity }}
          aria-hidden="true"
        >
          <img src={blogHeroArtwork} alt="" />
        </motion.span>
        <div className="blog-navigation__hotspots">
          {navLinks.map(([label, href]) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              aria-current={href === "/blog" ? "page" : undefined}
            />
          ))}
        </div>
      </nav>

      <motion.div
        className="blog-navigation__strip"
        style={{ opacity: chromeOpacity }}
        aria-hidden="true"
      >
        <img src={stripLogo} alt="" />
      </motion.div>

      <BlogMobileNavigation />
    </div>
  );
}
