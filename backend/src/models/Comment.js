/**
 * Comment Model
 * 
 * Handles comments and replies for blogs and notes
 */

const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  // Author information
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email']
  },
  
  // Content
  content: {
    type: String,
    required: [true, 'Comment content is required'],
    trim: true
  },
  
  // Related post
  postId: {
    type: String,
    required: [true, 'Post ID is required']
  },
  postType: {
    type: String,
    required: [true, 'Post type is required'],
    enum: ['blog', 'note', 'project']
  },
  
  // Reply functionality
  parentCommentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Comment',
    default: null
  },
  
  // Status
  isApproved: {
    type: Boolean,
    default: true // Auto-approve for now, can be changed for moderation
  },
  
  // Timestamps
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Indexes
commentSchema.index({ postId: 1, postType: 1 });
commentSchema.index({ parentCommentId: 1 });
commentSchema.index({ createdAt: -1 });
commentSchema.index({ isApproved: 1 });

// Update timestamp on save
commentSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

// Virtual for replies
commentSchema.virtual('replies', {
  ref: 'Comment',
  localField: '_id',
  foreignField: 'parentCommentId'
});

// Ensure virtuals are included in JSON
commentSchema.set('toJSON', { virtuals: true });
commentSchema.set('toObject', { virtuals: true });

module.exports = mongoose.model('Comment', commentSchema);

