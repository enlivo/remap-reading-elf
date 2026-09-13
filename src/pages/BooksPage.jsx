import {
  useState,
} from "react";

import BooksHeroScene from "../sections/books/BooksHeroScene.jsx";
import BooksCollectionBrowser from "../sections/books/BooksCollectionBrowser.jsx";

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
    </main>
  );
}
