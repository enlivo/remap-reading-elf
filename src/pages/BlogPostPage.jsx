import { useEffect } from "react";

import BlogNavigation from "../components/blog/BlogNavigation.jsx";
import BlogFooter from "../sections/blog/BlogFooter.jsx";
import { getBlogPost } from "../sections/blog/blogPostsData.js";
import ScreenTimePostBody from "../sections/blog/ScreenTimePostBody.jsx";
import NumberedBooksPostBody from "../sections/blog/NumberedBooksPostBody.jsx";
import usePageMeta, { SITE_URL } from "../lib/usePageMeta.js";

/* post.post.title is a string for some layouts, an array of lines for others */
function plainTitle(title) {
  return Array.isArray(title) ? title.join(" ") : title;
}

export default function BlogPostPage({ slug }) {
  const post = getBlogPost(slug);
  const title = post ? `${plainTitle(post.post.title)} | The Reading Elf Blog` : null;

  usePageMeta({
    title,
    description: post?.post.excerpt,
    path: `/blog/${slug}`,
  });

  useEffect(() => {
    if (!post) {
      return undefined;
    }

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: plainTitle(post.post.title),
      ...(post.post.date ? { datePublished: post.post.date } : {}),
      author: { "@type": "Organization", name: "The Reading Elf" },
      image: `${SITE_URL}${post.card.image}`,
      mainEntityOfPage: `${SITE_URL}/blog/${slug}`,
    });
    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, [post, slug]);

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
