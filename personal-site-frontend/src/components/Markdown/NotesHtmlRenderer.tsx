/**
 * Enhanced HTML Content Renderer with Valid ID Assignment
 */

"use client";

import { useEffect, useRef, useState } from 'react';
import DOMPurify from 'isomorphic-dompurify';
import { slugify } from '@/lib/utils';

interface NotesHtmlRendererProps {
  content: string;
  className?: string;
}

export default function NotesHtmlRenderer({ content, className = "" }: NotesHtmlRendererProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [isHydrated, setIsHydrated] = useState(false);

  // Sanitize HTML
  const sanitizedContent = DOMPurify.sanitize(content, {
    ADD_TAGS: ['iframe'],
    ADD_ATTR: ['target', 'rel', 'style', 'class', 'id', 'data-language'],
  });

  // FIXED: Enhanced heading ID assignment with valid IDs
  useEffect(() => {
    if (!contentRef.current) return;

    console.log('🔍 NotesHtmlRenderer: Starting heading ID assignment');
    
    // Get all headings
    const headings = contentRef.current.querySelectorAll('h1, h2, h3, h4, h5, h6');
    console.log('🔍 Found headings:', headings.length);

    // Method 1: Direct ID assignment with VALID IDs
    headings.forEach((heading, index) => {
      const element = heading as HTMLElement;
      
      // Get text content (strip HTML tags)
      let text = element.textContent?.trim() || '';
      text = text.replace(/\s+/g, ' ').trim();
      
      // Generate VALID ID - ensure it doesn't start with a number
      let id = '';
      if (text) {
        id = slugify(text);
        // FIX: Ensure ID doesn't start with a number
        if (/^\d/.test(id)) {
          id = `heading-${id}`;
        }
      } else {
        id = `heading-${index}`;
      }
      
      // Ensure uniqueness with safe query
      let isUnique = false;
      let uniqueId = id;
      let counter = 1;
      
      while (!isUnique) {
        try {
          // Use try-catch for safe querySelector
          const existing = contentRef.current?.querySelector(`[id="${uniqueId}"]`);
          if (!existing || existing === element) {
            isUnique = true;
          } else {
            uniqueId = `${id}-${counter}`;
            counter++;
          }
        } catch (error) {
          // If querySelector fails, use a safe fallback
          uniqueId = `heading-${index}-${Date.now()}`;
          isUnique = true;
        }
      }
      
      // ALWAYS set the ID
      element.id = uniqueId;
      
      // Set responsive scroll margin based on screen size (matches TableOfContents logic)
      const getScrollMargin = () => {
        const width = window.innerWidth;
        if (width >= 1024) return 90 + 16; // desktop: 106px
        if (width >= 768) return 75 + 16;  // tablet: 91px
        return 65 + 16; // mobile: 81px
      };
      
      const scrollMargin = `${getScrollMargin()}px`;
      element.style.scrollMarginTop = scrollMargin;
      element.style.setProperty('scroll-margin-top', scrollMargin, 'important');
      
      console.log('🔍 Assigned ID to heading:', {
        text: text.substring(0, 50),
        id: uniqueId,
        tagName: element.tagName
      });
    });

    // Function to update scroll margins for all headings
    const updateScrollMargins = () => {
      const getScrollMargin = () => {
        const width = window.innerWidth;
        if (width >= 1024) return 90 + 16; // desktop: 106px
        if (width >= 768) return 75 + 16;  // tablet: 91px
        return 65 + 16; // mobile: 81px
      };
      
      const scrollMargin = `${getScrollMargin()}px`;
      headings.forEach((heading) => {
        const element = heading as HTMLElement;
        element.style.setProperty('scroll-margin-top', scrollMargin, 'important');
        element.style.scrollMarginTop = scrollMargin;
      });
    };

    // Initial scroll margin setup
    updateScrollMargins();

    // Update scroll margins on resize
    const handleResize = () => {
      updateScrollMargins();
    };
    
    window.addEventListener('resize', handleResize);

    // Notify that headings are ready
    const event = new CustomEvent('headingsReady', {
      detail: { 
        headingsCount: headings.length,
        timestamp: Date.now() 
      }
    });
    window.dispatchEvent(event);
    
    setIsHydrated(true);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [sanitizedContent]);

  return (
    <>
      <div 
        ref={contentRef}
        className={`prose prose-sm md:prose-lg dark:prose-invert max-w-none 
          prose-headings:font-bold prose-headings:text-slate-900 dark:prose-headings:text-slate-100
          prose-h1:text-2xl md:prose-h1:text-3xl lg:prose-h1:text-4xl
          prose-h2:text-xl md:prose-h2:text-2xl lg:prose-h2:text-3xl
          prose-h3:text-lg md:prose-h3:text-xl lg:prose-h3:text-2xl
          prose-p:text-slate-700 dark:prose-p:text-slate-300 prose-p:leading-relaxed prose-p:text-sm md:prose-p:text-base
          prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline
          prose-strong:text-slate-900 dark:prose-strong:text-slate-100 prose-strong:font-semibold
          ${className}`}
        dangerouslySetInnerHTML={{ __html: sanitizedContent }}
      />

      {/* CSS for smooth scroll behavior - values set inline by JS for accuracy */}
      <style jsx global>{`
        /* Ensure smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
        
        /* Inline styles set by JavaScript will take precedence */
        /* This is just a fallback */
        .prose h1, .prose h2, .prose h3, .prose h4, .prose h5, .prose h6 {
          scroll-margin-top: 80px;
        }
      `}</style>
    </>
  );
}