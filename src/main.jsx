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

createRoot(
  document.getElementById("root"),
).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
