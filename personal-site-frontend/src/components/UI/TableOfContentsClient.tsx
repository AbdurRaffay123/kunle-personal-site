"use client";

import { useEffect, useState } from 'react';
import TableOfContents from './TableOfContents';

interface Heading {
  id: string;
  text: string;
  level: number;
}

export default function TableOfContentsClient() {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const handleHeadingsReady = (event: any) => {
      if (event.detail?.headings && Array.isArray(event.detail.headings)) {
        setHeadings(prev => {
          const newHeadings = event.detail.headings || [];
          const unique = [
            ...new Map([...prev, ...newHeadings].map(h => [h.id, h])).values()
          ];
          return unique;
        });
        
        // setHeadings(event.detail.headings);
        setIsReady(true);
      }
    };

    window.addEventListener('headingsReady', handleHeadingsReady);

    // Fallback extraction - only from article
    const extractHeadingsFromDOM = () => {
      const headingElements = document.querySelectorAll('article h1[id], article h2[id], article h3[id], article h4[id], article h5[id], article h6[id]');
      
      if (headingElements.length > 0) {
        const extracted: Heading[] = [];
        headingElements.forEach((element) => {
          const el = element as HTMLElement;
          extracted.push({
            id: el.id,
            text: el.textContent?.trim() || '',
            level: parseInt(el.tagName.substring(1))
          });
        });
        
        if (extracted.length > 0) {
          setHeadings(prev => {
            const unique = [
              ...new Map([...prev, ...extracted].map(h => [h.id, h])).values()
            ];
            return unique;
          });
          
          // setHeadings(extracted);
          setIsReady(true);
          return true;
        }
      }
      return false;
    };

    const timeout1 = setTimeout(() => !isReady && extractHeadingsFromDOM(), 100);
    const timeout2 = setTimeout(() => !isReady && extractHeadingsFromDOM(), 500);

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      window.removeEventListener('headingsReady', handleHeadingsReady);
    };
  }, [isReady]);

  if (!isReady || headings.length === 0) {
    return (
      <div className="rounded-lg border p-4 bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
        <h3 className="mb-4 text-lg font-semibold">Table of Contents</h3>
        <div className="text-sm text-gray-500 dark:text-gray-400">Loading...</div>
      </div>
    );
  }

  return <TableOfContents headings={headings} />;
}