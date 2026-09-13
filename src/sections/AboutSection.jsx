import motherAndSon from "../../assets/images/about-mother-son.png";
import aboutCream from "../../assets/images/about-decoration-cream.svg";
import aboutBlue from "../../assets/images/about-decoration-blue.svg";

export default function AboutSection({ staged = false }) {
  return (
    <section
      className={`about-section${staged ? " about-section--staged" : ""}`}
      id="our-story"
    >
      <img
        className="about-section__decoration about-section__decoration--cream"
        src={aboutCream}
        alt=""
        aria-hidden="true"
      />

      <img
        className="about-section__decoration about-section__decoration--blue"
        src={aboutBlue}
        alt=""
        aria-hidden="true"
      />

      <div className="about-section__copy">
        <h2>About Us</h2>

        <p>
          The Reading Elf was born from a mother’s search
          <br className="about-section__desktop-break" />
          for a little more magic for her son
        </p>

        <p>
          —a place where children could wander, giggle, sit
          <br className="about-section__desktop-break" />
          on the floor, and simply be themselves among stories.
          <br className="about-section__desktop-break" />
          When that place didn’t exist, we decided to build it.
        </p>
      </div>

      <div className="about-section__image">
        <img
          src={motherAndSon}
          alt="A mother and child reading together"
        />
      </div>
    </section>
  );
}
