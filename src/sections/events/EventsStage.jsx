import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { useRef } from "react";

import EventsNavigation from "../../components/events/EventsNavigation.jsx";
import EventsFooter from "./EventsFooter.jsx";

import stripLogo from "../../../assets/images/events-page/strip-logo.png";
import eventPanel from "../../../design-assets/Website/Events/Salt of Freedom.webp";

import greenBurst from "../../../design-assets/Website/Events/Elements of Events/2.png";
import peachBurst from "../../../design-assets/Website/Events/Elements of Events/1.png";
import redBurst from "../../../design-assets/Website/Events/Elements of Events/3.png";

export default function EventsStage() {
  const sceneRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sceneRef,
    offset: ["start start", "end end"],
  });

  /*
   * Prototype contract:
   *
   * forward:
   * the Events composition travels upward while the footer
   * rises into the viewport from below.
   *
   * reverse:
   * the footer moves back down and Events returns from above.
   *
   * Both screens share the same scroll-derived transition
   * range so there is no gap between them and the movement
   * remains fully reversible.
   */
  const eventsY = useTransform(
    scrollYProgress,
    [0, 0.43, 0.63, 1],
    ["0svh", "0svh", "-100svh", "-100svh"],
  );

  const footerY = useTransform(
    scrollYProgress,
    [0, 0.43, 0.63, 1],
    ["100svh", "100svh", "0svh", "0svh"],
  );

  return (
    <section
      ref={sceneRef}
      className="events-stage-runway"
      aria-label="Reading Elf events"
    >
      <div className="events-stage">
        <EventsNavigation />

        <motion.section
          className="events-screen events-main-screen"
          style={
            prefersReducedMotion
              ? undefined
              : { y: eventsY }
          }
        >
          <div
            className="events-main__strip"
            aria-hidden="true"
          >
            <img src={stripLogo} alt="" />
          </div>

          <div
            className="events-main__decorations"
            aria-hidden="true"
          >
            <img
              className="events-main__burst events-main__burst--green"
              src={greenBurst}
              alt=""
            />

            <img
              className="events-main__burst events-main__burst--peach"
              src={peachBurst}
              alt=""
            />

            <img
              className="events-main__burst events-main__burst--red"
              src={redBurst}
              alt=""
            />
          </div>

          <header className="events-main__intro">
            <h1>
              Stories don’t just
              <br />
              live on shelves here.
            </h1>

            <p>
              Workshops, author sessions, and one-day experiences.
              Something to look forward to, always.
            </p>
          </header>

          <article className="events-main__card">
            <img
              src={eventPanel}
              alt="Salt of Freedom by Divya Ravi. A joyful experience designed to let young minds create, feel, explore and take home their own masterpiece. 29 August, 5 PM, ages 5 to 10, Rs. 950."
            />
          </article>
        </motion.section>

        <motion.section
          className="events-screen events-footer-screen"
          style={
            prefersReducedMotion
              ? undefined
              : { y: footerY }
          }
        >
          <EventsFooter />
        </motion.section>
      </div>
    </section>
  );
}
