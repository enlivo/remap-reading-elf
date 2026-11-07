import { useEffect } from "react";

export const SITE_URL = "https://thereadingelf.in";

function setMetaByName(name, content) {
  let tag = document.querySelector(`meta[name="${name}"]`);

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", name);
    document.head.appendChild(tag);
  }

  tag.setAttribute("content", content);
}

function setMetaByProperty(property, content) {
  let tag = document.querySelector(`meta[property="${property}"]`);

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("property", property);
    document.head.appendChild(tag);
  }

  tag.setAttribute("content", content);
}

function setCanonical(href) {
  let link = document.querySelector('link[rel="canonical"]');

  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }

  link.setAttribute("href", href);
}

/*
 * Sets document.title, the meta description, the canonical link and the
 * og:/twitter: title+description+url tags for the current route. Call once
 * from each page component with that page's own title, description and
 * path (e.g. "/books" or "/books/gruffalo-granny"); "/" is the only path
 * kept with a trailing slash in the canonical URL.
 */
export default function usePageMeta({ title, description, path }) {
  useEffect(() => {
    if (!title || !description || !path) {
      return;
    }

    document.title = title;

    const canonicalUrl = path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`;

    setMetaByName("description", description);
    setCanonical(canonicalUrl);

    setMetaByProperty("og:title", title);
    setMetaByProperty("og:description", description);
    setMetaByProperty("og:url", canonicalUrl);

    setMetaByName("twitter:title", title);
    setMetaByName("twitter:description", description);
  }, [title, description, path]);
}
