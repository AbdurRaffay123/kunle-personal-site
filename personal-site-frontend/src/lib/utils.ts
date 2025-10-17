/**
 * Utility functions
 */

import { clsx, type ClassValue } from "clsx";
import readingTime from "reading-time";

/**
 * Merge class names
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

/**
 * Calculate reading time for text content
 */
export function calculateReadingTime(text: string): number {
  const stats = readingTime(text);
  return Math.ceil(stats.minutes);
}

/**
 * Format date to readable string
 */
export function formatDate(date: string | Date, format: "short" | "long" = "long"): string {
  const dateObj = typeof date === "string" ? new Date(date) : date;

  if (format === "short") {
    return dateObj.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  }

  return dateObj.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

/**
 * Truncate text to a specific length
 */
export function truncate(text: string, length: number): string {
  if (text.length <= length) return text;
  return text.slice(0, length).trim() + "...";
}

/**
 * Slugify a string
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/**
 * Extract headings from HTML content for table of contents
 */
export function extractHeadings(html: string): { id: string; text: string; level: number }[] {
  const headings: { id: string; text: string; level: number }[] = [];
  
  // Parse HTML to extract h1-h6 tags
  const headingRegex = /<h([1-6])[^>]*>(.*?)<\/h\1>/gi;
  let match;

  while ((match = headingRegex.exec(html)) !== null) {
    const level = parseInt(match[1]);
    // Strip any HTML tags from the heading text
    const text = match[2].replace(/<[^>]*>/g, '').trim();
    const id = slugify(text);
    
    if (text) {
      headings.push({ id, text, level });
    }
  }

  return headings;
}

/**
 * Debounce function
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number,
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

