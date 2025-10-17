/**
 * Hint Banner Component
 * Displays helpful information about special formatting features
 */

"use client";

import { useState } from 'react';
import { X, Info, Sigma, Terminal } from 'lucide-react';

export function HintBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="mb-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-l-4 border-blue-500 dark:border-blue-400 rounded-lg p-4 relative">
      <button
        onClick={() => setIsVisible(false)}
        className="absolute top-2 right-2 p-1 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
        aria-label="Close hint"
      >
        <X className="w-4 h-4" />
      </button>

      <div className="flex items-start gap-3">
        <div className="mt-0.5">
          <Info className="w-5 h-5 text-blue-600 dark:text-blue-400" />
        </div>
        <div className="flex-1 pr-6">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
            💡 Special Formatting Hints
          </h4>
          <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <div className="flex items-start gap-2">
              <div className="flex items-center gap-1.5 min-w-fit">
                <Sigma className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                <span className="font-medium text-purple-700 dark:text-purple-300">Math:</span>
              </div>
              <span>
                Highlight your mathematical equations and click the <strong>Σ (Sigma)</strong> button to display them with enhanced purple styling in your notes.
              </span>
            </div>
            <div className="flex items-start gap-2">
              <div className="flex items-center gap-1.5 min-w-fit">
                <Terminal className="w-4 h-4 text-green-600 dark:text-green-400" />
                <span className="font-medium text-green-700 dark:text-green-300">Code:</span>
              </div>
              <span>
                Highlight your code blocks and click the <strong>Terminal</strong> button to display them with enhanced green styling and special effects.
              </span>
            </div>
          </div>
          <div className="mt-3 pt-3 border-t border-blue-200 dark:border-blue-700 text-xs text-gray-600 dark:text-gray-400">
            <p>
              <strong>Tip:</strong> These special markers make your mathematical expressions and important code stand out beautifully when viewing your notes! 
              Regular code and math still work normally - use these for content you want to emphasize.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

