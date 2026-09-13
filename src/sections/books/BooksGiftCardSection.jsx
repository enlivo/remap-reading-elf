import { motion } from "framer-motion";
import giftCardGraphic from "../../../assets/images/books-page/gift-card-graphic.png";
import decoSwooshGold from "../../../assets/images/books-page/deco-swoosh-gold.png";
import decoSwooshNavy from "../../../assets/images/books-page/deco-swoosh-navy.png";

export default function BooksGiftCardSection() {
  return (
    <section
      className="books-gift-card-section"
      aria-labelledby="books-gift-card-title"
    >
      <img
        className="books-gift-card-prop books-gift-card-prop--gold-left"
        src={decoSwooshGold}
        alt=""
        aria-hidden="true"
      />

      <img
        className="books-gift-card-prop books-gift-card-prop--navy-top"
        src={decoSwooshNavy}
        alt=""
        aria-hidden="true"
      />

      <img
        className="books-gift-card-prop books-gift-card-prop--navy-bottom"
        src={decoSwooshNavy}
        alt=""
        aria-hidden="true"
      />

      <motion.div
        className="books-gift-card"
        initial={{
          opacity: 0,
          y: 28,
          scale: 0.985,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        viewport={{
          once: true,
          amount: 0.28,
        }}
        transition={{
          duration: 0.55,
          ease: [
            0.22,
            1,
            0.36,
            1,
          ],
        }}
      >
        <div className="books-gift-card__copy">
          <h2 id="books-gift-card-title">
            Gift Card
          </h2>

          <p>
            Give the gift of wonder — our Gift Card
            unlocks access to curated collections of
            extraordinary experiences.
          </p>

          <a
            className="books-gift-card__cta"
            href="tel:+919500056482"
          >
            Ask in Store
          </a>
        </div>

        <div
          className="books-gift-card__art"
          aria-hidden="true"
        >
          <img
            src={giftCardGraphic}
            alt=""
          />
        </div>
      </motion.div>
    </section>
  );
}
