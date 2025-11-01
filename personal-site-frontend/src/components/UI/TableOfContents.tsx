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

  // Scroll handler for TOC clicks
  const handleTOCClick = (e: React.MouseEvent<HTMLButtonElement>, headingId: string) => {
    e.preventDefault();
    const element = document.getElementById(headingId);
    if (element) {
      const yOffset = -100; // Offset for header
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
      setActiveId(headingId);
    }
  };

  if (headings.length === 0) return null;

  return (
    <div className="sticky top-24 z-10 rounded-lg border p-4 bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700">
      <h3 className="mb-4 text-lg font-semibold pb-2 text-black dark:text-white">
        Table of Contents
      </h3>
      <nav>
        <ul className="space-y-2 text-sm list-disc pl-5">
          {headings.map((heading, index) => {
            const paddingLeft = `${(heading.level - 1) * 0.75}rem`;
            const isActive = activeId === heading.id;
            
            return (
              <li key={`${heading.id}-${index}`} style={{ paddingLeft, listStyleType: 'disc' }}>
                <button
                  type="button"
                  onClick={(e) => handleTOCClick(e, heading.id)}
                  className={`block w-full text-left p-2 rounded-md transition-all ${
                    isActive
                      ? 'bg-white dark:bg-gray-700 text-black dark:text-blue-400 font-medium shadow-sm'
                      : 'text-black dark:text-gray-300 hover:bg-white dark:hover:bg-gray-700'
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