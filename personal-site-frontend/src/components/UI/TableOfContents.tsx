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

    // Function to observe headings
    const observeHeadings = () => {
      const allHeadings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
      console.log('🔍 TOC: Observing', allHeadings.length, 'headings');
      allHeadings.forEach((heading) => {
        observer.observe(heading);
      });
    };

    // Initial observation after delay
    const timeoutId = setTimeout(observeHeadings, 200);

    // Listen for headings ready event from NotesHtmlRenderer
    const handleHeadingsReady = () => {
      console.log('🔍 TOC: Headings ready event received');
      observeHeadings();
    };

    window.addEventListener('headingsReady', handleHeadingsReady);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
      window.removeEventListener('headingsReady', handleHeadingsReady);
    };
  }, []);

  // Alternative scroll method using manual calculation
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, text: string, id: string) => {
    console.log('🔍 TOC Click:', { text, id });
    e.preventDefault();
    
    // Function to attempt scrolling
    const attemptScroll = () => {
      // Find the target element
      const targetElement = document.getElementById(id);
      console.log('🔍 Target element found:', targetElement);
      
      if (!targetElement) {
        console.log('🔍 Element not found by ID, trying text search...');
        // Fallback: find by text content
        const allHeadings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
        console.log('🔍 Found headings:', allHeadings.length);
        
        for (const heading of Array.from(allHeadings)) {
          console.log('🔍 Checking heading:', heading.textContent?.trim(), 'vs', text.trim());
          if (heading.textContent?.trim() === text.trim()) {
            console.log('🔍 Found by text, scrolling...');
            scrollToElement(heading as HTMLElement);
            setActiveHeading(text);
            return;
          }
        }
        console.log('🔍 No heading found by text either');
        return;
      }
      
      console.log('🔍 Scrolling to element...');
      // Use our custom scroll method
      scrollToElement(targetElement);
      setActiveHeading(text);
    };
    
    // Try immediately
    attemptScroll();
    
    // Also try after a delay in case DOM isn't ready
    setTimeout(attemptScroll, 100);
  };

  // Custom scroll function that works reliably
  const scrollToElement = (element: HTMLElement) => {
    console.log('🔍 ScrollToElement called for:', element);
    
    // Get element position
    const rect = element.getBoundingClientRect();
    const elementTop = rect.top + window.pageYOffset;
    
    console.log('🔍 Element position:', {
      rect: rect,
      elementTop: elementTop,
      currentScrollY: window.pageYOffset
    });
    
    // Calculate scroll position with offset for navbar
    const offsetTop = 100; // Account for navbar height
    const scrollTo = elementTop - offsetTop;
    
    console.log('🔍 Scroll calculation:', {
      offsetTop: offsetTop,
      scrollTo: scrollTo,
      finalScrollTo: Math.max(0, scrollTo)
    });
    
    // Smooth scroll to calculated position
    window.scrollTo({
      top: Math.max(0, scrollTo),
      behavior: 'smooth'
    });
    
    console.log('🔍 Scroll command executed');
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

