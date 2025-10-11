/**
 * Comment Service
 * 
 * Business logic for comment operations
 */

const Comment = require('../models/Comment');
const mongoose = require('mongoose');

/**
 * Create a new comment
 */
const createComment = async (commentData) => {
  const comment = new Comment(commentData);
  await comment.save();
  return comment;
};

/**
 * Get comments for a specific post (with nested replies)
 */
const getCommentsByPost = async (postId, postType) => {
  // postId can be ObjectId or slug string, so no validation needed

  // Get all approved comments for the post
  const comments = await Comment.find({
    postId,
    postType,
    isApproved: true,
    parentCommentId: null // Only get top-level comments
  })
  .sort({ createdAt: -1 })
  .lean();

  // Get replies for each comment
  for (let comment of comments) {
    comment.replies = await Comment.find({
      parentCommentId: comment._id,
      isApproved: true
    })
    .sort({ createdAt: 1 })
    .lean();
  }

  return comments;
};

/**
 * Get all comments (for admin)
 */
const getAllComments = async (filters = {}) => {
  const query = {};
  
  if (filters.postType) {
    query.postType = filters.postType;
  }
  
  if (filters.isApproved !== undefined) {
    query.isApproved = filters.isApproved;
  }

  const comments = await Comment.find(query)
    .sort({ createdAt: -1 })
    .lean();

  return comments;
};

/**
 * Get a single comment by ID
 */
const getCommentById = async (commentId) => {
  if (!mongoose.Types.ObjectId.isValid(commentId)) {
    throw new Error('Invalid comment ID');
  }

  const comment = await Comment.findById(commentId).lean();
  
  if (!comment) {
    throw new Error('Comment not found');
  }

  return comment;
};

/**
 * Update comment approval status (for moderation)
 */
const updateCommentStatus = async (commentId, isApproved) => {
  if (!mongoose.Types.ObjectId.isValid(commentId)) {
    throw new Error('Invalid comment ID');
  }

  const comment = await Comment.findByIdAndUpdate(
    commentId,
    { isApproved, updatedAt: Date.now() },
    { new: true, runValidators: true }
  );

  if (!comment) {
    throw new Error('Comment not found');
  }

  return comment;
};

/**
 * Delete a comment (and all its replies)
 */
const deleteComment = async (commentId) => {
  if (!mongoose.Types.ObjectId.isValid(commentId)) {
    throw new Error('Invalid comment ID');
  }

  const comment = await Comment.findById(commentId);
  
  if (!comment) {
    throw new Error('Comment not found');
  }

  // Delete all replies to this comment
  await Comment.deleteMany({ parentCommentId: commentId });
  
  // Delete the comment itself
  await Comment.findByIdAndDelete(commentId);

  return { message: 'Comment and replies deleted successfully' };
};

/**
 * Get comment count for a post
 */
const getCommentCount = async (postId, postType) => {
  // postId can be ObjectId or slug string, so no validation needed

  const count = await Comment.countDocuments({
    postId,
    postType,
    isApproved: true
  });

  return count;
};

module.exports = {
  createComment,
  getCommentsByPost,
  getAllComments,
  getCommentById,
  updateCommentStatus,
  deleteComment,
  getCommentCount
};

