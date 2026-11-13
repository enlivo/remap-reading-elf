import EventsStage from "../sections/events/EventsStage.jsx";
import usePageMeta from "../lib/usePageMeta.js";

export default function EventsPage() {
  usePageMeta({
    title: "Kids Events & Storytime in Thoraipakkam, Chennai | The Reading Elf",
    description:
      "Storytelling, reading and learning events for kids at The Reading Elf in Thoraipakkam, off OMR, Chennai.",
    path: "/events",
  });

  return (
    <main id="top" className="events-page">
      <EventsStage />
    </main>
  );
}
