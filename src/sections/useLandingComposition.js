import { useTransform } from "motion/react";
import { canvasVw, STATE_RANGE } from "./landingScrollStates.js";

// Layout corrections are separate from the approved actor travel.
// 91:484: cards (105,-179)/(1009,270.575), 812 × 360.575,
// 92px column gap and 89px row gap. PC → Scroll 2 remains unchanged.
export default function useLandingComposition(progress) {
  const layout = useTransform(progress, [1, 2], [0, 1]);
  const gridX = useTransform(progress, STATE_RANGE, [0, 0, -0.32, -7.32, -7.32].map(canvasVw));
  const gridY = useTransform(progress, STATE_RANGE, [0, 0, 12, -75, -75].map(canvasVw));
  const sceneryOpacity = useTransform(progress, [1, 1.6, 3, 4], [0, 1, 1, 0]);
  const foliageY = useTransform(progress, STATE_RANGE, [0, 0, -60, 117, 117].map(canvasVw));
  const foliageX = useTransform(progress, STATE_RANGE, [-464, -464, -464, -440, -440].map(canvasVw));
  const brownX = useTransform(progress, STATE_RANGE, [1819, 1819, 1819, 1843, 1843].map(canvasVw));
  const brownY = useTransform(progress, STATE_RANGE, [1080, 1080, 1020, 721, 721].map(canvasVw));
  const entryOpacity = useTransform(progress, [3, 3.8, 4], [1, 0, 0]);
  const resolvedOpacity = useTransform(progress, [3, 3.25, 4], [0, 0, 1]);
  const titleX = useTransform(progress, [3, 4], [101, 87].map(canvasVw));

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
  };
}
