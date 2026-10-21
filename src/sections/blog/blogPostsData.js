import cardScreenTime from "../../../assets/images/blog-page/blog-post-photo-screentime.png";
import cardFatherSon from "../../../assets/images/blog-page/father-and-son.webp";

import coverHungryCaterpillar from "../../../assets/images/blog-page/cover-hungry-caterpillar.webp";
import coverTenApples from "../../../assets/images/blog-page/cover-ten-apples.webp";
import coverMixedUpChameleon from "../../../assets/images/blog-page/cover-mixed-up-chameleon.webp";
import coverRoomOnTheBroom from "../../../assets/images/blog-page/cover-room-on-the-broom.webp";
import coverGruffalo from "../../../assets/images/blog-page/cover-gruffalo.webp";
import coverHarryPotter from "../../../assets/images/blog-page/cover-harry-potter.webp";

import readMorePhoto from "../../../assets/images/blog-page/blog-post-photo.png";

/*
 * Every blog post - card copy for the Blog page band, and body content for
 * its own /blog/<slug> page. BlogStage renders one card per entry in order;
 * BlogPostPage looks a post up by slug and picks a body layout for it.
 */
export const BLOG_POSTS = [
  {
    slug: "reading-vs-screen-time",
    card: {
      title: "Read>>>Screen Time",
      text: ["Why Reading Is More Powerful Than Screen Time for Children..."],
      image: cardScreenTime,
      imageAlt: "A child reading on a phone beside a sleeping dog",
    },
    post: {
      layout: "screen-time",
      title: ["Why Reading Is More Powerful Than", "Screen Time for Children..."],
    },
  },
  {
    slug: "books-for-my-child",
    card: {
      title: "Books for my child",
      text: [
        "Some books are simply books.",
        "And then there are the books that become part of your family.",
      ],
      image: cardFatherSon,
      imageAlt: "A father and his son reading a picture book together on a sofa.",
    },
    post: {
      layout: "numbered-books",
      title: "Top 5 Books I Loved Reading to My Child",
      intro: [
        "Some books are simply books.",
        "And then there are the books that become part of your family.",
        "The ones you remember because of the little fingers turning their pages, the requests for “one more story,” the funny voices you made while reading, or the unexpected things your child started doing because of something they had read.",
        "Looking back, there are five books I especially remember loving with my child. Each one gave us something different — a new idea, a little habit, a conversation, a lot of laughter, or simply time together.",
      ],
      books: [
        {
          number: 1,
          heading: "The Very Hungry Caterpillar by Eric Carle",
          cover: coverHungryCaterpillar,
          coverAlt: "The Very Hungry Caterpillar by Eric Carle, board book cover",
          paragraphs: [
            "I started reading The Very Hungry Caterpillar to him when he was just a baby.",
            "At the time, I remember feeling that this one little book was teaching him so much. Through a simple, wonderfully visual story, he was being introduced to food, fruits, numbers up to five, the days of the week and, eventually, the life cycle of a butterfly. All in one book.",
            "We had a sturdy board-book edition that somehow survived his first three years. We carried it everywhere, and he especially loved putting his little fingers through the holes in the pages. It was one of those books that seemed to grow with him.",
            "And perhaps that’s what I remember most about it — watching him discover something new in the same book as he grew.",
          ],
        },
        {
          number: 2,
          heading: "Ten Apples Up On Top! by Dr. Seuss",
          cover: coverTenApples,
          coverAlt: "Ten Apples Up On Top! by Dr. Seuss, book cover",
          paragraphs: [
            "This book did something I still find rather amusing.",
            "It got him to eat apples.",
            "I don’t really know why, but he absolutely loved them after reading this book. He would happily munch on an apple while asking me to read the story to him.",
            "It was also one of my earliest realisations that children don’t just listen to the stories we read to them. Sometimes, they imitate what they see and hear in those stories.",
            "Reading wasn’t simply something we did together at bedtime. Somehow, the things we read began finding their way into little parts of everyday life.",
            "A book about apples became an apple-eating habit.",
            "And that made me realise just how much influence a story can quietly have.",
          ],
        },
        {
          number: 3,
          heading: "The Mixed-Up Chameleon by Eric Carle",
          cover: coverMixedUpChameleon,
          coverAlt: "The Mixed-Up Chameleon by Eric Carle, book cover",
          paragraphs: [
            "This one was special for a completely different reason.",
            "When he was around three, I started noticing that he would sometimes change what he wanted simply to please his friends. If a friend wanted to play a particular game, he would happily go along with it, even when it wasn’t really what he wanted.",
            "The Mixed-Up Chameleon gave us a lovely way to talk about being yourself. It became a gentle reminder that you don’t always have to change yourself to fit in.",
            "That it’s okay to be different.",
            "That it’s okay to have your own preferences.",
            "And that being comfortable with who you are matters.",
            "I think this is one of the wonderful things about children’s books. They can introduce ideas that are sometimes surprisingly difficult to explain directly.",
            "You don’t always need to sit a child down and give them a lesson.",
            "Sometimes, you can simply read them a story.",
            "And let the story start the conversation.",
          ],
        },
        {
          number: 4,
          heading: "Room on the Broom and The Gruffalo by Julia Donaldson",
          covers: [
            { src: coverRoomOnTheBroom, alt: "Room on the Broom by Julia Donaldson, book cover" },
            { src: coverGruffalo, alt: "The Gruffalo by Julia Donaldson, book cover" },
          ],
          paragraphs: [
            "Oh, how we laughed reading these. The rhymes. The repetition. The voices we made up. The anticipation of the familiar parts.",
            "And all the little activities we ended up doing alongside the stories. These books became much more than something we read together.",
            "They became something we did together.",
            "There was something wonderful about knowing the words well enough to join in, making up ridiculous voices and watching the same story become funnier simply because we had read it so many times.",
            "These were the books that reminded me that reading doesn’t always have to be quiet. Sometimes reading is loud. Sometimes it’s silly. Sometimes it’s full of laughter. And sometimes the best reading memories are the ones where neither the parent nor the child wants to stop.",
          ],
        },
        {
          number: 5,
          heading: "Harry Potter and the Philosopher’s Stone by J.K. Rowling",
          cover: coverHarryPotter,
          coverAlt: "Harry Potter and the Philosopher's Stone by J.K. Rowling, book cover",
          paragraphs: [
            "And, of course…",
            "Harry Potter. Always.",
            "I had always loved Harry Potter, so getting to share that magical world with my child felt particularly special.",
            "It became something we could both love. Something we could talk about. Something we could get excited about together.",
            "But then came one of those moments that every parent who loves books secretly looks forward to. He picked up the second book himself. And then the third.",
            "At that point, something had changed.",
            "The story that we had once shared together had become a world he wanted to explore on his own. A magical journey had begun — and he was ready to continue it himself.",
            "And honestly, I think that’s one of the greatest joys of reading with a child. You start by reading to them. Then, somewhere along the way, they begin reading for themselves.",
          ],
        },
      ],
      lookingBack: {
        heading: "Looking Back",
        paragraphs: [
          "When I think about these five books now, I realize that each one gave us something different. One taught him little things about the world. One inspired a tiny everyday habit. One helped us talk about being yourself. Two gave us hours of laughter and imagination. And one opened the door to a world that he eventually chose to explore on his own.",
          "But perhaps the greatest gift wasn’t any of those things.",
          "It was time together. These books became memories of bedtime reading, little voices asking for one more story, familiar words, favorite characters, funny voices and the joy of watching a child slowly grow into a reader. Because sometimes, the books we read to our children become the memories they carry with them. And they become the memories we carry, too. Years later, you may not remember every book you bought. But you might remember the one your child carried everywhere.",
          "The one they asked you to read again and again. The one that made them laugh. The one that started a conversation. Or the one that finally made them reach for the next book by themselves. Those are the books that stay with us.",
        ],
      },
      question: {
        heading: ["What were the books you", "loved reading to your children?"],
        text: "I’d love to hear about the stories that became part of your family memories.",
      },
      readMore: {
        label: "Read More",
        items: [
          { image: readMorePhoto, alt: "A boy reading under a lantern-lit tree by a lake", caption: "From Bookstagram!", href: "/blog" },
          { image: readMorePhoto, alt: "A boy reading under a lantern-lit tree by a lake", caption: "From Bookstagram!", href: "/blog" },
          { image: readMorePhoto, alt: "A boy reading under a lantern-lit tree by a lake", caption: "From Bookstagram!", href: "/blog" },
        ],
      },
    },
  },
];

export function getBlogPost(slug) {
  return BLOG_POSTS.find((post) => post.slug === slug) ?? null;
}
