const { decodeToken, isTokenExpired, getTokenExpiration } = require('../config/jwt');

/**
 * Extract token from Authorization header
 * @param {string} authHeader - Authorization header value
 * @returns {string|null} - Extracted token or null
 */
const extractTokenFromHeader = (authHeader) => {
  if (!authHeader) return null;
  
  const parts = authHeader.split(' ');
  if (parts.length !== 2 || parts[0] !== 'Bearer') {
    return null;
  }
  
  return parts[1];
};

/**
 * Get user ID from token without verification
 * @param {string} token - JWT token
 * @returns {string|null} - User ID or null
 */
const getUserIdFromToken = (token) => {
  try {
    const decoded = decodeToken(token);
    return decoded?.payload?.id || null;
  } catch (error) {
    return null;
  }
};

/**
 * Check token validity (not expired and properly formatted)
 * @param {string} token - JWT token
 * @returns {boolean} - True if valid
 */
const isValidToken = (token) => {
  if (!token) return false;
  
  try {
    const decoded = decodeToken(token);
    return decoded !== null && !isTokenExpired(token);
  } catch (error) {
    return false;
  }
};

module.exports = {
  extractTokenFromHeader,
  getUserIdFromToken,
  isValidToken
};