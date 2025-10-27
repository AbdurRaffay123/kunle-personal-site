/**
 * Utility functions for generating SEO-friendly slugs
 */

/**
 * Generate a SEO-friendly slug from a title
 * @param title - The title to convert to a slug
 * @returns A URL-safe slug
 */
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single
    .trim();
}

/**
 * Generate a slug with a fallback to ID for backward compatibility
 * @param title - The title to convert to a slug
 * @param id - The ID to use as fallback
 * @returns A URL-safe slug or ID
 */
export function generateNoteSlug(title: string, id: string): string {
  const slug = generateSlug(title);
  return slug || id; // Fallback to ID if slug is empty
}




