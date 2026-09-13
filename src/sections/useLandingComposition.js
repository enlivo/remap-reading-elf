import { useTransform } from "motion/react";
import { canvasVw, STATE_RANGE } from "./landingScrollStates.js";

// Layout corrections are separate from the approved actor travel.
// 91:484: cards (105,-179)/(1009,270.575), 812 × 360.575,
// 92px column gap and 89px row gap. PC → Scroll 2 remains unchanged.
export default function useLandingComposition(progress) {
  const layout = useTransform(progress, [1, 2], [0, 1]);
  const gridX = useTransform(progress, STATE_RANGE, [0, 0, -0.32, -7.32, -7.32, -7.32, -7.32, -7.32].map(canvasVw));
  const gridY = useTransform(progress, STATE_RANGE, [0, 0, 12, -75, -75, -75, -75, -75].map(canvasVw));
  const sceneryOpacity = useTransform(progress, [1, 1.6, 3, 4], [0, 1, 1, 0]);
  const foliageY = useTransform(progress, STATE_RANGE, [0, 0, -60, 117, 117, 117, 117, 117].map(canvasVw));
  const foliageX = useTransform(progress, STATE_RANGE, [-464, -464, -464, -440, -440, -440, -440, -440].map(canvasVw));
  const brownX = useTransform(progress, STATE_RANGE, [1819, 1819, 1819, 1843, 1843, 1843, 1843, 1843].map(canvasVw));
  const brownY = useTransform(progress, STATE_RANGE, [1080, 1080, 1020, 721, 721, 721, 721, 721].map(canvasVw));
  const entryOpacity = useTransform(progress, [3, 3.8, 4], [1, 0, 0]);
  const resolvedOpacity = useTransform(progress, [3, 3.25, 4], [0, 0, 1]);
  const titleX = useTransform(progress, [3, 4], [101, 87].map(canvasVw));

  // Gallery -> About prototype choreography.
  //
  // The image is deliberately ahead of the rest of the section:
  // it rises immediately as Gallery begins disappearing.
  const aboutImageY = useTransform(
    progress,
    [4, 4.86, 5],
    [
      canvasVw(845),
      canvasVw(0),
      canvasVw(0),
    ],
  );

  // Keep the staged image completely out of the earlier
  // Hero / Explore / Gallery states.
  //
  // Its Y choreography is unchanged: once Gallery -> About
  // begins, the image appears at its below-viewport starting
  // position and performs the already-approved rise.
  // Keep the successful Gallery -> About entrance exactly
  // as it is. About's internal pieces stay resolved after 5.
  const aboutImageOpacity = useTransform(
    progress,
    [3.99, 4, 5, 6],
    [0, 1, 1, 1],
  );

  const aboutSurfaceOpacity = useTransform(
    progress,
    [4, 4.38, 4.92, 6],
    [0, 0, 1, 1],
  );

  const aboutContentOpacity = useTransform(
    progress,
    [4, 4.38, 4.92, 5, 6],
    [0, 0, 1, 1, 1],
  );

  // About -> Visit deliberately mirrors Gallery -> About:
  // outgoing scene fades while the incoming visual rises.
  const aboutExitOpacity = useTransform(
    progress,
    [5, 5.86, 6],
    [1, 0, 0],
  );

  // The map is Visit's equivalent of the mother/son artwork.
  // It starts below the viewport and leads the transition.
  const visitMapY = useTransform(
    progress,
    [5, 5.86, 6],
    [
      canvasVw(845),
      canvasVw(0),
      canvasVw(0),
    ],
  );

  const visitMapOpacity = useTransform(
    progress,
    [4.99, 5, 6],
    [0, 1, 1],
  );

  // The brown surface and supporting content wait until the
  // map is already travelling, just like About did.
  const visitSurfaceOpacity = useTransform(
    progress,
    [5, 5.38, 5.92, 6],
    [0, 0, 1, 1],
  );

  const visitContentOpacity = useTransform(
    progress,
    [5, 5.38, 5.92, 6],
    [0, 0, 1, 1],
  );

  // Visit -> Instagram.
  //
  // Visit fades like the previous outgoing scenes.
  const visitExitOpacity = useTransform(
    progress,
    [6, 6.86, 7],
    [1, 0, 0],
  );

  // Instagram's feed panel is the lead visual.
  // Unlike the previous straight-up rises, this one enters
  // diagonally from the lower-right.
  const instagramPanelX = useTransform(
    progress,
    [6, 6.84, 7],
    [
      canvasVw(260),
      canvasVw(0),
      canvasVw(0),
    ],
  );

  const instagramPanelY = useTransform(
    progress,
    [6, 6.84, 7],
    [
      canvasVw(130),
      canvasVw(0),
      canvasVw(0),
    ],
  );

  const instagramPanelOpacity = useTransform(
    progress,
    [5.99, 6, 7],
    [0, 1, 1],
  );

  // White surface and supporting content wait until the
  // panel is already travelling into the viewport.
  const instagramSurfaceOpacity = useTransform(
    progress,
    [6, 6.34, 6.92, 7],
    [0, 0, 1, 1],
  );

  const instagramContentOpacity = useTransform(
    progress,
    [6, 6.46, 6.94, 7],
    [0, 0, 1, 1],
  );

  const heroOpacity = useTransform(progress, [2, 3], [1, 0]);

  return {
    heroOpacity,
    explore: {
      "--card-layout": layout,
      "--card-x": gridX,
      "--card-y": gridY,
      "--scenery-opacity": sceneryOpacity,
      "--foliage-y": foliageY,
      "--foliage-x": foliageX,
      "--brown-x": brownX,
      "--brown-y": brownY,
    },
    gallery: {
      "--entry-opacity": entryOpacity,
      "--resolved-opacity": resolvedOpacity,
      "--gallery-title-x": titleX,
    },
    about: {
      opacity: aboutExitOpacity,

      "--about-image-y": aboutImageY,
      "--about-image-opacity": aboutImageOpacity,
      "--about-surface-opacity": aboutSurfaceOpacity,
      "--about-content-opacity": aboutContentOpacity,
    },

    visit: {
      opacity: visitExitOpacity,

      "--visit-map-opacity": visitMapOpacity,
      "--visit-map-y": visitMapY,
      "--visit-surface-opacity": visitSurfaceOpacity,
      "--visit-content-opacity": visitContentOpacity,
    },

    instagram: {
      "--instagram-panel-x": instagramPanelX,
      "--instagram-panel-y": instagramPanelY,
      "--instagram-panel-opacity": instagramPanelOpacity,
      "--instagram-surface-opacity": instagramSurfaceOpacity,
      "--instagram-content-opacity": instagramContentOpacity,
    },
  };
}
