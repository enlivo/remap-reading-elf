import {
  motion,
  useScroll,
  useTransform,
} from "motion/react";

import { useRef } from "react";

import galleryBackground from "../../design-assets/Website/Landing Page/Background For Gallery.png";
import galleryImages from "../../design-assets/Website/Landing Page/Images.png";
import galleryTitle from "../../design-assets/Website/Landing Page/Gallery Title.png";

export default function GallerySection() {
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
        initial={{
          opacity: 0,
          y: 20,
        }}
        whileInView={{
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
            x: imageX,
          }}
        />
      </div>
    </section>
  );
}
