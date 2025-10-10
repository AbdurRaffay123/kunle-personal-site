const express = require('express');
const { body } = require('express-validator');
const blogController = require('../controllers/blogController');

const router = express.Router();

// Validation middleware
const validateBlog = [
  body('title')
    .notEmpty()
    .withMessage('Title is required')
    .isLength({ max: 200 })
    .withMessage('Title cannot exceed 200 characters')
    .trim(),
  
  body('slug')
    .optional()
    .matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/)
    .withMessage('Slug must be URL-friendly (lowercase, numbers, hyphens only)')
    .trim(),
  
  body('status')
    .optional()
    .isIn(['draft', 'published'])
    .withMessage('Status must be either "draft" or "published"')
];

const validateBlogUpdate = [
  body('title')
    .optional()
    .notEmpty()
    .withMessage('Title cannot be empty')
    .isLength({ max: 200 })
    .withMessage('Title cannot exceed 200 characters')
    .trim(),
  
  body('slug')
    .optional()
    .matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/)
    .withMessage('Slug must be URL-friendly (lowercase, numbers, hyphens only)')
    .trim(),
  
  body('status')
    .optional()
    .isIn(['draft', 'published'])
    .withMessage('Status must be either "draft" or "published"')
];

// Blog CRUD routes
router.post('/', validateBlog, blogController.createBlog);                    // POST /api/blogs
router.get('/', blogController.getBlogs);                                     // GET /api/blogs
router.get('/stats', blogController.getBlogStats);                           // GET /api/blogs/stats
router.get('/:id', blogController.getBlogById);                              // GET /api/blogs/:id
router.get('/slug/:slug', blogController.getBlogBySlug);                     // GET /api/blogs/slug/:slug
router.put('/:id', validateBlogUpdate, blogController.updateBlog);           // PUT /api/blogs/:id
router.delete('/:id', blogController.deleteBlog);                            // DELETE /api/blogs/:id

// Additional routes
router.patch('/:id/publish', blogController.publishBlog);                    // PATCH /api/blogs/:id/publish

module.exports = router;