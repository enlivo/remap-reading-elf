import { motion } from "motion/react";

import peachBlob from "../../assets/images/landing-elements/blob-peach.png";

const INSTAGRAM_URL = "https://www.instagram.com/the_reading_elf?stkn=MWc3b3V0aTdnNHg4eg==";
const INSTAGRAM_EMBED_URL = "https://www.instagram.com/the_reading_elf/embed/";

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

      <a className="instagram-section__link" href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
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
      </a>

      <div className="instagram-section__embed">
        <iframe
          src={INSTAGRAM_EMBED_URL}
          title="The Reading Elf on Instagram"
          loading="lazy"
          allow="encrypted-media"
        />

        <a
          className="instagram-section__profile-link"
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noreferrer"
        >
          Open @the_reading_elf on Instagram
        </a>
      </div>
    </section>
  );
}
