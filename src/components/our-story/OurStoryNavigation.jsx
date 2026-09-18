import upperTab from "../../../design-assets/Website/Our Story/Tabs Supposed to be fixed.png";
import logoBadge from "../../../assets/images/books-page/logo-badge.png";
import OurStoryMobileNavigation from "./OurStoryMobileNavigation.jsx";

const navLinks = [
  ["Books", "/books"],
  ["Story Box", "/story-box"],
  ["Experience", "/experience"],
  ["Events", "/events"],
  ["Our Story", "/our-story"],
  ["Blog", "/blog"],
];

export default function OurStoryNavigation() {
  return (
    <div className="our-story-navigation">
      <a className="our-story-navigation__mobile-logo" href="/" aria-label="The Reading Elf home">
        <img src={logoBadge} alt="The Reading Elf" />
      </a>

      <nav className="our-story-navigation__tab" aria-label="Primary navigation">
        <img src={upperTab} alt="" aria-hidden="true" />
        <div className="our-story-navigation__hotspots">
          {navLinks.map(([label, href]) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              aria-current={href === "/our-story" ? "page" : undefined}
            />
          ))}
        </div>
      </nav>

      <OurStoryMobileNavigation />
    </div>
  );
}
