/**
 * Note detail page
 */

import { notFound } from "next/navigation";
import Container from "@/components/UI/Container";
import ResponsiveThreeColumn from "@/components/Layout/ResponsiveThreeColumn";
import NotesHtmlRenderer from "@/components/Markdown/NotesHtmlRenderer";
import Tag from "@/components/UI/Tag";
import NoteCard from "@/components/Card/NoteCard";
import TableOfContents from "@/components/UI/TableOfContents";
import { getNoteBySlug, getNoteById, getNotes } from "@/lib/api";
import { formatDate, extractHeadings } from "@/lib/utils";
import { generateSlug } from "@/lib/slug";
import { generateMetadata as genMeta } from "@/components/SEO/SEO";
import Link from "next/link";
import BackButton from "@/components/UI/BackButton";
import type { Metadata } from "next";

interface NotePageProps {
  params: Promise<{ id: string }>;
}

// Find note by slug or ID (fallback to ID if slug not found)
async function findNoteBySlugOrId(identifier: string) {
  try {
    // First try to find by slug using the new API
    try {
      const note = await getNoteBySlug(identifier);
      return note;
    } catch (slugError) {
      // If slug not found, try by ID (for backward compatibility)
      try {
        const note = await getNoteById(identifier);
        return note;
      } catch (idError) {
        throw new Error("Note not found");
      }
    }
  } catch (error) {
    throw new Error("Note not found");
  }
}

export async function generateMetadata({ params }: NotePageProps): Promise<Metadata> {
  const { id } = await params;
  
  try {
    const note = await findNoteBySlugOrId(id);
    
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://olukunleowolabi.com';
    const noteUrl = `${siteUrl}/notes/${note.slug || id}`;
    
    // Generate description from content or excerpt
    const description = note.excerpt || 
      note.content?.replace(/<[^>]*>/g, '').substring(0, 160) + '...' || 
      note.title;
    
    return {
      title: `${note.title} | Olukunle Owolabi`,
      description,
      keywords: note.tags?.join(', ') || '',
      authors: [{ name: 'Olukunle Owolabi' }],
      creator: 'Olukunle Owolabi',
      
      // Open Graph metadata
      openGraph: {
        type: 'article',
        title: note.title,
        description,
        url: noteUrl,
        siteName: 'Olukunle Owolabi',
        locale: 'en_US',
        publishedTime: note.createdAt,
        modifiedTime: note.updatedAt,
        authors: ['Olukunle Owolabi'],
        tags: note.tags,
        images: [
          {
            url: `${siteUrl}/og-image.png`,
            width: 1200,
            height: 630,
            alt: note.title,
          },
        ],
      },
      
      // Twitter Card metadata
      twitter: {
        card: 'summary_large_image',
        title: note.title,
        description,
        images: [`${siteUrl}/og-image.png`],
        creator: '@olukunle',
        site: '@olukunle',
      },
      
      // Additional metadata
      alternates: {
        canonical: noteUrl,
      },
      
      // Article metadata
      other: {
        'article:author': 'Olukunle Owolabi',
        'article:published_time': note.createdAt,
        'article:modified_time': note.updatedAt,
        'article:section': note.topic || 'Technology',
        'article:tag': note.tags?.join(',') || '',
      },
    };
  } catch (error) {
    return {
      title: 'Note Not Found | Olukunle Owolabi',
      description: 'The requested note could not be found.',
    };
  }
}

export default async function NotePage({ params }: NotePageProps) {
  const { id } = await params;

  let note;
  try {
    note = await findNoteBySlugOrId(id);
  } catch {
    notFound();
  }

  // Get related notes by tags
  const allNotes = await getNotes().catch(() => []);
  const relatedNotes = allNotes
    .filter(
      (n) =>
        n._id !== id &&
        n.tags?.some((tag) => note.tags?.includes(tag)),
    )
    .slice(0, 3);

  // Extract headings for table of contents
  const headings = extractHeadings(note.content);

  // Metadata content
  const metadata = (
    <div className="rounded-lg border p-4 md:p-5 lg:p-6" style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)' }}>
      <h3 className="mb-3 md:mb-4 text-sm md:text-base lg:text-lg font-semibold" style={{ color: 'var(--nav-text)' }}>
        Metadata
      </h3>
      <dl className="space-y-2 md:space-y-3 text-xs md:text-sm">
        <div>
          <dt className="font-medium text-xs md:text-sm" style={{ color: 'var(--nav-text)' }}>
            Updated
          </dt>
          <dd className="text-gray-600 dark:text-gray-400 text-xs md:text-sm">
            {formatDate(note.updatedAt)}
          </dd>
        </div>
        {note.readingTime && (
          <div>
            <dt className="font-medium text-xs md:text-sm" style={{ color: 'var(--nav-text)' }}>
              Reading Time
            </dt>
            <dd className="text-gray-600 dark:text-gray-400 text-xs md:text-sm">
              {note.readingTime} min
            </dd>
          </div>
        )}
        {note.topic && (
          <div>
            <dt className="font-medium text-xs md:text-sm" style={{ color: 'var(--nav-text)' }}>
              Topic
            </dt>
            <dd className="text-blue-700 dark:text-blue-400 text-xs md:text-sm">{note.topic}</dd>
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
        <Link href="/notes" className="hover:text-primary p-2 -m-2 rounded-md transition-colors">
          Notes
        </Link>
        {note.topic && (
          <>
            {" / "}
            <span>{note.topic}</span>
          </>
        )}
        {" / "}
        <span className="text-gray-900 dark:text-white">{note.title}</span>
      </nav>

      {/* Title */}
      <h1 className="mb-4 text-2xl md:text-4xl lg:text-5xl font-bold leading-tight" style={{ color: 'var(--nav-text)' }}>
        {note.title}
      </h1>

      {/* Tags */}
      {note.tags && note.tags.length > 0 && (
        <div className="mb-6 flex flex-wrap gap-2">
          {note.tags.map((tag) => (
            <Tag key={tag} variant="primary">
              {tag}
            </Tag>
          ))}
        </div>
      )}

      {/* Content */}
      <div className="mt-6 md:mt-8">
        <NotesHtmlRenderer content={note.content} />
      </div>

      {/* Related Notes - Mobile Only */}
      {relatedNotes.length > 0 && (
        <div className="mt-8 md:hidden">
          <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
            Related Notes
          </h3>
          <div className="space-y-4">
            {relatedNotes.map((relatedNote) => (
              <NoteCard key={relatedNote._id} note={relatedNote} />
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
          <BackButton />
        </div>
      </Container>
      <ResponsiveThreeColumn main={main} metadata={metadata} toc={toc} />
    </div>
  );
}

