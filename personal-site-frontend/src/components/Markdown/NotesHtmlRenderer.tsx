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
  
  // Process HTML and add IDs BEFORE rendering (only in browser)
  const { sanitizedContent, headings } = useMemo(() => {
    // Check if we're in the browser - DOMParser is only available in browser
    if (typeof window === 'undefined') {
      // Server-side: just sanitize and return empty headings
      const sanitized = DOMPurify.sanitize(content, {
        ADD_TAGS: ['iframe'],
        ADD_ATTR: ['target', 'rel', 'style', 'class', 'id', 'data-language'],
      });
      return { sanitizedContent: sanitized, headings: [] };
    }
    
    // Only use DOMParser if we're in the browser
    if (typeof DOMParser === 'undefined') {
      const sanitized = DOMPurify.sanitize(content, {
        ADD_TAGS: ['iframe'],
        ADD_ATTR: ['target', 'rel', 'style', 'class', 'id', 'data-language'],
      });
      return { sanitizedContent: sanitized, headings: [] };
    }
    
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

  // Process headings on client side if they weren't processed on server
  useEffect(() => {
    if (typeof window === 'undefined' || !contentRef.current) return;
    
    // If headings are empty (server-side render), process them now
    if (headings.length === 0 && typeof DOMParser !== 'undefined') {
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
        
        let uniqueId = id;
        let counter = 1;
        while (usedIds.has(uniqueId)) {
          uniqueId = `${id}-${counter}`;
          counter++;
        }
        usedIds.add(uniqueId);
        
        // Set ID on the actual DOM element
        const domElement = contentRef.current?.querySelector(`h${element.tagName.substring(1)}:nth-of-type(${index + 1})`);
        if (domElement) {
          domElement.id = uniqueId;
        }
        
        const level = parseInt(element.tagName.substring(1));
        headingsData.push({ id: uniqueId, text: text, level: level });
      });
      
      // Broadcast headings
      const event = new CustomEvent('headingsReady', {
        detail: { 
          headingsCount: headingsData.length,
          headings: headingsData,
          timestamp: Date.now() 
        }
      });
      window.dispatchEvent(event);
    }
  }, [content, headings.length]);

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

    // Broadcast headings (only if we have headings)
    if (headings.length > 0) {
      const event = new CustomEvent('headingsReady', {
        detail: { 
          headingsCount: headings.length,
          headings: headings,
          timestamp: Date.now() 
        }
      });
      window.dispatchEvent(event);
    }
    
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
        
        /* Math Block Styling - Center aligned */
        .prose div[data-type="math-block"] {
          background: transparent !important;
          border: none !important;
          border-radius: 0 !important;
          padding: 0.75rem 0 !important;
          margin: 1rem 0 !important;
          position: relative !important;
          overflow: visible !important;
          display: block !important;
          text-align: center !important;
        }
        .prose div[data-type="math-block"] > * {
          color: #111111 !important;
          font-family: 'Georgia', 'Times New Roman', serif !important;
          font-size: 1.125rem !important;
        }
        .dark .prose div[data-type="math-block"] > * {
          color: #e5e7eb !important;
        }
        
        /* Task Lists */
        .prose ul[data-type="taskList"] {
          list-style: none !important;
          padding-left: 0 !important;
          margin: 1rem 0 !important;
        }
        .prose ul[data-type="taskList"] li {
          list-style: none !important;
          margin: 0.5rem 0 !important;
          display: flex !important;
          align-items: flex-start !important;
          line-height: 1.6 !important;
        }
        .prose ul[data-type="taskList"] li > label {
          display: flex !important;
          align-items: flex-start !important;
          flex-shrink: 0 !important;
          margin-right: 0.5rem !important;
          margin-top: 0.2em !important;
          cursor: pointer !important;
          user-select: none !important;
        }
        .prose ul[data-type="taskList"] li > label input[type="checkbox"] {
          width: 1.125rem !important;
          height: 1.125rem !important;
          margin: 0 !important;
          cursor: pointer !important;
          flex-shrink: 0 !important;
        }
        .prose ul[data-type="taskList"] li > div {
          flex: 1 1 auto !important;
          min-width: 0 !important;
          display: inline !important;
        }
        .prose ul[data-type="taskList"] li > div > p {
          margin: 0 !important;
          padding: 0 !important;
          display: inline !important;
          line-height: 1.6 !important;
        }
        .prose ul[data-type="taskList"] li > div > p + p {
          margin-top: 0.5rem !important;
          display: block !important;
        }
        /* Strikethrough for checked to-do items */
        .prose ul[data-type="taskList"] li[data-checked="true"] > div,
        .prose ul[data-type="taskList"] li:has(input[type="checkbox"]:checked) > div {
          text-decoration: line-through !important;
          opacity: 0.7 !important;
        }
        .prose ul[data-type="taskList"] li[data-checked="true"] > div > p,
        .prose ul[data-type="taskList"] li:has(input[type="checkbox"]:checked) > div > p {
          text-decoration: line-through !important;
        }
        
        /* Blockquote Styling - Dark blue border in light mode */
        .prose blockquote {
          border-left: 4px solid #1e40af !important;
          background: transparent !important;
          padding: 0.5rem 0 0.5rem 1.5rem !important;
          margin: 1rem 0 !important;
          border-radius: 0 !important;
          color: #111111 !important;
          position: relative !important;
          font-style: italic !important;
          display: block !important;
          font-size: 1.125rem !important;
        }
        .dark .prose blockquote {
          border-left-color: #4b5563 !important;
          color: #e5e7eb !important;
        }
        
        /* Code Block Styling */
        .prose pre {
          background: #f5f5f5 !important;
          border: 1px solid #e5e5e5 !important;
          border-radius: 6px !important;
          margin: 1rem 0 !important;
          padding: 1rem !important;
          position: relative !important;
          display: block !important;
          text-align: left !important;
          font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace !important;
        }
        .prose pre code {
          color: #374151 !important;
          background: transparent !important;
          padding: 0 !important;
          border: none !important;
          font-family: inherit !important;
          font-size: 0.875rem !important;
          display: block !important;
          white-space: pre-wrap !important;
          word-wrap: break-word !important;
          line-height: 1.6 !important;
        }
        .dark .prose pre {
          background: #1f2937 !important;
          border-color: #374151 !important;
        }
        .dark .prose pre code {
          color: #e5e7eb !important;
        }
        
        /* Special Code Block Styling */
        .prose pre[data-type="special-code"] {
          background: #1f2937 !important;
          border: 1px solid #374151 !important;
          border-radius: 6px !important;
          margin: 1.5rem 0 !important;
          padding: 1rem !important;
          position: relative !important;
          display: block !important;
          text-align: left !important;
        }
        .prose pre[data-type="special-code"] code {
          color: #e5e7eb !important;
          font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace !important;
          font-size: 0.875rem !important;
          display: block !important;
          white-space: pre-wrap !important;
          word-wrap: break-word !important;
          line-height: 1.6 !important;
          background: transparent !important;
          padding: 0 !important;
          border: none !important;
        }
        .dark .prose pre[data-type="special-code"] {
          background: #1f2937 !important;
          border-color: #374151 !important;
        }
        .dark .prose pre[data-type="special-code"] code {
          color: #e5e7eb !important;
        }
        
        /* Inline Code Styling */
        .prose code:not(pre code) {
          color: #e11d48 !important;
          background: rgba(251, 113, 133, 0.1) !important;
          padding: 0.2em 0.4em !important;
          border-radius: 3px !important;
          font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace !important;
          font-size: 0.9em !important;
          display: inline !important;
          word-wrap: break-word !important;
          font-weight: 500 !important;
        }
        .dark .prose code:not(pre code) {
          color: #60a5fa !important;
          background: rgba(96, 165, 250, 0.1) !important;
        }
        
        /* Table Styling */
        .prose table {
          border-collapse: collapse !important;
          width: 100% !important;
          table-layout: auto !important;
          margin: 1rem 0 !important;
        }
        .prose table td,
        .prose table th {
          padding: 0.75rem 1rem !important;
          word-wrap: break-word !important;
          word-break: break-word !important;
          overflow-wrap: break-word !important;
          white-space: normal !important;
          vertical-align: top !important;
          border: 1px solid #d1d5db !important;
          max-width: 0 !important;
        }
        .dark .prose table td,
        .dark .prose table th {
          border-color: #4b5563 !important;
        }
      `}</style>
    </>
  );
}