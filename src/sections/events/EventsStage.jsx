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

import readUnderStarsImage from "../../../assets/images/events-page/read-under-the-stars.webp";
import childrensDayImage from "../../../assets/images/events-page/childrens-day-storytelling.webp";
import soundAndSpellImage from "../../../assets/images/events-page/sound-and-spell-safari.webp";

/*
 * The main screen is taller than the viewport so the heading and all event
 * cards fit. Scrolling first reveals the extra height, then the footer
 * rises. Must match .events-main-screen height and .events-stage-runway
 * height (100 + EVENTS_MAIN_HEIGHT) in events.css. Each card adds its own
 * min-height (62svh) plus the gap between cards (4svh) to this total.
 */
const EVENTS_MAIN_HEIGHT = 262;
const EXTRA_RATIO = (EVENTS_MAIN_HEIGHT - 100) / EVENTS_MAIN_HEIGHT;

const EVENTS = [
  {
    slug: "childrens-day-storytelling",
    title: "Children's Day Special Storytelling",
    host: "Storytelling by Nagarajan S.",
    description:
      "A little magic, a lot of stories! Celebrate Children's Day with two delightful dragon adventures filled with imagination, laughter and fun.",
    featuring: [
      "Dragon Rock – Written by Elena Ashley",
      "Rugby, My Pet Dragon – Written by Nagarajan S.",
    ],
    details: [
      ["Date", "14 November 2026"],
      ["Time", "5:30 PM onwards"],
      ["Age group", "Ages 5 and above"],
      ["Entry fee", "Free Entry"],
    ],
    note: "Let's celebrate childhood, one story at a time! ✨",
    venue: "Reading Elf Rooftop, Thoraipakkam, Chennai",
    phone: "95000 56482",
    image: childrensDayImage,
    imageAlt: "A storyteller tells a dragon story to children on a lantern-lit rooftop.",
    registrationUrl: `https://wa.me/919500056482?text=${encodeURIComponent(
      "Hi! I'd like to register for Children's Day Special Storytelling on 14 November.",
    )}`,
  },
  {
    slug: "read-under-the-stars",
    title: "Read Under the Stars",
    host: "A Rooftop Reading Experience at The Reading Elf",
    description:
      "A quiet rooftop reading evening where book lovers can pick a book, find a cosy spot, and enjoy reading under the stars.",
    details: [
      ["Dates", "20, 21 & 22 November"],
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
      "Hi! I'd like to book a spot for Read Under the Stars (20-22 November).",
    )}`,
  },
  {
    slug: "sound-and-spell-safari",
    title: "Sound & Spell Safari",
    host: "With Bhagirathi Sivamani · Sound-to-Word Mastery",
    description:
      "Where letters turn into words and words come alive. Join us for an engaging learning experience exploring phonics, spelling and grammar.",
    details: [
      ["Date", "5 December 2026"],
      ["Time", "5:00 PM onwards"],
      ["Age group", "Ages 5+"],
      ["Entry fee", "₹699 per child"],
    ],
    highlight: "Parents are also welcome!",
    venue: "Reading Elf, Thoraipakkam, Chennai",
    phone: "95000 56482",
    image: soundAndSpellImage,
    imageAlt: "A teacher reads from a glowing book as letters float up, with children listening on a sunny terrace.",
    registrationUrl: `https://wa.me/919500056482?text=${encodeURIComponent(
      "Hi! I'd like to register for Sound & Spell Safari on 5 December.",
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

                  {event.featuring && (
                    <p className="events-main__desc">
                      <strong>Featuring:</strong>
                      <br />
                      {event.featuring.map((item, index) => (
                        <span key={item}>
                          {item}
                          {index < event.featuring.length - 1 && <br />}
                        </span>
                      ))}
                    </p>
                  )}

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

                  {event.note && <p className="events-main__note">{event.note}</p>}
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
