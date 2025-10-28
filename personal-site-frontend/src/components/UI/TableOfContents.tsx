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
    console.log('🔍 TOC Debug: Component mounted, headings:', headings);
    console.log('🔍 TOC Debug: Screen size:', window.innerWidth, 'x', window.innerHeight);
    
    // Track which section is currently in view using Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        console.log('🔍 TOC Debug: Intersection Observer triggered with', entries.length, 'entries');
        entries.forEach((entry) => {
          console.log('🔍 TOC Debug: Entry:', {
            target: entry.target,
            text: entry.target.textContent?.trim(),
            isIntersecting: entry.isIntersecting,
            intersectionRatio: entry.intersectionRatio,
            boundingClientRect: entry.boundingClientRect
          });
          
          if (entry.isIntersecting) {
            const headingText = entry.target.textContent?.trim() || '';
            console.log('🔍 TOC Debug: Setting active heading to:', headingText);
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
      console.log('🔍 TOC Debug: Found', allHeadings.length, 'headings in DOM');
      
      allHeadings.forEach((heading, index) => {
        console.log(`🔍 TOC Debug: Heading ${index}:`, {
          tagName: heading.tagName,
          text: heading.textContent?.trim(),
          id: heading.id,
          className: heading.className,
          offsetTop: (heading as HTMLElement).offsetTop,
          offsetParent: (heading as HTMLElement).offsetParent,
          getBoundingClientRect: heading.getBoundingClientRect(),
          computedStyle: {
            position: getComputedStyle(heading).position,
            top: getComputedStyle(heading).top,
            transform: getComputedStyle(heading).transform
          }
        });
        observer.observe(heading);
      });
      
      console.log('🔍 TOC Debug: Observer setup complete');
    }, 100);

    return () => {
      console.log('🔍 TOC Debug: Component unmounting, cleaning up observer');
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, text: string, id: string) => {
    console.log('🔍 TOC Debug: Click event triggered', { text, id, screenWidth: window.innerWidth });
    e.preventDefault();
    
    // Find the heading element by ID
    const targetElement = document.getElementById(id);
    console.log('🔍 TOC Debug: Target element found by ID:', targetElement);
    
    if (!targetElement) {
      console.warn('🔍 TOC Debug: Could not find element with id:', id);
      // Fallback: Try to find by text
      const allHeadings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
      console.log('🔍 TOC Debug: Searching through', allHeadings.length, 'headings by text');
      
      for (const heading of Array.from(allHeadings)) {
        console.log('🔍 TOC Debug: Checking heading:', {
          text: heading.textContent?.trim(),
          targetText: text.trim(),
          matches: heading.textContent?.trim() === text.trim()
        });
        
        if (heading.textContent?.trim() === text.trim()) {
          console.log('🔍 TOC Debug: Found heading by text, scrolling...');
          // Use native scrollIntoView which respects scroll-margin-top
          (heading as HTMLElement).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
          setActiveHeading(text);
          console.log('🔍 TOC Debug: Scroll completed, active heading set to:', text);
          return;
        }
      }
      console.log('🔍 TOC Debug: No heading found by text either');
      return;
    }
    
    console.log('🔍 TOC Debug: Scrolling to element with ID:', id);
    
    // Use the simple and correct scrollIntoView method for all screen sizes
    // This respects scroll-margin-top and works with ResponsiveThreeColumn layout
    targetElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
    
    // Update active heading
    setActiveHeading(text);
    console.log('🔍 TOC Debug: Scroll completed, active heading set to:', text);
  };

  if (headings.length === 0) {
    console.log('🔍 TOC Debug: No headings provided, returning null');
    return null;
  }

  console.log('🔍 TOC Debug: Rendering TOC with', headings.length, 'headings, active:', activeHeading);
  console.log('🔍 TOC Debug: Current screen width:', window.innerWidth);

  return (
    <div className="rounded-lg border p-4 md:p-5 lg:p-6 lg:sticky lg:top-24 max-h-[400px] md:max-h-none overflow-y-auto" style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)' }}>
      <h3 className="mb-4 text-sm md:text-base lg:text-lg font-semibold sticky top-0 bg-[var(--card)] pb-2" style={{ color: 'var(--nav-text)' }}>
        Table of Contents
      </h3>
      <nav>
        <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm list-disc pl-4 md:pl-5">
          {headings.map((heading, index) => {
            const isActive = activeHeading === heading.text;
            // Calculate additional padding for nested levels
            const paddingLeft = `${(heading.level - 1) * 0.75}rem`;
            
            console.log('🔍 TOC Debug: Rendering heading:', {
              id: heading.id,
              text: heading.text,
              level: heading.level,
              isActive,
              paddingLeft
            });
            
            return (
              <li
                key={`${heading.id}-${index}`}
                style={{ paddingLeft }}
                className="transition-all duration-200"
              >
                <a
                  href={`#${heading.id}`}
                  onClick={(e) => {
                    console.log('🔍 TOC Debug: Link clicked for:', heading.text);
                    handleClick(e, heading.text, heading.id);
                  }}
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

