/**
 * Premium Research Card with images and glassmorphism design
 */

"use client";

import React from "react";
import { motion } from "framer-motion";
import type { Research } from "@/apis/Research/api";
import CardImage from "@/components/UI/CardImage";

interface ResearchCardProps {
  research: Research;
  index?: number;
}

const ResearchCard: React.FC<ResearchCardProps> = ({ research, index = 0 }) => {
  // Determine category for image selection
  const category = research.category?.toLowerCase() || 'research';

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
      className="group overflow-hidden rounded-xl bg-white/90 dark:bg-slate-800/60 backdrop-blur-sm border border-gray-200/40 dark:border-slate-700/30 shadow-lg hover:shadow-xl hover:shadow-gray-200/40 dark:hover:shadow-blue-500/20 transition-all duration-300"
    >
      {/* Image Container */}
      <div className="relative h-40 overflow-hidden">
        <CardImage
          src={(research as any).image}
          alt={research.title}
          category={category}
          title={research.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          fallbackText="RESEARCH"
        />
        
        {/* Category Badge */}
        {research.category && (
          <div className="absolute top-3 left-3">
            <span className="px-2 py-1 text-xs font-medium bg-purple-600/90 dark:bg-purple-500/90 text-white rounded-full backdrop-blur-sm">
              {research.category}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3 transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400 line-clamp-2">
          {research.title}
        </h2>
        
        <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-3 leading-relaxed">
          {research.description}
        </p>

        {/* Tags */}
        {research.tags && research.tags.length > 0 && (
          <div className="mb-4 flex flex-wrap gap-2">
            {research.tags.slice(0, 3).map((tag, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 text-xs font-medium rounded-md bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300"
              >
                {tag}
              </span>
            ))}
            {research.tags.length > 3 && (
              <span className="px-2.5 py-1 text-xs font-medium rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                +{research.tags.length - 3}
              </span>
            )}
          </div>
        )}

        {/* Action Button */}
        <a
          href={research.researchLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 rounded-lg transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800"
        >
          View Research
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>

        {/* Date */}
        <div className="mt-3 text-xs text-slate-500 dark:text-slate-400">
          {research.formattedDate || new Date(research.createdAt).toLocaleDateString()}
        </div>
      </div>
    </motion.div>
  );
};

export default ResearchCard;
