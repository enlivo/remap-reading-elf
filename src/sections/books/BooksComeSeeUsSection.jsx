import { motion } from "framer-motion";

export default function BooksComeSeeUsSection() {
  return (
    <section
      className="books-come-see-us"
      aria-labelledby="books-come-see-us-title"
    >
      <motion.div
        className="books-come-see-us__inner"
        initial={{
          opacity: 0,
          y: 28,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.45,
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
        <h2 id="books-come-see-us-title">
          <span className="books-come-see-us__cream">
            Come
          </span>{" "}
          <span className="books-come-see-us__gold">
            See Us!
          </span>
        </h2>

        <p>
          <span className="books-come-see-us__cream">
            Thoraipakkam,
          </span>{" "}
          <span className="books-come-see-us__gold">
            Chennai
          </span>
        </p>
      </motion.div>
    </section>
  );
}
