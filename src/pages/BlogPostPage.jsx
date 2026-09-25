import BlogNavigation from "../components/blog/BlogNavigation.jsx";
import OurStoryFooter from "../sections/our-story/OurStoryFooter.jsx";

import screenTimePhoto from "../../assets/images/blog-page/blog-post-photo-screentime.png";
import moorsPhotoOne from "../../assets/images/blog-page/blog-post-moors-1.png";
import moorsPhotoTwo from "../../assets/images/blog-page/blog-post-moors-2.png";

export const READING_VS_SCREEN_TIME_PATH = "/blog/reading-vs-screen-time";

export default function BlogPostPage() {
  return (
    <main className="blog-post-page">
      <div className="blog-post-page__chrome">
        <BlogNavigation chromeOpacity={1} />
      </div>

      <article className="blog-post" aria-labelledby="blog-post-title">
        <h1 id="blog-post-title" className="blog-post__title">
          Why Reading Is More Powerful Than
          <span>Screen Time for Children...</span>
        </h1>

        <p>
          I&rsquo;m not saying screens are bad. Of course children watch television, play games
          and spend time on screens. That&rsquo;s just the world we live in.
        </p>

        <div className="blog-post__split blog-post__split--image-right">
          <div>
            <h2 className="blog-post__lead">
              But I do think there is something very different about giving a child a book.
            </h2>
            <p>
              When a child watches something on a screen, so much of the work has already been
              done for them. The director has decided what the characters look like, what the
              house looks like, what the street looks like, what the landscape looks like and
              even how the scene should feel. You are given the finished picture.
            </p>
          </div>
          <img
            className="blog-post__photo"
            src={screenTimePhoto}
            alt="A child lying on a rug with a phone beside a sleeping dog"
          />
        </div>

        <p className="blog-post__callout">
          When you read a book, you have to create that picture yourself.
        </p>

        <p className="blog-post__align-right">
          If an author tells you about a misty morning on the Yorkshire moors, for example, you
          have to imagine what those moors look like. You create the landscape in your head. And
          at the same time, you might learn that this particular landscape is called a moor, that
          it is in Yorkshire, and perhaps even something about the history or geography of the
          place.
        </p>

        <div className="blog-post__split blog-post__split--image-left">
          <img
            className="blog-post__photo"
            src={moorsPhotoOne}
            alt="Mist rolling over the Yorkshire moors at sunrise"
          />
          <p className="blog-post__centered">
            And this is something I think happens when you read a lot.
            <br />
            You somehow end up knowing a little bit about a lot of things.
            <br />
            Not because you sat down to study them, but because information keeps appearing
            naturally in the stories you read.
          </p>
        </div>

        <p>
          Maybe you are reading a novel and the heroine is travelling through a particular
          country. Along the way, the author might mention a mountain by name, a particular town,
          a river, a historical event, the local food, the weather or something about the
          culture.
          <br />
          You are not reading a geography book.
        </p>

        <p className="blog-post__callout blog-post__callout--tight">You are reading a story.</p>

        <p className="blog-post__gap-before">
          But you&apos;ve picked up a little bit of geography.
          <br />
          Then you read another book and perhaps you learn something about history. Another book
          might introduce you to a different country. Another might make you curious about
          animals, science, mythology or art.
          <br />
          And after years of reading, you realise you&apos;ve collected all these little pieces
          of knowledge.
        </p>

        <p>
          It&apos;s almost accidental learning.
          <br />
          And I think books are particularly wonderful because they don&apos;t just give you the
          information &mdash; they give you a context in which to remember it.
          <br />
          You might read about a mountain called the Matterhorn, for example, because a character
          is travelling somewhere. You picture the mountain, you understand where it is in
          relation to the story, and that little piece of information stays somewhere in your
          mind.
        </p>

        <p>
          A film can absolutely do this too. A beautifully made film can show you places,
          cultures, history and landscapes in an incredibly powerful way.
          <br />
          But unless the film specifically tells you what you&apos;re looking at &mdash; through
          dialogue, a sign, narration or some other device &mdash; you may simply see the
          landscape without knowing its name or its geographical context.
        </p>

        <div className="blog-post__split blog-post__split--moors-quote">
          <img
            className="blog-post__photo"
            src={moorsPhotoTwo}
            alt="Golden light over the Yorkshire moors and a dry stone wall"
          />
          <p className="blog-post__callout blog-post__callout--side">
            The book can say, this
            <br />
            is the Yorkshire moors.
          </p>
        </div>

        <p className="blog-post__align-right blog-post__imagination">
          And then there is imagination.
          <br />
          A screen gives a child an image.
          <br />
          A book gives a child the ingredients to create an image.
          <br />
          The child has to imagine the character&apos;s face. They have to imagine the house, the
          street, the forest, the mountain. They have to decide in their own heads what all of
          these things look like.
        </p>

        <p>
          And that is a very different kind of engagement.
          <br />
          Reading also builds vocabulary, concentration and language. It encourages children to
          follow a story, understand characters, make connections, predict what might happen and
          think about how different people might feel.
        </p>

        <p>
          But perhaps one of the things I love most about reading is that it quietly expands a
          child&apos;s world.
          <br />
          A child can read a book set in another country and travel there without leaving their
          room.
          <br />
          They can meet people they would never otherwise meet.
          <br />
          They can learn about places they may never have heard of.
        </p>

        <p className="blog-post__gap-before">
          They can encounter ideas, cultures, histories and experiences completely different from
          their own.
          <br />
          And they don&apos;t necessarily even realise they&apos;re learning.
          <br />
          They&apos;re just reading a story.
          <br />
          That, to me, is the magic of books.
        </p>

        <p>
          Screens can entertain us. They can educate us too, and there is absolutely a place for
          them.
          <br />
          But when a child reads, they aren&apos;t simply receiving a finished world.
          <br />
          They are building one.
          <br />
          And somewhere along the way, while building those worlds, they are also building their
          vocabulary, their imagination, their understanding and their knowledge of the world
          around them.
          <br />
          And I don&apos;t think we should ever underestimate the power of that.
        </p>
      </article>

      <OurStoryFooter />
    </main>
  );
}
