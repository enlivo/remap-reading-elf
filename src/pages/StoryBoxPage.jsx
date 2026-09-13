import StoryBoxNavigation from "../components/story-box/StoryBoxNavigation.jsx";
import StoryBoxHero from "../sections/story-box/StoryBoxHero.jsx";

export default function StoryBoxPage() {
  return (
    <div className="story-box-page">
      <StoryBoxNavigation />

      <main>
        <StoryBoxHero />
      </main>
    </div>
  );
}
