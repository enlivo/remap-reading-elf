import { motion, useTransform } from "motion/react";
import heroIllustration from "../../assets/images/hero-illustration.png";
import eventNews from "../../design-assets/Website/Landing Page/Event News.png";
import monthlyBest from "../../design-assets/Website/Landing Page/Monthly Best Quick Link.png";

export default function HeroSection({ progress }) {
  const headlineY = useTransform(progress, [0, 1], ["0vw", "4.9479vw"]);
  const paragraphY = useTransform(progress, [0, 1], ["0vw", "3.125vw"]);
  const promotionOpacity = useTransform(progress, [0, 1], [1, 0]);
  const promotionVisibility = useTransform(progress, (p) => p >= 1 ? "hidden" : "visible");

  return (
    <section className="landing-hero" aria-label="Welcome to The Reading Elf">
      <img className="landing-hero__art" src={heroIllustration} alt="" aria-hidden="true" />
      <motion.a href="/events" className="landing-hero__event"
        style={{ opacity: promotionOpacity, visibility: promotionVisibility }}>
        <img src={eventNews} alt="Event News" />
      </motion.a>
      <motion.h1 className="landing-hero__headline" style={{ y: headlineY }}>
        Where Children
        <span>Fall in love with Reading</span>
      </motion.h1>
      <motion.p className="landing-hero__description" style={{ y: paragraphY }}>
        A magical bookstore designed to<br />
        help kids discover the right books,<br />
        build lifelong reading habits,<br />
        and experience stories in ways they'll never forget.
      </motion.p>
      <motion.a href="/books" className="landing-hero__monthly"
        style={{ opacity: promotionOpacity, visibility: promotionVisibility }}>
        <img src={monthlyBest} alt="Monthly Best" />
      </motion.a>
    </section>
  );
}
