import {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useTransform,
} from "motion/react";

import {
  LANDING_STATES,
  canvasVw,
  runwayVhToState,
  STATE_RANGE,
  stateValues,
} from "../sections/landingScrollStates.js";

import upperTab from "../../design-assets/Website/Landing Page/Upper Tab to be fixed throughout.png";
import bottomStrip from "../../design-assets/Website/Landing Page/Strip that directs to top of the page.png";
import mobileMenuLogo from "../../design-assets/Website/Common Through Out/Reading ELF Logo.png";

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

function BottomStrip({ style, onFindUs }) {
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
          className="bottom-strip__logo"
          href="#top"
          aria-label="The Reading Elf, back to page top"
        />

        <a
          className="bottom-strip__find"
          href="#find-us"
          aria-label="Find Us"
          onClick={onFindUs}
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


function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  const prefersReducedMotion =
    useReducedMotion();

  const triggerRef = useRef(null);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown,
    );

    return () => {
      document.body.style.overflow =
        previousOverflow;

      window.removeEventListener(
        "keydown",
        handleKeyDown,
      );

      triggerRef.current?.focus();
    };
  }, [isOpen]);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div
      className="mobile-landing-navigation"
      data-mobile-landing-navigation
    >
      <button
        ref={triggerRef}
        type="button"
        className="mobile-menu-trigger"
        aria-label="Open navigation menu"
        aria-expanded={isOpen}
        aria-controls="mobile-navigation-drawer"
        onClick={() => setIsOpen(true)}
      >
        <span />
        <span />
        <span />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.button
              type="button"
              className="mobile-menu-backdrop"
              aria-label="Close navigation menu"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                duration:
                  prefersReducedMotion
                    ? 0
                    : 0.24,
              }}
              onClick={closeMenu}
            />

            <motion.aside
              id="mobile-navigation-drawer"
              className="mobile-menu-panel"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
              initial={{
                x: "100%",
              }}
              animate={{
                x: 0,
              }}
              exit={{
                x: "100%",
              }}
              transition={
                prefersReducedMotion
                  ? {
                      duration: 0,
                    }
                  : {
                      duration: 0.48,
                      ease: [
                        0.22,
                        1,
                        0.36,
                        1,
                      ],
                    }
              }
            >
              <img
                className="mobile-menu-panel__logo"
                src={mobileMenuLogo}
                alt="The Reading Elf"
              />

              <button
                ref={closeButtonRef}
                type="button"
                className="mobile-menu-close"
                aria-label="Close navigation menu"
                onClick={closeMenu}
              >
                <span />
                <span />
              </button>

              <nav
                className="mobile-menu-links"
                aria-label="Mobile navigation"
              >
                {navLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={closeMenu}
                  >
                    <span>
                      {item.label}
                    </span>

                    <i
                      aria-hidden="true"
                    />
                  </a>
                ))}
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}


export default function LandingNavigation({
  canvasScale = 1,
  geometry,
  progress,
}) {
  /*
   * "Find Us" can't be a plain #find-us anchor: every staged
   * section (About/Visit/Instagram/...) is position: absolute
   * inside the same pinned .landing-intro__stage, so they all
   * report the same on-screen rect regardless of scroll position -
   * scrollIntoView on any of them is a no-op (see the existing
   * /#gallery links for the same, pre-existing limitation). Compute
   * the real scrollY for the Visit state instead, using the same
   * runway math useLandingScrollTimeline.js derives progress from.
   */
  const handleFindUs = (event) => {
    if (!geometry?.vh) {
      return;
    }

    event.preventDefault();

    /*
     * Stop just before the Visit -> Instagram handoff.
     *
     * At the exact Visit endpoint (progress 6), Instagram's
     * lead panel begins entering. Roughly 5vh before that point,
     * Visit's map, surface, and content are already fully resolved
     * while Instagram has not started appearing yet.
     */
    const targetY =
      geometry.start +
      (
        runwayVhToState(
          LANDING_STATES,
          "Visit",
        ) - 5
      ) *
        geometry.vh;

    window.scrollTo({
      top: targetY,
      behavior: "smooth",
    });
  };

  const upperY = useTransform(
    progress,
    STATE_RANGE,
    stateValues("upperY", 30),
  );

  /*
   * The canvas is 100vw wide and 56.25vw tall. On wide, short windows
   * that is taller than the viewport, so the bottom strip (anchored near
   * the canvas bottom in the Hero state) would be clipped. Lift it just
   * enough to stay fully on screen; taller windows are unaffected.
   */
  const viewportW =
    typeof window === "undefined" ? 1920 : window.innerWidth;
  const viewportH =
    typeof window === "undefined" ? 1080 : window.innerHeight;
  const unit = viewportW / 100;
  const stripHeightPx = unit * (232 / 1920) * 100;
  /* the badge already overhangs the 16:9 canvas by ~2.2vw in the design */
  const designOverhangPx = unit * (46.3542 + (232 / 1920) * 100 - 56.25);
  const scale = canvasScale || 1;

  const stripYValues = LANDING_STATES.map((state) => {
    const offsetVw =
      (state.stripY - 890 - state.stripArtworkInset) / 19.2;
    const topPx = (46.3542 + offsetVw) * unit * scale;
    const overflow = Math.max(
      0,
      topPx + stripHeightPx * scale - (viewportH + designOverhangPx * scale),
    );

    return offsetVw * unit - overflow / scale;
  });

  const stripY = useTransform(
    progress,
    STATE_RANGE,
    stripYValues,
  );

  const stripX = useTransform(
    progress,
    STATE_RANGE,
    stateValues("stripX"),
  );

  return (
    <>
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
          onFindUs={handleFindUs}
        />
      </div>

      <MobileNavigation />
    </>
  );
}
