const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
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
    maxlength: [2000, 'Description cannot exceed 2000 characters']
  },
  category: {
    type: String,
    required: [true, 'Category is required'],
    trim: true,
    maxlength: [100, 'Category cannot exceed 100 characters']
  },
  image: {
    type: String,
    trim: true
  }
}, {
  timestamps: true
});

// Index for better query performance
blogSchema.index({ category: 1, createdAt: -1 });

// Remove sensitive data from JSON output
blogSchema.methods.toJSON = function() {
  const blogObject = this.toObject();
  return blogObject;
};

module.exports = mongoose.model('Blog', blogSchema);