/**
 * Premium Note Card with glassmorphism design
 */

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { NoteMeta } from "@/types";
import { formatDate } from "@/lib/utils";
import Tag from "@/components/UI/Tag";

interface NoteCardProps {
  note: NoteMeta;
  index?: number;
}

export default function NoteCard({ note, index = 0 }: NoteCardProps) {
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
        href={`/notes/${note.slug}`}
        className="group block h-full overflow-hidden rounded-xl bg-white/80 dark:bg-slate-800/60 backdrop-blur-sm border border-slate-200/30 dark:border-slate-700/30 p-6 shadow-lg hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300"
        aria-label={`Read note: ${note.title}`}
      >
        {/* Topic Badge */}
        <div className="mb-3 flex items-start justify-between gap-4">
          <div className="flex-1">
            {note.topic && (
              <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-blue-600 to-sky-500 text-white mb-3">
                {note.topic}
              </span>
            )}
            <h3 className="text-xl font-bold text-slate-900 dark:text-white transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400">
              {note.title}
            </h3>
          </div>
        </div>

        {/* Excerpt */}
        {note.excerpt && (
          <p className="mb-4 text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
            {note.excerpt}
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
                className="px-2.5 py-1 text-xs font-medium rounded-md bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300"
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
      </Link>
    </motion.div>
  );
}
