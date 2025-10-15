/**
 * Premium Project Card with images and glassmorphism design
 */

"use client";

import { motion } from "framer-motion";
import { Project } from "@/apis/Project/api";
import CardImage from "@/components/UI/CardImage";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  // Determine category for image selection
  const category = project.technologies?.[0]?.toLowerCase() || 'projects';

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
      className="group overflow-hidden rounded-xl bg-white/90 dark:bg-slate-800/60 backdrop-blur-sm border border-gray-200/40 dark:border-slate-700/30 shadow-lg hover:shadow-xl hover:shadow-gray-200/40 dark:hover:shadow-blue-500/20 transition-all duration-300"
    >
      {/* Image Container */}
      <div className="relative h-40 overflow-hidden">
        <CardImage
          src={(project as any).image}
          alt={project.title}
          category={category}
          title={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          fallbackText="PROJECT"
        />
        
        {/* Status Badge */}
        {project.status && (
          <div className="absolute top-3 right-3">
            <span className={`px-2 py-1 text-xs font-medium rounded-full backdrop-blur-sm ${
              project.status === 'completed' 
                ? 'bg-green-600/90 dark:bg-green-500/90 text-white'
                : project.status === 'in-progress'
                ? 'bg-yellow-600/90 dark:bg-yellow-500/90 text-white'
                : 'bg-blue-600/90 dark:bg-blue-500/90 text-white'
            }`}>
              {project.status}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400 line-clamp-2">
          {project.title}
        </h3>

        <p className="mb-4 text-gray-600 dark:text-slate-400 leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Tech Stack */}
        {project.technologies && project.technologies.length > 0 && (
          <div
            className="mb-4 flex flex-wrap gap-2"
            role="list"
            aria-label="Technologies used"
          >
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-xs font-medium rounded-md bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300"
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

        {/* Links */}
        <div className="flex gap-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-700 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
              aria-label={`View ${project.title} on GitHub`}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
          )}
          {(project.liveUrl || project.link) && (
            <a
              href={project.liveUrl || project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
              aria-label={`View ${project.liveUrl ? 'live demo' : 'project'} of ${project.title}`}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              {project.liveUrl ? 'Live Demo' : 'View Project'}
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
