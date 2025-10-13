/**
 * Blog index page with premium layout and pagination
 */

"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import BlogCard from "@/components/Card/BlogCard";
import Container from "@/components/UI/Container";
import Spinner from "@/components/UI/Spinner";
import EmptyState from "@/components/UI/EmptyState";
import ErrorState from "@/components/UI/ErrorState";
import { debounce } from "@/lib/utils";
import { useFetch } from "@/hooks/useFetch";
import { getBlogs } from "@/apis/Blog/api"; // <-- Use your API here
import type { BlogMeta } from "@/types";

const POSTS_PER_PAGE = 9;
const BACKEND_URL = (process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000/").replace(/\/$/, "");

export default function BlogPage() {
  const { data: blogs, loading, error, refetch } = useFetch<BlogMeta[]>(getBlogs);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // Filter blogs
  const filteredBlogs = useMemo(() => {
    if (!blogs) return [];
    return blogs.filter(
      (blog) =>
        !searchTerm ||
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.description?.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [blogs, searchTerm]);

  // Pagination
  const totalPages = Math.ceil(filteredBlogs.length / POSTS_PER_PAGE);
  const paginatedBlogs = filteredBlogs.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  const handleSearch = debounce((value: string) => {
    setSearchTerm(value);
    setCurrentPage(1);
  }, 300);

  if (error) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900 pt-32">
        <Container>
          <ErrorState message={error} onRetry={refetch} />
        </Container>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 pt-32 pb-20">
      <div className="max-w-screen-2xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-blue-700 dark:text-blue-400 mb-4">
            Blog
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Articles and insights on AI, ML, software engineering, and technology.
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-10 rounded-xl bg-white/80 dark:bg-slate-800/60 backdrop-blur-sm border border-slate-200/30 dark:border-slate-700/30 p-6 shadow-lg"
        >
          <div className="relative">
            <svg
              className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="search"
              placeholder="Search blog posts..."
              onChange={(e) => handleSearch(e.target.value)}
              className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 py-3 pl-12 pr-4 text-slate-900 dark:text-slate-100 placeholder-slate-500 dark:placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
              aria-label="Search blog posts"
            />
          </div>
        </motion.div>

        {/* Results count */}
        {!loading && blogs && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-6 text-slate-600 dark:text-slate-400"
          >
            {filteredBlogs.length} {filteredBlogs.length === 1 ? "post" : "posts"} found
          </motion.p>
        )}

        {/* Loading state */}
        {loading && (
          <div className="py-20">
            <Spinner size="lg" className="mx-auto" />
          </div>
        )}

        {/* Blog grid */}
        {!loading && paginatedBlogs.length > 0 && (
          <>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {paginatedBlogs.map((blog, index) => (
                <div key={blog._id || index} className="flex flex-col">
                  {/* Blog Image */}
                  {blog.image && (
                    <img
                      src={
                        blog.image.startsWith("/stored-files/")
                          ? `${BACKEND_URL}${blog.image}`
                          : `${BACKEND_URL}/stored-files/blog-images/${blog.image}`
                      }
                      alt={blog.title}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                  )}
                  {/* Blog Card */}
                  <BlogCard blog={blog} index={index} />
                </div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-12 flex justify-center gap-2">
                <button
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="rounded-lg px-4 py-2 font-semibold bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                  aria-label="Previous page"
                >
                  Previous
                </button>
                <div className="flex items-center gap-2">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`rounded-lg px-4 py-2 font-semibold transition-all ${
                        currentPage === page
                          ? "bg-gradient-to-r from-blue-600 to-sky-500 text-white shadow-md"
                          : "bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700"
                      }`}
                      aria-label={`Page ${page}`}
                      aria-current={currentPage === page ? "page" : undefined}
                    >
                      {page}
                    </button>
                  ))}
                </div>
                <button
                  onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="rounded-lg px-4 py-2 font-semibold bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                  aria-label="Next page"
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}

        {/* Empty state */}
        {!loading && filteredBlogs.length === 0 && blogs && blogs.length > 0 && (
          <EmptyState
            title="No blog posts found"
            description="Try adjusting your search criteria"
          />
        )}

        {!loading && (!blogs || blogs.length === 0) && (
          <EmptyState
            title="No blog posts available yet"
            description="Check back soon for articles and insights"
          />
        )}
      </div>
    </div>
  );
}
