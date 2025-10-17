const jwt = require('jsonwebtoken');

const JWT_CONFIG = {
  secret: process.env.JWT_SECRET,
  expiresIn: process.env.JWT_EXPIRES_IN || '1d',
  algorithm: 'HS256'
};

/**
 * Generate JWT token
 * @param {Object} payload - Token payload
 * @param {string} expiresIn - Token expiration
 * @returns {string} - JWT token
 */
const generateToken = (payload, expiresIn = JWT_CONFIG.expiresIn) => {
  if (!JWT_CONFIG.secret) {
    throw new Error('JWT_SECRET is required');
  }

  try {
    return jwt.sign(payload, JWT_CONFIG.secret, { 
      expiresIn,
      algorithm: JWT_CONFIG.algorithm
    });
  } catch (error) {
    throw new Error(`Token generation failed: ${error.message}`);
  }
};

/**
 * Generate access token for user
 * @param {string} userId - User ID
 * @returns {string} - Access token
 */
const generateAccessToken = (userId) => {
  return generateToken({ id: userId });
};

/**
 * Verify JWT token
 * @param {string} token - JWT token
 * @returns {Object} - Decoded payload
 */
const verifyToken = (token) => {
  if (!token) {
    throw new Error('Token is required');
  }

  try {
    return jwt.verify(token, JWT_CONFIG.secret);
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      throw new Error('Token has expired');
    }
    if (error.name === 'JsonWebTokenError') {
      throw new Error('Invalid token');
    }
    throw new Error(`Token verification failed: ${error.message}`);
  }
};

/**
 * Decode token without verification (for debugging)
 * @param {string} token - JWT token
 * @returns {Object|null} - Decoded token or null
 */
const decodeToken = (token) => {
  try {
    return jwt.decode(token, { complete: true });
  } catch (error) {
    return null;
  }
};

/**
 * Get token expiration date
 * @param {string} token - JWT token
 * @returns {Date|null} - Expiration date or null
 */
const getTokenExpiration = (token) => {
  try {
    const decoded = decodeToken(token);
    if (decoded && decoded.payload.exp) {
      return new Date(decoded.payload.exp * 1000);
    }
    return null;
  } catch (error) {
    return null;
  }
};

/**
 * Check if token is expired
 * @param {string} token - JWT token
 * @returns {boolean} - True if expired
 */
const isTokenExpired = (token) => {
  try {
    const expiration = getTokenExpiration(token);
    return expiration ? expiration < new Date() : true;
  } catch (error) {
    return true;
  }
};

module.exports = {
  generateToken,
  generateAccessToken,
  verifyToken,
  decodeToken,
  getTokenExpiration,
  isTokenExpired,
  JWT_CONFIG
};