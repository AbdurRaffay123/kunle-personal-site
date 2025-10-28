/**
 * Table of Contents Component - Redesigned for reliability
 * Simple, clean implementation that works on all devices
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

  // Simple intersection observer for active heading tracking
  useEffect(() => {
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
        rootMargin: '-100px 0px -50% 0px',
        threshold: 0.1,
      }
    );

    // Observe all headings after a short delay
    const timeoutId = setTimeout(() => {
      const allHeadings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
      allHeadings.forEach((heading) => {
        observer.observe(heading);
      });
    }, 200);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, []);

  // Alternative scroll method using manual calculation
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, text: string, id: string) => {
    e.preventDefault();
    
    // Find the target element
    const targetElement = document.getElementById(id);
    
    if (!targetElement) {
      // Fallback: find by text content
      const allHeadings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
      for (const heading of Array.from(allHeadings)) {
        if (heading.textContent?.trim() === text.trim()) {
          scrollToElement(heading as HTMLElement);
          setActiveHeading(text);
          return;
        }
      }
      return;
    }
    
    // Use our custom scroll method
    scrollToElement(targetElement);
    setActiveHeading(text);
  };

  // Custom scroll function that works reliably
  const scrollToElement = (element: HTMLElement) => {
    // Get element position
    const rect = element.getBoundingClientRect();
    const elementTop = rect.top + window.pageYOffset;
    
    // Calculate scroll position with offset for navbar
    const offsetTop = 100; // Account for navbar height
    const scrollTo = elementTop - offsetTop;
    
    // Smooth scroll to calculated position
    window.scrollTo({
      top: Math.max(0, scrollTo),
      behavior: 'smooth'
    });
  };

  if (headings.length === 0) {
    return null;
  }

  return (
    <div className="rounded-lg border p-4 md:p-5 lg:p-6 lg:sticky lg:top-24 max-h-[400px] md:max-h-none overflow-y-auto" 
         style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)' }}>
      
      <h3 className="mb-4 text-sm md:text-base lg:text-lg font-semibold sticky top-0 bg-[var(--card)] pb-2" 
          style={{ color: 'var(--nav-text)' }}>
        Table of Contents
      </h3>
      
      <nav>
        <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm">
          {headings.map((heading, index) => {
            const isActive = activeHeading === heading.text;
            const paddingLeft = `${(heading.level - 1) * 0.75}rem`;
            
            return (
              <li key={`${heading.id}-${index}`} style={{ paddingLeft }}>
                <a
                  href={`#${heading.id}`}
                  onClick={(e) => handleClick(e, heading.text, heading.id)}
                  className={`block transition-all duration-200 p-1 -m-1 rounded-md cursor-pointer ${
                    isActive
                      ? 'font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                      : 'hover:underline hover:bg-gray-50 dark:hover:bg-gray-800'
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

