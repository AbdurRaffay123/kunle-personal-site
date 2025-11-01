/**
 * Premium Project Card with images and glassmorphism design
 */

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PortfolioItem } from "@/apis/Portfolio/api";
import CardImage from "@/components/UI/CardImage";
import PreviewModal from "@/components/UI/PreviewModal";
import { getUniqueImage } from "@/lib/imageManager";

interface ProjectCardProps {
  project: PortfolioItem;
  index?: number;
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const [showPreview, setShowPreview] = useState(false);
  
  // Determine category for image selection
  const category = project.technologies?.[0]?.toLowerCase() || 'projects';
  
  // Use custom image if provided, otherwise use imageManager
  const imageUrl = project.image || getUniqueImage(category, project.title);

  return (
    <>
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
        className="group overflow-hidden rounded-xl backdrop-blur-sm border shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col"
        style={{
          backgroundColor: 'var(--card)',
          borderColor: 'var(--border)',
          boxShadow: 'var(--shadow)'
        }}
      >
      {/* Image Container */}
      <div className="relative h-40 overflow-hidden">
        <CardImage
          src={imageUrl}
          alt={project.title}
          category={category}
          title={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          fallbackText="PROJECT"
        />
        
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="mb-1 text-xl font-bold transition-colors line-clamp-2" style={{ color: 'var(--nav-text)' }}>
          {project.title}
        </h3>
        <p className="mb-4 text-gray-600 dark:text-slate-400 leading-relaxed overflow-hidden">
         {truncateWords(project.description, 45)}
        </p>

        {/* Tech Stack */}
        {project.technologies && project.technologies.length > 0 && (
          <div
            className="mb-4 flex flex-wrap gap-2"
            role="list"
            aria-label="Technologies used"
          >
            {project.technologies?.slice(0, 4).map((tech: string) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-xs font-medium rounded-md"
                style={{
                  backgroundColor: 'var(--tag-bg)',
                  color: 'var(--tag-text)'
                }}
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-2.5 py-1 text-xs font-medium rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col gap-3 mt-auto">
          {/* Preview Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setShowPreview(true);
          }}
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            PREVIEW
          </button>

          {/* External Links */}
          <div className="flex gap-2">
            {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              e.stopPropagation();
            }}
                className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-700 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
                aria-label={`View ${project.title} on GitHub`}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>

    {/* Preview Modal */}
    <PreviewModal
      isOpen={showPreview}
      onClose={() => setShowPreview(false)}
      item={{
        ...project,
        type: 'project' as const,
        technologies: project.technologies || [],
      }}
    />
    </>
  );
}

function truncateWords(str: string, numWords: number = 38): string {
  const words = str.split(' ');
  if (words.length <= numWords) return str;
  return words.slice(0, numWords).join(' ') + '...';
}
