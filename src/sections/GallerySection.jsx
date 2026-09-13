import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import greenLeaf from "../../design-assets/Website/Landing Page/Elements of Landing Page/5.png";
import entryFoliage from "../../assets/images/landing-elements/foliage-figma.png";

import galleryBackground from "../../design-assets/Website/Landing Page/Background For Gallery.png";
import galleryImages from "../../design-assets/Website/Landing Page/Images.png";
import galleryTitle from "../../design-assets/Website/Landing Page/Gallery Title.png";

import mobileGallery01 from "../../design-assets/Website/Landing Page/Images For Gallery/Books Collections.jpeg";
import mobileGallery02 from "../../design-assets/Website/Landing Page/Images For Gallery/0c1b1716-2de3-4440-ad15-f88ff7e256c6.png";
import mobileGallery03 from "../../design-assets/Website/Landing Page/Images For Gallery/WhatsApp Image 2026-07-17 at 14.30.18.jpeg";
import mobileGallery04 from "../../design-assets/Website/Landing Page/Images For Gallery/WhatsApp Image 2026-07-17 at 14.30.19 (1).jpeg";
import mobileGallery05 from "../../design-assets/Website/Landing Page/Images For Gallery/WhatsApp Image 2026-07-17 at 14.30.19 (2).jpeg";
import mobileGallery06 from "../../design-assets/Website/Landing Page/Images For Gallery/WhatsApp Image 2026-07-17 at 14.30.19.jpeg";
import mobileGallery07 from "../../design-assets/Website/Landing Page/Images For Gallery/WhatsApp Image 2026-07-17 at 14.30.20.jpeg";
import mobileGallery08 from "../../design-assets/Website/Landing Page/Images For Gallery/WhatsApp Image 2026-07-17 at 14.31.13 (1).jpeg";

import usePhoneLandingViewport from "./usePhoneLandingViewport";

const MOBILE_GALLERY_IMAGES = [
  mobileGallery01,
  mobileGallery02,
  mobileGallery03,
  mobileGallery04,
  mobileGallery05,
  mobileGallery06,
  mobileGallery07,
  mobileGallery08,
];

function MobileGallerySlider() {
  const trackRef = useRef(null);
  const reducedMotion = useReducedMotion();

  const [
    activeIndex,
    setActiveIndex,
  ] = useState(0);

  const updateActiveCard = () => {
    const track =
      trackRef.current;

    if (!track) {
      return;
    }

    const trackRect =
      track.getBoundingClientRect();

    const viewportCenter =
      trackRect.left +
      trackRect.width / 2;

    const cards =
      track.querySelectorAll(
        ".gallery-section__mobile-card",
      );

    let closestIndex = 0;
    let closestDistance =
      Number.POSITIVE_INFINITY;

    cards.forEach(
      (
        card,
        index,
      ) => {
        const rect =
          card.getBoundingClientRect();

        const cardCenter =
          rect.left +
          rect.width / 2;

        const distance =
          Math.abs(
            cardCenter -
              viewportCenter,
          );

        if (
          distance <
          closestDistance
        ) {
          closestDistance =
            distance;

          closestIndex =
            index;
        }
      },
    );

    setActiveIndex(
      (current) =>
        current ===
        closestIndex
          ? current
          : closestIndex,
    );
  };

  useEffect(() => {
    const frame =
      requestAnimationFrame(
        updateActiveCard,
      );

    window.addEventListener(
      "resize",
      updateActiveCard,
    );

    return () => {
      cancelAnimationFrame(
        frame,
      );

      window.removeEventListener(
        "resize",
        updateActiveCard,
      );
    };
  }, []);

  const centreCard = (
    index,
  ) => {
    const track =
      trackRef.current;

    if (!track) {
      return;
    }

    const card =
      track.querySelector(
        `[data-gallery-index="${index}"]`,
      );

    if (!card) {
      return;
    }

    const left =
      card.offsetLeft -
      (
        track.clientWidth -
        card.clientWidth
      ) /
        2;

    track.scrollTo({
      left,
      behavior:
        reducedMotion
          ? "auto"
          : "smooth",
    });
  };

  const handleKeyDown = (
    event,
  ) => {
    if (
      event.key !==
        "ArrowLeft" &&
      event.key !==
        "ArrowRight"
    ) {
      return;
    }

    event.preventDefault();

    const delta =
      event.key ===
      "ArrowRight"
        ? 1
        : -1;

    const target =
      Math.max(
        0,
        Math.min(
          MOBILE_GALLERY_IMAGES
            .length - 1,
          activeIndex +
            delta,
        ),
      );

    centreCard(target);
  };

  return (
    <div
      ref={trackRef}
      className="gallery-section__mobile-slider"
      role="region"
      aria-label="Reading Elf gallery"
      tabIndex={0}
      onScroll={
        updateActiveCard
      }
      onKeyDown={
        handleKeyDown
      }
    >
      {MOBILE_GALLERY_IMAGES.map(
        (
          image,
          index,
        ) => {
          const active =
            index ===
            activeIndex;

          return (
            <motion.figure
              key={image}
              className="gallery-section__mobile-card"
              data-gallery-index={
                index
              }
              data-active={
                active
                  ? "true"
                  : "false"
              }
              animate={{
                scale:
                  active
                    ? 1.13
                    : 0.92,
                y:
                  active
                    ? -8
                    : 0,
                opacity:
                  active
                    ? 1
                    : 0.78,
              }}
              transition={{
                duration:
                  reducedMotion
                    ? 0
                    : 0.28,
                ease: [
                  0.22,
                  1,
                  0.36,
                  1,
                ],
              }}
              onClick={() =>
                centreCard(
                  index,
                )
              }
            >
              <img
                src={image}
                alt={`Reading Elf gallery ${index + 1}`}
                draggable="false"
              />
            </motion.figure>
          );
        },
      )}
    </div>
  );
}

export default function GallerySection({
  staged = false,
}) {
  const sectionRef =
    useRef(null);

  const isPhone =
    usePhoneLandingViewport();

  const {
    scrollYProgress,
  } = useScroll({
    target: sectionRef,
    offset: [
      "start end",
      "end start",
    ],
  });

  const imageX =
    useTransform(
      scrollYProgress,
      [
        0,
        1,
      ],
      [
        "1.5%",
        "-1.5%",
      ],
    );

  return (
    <section
      ref={sectionRef}
      className="gallery-section"
      id="gallery"
    >
      {staged && (
        <>
          <div
            className="gallery-section__entry-foliage"
            aria-hidden="true"
          >
            <img
              src={
                entryFoliage
              }
              alt=""
            />
          </div>

          <img
            className="gallery-section__entry-leaf"
            src={greenLeaf}
            alt=""
            aria-hidden="true"
          />
        </>
      )}

      <img
        className="gallery-section__background"
        src={
          galleryBackground
        }
        alt=""
        aria-hidden="true"
      />

      <motion.img
        className="gallery-section__title"
        src={galleryTitle}
        alt="Gallery"
        initial={
          staged
            ? false
            : {
                opacity: 0,
                y: 20,
              }
        }
        whileInView={
          staged
            ? undefined
            : {
                opacity: 1,
                y: 0,
              }
        }
        viewport={{
          once: true,
          amount: 0.5,
        }}
        transition={{
          duration: 0.55,
        }}
      />

      {isPhone ? (
        <MobileGallerySlider />
      ) : (
        <div className="gallery-section__images-window">
          <motion.img
            className="gallery-section__images"
            src={
              galleryImages
            }
            alt="The Reading Elf bookstore gallery"
            style={{
              x:
                staged
                  ? 0
                  : imageX,
            }}
          />
        </div>
      )}
    </section>
  );
}
