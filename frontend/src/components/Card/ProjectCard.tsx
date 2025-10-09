/**
 * Premium Project Card with glassmorphism and gradient accents
 */

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Project } from "@/types";
import Button from "@/components/UI/Button";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
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
      className="group overflow-hidden rounded-xl bg-white/80 dark:bg-slate-800/60 backdrop-blur-sm border border-slate-200/30 dark:border-slate-700/30 shadow-lg hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300"
    >
      {/* Image */}
      {project.image && (
        <div className="relative h-56 overflow-hidden bg-gradient-to-br from-blue-100 to-sky-100 dark:from-blue-900/20 dark:to-sky-900/20">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      )}

      {/* Content */}
      <div className="p-6">
        <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400">
          {project.title}
        </h3>

        <p className="mb-4 text-slate-600 dark:text-slate-400 leading-relaxed">
          {project.description}
        </p>

        {/* Tech Stack */}
        {project.tech && project.tech.length > 0 && (
          <div
            className="mb-4 flex flex-wrap gap-2"
            role="list"
            aria-label="Technologies used"
          >
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-xs font-medium rounded-md bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3 pt-4 border-t border-slate-200 dark:border-slate-700">
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
              aria-label={`View source code for ${project.title}`}
            >
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
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
              Code
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-sky-500 rounded-lg hover:from-blue-700 hover:to-sky-600 shadow-md hover:shadow-lg hover:shadow-blue-500/30 transition-all"
              aria-label={`View live demo of ${project.title}`}
            >
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
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
