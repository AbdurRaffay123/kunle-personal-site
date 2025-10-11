const mongoose = require('mongoose');

const researchSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true,
    maxLength: [200, 'Title cannot exceed 200 characters']
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
    trim: true,
    maxLength: [1000, 'Description cannot exceed 1000 characters']
  },
  category: {
    type: String,
    required: [true, 'Category is required'],
    trim: true,
    maxLength: [100, 'Category cannot exceed 100 characters']
  },
  researchLink: {
    type: String,
    required: [true, 'Research link is required'],
    validate: {
      validator: function(url) {
        // Basic URL validation
        const urlPattern = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
        return urlPattern.test(url);
      },
      message: 'Please provide a valid URL'
    }
  },
  tags: [{
    type: String,
    trim: true,
    maxLength: [50, 'Tag cannot exceed 50 characters']
  }],
  isPublished: {
    type: Boolean,
    default: true
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
  timestamps: true, // This automatically handles createdAt and updatedAt
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Indexes for better performance
researchSchema.index({ title: 'text', description: 'text', tags: 'text' });
researchSchema.index({ category: 1 });
researchSchema.index({ createdAt: -1 });
researchSchema.index({ createdBy: 1 });

// Virtual for formatted date
researchSchema.virtual('formattedDate').get(function() {
  return this.createdAt.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
});

// Pre-save middleware to update the updatedAt field
researchSchema.pre('save', function(next) {
  if (this.isModified() && !this.isNew) {
    this.updatedAt = Date.now();
  }
  next();
});

// Static method to find research by category
researchSchema.statics.findByCategory = function(category) {
  return this.find({ category: new RegExp(category, 'i'), isPublished: true });
};

// Instance method to add tags
researchSchema.methods.addTags = function(newTags) {
  const uniqueTags = [...new Set([...this.tags, ...newTags])];
  this.tags = uniqueTags;
  return this.save();
};

const Research = mongoose.model('Research', researchSchema);

module.exports = Research;