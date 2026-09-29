import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "motion/react";

import {
  BOOK_FILTERS,
  getBooksForFilter,
  getAllBookGroups,
} from "./booksCollectionData.js";

import decoWaveBlue from "../../../assets/images/books-page/deco-wave-blue.png";
import decoWaveGreen from "../../../assets/images/books-page/deco-wave-green.png";
import decoSwooshGold from "../../../assets/images/books-page/deco-swoosh-gold.png";
import decoSwooshCream from "../../../assets/images/books-page/deco-swoosh-cream.png";

const MONTH_TILTS = [1, 2, -2, 3, -3];

function MonthBookCard({ item, index }) {
  const monthKey = item.badge.toLowerCase();
  const tilt = MONTH_TILTS[index % MONTH_TILTS.length];

  return (
    <article className="month-card">
      <a
        className="month-card__art"
        href={`/books/${item.slug}`}
        aria-label={`Explore ${item.title}`}
        tabIndex={-1}
      >
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          style={{ "--tilt": `${tilt}deg` }}
        />
      </a>

      <p
        className={`month-card__pill month-card__pill--${monthKey}`}
      >
        {item.badge}
      </p>

      <h3>{item.title}</h3>
      <p className="month-card__author">
        By {item.author}
      </p>
      <p className="month-card__desc">
        {item.description}
      </p>

      <a
        className="month-card__cta"
        href={`/books/${item.slug}`}
      >
        EXPLORE THIS BOOK →
      </a>
    </article>
  );
}

function BookCard({ item }) {
  const cardClassName = [
    "books-product-card",
    item.badge
      ? "books-product-card--month"
      : "",
    item.type === "product"
      ? "books-product-card--companion"
      : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <article className={cardClassName}>
      <div className="books-product-card__art">
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
        />
      </div>

      <div className="books-product-card__copy">
        <h3>{item.title}</h3>

        {item.type !== "product" &&
          item.author && (
            <p className="books-product-card__author">
              {item.author}
            </p>
          )}

        {typeof item.price === "number" && (
          <p className="books-product-card__price">
            Rs.{item.price}
          </p>
        )}

        {item.badge && (
          <p className="books-product-card__badge">
            {item.badge}
          </p>
        )}
      </div>
    </article>
  );
}

function CollectionDecorations() {
  return (
    <>
      <img
        className="
          books-collection-deco
          books-collection-deco--wave-blue
        "
        src={decoWaveBlue}
        alt=""
        aria-hidden="true"
      />

      <img
        className="
          books-collection-deco
          books-collection-deco--gold
        "
        src={decoSwooshGold}
        alt=""
        aria-hidden="true"
      />

      <img
        className="
          books-collection-deco
          books-collection-deco--cream
        "
        src={decoSwooshCream}
        alt=""
        aria-hidden="true"
      />

      <img
        className="
          books-collection-deco
          books-collection-deco--wave-green
        "
        src={decoWaveGreen}
        alt=""
        aria-hidden="true"
      />
    </>
  );
}

function isMonthGrid(items) {
  return (
    items.length > 0 &&
    items.every(
      (item) => item.type === "book-of-month",
    )
  );
}

function renderCards(items) {
  return items.map((item, index) =>
    item.type === "book-of-month" ? (
      <MonthBookCard
        key={item.id}
        item={item}
        index={index}
      />
    ) : (
      <BookCard key={item.id} item={item} />
    ),
  );
}

function gridClassName(items) {
  return [
    "books-product-grid",
    isMonthGrid(items)
      ? "books-product-grid--month"
      : "",
    items.length === 4
      ? "books-product-grid--four"
      : "",
  ]
    .filter(Boolean)
    .join(" ");
}

function AnimatedBookGrid({
  items,
  animationKey,
  prefersReducedMotion,
}) {
  return (
    <motion.div
      key={animationKey}
      className={gridClassName(items)}
      initial={
        prefersReducedMotion
          ? false
          : {
              opacity: 0,
              y: 12,
            }
      }
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={
        prefersReducedMotion
          ? undefined
          : {
              opacity: 0,
              y: -8,
            }
      }
      transition={{
        duration:
          prefersReducedMotion
            ? 0
            : 0.28,
        ease: [
          0.22,
          1,
          0.36,
          1,
        ],
      }}
    >
      {renderCards(items)}
    </motion.div>
  );
}

function EmptyCollection({
  activeFilter,
  prefersReducedMotion,
}) {
  return (
    <motion.div
      key={`empty-${activeFilter}`}
      className="books-collection-empty"
      initial={
        prefersReducedMotion
          ? false
          : {
              opacity: 0,
            }
      }
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
    >
      <p>
        More picks for this collection
        are on the way — check back soon!
      </p>
    </motion.div>
  );
}

function CatalogFilterDock({
  activeFilter,
  onFilterChange,
}) {
  return (
    <nav
      className="books-catalog-filter-dock"
      aria-label="Book collection categories"
    >
      <div
        className="
          books-collection-intro__filters
          books-catalog-filter-dock__filters
        "
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
                onFilterChange?.(
                  filter.id,
                )
              }
            >
              {filter.label}
            </button>
          ),
        )}
      </div>
    </nav>
  );
}

export default function BooksCollectionBrowser({
  activeFilter,
  onFilterChange,
  staged = false,
}) {
  const prefersReducedMotion =
    useReducedMotion();

  const books =
    getBooksForFilter(activeFilter);

  /*
   * The pinned Hero / Collection camera owns only the
   * Collection introduction and its transition.
   *
   * Product rows deliberately begin AFTER that camera.
   * This keeps Book by Month out of the Collection rectangle.
   */
  if (staged) {
    return null;
  }

  const allGroups =
    getAllBookGroups();

  const isAll =
    activeFilter === "all";

  return (
    <section
      className="
        books-collection-browser
        books-collection-browser--catalog
      "
      aria-label="Book collection results"
    >
      <CatalogFilterDock
        activeFilter={activeFilter}
        onFilterChange={
          onFilterChange
        }
      />

      <div
        className="
          books-collection-browser__inner
          books-collection-browser__inner--catalog
        "
      >
        <CollectionDecorations />

        <AnimatePresence
          mode="wait"
          initial={false}
        >
          {isAll ? (
            <motion.div
              key="catalog-all"
              className="books-all-groups"
              initial={
                prefersReducedMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 12,
                    }
              }
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={
                prefersReducedMotion
                  ? undefined
                  : {
                      opacity: 0,
                      y: -8,
                    }
              }
              transition={{
                duration:
                  prefersReducedMotion
                    ? 0
                    : 0.28,
                ease: [
                  0.22,
                  1,
                  0.36,
                  1,
                ],
              }}
            >
              {allGroups.map(
                (group) => (
                  <section
                    key={group.id}
                    className="books-all-group"
                  >
                    <h2 className="books-all-group__title">
                      {group.label}
                    </h2>

                    <div
                      className={
                        gridClassName(
                          group.books,
                        )
                      }
                    >
                      {renderCards(group.books)}
                    </div>
                  </section>
                ),
              )}
            </motion.div>
          ) : books.length > 0 ? (
            <AnimatedBookGrid
              items={books}
              animationKey={
                `catalog-${activeFilter}`
              }
              prefersReducedMotion={
                prefersReducedMotion
              }
            />
          ) : (
            <EmptyCollection
              activeFilter={
                activeFilter
              }
              prefersReducedMotion={
                prefersReducedMotion
              }
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
