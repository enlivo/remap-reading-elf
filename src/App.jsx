import {
  useEffect,
  useState,
} from "react";

import {
  flushSync,
} from "react-dom";

import BooksPage from "./pages/BooksPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import StoryBoxPage from "./pages/StoryBoxPage.jsx";

const supportedPaths = new Set([
  "/",
  "/books",
  "/story-box",
]);

function normalizePathname(pathname) {
  if (!pathname || pathname === "/") {
    return "/";
  }

  return pathname.replace(/\/+$/, "");
}

function getCurrentPathname() {
  return normalizePathname(
    window.location.pathname,
  );
}

function canAnimateNavigation() {
  return (
    typeof document.startViewTransition ===
      "function" &&
    !window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches
  );
}

export default function App() {
  const [
    pathname,
    setPathname,
  ] = useState(getCurrentPathname);

  useEffect(() => {
    function commitRoute(
      nextPathname,
      {
        url = null,
        updateHistory = false,
        scrollToTop = false,
      } = {},
    ) {
      const normalizedPathname =
        normalizePathname(nextPathname);

      const update = () => {
        if (updateHistory && url) {
          window.history.pushState(
            {},
            "",
            url,
          );
        }

        flushSync(() => {
          setPathname(
            normalizedPathname,
          );
        });

        if (scrollToTop) {
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "auto",
          });
        }
      };

      if (!canAnimateNavigation()) {
        update();
        return;
      }

      try {
        document.startViewTransition(
          update,
        );
      } catch {
        update();
      }
    }

    function handleDocumentClick(event) {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      if (
        !(event.target instanceof Element)
      ) {
        return;
      }

      const link =
        event.target.closest("a[href]");

      if (!link) {
        return;
      }

      if (
        link.hasAttribute("download") ||
        (
          link.target &&
          link.target !== "_self"
        )
      ) {
        return;
      }

      const destination = new URL(
        link.href,
        window.location.href,
      );

      if (
        destination.origin !==
        window.location.origin
      ) {
        return;
      }

      const nextPathname =
        normalizePathname(
          destination.pathname,
        );

      /*
       * Only intercept routes that currently
       * exist in our React page switch.
       *
       * Experience / Events / Our Story /
       * Blog remain untouched until their
       * actual pages are wired.
       */
      if (
        !supportedPaths.has(
          nextPathname,
        )
      ) {
        return;
      }

      const currentPathname =
        getCurrentPathname();

      /*
       * Keep ordinary same-page hash links
       * working normally.
       */
      if (
        nextPathname ===
          currentPathname &&
        destination.hash
      ) {
        return;
      }

      event.preventDefault();

      /*
       * Clicking the current page again
       * simply returns to its top.
       */
      if (
        nextPathname ===
        currentPathname
      ) {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });

        return;
      }

      const nextUrl =
        `${destination.pathname}` +
        `${destination.search}` +
        `${destination.hash}`;

      commitRoute(
        nextPathname,
        {
          url: nextUrl,
          updateHistory: true,
          scrollToTop: true,
        },
      );
    }

    function handlePopState() {
      commitRoute(
        getCurrentPathname(),
      );
    }

    document.addEventListener(
      "click",
      handleDocumentClick,
    );

    window.addEventListener(
      "popstate",
      handlePopState,
    );

    return () => {
      document.removeEventListener(
        "click",
        handleDocumentClick,
      );

      window.removeEventListener(
        "popstate",
        handlePopState,
      );
    };
  }, []);

  if (pathname === "/books") {
    return <BooksPage />;
  }

  if (pathname === "/story-box") {
    return <StoryBoxPage />;
  }

  return <HomePage />;
}
