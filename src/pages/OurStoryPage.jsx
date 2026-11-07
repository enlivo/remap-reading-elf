import OurStoryStage from "../sections/our-story/OurStoryStage.jsx";
import usePageMeta from "../lib/usePageMeta.js";

export default function OurStoryPage() {
  usePageMeta({
    title: "Our Story | The Reading Elf, a Children's Bookstore in Chennai",
    description:
      "How a mother's search for a bookstore for her son became The Reading Elf, a children's bookstore and reading space in Thoraipakkam, Chennai.",
    path: "/our-story",
  });

  return (
    <main id="top" className="our-story-page">
      <OurStoryStage />
    </main>
  );
}
