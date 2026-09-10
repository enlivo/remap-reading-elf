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

export function UpperTab({
  className = "",
}) {
  return (
    <nav
      className={`upper-tab ${className}`}
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
    </nav>
  );
}

export function BottomStrip({
  className = "",
}) {
  return (
    <div
      className={`bottom-strip ${className}`}
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
    </div>
  );
}

export default function PersistentNavigation() {
  return (
    <div className="persistent-navigation">
      <BottomStrip />
      <UpperTab className="persistent-navigation__tab" />
    </div>
  );
}
