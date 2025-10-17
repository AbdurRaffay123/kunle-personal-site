const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true,
    maxlength: [300, 'Title cannot exceed 300 characters']
  },
  description: {
    type: String,
    trim: true,
    maxlength: [2000, 'Description cannot exceed 2000 characters'],
    default: ''
  },
  category: {
    type: String,
    trim: true,
    maxlength: [100, 'Category cannot exceed 100 characters'],
    default: ''
  },
  status: {
    type: String,
    enum: {
      values: ['ongoing', 'completed', 'published'],
      message: 'Status must be either "ongoing", "completed", or "published"'
    },
    default: 'ongoing'
  },
  authors: {
    type: [String],
    default: [],
    validate: {
      validator: function(authors) {
        return authors.every(author => 
          typeof author === 'string' && author.trim().length > 0
        );
      },
      message: 'Each author must be a non-empty string'
    }
  },
  tags: {
    type: [String],
    default: [],
    validate: {
      validator: function(tags) {
        return tags.every(tag => 
          typeof tag === 'string' && tag.trim().length > 0
        );
      },
      message: 'Each tag must be a non-empty string'
    }
  }
}, {
  timestamps: true
});

// Index for better query performance
articleSchema.index({ status: 1, createdAt: -1 });
articleSchema.index({ category: 1, status: 1 });
articleSchema.index({ tags: 1 });

// Clean up authors and tags arrays before saving
articleSchema.pre('save', function(next) {
  if (this.authors) {
    this.authors = this.authors
      .map(author => author.trim())
      .filter(author => author.length > 0);
  }
  
  if (this.tags) {
    this.tags = this.tags
      .map(tag => tag.trim().toLowerCase())
      .filter(tag => tag.length > 0);
  }
  
  next();
});

// Remove duplicates from authors and tags
articleSchema.pre('save', function(next) {
  if (this.authors) {
    this.authors = [...new Set(this.authors)];
  }
  
  if (this.tags) {
    this.tags = [...new Set(this.tags)];
  }
  
  next();
});

module.exports = mongoose.model('Article', articleSchema);