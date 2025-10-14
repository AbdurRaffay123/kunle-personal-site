/**
 * Blog detail page
 */

import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/UI/Container";
import TwoColumn from "@/components/Layout/TwoColumn";
import MarkdownRenderer from "@/components/Markdown/MarkdownRenderer";
import Tag from "@/components/UI/Tag";
import BlogCard from "@/components/Card/BlogCard";
import CommentsSection from "@/components/Comments/CommentsSection";
import ShareButtons from "@/components/ShareButtons/ShareButtons";
import BackButton from "@/components/UI/BackButton";
import { getBlogById, getBlogs } from "@/apis/Blog/api"; // <-- Use getBlogById
import { formatDate, extractHeadings } from "@/lib/utils";
import { generateMetadata as genMeta } from "@/components/SEO/SEO";

interface BlogPageProps {
  params: { id: string };
}

export async function generateMetadata({ params }: BlogPageProps) {
  const { id } = params;
  try {
    const response = await getBlogById(id);
    const blog = response.data; // <-- Use .data here!
    return genMeta({
      title: blog.title,
      description: blog.description,
      image: blog.image,
      path: `/blog/${id}`,
      date: blog.createdAt || blog.updatedAt,
      type: "article",
    });
  } catch {
    return genMeta({
      title: "Blog Post Not Found",
      description: "The requested blog post could not be found.",
    });
  }
}

export default async function BlogDetailPage({ params }: BlogPageProps) {
  const { id } = params;

  let blog;
  try {
    const response = await getBlogById(id);
    blog = response.data; // <-- Use .data here!
    if (!blog) throw new Error("Blog not found");
  } catch {
    notFound();
  }

  // Get related posts (simple: exclude current)
  const allBlogsRes = await getBlogs().catch(() => ({ data: [] }));
  const allBlogs = Array.isArray(allBlogsRes.data) ? allBlogsRes.data : [];
  const relatedBlogs = allBlogs.filter((b) => b._id !== id).slice(0, 3);

  // Extract headings for table of contents
  const headings = extractHeadings(blog.content);

  // Social share URLs
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const postUrl = `${siteUrl}/blog/${id}`;

  // Sidebar content
  const sidebar = (
    <div className="space-y-8">
      {/* Author info */}
      <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
        <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
          About the Author
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {blog.author || "Olukunle Owolabi"} - Lead AI Engineer & Applied Scientist
        </p>
      </div>

      {/* Share buttons */}
      <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
        <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
          Share this post
        </h3>
        <ShareButtons postUrl={postUrl} postTitle={blog.title} />
      </div>

      {/* Table of Contents */}
      {headings.length > 0 && (
        <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
          <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
            Table of Contents
          </h3>
          <nav>
            <ul className="space-y-2 text-sm">
              {headings.map((heading) => (
                <li
                  key={heading.id}
                  style={{ paddingLeft: `${(heading.level - 1) * 0.75}rem` }}
                >
                  <a
                    href={`#${heading.id}`}
                    className="text-gray-600 transition-colors hover:text-primary dark:text-gray-400 dark:hover:text-primary-400"
                  >
                    {heading.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}

      {/* Related posts */}
      {relatedBlogs.length > 0 && (
        <div>
          <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
            Related Posts
          </h3>
          <div className="space-y-4">
            {relatedBlogs.map((relatedBlog) => (
              <BlogCard key={relatedBlog._id} blog={relatedBlog} />
            ))}
          </div>
        </div>
      )}
    </div>
  );

  // Main content
  const main = (
    <article>
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm text-gray-600 dark:text-gray-400">
        <Link href="/blog" className="hover:text-primary">
          Blog
        </Link>
        {" / "}
        <span className="text-gray-900 dark:text-white">{blog.title}</span>
      </nav>

      {/* Title */}
      <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
        {blog.title}
      </h1>

      {/* Meta info */}
      <div className="mb-6 flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
        <time dateTime={blog.createdAt || blog.updatedAt}>
          {formatDate(blog.createdAt || blog.updatedAt)}
        </time>
        {blog.author && (
          <>
            <span>•</span>
            <span>By {blog.author}</span>
          </>
        )}
      </div>

      {/* Featured image */}
      {blog.image && (
        <div className="relative mb-8 aspect-video overflow-hidden rounded-lg">
          <Image
            src={
              blog.image.startsWith("/stored-files/")
                ? `${process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "")}${blog.image}`
                : `${process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "")}/stored-files/blog-images/${blog.image}`
            }
            alt={blog.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      {/* Content */}
      <div className="mt-8">
        <MarkdownRenderer content={blog.content} />
      </div>

      {/* Comments */}
      <div className="mt-16">
        <CommentsSection postId={blog._id} postType="blog" />
      </div>
    </article>
  );

  return (
    <div>
      <Container>
        <div className="flex justify-start mb-6 pt-24 md:pt-28">
          <BackButton href="/blog" label="Back to Blog" />
        </div>
      </Container>
      <TwoColumn main={main} sidebar={sidebar} />
    </div>
  );
}

