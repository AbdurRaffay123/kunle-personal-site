/**
 * Table of Contents Component
 * Displays clickable links to headings with smooth scroll and active highlighting
 */

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

  useEffect(() => {
    // Track which section is currently in view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-100px 0px -80% 0px', // Trigger when heading is near top of viewport
        threshold: 1.0,
      }
    );

    // Observe all heading elements
    headings.forEach((heading) => {
      const element = document.getElementById(heading.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [headings]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      // Smooth scroll to element
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      // Update URL hash without jumping
      window.history.pushState(null, '', `#${id}`);
      setActiveId(id);
    }
  };

  if (headings.length === 0) {
    return null;
  }

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800 sticky top-24">
      <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
        Table of Contents
      </h3>
      <nav>
        <ul className="space-y-2 text-sm list-disc pl-5">
          {headings.map((heading) => {
            const isActive = activeId === heading.id;
            // Calculate additional padding for nested levels (after the bullet)
            const paddingLeft = `${(heading.level - 1) * 1}rem`;
            
            return (
              <li
                key={heading.id}
                style={{ paddingLeft }}
                className={`transition-all duration-200 ${
                  isActive
                    ? 'marker:text-blue-600 dark:marker:text-blue-400'
                    : 'marker:text-gray-400 dark:marker:text-gray-600'
                }`}
              >
                <a
                  href={`#${heading.id}`}
                  onClick={(e) => handleClick(e, heading.id)}
                  className={`transition-all duration-200 ${
                    isActive
                      ? 'text-blue-600 dark:text-blue-400 font-medium'
                      : 'text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:underline'
                  }`}
                >
                  {heading.text}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

