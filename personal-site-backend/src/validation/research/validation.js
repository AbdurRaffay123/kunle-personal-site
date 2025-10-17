const { body, validationResult } = require('express-validator');

const validateResearch = [
  body('title')
    .trim()
    .notEmpty()
    .withMessage('Title is required')
    .isLength({ max: 200 })
    .withMessage('Title cannot exceed 200 characters'),
    
  body('description')
    .trim()
    .notEmpty()
    .withMessage('Description is required')
    .isLength({ max: 1000 })
    .withMessage('Description cannot exceed 1000 characters'),
    
  body('category')
    .trim()
    .notEmpty()
    .withMessage('Category is required')
    .isLength({ max: 100 })
    .withMessage('Category cannot exceed 100 characters'),
    
  body('researchLink')
    .trim()
    .notEmpty()
    .withMessage('Research link is required')
    .isURL()
    .withMessage('Please provide a valid URL'),
    
  body('authors')
    .optional()
    .isArray()
    .withMessage('Authors must be an array'),
    
  body('authors.*')
    .optional()
    .trim()
    .isLength({ max: 100 })
    .withMessage('Author name cannot exceed 100 characters'),
    
  body('tags')
    .optional()
    .isArray()
    .withMessage('Tags must be an array'),
    
  body('tags.*')
    .optional()
    .trim()
    .isLength({ max: 50 })
    .withMessage('Tag cannot exceed 50 characters'),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const errorMessages = errors.array().map(error => error.msg);
      return res.status(400).json({
        success: false,
        message: `Validation Error: ${errorMessages.join(', ')}`
      });
    }
    next();
  }
];

module.exports = {
  validateResearch
};