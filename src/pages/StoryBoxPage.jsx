import StoryBoxNavigation from "../components/story-box/StoryBoxNavigation.jsx";
import StoryBoxHero from "../sections/story-box/StoryBoxHero.jsx";
import StoryBoxTransitionSeam from "../sections/story-box/StoryBoxTransitionSeam.jsx";
import StoryBoxReadingPersonality from "../sections/story-box/StoryBoxReadingPersonality.jsx";
import StoryBoxMainSection from "../sections/story-box/StoryBoxMainSection.jsx";
import StoryBoxFooter from "../sections/story-box/StoryBoxFooter.jsx";
import usePageMeta from "../lib/usePageMeta.js";

// Layout is decided by the URL alone: sessionStorage would keep a QR visitor
// in the stripped layout for the rest of the tab.
function isQrEntry() {
  return new URLSearchParams(window.location.search).get("src") === "qr";
}

export default function StoryBoxPage() {
  usePageMeta({
    title: "Story Box for Kids | The Reading Elf, Thoraipakkam, Chennai",
    description:
      "The Reading Elf's Story Box is a monthly kids' subscription with handpicked books, a companion guide, an activity, a reading passport and collectibles.",
    path: "/story-box",
  });

  if (isQrEntry()) {
    return (
      <div id="top" className="story-box-page story-box-page--qr">
        <main>
          <h1 className="sr-only">Find Your Reading Personality | The Reading Elf Story Box</h1>
          <StoryBoxReadingPersonality />
        </main>
      </div>
    );
  }

  return (
    <div id="top" className="story-box-page">
      <StoryBoxNavigation />

      <main>
        <div className="story-box-content">
          <StoryBoxHero />
          <StoryBoxTransitionSeam />
          <StoryBoxReadingPersonality />
          <StoryBoxMainSection />
        </div>

        <StoryBoxFooter />
      </main>
    </div>
  );
}
