import {
  useState,
} from "react";

import BooksHeroScene from "../sections/books/BooksHeroScene.jsx";
import BooksCollectionBrowser from "../sections/books/BooksCollectionBrowser.jsx";
import BooksGiftCardSection from "../sections/books/BooksGiftCardSection.jsx";
import BooksBookPassportSection from "../sections/books/BooksBookPassportSection.jsx";
import BooksGiftsCollectiblesSection from "../sections/books/BooksGiftsCollectiblesSection.jsx";
import BooksDidntFindSection from "../sections/books/BooksDidntFindSection.jsx";
import SiteFooter from "../components/SiteFooter.jsx";
import usePageMeta from "../lib/usePageMeta.js";

export default function BooksPage() {
  const [
    activeFilter,
    setActiveFilter,
  ] = useState("all");

  usePageMeta({
    title: "Children's Books & Book of the Month | The Reading Elf, Chennai",
    description:
      "Browse children's books, our monthly Book of the Month pick, gifts and collectibles at The Reading Elf, a kids bookstore in Thoraipakkam, Chennai.",
    path: "/books",
  });

  return (
    <>
      <main id="top" className="books-page">
      <BooksHeroScene
        activeFilter={activeFilter}
        onFilterChange={
          setActiveFilter
        }
      />

      <BooksCollectionBrowser
        activeFilter={activeFilter}
        onFilterChange={
          setActiveFilter
        }
      />

      <BooksGiftCardSection />

      <BooksBookPassportSection />

      <BooksGiftsCollectiblesSection />

      <BooksDidntFindSection />
      </main>

      <SiteFooter variant="books" />
    </>
  );
}
