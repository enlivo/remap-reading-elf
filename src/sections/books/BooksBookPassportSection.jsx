import { motion } from "framer-motion";
import bookPassportGraphic from "../../../assets/images/books-page/book-passport-graphic.png";
import decoSwooshCream from "../../../assets/images/books-page/deco-swoosh-cream.png";
import decoWaveBlue from "../../../assets/images/books-page/deco-wave-blue.png";

export default function BooksBookPassportSection() {
  return (
    <section
      className="books-book-passport-section"
      aria-labelledby="books-book-passport-title"
    >
      <img
        className="books-book-passport-prop books-book-passport-prop--cream"
        src={decoSwooshCream}
        alt=""
        aria-hidden="true"
      />

      <img
        className="books-book-passport-prop books-book-passport-prop--blue"
        src={decoWaveBlue}
        alt=""
        aria-hidden="true"
      />

      <motion.div
        className="books-book-passport"
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
        <div className="books-book-passport__copy">
          <h2 id="books-book-passport-title">
            Book Passport
          </h2>

          <p>
            Don't ask for a Discount—ask for your
            Book Passport instead.
          </p>

          <p className="books-book-passport__prompt">
            Ask for{" "}
            <strong>
              Book Passport
            </strong>{" "}
            at the counter!
          </p>
        </div>

        <div className="books-book-passport__art">
          <img
            src={bookPassportGraphic}
            alt="The Reading Elf Book Passport rewards card"
          />
        </div>
      </motion.div>
    </section>
  );
}
