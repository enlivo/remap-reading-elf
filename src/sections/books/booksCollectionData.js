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
import uniqueAlphabetStreet from "../../../assets/images/books-page/collection-unique-alphabet-street.jpg";
import uniqueSolarSystem from "../../../assets/images/books-page/collection-unique-explore-solar-system.jpg";
import uniqueButterfly from "../../../assets/images/books-page/collection-unique-inside-out-butterfly.jpg";
import uniqueEarth from "../../../assets/images/books-page/collection-unique-inside-out-earth.jpg";
import uniqueSapiensVol3 from "../../../assets/images/books-page/collection-unique-sapiens-vol-3.jpg";
import uniqueHarryPotterIdeasBook from "../../../assets/images/books-page/collection-unique-harry-potter-ideas-book.jpg";
import uniqueHarryPotterPhoenix from "../../../assets/images/books-page/collection-unique-harry-potter-order-of-phoenix.jpg";
import uniqueAlice from "../../../assets/images/books-page/collection-unique-alice.jpg";
import uniqueNehru from "../../../assets/images/books-page/collection-unique-jawaharlal-nehru.jpg";
import uniqueWarhammerEncyclopedia from "../../../assets/images/books-page/collection-unique-warhammer-character-encyclopedia.jpg";

import companionSpiderMan from "../../../assets/images/books-page/story-companion-amazing-spider-man.png";
import companionGingerbread from "../../../assets/images/books-page/story-companion-gingerbread-man.png";
import companionHulk from "../../../assets/images/books-page/story-companion-hulk.png";
import companionMermaid from "../../../assets/images/books-page/story-companion-little-mermaid.png";
import boxsetMagicTreeHouse from "../../../assets/images/books-page/collection-boxset-magic-tree-house.jpg";
import boxsetBoxcar1to4 from "../../../assets/images/books-page/collection-boxset-boxcar-children-1-4.jpg";
import boxsetBoxcar13to16 from "../../../assets/images/books-page/collection-boxset-boxcar-children-13-16.jpg";
import boxsetAruShah from "../../../assets/images/books-page/collection-boxset-aru-shah.jpg";
import journalGratitude from "../../../assets/images/books-page/collection-journal-my-first-gratitude-journal.jpg";
import journalFiveMinute from "../../../assets/images/books-page/collection-journal-5-minute-journal.jpg";
import journalMiserable from "../../../assets/images/books-page/collection-journal-perfectly-miserable-journal.jpg";
import journalAliceMiranda from "../../../assets/images/books-page/collection-journal-alice-miranda-friends-forever.jpg";
import journalNotebook from "../../../assets/images/books-page/collection-journal-notebook.jpg";
import journalPocketJournal from "../../../assets/images/books-page/gifts-collectibles-pocket-journal.png";
import companionGingerbreadV2 from "../../../assets/images/books-page/story-companion-gingerbread-man-v2.jpg";
import companionGreenElf from "../../../assets/images/books-page/gifts-collectibles-green-elf.png";
import companionReadingElfBluePink from "../../../assets/images/books-page/story-companion-reading-elf-blue-pink.jpg";
import companionHeidi from "../../../assets/images/books-page/story-companion-heidi.jpg";
import companionRabbitHeadphones from "../../../assets/images/books-page/gifts-collectibles-rabbit-with-headphones.png";

export const BOOK_FILTERS = [
  {
    id: "all",
    label: "All",
  },
  {
    id: "book-by-month",
    label: "Book by Month",
  },
  {
    id: "for-grown-ups",
    label: "Journals & Diaries",
  },
  {
    id: "hardcover",
    label: "Unique Books",
  },
  {
    id: "collections",
    label: "Box Set Collections",
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
    id: "unique-alphabet-street",
    title: "Alphabet Street",
    author: "Jonathan Emmett & Ingela P Arrhenius",
    price: 999,
    image: uniqueAlphabetStreet,
    categories: ["hardcover"],
  },
  {
    id: "unique-solar-system",
    title: "Explore the Solar System",
    author: "DK & ESA",
    price: 1999,
    image: uniqueSolarSystem,
    categories: ["hardcover"],
  },
  {
    id: "unique-earth",
    title: "Inside Out: Earth",
    author: "DK",
    price: 799,
    image: uniqueEarth,
    categories: ["hardcover"],
  },
  {
    id: "unique-butterfly",
    title: "Inside Out: Butterfly",
    author: "DK",
    price: 799,
    image: uniqueButterfly,
    categories: ["hardcover"],
  },
  {
    id: "unique-warhammer-encyclopedia",
    title: "Warhammer 40,000: Character Encyclopedia",
    author: "DK",
    price: 2499,
    image: uniqueWarhammerEncyclopedia,
    categories: ["hardcover"],
  },
  {
    id: "unique-sapiens-volume-3",
    title: "Sapiens: A Graphic History, Vol. 3",
    author: "Yuval Noah Harari",
    price: 1250,
    image: uniqueSapiensVol3,
    categories: ["hardcover"],
  },
  {
    id: "unique-harry-potter-ideas-book",
    title: "LEGO Harry Potter Ideas Book",
    author: "DK",
    price: 950,
    image: uniqueHarryPotterIdeasBook,
    categories: ["hardcover"],
  },
  {
    id: "unique-jawaharlal-nehru",
    title: "The Discovery of India",
    author: "Jawaharlal Nehru",
    price: 899,
    image: uniqueNehru,
    categories: ["hardcover"],
  },
  {
    id: "unique-alice",
    title: "The Complete Alice",
    author: "Lewis Carroll",
    price: 2399,
    image: uniqueAlice,
    categories: ["hardcover"],
  },
  {
    id: "unique-harry-potter-phoenix",
    title: "Harry Potter and the Order of the Phoenix",
    author: "J.K. Rowling, illustrated by Jim Kay",
    price: 2599,
    image: uniqueHarryPotterPhoenix,
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
    image: companionGingerbreadV2,
    categories: ["story-companion"],
  },
  {
    id: "companion-green-elf",
    title: "Green Elf",
    type: "product",
    price: 942,
    image: companionGreenElf,
    categories: ["story-companion"],
  },
  {
    id: "companion-reading-elf-blue-pink",
    title: "Reading Elf (Blue & Pink)",
    type: "product",
    price: 985,
    image: companionReadingElfBluePink,
    categories: ["story-companion"],
  },
  {
    id: "companion-heidi",
    title: "Heidi",
    type: "product",
    price: 999,
    image: companionHeidi,
    categories: ["story-companion"],
  },
  {
    id: "companion-rabbit-headphones",
    title: "Rabbit With Headphones",
    type: "product",
    price: 895,
    image: companionRabbitHeadphones,
    categories: ["story-companion"],
  },
  {
    id: "boxset-magic-tree-house",
    title: "Magic Tree House: The Graphic Novel Starter Set",
    author: "Mary Pope Osborne",
    price: 1999,
    image: boxsetMagicTreeHouse,
    categories: ["collections"],
  },
  {
    id: "boxset-boxcar-children-1-4",
    title: "The Boxcar Children: Books 1–4",
    author: "Gertrude Chandler Warner",
    price: 2350,
    image: boxsetBoxcar1to4,
    categories: ["collections"],
  },
  {
    id: "boxset-boxcar-children-13-16",
    title: "The Boxcar Children: Books 13–16",
    author: "Gertrude Chandler Warner",
    price: 1825,
    image: boxsetBoxcar13to16,
    categories: ["collections"],
  },
  {
    id: "boxset-aru-shah",
    title: "Aru Shah: Set of 4 Books",
    author: "Roshani Chokshi",
    price: 1799,
    image: boxsetAruShah,
    categories: ["collections"],
  },
  {
    id: "journal-gratitude",
    title: "My First Gratitude Journal",
    price: 499,
    image: journalGratitude,
    categories: ["for-grown-ups"],
  },
  {
    id: "journal-five-minute",
    title: "Your 5-Minute Journal",
    author: "Amy Birch",
    price: 799,
    image: journalFiveMinute,
    categories: ["for-grown-ups"],
  },
  {
    id: "journal-miserable",
    title: "My Perfectly Miserable Journal",
    price: 599,
    image: journalMiserable,
    categories: ["for-grown-ups"],
  },
  {
    id: "journal-alice-miranda",
    title: "Alice-Miranda Friends Forever Journal",
    price: 450,
    image: journalAliceMiranda,
    categories: ["for-grown-ups"],
  },
  {
    id: "journal-notebook",
    title: "Notebook",
    price: 450,
    image: journalNotebook,
    categories: ["for-grown-ups"],
  },
  {
    id: "journal-pocket-journal",
    title: "The Reading Elf Pocket Journal",
    price: 125,
    image: journalPocketJournal,
    categories: ["for-grown-ups"],
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
    id: "for-grown-ups",
    label: "Journals & Diaries",
  },
  {
    id: "hardcover",
    label: "Unique Books",
  },
  {
    id: "collections",
    label: "Box Set Collections",
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
