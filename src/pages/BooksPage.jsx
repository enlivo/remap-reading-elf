import {
  useState,
} from "react";

import BooksHeroScene from "../sections/books/BooksHeroScene.jsx";
import BooksCollectionBrowser from "../sections/books/BooksCollectionBrowser.jsx";
import BooksGiftCardSection from "../sections/books/BooksGiftCardSection.jsx";
import BooksBookPassportSection from "../sections/books/BooksBookPassportSection.jsx";
import BooksGiftsCollectiblesSection from "../sections/books/BooksGiftsCollectiblesSection.jsx";

export default function BooksPage() {
  const [
    activeFilter,
    setActiveFilter,
  ] = useState("all");

  return (
    <main className="books-page">
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
    </main>
  );
}
