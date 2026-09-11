import LandingIntroScene from "../sections/LandingIntroScene.jsx";
import SiteFooter from "../components/SiteFooter.jsx";

import GallerySection from "../sections/GallerySection.jsx";
import AboutSection from "../sections/AboutSection.jsx";
import VisitSection from "../sections/VisitSection.jsx";
import InstagramSection from "../sections/InstagramSection.jsx";

export default function HomePage() {
  return (
    <>
      <main>
        <LandingIntroScene />

        <GallerySection />

        <AboutSection />

        <VisitSection />

        <InstagramSection />
      </main>

      <SiteFooter />
    </>
  );
}
