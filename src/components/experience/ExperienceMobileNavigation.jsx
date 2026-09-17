import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

import mobileMenuLogo from "../../../design-assets/Website/Common Through Out/Reading ELF Logo.png";

const navLinks = [
  ["Books", "/books"],
  ["Story Box", "/story-box"],
  ["Experience", "/experience"],
  ["Events", "/events"],
  ["Our Story", "/our-story"],
  ["Blog", "/blog"],
];

export default function ExperienceMobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const triggerRef = useRef(null);
  const closeRef = useRef(null);
  const panelRef = useRef(null);

  useEffect(() => {
    const query = window.matchMedia("(min-width: 901px)");
    const closeAtDesktop = ({ matches }) => {
      if (matches) setIsOpen(false);
    };

    query.addEventListener("change", closeAtDesktop);
    return () => query.removeEventListener("change", closeAtDesktop);
  }, []);

  useEffect(() => {
    if (!isOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        return;
      }

      if (event.key !== "Tab") return;
      const focusable = panelRef.current?.querySelectorAll(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (!focusable?.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const outside = !panelRef.current?.contains(document.activeElement);

      if (event.shiftKey && (document.activeElement === first || outside)) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && (document.activeElement === last || outside)) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      triggerRef.current?.focus();
    };
  }, [isOpen]);

  return (
    <div className="mobile-landing-navigation experience-mobile-navigation">
      <button
        ref={triggerRef}
        type="button"
        className="mobile-menu-trigger"
        aria-label="Open navigation menu"
        aria-expanded={isOpen}
        aria-controls="experience-mobile-navigation-drawer"
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
              transition={{ duration: prefersReducedMotion ? 0 : 0.24 }}
              onClick={() => setIsOpen(false)}
            />

            <motion.aside
              ref={panelRef}
              id="experience-mobile-navigation-drawer"
              className="mobile-menu-panel"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={prefersReducedMotion
                ? { duration: 0 }
                : { duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
            >
              <img className="mobile-menu-panel__logo" src={mobileMenuLogo} alt="The Reading Elf" />

              <button
                ref={closeRef}
                type="button"
                className="mobile-menu-close"
                aria-label="Close navigation menu"
                onClick={() => setIsOpen(false)}
              >
                <span />
                <span />
              </button>

              <nav className="mobile-menu-links" aria-label="Mobile navigation">
                {navLinks.map(([label, href]) => (
                  <a
                    key={label}
                    href={href}
                    aria-current={href === "/experience" ? "page" : undefined}
                    onClick={() => setIsOpen(false)}
                  >
                    <span>{label}</span>
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
