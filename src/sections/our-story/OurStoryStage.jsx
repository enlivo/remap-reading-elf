import OurStoryNavigation from "../../components/our-story/OurStoryNavigation.jsx";
import OurStoryFooter from "./OurStoryFooter.jsx";

import stripLogo from "../../../assets/images/our-story-page/strip-logo.png";
import familyPicks from "../../../design-assets/Website/Our Story/family-books-covers.jpg";
import shwetaPortrait from "../../../assets/images/our-story-page/shweta-portrait.png";
import sunainaPortrait from "../../../assets/images/our-story-page/sunaina-portrait.png";
import adhruthPortrait from "../../../assets/images/our-story-page/adhruth-portrait.png";

import decoGreenRibbon from "../../../design-assets/Website/Books Page/Elements of Book Page/1.png";
import decoBlueTriangles from "../../../design-assets/Website/Books Page/Elements of Book Page/2.png";
import decoYellowSwoosh from "../../../design-assets/Website/Books Page/Elements of Book Page/3.png";
import decoGreenWave from "../../../design-assets/Website/Books Page/Elements of Book Page/5.png";
import decoNavyLine from "../../../design-assets/Website/Books Page/Elements of Book Page/6.png";
import decoPeachStreak from "../../../assets/images/our-story-page/deco-peach-streak.png";

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

const familyBooks = [
  [familyPromises, "Promises Kept", "https://www.amazon.in/PROMISES-KEPT-SHWETA-SUBBAIH-BALAKRISHNAN/dp/9394693009"],
  [familyFlags, "Fascinating Flags for Fun", "https://www.zerodegreepublishing.com/products/fascinating-flags-for-fun-adhruth-subbiah-balakrishnan-shweta-subbiah-balakrishnan"],
  [familyTravel, "Travel Tales of a Cop", "https://www.amazon.in/dp/939522214X"],
];

const people = [
  {
    key: "shweta",
    name: "Shweta",
    fullName: "Shweta Subbiah Balakrishnan",
    portrait: shwetaPortrait,
    portraitSide: "right",
    covers: [
      [shwetaOutlander, "Outlander"],
      [shwetaKane, "Kane and Abel"],
      [shwetaEye, "Eye of the Needle"],
      [shwetaMalgudi, "Malgudi Days"],
    ],
    decorations: [["green-ribbon", decoGreenRibbon]],
    bio: (
      <>
        <h2 className="our-story-bio__title our-story-bio__title--quote">
          &ldquo;Every bookstore in Chennai.
          <br />
          None felt like enough.&rdquo;
        </h2>
        <p className="our-story-bio__quote">
          &ldquo;If the bookstore we imagine doesn&apos;t exist yet
          <br />
          then let&apos;s build it.&rdquo;
        </p>
        <p className="our-story-bio__spaced">
          The Reading Elf was born from a tender moment a mother searching for magic for her
          little boy. We spent afternoons wandering bookshops, but he always imagined somewhere
          more alive.
          <br />
          A place where children could giggle, wander, sit on the floor, and simply be
          themselves between pages.
        </p>
      </>
    ),
  },
  {
    key: "adhruth",
    name: "Adhruth",
    fullName: "Adhruth Subbiah Balakrishnan",
    portrait: adhruthPortrait,
    portraitSide: "left",
    covers: [
      [adhruthTwits, "The Twits"],
      [adhruthMummy, "The Mummy with No Name"],
      [adhruthHarry, "Harry Potter and the Philosopher's Stone"],
      [adhruthNoah, "Noah's Gold"],
    ],
    decorations: [
      ["green-wave", decoGreenWave],
      ["peach-streak", decoPeachStreak],
      ["blue-triangles", decoBlueTriangles],
      ["yellow-swoosh", decoYellowSwoosh],
      ["navy-line", decoNavyLine],
    ],
    bio: (
      <>
        <h2 className="our-story-bio__title">The Reading Elf began with him.</h2>
        <p className="our-story-bio__role">Chief Book Explorer</p>
        <p className="our-story-bio__spaced">
          At 9, his imagination, love for stories and endless curiosity still find their way
          into the store.
        </p>
        <p>
          He drew the mushroom house that became our identity.
          <br />
          Today, he is still part of the store, helping kids discover books he loves and
          sharing his favourites with fellow young readers.
          <br />
          Look out for his picks around the store. <span aria-hidden="true">✨</span>
        </p>
      </>
    ),
  },
  {
    key: "sunaina",
    name: "Sunaina",
    fullName: "Sunaina",
    portrait: sunainaPortrait,
    portraitSide: "right",
    covers: [
      [sunainaInheritance, "The Inheritance Games"],
      [sunainaIronFlame, "Iron Flame"],
      [sunainaRachel, "The Reappearance of Rachel Price"],
      [sunainaNineMoons, "The Nine Moons of Han Yu and Luli"],
    ],
    decorations: [
      ["green-wave", decoGreenWave],
      ["peach-streak", decoPeachStreak],
      ["yellow-swoosh", decoYellowSwoosh],
      ["navy-line", decoNavyLine],
    ],
    bio: (
      <>
        <h2 className="our-story-bio__title">The Story Scout</h2>
        <p className="our-story-bio__role">Curious. Avid. Always Reading.</p>
        <p className="our-story-bio__spaced">
          At 15, Sanu brings her own perspective to the shelves - discovering new stories,
          exploring books, and finding the ones worth talking about.
        </p>
        <p>
          She loves helping around The Reading Elf, sharing her latest reads, and recommending
          stories she thinks other young readers will love.
        </p>
        <p>
          Her rule?
          <br />
          If a book is worth reading, it&apos;s worth recommending.
        </p>
        <p className="our-story-bio__spaced">
          Look out for Sanu&apos;s Picks around the store. <span aria-hidden="true">✨</span>
        </p>
      </>
    ),
  },
];

function PersonSection({ person }) {
  return (
    <section
      id={person.key}
      className={`our-story-person our-story-person--${person.key}`}
      aria-labelledby={`${person.key}-picks-title`}
    >
      <div
        className={`our-story-bio our-story-bio--portrait-${person.portraitSide}`}
      >
        {person.decorations.map(([name, src]) => (
          <img
            key={name}
            className={`our-story-deco our-story-deco--${name}`}
            src={src}
            alt=""
            aria-hidden="true"
            loading="lazy"
          />
        ))}

        <div className="our-story-bio__portrait">
          <img src={person.portrait} alt={person.fullName} loading="lazy" />
        </div>

        <div className="our-story-bio__copy">{person.bio}</div>
      </div>

      <div className="our-story-picks" id={`${person.key}-picks`}>
        <h3 id={`${person.key}-picks-title`}>{person.name}&apos;s Picks</h3>
        <div className="our-story-cover-grid">
          {person.covers.map(([cover, title]) => (
            <img key={title} src={cover} alt={title} loading="lazy" />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function OurStoryStage() {
  return (
    <>
      <OurStoryNavigation />
      <div className="our-story-strip">
        <a className="our-story-strip__link" href="/" aria-label="The Reading Elf home">
          <img src={stripLogo} alt="The Reading Elf" />
        </a>
      </div>

      <div className="our-story-content">
        <h1 className="sr-only">Our Story</h1>

        <header className="our-story-intro">
          <p>
            A little boy drew a bookstore.
            <br />
            His mother built it.
          </p>
        </header>

        {people.map((person) => (
          <PersonSection key={person.key} person={person} />
        ))}
      </div>

      <section className="our-story-family">
        <div className="our-story-family__desktop-wrap">
          <img
            className="our-story-family__desktop"
            src={familyPicks}
            alt="Books written by the family: Promises Kept, Fascinating Flags for Fun, and Travel Tales of a Cop."
            loading="lazy"
          />
          <div className="our-story-family__hotspots" aria-hidden="true">
            {familyBooks.map(([, title, url]) => (
              <a
                key={title}
                href={url}
                target="_blank"
                rel="noreferrer"
                aria-label={`Buy ${title} on Amazon`}
              />
            ))}
          </div>
        </div>
        <div className="our-story-family__mobile">
          <h2>Books written by the family</h2>
          <div className="our-story-cover-grid our-story-cover-grid--family">
            {familyBooks.map(([cover, title, url]) => (
              <a
                key={title}
                className="our-story-family__mobile-card"
                href={url}
                target="_blank"
                rel="noreferrer"
              >
                <img src={cover} alt={title} loading="lazy" />
                <span>{title}</span>
                <span className="our-story-family__mobile-link">
                  Check it on Amazon→
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <OurStoryFooter />
    </>
  );
}
