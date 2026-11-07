import EventsStage from "../sections/events/EventsStage.jsx";
import usePageMeta from "../lib/usePageMeta.js";

export default function EventsPage() {
  usePageMeta({
    title: "Kids Events & Storytime in Thoraipakkam, Chennai | The Reading Elf",
    description:
      "Storytime nights and kids' events at The Reading Elf in Thoraipakkam, off OMR, Chennai, from Boo Storytime to reading under the stars.",
    path: "/events",
  });

  return (
    <main id="top" className="events-page">
      <EventsStage />
    </main>
  );
}
