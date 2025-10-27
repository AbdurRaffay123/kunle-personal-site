/**
 * Premium Research Card with images and glassmorphism design
 */

"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { PortfolioItem } from "@/apis/Portfolio/api";
import CardImage from "@/components/UI/CardImage";
import PreviewModal from "@/components/UI/PreviewModal";
import { getUniqueImage } from "@/lib/imageManager";

interface ResearchCardProps {
  research: PortfolioItem;
  index?: number;
}

const ResearchCard: React.FC<ResearchCardProps> = ({ research, index = 0 }) => {
  const [showPreview, setShowPreview] = useState(false);
  
  // Determine category for image selection
  const category = research.category?.toLowerCase() || 'research';
  
  // Use custom image if provided, otherwise use imageManager
  const imageUrl = research.image || getUniqueImage(category, research.title);

  return (
    <>
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
        className="group overflow-hidden rounded-xl backdrop-blur-sm border shadow-lg hover:shadow-xl transition-all duration-300"
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
          alt={research.title}
          category={category}
          title={research.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          fallbackText="RESEARCH"
        />
        
        {/* Category Badge */}
        {research.category && (
          <div className="absolute top-3 left-3">
            <span className="px-2 py-1 text-xs font-medium bg-blue-600/90 dark:bg-blue-500/90 text-white rounded-full backdrop-blur-sm">
              {research.category}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h2 className="text-xl font-bold mb-3 transition-colors line-clamp-2" style={{ color: 'var(--nav-text)' }}>
          {research.title}
        </h2>
        
        <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-3 leading-relaxed">
          {research.description}
        </p>

        {/* Tags */}
        {research.tags && research.tags.length > 0 && (
          <div className="mb-4 flex flex-wrap gap-2">
            {research.tags?.slice(0, 3).map((tag: string, idx: number) => (
              <span
                key={idx}
                className="px-2.5 py-1 text-xs font-medium rounded-md"
                style={{
                  backgroundColor: 'var(--tag-bg)',
                  color: 'var(--tag-text)'
                }}
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

        {/* Action Buttons */}
        <div className="flex flex-col gap-3">
          {/* Preview Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setShowPreview(true);
          }}
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-lg transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            PREVIEW
          </button>

          {/* View Research Button */}
          {research.researchLink && (
          <a
            href={research.researchLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              e.stopPropagation();
            }}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              View Research
            </a>
          )}
        </div>
      </div>
    </motion.div>

    {/* Preview Modal */}
    <PreviewModal
      isOpen={showPreview}
      onClose={() => setShowPreview(false)}
      item={{
        ...research,
        type: 'research' as const,
        tags: research.tags || [],
      }}
    />
    </>
  );
};

export default ResearchCard;
