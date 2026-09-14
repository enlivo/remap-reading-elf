import { motion } from "motion/react";

import pathArtwork from "../../../../design-assets/Website/Story Box/Reading Personality/Elements of Reading personality/Path.png";

import { ResultDecorations } from "./ReadingPersonalityDecorations.jsx";

export default function ReadingPersonalityResult({ result, startQuiz, transition }) {
  return (
    <motion.div
      className="story-box-reading-personality__result-card"
      initial={{ opacity: 0, scale: 0.985 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.985 }}
      transition={transition}
    >
      <img
        className="story-box-reading-personality__result-path"
        src={pathArtwork}
        alt=""
        aria-hidden="true"
      />

      <ResultDecorations />

      <div className="story-box-reading-personality__result-content">
        <p className="story-box-reading-personality__you-are">You are</p>
        <img
          className="story-box-reading-personality__result-image"
          src={result.image}
          alt=""
          aria-hidden="true"
        />
        <h2>{result.name}</h2>
        <p className="story-box-reading-personality__result-description">
          {result.description}
        </p>
        <button
          type="button"
          className="story-box-reading-personality__retake"
          onClick={startQuiz}
        >
          Retake Quiz
        </button>
      </div>
    </motion.div>
  );
}
