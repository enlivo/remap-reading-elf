import {
  useEffect,
  useState,
} from "react";

import {
  flushSync,
} from "react-dom";

import BooksPage from "./pages/BooksPage.jsx";
import BlogPage from "./pages/BlogPage.jsx";
import BlogPostPage, {
  READING_VS_SCREEN_TIME_PATH,
} from "./pages/BlogPostPage.jsx";
import EventsPage from "./pages/EventsPage.jsx";
import ExperiencePage from "./pages/ExperiencePage.jsx";
import HomePage from "./pages/HomePage.jsx";
import OurStoryPage from "./pages/OurStoryPage.jsx";
import StoryBoxPage from "./pages/StoryBoxPage.jsx";

const supportedPaths = new Set([
  "/",
  "/books",
  "/blog",
  READING_VS_SCREEN_TIME_PATH,
  "/events",
  "/experience",
  "/our-story",
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
    const hash = window.location.hash?.slice(1);

    if (!hash) {
      return;
    }

    // The target only exists once the new page's content has rendered
    // (and, for image-heavy pages, begun laying out), so a plain
    // scrollIntoView right after commitRoute can miss it or land in the
    // wrong spot. Retry briefly until the element is present and its
    // position has stopped shifting between checks.
    let attempts = 0;
    let lastTop = null;
    let rafId = null;

    const tryScroll = () => {
      const target = document.getElementById(hash);
      attempts += 1;

      if (target) {
        const top = target.getBoundingClientRect().top;

        if (top === lastTop || attempts > 30) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
          return;
        }

        lastTop = top;
      }

      if (attempts < 30) {
        rafId = window.requestAnimationFrame(() =>
          window.setTimeout(tryScroll, 60),
        );
      }
    };

    tryScroll();

    return () => {
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, [pathname]);

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
       * Only routes represented by the page
       * switch below are intercepted.
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
          scrollToTop: !destination.hash,
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

  if (pathname === "/experience") {
    return <ExperiencePage />;
  }

  if (pathname === "/events") {
    return <EventsPage />;
  }

  if (pathname === "/our-story") {
    return <OurStoryPage />;
  }

  if (pathname === "/blog") {
    return <BlogPage />;
  }

  if (pathname === READING_VS_SCREEN_TIME_PATH) {
    return <BlogPostPage />;
  }

  return <HomePage />;
}
