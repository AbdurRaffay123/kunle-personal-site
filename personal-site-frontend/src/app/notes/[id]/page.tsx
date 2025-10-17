/**
 * Note detail page
 */

import { notFound } from "next/navigation";
import Container from "@/components/UI/Container";
import TwoColumn from "@/components/Layout/TwoColumn";
import NotesHtmlRenderer from "@/components/Markdown/NotesHtmlRenderer";
import Tag from "@/components/UI/Tag";
import NoteCard from "@/components/Card/NoteCard";
import CommentsSection from "@/components/Comments/CommentsSection";
import TableOfContents from "@/components/UI/TableOfContents";
import { getNoteBySlug, getNotes } from "@/lib/api";
import { formatDate, extractHeadings } from "@/lib/utils";
import { generateMetadata as genMeta } from "@/components/SEO/SEO";
import Link from "next/link";
import BackButton from "@/components/UI/BackButton";

interface NotePageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: NotePageProps) {
  const { id } = await params;
  try {
    const note = await getNoteBySlug(id);
    return genMeta({
      title: note.title,
      description: note.excerpt || note.title,
      path: `/notes/${id}`,
      date: note.updatedAt,
      tags: note.tags,
      type: "article",
    });
  } catch {
    return genMeta({
      title: "Note Not Found",
      description: "The requested note could not be found.",
    });
  }
}

export default async function NotePage({ params }: NotePageProps) {
  const { id } = await params;

  let note;
  try {
    note = await getNoteBySlug(id);
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

  // Sidebar content
  const sidebar = (
    <div className="space-y-8">
      {/* Metadata */}
      <div className="rounded-lg border p-6" style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)' }}>
        <h3 className="mb-4 text-lg font-semibold" style={{ color: 'var(--nav-text)' }}>
          Metadata
        </h3>
        <dl className="space-y-2 text-sm">
          <div>
            <dt className="font-medium" style={{ color: 'var(--nav-text)' }}>
              Updated
            </dt>
            <dd className="text-gray-600 dark:text-gray-400">
              {formatDate(note.updatedAt)}
            </dd>
          </div>
          {note.readingTime && (
            <div>
              <dt className="font-medium" style={{ color: 'var(--nav-text)' }}>
                Reading Time
              </dt>
              <dd className="text-gray-600 dark:text-gray-400">
                {note.readingTime} min
              </dd>
            </div>
          )}
          {note.topic && (
            <div>
              <dt className="font-medium" style={{ color: 'var(--nav-text)' }}>
                Topic
              </dt>
              <dd className="text-blue-700 dark:text-blue-400">{note.topic}</dd>
            </div>
          )}
        </dl>
      </div>

      {/* Table of Contents */}
      {headings.length > 0 && (
        <TableOfContents headings={headings} />
      )}

      {/* Related notes */}
      {relatedNotes.length > 0 && (
        <div>
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
    </div>
  );

  // Main content
  const main = (
    <article>
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm text-gray-600 dark:text-gray-400">
        <Link href="/notes" className="hover:text-primary">
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
      <h1 className="mb-4 text-4xl font-bold md:text-5xl" style={{ color: 'var(--nav-text)' }}>
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
      <div className="mt-8">
        <NotesHtmlRenderer content={note.content} />
      </div>

      {/* Comments */}
      <div className="mt-16">
        <CommentsSection postId={id} postType="note" />
      </div>
    </article>
  );

  return (
    <div>
      <Container>
        <div className="flex justify-start mb-6 pt-24 md:pt-28">
          <BackButton />
        </div>
      </Container>
      <TwoColumn main={main} sidebar={sidebar} />
    </div>
  );
}

