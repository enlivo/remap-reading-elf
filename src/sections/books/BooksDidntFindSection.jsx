import { motion } from "framer-motion";

export default function BooksDidntFindSection() {
  return (
    <section
      className="books-didnt-find"
      aria-labelledby="books-didnt-find-title"
    >
      <motion.div
        className="books-didnt-find__inner"
        initial={{
          opacity: 0,
          y: 26,
          scale: 0.99,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        viewport={{
          once: true,
          amount: 0.4,
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
        <h2 id="books-didnt-find-title">
          <span className="books-didnt-find__cream">
            Didn't
          </span>{" "}
          <span className="books-didnt-find__gold">
            Find
          </span>

          <br />

          <span className="books-didnt-find__cream">
            What you were
          </span>{" "}
          <span className="books-didnt-find__gold">
            looking for?
          </span>
        </h2>

        <a
          className="books-didnt-find__cta"
          href="https://wa.me/919500056482?text=Hi!%20I'm%20looking%20for%20a%20book%20I%20couldn't%20find%20on%20your%20site."
          target="_blank"
          rel="noopener noreferrer"
        >
          Chat with us on WhatsApp
        </a>
      </motion.div>
    </section>
  );
}
