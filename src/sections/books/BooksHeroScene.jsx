import {
  useRef,
} from "react";

import {
  motion,
  useReducedMotion,
  useTransform,
} from "motion/react";

import BooksNavigation from "../../components/books/BooksNavigation.jsx";

import BooksCollectionBrowser from "./BooksCollectionBrowser.jsx";

import {
  BOOK_FILTERS,
} from "./booksCollectionData.js";

import useBooksComposition from "./useBooksComposition.js";
import useBooksScrollTimeline from "./useBooksScrollTimeline.js";

import heroIllustration from "../../../assets/images/books-page/hero-bookstore-illustration.jpg";
import leafSprig from "../../../assets/images/books-page/deco-leaf-sprig.png";

export default function BooksHeroScene({
  activeFilter,
  onFilterChange,
}) {
  const sceneRef =
    useRef(null);

  const stageRef =
    useRef(null);

  const prefersReducedMotion =
    useReducedMotion();

  const {
    geometry,
    progress,
    mode,
    isReducedStatic,
  } =
    useBooksScrollTimeline(
      sceneRef,
      stageRef,
      prefersReducedMotion,
    );

  const composition =
    useBooksComposition(
      progress,
      mode,
    );

  const picksDockPointerEvents = useTransform(
    composition.redSurfaceOpacity,
    (value) => (value > 0.5 ? "auto" : "none"),
  );

  return (
    <>
      <section
        ref={sceneRef}
        className={
          isReducedStatic
            ? "books-hero-scene books-hero-scene--static"
            : "books-hero-scene"
        }
        data-books-mode={mode}
        aria-label="Discover your next adventure"
        style={
          geometry.height &&
          !isReducedStatic
            ? {
                height:
                  geometry.height +
                  geometry.runway,
              }
            : undefined
        }
      >
        <div
          ref={stageRef}
          className="books-hero-scene__sticky"
        >
          <motion.div
            className="books-hero-scene__hero-layer"
            style={
              isReducedStatic
                ? undefined
                : {
                    opacity:
                      composition
                        .heroOpacity,
                  }
            }
          >
            <motion.img
              className="books-hero-scene__background"
              src={heroIllustration}
              alt=""
              aria-hidden="true"
              style={{
                scale:
                  prefersReducedMotion
                    ? 1
                    : composition
                        .heroScale,
              }}
            />

            <div
              className="books-hero-scene__shade"
              aria-hidden="true"
            />

            <div className="books-hero-scene__heading">
              <h1>
                <span>
                  Discover Your
                </span>

                <strong>
                  Next Adventure
                </strong>
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
          </motion.div>

          <motion.div
            className="books-hero-scene__red-surface"
            aria-hidden="true"
            style={
              isReducedStatic
                ? undefined
                : {
                    opacity:
                      composition
                        .redSurfaceOpacity,
                  }
            }
          />

          <motion.section
            id="collection"
            className="books-collection-intro books-collection-intro--staged"
            style={
              isReducedStatic
                ? undefined
                : {
                    y:
                      composition
                        .introY,
                  }
            }
          >
            <div className="books-collection-intro__content">
              <div className="books-collection-intro__eyebrow">
                <img
                  src={leafSprig}
                  alt=""
                  aria-hidden="true"
                />

                <span>
                  The Collection
                </span>

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
                role="tablist"
                aria-label="Book collection categories"
              >
                {BOOK_FILTERS.map(
                  (filter) => (
                    <button
                      key={filter.id}
                      type="button"
                      role="tab"
                      aria-selected={
                        activeFilter ===
                        filter.id
                      }
                      aria-pressed={
                        activeFilter ===
                        filter.id
                      }
                      onClick={() =>
                        onFilterChange(
                          filter.id,
                        )
                      }
                    >
                      {filter.label}
                    </button>
                  ),
                )}
              </div>
            </div>
          </motion.section>

          <motion.div
            className="books-hero-scene__products-layer"
            style={
              isReducedStatic
                ? undefined
                : {
                    y:
                      composition
                        .productsY,

                    opacity:
                      composition
                        .productsOpacity,
                  }
            }
          >
            <BooksCollectionBrowser
              activeFilter={
                activeFilter
              }
              staged
            />
          </motion.div>
        </div>
      </section>

      <BooksNavigation
        stripY={
          composition.stripY
        }
      />

      <motion.div
        className="books-picks-dock"
        style={
          isReducedStatic
            ? undefined
            : {
                opacity: composition.redSurfaceOpacity,
                pointerEvents: picksDockPointerEvents,
              }
        }
      >
        <div className="books-picks-strip">
          <div className="books-picks-strip__items">
            <a className="books-pick books-pick--adhruth" href="/our-story#adhruth-picks">
              Adhruth&apos;s Picks
            </a>
            <a className="books-pick books-pick--shweta" href="/our-story#shweta-picks">
              Shweta&apos;s Picks
            </a>
            <a className="books-pick books-pick--sanu" href="/our-story#sunaina-picks">
              Sunaina&apos;s Picks
            </a>
          </div>
        </div>
      </motion.div>
    </>
  );
}
