import { motion } from "motion/react";

import { QuizDecorations } from "./ReadingPersonalityDecorations.jsx";
import { questions } from "./readingPersonalityData.js";

export default function ReadingPersonalityQuiz({ currentQuestion, goBack, selectOption, selectedValue, transition }) {
  const question = questions[currentQuestion];

  return (
    <motion.div
      className="story-box-reading-personality__quiz-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={transition}
    >
      <QuizDecorations showMascot={currentQuestion === 1 || currentQuestion === 3} />

      <div
        className="story-box-reading-personality__progress"
        aria-label={`Question ${currentQuestion + 1} of ${questions.length}`}
      >
        {questions.map((_, index) => (
          <span
            key={index}
            className={index <= currentQuestion ? "is-active" : ""}
          />
        ))}
      </div>

      <div className="story-box-reading-personality__question-content">
        <p className="story-box-reading-personality__question-count">
          Question {currentQuestion + 1} of {questions.length}
        </p>

        <h2>{question.question}</h2>

        <div
          className="story-box-reading-personality__options"
          role="group"
          aria-label={question.question}
        >
          {question.options.map((option) => {
            const selected = selectedValue === option.value;

            return (
              <button
                key={option.label}
                type="button"
                className={selected ? "story-box-reading-personality__option is-selected" : "story-box-reading-personality__option"}
                aria-pressed={selected}
                onClick={() => selectOption(option.value)}
              >
                <span
                  className="story-box-reading-personality__checkbox"
                  aria-hidden="true"
                />
                <span>{option.label}</span>
              </button>
            );
          })}
        </div>

        <button
          type="button"
          className="story-box-reading-personality__back"
          onClick={goBack}
        >
          ← Back
        </button>
      </div>
    </motion.div>
  );
}
