const bcrypt = require('bcryptjs');

const SALT_ROUNDS = process.env.BCRYPT_SALT_ROUNDS ? parseInt(process.env.BCRYPT_SALT_ROUNDS, 10) : 12;

/**
 * Hash a password
 * @param {string} password - Plain text password
 * @returns {Promise<string>} - Hashed password
 */
const hashPassword = async (password) => {
  try {
    const salt = await bcrypt.genSalt(SALT_ROUNDS);
    return await bcrypt.hash(password, salt);
  } catch (error) {
    throw new Error('Error hashing password');
  }
};

/**
 * Compare password with hash
 * @param {string} password - Plain text password
 * @param {string} hash - Hashed password
 * @returns {Promise<boolean>} - Match result
 */
const comparePassword = async (password, hash) => {
  try {
    return await bcrypt.compare(password, hash);
  } catch (error) {
    throw new Error('Error comparing password');
  }
};

/**
 * Generate salt
 * @param {number} rounds - Salt rounds (default: 12)
 * @returns {Promise<string>} - Salt string
 */
const generateSalt = async (rounds = SALT_ROUNDS) => {
  try {
    return await bcrypt.genSalt(rounds);
  } catch (error) {
    throw new Error('Error generating salt');
  }
};

module.exports = {
  hashPassword,
  comparePassword,
  generateSalt,
  SALT_ROUNDS
};