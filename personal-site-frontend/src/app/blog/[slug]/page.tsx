/**
 * Blog detail page with Table of Contents, Comments, and Like functionality
 */

import { notFound } from "next/navigation";
import Container from "@/components/UI/Container";
import ResponsiveThreeColumn from "@/components/Layout/ResponsiveThreeColumn";
import NotesHtmlRenderer from "@/components/Markdown/NotesHtmlRenderer";
import Tag from "@/components/UI/Tag";
import TableOfContents from "@/components/UI/TableOfContents";
import CommentsSection from "@/components/Comments/CommentsSection";
import { getBlogBySlug, getBlogById, getBlogs } from "@/lib/api";
import { formatDate, extractHeadings } from "@/lib/utils";
import { generateSlug } from "@/lib/slug";
import Link from "next/link";
import BackButton from "@/components/UI/BackButton";
import LikeButton from "@/components/UI/LikeButton";
import type { Metadata } from "next";

interface BlogPageProps {
  params: Promise<{ slug: string }>;
}

// Find blog by slug or ID (fallback to ID if slug not found)
async function findBlogBySlugOrId(identifier: string) {
  try {
    // First try to find by slug using the new API
    try {
      const blog = await getBlogBySlug(identifier);
      return blog;
    } catch (slugError) {
      // If slug not found, try by ID (for backward compatibility)
      try {
        const blog = await getBlogById(identifier);
        return blog;
      } catch (idError) {
        throw new Error("Blog not found");
      }
    }
  } catch (error) {
    throw new Error("Blog not found");
  }
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  
  try {
    const blog = await findBlogBySlugOrId(slug);
    
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://olukunleowolabi.com';
    const blogUrl = `${siteUrl}/blog/${blog.slug || slug}`;
    
    // Generate description from content or excerpt
    const description = blog.description || 
      blog.content?.replace(/<[^>]*>/g, '').substring(0, 160) + '...' || 
      blog.title;
    
    return {
      title: `${blog.title} | Olukunle Owolabi`,
      description,
      keywords: blog.tags?.join(', ') || '',
      authors: [{ name: 'Olukunle Owolabi' }],
      creator: 'Olukunle Owolabi',
      
      // Open Graph metadata
      openGraph: {
        type: 'article',
        title: blog.title,
        description,
        url: blogUrl,
        siteName: 'Olukunle Owolabi',
        locale: 'en_US',
        publishedTime: blog.createdAt,
        modifiedTime: blog.updatedAt,
        authors: ['Olukunle Owolabi'],
        tags: blog.tags,
        images: [
          {
            url: blog.image || `${siteUrl}/og-image.png`,
            width: 1200,
            height: 630,
            alt: blog.title,
          },
        ],
      },
      
      // Twitter Card metadata
      twitter: {
        card: 'summary_large_image',
        title: blog.title,
        description,
        images: [blog.image || `${siteUrl}/og-image.png`],
        creator: '@olukunle',
        site: '@olukunle',
      },
      
      // Additional metadata
      alternates: {
        canonical: blogUrl,
      },
      
      // Article metadata
      other: {
        'article:author': 'Olukunle Owolabi',
        'article:published_time': blog.createdAt,
        'article:modified_time': blog.updatedAt,
        'article:section': blog.category || 'Technology',
        'article:tag': blog.tags?.join(',') || '',
      },
    };
  } catch (error) {
    return {
      title: 'Blog Post Not Found | Olukunle Owolabi',
      description: 'The requested blog post could not be found.',
    };
  }
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { slug } = await params;

  let blog;
  try {
    blog = await findBlogBySlugOrId(slug);
  } catch {
    notFound();
  }

  // Get related blogs by tags
  const allBlogs = await getBlogs().catch(() => []);
  const relatedBlogs = allBlogs
    .filter(
      (b) =>
        b._id !== slug &&
        b.tags?.some((tag) => blog.tags?.includes(tag)),
    )
    .slice(0, 3);

  // Extract headings for table of contents
  const headings = extractHeadings(blog.content);

  // Metadata content
  const metadata = (
    <div className="rounded-lg border p-4 md:p-5 lg:p-6" style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)' }}>
      <h3 className="mb-3 md:mb-4 text-sm md:text-base lg:text-lg font-semibold" style={{ color: 'var(--nav-text)' }}>
        Metadata
      </h3>
      <dl className="space-y-2 md:space-y-3 text-xs md:text-sm">
        <div>
          <dt className="font-medium text-xs md:text-sm" style={{ color: 'var(--nav-text)' }}>
            Published
          </dt>
          <dd className="text-gray-600 dark:text-gray-400 text-xs md:text-sm">
            {formatDate(blog.createdAt)}
          </dd>
        </div>
        <div>
          <dt className="font-medium text-xs md:text-sm" style={{ color: 'var(--nav-text)' }}>
            Updated
          </dt>
          <dd className="text-gray-600 dark:text-gray-400 text-xs md:text-sm">
            {formatDate(blog.updatedAt)}
          </dd>
        </div>
        {blog.category && (
          <div>
            <dt className="font-medium text-xs md:text-sm" style={{ color: 'var(--nav-text)' }}>
              Category
            </dt>
            <dd className="text-blue-700 dark:text-blue-400 text-xs md:text-sm">{blog.category}</dd>
          </div>
        )}
        {blog.likes && blog.likes > 0 && (
          <div>
            <dt className="font-medium text-xs md:text-sm" style={{ color: 'var(--nav-text)' }}>
              Likes
            </dt>
            <dd className="text-red-600 dark:text-red-400 text-xs md:text-sm">{blog.likes}</dd>
          </div>
        )}
      </dl>
    </div>
  );

  // Table of Contents content
  const toc = headings.length > 0 ? (
    <TableOfContents headings={headings} />
  ) : null;

  // Main content
  const main = (
    <article>
      {/* Breadcrumb */}
      <nav className="mb-4 md:mb-6 text-xs md:text-sm text-gray-600 dark:text-gray-400">
        <Link href="/blog" className="hover:text-primary p-2 -m-2 rounded-md transition-colors">
          Blog
        </Link>
        {blog.category && (
          <>
            {" / "}
            <span>{blog.category}</span>
          </>
        )}
        {" / "}
        <span className="text-gray-900 dark:text-white">{blog.title}</span>
      </nav>

      {/* Title */}
      <h1 className="mb-4 text-2xl md:text-4xl lg:text-5xl font-bold leading-tight" style={{ color: 'var(--nav-text)' }}>
        {blog.title}
      </h1>

      {/* Description */}
      {blog.description && (
        <p className="mb-6 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
          {blog.description}
        </p>
      )}

      {/* Tags and Like Button */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        {blog.tags && blog.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {blog.tags.map((tag) => (
              <Tag key={tag} variant="primary">
                {tag}
              </Tag>
            ))}
          </div>
        )}
        
        <LikeButton 
          blogId={blog._id} 
          initialLikes={blog.likes || 0}
          className="flex items-center gap-2 px-4 py-2 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors"
        />
      </div>

      {/* Content */}
      <div className="mt-6 md:mt-8">
        <NotesHtmlRenderer content={blog.content} />
      </div>


      {/* File Download Section */}
      {(blog as any).fileType && (blog as any).fileType !== 'text' && (blog as any).fileUrl && (
        <div className="mt-8 p-6 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
          <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-2">
            Download Document
          </h3>
          <p className="text-green-700 dark:text-green-300 mb-4">
            This blog post is available as a downloadable document.
          </p>
          <a
            href={(blog as any).fileUrl}
            download={(blog as any).fileName || 'blog-document'}
            className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download {(blog as any).fileName || 'Document'}
          </a>
        </div>
      )}

      {/* Comments Section */}
      <div className="mt-12">
        <CommentsSection 
          postId={blog._id}
          postType="blog"
        />
      </div>

      {/* Related Blogs - Mobile Only */}
      {relatedBlogs.length > 0 && (
        <div className="mt-8 md:hidden">
          <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
            Related Posts
          </h3>
          <div className="space-y-4">
            {relatedBlogs.map((relatedBlog) => (
              <div key={relatedBlog._id} className="p-4 border rounded-lg" style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)' }}>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {relatedBlog.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  {relatedBlog.description}
                </p>
                <Link 
                  href={`/blog/${relatedBlog.slug || relatedBlog._id}`}
                  className="text-blue-600 dark:text-blue-400 text-sm hover:underline"
                >
                  Read more →
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </article>
  );

  return (
    <div>
      <Container>
        <div className="flex justify-start mb-4 md:mb-6 pt-20 md:pt-24 lg:pt-28">
            <BackButton href="/blog" label="Back to Blogs" />
        </div>
      </Container>
      <ResponsiveThreeColumn main={main} metadata={metadata} toc={toc} />
    </div>
  );
}
