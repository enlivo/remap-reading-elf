import { motion } from "motion/react";

import chennaiMap from "../../assets/images/chennai-map.png";
import whiteBlob from "../../assets/images/landing-elements/blob-white.png";
import blueBlob from "../../assets/images/landing-elements/blob-blue.png";

export default function VisitSection() {
  return (
    <section
      className="visit-section"
      id="find-us"
    >
      <img
        className="visit-section__blob visit-section__blob--white"
        src={whiteBlob}
        alt=""
        aria-hidden="true"
      />

      <motion.div
        className="visit-section__copy"
        initial={{
          opacity: 0,
          y: 35,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.3,
        }}
        transition={{
          duration: 0.7,
        }}
      >
        <h2>
          Come See Us
          <span>in Chennai</span>
        </h2>

        <p>
          A cozy, carefully designed space
          where books are just the beginning.
          Drop in, explore, and let your child
          wander.
        </p>

        <p className="visit-section__hours">
          Tuesday – Sunday
          <br />
          10:30 AM – 8:30 PM
          <br />
          Monday - Closed
        </p>
      </motion.div>

      <motion.div
        className="visit-section__map"
        initial={{
          opacity: 0,
          scale: 0.96,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        viewport={{
          once: true,
          amount: 0.25,
        }}
        transition={{
          duration: 0.75,
        }}
      >
        <img
          src={chennaiMap}
          alt="Map showing The Reading Elf location in Chennai"
        />
      </motion.div>

      <img
        className="visit-section__blob visit-section__blob--blue"
        src={blueBlob}
        alt=""
        aria-hidden="true"
      />
    </section>
  );
}
