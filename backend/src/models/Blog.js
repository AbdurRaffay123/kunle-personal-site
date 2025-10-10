const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true,
    maxlength: [200, 'Title cannot exceed 200 characters']
  },
  slug: {
    type: String,
    required: [true, 'Slug is required'],
    unique: true,
    trim: true,
    lowercase: true,
    match: [/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'Slug must be URL-friendly (lowercase, numbers, hyphens only)']
  },
  status: {
    type: String,
    enum: {
      values: ['draft', 'published'],
      message: 'Status must be either "draft" or "published"'
    },
    default: 'draft'
  }
}, {
  timestamps: true
});

// Index for better query performance
blogSchema.index({ status: 1, createdAt: -1 });
blogSchema.index({ slug: 1 });

// Generate slug from title if not provided
blogSchema.pre('save', function(next) {
  if (!this.slug && this.title) {
    this.slug = this.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }
  next();
});

// Remove sensitive data from JSON output
blogSchema.methods.toJSON = function() {
  const blogObject = this.toObject();
  return blogObject;
};

module.exports = mongoose.model('Blog', blogSchema);