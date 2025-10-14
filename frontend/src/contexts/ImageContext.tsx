/**
 * Image Context - Manages unique image assignment across the entire application
 * Ensures no image is used twice across all cards and pages
 */

"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';
import { getUniqueImage, resetUsedImages, getUsedImageCount, getTotalImageCount } from '@/lib/imageManager';

interface ImageContextType {
  getUniqueImage: (category: string, title: string) => string;
  resetImages: () => void;
  getUsedCount: () => number;
  getTotalCount: () => number;
}

const ImageContext = createContext<ImageContextType | undefined>(undefined);

interface ImageProviderProps {
  children: React.ReactNode;
}

export function ImageProvider({ children }: ImageProviderProps) {
  const [isInitialized, setIsInitialized] = useState(false);

  // Initialize the image manager when the app starts
  useEffect(() => {
    // Reset images on app initialization to ensure clean state
    resetUsedImages();
    setIsInitialized(true);
  }, []);

  const contextValue: ImageContextType = {
    getUniqueImage: (category: string, title: string) => {
      if (!isInitialized) {
        // Fallback during initialization
        return 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop&crop=center&auto=format';
      }
      return getUniqueImage(category, title);
    },
    resetImages: resetUsedImages,
    getUsedCount: getUsedImageCount,
    getTotalCount: getTotalImageCount,
  };

  return (
    <ImageContext.Provider value={contextValue}>
      {children}
    </ImageContext.Provider>
  );
}

export function useImageManager() {
  const context = useContext(ImageContext);
  if (context === undefined) {
    throw new Error('useImageManager must be used within an ImageProvider');
  }
  return context;
}
