"use client";

import { useEffect, useRef, useMemo } from 'react';
import DOMPurify from 'isomorphic-dompurify';
import { slugify } from '@/lib/utils';

interface NotesHtmlRendererProps {
  content: string;
  className?: string;
}

export default function NotesHtmlRenderer({ content, className = "" }: NotesHtmlRendererProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  
  // Process HTML and add IDs BEFORE rendering
  const { sanitizedContent, headings } = useMemo(() => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(content, 'text/html');
    
    const headingElements = doc.querySelectorAll('h1, h2, h3, h4, h5, h6');
    const headingsData: Array<{id: string, text: string, level: number}> = [];
    const usedIds = new Set<string>();
    
    headingElements.forEach((heading, index) => {
      const element = heading as HTMLElement;
      
      let text = element.textContent?.trim() || '';
      text = text.replace(/\s+/g, ' ').trim();
      
      let id = '';
      if (text) {
        id = slugify(text);
        if (/^\d/.test(id)) {
          id = `heading-${id}`;
        }
      } else {
        id = `heading-${index}`;
      }
      
      // Ensure uniqueness
      let uniqueId = id;
      let counter = 1;
      while (usedIds.has(uniqueId)) {
        uniqueId = `${id}-${counter}`;
        counter++;
      }
      usedIds.add(uniqueId);
      
      element.id = uniqueId;
      
      const level = parseInt(element.tagName.substring(1));
      headingsData.push({ id: uniqueId, text: text, level: level });
    });
    
    const processedHTML = doc.body.innerHTML;
    const sanitized = DOMPurify.sanitize(processedHTML, {
      ADD_TAGS: ['iframe'],
      ADD_ATTR: ['target', 'rel', 'style', 'class', 'id', 'data-language'],
    });
    
    return { sanitizedContent: sanitized, headings: headingsData };
  }, [content]);

  // Apply scroll margins and broadcast after render
  useEffect(() => {
    if (!contentRef.current) return;

    const applyScrollMargins = () => {
      const getScrollMargin = () => {
        const width = window.innerWidth;
        if (width >= 1024) return 106;
        if (width >= 768) return 91;
        return 81;
      };
      
      const scrollMargin = getScrollMargin();
      
      headings.forEach((heading) => {
        const element = document.getElementById(heading.id);
        if (element) {
          element.style.scrollMarginTop = `${scrollMargin}px`;
        }
      });
    };

    applyScrollMargins();

    const handleResize = () => applyScrollMargins();
    window.addEventListener('resize', handleResize);

    // Broadcast headings
    const event = new CustomEvent('headingsReady', {
      detail: { 
        headingsCount: headings.length,
        headings: headings,
        timestamp: Date.now() 
      }
    });
    window.dispatchEvent(event);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [headings]);

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
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </>
  );
}