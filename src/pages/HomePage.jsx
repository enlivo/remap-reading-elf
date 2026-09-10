import PersistentNavigation from "../components/LandingNavigation.jsx";
import SiteFooter from "../components/SiteFooter.jsx";

import HeroSection from "../sections/HeroSection.jsx";
import ExploreSection from "../sections/ExploreSection.jsx";
import GallerySection from "../sections/GallerySection.jsx";
import AboutSection from "../sections/AboutSection.jsx";
import VisitSection from "../sections/VisitSection.jsx";
import InstagramSection from "../sections/InstagramSection.jsx";

export default function HomePage() {
  return (
    <>
      <main>
        <HeroSection />

        <PersistentNavigation />

        <ExploreSection />

        <GallerySection />

        <AboutSection />

        <VisitSection />

        <InstagramSection />
      </main>

      <SiteFooter />
    </>
  );
}
