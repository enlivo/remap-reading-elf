import { useEffect } from "react";
import { useMotionValue } from "motion/react";

import BooksNavigation from "../components/books/BooksNavigation.jsx";
import SiteFooter from "../components/SiteFooter.jsx";
import leafSprig from "../../assets/images/books-page/deco-leaf-sprig.png";
import waveGreen from "../../assets/images/books-page/deco-wave-green.png";
import {
  BOOK_OF_MONTH_CTA_SHELF,
  getBookOfMonth,
} from "../sections/books/bookOfMonthData.js";

/* per-book colours: accent for the title, which title line gets it, CTA band */
const THEMES = {
  "malgudi-schooldays": { line: 1 },
  "velveteen-rabbit": { line: 1 },
  "the-secret-garden": { line: 1 },
  "lion-witch-wardrobe": { line: 2 },
  "hungry-caterpillar": { line: 1 },
};

function Hero({ book, theme }) {
  const { hero } = book;

  return (
    <section className="book-hero">
      <div className="book-hero__inner">
        <div className="book-hero__cover">
          <img src={hero.cover} alt={`${book.card.title} cover`} />
          <img
            className="book-hero__leaf"
            src={leafSprig}
            alt=""
            aria-hidden="true"
          />
        </div>

        <div className="book-hero__copy">
          <p className="book-pill">{hero.badge}</p>

          <h1>
            {hero.title.map((line, index) => (
              <span
                key={line}
                className={index === theme.line ? "is-accent" : undefined}
              >
                {line}
              </span>
            ))}
          </h1>

          <p className="book-hero__author">{hero.author}</p>

          {hero.meta.length > 0 && (
            <div className="book-hero__meta">
              {hero.meta.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          )}

          {hero.paras.map((text) => (
            <p key={text} className="book-hero__text">
              {text}
            </p>
          ))}

          <a className="book-btn book-btn--back" href="/books">
            ← Back to all books
          </a>
        </div>
      </div>
    </section>
  );
}

function SectionHead({ title, subtitle }) {
  return (
    <div className="book-section__head">
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
}

function GridSection({ section, tone }) {
  const { variant, items } = section;

  return (
    <section className={`book-section book-section--${tone}`}>
      <div className="book-section__inner">
        <SectionHead title={section.title} subtitle={section.subtitle} />

        <div
          className={`book-grid book-grid--${variant}`}
          style={{ "--cols": items.length }}
        >
          {items.map((item) => (
            <article
              key={item.title}
              className={`book-card book-card--${variant}`}
            >
              {item.icon && (
                <span className="book-card__icon" aria-hidden="true">
                  {item.icon}
                </span>
              )}
              <div className="book-card__body">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                {item.text2 && (
                  <p className="book-card__example">{item.text2}</p>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureSection({ section, tone }) {
  return (
    <section className={`book-section book-feature book-section--${tone}`}>
      <div className="book-feature__inner">
        <img src={section.image} alt={section.title} />

        <div className="book-feature__copy">
          <h2>{section.title}</h2>
          {section.paras.map((text) => (
            <p key={text}>{text}</p>
          ))}
          {section.note && (
            <p className="book-feature__note">{section.note}</p>
          )}
        </div>
      </div>
    </section>
  );
}

function AuthorSection({ section, tone }) {
  return (
    <section className={`book-section book-author book-section--${tone}`}>
      <div className="book-author__card">
        <img
          className="book-author__photo"
          src={section.photo}
          alt={section.name}
        />

        <div className="book-author__copy">
          <h2>Meet {section.name}</h2>
          <p className="book-author__tagline">{section.tagline}</p>
          {section.paras.map((text) => (
            <p key={text}>{text}</p>
          ))}
          <div className="book-author__chips">
            {section.chips.map((chip) => (
              <span key={chip}>{chip}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SeriesSection({ section, tone }) {
  return (
    <section className={`book-section book-section--${tone}`}>
      <div className="book-section__inner">
        <SectionHead title={section.title} subtitle={section.subtitle} />

        <div
          className="book-series"
          style={{ "--cols": section.items.length }}
        >
          {section.items.map((item) => (
            <figure key={item.title} className="book-series__item">
              <div className="book-series__art">
                <img src={item.image} alt={item.alt || item.title} loading="lazy" />
              </div>
              <figcaption>
                <strong>{item.title}</strong>
                <span>{item.text}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaSection({ section, theme }) {
  return (
    <section className="book-cta">
      <img
        className="book-cta__wave"
        src={waveGreen}
        alt=""
        aria-hidden="true"
      />
      <div className="book-cta__inner">
        <h2>
          {section.title.map((line, index) => (
            <span
              key={line}
              className={index === 1 ? "is-accent" : undefined}
            >
              {line}{" "}
            </span>
          ))}
        </h2>
        <p>{section.text}</p>
        <a
          className="book-btn"
          href={section.href}
          target="_blank"
          rel="noreferrer"
        >
          {section.button}
        </a>
      </div>

      <img
        className="book-cta__shelf"
        src={BOOK_OF_MONTH_CTA_SHELF}
        alt=""
        aria-hidden="true"
      />
    </section>
  );
}

function renderSection(section, index, theme, tone) {
  switch (section.kind) {
    case "grid":
      return <GridSection key={index} section={section} tone={tone} />;
    case "feature":
      return <FeatureSection key={index} section={section} tone={tone} />;
    case "author":
      return <AuthorSection key={index} section={section} tone={tone} />;
    case "series":
      return <SeriesSection key={index} section={section} tone={tone} />;
    case "cta":
      return <CtaSection key={index} section={section} theme={theme} />;
    default:
      return null;
  }
}

export default function BookDetailPage({ slug }) {
  const book = getBookOfMonth(slug);
  const theme = THEMES[slug] ?? THEMES["malgudi-schooldays"];
  const stripY = useMotionValue(0);

  useEffect(() => {
    if (!book) {
      return undefined;
    }

    const previousTitle = document.title;
    document.title = `Book of the Month: ${book.card.title} | The Reading Elf`;

    const meta = document.querySelector('meta[name="description"]');
    const previousDescription = meta?.getAttribute("content");

    if (meta) {
      meta.setAttribute("content", book.metaDescription);
    }

    return () => {
      document.title = previousTitle;

      if (meta && previousDescription !== null) {
        meta.setAttribute("content", previousDescription);
      }
    };
  }, [book]);

  if (!book) {
    return null;
  }

  return (
    <>
      <main id="top" className="book-page">
        <BooksNavigation stripY={stripY} />

        <Hero book={book} theme={theme} />
        {book.sections.map((section, index) =>
          renderSection(
            section,
            index,
            theme,
            index % 2 === 0 ? "cream" : "peach",
          ),
        )}
      </main>

      <SiteFooter />
    </>
  );
}
