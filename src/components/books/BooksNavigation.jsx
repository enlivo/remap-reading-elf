import {
  motion,
} from "motion/react";

import upperTab from "../../../design-assets/Website/Books Page/Upper Tab to be fixed throughout.png";
import stripLogo from "../../../design-assets/Website/Books Page/Strip Logo To be fixed throughout the page at top.png";

import logoBadge from "../../../assets/images/books-page/logo-badge.png";

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

export default function BooksNavigation({
  stripY,
}) {
  return (
    <div
      className="books-navigation"
      data-books-navigation
    >
      <a
        className="books-navigation__logo"
        href="/"
        aria-label="The Reading Elf home"
      >
        <img
          src={logoBadge}
          alt="The Reading Elf"
        />
      </a>

      <nav
        className="books-navigation__tab"
        aria-label="Primary navigation"
      >
        <img
          src={upperTab}
          alt=""
          aria-hidden="true"
        />

        <div className="books-navigation__hotspots">
          {navLinks.map(
            (item) => (
              <a
                key={item.label}
                href={item.href}
                aria-label={
                  item.label
                }
              />
            ),
          )}
        </div>
      </nav>

      <motion.a
        className="books-navigation__strip"
        href="#collection"
        aria-label="Browse Reading Elf picks"
        style={{
          y: stripY,
        }}
      >
        <img
          src={stripLogo}
          alt=""
          aria-hidden="true"
        />
      </motion.a>
    </div>
  );
}
