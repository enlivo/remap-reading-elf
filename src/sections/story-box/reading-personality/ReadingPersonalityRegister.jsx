import { motion } from "motion/react";
import { useState } from "react";

import { QuizDecorations } from "./ReadingPersonalityDecorations.jsx";
import { validateRegistration } from "./readingPersonalityApi.js";

export default function ReadingPersonalityRegister({
  onSubmit,
  onBack,
  transition,
}) {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    consent: false,
    website: "",
  });
  const [errors, setErrors] = useState({});

  const update = (field) => (event) => {
    const value =
      field === "consent" ? event.target.checked : event.target.value;

    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const nextErrors = validateRegistration(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      onSubmit(values);
    }
  };

  const field = (id, label, props) => (
    <div className="rp-form__field">
      <label htmlFor={`rp-${id}`}>{label}</label>
      <input
        id={`rp-${id}`}
        name={id}
        value={values[id]}
        onChange={update(id)}
        aria-invalid={errors[id] ? "true" : "false"}
        aria-describedby={errors[id] ? `rp-${id}-error` : undefined}
        {...props}
      />
      {errors[id] && (
        <p className="rp-form__error" id={`rp-${id}-error`} role="alert">
          {errors[id]}
        </p>
      )}
    </div>
  );

  return (
    <motion.div
      className="story-box-reading-personality__quiz-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={transition}
    >
      <QuizDecorations showMascot={false} />

      <form
        className="story-box-reading-personality__question-content rp-form"
        onSubmit={handleSubmit}
        noValidate
      >
        <p className="story-box-reading-personality__question-count">
          Before we begin
        </p>

        <h2>Tell us about you</h2>

        {field("name", "Name", {
          type: "text",
          autoComplete: "name",
        })}
        {field("email", "Email ID", {
          type: "email",
          autoComplete: "email",
          inputMode: "email",
        })}
        {field("phone", "Phone Number", {
          type: "tel",
          autoComplete: "tel",
          inputMode: "tel",
          placeholder: "+91 98765 43210",
        })}

        <div className="rp-form__field rp-form__field--consent">
          <label className="rp-form__consent" htmlFor="rp-consent">
            <input
              id="rp-consent"
              name="consent"
              type="checkbox"
              checked={values.consent}
              onChange={update("consent")}
              aria-invalid={errors.consent ? "true" : "false"}
              aria-describedby={errors.consent ? "rp-consent-error" : undefined}
            />
            <span>
              I agree to share my details so The Reading Elf can send my
              child's book recommendations.
            </span>
          </label>
          {errors.consent && (
            <p className="rp-form__error" id="rp-consent-error" role="alert">
              {errors.consent}
            </p>
          )}
        </div>

        {/* Honeypot: hidden from people and assistive tech, bots fill it in. */}
        <input
          className="rp-form__honeypot"
          type="text"
          name="website"
          value={values.website}
          onChange={update("website")}
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />

        <button type="submit" className="rp-form__submit">
          Start the quiz
        </button>

        <button
          type="button"
          className="story-box-reading-personality__back"
          onClick={onBack}
        >
          ← Back
        </button>
      </form>
    </motion.div>
  );
}
