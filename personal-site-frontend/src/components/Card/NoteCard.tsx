/**
 * Premium Note Card with images and glassmorphism design
 */

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { NoteMeta } from "@/types";
import { formatDate } from "@/lib/utils";
import { generateSlug } from "@/lib/slug";
import CardImage from "@/components/UI/CardImage";

interface NoteCardProps {
  note: NoteMeta;
  index?: number;
}

// Helper function to extract text preview from HTML content
function getTextPreview(html: string, maxLength: number = 150): string {
  if (!html) return '';
  
  // Remove HTML tags
  const text = html.replace(/<[^>]*>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  
  if (text.length <= maxLength) return text;
  
  // Cut at word boundary
  return text.substring(0, maxLength).split(' ').slice(0, -1).join(' ') + '...';
}

export default function NoteCard({ note, index = 0 }: NoteCardProps) {
  // Get content preview from the note content if no excerpt is provided
  const preview = note.excerpt || (note as any).content 
    ? getTextPreview((note as any).content || note.excerpt || '', 150)
    : '';

  // Determine category for image selection
  const category = note.topic || 'notes';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{
        scale: 1.02,
        y: -4,
        transition: { duration: 0.3 },
      }}
    >
      <Link
        href={`/notes/${(note as any).slug || generateSlug(note.title)}`}
        className="group block h-full overflow-hidden rounded-xl backdrop-blur-sm border shadow-lg hover:shadow-xl transition-all duration-300"
        style={{
          backgroundColor: 'var(--card)',
          borderColor: 'var(--border)',
          boxShadow: 'var(--shadow)'
        }}
        aria-label={`Read note: ${note.title}`}
      >
        {/* Image Container */}
        <div className="relative h-40 overflow-hidden">
          <CardImage
            src={(note as any).image}
            alt={note.title}
            category={category}
            title={note.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            fallbackText={category.toUpperCase()}
          />
          
          {/* Topic Badge */}
          {note.topic && (
            <div className="absolute top-3 left-3">
              <span className="px-2 py-1 text-xs font-medium bg-blue-600/90 dark:bg-blue-500/90 text-white rounded-full backdrop-blur-sm">
                {note.topic}
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold mb-3 transition-colors line-clamp-2" style={{ color: 'var(--nav-text)' }}>
            {note.title}
          </h3>

          {/* Content Preview */}
          {preview && (
            <p className="mb-4 text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed">
              {preview}
            </p>
          )}

          {/* Metadata */}
          <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500 dark:text-slate-400 mb-4">
            <time dateTime={note.updatedAt}>
              {formatDate(note.updatedAt, "short")}
            </time>
            {note.readingTime && (
              <>
                <span aria-hidden="true">•</span>
                <span className="flex items-center gap-1">
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>{note.readingTime} min read</span>
                </span>
              </>
            )}
          </div>

          {/* Tags */}
          {note.tags && note.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-200 dark:border-slate-700">
              {note.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 text-xs font-medium rounded-md"
                  style={{
                    backgroundColor: 'var(--tag-bg)',
                    color: 'var(--tag-text)'
                  }}
                >
                  {tag}
                </span>
              ))}
              {note.tags.length > 3 && (
                <span className="px-2.5 py-1 text-xs font-medium rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                  +{note.tags.length - 3}
                </span>
              )}
            </div>
          )}
        </div>
      </Link>
    </motion.div>
  );
}
