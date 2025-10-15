"use client";

import { useState, useMemo, useCallback } from "react";
import { motion } from "framer-motion";
import Container from "@/components/UI/Container";
import Spinner from "@/components/UI/Spinner";
import EmptyState from "@/components/UI/EmptyState";
import ErrorState from "@/components/UI/ErrorState";
import { debounce } from "@/lib/utils";
import { useFetch } from "@/hooks/useFetch";
import { getAllResearch, getResearchByTag } from "@/apis/Research/api";
import type { Research } from "@/apis/Research/api";
import ResearchCard from "@/components/Card/ResearchCard"; // You should create this similar to ProjectCard

const TAG_FILTERS = [
  "All",
  "LLM & Deep Learning",
  "NLP",
  "Forecasting",
  "ML",
  "Others",
];

export default function ResearchPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(false);
  const [activeTag, setActiveTag] = useState("All");

  const fetchResearchList = useCallback(
    async () => {
      if (activeTag && activeTag !== "All") {
        const res = await getResearchByTag(activeTag);
        return res.data;
      } else {
        const res = await getAllResearch();
        return res.data;
      }
    },
    [activeTag]
  );

  const { data: researchList, loading, error, refetch } = useFetch<Research[]>(fetchResearchList);

  // Filter researches (only by search, tag filtering is now handled by API)
  const filteredResearch = useMemo(() => {
    if (!researchList) return [];
    return researchList.filter((research) => {
      return (
        !searchTerm ||
        research.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        research.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        research.category?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        research.tags?.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    });
  }, [researchList, searchTerm]);

  const handleSearch = debounce((value: string) => {
    setSearchTerm(value);
  }, 300);

  if (error) {
    return (
      <div className="min-h-screen pt-32" style={{ backgroundColor: 'var(--background)' }}>
        <Container>
          <ErrorState message={error} onRetry={refetch} />
        </Container>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20" style={{ backgroundColor: 'var(--background)' }}>
      <div className="max-w-screen-2xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4" style={{ color: 'var(--nav-text)' }}>
            Researches
          </h1>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Explore my published and ongoing research in AI, ML, and more.
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-10 rounded-xl backdrop-blur-sm border p-6 shadow-lg"
          style={{
            backgroundColor: 'var(--search-bg)',
            borderColor: 'var(--search-border)'
          }}
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
                placeholder="Search research by title, description, category, or tag..."
                onChange={(e) => handleSearch(e.target.value)}
                className="w-full rounded-lg border py-3 pl-12 pr-4 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                style={{
                  backgroundColor: 'var(--card)',
                  borderColor: 'var(--search-border)',
                  color: 'var(--search-text)'
                }}
                aria-label="Search research"
              />
            </div>
          </div>
        </motion.div>

        {/* Tag Filters */}
        <div className="mb-8 flex flex-wrap gap-3 justify-center">
          {TAG_FILTERS.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-4 py-2 rounded-full font-medium text-sm transition ${
                activeTag === tag
                  ? "bg-blue-600 text-white shadow"
                  : "hover:bg-blue-100 dark:hover:bg-blue-900"
              }`}
              style={{
                backgroundColor: activeTag === tag ? undefined : 'var(--card)',
                color: activeTag === tag ? undefined : 'var(--search-text)',
                borderColor: activeTag === tag ? undefined : 'var(--search-border)',
                border: activeTag === tag ? undefined : '1px solid'
              }}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Results count */}
        {!loading && researchList && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-6 text-slate-600 dark:text-slate-400"
          >
            {filteredResearch.length} {filteredResearch.length === 1 ? "research" : "researches"} found
          </motion.p>
        )}

        {/* Loading state */}
        {loading && (
          <div className="py-20">
            <Spinner size="lg" className="mx-auto" />
          </div>
        )}

        {/* Researches grid */}
        {!loading && filteredResearch.length > 0 && (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {filteredResearch.map((research, index) => (
              <ResearchCard key={research._id || index} research={research} index={index} />
            ))}
          </div>
        )}

        {/* Empty state */}
        {!loading && filteredResearch.length === 0 && researchList && researchList.length > 0 && (
          <EmptyState
            title="No Research found"
            description="Try adjusting your search or filter criteria"
          />
        )}

        {!loading && (!researchList || researchList.length === 0) && (
          <EmptyState
            title="No Research found"
            description="Check back soon for new research publications"
          />
        )}
      </div>
    </div>
  );
}