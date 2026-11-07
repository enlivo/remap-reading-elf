import LandingIntroScene from "../sections/LandingIntroScene.jsx";

import SiteFooter from "../components/SiteFooter.jsx";

import VisitSection from "../sections/VisitSection.jsx";
import InstagramSection from "../sections/InstagramSection.jsx";
import usePageMeta from "../lib/usePageMeta.js";

export default function HomePage() {
  usePageMeta({
    title: "Kids Bookstore in Thoraipakkam, OMR, Chennai | The Reading Elf",
    description:
      "The Reading Elf is a children's bookstore and reading space in Thoraipakkam, OMR, Chennai, with kids' books, storytime events and reading experiences.",
    path: "/",
  });

  return (
    <>
      <main>
        <LandingIntroScene />
        <VisitSection mobileFallback />
        <InstagramSection mobileFallback />
      </main>

      <SiteFooter />
    </>
  );
}
