/**
 * Table of Contents Component - Optimized scroll navigation
 */

"use client";

import { useState, useCallback } from "react";

interface Heading {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  headings: Heading[];
}

export default function TableOfContents({ headings }: TableOfContentsProps) {
  const [activeHeading, setActiveHeading] = useState<string>("");

  // Enhanced scroll function with accurate header height detection
  const scrollToHeading = useCallback((id: string, text: string) => {
    const screenWidth = window.innerWidth;

    // Find element by ID or text
    let element = document.getElementById(id);
    
    if (!element) {
      // Fallback: find by text
      const allHeadings = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6'));
      const matchingHeading = allHeadings.find(heading => 
        heading.textContent?.trim().toLowerCase() === text.toLowerCase()
      );
      if (matchingHeading) {
        element = matchingHeading as HTMLElement;
        // Set ID if found by text
        if (!element.id) {
          element.id = id;
        }
      }
    }

    if (element) {
      // Dynamically measure actual header height
      const header = document.querySelector('header[class*="fixed"]');
      let headerHeight = 80; // safe default
      
      if (header) {
        const headerRect = header.getBoundingClientRect();
        headerHeight = headerRect.height;
      } else {
        // Fallback based on screen size
        if (screenWidth >= 1024) {
          headerHeight = 90; // desktop
        } else if (screenWidth >= 768) {
          headerHeight = 75; // tablet
        } else {
          headerHeight = 65; // mobile
        }
      }

      // Calculate scroll margin with reasonable padding
      const scrollMargin = headerHeight + 16; // 16px breathing room

      // Apply scroll margin immediately
      element.style.scrollMarginTop = `${scrollMargin}px`;
      element.style.setProperty('scroll-margin-top', `${scrollMargin}px`, 'important');

      // Small delay to ensure CSS is applied, then scroll
      setTimeout(() => {
        element!.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start',
          inline: 'nearest'
        });

        // Verify scroll worked after a delay
        setTimeout(() => {
          const rect = element!.getBoundingClientRect();
          const expectedTop = scrollMargin;
          const actualTop = rect.top;
          const difference = Math.abs(actualTop - expectedTop);

          if (difference > 20) {
            // Manual adjustment if needed
            const scrollTop = window.pageYOffset || window.scrollY;
            const targetScroll = scrollTop + actualTop - expectedTop;
            window.scrollTo({
              top: targetScroll,
              behavior: 'smooth'
            });
          }
        }, 300);
      }, 50);

      setActiveHeading(text);
      
      // Update URL without scrolling
      try {
        window.history.replaceState(null, '', `#${id}`);
      } catch (error) {
        // Silently fail
      }
    }
  }, []);

  const handleClick = useCallback((id: string, text: string) => {
    scrollToHeading(id, text);
  }, [scrollToHeading]);

  if (headings.length === 0) {
    return null;
  }

  return (
    <div 
      className="rounded-lg border p-4 bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 max-h-[500px] overflow-y-auto"
    >
      <h3 className="mb-4 text-lg font-semibold sticky top-0 bg-white dark:bg-gray-900 pb-2 z-10">
        Table of Contents
      </h3>

      <nav>
        <ul className="space-y-2 text-sm">
          {headings.map((heading, index) => {
            const isActive = activeHeading === heading.text;
            const paddingLeft = `${(heading.level - 1) * 0.75}rem`;

            return (
              <li key={`${heading.id}-${index}`} style={{ paddingLeft }}>
                <button
                  type="button"
                  onClick={() => handleClick(heading.id, heading.text)}
                  className={`block w-full text-left p-2 rounded-md transition-all ${
                    isActive
                      ? "font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20"
                      : "hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
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