import LandingIntroScene from "../sections/LandingIntroScene.jsx";

import SiteFooter from "../components/SiteFooter.jsx";

import VisitSection from "../sections/VisitSection.jsx";
import InstagramSection from "../sections/InstagramSection.jsx";

export default function HomePage() {
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
