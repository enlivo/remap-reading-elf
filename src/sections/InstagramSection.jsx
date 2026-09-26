import { motion } from "motion/react";

import peachBlob from "../../assets/images/landing-elements/blob-peach.png";

/*
 * Reused from the footer's Instagram link (SiteFooter.jsx and every
 * page footer) - do not invent a different handle here.
 */
const INSTAGRAM_URL = "https://www.instagram.com/thereadingelf_hub/";

export default function InstagramSection({ staged = false, mobileFallback = false }) {
  return (
    <section
      className={`instagram-section${staged ? " instagram-section--staged" : ""}${mobileFallback ? " instagram-section--mobile-fallback" : ""}`}
      aria-hidden={staged || undefined}
    >
      <img
        className="instagram-section__blob"
        src={peachBlob}
        alt=""
        aria-hidden="true"
      />

      <a
        className="instagram-section__link"
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="Visit The Reading Elf on Instagram"
      >
        <motion.h2
          initial={staged ? false : {
            opacity: 0,
            y: 25,
          }}
          whileInView={staged ? undefined : {
            opacity: 1,
            y: 0,
          }}
          viewport={staged ? undefined : {
            once: true,
          }}
        >
          *Instagram Page*
        </motion.h2>

        <div
          className="instagram-section__placeholder"
          aria-label="Instagram feed placeholder"
        />
      </a>
    </section>
  );
}
