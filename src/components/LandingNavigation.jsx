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
        />
      </div>

      <MobileNavigation />
    </>
  );
}
