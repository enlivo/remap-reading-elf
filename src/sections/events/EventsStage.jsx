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

import greenBurst from "../../../design-assets/Website/Events/Elements of Events/2.png";
import peachBurst from "../../../design-assets/Website/Events/Elements of Events/1.png";
import redBurst from "../../../design-assets/Website/Events/Elements of Events/3.png";

import booStorytimeImage from "../../../assets/images/events-page/boo-storytime.webp";
import readUnderStarsImage from "../../../assets/images/events-page/read-under-the-stars.webp";

/*
 * The main screen is taller than the viewport so the heading and both event
 * cards fit. Scrolling first reveals the extra height, then the footer
 * rises. Must match .events-main-screen height and .events-stage-runway
 * height (100 + EVENTS_MAIN_HEIGHT) in events.css.
 */
const EVENTS_MAIN_HEIGHT = 196;
const EXTRA_RATIO = (EVENTS_MAIN_HEIGHT - 100) / EVENTS_MAIN_HEIGHT;

const EVENTS = [
  {
    slug: "read-under-the-stars",
    title: "Read Under the Stars",
    host: "A Rooftop Reading Experience at The Reading Elf",
    description:
      "A quiet rooftop reading evening where book lovers can pick a book, find a cosy spot, and enjoy reading under the stars.",
    details: [
      ["Dates", "24, 25 & 26 October · Launch Week"],
      ["Time", "6:00 PM – 8:30 PM"],
      ["Age group", "8 years and above"],
      ["Entry fee", "₹500 per person"],
    ],
    highlight: "Exclusively for Book Passport holders",
    note: "Pick a book. Find a spot. Simply read. ✨",
    venue: "Rooftop, The Reading Elf, Thoraipakkam, Chennai",
    phone: "95000 56482",
    image: readUnderStarsImage,
    imageAlt: "Families reading on a lantern-lit rooftop under a starry night sky.",
    registrationUrl: `https://wa.me/919500056482?text=${encodeURIComponent(
      "Hi! I'd like to book a spot for Read Under the Stars (24-26 October).",
    )}`,
  },
  {
    slug: "boo-storytime",
    title: "Boo! It's Storytime!",
    host: "Story Time with Gauri Bhargav",
    description:
      "A spooky storytelling adventure where little readers dress up as their favourite characters, join an interactive story session, and enjoy a little Halloween magic.",
    details: [
      ["Date", "31 October"],
      ["Time", "6:00 PM onwards"],
      ["Age group", "4 years and above"],
      ["Entry fee", "₹600 per child"],
    ],
    note: "Come dressed as your favourite character and step into the story! 🎃",
    venue: "Rooftop, The Reading Elf, Thoraipakkam, Chennai",
    phone: "95000 56482",
    image: booStorytimeImage,
    imageAlt: "A storyteller in a witch hat reads to children in Halloween costumes on a lantern-lit rooftop.",
    registrationUrl: `https://wa.me/919500056482?text=${encodeURIComponent(
      "Hi! I'd like to register my child for Boo! It's Storytime on 31 October.",
    )}`,
  },
];

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
    [0, EXTRA_RATIO, 1],
    ["0svh", `-${EVENTS_MAIN_HEIGHT - 100}svh`, `-${EVENTS_MAIN_HEIGHT}svh`],
  );

  const footerY = useTransform(
    scrollYProgress,
    [0, EXTRA_RATIO, 1],
    ["100svh", "100svh", "0svh"],
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
              Stories don&rsquo;t just
              <br />
              live on shelves here.
            </h1>

            <p>
              Workshops, author sessions, and one-day experiences.
              Something to look forward to, always.
            </p>
          </header>

          <div className="events-main__cards">
            {EVENTS.map((event) => (
              <article className="events-main__card" key={event.slug}>
                <div className="events-main__card-body">
                  <h2>{event.title}</h2>
                  <p className="events-main__host">{event.host}</p>
                  <p className="events-main__desc">{event.description}</p>

                  <dl className="events-main__chips">
                    {event.details.map(([label, value]) => (
                      <div className="events-main__chip" key={label}>
                        <dt>{label}</dt>
                        <dd>{value}</dd>
                      </div>
                    ))}

                    {event.highlight && (
                      <div className="events-main__chip events-main__chip--highlight">
                        <dt>Highlight</dt>
                        <dd>{event.highlight}</dd>
                      </div>
                    )}
                  </dl>

                  <p className="events-main__note">{event.note}</p>
                  <p className="events-main__venue">
                    <strong>Venue:</strong> {event.venue}
                  </p>

                  <a
                    className="events-main__register"
                    href={event.registrationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Register on WhatsApp &middot; {event.phone}
                  </a>
                </div>

                <img
                  className="events-main__card-image"
                  src={event.image}
                  alt={event.imageAlt}
                  width="960"
                  height="960"
                />
              </article>
            ))}
          </div>
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
