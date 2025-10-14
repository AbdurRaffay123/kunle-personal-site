const express = require('express');
const { body } = require('express-validator');
const blogController = require('../controllers/blogController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Validation middleware
const validateBlog = [
  body('title')
    .notEmpty()
    .withMessage('Title is required')
    .isLength({ max: 200 })
    .withMessage('Title cannot exceed 200 characters')
    .trim(),
  body('description')
    .notEmpty()
    .withMessage('Description is required')
    .isLength({ max: 2000 })
    .withMessage('Description cannot exceed 2000 characters')
    .trim(),
  body('category')
    .notEmpty()
    .withMessage('Category is required')
    .isLength({ max: 100 })
    .withMessage('Category cannot exceed 100 characters')
    .trim(),
  body('link')
    .notEmpty()
    .withMessage('Link is required')
    .isURL()
    .withMessage('Link must be a valid URL')
    .trim()
];

const validateBlogUpdate = [
  body('title')
    .optional()
    .notEmpty()
    .withMessage('Title cannot be empty')
    .isLength({ max: 200 })
    .withMessage('Title cannot exceed 200 characters')
    .trim(),
  body('description')
    .optional()
    .notEmpty()
    .withMessage('Description cannot be empty')
    .isLength({ max: 2000 })
    .withMessage('Description cannot exceed 2000 characters')
    .trim(),
  body('category')
    .optional()
    .notEmpty()
    .withMessage('Category cannot be empty')
    .isLength({ max: 100 })
    .withMessage('Category cannot exceed 100 characters')
    .trim(),
  body('link')
    .optional()
    .notEmpty()
    .withMessage('Link cannot be empty')
    .isURL()
    .withMessage('Link must be a valid URL')
    .trim()
];

router.get('/', blogController.getBlogs);   
router.use(authMiddleware);

// Blog CRUD routes
router.post('/', validateBlog, blogController.createBlog); // POST /api/blogs
router.get('/stats', blogController.getBlogStats);                          // GET /api/blogs/stats
router.get('/:id', blogController.getBlogById);                             // GET /api/blogs/:id
router.put('/:id', validateBlogUpdate, blogController.updateBlog); // PUT /api/blogs/:id
router.delete('/:id', blogController.deleteBlog);                           // DELETE /api/blogs/:id

module.exports = router;