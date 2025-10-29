/**
 * Enhanced HTML Content Renderer specifically for Notes
 * Special handling for images, math equations, and code blocks
 */

"use client";

import { useEffect, useRef, useState } from 'react';
import DOMPurify from 'isomorphic-dompurify';
import { slugify } from '@/lib/utils';
import { ClipboardDocumentIcon, CheckIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

interface NotesHtmlRendererProps {
  content: string;
  className?: string;
}

export default function NotesHtmlRenderer({ content, className = "" }: NotesHtmlRendererProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [copiedCode, setCopiedCode] = useState<string>('');
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  // Sanitize HTML to prevent XSS attacks
  const sanitizedContent = DOMPurify.sanitize(content, {
    ADD_TAGS: ['iframe'],
    ADD_ATTR: ['target', 'rel', 'style', 'class', 'id', 'data-language'],
  });

  // Enhance content after render
  useEffect(() => {
    if (!contentRef.current) return;

    // Add IDs to headings for TOC linking - do this immediately
    const headings = contentRef.current.querySelectorAll('h1, h2, h3, h4, h5, h6');
    console.log('🔍 NotesHtmlRenderer: Processing', headings.length, 'headings');
    headings.forEach((heading) => {
      // Extract text the same way as extractHeadings() function
      // Strip HTML tags to match the TOC generation logic
      const text = heading.innerHTML.replace(/<[^>]*>/g, '').trim();
      const id = slugify(text);
      console.log('🔍 NotesHtmlRenderer: Heading text:', `"${text}"`, '-> ID:', `"${id}"`);
      if (id && !heading.id) {
        heading.id = id;
        // Set scroll margin to account for fixed navbar (90px) plus some padding
        (heading as HTMLElement).style.scrollMarginTop = '100px';
      }
    });

    // Dispatch custom event to notify TOC that headings are ready
    const event = new CustomEvent('headingsReady', {
      detail: { headingsCount: headings.length }
    });
    window.dispatchEvent(event);

        // Enhance images with captions and zoom functionality
        const images = contentRef.current.querySelectorAll('img');
        images.forEach((img) => {
          if (!img.parentElement?.classList.contains('image-wrapper')) {
            const wrapper = document.createElement('figure');
            wrapper.className = 'image-wrapper group relative my-4 md:my-8 mx-auto max-w-full md:max-w-3xl overflow-hidden rounded-lg';
        
        // Clone and enhance the image
        const enhancedImg = img.cloneNode(true) as HTMLImageElement;
        enhancedImg.className = 'rounded-lg shadow-xl cursor-zoom-in transition-all duration-300 hover:shadow-2xl border-2 border-gray-200 dark:border-gray-700 w-full';
        enhancedImg.loading = 'lazy';
        
        // Add zoom button overlay
        const zoomOverlay = document.createElement('div');
        zoomOverlay.className = 'absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100';
        zoomOverlay.innerHTML = `
          <div class="bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg">
            <svg class="w-6 h-6 text-gray-700 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
            </svg>
          </div>
        `;
        
        // Add click handler for zoom
        const clickHandler = () => {
          setZoomedImage(img.src);
        };
        enhancedImg.addEventListener('click', clickHandler);
        wrapper.addEventListener('click', clickHandler);
        
        // Add caption if alt text exists
        if (img.alt) {
          const caption = document.createElement('figcaption');
          caption.className = 'text-center mt-3 text-sm text-gray-600 dark:text-gray-400 italic bg-gray-50 dark:bg-gray-800/50 px-4 py-2 rounded-md border border-gray-200 dark:border-gray-700';
          caption.textContent = img.alt;
          wrapper.appendChild(enhancedImg);
          wrapper.appendChild(zoomOverlay);
          wrapper.appendChild(caption);
        } else {
          wrapper.appendChild(enhancedImg);
          wrapper.appendChild(zoomOverlay);
        }
        
        img.parentNode?.replaceChild(wrapper, img);
      }
    });

        // Remove all wrapper enhancements for clean academic style
        // Code blocks will be styled with CSS only - no JavaScript wrappers or badges
        const codeBlocks = contentRef.current.querySelectorAll('pre');
        codeBlocks.forEach((pre) => {
          // Remove any existing wrappers
          if (pre.parentElement?.classList.contains('code-block-wrapper')) {
            const wrapper = pre.parentElement;
            const parent = wrapper.parentElement;
            if (parent) {
              parent.insertBefore(pre, wrapper);
              parent.removeChild(wrapper);
            }
          }
          
          // Ensure clean styling - CSS will handle appearance
          pre.className = 'overflow-x-auto text-xs md:text-sm';
          pre.style.background = 'transparent';
          pre.style.border = 'none';
          pre.style.borderRadius = '0';
          pre.style.padding = '0';
          pre.style.margin = '0';
        });

    // Clean inline code styling - inline only, dark black in light mode
    const inlineCodes = contentRef.current.querySelectorAll('code:not(pre code)');
    inlineCodes.forEach((code) => {
      if (!code.classList.contains('enhanced-inline-code')) {
        code.className = 'enhanced-inline-code font-mono';
        const codeElement = code as HTMLElement;
        codeElement.style.background = 'transparent';
        codeElement.style.border = 'none';
        codeElement.style.padding = '0';
        codeElement.style.display = 'inline';
        // Color will be handled by CSS (dark mode detection)
        codeElement.style.fontSize = '1.125rem';
      }
    });

    // Handle inline math expressions
    const inlineMathElements = contentRef.current.querySelectorAll('[data-type="math-inline"], [data-type="math"]:not([data-type="math-block"]), .math-inline');
    inlineMathElements.forEach((math) => {
      const mathElement = math as HTMLElement;
      mathElement.style.display = 'inline';
      mathElement.style.whiteSpace = 'nowrap';
      // Color will be handled by CSS (dark mode detection)
      mathElement.style.fontSize = '1.125rem';
    });

    // Handle inline HTML/special code
    const inlineHtmlElements = contentRef.current.querySelectorAll('[data-type="html-inline"], [data-type="special-code-inline"]');
    inlineHtmlElements.forEach((html) => {
      const htmlElement = html as HTMLElement;
      htmlElement.style.display = 'inline';
      // Color will be handled by CSS (dark mode detection)
      htmlElement.style.fontSize = '1.125rem';
    });

    // Mathematical expressions are now styled with CSS-only approach
    // No need for JavaScript enhancement - CSS handles all styling

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
          prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline prose-a:p-1 prose-a:-m-1 prose-a:rounded
          prose-strong:text-slate-900 dark:prose-strong:text-slate-100 prose-strong:font-semibold
          prose-em:text-slate-700 dark:prose-em:text-slate-300
          prose-blockquote:border-l prose-blockquote:border-l-gray-300 dark:prose-blockquote:border-l-gray-600 prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:text-sm md:prose-blockquote:text-base
          prose-ul:list-disc prose-ul:pl-4 md:prose-ul:pl-6 prose-ul:my-4
          prose-ol:list-decimal prose-ol:pl-4 md:prose-ol:pl-6 prose-ol:my-4
          prose-li:text-slate-700 dark:prose-li:text-slate-300 prose-li:my-1 prose-li:leading-relaxed prose-li:text-sm md:prose-li:text-base
          prose-li:marker:text-slate-500 dark:prose-li:marker:text-slate-400
          prose-table:border-collapse prose-table:w-full prose-table:text-xs md:prose-table:text-sm
          prose-th:bg-slate-100 dark:prose-th:bg-slate-800 prose-th:p-2 prose-th:border prose-th:border-slate-300 dark:prose-th:border-slate-600
          prose-td:p-2 prose-td:border prose-td:border-slate-300 dark:prose-td:border-slate-600
          prose-hr:border-slate-300 dark:prose-hr:border-slate-700
          prose-pre:overflow-x-auto prose-pre:text-xs md:prose-pre:text-sm
          prose-code:text-xs md:prose-code:text-sm
          ${className}`}
        dangerouslySetInnerHTML={{ __html: sanitizedContent }}
      />

      {/* Image Zoom Modal */}
      {zoomedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setZoomedImage(null)}
        >
          <button
            onClick={() => setZoomedImage(null)}
            className="absolute top-4 right-4 text-white bg-gray-800 hover:bg-gray-700 rounded-full p-3 transition-colors"
            aria-label="Close"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <img
            src={zoomedImage}
            alt="Zoomed view"
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-in-out;
        }

        /* Code Block Styling - Clean Academic Style */
        :global(.prose pre) {
          background: transparent !important;
          border: none !important;
          border-radius: 0 !important;
          padding: 0.75rem 0 !important;
          margin: 1rem auto !important;
          overflow-x: auto !important;
          position: relative !important;
          display: block !important;
          text-align: center !important;
        }
        :global(.prose pre code) {
          color: #111111 !important;
          background: transparent !important;
          padding: 0 !important;
          border: none !important;
          font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace !important;
          font-size: 1.125rem !important;
          display: inline-block !important;
          text-align: center !important;
        }
        
        /* Dark Mode Code Blocks */
        :global(.dark .prose pre),
        :global(.dark .prose pre code) {
          color: #e5e7eb !important;
        }

        /* Blockquote Styling - Clean Academic Style */
        :global(.prose blockquote) {
          border-left: 1px solid #d1d5db !important;
          background: transparent !important;
          padding: 0.5rem 0 0.5rem 1rem !important;
          margin: 1rem auto !important;
          border-radius: 0 !important;
          font-style: italic !important;
          color: #111111 !important;
          display: block !important;
          text-align: center !important;
          max-width: 800px !important;
          font-size: 1.125rem !important;
        }
        :global(.dark .prose blockquote) {
          border-left-color: #4b5563 !important;
          color: #e5e7eb !important;
        }

        /* Math Block Styling - Clean Academic Style */
        :global(.prose [data-type="math-block"]) {
          background: transparent !important;
          border: none !important;
          border-radius: 0 !important;
          padding: 0.75rem 0 !important;
          margin: 1rem auto !important;
          position: relative !important;
          overflow: visible !important;
          display: block !important;
          text-align: center !important;
          max-width: 800px !important;
        }
        :global(.prose [data-type="math-block"] > *) {
          font-family: 'Georgia', 'Times New Roman', serif !important;
          color: #111111 !important;
          font-size: 1.125rem !important;
        }
        :global(.dark .prose [data-type="math-block"] > *) {
          color: #e5e7eb !important;
        }

        /* Special Code Block (HTML) Styling - Clean Academic Style */
        :global(.prose pre[data-type="special-code"]) {
          background: transparent !important;
          border: none !important;
          border-radius: 0 !important;
          padding: 0.75rem 0 !important;
          margin: 1rem auto !important;
          position: relative !important;
          display: block !important;
          text-align: center !important;
        }
        :global(.prose pre[data-type="special-code"] code) {
          color: #111111 !important;
          font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace !important;
          font-size: 1.125rem !important;
          display: inline-block !important;
          text-align: center !important;
        }
        :global(.dark .prose pre[data-type="special-code"] code) {
          color: #e5e7eb !important;
        }

        /* Inline Code Styling - Only for highlighted text */
        :global(.prose code:not(pre code)) {
          color: #111111 !important;
          background: transparent !important;
          padding: 0 !important;
          border: none !important;
          font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace !important;
          font-size: 1.125rem !important;
          display: inline !important;
          word-wrap: break-word !important;
          word-break: break-word !important;
          overflow-wrap: break-word !important;
        }
        :global(.dark .prose code:not(pre code)) {
          color: #e5e7eb !important;
        }

        /* Inline Math Styling - Only for highlighted text */
        :global(.prose span[data-type="math-inline"]),
        :global(.prose span[data-type="math"]),
        :global(.prose .math-inline) {
          color: #111111 !important;
          font-family: 'Georgia', 'Times New Roman', serif !important;
          font-size: 1.125rem !important;
          display: inline !important;
          white-space: nowrap !important;
        }
        :global(.dark .prose span[data-type="math-inline"]),
        :global(.dark .prose span[data-type="math"]),
        :global(.dark .prose .math-inline) {
          color: #e5e7eb !important;
        }

        /* Inline HTML/Special Code Styling - Only for highlighted text */
        :global(.prose span[data-type="html-inline"]),
        :global(.prose span[data-type="special-code-inline"]) {
          color: #111111 !important;
          font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace !important;
          font-size: 1.125rem !important;
          display: inline !important;
          word-wrap: break-word !important;
          word-break: break-word !important;
          overflow-wrap: break-word !important;
        }
        :global(.dark .prose span[data-type="html-inline"]),
        :global(.dark .prose span[data-type="special-code-inline"]) {
          color: #e5e7eb !important;
        }

        /* Table Responsive Styling - Prevent Cell Overflow */
        :global(.prose table) {
          display: block !important;
          width: 100% !important;
          overflow-x: auto !important;
          -webkit-overflow-scrolling: touch !important;
          border-collapse: collapse !important;
        }
        :global(.prose table thead),
        :global(.prose table tbody),
        :global(.prose table tr) {
          display: table !important;
          width: 100% !important;
          table-layout: auto !important;
        }
        :global(.prose table td),
        :global(.prose table th) {
          padding: 0.75rem 1rem !important;
          word-wrap: break-word !important;
          word-break: break-word !important;
          overflow-wrap: break-word !important;
          white-space: normal !important;
          vertical-align: top !important;
          border: 1px solid #d1d5db !important;
          max-width: 0 !important;
        }
        :global(.dark .prose table td),
        :global(.dark .prose table th) {
          border-color: #4b5563 !important;
        }
        /* Hide scrollbar for cleaner look but keep functionality */
        :global(.prose table)::-webkit-scrollbar {
          height: 8px !important;
        }
        :global(.prose table)::-webkit-scrollbar-track {
          background: var(--background) !important;
        }
        :global(.prose table)::-webkit-scrollbar-thumb {
          background: var(--border) !important;
          border-radius: 4px !important;
        }
      `}</style>
    </>
  );
}


