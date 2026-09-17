import logoBadge from "../../../assets/images/books-page/logo-badge.png";
import upperTab from "../../../assets/images/events-page/upper-tab.png";
import EventsMobileNavigation from "./EventsMobileNavigation.jsx";

const navLinks = [
  ["Books", "/books"],
  ["Story Box", "/story-box"],
  ["Experience", "/experience"],
  ["Events", "/events"],
  ["Our Story", "/our-story"],
  ["Blog", "/blog"],
];

export default function EventsNavigation() {
  return (
    <div
      className="events-navigation"
      data-events-navigation
    >
      <a
        className="events-navigation__logo"
        href="/"
        aria-label="The Reading Elf home"
      >
        <img src={logoBadge} alt="The Reading Elf" />
      </a>

      <nav
        className="events-navigation__tab"
        aria-label="Primary navigation"
      >
        <img src={upperTab} alt="" aria-hidden="true" />

        <div className="events-navigation__hotspots">
          {navLinks.map(([label, href]) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              aria-current={
                href === "/events"
                  ? "page"
                  : undefined
              }
            />
          ))}
        </div>
      </nav>

      <EventsMobileNavigation />
    </div>
  );
}
