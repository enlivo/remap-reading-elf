import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "motion/react";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import upperTab from "../../../design-assets/Website/Books Page/Upper Tab to be fixed throughout.png";
import stripLogo from "../../../design-assets/Website/Books Page/Strip Logo To be fixed throughout the page at top.png";

import logoBadge from "../../../assets/images/books-page/logo-badge.png";
import mobileMenuLogo from "../../../design-assets/Website/Common Through Out/Reading ELF Logo.png";

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

function BooksMobileNavigation() {
  const [isOpen, setIsOpen] =
    useState(false);

  const prefersReducedMotion =
    useReducedMotion();

  const triggerRef = useRef(null);
  const closeButtonRef = useRef(null);
  const panelRef = useRef(null);

  useEffect(() => {
    const desktopQuery =
      window.matchMedia(
        "(min-width: 901px)",
      );

    const closeAtDesktop = (event) => {
      if (event.matches) {
        setIsOpen(false);
      }
    };

    desktopQuery.addEventListener(
      "change",
      closeAtDesktop,
    );

    return () => {
      desktopQuery.removeEventListener(
        "change",
        closeAtDesktop,
      );
    };
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow =
      "hidden";

    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      const focusableElements =
        panelRef.current?.querySelectorAll(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        );

      if (!focusableElements?.length) {
        return;
      }

      const firstFocusable =
        focusableElements[0];

      const lastFocusable =
        focusableElements[
          focusableElements.length - 1
        ];

      if (
        event.shiftKey &&
        (
          document.activeElement ===
            firstFocusable ||
          !panelRef.current?.contains(
            document.activeElement,
          )
        )
      ) {
        event.preventDefault();
        lastFocusable.focus();
      } else if (
        !event.shiftKey &&
        (
          document.activeElement ===
            lastFocusable ||
          !panelRef.current?.contains(
            document.activeElement,
          )
        )
      ) {
        event.preventDefault();
        firstFocusable.focus();
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
    <div className="mobile-landing-navigation mobile-books-navigation">
      <button
        ref={triggerRef}
        type="button"
        className="mobile-menu-trigger"
        aria-label="Open navigation menu"
        aria-expanded={isOpen}
        aria-controls="books-mobile-navigation-drawer"
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
              tabIndex={-1}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration:
                  prefersReducedMotion
                    ? 0
                    : 0.24,
              }}
              onClick={closeMenu}
            />

            <motion.aside
              ref={panelRef}
              id="books-mobile-navigation-drawer"
              className="mobile-menu-panel"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={
                prefersReducedMotion
                  ? { duration: 0 }
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
                    <span>{item.label}</span>
                    <i aria-hidden="true" />
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

      <BooksMobileNavigation />
    </div>
  );
}
