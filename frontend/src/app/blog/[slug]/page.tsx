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
import { getBlogBySlug, getBlogs } from "@/lib/api";
import { formatDate, extractHeadings } from "@/lib/utils";
import { generateMetadata as genMeta } from "@/components/SEO/SEO";

interface BlogPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BlogPageProps) {
  const { slug } = await params;
  try {
    const blog = await getBlogBySlug(slug);
    return genMeta({
      title: blog.title,
      description: blog.description || blog.excerpt,
      image: blog.thumbnail,
      path: `/blog/${slug}`,
      date: blog.createdAt || blog.updatedAt,
      tags: blog.tags,
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
  const { slug } = await params;

  let blog;
  try {
    blog = await getBlogBySlug(slug);
  } catch {
    notFound();
  }

  // Get related posts by tags
  const allBlogs = await getBlogs().catch(() => []);
  const relatedBlogs = allBlogs
    .filter(
      (b) =>
        b.slug !== slug &&
        b.tags?.some((tag) => blog.tags?.includes(tag)),
    )
    .slice(0, 3);

  // Extract headings for table of contents
  const headings = extractHeadings(blog.content);

  // Social share URLs
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const postUrl = `${siteUrl}/blog/${slug}`;

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
              <BlogCard key={relatedBlog.slug} blog={relatedBlog} />
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
        {blog.readingTime && (
          <>
            <span>•</span>
            <span>{blog.readingTime} min read</span>
          </>
        )}
        {blog.author && (
          <>
            <span>•</span>
            <span>By {blog.author}</span>
          </>
        )}
      </div>

      {/* Tags */}
      {blog.tags && blog.tags.length > 0 && (
        <div className="mb-8 flex flex-wrap gap-2">
          {blog.tags.map((tag) => (
            <Tag key={tag} variant="primary">
              {tag}
            </Tag>
          ))}
        </div>
      )}

      {/* Featured image */}
      {blog.thumbnail && (
        <div className="relative mb-8 aspect-video overflow-hidden rounded-lg">
          <Image
            src={blog.thumbnail}
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
        <CommentsSection postId={blog.slug} postType="blog" />
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

