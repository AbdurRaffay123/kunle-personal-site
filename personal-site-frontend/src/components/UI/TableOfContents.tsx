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
        rootMargin: '-120px 0px -80% 0px', // Account for fixed navbar
        threshold: 0.1,
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
    
    // Try to find the element
    const element = document.getElementById(id);
    if (element) {
      // Calculate offset for fixed navbar
      const navbarHeight = 90;
      const elementPosition = element.offsetTop - navbarHeight;
      
      // Smooth scroll to element with offset
      window.scrollTo({
        top: Math.max(0, elementPosition),
        behavior: 'smooth'
      });
      
      // Update URL hash
      window.history.pushState(null, '', `#${id}`);
      setActiveId(id);
    } else {
      // Fallback: try to find the element after a short delay
      setTimeout(() => {
        const delayedElement = document.getElementById(id);
        if (delayedElement) {
          const navbarHeight = 90;
          const elementPosition = delayedElement.offsetTop - navbarHeight;
          
          window.scrollTo({
            top: Math.max(0, elementPosition),
            behavior: 'smooth'
          });
          
          window.history.pushState(null, '', `#${id}`);
          setActiveId(id);
        }
      }, 100);
    }
  };

  if (headings.length === 0) {
    return null;
  }

  return (
    <div className="rounded-lg border p-4 md:p-5 lg:p-6 lg:sticky lg:top-24" style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)' }}>
      <h3 className="mb-4 text-sm md:text-base lg:text-lg font-semibold" style={{ color: 'var(--nav-text)' }}>
        Table of Contents
      </h3>
      <nav>
        <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm list-disc pl-4 md:pl-5">
          {headings.map((heading) => {
            const isActive = activeId === heading.id;
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
                  onClick={(e) => handleClick(e, heading.id)}
                  className={`block transition-all duration-200 p-1 -m-1 rounded-md cursor-pointer ${
                    isActive
                      ? 'font-medium'
                      : 'hover:underline'
                  }`}
                  style={{
                    color: 'var(--text-secondary)'
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

