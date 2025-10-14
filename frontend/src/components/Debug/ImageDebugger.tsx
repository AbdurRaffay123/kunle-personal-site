/**
 * Image Debugger Component
 * Shows information about image usage for debugging purposes
 */

"use client";

import { useImageManager } from "@/contexts/ImageContext";
import { useState, useEffect } from "react";

export default function ImageDebugger() {
  const { getUsedCount, getTotalCount, resetImages } = useImageManager();
  const [usedCount, setUsedCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    setUsedCount(getUsedCount());
    setTotalCount(getTotalCount());
  }, [getUsedCount, getTotalCount]);

  // Only show in development
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 text-white p-3 rounded-lg text-xs z-50">
      <div className="font-bold mb-1">Image Manager Debug</div>
      <div>Used: {usedCount}</div>
      <div>Total: {totalCount}</div>
      <div>Available: {totalCount - usedCount}</div>
      <button 
        onClick={() => {
          resetImages();
          setUsedCount(0);
        }}
        className="mt-2 px-2 py-1 bg-red-600 hover:bg-red-700 rounded text-xs"
      >
        Reset
      </button>
    </div>
  );
}
