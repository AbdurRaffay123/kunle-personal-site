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

    // Add IDs to headings for TOC linking
    const headings = contentRef.current.querySelectorAll('h1, h2, h3, h4, h5, h6');
    headings.forEach((heading) => {
      const text = heading.textContent || '';
      const id = slugify(text);
      if (id && !heading.id) {
        heading.id = id;
        // Set scroll margin to account for fixed navbar (90px) plus some padding
        (heading as HTMLElement).style.scrollMarginTop = '100px';
      }
    });

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

        // Enhance code blocks with copy button and language label
        const codeBlocks = contentRef.current.querySelectorAll('pre');
        codeBlocks.forEach((pre) => {
          if (!pre.parentElement?.classList.contains('code-block-wrapper')) {
            const wrapper = document.createElement('div');
            wrapper.className = 'code-block-wrapper relative my-4 md:my-6 group overflow-hidden rounded-lg';
        
        // Check if this is a special code block (explicitly marked by user)
        const isSpecialCode = pre.getAttribute('data-type') === 'special-code' || pre.getAttribute('data-enhanced') === 'true';
        
        // Detect language (if available)
        const code = pre.querySelector('code');
        const language = code?.className?.match(/language-(\w+)/)?.[1] || 'code';
        
        // Add special badge for explicitly marked code
        if (isSpecialCode) {
          const specialBadge = document.createElement('div');
          specialBadge.className = 'absolute top-3 left-3 text-xs font-bold text-green-400 dark:text-green-300 uppercase tracking-wide bg-green-900/90 dark:bg-green-800/90 px-3 py-1.5 rounded-md border border-green-500/50 flex items-center gap-1.5 z-10';
          specialBadge.innerHTML = `
            <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
            <span>Enhanced Code</span>
          `;
          wrapper.appendChild(specialBadge);
        }
        // Removed language label - CSS handles the "CODE" badge on the right
        
        // Add copy button
        const copyButton = document.createElement('button');
        copyButton.className = 'absolute top-3 right-3 p-2 bg-gray-700 hover:bg-gray-600 dark:bg-gray-800 dark:hover:bg-gray-700 text-white rounded-md opacity-0 group-hover:opacity-100 transition-all duration-200 flex items-center gap-2 text-sm z-10';
        copyButton.innerHTML = `
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
          <span>Copy</span>
        `;
        
        copyButton.addEventListener('click', async () => {
          const codeText = pre.textContent || '';
          await navigator.clipboard.writeText(codeText);
          setCopiedCode(language);
          copyButton.innerHTML = `
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            <span>Copied!</span>
          `;
          setTimeout(() => {
            setCopiedCode('');
            copyButton.innerHTML = `
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <span>Copy</span>
            `;
          }, 2000);
        });
        
        // Enhance pre element with special styling for marked code
        if (isSpecialCode) {
          pre.className = 'bg-gradient-to-br from-gray-900 via-gray-950 to-black dark:from-black dark:via-gray-950 dark:to-gray-900 text-gray-100 px-3 md:px-6 pt-12 md:pt-16 pb-4 md:pb-6 rounded-lg overflow-x-auto border-2 border-green-500/50 dark:border-green-400/50 shadow-2xl shadow-green-500/20 text-xs md:text-sm';
        } else {
          pre.className = 'bg-gray-900 dark:bg-gray-950 text-gray-100 px-3 md:px-6 pb-4 md:pb-6 rounded-lg overflow-x-auto border-2 border-gray-700 dark:border-gray-800 shadow-lg text-xs md:text-sm';
          pre.style.paddingTop = '40px';
        }
        
        pre.parentNode?.insertBefore(wrapper, pre);
        wrapper.appendChild(copyButton);
        wrapper.appendChild(pre);
      }
    });

    // Enhance inline code
    const inlineCodes = contentRef.current.querySelectorAll('code:not(pre code)');
    inlineCodes.forEach((code) => {
      if (!code.classList.contains('enhanced-inline-code')) {
        code.className = 'enhanced-inline-code bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2 py-0.5 rounded font-mono text-sm border border-blue-200 dark:border-blue-800';
      }
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
          prose-blockquote:border-l-blue-600 dark:prose-blockquote:border-l-blue-400 
          prose-blockquote:bg-slate-50 dark:prose-blockquote:bg-slate-800/50 prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:text-sm md:prose-blockquote:text-base
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

        /* Code Block Styling */
        :global(.prose pre) {
          background: #1e1e1e !important;
          border: 1px solid #333 !important;
          border-radius: 12px !important;
          padding: 1.25rem !important;
          margin: 1rem 0 !important;
          overflow-x: auto !important;
          position: relative !important;
        }
        :global(.prose pre::before) {
          content: 'CODE' !important;
          position: absolute !important;
          top: 0.5rem !important;
          right: 1rem !important;
          font-size: 0.75rem !important;
          font-weight: 700 !important;
          letter-spacing: 0.05em !important;
          color: #fff !important;
          background: #3b82f6 !important;
          padding: 0.25rem 0.5rem !important;
          border-radius: 4px !important;
          text-transform: uppercase !important;
        }
        :global(.prose pre code) {
          color: #fff !important;
          background: transparent !important;
          padding: 0 !important;
          border: none !important;
          font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace !important;
          font-size: 0.875rem !important;
        }
        
        /* Code Block Styling - Light Mode */
        @media (prefers-color-scheme: light) {
          :global(.prose pre) {
            background: #f7f9fc !important;
            border: 1px solid #e2e8f0 !important;
          }
          :global(.prose pre::before) {
            background: #3b82f6 !important;
            color: #fff !important;
          }
          :global(.prose pre code) {
            color: #1e293b !important;
          }
        }

        /* Blockquote Styling */
        :global(.prose blockquote) {
          border-left: 4px solid #6366f1 !important;
          background: linear-gradient(to right, rgba(99, 102, 241, 0.08), transparent) !important;
          padding: 1rem 1.5rem !important;
          margin: 1rem 0 !important;
          border-radius: 0 8px 8px 0 !important;
          font-style: italic !important;
        }

        /* Math Block Styling */
        :global(.prose [data-type="math-block"]) {
          background: linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(99, 102, 241, 0.1)) !important;
          border: 2px solid #8b5cf6 !important;
          border-radius: 12px !important;
          padding: 1.25rem !important;
          margin: 1rem 0 !important;
          position: relative !important;
          overflow: hidden !important;
        }
        :global(.prose [data-type="math-block"]::before) {
          content: 'MATH' !important;
          position: absolute !important;
          top: 0.5rem !important;
          right: 1rem !important;
          font-size: 0.75rem !important;
          font-weight: 700 !important;
          letter-spacing: 0.05em !important;
          color: #fff !important;
          background: #8b5cf6 !important;
          padding: 0.25rem 0.5rem !important;
          border-radius: 4px !important;
          text-transform: uppercase !important;
        }
        :global(.prose [data-type="math-block"] > *) {
          font-family: 'Georgia', 'Times New Roman', serif !important;
        }

        /* Math Block - Light Mode */
        @media (prefers-color-scheme: light) {
          :global(.prose [data-type="math-block"]) {
            background: linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(99, 102, 241, 0.15)) !important;
            border: 2px solid #8b5cf6 !important;
          }
          :global(.prose [data-type="math-block"] > *) {
            color: #1e293b !important;
          }
        }

        /* Special Code Block (HTML) Styling */
        :global(.prose pre[data-type="special-code"]) {
          background: #1e1e1e !important;
          border: 2px solid #10b981 !important;
          border-radius: 12px !important;
          padding: 1.25rem !important;
          margin: 1rem 0 !important;
          position: relative !important;
        }
        :global(.prose pre[data-type="special-code"]::before) {
          content: 'HTML' !important;
          position: absolute !important;
          top: 0.5rem !important;
          right: 1rem !important;
          font-size: 0.75rem !important;
          font-weight: 700 !important;
          letter-spacing: 0.05em !important;
          color: #fff !important;
          background: #10b981 !important;
          padding: 0.25rem 0.5rem !important;
          border-radius: 4px !important;
          text-transform: uppercase !important;
        }
        :global(.prose pre[data-type="special-code"] code) {
          color: #fff !important;
          font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace !important;
          font-size: 0.875rem !important;
        }

        /* Special Code Block - Light Mode */
        @media (prefers-color-scheme: light) {
          :global(.prose pre[data-type="special-code"]) {
            background: #f0fdf4 !important;
            border: 2px solid #10b981 !important;
          }
          :global(.prose pre[data-type="special-code"] code) {
            color: #065f46 !important;
          }
        }

        /* Table Responsive Styling - Mobile Scroll */
        :global(.prose table) {
          display: block !important;
          width: 100% !important;
          overflow-x: auto !important;
          -webkit-overflow-scrolling: touch !important;
        }
        :global(.prose table thead),
        :global(.prose table tbody),
        :global(.prose table tr) {
          display: table !important;
          width: 100% !important;
          table-layout: fixed !important;
        }
        :global(.prose table td),
        :global(.prose table th) {
          min-width: 100px !important;
          white-space: nowrap !important;
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


