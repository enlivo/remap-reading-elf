import {
  AnimatePresence,
  useReducedMotion,
} from "motion/react";
import {
  useEffect,
  useRef,
  useState,
} from "react";

import ReadingPersonalityQuiz from "./reading-personality/ReadingPersonalityQuiz.jsx";
import ReadingPersonalityResult from "./reading-personality/ReadingPersonalityResult.jsx";
import ReadingPersonalityTeaser from "./reading-personality/ReadingPersonalityTeaser.jsx";
import { ReadingPersonalitySceneProps } from "./reading-personality/ReadingPersonalityDecorations.jsx";
import {
  getResultKey,
  questions,
  results,
} from "./reading-personality/readingPersonalityData.js";

export default function StoryBoxReadingPersonality() {
  const prefersReducedMotion =
    useReducedMotion();
  const pendingTimer = useRef(null);
  const [phase, setPhase] =
    useState("teaser");
  const [
    currentQuestion,
    setCurrentQuestion,
  ] = useState(0);
  const [answers, setAnswers] =
    useState([]);
  const [
    selectedValue,
    setSelectedValue,
  ] = useState(null);
  const [resultKey, setResultKey] =
    useState(null);

  useEffect(() => {
    return () => {
      if (pendingTimer.current) {
        window.clearTimeout(
          pendingTimer.current,
        );
      }
    };
  }, []);

  const transition = prefersReducedMotion
    ? { duration: 0 }
    : {
        duration: 0.38,
        ease: [
          0.22,
          1,
          0.36,
          1,
        ],
      };

  const resetQuiz = (nextPhase) => {
    if (pendingTimer.current) {
      window.clearTimeout(
        pendingTimer.current,
      );
    }

    pendingTimer.current = null;
    setAnswers([]);
    setCurrentQuestion(0);
    setSelectedValue(null);
    setResultKey(null);
    setPhase(nextPhase);
  };

  const startQuiz = () => {
    resetQuiz("quiz");
  };

  const returnToTeaser = () => {
    resetQuiz("teaser");
  };

  const selectOption = (value) => {
    if (selectedValue !== null) {
      return;
    }

    setSelectedValue(value);

    pendingTimer.current =
      window.setTimeout(() => {
        const nextAnswers = [
          ...answers,
          value,
        ];

        setAnswers(nextAnswers);

        if (
          currentQuestion <
          questions.length - 1
        ) {
          setCurrentQuestion(
            currentQuestion + 1,
          );

          setSelectedValue(null);
          pendingTimer.current = null;
          return;
        }

        setResultKey(
          getResultKey(nextAnswers),
        );
        setSelectedValue(null);
        setPhase("result");
        pendingTimer.current = null;
      }, prefersReducedMotion ? 0 : 320);
  };

  const goBack = () => {
    if (selectedValue !== null) {
      return;
    }

    if (currentQuestion === 0) {
      returnToTeaser();
      return;
    }

    setAnswers(
      answers.slice(0, -1),
    );
    setCurrentQuestion(
      currentQuestion - 1,
    );
    setSelectedValue(null);
  };

  const result =
    resultKey
      ? results[resultKey]
      : null;

  return (
    <section
      className="story-box-reading-personality"
      data-phase={phase}
      id="reading-personality"
      aria-labelledby="reading-personality-title"
    >
      <ReadingPersonalitySceneProps />

      <div className="story-box-reading-personality__inner">
        <AnimatePresence
          mode="wait"
          initial={false}
        >
          {phase === "teaser" && (
            <ReadingPersonalityTeaser
              key="teaser"
              startQuiz={startQuiz}
              transition={transition}
            />
          )}

          {phase === "quiz" && (
            <ReadingPersonalityQuiz
              key={`question-${currentQuestion}`}
              currentQuestion={
                currentQuestion
              }
              goBack={goBack}
              selectOption={selectOption}
              selectedValue={
                selectedValue
              }
              transition={transition}
            />
          )}

          {phase === "result" &&
            result && (
              <ReadingPersonalityResult
                key="result"
                result={result}
                startQuiz={startQuiz}
                transition={transition}
              />
            )}
        </AnimatePresence>
      </div>
    </section>
  );
}
