import { motion } from "motion/react";

import motherAndSon from "../../assets/images/about-mother-son.png";

export default function AboutSection() {
  return (
    <section
      className="about-section"
      id="our-story"
    >
      <motion.div
        className="about-section__copy"
        initial={{
          opacity: 0,
          x: -45,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{
          once: true,
          amount: 0.3,
        }}
        transition={{
          duration: 0.75,
        }}
      >
        <h2>About Us</h2>

        <p>
          The Reading Elf was born from a
          mother's search for a little more
          magic for her son — a place where
          children could wander, giggle, sit on
          the floor, and simply be themselves
          among stories.
        </p>

        <p>
          When that place didn't exist,
          we decided to build it.
        </p>
      </motion.div>

      <motion.div
        className="about-section__image"
        initial={{
          opacity: 0,
          y: 50,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 0.8,
        }}
      >
        <img
          src={motherAndSon}
          alt="A mother and child reading together"
        />
      </motion.div>
    </section>
  );
}
