import {
  useEffect,
  useState,
} from "react";

const PHONE_QUERY =
  "(max-width: 767px)";

function getMatches() {
  if (typeof window === "undefined") {
    return false;
  }

  return window
    .matchMedia(PHONE_QUERY)
    .matches;
}

export default function usePhoneLandingViewport() {
  const [
    isPhone,
    setIsPhone,
  ] = useState(getMatches);

  useEffect(() => {
    const media =
      window.matchMedia(PHONE_QUERY);

    const update = () => {
      setIsPhone(media.matches);
    };

    update();

    media.addEventListener(
      "change",
      update,
    );

    return () => {
      media.removeEventListener(
        "change",
        update,
      );
    };
  }, []);

  return isPhone;
}
