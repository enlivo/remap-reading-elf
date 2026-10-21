import BlogNavigation from "../components/blog/BlogNavigation.jsx";
import BlogFooter from "../sections/blog/BlogFooter.jsx";
import { getBlogPost } from "../sections/blog/blogPostsData.js";
import ScreenTimePostBody from "../sections/blog/ScreenTimePostBody.jsx";
import NumberedBooksPostBody from "../sections/blog/NumberedBooksPostBody.jsx";

export default function BlogPostPage({ slug }) {
  const post = getBlogPost(slug);

  if (!post) {
    return null;
  }

  return (
    <main id="top" className="blog-post-page">
      <div className="blog-post-page__chrome">
        <BlogNavigation chromeOpacity={1} />
      </div>

      {post.post.layout === "screen-time" ? (
        <ScreenTimePostBody />
      ) : (
        <NumberedBooksPostBody post={post.post} />
      )}

      <BlogFooter standalone />
    </main>
  );
}
