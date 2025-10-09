/**
 * Premium Blog Card with image and glassmorphism
 */

"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { BlogMeta } from "@/types";
import { formatDate } from "@/lib/utils";

interface BlogCardProps {
  blog: BlogMeta;
  featured?: boolean;
  index?: number;
}

export default function BlogCard({ blog, featured = false, index = 0 }: BlogCardProps) {
  const CardContent = (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{
        scale: 1.02,
        y: -4,
        transition: { duration: 0.3 },
      }}
      className={`group overflow-hidden rounded-xl bg-white/80 dark:bg-slate-800/60 backdrop-blur-sm border border-slate-200/30 dark:border-slate-700/30 shadow-lg hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 ${
        featured ? "flex flex-col md:flex-row h-full" : "flex flex-col h-full"
      }`}
    >
      {/* Image */}
      {blog.thumbnail && (
        <div
          className={`relative overflow-hidden bg-gradient-to-br from-blue-100 to-sky-100 dark:from-blue-900/20 dark:to-sky-900/20 ${
            featured ? "h-64 md:h-auto md:w-1/2" : "h-56"
          }`}
        >
          <Image
            src={blog.thumbnail}
            alt={blog.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes={
              featured
                ? "(max-width: 768px) 100vw, 50vw"
                : "(max-width: 768px) 100vw, 33vw"
            }
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      )}

      {/* Content */}
      <div className={`flex flex-1 flex-col p-6 ${featured ? "md:w-1/2" : ""}`}>
        {/* Metadata */}
        <div className="mb-3 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
          <time dateTime={blog.createdAt || blog.updatedAt}>
            {formatDate(blog.createdAt || blog.updatedAt, "short")}
          </time>
          {blog.readingTime && (
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
                <span>{blog.readingTime} min read</span>
              </span>
            </>
          )}
        </div>

        {/* Title */}
        <h3
          className={`mb-3 font-bold text-slate-900 dark:text-white transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400 ${
            featured ? "text-2xl md:text-3xl" : "text-xl"
          }`}
        >
          {blog.title}
        </h3>

        {/* Description */}
        <p className="mb-4 flex-1 text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed">
          {blog.description || blog.excerpt}
        </p>

        {/* Tags */}
        {blog.tags && blog.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-200 dark:border-slate-700">
            {blog.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-blue-600 to-sky-500 text-white"
              >
                {tag}
              </span>
            ))}
            {blog.tags.length > 3 && (
              <span className="px-3 py-1 text-xs font-semibold rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
                +{blog.tags.length - 3}
              </span>
            )}
          </div>
        )}
      </div>
    </motion.article>
  );

  return (
    <Link href={`/blog/${blog.slug}`} aria-label={`Read blog post: ${blog.title}`}>
      {CardContent}
    </Link>
  );
}
