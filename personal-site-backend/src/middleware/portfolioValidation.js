const { body } = require('express-validator');

const portfolioValidation = [
  body('title')
    .notEmpty()
    .withMessage('Title is required')
    .isLength({ min: 3, max: 200 })
    .withMessage('Title must be between 3 and 200 characters')
    .trim(),
  
  body('description')
    .notEmpty()
    .withMessage('Description is required')
    .isLength({ min: 10, max: 1000 })
    .withMessage('Description must be between 10 and 1000 characters')
    .trim(),
  
  body('type')
    .isIn(['project', 'research'])
    .withMessage('Type must be either "project" or "research"'),
  
  // Project-specific validations
  body('technologies')
    .optional()
    .isArray()
    .withMessage('Technologies must be an array'),
  
  body('technologies.*')
    .optional()
    .isString()
    .trim()
    .isLength({ min: 1, max: 50 })
    .withMessage('Each technology must be between 1 and 50 characters'),
  
  
  body('githubUrl')
    .optional()
    .isURL()
    .withMessage('GitHub URL must be a valid URL')
    .custom((value) => {
      if (value && !value.includes('github.com')) {
        throw new Error('GitHub URL must be a GitHub repository URL');
      }
      return true;
    }),
  
  
  // Research-specific validations
  body('tags')
    .optional()
    .isArray()
    .withMessage('Tags must be an array'),
  
  body('tags.*')
    .optional()
    .isString()
    .trim()
    .isLength({ min: 1, max: 50 })
    .withMessage('Each tag must be between 1 and 50 characters'),
  
  body('category')
    .optional()
    .isString()
    .trim()
    .isLength({ min: 1, max: 100 })
    .withMessage('Category must be between 1 and 100 characters'),
  
  body('researchLink')
    .optional()
    .isURL()
    .withMessage('Research link must be a valid URL'),
  
  // Common validations
  body('image')
    .optional()
    .custom((value) => {
      if (!value) return true; // Allow empty
      
      // Check if it's a valid URL
      if (value.startsWith('http://') || value.startsWith('https://')) {
        try {
          new URL(value);
          return true;
        } catch {
          throw new Error('Image must be a valid URL');
        }
      }
      
      // Check if it's base64 data
      if (value.startsWith('data:image/')) {
        return true;
      }
      
      throw new Error('Image must be a valid URL or base64 data');
    }),
  
];

const updatePortfolioValidation = [
  body('title')
    .optional()
    .isLength({ min: 3, max: 200 })
    .withMessage('Title must be between 3 and 200 characters')
    .trim(),
  
  body('description')
    .optional()
    .isLength({ min: 10, max: 1000 })
    .withMessage('Description must be between 10 and 1000 characters')
    .trim(),
  
  body('type')
    .optional()
    .isIn(['project', 'research'])
    .withMessage('Type must be either "project" or "research"'),
  
  body('technologies')
    .optional()
    .isArray()
    .withMessage('Technologies must be an array'),
  
  body('technologies.*')
    .optional()
    .isString()
    .trim()
    .isLength({ min: 1, max: 50 })
    .withMessage('Each technology must be between 1 and 50 characters'),
  
  
  body('githubUrl')
    .optional()
    .isURL()
    .withMessage('GitHub URL must be a valid URL'),
  
  
  body('tags')
    .optional()
    .isArray()
    .withMessage('Tags must be an array'),
  
  body('tags.*')
    .optional()
    .isString()
    .trim()
    .isLength({ min: 1, max: 50 })
    .withMessage('Each tag must be between 1 and 50 characters'),
  
  body('category')
    .optional()
    .isString()
    .trim()
    .isLength({ min: 1, max: 100 })
    .withMessage('Category must be between 1 and 100 characters'),
  
  body('researchLink')
    .optional()
    .isURL()
    .withMessage('Research link must be a valid URL'),
  
  body('image')
    .optional()
    .custom((value) => {
      if (!value) return true; // Allow empty
      
      // Check if it's a valid URL
      if (value.startsWith('http://') || value.startsWith('https://')) {
        try {
          new URL(value);
          return true;
        } catch {
          throw new Error('Image must be a valid URL');
        }
      }
      
      // Check if it's base64 data
      if (value.startsWith('data:image/')) {
        return true;
      }
      
      throw new Error('Image must be a valid URL or base64 data');
    }),
  
];

module.exports = {
  portfolioValidation,
  updatePortfolioValidation
};
