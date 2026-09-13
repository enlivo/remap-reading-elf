import { motion } from "framer-motion";

import pocketJournal from "../../../assets/images/books-page/gifts-collectibles-pocket-journal.png";
import spotsGoodnight from "../../../assets/images/books-page/gifts-collectibles-spots-says-goodnight.png";
import greenElf from "../../../assets/images/books-page/gifts-collectibles-green-elf.png";
import rabbitHeadphones from "../../../assets/images/books-page/gifts-collectibles-rabbit-with-headphones.png";
import decoSwooshBlue from "../../../assets/images/books-page/deco-swoosh-blue.png";
import decoSwooshCream from "../../../assets/images/books-page/deco-swoosh-cream.png";

const GIFTS = [
  {
    id: "pocket-journal",
    title: "The Reading Elf Pocket Journal",
    price: "Rs.125",
    image: pocketJournal,
    alt: "The Reading Elf Pocket Journal",
  },
  {
    id: "spots-goodnight",
    title: "Spots says Goodnight!",
    price: "Rs.899",
    image: spotsGoodnight,
    alt: "Spot Says Goodnight book and toy gift set",
  },
  {
    id: "green-elf",
    title: "Green Elf",
    price: "Rs.942",
    image: greenElf,
    alt: "Green Elf crochet doll",
  },
  {
    id: "rabbit-headphones",
    title: "Rabbit With Headphones",
    price: "Rs.895",
    image: rabbitHeadphones,
    alt: "Rabbit With Headphones crochet doll",
  },
];

export default function BooksGiftsCollectiblesSection() {
  return (
    <section
      className="books-gifts"
      aria-labelledby="books-gifts-title"
    >
      <img
        className="books-gifts__prop books-gifts__prop--blue"
        src={decoSwooshBlue}
        alt=""
        aria-hidden="true"
      />

      <img
        className="books-gifts__prop books-gifts__prop--cream"
        src={decoSwooshCream}
        alt=""
        aria-hidden="true"
      />

      <div className="books-gifts__inner">
        <motion.h2
          id="books-gifts-title"
          className="books-gifts__title"
          initial={{
            opacity: 0,
            y: 22,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.5,
          }}
          transition={{
            duration: 0.5,
            ease: [
              0.22,
              1,
              0.36,
              1,
            ],
          }}
        >
          Gifts &amp; Collectibles
        </motion.h2>

        <div className="books-gifts__grid">
          {GIFTS.map((gift, index) => (
            <motion.article
              key={gift.id}
              className="books-gifts__item"
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
                duration: 0.5,
                delay: index * 0.07,
                ease: [
                  0.22,
                  1,
                  0.36,
                  1,
                ],
              }}
            >
              <div className="books-gifts__image-wrap">
                <img
                  src={gift.image}
                  alt={gift.alt}
                />
              </div>

              <h3>
                {gift.title}
              </h3>

              <p>
                {gift.price}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
