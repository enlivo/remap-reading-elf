import {
  AnimatePresence,
  useReducedMotion,
} from "motion/react";
import {
  useEffect,
  useRef,
  useState,
} from "react";

import ReadingPersonalityRegister from "./reading-personality/ReadingPersonalityRegister.jsx";
import {
  getSession,
  getSource,
  normalizePhone,
  postRegistration,
  postResult,
  saveSession,
} from "./reading-personality/readingPersonalityApi.js";
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
  const [notice, setNotice] =
    useState("");
  const sessionRef = useRef(getSession());

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

  // A registered session (kept in sessionStorage) skips the form on refresh.
  const startQuiz = () => {
    setNotice("");
    const needsGate = getSource() === "qr" && !sessionRef.current;
    resetQuiz(needsGate ? "register" : "quiz");
  };

  const submitRegistration = (values) => {
    const sessionId = crypto.randomUUID();
    const name = values.name.trim();
    const email = values.email.trim();

    sessionRef.current = { sessionId, name, email };
    saveSession(sessionRef.current);
    setNotice("");
    setPhase("quiz");

    // Fire and forget: the quiz is already unlocked.
    postRegistration({
      type: "register",
      sessionId,
      name,
      email,
      phone: normalizePhone(values.phone),
      source: getSource(),
      consent: true,
      website: values.website,
    }).then((ok) => {
      if (!ok) {
        setNotice(
          "We couldn't save your details just now. No worries — we'll try again automatically.",
        );
      }
    });
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

        const finalKey =
          getResultKey(nextAnswers);

        if (sessionRef.current) {
          postResult({
            sessionId:
              sessionRef.current.sessionId,
            answers: nextAnswers,
            result:
              results[finalKey]?.name ??
              finalKey,
          });
        }

        setResultKey(finalKey);
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
        {phase === "quiz" && notice && (
          <p className="rp-notice" role="status">
            {notice}
          </p>
        )}

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

          {phase === "register" && (
            <ReadingPersonalityRegister
              key="register"
              onBack={returnToTeaser}
              onSubmit={submitRegistration}
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
