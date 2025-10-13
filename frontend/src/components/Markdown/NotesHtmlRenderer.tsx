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
        (heading as HTMLElement).style.scrollMarginTop = '100px';
      }
    });

    // Enhance images with captions and zoom functionality
    const images = contentRef.current.querySelectorAll('img');
    images.forEach((img) => {
      if (!img.parentElement?.classList.contains('image-wrapper')) {
        const wrapper = document.createElement('figure');
        wrapper.className = 'image-wrapper group relative my-8 mx-auto max-w-3xl';
        
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
        wrapper.className = 'code-block-wrapper relative my-6 group';
        
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
        } else {
          // Add language label for regular code blocks
          const langLabel = document.createElement('div');
          langLabel.className = 'absolute top-3 left-3 text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wide bg-gray-800/50 dark:bg-gray-900/50 px-2 py-1 rounded z-10';
          langLabel.textContent = language;
          wrapper.appendChild(langLabel);
        }
        
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
          pre.className = 'bg-gradient-to-br from-gray-900 via-gray-950 to-black dark:from-black dark:via-gray-950 dark:to-gray-900 text-gray-100 px-6 pt-16 pb-6 rounded-lg overflow-x-auto border-2 border-green-500/50 dark:border-green-400/50 shadow-2xl shadow-green-500/20';
        } else {
          pre.className = 'bg-gray-900 dark:bg-gray-950 text-gray-100 px-6 pb-6 rounded-lg overflow-x-auto border-2 border-gray-700 dark:border-gray-800 shadow-lg';
          pre.style.paddingTop = '50px';
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

    // Enhance mathematical expressions (if wrapped in specific tags or classes)
    const mathElements = contentRef.current.querySelectorAll('.math, .katex, [data-math], [data-type="math-block"], .math-block-content');
    mathElements.forEach((math) => {
      if (!math.parentElement?.classList.contains('math-wrapper')) {
        // Check if this is explicitly marked as math by user
        const isExplicitMath = math.getAttribute('data-type') === 'math-block' || 
                               math.classList.contains('math-block-content');
        
        if (isExplicitMath) {
          // Enhanced styling for explicitly marked math - simple and clean
          const wrapper = document.createElement('div');
          wrapper.className = 'math-wrapper relative my-6 group';
          
          // Add special badge for math
          const mathBadge = document.createElement('div');
          mathBadge.className = 'absolute top-3 left-3 text-xs font-bold text-blue-400 dark:text-blue-300 uppercase tracking-wide bg-blue-900/90 dark:bg-blue-800/90 px-3 py-1.5 rounded-md border border-blue-500/50 flex items-center gap-1.5 z-10';
          mathBadge.innerHTML = `
            <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            <span>Math Expression</span>
          `;
          
          // Add copy button for math (similar to code blocks)
          const mathCopyButton = document.createElement('button');
          mathCopyButton.className = 'absolute top-3 right-3 p-2 bg-blue-700 hover:bg-blue-600 dark:bg-blue-800 dark:hover:bg-blue-700 text-white rounded-md opacity-0 group-hover:opacity-100 transition-all duration-200 flex items-center gap-2 text-sm z-10';
          mathCopyButton.innerHTML = `
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            <span>Copy</span>
          `;
          
          mathCopyButton.addEventListener('click', async () => {
            const mathText = math.textContent || '';
            await navigator.clipboard.writeText(mathText);
            mathCopyButton.innerHTML = `
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>Copied!</span>
            `;
            setTimeout(() => {
              mathCopyButton.innerHTML = `
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <span>Copy</span>
              `;
            }, 2000);
          });
          
          // Create container for math content - simple background
          const mathContainer = document.createElement('div');
          mathContainer.className = 'bg-slate-800 dark:bg-slate-900 text-slate-100 dark:text-slate-50 px-6 pb-6 rounded-lg border-2 border-blue-500/50 dark:border-blue-400/50 shadow-2xl shadow-blue-500/20 text-center text-xl font-semibold';
          mathContainer.style.paddingTop = '50px';
          mathContainer.appendChild(math.cloneNode(true));
          
          math.parentNode?.insertBefore(wrapper, math);
          wrapper.appendChild(mathBadge);
          wrapper.appendChild(mathCopyButton);
          wrapper.appendChild(mathContainer);
          math.remove();
        } else {
          // Regular math styling - simple and clean
          const wrapper = document.createElement('div');
          wrapper.className = 'math-wrapper my-6 p-4 bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 dark:border-purple-400 rounded-r-lg';
          
          const label = document.createElement('div');
          label.className = 'text-xs font-semibold text-purple-600 dark:text-purple-400 mb-2 uppercase tracking-wide';
          label.textContent = '📐 Mathematical Expression';
          
          math.parentNode?.insertBefore(wrapper, math);
          wrapper.appendChild(label);
          wrapper.appendChild(math);
        }
      }
    });

  }, [sanitizedContent]);

  return (
    <>
      <div 
        ref={contentRef}
        className={`prose prose-lg dark:prose-invert max-w-none 
          prose-headings:font-bold prose-headings:text-slate-900 dark:prose-headings:text-slate-100
          prose-p:text-slate-700 dark:prose-p:text-slate-300 prose-p:leading-relaxed
          prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline
          prose-strong:text-slate-900 dark:prose-strong:text-slate-100 prose-strong:font-semibold
          prose-em:text-slate-700 dark:prose-em:text-slate-300
          prose-blockquote:border-l-blue-600 dark:prose-blockquote:border-l-blue-400 
          prose-blockquote:bg-slate-50 dark:prose-blockquote:bg-slate-800/50 prose-blockquote:py-2 prose-blockquote:px-4
          prose-ul:list-disc prose-ul:pl-6 prose-ul:my-4
          prose-ol:list-decimal prose-ol:pl-6 prose-ol:my-4
          prose-li:text-slate-700 dark:prose-li:text-slate-300 prose-li:my-1 prose-li:leading-relaxed
          prose-li:marker:text-slate-500 dark:prose-li:marker:text-slate-400
          prose-table:border-collapse prose-table:w-full
          prose-th:bg-slate-100 dark:prose-th:bg-slate-800 prose-th:p-2 prose-th:border prose-th:border-slate-300 dark:prose-th:border-slate-600
          prose-td:p-2 prose-td:border prose-td:border-slate-300 dark:prose-td:border-slate-600
          prose-hr:border-slate-300 dark:prose-hr:border-slate-700
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
      `}</style>
    </>
  );
}


