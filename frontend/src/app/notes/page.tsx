/**
 * Notes index page with premium layout and filtering
 */

"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import NoteCard from "@/components/Card/NoteCard";
import Container from "@/components/UI/Container";
import Spinner from "@/components/UI/Spinner";
import EmptyState from "@/components/UI/EmptyState";
import ErrorState from "@/components/UI/ErrorState";
import { debounce } from "@/lib/utils";
import { useFetch } from "@/hooks/useFetch";
import { getNotes } from "@/lib/api";
import type { NoteMeta } from "@/types";

export default function NotesPage() {
  const { data: notes, loading, error, refetch } = useFetch<NoteMeta[]>(getNotes);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

  // Extract unique topics
  const topics = useMemo(() => {
    if (!notes || !Array.isArray(notes)) return [];
    const uniqueTopics = Array.from(new Set(notes.map((note) => note.topic).filter(Boolean)));
    return uniqueTopics;
  }, [notes]);

  // Filter notes
  const filteredNotes = useMemo(() => {
    if (!notes || !Array.isArray(notes)) return [];
    return notes.filter((note) => {
      const matchesSearch =
        !searchTerm ||
        note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        note.excerpt?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        note.tags?.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesTopic = !selectedTopic || note.topic === selectedTopic;
      return matchesSearch && matchesTopic;
    });
  }, [notes, searchTerm, selectedTopic]);

  const handleSearch = debounce((value: string) => {
    setSearchTerm(value);
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
            Technical Notes
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A collection of technical notes, guides, and learning resources on AI, ML, and software engineering.
          </p>
        </motion.div>

        {/* Search and Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-10 rounded-xl bg-white/80 dark:bg-slate-800/60 backdrop-blur-sm border border-slate-200/30 dark:border-slate-700/30 p-6 shadow-lg"
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            {/* Search input */}
            <div className="relative flex-1">
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
                placeholder="Search notes by title, tag, or content..."
                onChange={(e) => handleSearch(e.target.value)}
                className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 py-3 pl-12 pr-4 text-slate-900 dark:text-slate-100 placeholder-slate-500 dark:placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                aria-label="Search notes"
              />
            </div>

            {/* Topic filter */}
            {topics.length > 0 && (
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedTopic(null)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition-all ${
                    selectedTopic === null
                      ? "bg-gradient-to-r from-blue-600 to-sky-500 text-white shadow-md"
                      : "bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600"
                  }`}
                >
                  All
                </button>
                {topics.map((topic) => (
                  <button
                    key={topic}
                    onClick={() => setSelectedTopic(topic || null)}
                    className={`rounded-full px-4 py-2 text-sm font-semibold transition-all ${
                      selectedTopic === topic
                        ? "bg-gradient-to-r from-blue-600 to-sky-500 text-white shadow-md"
                        : "bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600"
                    }`}
                  >
                    {topic}
                  </button>
                ))}
              </div>
            )}
          </div>
        </motion.div>

        {/* Results count */}
        {!loading && notes && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-6 text-slate-600 dark:text-slate-400"
          >
            {filteredNotes.length} {filteredNotes.length === 1 ? "note" : "notes"} found
          </motion.p>
        )}

        {/* Loading state */}
        {loading && (
          <div className="py-20">
            <Spinner size="lg" className="mx-auto" />
          </div>
        )}

        {/* Notes grid */}
        {!loading && filteredNotes.length > 0 && (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {filteredNotes.map((note, index) => (
              <NoteCard key={note._id} note={note} index={index} />
            ))}
          </div>
        )}

        {/* Empty state */}
        {!loading && filteredNotes.length === 0 && notes && notes.length > 0 && (
          <EmptyState
            title="No notes found"
            description="Try adjusting your search or filter criteria"
          />
        )}

        {!loading && (!notes || notes.length === 0) && (
          <EmptyState
            title="No notes available yet"
            description="Check back soon for technical notes and learning resources"
          />
        )}
      </div>
    </div>
  );
}
