/**
 * Reusable Card Image Component
 * Provides consistent image handling across all card types
 * Ensures unique image assignment across all cards
 */

"use client";

import { useState } from "react";
import { useImageManager } from "@/contexts/ImageContext";

interface CardImageProps {
  src?: string;
  alt: string;
  category: string;
  title: string;
  className?: string;
  fallbackText?: string;
}

export default function CardImage({ 
  src, 
  alt, 
  category, 
  title, 
  className = "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110",
  fallbackText
}: CardImageProps) {
  const [imageError, setImageError] = useState(false);
  const { getUniqueImage } = useImageManager();
  
  // Determine the image source - use custom src if provided, otherwise get unique image
  const imageSrc = src || getUniqueImage(category, title);
  
  // Handle image load error
  const handleImageError = () => {
    setImageError(true);
  };
  
  // If image failed to load, show fallback
  if (imageError) {
    return (
      <div className={`bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-800 flex items-center justify-center ${className}`}>
        <div className="text-center p-4">
          <div className="text-4xl mb-2">📝</div>
          <div className="text-slate-600 dark:text-slate-400 text-sm font-medium">
            {fallbackText || category?.toUpperCase() || 'TECH'}
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <img
      src={imageSrc}
      alt={alt}
      className={className}
      loading="lazy"
      onError={handleImageError}
    />
  );
}
