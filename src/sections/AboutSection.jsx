import motherAndSon from "../../assets/images/about-mother-son.png";

export default function AboutSection() {
  return (
    <section
      className="about-section"
      id="our-story"
    >
      <div className="about-section__copy">
        <h2>About Us</h2>

        <p>
          The Reading Elf was born from a
          mother's search for a little more
          magic for her son — a place where
          children could wander, giggle, sit on
          the floor, and simply be themselves
          among stories.
        </p>

        <p>
          When that place didn't exist,
          we decided to build it.
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
