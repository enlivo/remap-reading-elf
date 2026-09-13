import upperTab from "../../../assets/images/story-box-page/upper-tab.png";
import stripLogo from "../../../assets/images/story-box-page/strip-logo.png";
import logoBadge from "../../../assets/images/books-page/logo-badge.png";

const navLinks = [
  {
    label: "Books",
    href: "/books",
    className: "story-box-navigation__hotspot--books",
  },
  {
    label: "Story Box",
    href: "/story-box",
    className: "story-box-navigation__hotspot--story-box",
  },
  {
    label: "Experience",
    href: "/experience",
    className: "story-box-navigation__hotspot--experience",
  },
  {
    label: "Events",
    href: "/events",
    className: "story-box-navigation__hotspot--events",
  },
  {
    label: "Our Story",
    href: "/our-story",
    className: "story-box-navigation__hotspot--our-story",
  },
  {
    label: "Blog",
    href: "/blog",
    className: "story-box-navigation__hotspot--blog",
  },
];

export default function StoryBoxNavigation() {
  return (
    <div
      className="story-box-navigation"
      data-story-box-navigation
    >
      <a
        className="story-box-navigation__logo"
        href="/"
        aria-label="The Reading Elf home"
      >
        <img
          src={logoBadge}
          alt="The Reading Elf"
        />
      </a>

      <nav
        className="story-box-navigation__tab"
        aria-label="Primary navigation"
      >
        <img
          src={upperTab}
          alt=""
          aria-hidden="true"
        />

        <div className="story-box-navigation__hotspots">
          {navLinks.map((item) => (
            <a
              key={item.label}
              className={item.className}
              href={item.href}
              aria-label={item.label}
              aria-current={
                item.href === "/story-box"
                  ? "page"
                  : undefined
              }
            />
          ))}
        </div>
      </nav>

      <div
        className="story-box-navigation__strip"
        aria-hidden="true"
      >
        <img
          src={stripLogo}
          alt=""
        />
      </div>
    </div>
  );
}
