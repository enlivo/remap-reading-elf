import ExperienceStage from "../sections/experience/ExperienceStage.jsx";
import usePageMeta from "../lib/usePageMeta.js";

export default function ExperiencePage() {
  usePageMeta({
    title: "Visit The Reading Elf | Kids Reading Space on OMR, Chennai",
    description:
      "More than a bookstore: visit The Reading Elf on OMR, Thoraipakkam, Chennai for Wednesday Returns, Parent Child Experience and Story Keepers reading clubs.",
    path: "/experience",
  });

  return (
    <main id="top" className="experience-page">
      <ExperienceStage />
    </main>
  );
}
