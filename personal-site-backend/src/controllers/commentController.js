/**
 * Comment Controller
 * 
 * HTTP request handlers for comment operations
 */

const commentService = require('../services/commentService');

/**
 * Create a new comment (public)
 * POST /api/comments
 */
const createComment = async (req, res) => {
  try {
    const { email, content, postId, postType, parentCommentId } = req.body;

    // Validation
    if (!email || !content || !postId || !postType) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields'
      });
    }

    const commentData = {
      email,
      content,
      postId,
      postType,
      parentCommentId: parentCommentId || null
    };

    const comment = await commentService.createComment(commentData);

    // Emit socket event for real-time update
    const io = req.app.get('io');
    if (io) {
      io.to(`post-${postId}`).emit('new-comment', comment);
    }

    res.status(201).json({
      success: true,
      data: { comment }
    });
  } catch (error) {
    console.error('Create comment error:', error);
    res.status(500).json({
      success: false,
      error: error.message || 'Failed to create comment'
    });
  }
};

/**
 * Get comments for a specific post (public)
 * GET /api/comments/:postType/:postId
 */
const getCommentsByPost = async (req, res) => {
  try {
    const { postId, postType } = req.params;

    if (!['blog', 'note', 'project'].includes(postType)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid post type'
      });
    }

    const comments = await commentService.getCommentsByPost(postId, postType);

    res.status(200).json({
      success: true,
      data: { comments }
    });
  } catch (error) {
    console.error('Get comments error:', error);
    res.status(500).json({
      success: false,
      error: error.message || 'Failed to retrieve comments'
    });
  }
};

/**
 * Get all comments (admin only)
 * GET /api/comments/admin
 */
const getAllComments = async (req, res) => {
  try {
    const { postType, isApproved } = req.query;

    const filters = {};
    if (postType) filters.postType = postType;
    if (isApproved !== undefined) filters.isApproved = isApproved === 'true';

    const comments = await commentService.getAllComments(filters);

    res.status(200).json({
      success: true,
      data: { comments }
    });
  } catch (error) {
    console.error('Get all comments error:', error);
    res.status(500).json({
      success: false,
      error: error.message || 'Failed to retrieve comments'
    });
  }
};

/**
 * Update comment approval status (admin only)
 * PATCH /api/comments/:id/approve
 */
const updateCommentStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { isApproved } = req.body;

    if (typeof isApproved !== 'boolean') {
      return res.status(400).json({
        success: false,
        error: 'isApproved must be a boolean'
      });
    }

    const comment = await commentService.updateCommentStatus(id, isApproved);

    res.status(200).json({
      success: true,
      data: { comment }
    });
  } catch (error) {
    console.error('Update comment status error:', error);
    res.status(404).json({
      success: false,
      error: error.message || 'Failed to update comment'
    });
  }
};

/**
 * Delete a comment (admin only)
 * DELETE /api/comments/:id
 */
const deleteComment = async (req, res) => {
  try {
    const { id } = req.params;

    // Get comment before deleting to emit socket event
    const comment = await commentService.getCommentById(id);
    const result = await commentService.deleteComment(id);

    // Emit socket event for real-time update
    const io = req.app.get('io');
    if (io && comment) {
      io.to(`post-${comment.postId}`).emit('delete-comment', { commentId: id });
    }

    res.status(200).json({
      success: true,
      data: result
    });
  } catch (error) {
    console.error('Delete comment error:', error);
    res.status(404).json({
      success: false,
      error: error.message || 'Failed to delete comment'
    });
  }
};

/**
 * Get comment count for a post (public)
 * GET /api/comments/:postType/:postId/count
 */
const getCommentCount = async (req, res) => {
  try {
    const { postId, postType } = req.params;

    if (!['blog', 'note', 'project'].includes(postType)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid post type'
      });
    }

    const count = await commentService.getCommentCount(postId, postType);

    res.status(200).json({
      success: true,
      data: { count }
    });
  } catch (error) {
    console.error('Get comment count error:', error);
    res.status(500).json({
      success: false,
      error: error.message || 'Failed to get comment count'
    });
  }
};

module.exports = {
  createComment,
  getCommentsByPost,
  getAllComments,
  updateCommentStatus,
  deleteComment,
  getCommentCount
};

