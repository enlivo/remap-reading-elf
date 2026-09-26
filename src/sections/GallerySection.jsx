import {
  motion,
} from "motion/react";

import {
  useRef,
} from "react";

import greenLeaf from "../../design-assets/Website/Landing Page/Elements of Landing Page/5.png";
import entryFoliage from "../../assets/images/landing-elements/foliage-figma.webp";

import galleryBackground from "../../design-assets/Website/Landing Page/Background For Gallery.webp";
import galleryTitle from "../../design-assets/Website/Landing Page/Gallery Title.png";

/*
 * The board is fed straight from the folder, so dropping a new
 * gallery-xxx.webp in re-seeds the marquee without touching code.
 */
const GALLERY_PHOTOS = Object.entries(
  import.meta.glob(
    "../../assets/images/gallery-marquee/*.webp",
    {
      eager: true,
      query: "?url",
      import: "default",
    },
  ),
)
  .sort(
    (
      a,
      b,
    ) =>
      a[0].localeCompare(
        b[0],
      ),
  )
  .map(
    (
      entry,
    ) => entry[1],
  );

/* One card takes this long to cross its own width. */
const SECONDS_PER_PHOTO = 3.5;

export default function GallerySection({
  staged = false,
}) {
  const sectionRef =
    useRef(null);

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

      <div
        className="gallery-section__images-window"
        role="region"
        aria-label="Reading Elf gallery"
      >
        <div
          className="gallery-section__marquee-track"
          style={{
            "--gallery-marquee-duration": `${
              GALLERY_PHOTOS.length *
              SECONDS_PER_PHOTO
            }s`,
          }}
        >
          {/*
           * The list is rendered twice: the keyframe travels
           * exactly one copy, so the seam never shows.
           */}
          {[
            ...GALLERY_PHOTOS,
            ...GALLERY_PHOTOS,
          ].map(
            (
              image,
              index,
            ) => {
              const duplicate =
                index >=
                GALLERY_PHOTOS.length;

              return (
                <figure
                  key={`${image}-${index}`}
                  className="gallery-section__marquee-card"
                  aria-hidden={
                    duplicate ||
                    undefined
                  }
                >
                  <img
                    src={image}
                    alt={
                      duplicate
                        ? ""
                        : `Reading Elf gallery ${index + 1}`
                    }
                    loading="lazy"
                    decoding="async"
                    draggable="false"
                  />
                </figure>
              );
            },
          )}
        </div>
      </div>
    </section>
  );
}
