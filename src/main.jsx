import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";

import "./styles/global.css";

import "./styles/components/navigation.css";
import "./styles/components/page-transition.css";

import "./styles/sections/hero.css";
import "./styles/sections/explore.css";
import "./styles/sections/gallery.css";
import "./styles/sections/about.css";
import "./styles/sections/visit.css";
import "./styles/sections/instagram.css";

import "./styles/components/footer.css";
import "./styles/pages/books.css";
import "./styles/responsive.css";
import "./styles/pages/books-responsive.css";
import "./styles/pages/story-box.css";
import "./styles/sections/story-box-reading-personality.css";
import "./styles/sections/story-box-reading-personality-result.css";
import "./styles/sections/story-box-transition.css";
import "./styles/sections/story-box-main.css";
import "./styles/sections/story-box-footer.css";
import "./styles/responsive/story-box-responsive.css";
import "./styles/responsive/story-box-reading-personality.css";
import "./styles/responsive/story-box-footer.css";
import "./styles/pages/experience.css";
import "./styles/sections/experience-footer.css";
import "./styles/pages/events.css";
import "./styles/sections/events-footer.css";
import "./styles/pages/our-story.css";
import "./styles/sections/our-story-footer.css";
import "./styles/pages/blog.css";
import "./styles/sections/blog-footer.css";

createRoot(
  document.getElementById("root"),
).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
