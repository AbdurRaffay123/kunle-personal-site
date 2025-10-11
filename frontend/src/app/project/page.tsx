/**
 * Projects page with premium layout and filtering
 */

"use client";

import { useState, useMemo, useCallback } from "react";
import { motion } from "framer-motion";
import ProjectCard from "@/components/Card/ProjectCard";
import Container from "@/components/UI/Container";
import Spinner from "@/components/UI/Spinner";
import EmptyState from "@/components/UI/EmptyState";
import ErrorState from "@/components/UI/ErrorState";
import { debounce } from "@/lib/utils";
import { useFetch } from "@/hooks/useFetch";
import { getProjects } from "@/apis/Project/api";
import type { Project } from "@/apis/Project/api";

export default function ProjectsPage() {
  // Use a stable fetcher function for useFetch
  const fetchProjects = useCallback(() => getProjects().then(res => res.data), []);
  const { data: projects, loading, error, refetch } = useFetch<Project[]>(fetchProjects);

  const [searchTerm, setSearchTerm] = useState("");

  // Filter projects
  const filteredProjects = useMemo(() => {
    if (!projects) return [];
    return projects.filter((project) => {
      return (
        (!searchTerm ||
          project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          project.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          project.technologies?.some((tech) => tech.toLowerCase().includes(searchTerm.toLowerCase()))
        )
      );
    });
  }, [projects, searchTerm]);

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
            Projects
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Showcasing my work in AI/ML, from LLMs to recommender systems and beyond.
          </p>
        </motion.div>

        {/* Search Bar */}
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
                placeholder="Search projects by title, description, or technology..."
                onChange={(e) => handleSearch(e.target.value)}
                className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 py-3 pl-12 pr-4 text-slate-900 dark:text-slate-100 placeholder-slate-500 dark:placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                aria-label="Search projects"
              />
            </div>
          </div>
        </motion.div>

        {/* Results count */}
        {!loading && projects && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-6 text-slate-600 dark:text-slate-400"
          >
            {filteredProjects.length} {filteredProjects.length === 1 ? "project" : "projects"} found
          </motion.p>
        )}

        {/* Loading state */}
        {loading && (
          <div className="py-20">
            <Spinner size="lg" className="mx-auto" />
          </div>
        )}

        {/* Projects grid */}
        {!loading && filteredProjects.length > 0 && (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project._id || index} project={project} index={index} />
            ))}
          </div>
        )}

        {/* Empty state */}
        {!loading && filteredProjects.length === 0 && projects && projects.length > 0 && (
          <EmptyState
            title="No projects found"
            description="Try adjusting your search or filter criteria"
          />
        )}

        {!loading && (!projects || projects.length === 0) && (
          <EmptyState
            title="No projects available yet"
            description="Check back soon for project showcases"
          />
        )}
      </div>
    </div>
  );
}
