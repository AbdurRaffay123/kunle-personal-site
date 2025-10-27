/**
 * Simple Preview Modal Component for testing
 */

"use client";

import { useEffect } from "react";

interface SimplePreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: {
    _id: string;
    title: string;
    description: string;
    type: 'project' | 'research';
    technologies?: string[];
    tags?: string[];
  };
}

export default function SimplePreviewModal({ isOpen, onClose, item }: SimplePreviewModalProps) {
  console.log('SimplePreviewModal render:', { isOpen, item: item?.title });
  
  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !item) {
    console.log('SimplePreviewModal not rendering:', { isOpen, item: !!item });
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden bg-white dark:bg-gray-800 rounded-2xl shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/20 hover:bg-black/40 text-white transition-colors"
          aria-label="Close preview"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Content */}
        <div className="flex flex-col lg:flex-row max-h-[90vh]">
          {/* Image Section */}
          <div className="relative lg:w-1/2 h-64 lg:h-auto bg-gradient-to-br from-blue-500 to-purple-600">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-white text-6xl">🚀</div>
            </div>
            
            {/* Type Badge */}
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 text-sm font-semibold rounded-full backdrop-blur-sm bg-blue-600/90 text-white">
                {item.type === 'project' ? 'Project' : 'Research'}
              </span>
            </div>
          </div>

          {/* Content Section */}
          <div className="flex-1 p-6 lg:p-8 overflow-y-auto">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              {item.title}
            </h2>
            
            <p className="text-gray-600 dark:text-slate-400 mb-6 leading-relaxed">
              {item.description}
            </p>

            {/* Technologies/Tags */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold mb-3 text-gray-900 dark:text-white">
                {item.type === 'project' ? 'Technologies' : 'Tags'}
              </h3>
              <div className="flex flex-wrap gap-2">
                {(item.technologies || item.tags || []).map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-lg dark:bg-blue-900 dark:text-blue-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={onClose}
                className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Close Preview
              </button>
              <button
                onClick={() => {
                  console.log('External link clicked!');
                  window.open('https://github.com', '_blank');
                }}
                className="flex-1 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                View on GitHub
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
