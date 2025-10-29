/**
 * HTML Content Renderer for Tiptap editor content
 * Safely renders HTML with proper styling for notes
 */

"use client";

import { useEffect, useRef } from 'react';
import DOMPurify from 'isomorphic-dompurify';
import { slugify } from '@/lib/utils';

interface HtmlRendererProps {
  content: string;
  className?: string;
}

export default function HtmlRenderer({ content, className = "" }: HtmlRendererProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  // Sanitize HTML to prevent XSS attacks
  const sanitizedContent = DOMPurify.sanitize(content, {
    ADD_TAGS: ['iframe'],
    ADD_ATTR: ['target', 'rel', 'style', 'class', 'id'],
  });

  // Add IDs to headings after render for TOC linking
  useEffect(() => {
    if (!contentRef.current) return;

    // Get responsive scroll margin based on screen size
    const getScrollMargin = () => {
      if (window.innerWidth >= 1280) return '100px';
      if (window.innerWidth >= 1024) return '90px';
      if (window.innerWidth >= 768) return '80px';
      return '60px';
    };

    const headings = contentRef.current.querySelectorAll('h1, h2, h3, h4, h5, h6');
    headings.forEach((heading) => {
      const text = heading.textContent?.trim() || (heading as HTMLElement).innerText?.trim() || '';
      const id = slugify(text);
      if (id && !heading.id) {
        heading.id = id;
        // Add responsive scroll margin for better positioning when jumping to section
        // Ensure scroll-margin-top is set for reliability
        const scrollMargin = getScrollMargin();
        (heading as HTMLElement).style.scrollMarginTop = scrollMargin;
        (heading as HTMLElement).style.setProperty('scroll-margin-top', scrollMargin, 'important');
      }
    });
  }, [sanitizedContent]);

  return (
    <div 
      ref={contentRef}
      className={`prose prose-lg dark:prose-invert max-w-none 
        prose-headings:font-bold prose-headings:text-slate-900 dark:prose-headings:text-slate-100
        prose-p:text-slate-700 dark:prose-p:text-slate-300 prose-p:leading-relaxed
        prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline
        prose-strong:text-slate-900 dark:prose-strong:text-slate-100 prose-strong:font-semibold
        prose-em:text-slate-700 dark:prose-em:text-slate-300
        prose-code:bg-slate-100 dark:prose-code:bg-slate-800 prose-code:text-slate-900 dark:prose-code:text-slate-100 
        prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm
        prose-pre:bg-slate-900 dark:prose-pre:bg-slate-950 prose-pre:text-slate-100
        prose-blockquote:border-l-blue-600 dark:prose-blockquote:border-l-blue-400 
        prose-blockquote:bg-slate-50 dark:prose-blockquote:bg-slate-800/50 prose-blockquote:py-2 prose-blockquote:px-4
        prose-ul:list-disc prose-ul:pl-6 prose-ul:my-4
        prose-ol:list-decimal prose-ol:pl-6 prose-ol:my-4
        prose-li:text-slate-700 dark:prose-li:text-slate-300 prose-li:my-1 prose-li:leading-relaxed
        prose-li:marker:text-slate-500 dark:prose-li:marker:text-slate-400
        prose-table:border-collapse prose-table:w-full
        prose-th:bg-slate-100 dark:prose-th:bg-slate-800 prose-th:p-2 prose-th:border prose-th:border-slate-300 dark:prose-th:border-slate-600
        prose-td:p-2 prose-td:border prose-td:border-slate-300 dark:prose-td:border-slate-600
        prose-img:rounded-lg prose-img:shadow-lg prose-img:max-w-md prose-img:h-auto prose-img:mx-auto
        prose-hr:border-slate-300 dark:prose-hr:border-slate-700
        ${className}`}
      dangerouslySetInnerHTML={{ __html: sanitizedContent }}
    />
  );
}


