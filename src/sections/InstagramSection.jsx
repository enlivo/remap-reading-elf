import { motion } from "motion/react";

import peachBlob from "../../assets/images/landing-elements/blob-peach.png";

export default function InstagramSection() {
  return (
    <section className="instagram-section">
      <img
        className="instagram-section__blob"
        src={peachBlob}
        alt=""
        aria-hidden="true"
      />

      <motion.h2
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
      >
        *Instagram Page*
      </motion.h2>

      <div
        className="instagram-section__placeholder"
        aria-label="Instagram feed placeholder"
      />
    </section>
  );
}
