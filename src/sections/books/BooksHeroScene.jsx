import { useRef } from "react";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";

import BooksNavigation from "../../components/books/BooksNavigation.jsx";

import heroIllustration from "../../../assets/images/books-page/hero-bookstore-illustration.jpg";
import logoBadge from "../../../assets/images/books-page/logo-badge.png";
import leafSprig from "../../../assets/images/books-page/deco-leaf-sprig.png";

const collectionFilters = [
  "All",
  "Fan Favorites",
  "Book by Month",
  "For Grown-Ups",
  "Store Exclusive",
  "Hardcover",
  "Collections",
  "Story Companion",
];

export default function BooksHeroScene() {
  const sceneRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sceneRef,
    offset: [
      "start start",
      "end end",
    ],
  });

  const sheetY = useTransform(
    scrollYProgress,
    [
      0,
      0.16,
      0.72,
      1,
    ],
    [
      "94svh",
      "94svh",
      "48svh",
      "48svh",
    ],
  );

  const heroScale = useTransform(
    scrollYProgress,
    [
      0,
      1,
    ],
    [
      1,
      1.025,
    ],
  );

  return (
    <section
      ref={sceneRef}
      className="books-hero-scene"
      aria-label="Discover your next adventure"
    >
      <div className="books-hero-scene__sticky">
        <motion.img
          className="books-hero-scene__background"
          src={heroIllustration}
          alt=""
          aria-hidden="true"
          style={{
            scale:
              prefersReducedMotion
                ? 1
                : heroScale,
          }}
        />

        <div
          className="books-hero-scene__shade"
          aria-hidden="true"
        />

        <BooksNavigation />

        <div className="books-hero-scene__heading">
          <h1>
            <span>Discover Your</span>
            <strong>Next Adventure</strong>
          </h1>
        </div>

        <div
          className="books-hero-scene__copy-band"
          aria-hidden="true"
        />

        <p className="books-hero-scene__description">
          From curious beginners to confident readers,
          <br />
          find books that inspire imagination and create lasting memories.
        </p>

        <motion.div
          className="books-collection-reveal"
          style={{
            y:
              prefersReducedMotion
                ? "48svh"
                : sheetY,
          }}
        >
          <div className="books-picks-strip">
            <div className="books-picks-strip__items">
              <a
                className="books-pick books-pick--adhruth"
                href="#collection"
              >
                Adhruth's Picks
              </a>

              <a
                className="books-pick books-pick--shweta"
                href="#collection"
              >
                Shweta's Picks
              </a>

              <a
                className="books-pick books-pick--sanu"
                href="#collection"
              >
                Sanu's Picks
              </a>
            </div>

            <img
              className="books-picks-strip__badge"
              src={logoBadge}
              alt="The Reading Elf"
            />
          </div>

          <section
            id="collection"
            className="books-collection-intro"
          >
            <div className="books-collection-intro__content">
              <div className="books-collection-intro__eyebrow">
                <img
                  src={leafSprig}
                  alt=""
                  aria-hidden="true"
                />

                <span>The Collection</span>

                <img
                  src={leafSprig}
                  alt=""
                  aria-hidden="true"
                />
              </div>

              <h2>
                Books you won't find
                <br />
                just anywhere.
              </h2>

              <p>
                Every book here was handpicked by Shweta—
                for every child, every story, every stage.
              </p>

              <div
                className="books-collection-intro__filters"
                aria-label="Book collection categories"
              >
                {collectionFilters.map((filter) => (
                  <button
                    key={filter}
                    type="button"
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>
          </section>
        </motion.div>
      </div>
    </section>
  );
}
