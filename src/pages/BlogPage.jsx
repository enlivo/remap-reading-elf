import BlogStage from "../sections/blog/BlogStage.jsx";
import usePageMeta from "../lib/usePageMeta.js";

export default function BlogPage() {
  usePageMeta({
    title: "Reading Tips & Book Lists for Parents | The Reading Elf Blog",
    description:
      "Reading tips, book lists and stories from The Reading Elf, a children's bookstore in Thoraipakkam, Chennai, to help parents raise lifelong readers.",
    path: "/blog",
  });

  return (
    <main id="top" className="blog-page">
      <BlogStage />
    </main>
  );
}
