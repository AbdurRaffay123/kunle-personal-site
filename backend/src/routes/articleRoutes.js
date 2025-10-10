const express = require('express');
const { body } = require('express-validator');
const articleController = require('../controllers/articleController');

const router = express.Router();

// Validation middleware
const validateArticle = [
  body('title')
    .notEmpty()
    .withMessage('Title is required')
    .isLength({ max: 300 })
    .withMessage('Title cannot exceed 300 characters')
    .trim(),
  
  body('description')
    .optional()
    .isLength({ max: 2000 })
    .withMessage('Description cannot exceed 2000 characters')
    .trim(),
    
  body('category')
    .optional()
    .isLength({ max: 100 })
    .withMessage('Category cannot exceed 100 characters')
    .trim(),
  
  body('status')
    .optional()
    .isIn(['ongoing', 'completed', 'published'])
    .withMessage('Status must be either "ongoing", "completed", or "published"'),
    
  body('authors')
    .optional()
    .isArray()
    .withMessage('Authors must be an array')
    .custom((authors) => {
      if (authors && !authors.every(author => typeof author === 'string' && author.trim().length > 0)) {
        throw new Error('Each author must be a non-empty string');
      }
      return true;
    }),
    
  body('tags')
    .optional()
    .isArray()
    .withMessage('Tags must be an array')
    .custom((tags) => {
      if (tags && !tags.every(tag => typeof tag === 'string' && tag.trim().length > 0)) {
        throw new Error('Each tag must be a non-empty string');
      }
      return true;
    })
];

const validateArticleUpdate = [
  body('title')
    .optional()
    .notEmpty()
    .withMessage('Title cannot be empty')
    .isLength({ max: 300 })
    .withMessage('Title cannot exceed 300 characters')
    .trim(),
  
  body('description')
    .optional()
    .isLength({ max: 2000 })
    .withMessage('Description cannot exceed 2000 characters')
    .trim(),
    
  body('category')
    .optional()
    .isLength({ max: 100 })
    .withMessage('Category cannot exceed 100 characters')
    .trim(),
  
  body('status')
    .optional()
    .isIn(['ongoing', 'completed', 'published'])
    .withMessage('Status must be either "ongoing", "completed", or "published"'),
    
  body('authors')
    .optional()
    .isArray()
    .withMessage('Authors must be an array')
    .custom((authors) => {
      if (authors && !authors.every(author => typeof author === 'string' && author.trim().length > 0)) {
        throw new Error('Each author must be a non-empty string');
      }
      return true;
    }),
    
  body('tags')
    .optional()
    .isArray()
    .withMessage('Tags must be an array')
    .custom((tags) => {
      if (tags && !tags.every(tag => typeof tag === 'string' && tag.trim().length > 0)) {
        throw new Error('Each tag must be a non-empty string');
      }
      return true;
    })
];

// Article CRUD routes
router.post('/', validateArticle, articleController.createArticle);                // POST /api/articles
router.get('/', articleController.getArticles);                                    // GET /api/articles
router.get('/stats', articleController.getArticleStats);                          // GET /api/articles/stats
router.get('/published', articleController.getPublishedArticles);                 // GET /api/articles/published
router.get('/:id', articleController.getArticleById);                             // GET /api/articles/:id
router.put('/:id', validateArticleUpdate, articleController.updateArticle);       // PUT /api/articles/:id
router.delete('/:id', articleController.deleteArticle);                           // DELETE /api/articles/:id

module.exports = router;