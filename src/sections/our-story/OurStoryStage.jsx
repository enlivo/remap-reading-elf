import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { useRef } from "react";

import OurStoryNavigation from "../../components/our-story/OurStoryNavigation.jsx";
import OurStoryFooter from "./OurStoryFooter.jsx";

import stripLogo from "../../../assets/images/our-story-page/strip-logo.png";
import aboutShweta from "../../../assets/images/our-story-page/about-shweta-panel.png";
import aboutSunaina from "../../../assets/images/our-story-page/about-sunaina-panel.png";
import aboutAdhruth from "../../../assets/images/our-story-page/about-adhruth-panel.png";
import shwetaPicks from "../../../assets/images/our-story-page/shweta-picks-panel.png";
import sunainaPicks from "../../../assets/images/our-story-page/sunaina-picks-panel.png";
import adhruthPicks from "../../../assets/images/our-story-page/adhruth-picks-panel.png";
import familyPicks from "../../../design-assets/Website/Our Story/family-books-covers.png";
import shwetaPortrait from "../../../assets/images/our-story-page/shweta-portrait.png";
import sunainaPortrait from "../../../assets/images/our-story-page/sunaina-portrait.png";
import adhruthPortrait from "../../../assets/images/our-story-page/adhruth-portrait.png";
import blueStreak from "../../../assets/images/our-story-page/deco-blue-streak.png";
import goldStreak from "../../../assets/images/our-story-page/deco-gold-streak.png";
import peachStreak from "../../../assets/images/our-story-page/deco-peach-streak.png";

import shwetaOutlander from "../../../assets/images/our-story-page/shweta-pick-outlander.png";
import shwetaKane from "../../../assets/images/our-story-page/shweta-pick-kane-and-abel.png";
import shwetaEye from "../../../assets/images/our-story-page/shweta-pick-eye-of-the-needle.png";
import shwetaMalgudi from "../../../assets/images/our-story-page/shweta-pick-malgudi-days.png";
import sunainaInheritance from "../../../assets/images/our-story-page/sunaina-pick-the-inheritance-games.png";
import sunainaIronFlame from "../../../assets/images/our-story-page/sunaina-pick-iron-flame.png";
import sunainaRachel from "../../../assets/images/our-story-page/sunaina-pick-the-reappearance-of-rachel-price.png";
import sunainaNineMoons from "../../../assets/images/our-story-page/sunaina-pick-nine-moons-of-han-yu-and-luli.png";
import adhruthTwits from "../../../assets/images/our-story-page/adhruth-pick-the-twits.png";
import adhruthMummy from "../../../assets/images/our-story-page/adhruth-pick-the-mummy-with-no-name.png";
import adhruthHarry from "../../../assets/images/our-story-page/adhruth-pick-harry-potter-philosophers-stone.png";
import adhruthNoah from "../../../assets/images/our-story-page/adhruth-pick-noahs-gold.png";
import familyPromises from "../../../assets/images/our-story-page/family-book-promises-kept.png";
import familyFlags from "../../../assets/images/our-story-page/family-book-fascinating-flags-for-fun.png";
import familyTravel from "../../../assets/images/our-story-page/family-book-travel-tales-of-a-cop.png";

const people = [
  {
    key: "shweta",
    name: "Shweta",
    portrait: shwetaPortrait,
    about: aboutShweta,
    aboutAlt: "Shweta Subbiah Balakrishnan and the story behind The Reading Elf.",
    picks: shwetaPicks,
    covers: [
      [shwetaOutlander, "Outlander"],
      [shwetaKane, "Kane and Abel"],
      [shwetaEye, "Eye of the Needle"],
      [shwetaMalgudi, "Malgudi Days"],
    ],
  },
  {
    key: "sunaina",
    name: "Sunaina",
    portrait: sunainaPortrait,
    about: aboutSunaina,
    aboutAlt: "Sunaina, The Reading Elf's Story Scout.",
    picks: sunainaPicks,
    covers: [
      [sunainaInheritance, "The Inheritance Games"],
      [sunainaIronFlame, "Iron Flame"],
      [sunainaRachel, "The Reappearance of Rachel Price"],
      [sunainaNineMoons, "The Nine Moons of Han Yu and Luli"],
    ],
  },
  {
    key: "adhruth",
    name: "Adhruth",
    portrait: adhruthPortrait,
    about: aboutAdhruth,
    aboutAlt: "Adhruth Subbiah Balakrishnan, Chief Book Explorer.",
    picks: adhruthPicks,
    covers: [
      [adhruthTwits, "The Twits"],
      [adhruthMummy, "The Mummy with No Name"],
      [adhruthHarry, "Harry Potter and the Philosopher's Stone"],
      [adhruthNoah, "Noah's Gold"],
    ],
  },
];

const familyBooks = [
  [familyPromises, "Promises Kept"],
  [familyFlags, "Fascinating Flags for Fun"],
  [familyTravel, "Travel Tales of a Cop"],
];

function MobileBiography({ personKey }) {
  if (personKey === "shweta") {
    return (
      <div className="our-story-person__mobile-copy">
        <h3>&ldquo;Every bookstore in Chennai.<br />None felt like enough.&rdquo;</h3>
        <p><em>&ldquo;If the bookstore we imagine doesn&apos;t exist yet then let&apos;s build it.&rdquo;</em></p>
        <p>
          The Reading Elf was born from a tender moment a mother searching for magic for her
          little boy. We spent afternoons wandering bookshops, but he always imagined somewhere
          more alive.
        </p>
        <p>
          A place where children could giggle, wander, sit on the floor, and simply be themselves
          between pages.
        </p>
      </div>
    );
  }

  if (personKey === "sunaina") {
    return (
      <div className="our-story-person__mobile-copy">
        <h3>The Story Scout</h3>
        <p className="our-story-person__role">Curious. Avid. Always Reading.</p>
        <p>
          At 15, Sanu brings her own perspective to the shelves - discovering new stories,
          exploring books, and finding the ones worth talking about.
        </p>
        <p>
          She loves helping around The Reading Elf, sharing her latest reads, and recommending
          stories she thinks other young readers will love.
        </p>
        <p>Her rule?<br />If a book is worth reading, it&apos;s worth recommending.</p>
        <p>Look out for Sanu&apos;s Picks around the store.</p>
      </div>
    );
  }

  return (
    <div className="our-story-person__mobile-copy">
      <h3>The Reading Elf began with him.</h3>
      <p className="our-story-person__role">Chief Book Explorer</p>
      <p>
        At 9, his imagination, love for stories and endless curiosity still find their way into
        the store.
      </p>
    </div>
  );
}

export default function OurStoryStage() {
  const runwayRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: runwayRef,
    offset: ["start start", "end end"],
  });

  const shwetaOpacity = useTransform(
    scrollYProgress,
    [0, 0.24, 0.36, 1],
    [1, 1, 0, 0],
  );
  const sunainaOpacity = useTransform(
    scrollYProgress,
    [0, 0.24, 0.36, 0.6, 0.72, 1],
    [0, 0, 1, 1, 0, 0],
  );
  const adhruthOpacity = useTransform(
    scrollYProgress,
    [0, 0.6, 0.72, 1],
    [0, 0, 1, 1],
  );
  const profileOpacities = {
    shweta: shwetaOpacity,
    sunaina: sunainaOpacity,
    adhruth: adhruthOpacity,
  };
  const profileDecorations = {
    shweta: blueStreak,
    sunaina: goldStreak,
    adhruth: peachStreak,
  };

  return (
    <>
      <OurStoryNavigation />
      <div className="our-story-strip" aria-hidden="true">
        <img src={stripLogo} alt="" />
      </div>

      <section
        ref={runwayRef}
        className="our-story-profile-runway"
        aria-label="Our Story"
      >
        <div className="our-story-profile-stage">
          <h1 className="sr-only">Our Story</h1>

          {people.map((person) => (
            <motion.section
              className={`our-story-person our-story-person--${person.key}`}
              key={person.key}
              style={
                prefersReducedMotion
                  ? undefined
                  : { opacity: profileOpacities[person.key] }
              }
            >
              <h2 className="sr-only">{person.name}</h2>
              <img
                className={`our-story-person__decor our-story-person__decor--${person.key}`}
                src={profileDecorations[person.key]}
                alt=""
                aria-hidden="true"
              />

              <div className="our-story-person__desktop-state">
                <img
                  className="our-story-person__desktop-about"
                  src={person.about}
                  alt={person.aboutAlt}
                />
                <img
                  className="our-story-person__desktop-picks"
                  src={person.picks}
                  alt={`${person.name}'s book picks`}
                />
              </div>

              <div className="our-story-person__mobile-about">
                <img
                  className="our-story-person__portrait"
                  src={person.portrait}
                  alt={person.name}
                />
                <MobileBiography personKey={person.key} />
              </div>

              <section
                className="our-story-person__mobile-picks"
                aria-label={`${person.name}'s picks`}
              >
                <h3>{person.name}&apos;s Picks</h3>
                <div className="our-story-cover-grid">
                  {person.covers.map(([cover, title]) => (
                    <img key={title} src={cover} alt={title} />
                  ))}
                </div>
              </section>
            </motion.section>
          ))}
        </div>
      </section>

      <section className="our-story-family">
        <img
          className="our-story-family__desktop"
          src={familyPicks}
          alt="Books written by the family: Promises Kept, Fascinating Flags for Fun, and Travel Tales of a Cop."
        />
        <div className="our-story-family__mobile">
          <h2>Books written by the family</h2>
          <div className="our-story-cover-grid our-story-cover-grid--family">
            {familyBooks.map(([cover, title]) => (
              <img key={title} src={cover} alt={title} />
            ))}
          </div>
        </div>
      </section>

      <OurStoryFooter />
    </>
  );
}
