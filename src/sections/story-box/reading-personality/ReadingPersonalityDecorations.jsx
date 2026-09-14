import stackedBooks from "../../../../design-assets/Website/Story Box/Reading Personality/Elements of Reading personality/book-2.png";
import wingedBook from "../../../../design-assets/Website/Story Box/Reading Personality/Elements of Reading personality/book 1.png";
import redBook from "../../../../design-assets/Website/Story Box/Reading Personality/Elements of Reading personality/book-1 1.png";
import largeLeaf from "../../../../design-assets/Website/Story Box/Reading Personality/Elements of Reading personality/Leaf 5.png";
import smallLeaf from "../../../../design-assets/Website/Story Box/Reading Personality/Elements of Reading personality/Small Leaf 3.png";
import readingElfMascot from "../../../../design-assets/Website/Story Box/Reading Personality/Elements of Reading personality/Reading Ef Mascot 1.png";

import starburstBrown from "../../../../assets/images/story-box-page/starbursts/starburst-brown.png";
import starburstGreen from "../../../../assets/images/story-box-page/starbursts/starburst-green.png";
import starburstPeach from "../../../../assets/images/story-box-page/starbursts/starburst-peach.png";
import starburstRed from "../../../../assets/images/story-box-page/starbursts/starburst-red.png";

export function ReadingPersonalitySceneProps() {
  return (
    <div
      className="story-box-reading-personality__scene-props"
      aria-hidden="true"
    >
      <img
        className="reading-personality-scene-prop reading-personality-scene-prop--brown-top"
        src={starburstBrown}
        alt=""
      />
      <img
        className="reading-personality-scene-prop reading-personality-scene-prop--red-top"
        src={starburstRed}
        alt=""
      />
      <img
        className="reading-personality-scene-prop reading-personality-scene-prop--green-mid"
        src={starburstGreen}
        alt=""
      />
      <img
        className="reading-personality-scene-prop reading-personality-scene-prop--brown-mid"
        src={starburstBrown}
        alt=""
      />
      <img
        className="reading-personality-scene-prop reading-personality-scene-prop--red-lower"
        src={starburstRed}
        alt=""
      />
      <img
        className="reading-personality-scene-prop reading-personality-scene-prop--peach-lower"
        src={starburstPeach}
        alt=""
      />
    </div>
  );
}

export function QuizDecorations({
  showMascot = false,
}) {
  return (
    <>
      <img
        className="reading-personality-deco reading-personality-deco--stacked"
        src={stackedBooks}
        alt=""
        aria-hidden="true"
      />
      <img
        className="reading-personality-deco reading-personality-deco--winged"
        src={wingedBook}
        alt=""
        aria-hidden="true"
      />
      <img
        className="reading-personality-deco reading-personality-deco--red-book"
        src={redBook}
        alt=""
        aria-hidden="true"
      />
      <img
        className="reading-personality-deco reading-personality-deco--leaf"
        src={largeLeaf}
        alt=""
        aria-hidden="true"
      />
      {showMascot && (
        <img
          className="reading-personality-deco reading-personality-deco--mascot"
          src={readingElfMascot}
          alt=""
          aria-hidden="true"
        />
      )}
    </>
  );
}

export function ResultDecorations() {
  return (
    <>
      <img
        className="reading-personality-result-deco reading-personality-result-deco--small-leaf"
        src={smallLeaf}
        alt=""
        aria-hidden="true"
      />
      <img
        className="reading-personality-result-deco reading-personality-result-deco--stacked"
        src={stackedBooks}
        alt=""
        aria-hidden="true"
      />
      <img
        className="reading-personality-result-deco reading-personality-result-deco--winged"
        src={wingedBook}
        alt=""
        aria-hidden="true"
      />
      <img
        className="reading-personality-result-deco reading-personality-result-deco--red-book"
        src={redBook}
        alt=""
        aria-hidden="true"
      />
      <img
        className="reading-personality-result-deco reading-personality-result-deco--leaf"
        src={largeLeaf}
        alt=""
        aria-hidden="true"
      />
    </>
  );
}
