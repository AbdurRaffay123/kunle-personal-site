"use client";

import { useEffect, useState } from 'react';

interface Heading {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  headings: Heading[];
}

export default function TableOfContents({ headings }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('');

  // Track active heading - only observe article headings
  useEffect(() => {
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-100px 0px -80% 0px',
      }
    );

    // Observe headings
    headings.forEach((heading) => {
      const element = document.getElementById(heading.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [headings]);

  // Simple scroll handler - same pattern as content.tsx
  const handleTOCClick = (headingId: string) => {
    const element = document.getElementById(headingId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start',
        inline: 'nearest'
      });
      setActiveId(headingId);
    }
  };

  if (headings.length === 0) return null;

  return (
    <div className="rounded-lg border p-4 bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 max-h-[500px] overflow-y-auto">
      <h3 className="mb-4 text-lg font-semibold sticky top-0 bg-white dark:bg-gray-900 pb-2 z-10">
        Table of Contents
      </h3>
      <nav>
        <ul className="space-y-2 text-sm">
          {headings.map((heading, index) => {
            const paddingLeft = `${(heading.level - 1) * 0.75}rem`;
            const isActive = activeId === heading.id;
            
            return (
              <li key={`${heading.id}-${index}`} style={{ paddingLeft }}>
                <button
                  type="button"
                  onClick={() => handleTOCClick(heading.id)}
                  className={`block w-full text-left p-2 rounded-md transition-all ${
                    isActive
                      ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 font-medium'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                  }`}
                >
                  {heading.text}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}