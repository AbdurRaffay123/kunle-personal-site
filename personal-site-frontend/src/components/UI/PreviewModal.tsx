/**
 * Preview Modal Component for Projects and Research
 * Compact modal with 140px x 140px sections
 */

"use client";

import { useEffect } from "react";

interface PreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: {
    _id: string;
    title: string;
    description: string;
    type: 'project' | 'research';
    image?: string;
    technologies?: string[];
    tags?: string[];
    category?: string;
    githubUrl?: string;
    link?: string;
    researchLink?: string;
    createdAt: string;
    updatedAt: string;
  };
}

export default function PreviewModal({ isOpen, onClose, item }: PreviewModalProps) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);
  
  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !item) {
    return null;
  }

  // Use custom image if provided, otherwise use fallback
  const imageUrl = item.image || 'https://via.placeholder.com/800x600/6366f1/ffffff?text=Project+Image';

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Responsive Modal */}
      <div
        className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden w-full max-w-4xl mx-4"
        style={{ 
          width: '840px', 
          height: '420px',
          maxWidth: 'calc(100vw - 2rem)',
          maxHeight: 'calc(100vh - 2rem)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col md:flex-row h-full">
          {/* Image Section - Full width on mobile, half width on desktop */}
          <div className="relative w-full md:w-1/2 h-64 md:h-full overflow-hidden">
            <img
              src={imageUrl}
              alt={item.title}
              className="w-full h-full object-cover"
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20" />
            
            {/* Removed Type Badge on image */}
          </div>

          {/* Content Section - Full width on mobile, half width on desktop */}
          <div className="w-full md:w-1/2 h-full p-4 md:p-6 overflow-hidden relative">
            {/* Close Button - Only visible on desktop, positioned in content section */}
            <button
              onClick={onClose}
              className="hidden md:block absolute top-4 right-4 p-2 rounded-full bg-gray-700 hover:bg-gray-600 text-white transition-colors z-10"
              aria-label="Close preview"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Mobile Close Button - Visible only on mobile, positioned at top */}
            <button
              onClick={onClose}
              className="md:hidden absolute top-2 right-2 p-2 rounded-full bg-gray-700 hover:bg-gray-600 text-white transition-colors z-10"
              aria-label="Close preview"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Title */}
            <div className="flex items-baseline justify-between">
              <h2 className="text-2xl lg:text-3xl font-bold mb-2 text-gray-900 dark:text-white">
                {item.title}
              </h2>
            </div>
            {/* Moved Type Badge Below Title */}
            <span className="inline-block uppercase font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full px-3 py-1 text-xs tracking-wider mb-4 ml-1">
              {item.type === 'project' ? 'PROJECT' : 'RESEARCH'}
            </span>
            <p className="text-gray-600 dark:text-slate-400 mb-6 leading-relaxed overflow-hidden">
              {truncateWords(item.description, 45)}
            </p>

            {/* Technologies/Tags */}
            <div className="mb-4">
              <div className="flex flex-wrap gap-1 md:gap-2">
                {(item.type === 'project' ? item.technologies : item.tags)?.slice(0, 3).map((tech, index) => (
                  <span
                    key={index}
                    className="px-2 md:px-3 py-1 md:py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs md:text-sm rounded-md md:rounded-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="flex flex-col sm:flex-row gap-2 md:gap-3">
              {item.type === 'project' && item.githubUrl && (
                <a
                  href={item.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-3 md:px-4 py-2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-lg text-xs md:text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
                >
                  <svg className="w-3 md:w-4 h-3 md:h-4 mr-1 md:mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  View Code
                </a>
              )}
              
              {item.type === 'research' && item.researchLink && (
                <a
                  href={item.researchLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-3 md:px-4 py-2 bg-blue-600 text-white rounded-lg text-xs md:text-sm font-medium hover:bg-blue-700 transition-colors"
                >
                  <svg className="w-3 md:w-4 h-3 md:h-4 mr-1 md:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Read Paper
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function truncateWords(str: string, numWords: number = 38): string {
  const words = str.split(' ');
  if (words.length <= numWords) return str;
  return words.slice(0, numWords).join(' ') + '...';
}