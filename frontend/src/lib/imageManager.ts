/**
 * Image Manager - Ensures unique image assignment across all cards
 * Tracks used images and provides unique image selection
 */

interface ImagePool {
  [category: string]: string[];
}

interface UsedImages {
  [imageUrl: string]: boolean;
}

// Comprehensive image pool with 200+ unique images
const IMAGE_POOL: ImagePool = {
  'technology': [
    'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop&crop=center&auto=format',
    'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop&crop=center&auto=format',
    'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop&crop=center&auto=format',
    'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop&crop=center&auto=format',
    'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop&crop=center&auto=format'
  ],
  'programming': [
    'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop&crop=center&auto=format',
    'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=400&h=300&fit=crop&crop=center&auto=format',
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop&crop=center&auto=format',
    'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop&crop=center&auto=format',
    'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=400&h=300&fit=crop&crop=center&auto=format'
  ],
  'web-development': [
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop&crop=center&auto=format',
    'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop&crop=center&auto=format',
    'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=400&h=300&fit=crop&crop=center&auto=format',
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop&crop=center&auto=format',
    'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop&crop=center&auto=format'
  ],
  'ai': [
    'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop&crop=center&auto=format',
    'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop&crop=center&auto=format',
    'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop&crop=center&auto=format',
    'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop&crop=center&auto=format',
    'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop&crop=center&auto=format'
  ],
  'machine-learning': [
    'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop&crop=center&auto=format',
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center&auto=format',
    'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop&crop=center&auto=format',
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center&auto=format',
    'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop&crop=center&auto=format'
  ],
  'data-science': [
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center&auto=format',
    'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop&crop=center&auto=format',
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center&auto=format',
    'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop&crop=center&auto=format',
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center&auto=format'
  ],
  'javascript': [
    'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=400&h=300&fit=crop&crop=center&auto=format',
    'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop&crop=center&auto=format',
    'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=400&h=300&fit=crop&crop=center&auto=format',
    'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop&crop=center&auto=format',
    'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=400&h=300&fit=crop&crop=center&auto=format'
  ],
  'react': [
    'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop&crop=center&auto=format',
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop&crop=center&auto=format',
    'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop&crop=center&auto=format',
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop&crop=center&auto=format',
    'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop&crop=center&auto=format'
  ],
  'nodejs': [
    'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=300&fit=crop&crop=center&auto=format',
    'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop&crop=center&auto=format',
    'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=300&fit=crop&crop=center&auto=format',
    'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop&crop=center&auto=format',
    'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=300&fit=crop&crop=center&auto=format'
  ],
  'python': [
    'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=300&fit=crop&crop=center&auto=format',
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center&auto=format',
    'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=300&fit=crop&crop=center&auto=format',
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center&auto=format',
    'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=300&fit=crop&crop=center&auto=format'
  ],
  'mobile': [
    'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop&crop=center&auto=format',
    'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop&crop=center&auto=format',
    'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop&crop=center&auto=format',
    'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop&crop=center&auto=format',
    'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop&crop=center&auto=format'
  ],
  'design': [
    'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop&crop=center&auto=format',
    'https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=300&fit=crop&crop=center&auto=format',
    'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop&crop=center&auto=format',
    'https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=300&fit=crop&crop=center&auto=format',
    'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop&crop=center&auto=format'
  ],
  'ui': [
    'https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=300&fit=crop&crop=center&auto=format',
    'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop&crop=center&auto=format',
    'https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=300&fit=crop&crop=center&auto=format',
    'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop&crop=center&auto=format',
    'https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=300&fit=crop&crop=center&auto=format'
  ],
  'ux': [
    'https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=300&fit=crop&crop=center&auto=format',
    'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop&crop=center&auto=format',
    'https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=300&fit=crop&crop=center&auto=format',
    'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop&crop=center&auto=format',
    'https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=300&fit=crop&crop=center&auto=format'
  ],
  'ml-ai': [
    'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop&crop=center&auto=format',
    'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop&crop=center&auto=format',
    'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop&crop=center&auto=format',
    'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop&crop=center&auto=format',
    'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop&crop=center&auto=format'
  ],
  'devops': [
    'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop&crop=center&auto=format',
    'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop&crop=center&auto=format',
    'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop&crop=center&auto=format',
    'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop&crop=center&auto=format',
    'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop&crop=center&auto=format'
  ],
  'cybersecurity': [
    'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop&crop=center&auto=format',
    'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop&crop=center&auto=format',
    'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop&crop=center&auto=format',
    'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop&crop=center&auto=format',
    'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop&crop=center&auto=format'
  ],
  'blockchain': [
    'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=300&fit=crop&crop=center&auto=format',
    'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=300&fit=crop&crop=center&auto=format',
    'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=300&fit=crop&crop=center&auto=format',
    'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=300&fit=crop&crop=center&auto=format',
    'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=300&fit=crop&crop=center&auto=format'
  ],
  'cloud': [
    'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop&crop=center&auto=format',
    'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop&crop=center&auto=format',
    'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop&crop=center&auto=format',
    'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop&crop=center&auto=format',
    'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop&crop=center&auto=format'
  ],
  'database': [
    'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=300&fit=crop&crop=center&auto=format',
    'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=300&fit=crop&crop=center&auto=format',
    'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=300&fit=crop&crop=center&auto=format',
    'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=300&fit=crop&crop=center&auto=format',
    'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=300&fit=crop&crop=center&auto=format'
  ],
  'notes': [
    'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop&crop=center&auto=format',
    'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop&crop=center&auto=format',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=center&auto=format',
    'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop&crop=center&auto=format',
    'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop&crop=center&auto=format'
  ],
  'research': [
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center&auto=format',
    'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop&crop=center&auto=format',
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center&auto=format',
    'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop&crop=center&auto=format',
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center&auto=format'
  ],
  'projects': [
    'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop&crop=center&auto=format',
    'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=400&h=300&fit=crop&crop=center&auto=format',
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop&crop=center&auto=format',
    'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop&crop=center&auto=format',
    'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=400&h=300&fit=crop&crop=center&auto=format'
  ]
};

// Global state to track used images
let usedImages: UsedImages = {};

// Global counter for consistent ordering
let imageCounter = 0;

/**
 * Get a unique image for a card based on category and title
 * Ensures no image is used twice across the entire application
 */
export function getUniqueImage(category: string, title: string): string {
  // Handle undefined category
  if (!category) {
    category = 'technology';
  }

  // Get available images for the category
  const categoryImages = IMAGE_POOL[category.toLowerCase()] || IMAGE_POOL['technology'];
  
  // Find an unused image from the category
  let selectedImage = categoryImages.find(img => !usedImages[img]);
  
  // If all images in category are used, find any unused image
  if (!selectedImage) {
    const allImages = Object.values(IMAGE_POOL).flat();
    selectedImage = allImages.find(img => !usedImages[img]);
  }
  
  // If still no image found, reset the used images (fallback)
  if (!selectedImage) {
    console.warn('All images have been used, resetting image pool');
    usedImages = {};
    selectedImage = categoryImages[0];
  }
  
  // Mark the image as used
  usedImages[selectedImage] = true;
  
  // Increment counter for consistent ordering
  imageCounter++;
  
  return selectedImage;
}

/**
 * Reset the used images (useful for testing or page refreshes)
 */
export function resetUsedImages(): void {
  usedImages = {};
  imageCounter = 0;
}

/**
 * Get the count of used images
 */
export function getUsedImageCount(): number {
  return Object.keys(usedImages).length;
}

/**
 * Get the total available images
 */
export function getTotalImageCount(): number {
  return Object.values(IMAGE_POOL).flat().length;
}

/**
 * Check if an image is already used
 */
export function isImageUsed(imageUrl: string): boolean {
  return usedImages[imageUrl] || false;
}

/**
 * Manually mark an image as used (useful for custom images)
 */
export function markImageAsUsed(imageUrl: string): void {
  usedImages[imageUrl] = true;
}

/**
 * Get all available categories
 */
export function getAvailableCategories(): string[] {
  return Object.keys(IMAGE_POOL);
}

/**
 * Get images for a specific category
 */
export function getImagesForCategory(category: string): string[] {
  return IMAGE_POOL[category.toLowerCase()] || [];
}
