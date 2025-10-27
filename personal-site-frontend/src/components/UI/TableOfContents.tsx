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
  const [activeHeading, setActiveHeading] = useState<string>('');

  useEffect(() => {
    // Track which section is currently in view using Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const headingText = entry.target.textContent?.trim() || '';
            setActiveHeading(headingText);
          }
        });
      },
      {
        rootMargin: '-90px 0px -80% 0px',
        threshold: 0.2,
      }
    );

    // Wait for content to be rendered, then observe all headings
    const timeoutId = setTimeout(() => {
      const allHeadings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
      allHeadings.forEach((heading) => {
        observer.observe(heading);
      });
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, text: string, id: string) => {
    e.preventDefault();
    
    // Find the heading element by ID
    const targetElement = document.getElementById(id);
    
    if (!targetElement) {
      console.warn('Could not find element with id:', id);
      // Fallback: Try to find by text
      const allHeadings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
      for (const heading of Array.from(allHeadings)) {
        if (heading.textContent?.trim() === text.trim()) {
          // Use native scrollIntoView which respects scroll-margin-top
          (heading as HTMLElement).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
          setActiveHeading(text);
          return;
        }
      }
      return;
    }
    
    // Headings already have scroll-margin-top set to 100px in NotesHtmlRenderer
    // So we can use the simple native scrollIntoView
    targetElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
    
    // Update active heading
    setActiveHeading(text);
  };

  if (headings.length === 0) {
    return null;
  }

  return (
    <div className="rounded-lg border p-4 md:p-5 lg:p-6 lg:sticky lg:top-24 max-h-[400px] md:max-h-none overflow-y-auto" style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)' }}>
      <h3 className="mb-4 text-sm md:text-base lg:text-lg font-semibold sticky top-0 bg-[var(--card)] pb-2" style={{ color: 'var(--nav-text)' }}>
        Table of Contents
      </h3>
      <nav>
        <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm list-disc pl-4 md:pl-5">
          {headings.map((heading) => {
            const isActive = activeHeading === heading.text;
            // Calculate additional padding for nested levels
            const paddingLeft = `${(heading.level - 1) * 0.75}rem`;
            
            return (
              <li
                key={heading.id}
                style={{ paddingLeft }}
                className="transition-all duration-200"
              >
                <a
                  href={`#${heading.id}`}
                  onClick={(e) => handleClick(e, heading.text, heading.id)}
                  className={`block transition-all duration-200 p-1 -m-1 rounded-md cursor-pointer ${
                    isActive
                      ? 'font-medium text-blue-600 dark:text-blue-400'
                      : 'hover:underline'
                  }`}
                  style={{
                    color: isActive ? undefined : 'var(--text-secondary)'
                  }}
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

