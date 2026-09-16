import StoryBoxNavigation from "../components/story-box/StoryBoxNavigation.jsx";
import StoryBoxHero from "../sections/story-box/StoryBoxHero.jsx";
import StoryBoxTransitionSeam from "../sections/story-box/StoryBoxTransitionSeam.jsx";
import StoryBoxReadingPersonality from "../sections/story-box/StoryBoxReadingPersonality.jsx";
import StoryBoxMainSection from "../sections/story-box/StoryBoxMainSection.jsx";

export default function StoryBoxPage() {
  return (
    <div className="story-box-page">
      <StoryBoxNavigation />

      <main>
        <StoryBoxHero />
        <StoryBoxTransitionSeam />
        <StoryBoxReadingPersonality />
        <StoryBoxMainSection />
      </main>
    </div>
  );
}
