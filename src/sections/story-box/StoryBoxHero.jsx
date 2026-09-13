import heroIllustration from "../../../assets/images/story-box-page/hero-illustration.jpg";

export default function StoryBoxHero() {
  return (
    <section
      className="story-box-hero"
      aria-labelledby="story-box-hero-title"
    >
      <img
        className="story-box-hero__background"
        src={heroIllustration}
        alt=""
        aria-hidden="true"
      />

      <div
        className="story-box-hero__scrim"
        aria-hidden="true"
      />

      <div className="story-box-hero__content">
        <h1 id="story-box-hero-title">
          <span>Explore, Don&apos;t</span>
          <span>Just Browse</span>
        </h1>

        <p>
          <span>
            Every trail is filled with stories waiting to surprise,
          </span>
          <span>
            inspire, and spark a love of reading.
          </span>
        </p>
      </div>
    </section>
  );
}
