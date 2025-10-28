/**
 * Test page for Table of Contents functionality
 */

"use client";

import { useState } from 'react';
import TableOfContents from '@/components/UI/TableOfContents';

export default function TestTOCPage() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const headings = [
    { id: 'section-1', text: 'Section 1', level: 1 },
    { id: 'section-2', text: 'Section 2', level: 2 },
    { id: 'section-3', text: 'Section 3', level: 2 },
    { id: 'section-4', text: 'Section 4', level: 1 },
    { id: 'section-5', text: 'Section 5', level: 3 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Table of Contents Test</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Table of Contents */}
          <div className="lg:col-span-1">
            <TableOfContents headings={headings} />
          </div>
          
          {/* Content */}
          <div className="lg:col-span-3 space-y-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
              <h1 id="section-1" className="text-2xl font-bold mb-4" style={{ scrollMarginTop: '100px' }}>
                Section 1
              </h1>
              <p className="text-gray-700 dark:text-gray-300">
                This is the first section. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
              <h2 id="section-2" className="text-xl font-bold mb-4" style={{ scrollMarginTop: '100px' }}>
                Section 2
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                This is the second section. Ut enim ad minim veniam, quis nostrud exercitation 
                ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
              <h2 id="section-3" className="text-xl font-bold mb-4" style={{ scrollMarginTop: '100px' }}>
                Section 3
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                This is the third section. Duis aute irure dolor in reprehenderit in voluptate 
                velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
              <h1 id="section-4" className="text-2xl font-bold mb-4" style={{ scrollMarginTop: '100px' }}>
                Section 4
              </h1>
              <p className="text-gray-700 dark:text-gray-300">
                This is the fourth section. Excepteur sint occaecat cupidatat non proident, 
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
              <h3 id="section-5" className="text-lg font-bold mb-4" style={{ scrollMarginTop: '100px' }}>
                Section 5
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                This is the fifth section. Sed ut perspiciatis unde omnis iste natus error 
                sit voluptatem accusantium doloremque laudantium.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
