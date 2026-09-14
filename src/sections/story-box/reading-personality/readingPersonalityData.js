import mushroomWanderer from "../../../../assets/images/story-box-page/result-mushroom-wanderer.png";
import elfsApprentice from "../../../../assets/images/story-box-page/result-elfs-apprentice.png";
import forestKeeper from "../../../../assets/images/story-box-page/result-forest-keeper.png";
import storyTrickster from "../../../../assets/images/story-box-page/result-story-trickster.png";
import shadowDetective from "../../../../assets/images/story-box-page/result-shadow-detective.png";

export const questions = [
  {
    question:
      "What kind of stories do you love most?",
    options: [
      { label: "Magic and monsters", value: "mushroom-wanderer" },
      { label: "Space and Science", value: "elfs-apprentice" },
      { label: "Animals and Nature", value: "forest-keeper" },
      { label: "Funny and Silly", value: "story-trickster" },
      { label: "Secrets, Clues and Mysteries", value: "shadow-detective" },
    ],
  },
  {
    question:
      "On a rainy day, you would rather...",
    options: [
      { label: "Build a fort and hide inside", value: "mushroom-wanderer" },
      { label: "Figure out how rain works", value: "elfs-apprentice" },
      { label: "Watch animals outside the window", value: "forest-keeper" },
      { label: "Make everyone laugh with jokes", value: "story-trickster" },
      {
        label: "Search the house for hidden clues like a detective",
        value: "shadow-detective",
      },
    ],
  },
  {
    question:
      "Your dream place to visit is..",
    options: [
      { label: "A hidden forest with talking trees", value: "mushroom-wanderer" },
      { label: "A space station orbiting Earth", value: "elfs-apprentice" },
      { label: "A farm with every animal ever", value: "forest-keeper" },
      { label: "A comedy show where you are on stage", value: "story-trickster" },
      { label: "An ancient fort full of secret passages", value: "shadow-detective" },
    ],
  },
  {
    question:
      "What would you bring to a desert island?",
    options: [
      { label: "A wand", value: "mushroom-wanderer" },
      { label: "A science kit", value: "elfs-apprentice" },
      { label: "A puppy", value: "forest-keeper" },
      { label: "A prank kit", value: "story-trickster" },
      {
        label: "A magnifying glass and a secret notebook",
        value: "shadow-detective",
      },
    ],
  },
  {
    question:
      "Your favorite kind of hero is...",
    options: [
      { label: "One who uses magic spells", value: "mushroom-wanderer" },
      { label: "One who solves problems with their brain", value: "elfs-apprentice" },
      { label: "One who talks to animals", value: "forest-keeper" },
      { label: "One who makes everyone smile", value: "story-trickster" },
      {
        label: "One who figures out the truth before anyone else",
        value: "shadow-detective",
      },
    ],
  },
];

export const results = {
  "mushroom-wanderer": {
    name: "The Mushroom Wanderer",
    description: "Loves magic, myths and hidden worlds.",
    image: mushroomWanderer,
  },
  "elfs-apprentice": {
    name: "The Elf's Apprentice",
    description: "Asks why and never stops. Books are puzzles waiting to be solved.",
    image: elfsApprentice,
  },
  "forest-keeper": {
    name: "The Forest Keeper",
    description: "Knows every creature by name. Feels at home in the wild.",
    image: forestKeeper,
  },
  "story-trickster": {
    name: "The Story Trickster",
    description: "Turns every story into a performance. Laughter guaranteed.",
    image: storyTrickster,
  },
  "shadow-detective": {
    name: "The Shadow Detective",
    description: "Notices everything. Trusts no one. Solves everything.",
    image: shadowDetective,
  },
};

export function getResultKey(answers) {
  const counts = new Map();
  let winner = null;
  let winnerCount = 0;

  answers.forEach((answer) => {
    const nextCount =
      (counts.get(answer) ?? 0) + 1;

    counts.set(answer, nextCount);

    if (nextCount > winnerCount) {
      winner = answer;
      winnerCount = nextCount;
    }
  });

  return winner;
}
