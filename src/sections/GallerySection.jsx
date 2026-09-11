import {
  motion,
  useScroll,
  useTransform,
} from "motion/react";

import { useRef } from "react";

import greenLeaf from "../../design-assets/Website/Landing Page/Elements of Landing Page/5.png";
import entryFoliage from "../../assets/images/landing-elements/foliage-figma.png";

import galleryBackground from "../../design-assets/Website/Landing Page/Background For Gallery.png";
import galleryImages from "../../design-assets/Website/Landing Page/Images.png";
import galleryTitle from "../../design-assets/Website/Landing Page/Gallery Title.png";

export default function GallerySection({ staged = false }) {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: [
      "start end",
      "end start",
    ],
  });

  const imageX = useTransform(
    scrollYProgress,
    [0, 1],
    ["1.5%", "-1.5%"],
  );

  return (
    <section
      ref={sectionRef}
      className="gallery-section"
      id="gallery"
    >
      {staged && (
        <>
          <div className="gallery-section__entry-foliage" aria-hidden="true">
            <img src={entryFoliage} alt="" />
          </div>
          <img className="gallery-section__entry-leaf" src={greenLeaf} alt="" aria-hidden="true" />
        </>
      )}
      <img
        className="gallery-section__background"
        src={galleryBackground}
        alt=""
        aria-hidden="true"
      />

      <motion.img
        className="gallery-section__title"
        src={galleryTitle}
        alt="Gallery"
        initial={staged ? false : {
          opacity: 0,
          y: 20,
        }}
        whileInView={staged ? undefined : {
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.5,
        }}
        transition={{
          duration: 0.55,
        }}
      />

      <div className="gallery-section__images-window">
        <motion.img
          className="gallery-section__images"
          src={galleryImages}
          alt="The Reading Elf bookstore gallery"
          style={{
            x: staged ? 0 : imageX,
          }}
        />
      </div>
    </section>
  );
}
