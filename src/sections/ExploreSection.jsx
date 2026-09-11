import { motion } from "motion/react";

import booksCard from "../../assets/images/card-books.png";
import storyBoxCard from "../../assets/images/card-storybox.png";
import experienceCard from "../../assets/images/card-experience.png";
import eventsCard from "../../assets/images/card-events.png";

const cards = [
  {
    href: "/books",
    image: booksCard,
    alt: "Books you won't find just anywhere.",
  },
  {
    href: "/story-box",
    image: storyBoxCard,
    alt: "Their next story starts here.",
  },
  {
    href: "/experience",
    image: experienceCard,
    alt: "More than a bookstore. A place to belong.",
  },
  {
    href: "/events",
    image: eventsCard,
    alt: "Stories don't just live on shelves here.",
  },
];

export default function ExploreSection({ staged = false }) {
  return (
    <section
      className="explore-section"
      aria-label="Explore The Reading Elf"
    >
      <div className="explore-grid">
        {cards.map((card, index) => (
          <motion.a
            key={card.href}
            href={card.href}
            className="explore-card"
            initial={staged ? false : {
              opacity: 0,
              y: 55,
            }}
            whileInView={staged ? undefined : {
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.65,
              delay: index * 0.06,
              ease: [
                0.22,
                1,
                0.36,
                1,
              ],
            }}
            whileHover={{
              y: -5,
            }}
          >
            <img
              src={card.image}
              alt={card.alt}
            />
          </motion.a>
        ))}
      </div>
    </section>
  );
}
