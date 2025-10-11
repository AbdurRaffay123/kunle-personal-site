/**
 * Comment Routes
 */

const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');
const authMiddleware = require('../middleware/authMiddleware');

// Public routes
router.post('/', commentController.createComment);

// Admin routes (protected) - MUST have specific non-ambiguous paths
// Using underscore prefix to avoid matching public routes
router.get('/_admin', authMiddleware, commentController.getAllComments);
router.patch('/_admin/:id/approve', authMiddleware, commentController.updateCommentStatus);
router.delete('/_admin/:id', authMiddleware, commentController.deleteComment);

// Public routes with params - MUST come AFTER admin routes
router.get('/:postType/:postId', commentController.getCommentsByPost);
router.get('/:postType/:postId/count', commentController.getCommentCount);

module.exports = router;

