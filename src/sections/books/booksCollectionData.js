import monthApril from "../../../assets/images/books-page/collection-book-by-month-april-a-little-princess.png";
import monthAugust from "../../../assets/images/books-page/collection-book-by-month-august-a-little-princess.png";
import monthJuly from "../../../assets/images/books-page/collection-book-by-month-july-little-lord-fauntleroy.png";
import monthJune from "../../../assets/images/books-page/collection-book-by-month-june-the-lost-prince.png";
import monthMay from "../../../assets/images/books-page/collection-book-by-month-may-the-land-of-the-blue-flower.png";

import collectionEnidBlyton from "../../../assets/images/books-page/collection-collections-enid-blyton.png";
import collectionHarryPotter from "../../../assets/images/books-page/collection-collections-harry-potter.png";
import collectionFlatStanley from "../../../assets/images/books-page/collection-collections-the-flat-stanley.png";
import collectionTreehouse from "../../../assets/images/books-page/collection-collections-the-treehouse.png";
import collectionWinniePooh from "../../../assets/images/books-page/collection-collections-winnie-the-pooh.png";

import hardcoverCloneWars from "../../../assets/images/books-page/collection-hardcover-clone-wars.png";
import hardcoverGandhi from "../../../assets/images/books-page/collection-hardcover-mahatma-gandhi.png";
import hardcoverSapiens from "../../../assets/images/books-page/collection-hardcover-sapiens-vol-2.png";
import hardcoverStarWars from "../../../assets/images/books-page/collection-hardcover-star-wars-dawn-of-rebellion.png";
import hardcoverDorianGray from "../../../assets/images/books-page/collection-hardcover-the-picture-of-dorian-gray.png";

import companionSpiderMan from "../../../assets/images/books-page/story-companion-amazing-spider-man.png";
import companionGingerbread from "../../../assets/images/books-page/story-companion-gingerbread-man.png";
import companionHulk from "../../../assets/images/books-page/story-companion-hulk.png";
import companionMermaid from "../../../assets/images/books-page/story-companion-little-mermaid.png";

export const BOOK_FILTERS = [
  {
    id: "all",
    label: "All",
  },
  {
    id: "fan-favorites",
    label: "Fan Favorites",
  },
  {
    id: "book-by-month",
    label: "Book by Month",
  },
  {
    id: "for-grown-ups",
    label: "For Grown-Ups",
  },
  {
    id: "store-exclusive",
    label: "Store Exclusive",
  },
  {
    id: "hardcover",
    label: "Hardcover",
  },
  {
    id: "collections",
    label: "Collections",
  },
  {
    id: "story-companion",
    label: "Story Companion",
  },
];

export const BOOK_COLLECTION = [
  {
    id: "month-august-little-princess",
    title: "A Little Princess",
    author: "Frances Hodgson Burnett",
    badge: "August",
    image: monthAugust,
    categories: ["book-by-month"],
  },
  {
    id: "month-july-fauntleroy",
    title: "Little Lord Fauntleroy",
    author: "Frances Hodgson Burnett",
    badge: "July",
    image: monthJuly,
    categories: ["book-by-month"],
  },
  {
    id: "month-june-lost-prince",
    title: "The Lost Prince",
    author: "Frances Hodgson Burnett",
    badge: "June",
    image: monthJune,
    categories: ["book-by-month"],
  },
  {
    id: "month-may-blue-flower",
    title: "The Land of the Blue Flower",
    author: "Frances Hodgson Burnett",
    badge: "May",
    image: monthMay,
    categories: ["book-by-month"],
  },
  {
    id: "month-april-little-princess",
    title: "A Little Princess",
    author: "Frances Hodgson Burnett",
    badge: "April",
    image: monthApril,
    categories: ["book-by-month"],
  },

  {
    id: "collection-enid-blyton",
    title: "Enid Blyton — St Clare's Collection",
    author: "Enid Blyton",
    price: 2691,
    image: collectionEnidBlyton,
    categories: ["collections"],
  },
  {
    id: "collection-treehouse",
    title: "The Treehouse Collection",
    author: "Andy Griffiths & Terry Denton",
    price: 5199,
    image: collectionTreehouse,
    categories: ["collections"],
  },
  {
    id: "collection-winnie-pooh",
    title: "Winnie-the-Pooh: Classic Story Collection",
    author: "A.A. Milne & E.H. Shepard",
    price: 5199,
    image: collectionWinniePooh,
    categories: ["collections"],
  },
  {
    id: "collection-harry-potter",
    title: "Harry Potter: The Complete Collection",
    author: "J.K. Rowling",
    price: 4999,
    image: collectionHarryPotter,
    categories: ["collections"],
  },
  {
    id: "collection-flat-stanley",
    title: "The Flat Stanley Collection",
    author: "Jeff Brown",
    price: 2799,
    image: collectionFlatStanley,
    categories: ["collections"],
  },

  {
    id: "hardcover-star-wars-rebellion",
    title: "Star Wars: Dawn of the Rebellion",
    author: "Pablo Hidalgo & Emily Shkoukani",
    price: 999,
    image: hardcoverStarWars,
    categories: ["hardcover"],
  },
  {
    id: "hardcover-sapiens-volume-2",
    title: "Sapiens: A Graphic History, Vol. 2",
    author: "Yuval Noah Harari",
    price: 1099,
    image: hardcoverSapiens,
    categories: ["hardcover"],
  },
  {
    id: "hardcover-clone-wars",
    title: "Star Wars: Clone Wars Character Encyclopedia",
    author: "DK",
    price: 999,
    image: hardcoverCloneWars,
    categories: ["hardcover"],
  },
  {
    id: "hardcover-gandhi",
    title: "Mahatma Gandhi: An Autobiography",
    author: "M.K. Gandhi",
    price: 699,
    image: hardcoverGandhi,
    categories: ["hardcover"],
  },
  {
    id: "hardcover-dorian-gray",
    title: "The Picture of Dorian Gray",
    author: "Oscar Wilde",
    price: 399,
    image: hardcoverDorianGray,
    categories: ["hardcover"],
  },

  {
    id: "companion-hulk",
    title: "Hulk",
    type: "product",
    price: 1850,
    image: companionHulk,
    categories: ["story-companion"],
  },
  {
    id: "companion-little-mermaid",
    title: "Little Mermaid",
    type: "product",
    price: 1750,
    image: companionMermaid,
    categories: ["story-companion"],
  },
  {
    id: "companion-spider-man",
    title: "Amazing Spider-Man",
    type: "product",
    price: 628,
    image: companionSpiderMan,
    categories: ["story-companion"],
  },
  {
    id: "companion-gingerbread",
    title: "Gingerbread Man",
    type: "product",
    price: 375,
    image: companionGingerbread,
    categories: ["story-companion"],
  },
];

export function getBooksForFilter(filterId) {
  if (filterId === "all") {
    return BOOK_COLLECTION;
  }

  return BOOK_COLLECTION.filter((item) =>
    item.categories.includes(filterId),
  );
}

/*
 * Catalog order.
 *
 * The pinned Collection scene intentionally contains no
 * product cards. Every product row belongs to the normal
 * scrolling catalog, beginning with Book by Month.
 */
export const BOOK_COLLECTION_GROUPS = [
  {
    id: "book-by-month",
    label: "Book by Month",
  },
  {
    id: "hardcover",
    label: "Hardcover",
  },
  {
    id: "collections",
    label: "Collections",
  },
  {
    id: "story-companion",
    label: "Story Companion",
  },
];

export function getAllBookGroups() {
  return BOOK_COLLECTION_GROUPS.map(
    (group) => ({
      ...group,
      books: BOOK_COLLECTION.filter(
        (item) =>
          item.categories.includes(
            group.id,
          ),
      ),
    }),
  ).filter(
    (group) =>
      group.books.length > 0,
  );
}
