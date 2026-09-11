import LandingIntroScene from "../sections/LandingIntroScene.jsx";

import SiteFooter from "../components/SiteFooter.jsx";

import AboutSection from "../sections/AboutSection.jsx";
import VisitSection from "../sections/VisitSection.jsx";
import InstagramSection from "../sections/InstagramSection.jsx";

export default function HomePage() {
  return (
    <>
      <main>
        <LandingIntroScene />
        <AboutSection />
        <VisitSection />
        <InstagramSection />
      </main>

      <SiteFooter />
    </>
  );
}
