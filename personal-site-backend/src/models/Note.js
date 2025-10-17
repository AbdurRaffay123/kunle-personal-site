const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true,
    maxlength: [200, 'Title cannot exceed 200 characters']
  },
  content: {
    type: String,
    required: [true, 'Content is required'],
    trim: true
  },
  topic: {
    type: String,
    required: [true, 'Topic is required'],
    trim: true,
    maxlength: [100, 'Topic cannot exceed 100 characters']
  },
  tags: [{
    type: String,
    trim: true,
    maxlength: [50, 'Tag cannot exceed 50 characters']
  }],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    index: false  // Disable automatic indexing since we define it explicitly below
  }
}, {
  timestamps: true
});

// Index for better query performance
noteSchema.index({ user: 1, createdAt: -1 });
noteSchema.index({ topic: 1 });
noteSchema.index({ tags: 1 });
noteSchema.index({ createdAt: -1 }); // For public notes listing

// Remove sensitive data from JSON output
noteSchema.methods.toJSON = function() {
  const noteObject = this.toObject();
  return noteObject;
};

module.exports = mongoose.model('Note', noteSchema);