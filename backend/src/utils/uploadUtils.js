const fs = require('fs').promises;
const path = require('path');

/**
 * Delete uploaded file
 * @param {string} filePath - Full path to file
 */
const deleteFile = async (filePath) => {
  try {
    await fs.unlink(filePath);
    console.log(`File deleted: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error deleting file ${filePath}:`, error);
    return false;
  }
};

/**
 * Get file URL for client
 * @param {string} filename - Filename 
 * @param {string} subfolder - Subfolder name
 */
const getFileUrl = (filename, subfolder = 'general') => {
  const baseUrl = process.env.BASE_URL || 'http://localhost:4000';
  return `${baseUrl}/uploads/${subfolder}/${filename}`;
};

/**
 * Validate file size
 * @param {number} size - File size in bytes
 * @param {number} maxSize - Maximum allowed size in bytes
 */
const validateFileSize = (size, maxSize) => {
  return size <= maxSize;
};

/**
 * Get file extension
 * @param {string} filename - Filename
 */
const getFileExtension = (filename) => {
  return path.extname(filename).toLowerCase();
};

/**
 * Check if file is image
 * @param {string} mimetype - File mimetype
 */
const isImage = (mimetype) => {
  return mimetype.startsWith('image/');
};

module.exports = {
  deleteFile,
  getFileUrl,
  validateFileSize,
  getFileExtension,
  isImage
};