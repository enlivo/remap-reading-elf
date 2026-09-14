import { motion } from "motion/react";

import readingPersonalityPanel from "../../../../assets/images/story-box-page/reading-personality-panel.png";

export default function ReadingPersonalityTeaser({
  startQuiz,
  transition,
}) {
  return (
    <motion.div
      className="story-box-reading-personality__teaser"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={transition}
    >
      <h2
        id="reading-personality-title"
        className="story-box-visually-hidden"
      >
        Find Your Reading Personality
      </h2>

      <p className="story-box-visually-hidden">
        Every child reads differently. Take our quick 2-minute quiz
        to discover your child's unique reading style and get personalized
        book recommendations.
      </p>

      <img
        className="story-box-reading-personality__teaser-image"
        src={readingPersonalityPanel}
        alt=""
        aria-hidden="true"
      />

      <button
        type="button"
        className="story-box-reading-personality__teaser-button"
        aria-label="Start the Reading Personality quiz"
        onClick={startQuiz}
      >
        <span className="story-box-visually-hidden">
          Let's Start
        </span>
      </button>
    </motion.div>
  );
}
