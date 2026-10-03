import StoryBoxNavigation from "../components/story-box/StoryBoxNavigation.jsx";
import StoryBoxHero from "../sections/story-box/StoryBoxHero.jsx";
import StoryBoxTransitionSeam from "../sections/story-box/StoryBoxTransitionSeam.jsx";
import StoryBoxReadingPersonality from "../sections/story-box/StoryBoxReadingPersonality.jsx";
import StoryBoxMainSection from "../sections/story-box/StoryBoxMainSection.jsx";
import StoryBoxFooter from "../sections/story-box/StoryBoxFooter.jsx";

// Layout is decided by the URL alone: sessionStorage would keep a QR visitor
// in the stripped layout for the rest of the tab.
function isQrEntry() {
  return new URLSearchParams(window.location.search).get("src") === "qr";
}

export default function StoryBoxPage() {
  if (isQrEntry()) {
    return (
      <div id="top" className="story-box-page story-box-page--qr">
        <main>
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
