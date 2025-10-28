const mongoose = require('mongoose');

const portfolioSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true,
    maxlength: [200, 'Title cannot exceed 200 characters']
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
    trim: true,
    maxlength: [1000, 'Description cannot exceed 1000 characters']
  },
  type: {
    type: String,
    required: [true, 'Type is required'],
    enum: ['project', 'research'],
    default: 'project'
  },
  // Project-specific fields
  technologies: [{
    type: String,
    trim: true
  }],
  githubUrl: {
    type: String,
    trim: true,
    validate: {
      validator: function(v) {
        return !v || /^https?:\/\/github\.com\/.+/.test(v);
      },
      message: 'GitHub URL must be a valid GitHub repository URL'
    }
  },
  // Research-specific fields
  tags: [{
    type: String,
    trim: true
  }],
  category: {
    type: String,
    trim: true,
    maxlength: [100, 'Category cannot exceed 100 characters']
  },
  researchLink: {
    type: String,
    trim: true,
    validate: {
      validator: function(v) {
        return !v || /^https?:\/\/.+/.test(v);
      },
      message: 'Research link must be a valid URL'
    }
  },
  // Common fields
  image: {
    type: String,
    trim: true
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Indexes for better performance
portfolioSchema.index({ type: 1, createdAt: -1 });
portfolioSchema.index({ category: 1 });
portfolioSchema.index({ createdAt: -1 }); // For sorting
portfolioSchema.index({ title: 'text', description: 'text' }); // Text search index
portfolioSchema.index({ technologies: 1 }); // For technology filtering
portfolioSchema.index({ tags: 1 }); // For tag filtering

// Virtual for formatted date - DISABLED for performance
// portfolioSchema.virtual('formattedDate').get(function() {
//   return this.createdAt.toLocaleDateString('en-US', {
//     year: 'numeric',
//     month: 'long',
//     day: 'numeric'
//   });
// });

// Pre-save middleware to update updatedAt
portfolioSchema.pre('save', function(next) {
  this.updatedAt = new Date();
  next();
});

// Static method to get portfolio items by type
portfolioSchema.statics.getByType = function(type, limit = 10) {
  return this.find({ type })
    .sort({ createdAt: -1 })
    .limit(limit);
};

// Static method to search portfolio items
portfolioSchema.statics.search = function(query, type = null) {
  const filter = {
    $or: [
      { title: { $regex: query, $options: 'i' } },
      { description: { $regex: query, $options: 'i' } }
    ]
  };
  
  if (type && type !== 'all') {
    filter.type = type;
  }
  
  return this.find(filter).sort({ createdAt: -1 });
};

module.exports = mongoose.model('Portfolio', portfolioSchema);
