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
  slug: {
    type: String,
    unique: true,
    sparse: true, // Allow null values but ensure uniqueness when present
    trim: true,
    lowercase: true
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
noteSchema.index({ slug: 1 }); // For slug-based lookups

// Generate slug from title before saving
noteSchema.pre('save', async function(next) {
  if (this.isModified('title') && !this.slug) {
    this.slug = await generateUniqueSlug(this.title, this.constructor);
  }
  next();
});

// Helper function to generate unique slug
async function generateUniqueSlug(title, Model) {
  const baseSlug = title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single
    .trim('-'); // Remove leading/trailing hyphens

  let slug = baseSlug;
  let counter = 1;

  // Ensure slug is not empty
  if (!slug) {
    slug = 'untitled';
  }

  // Check for uniqueness
  while (await Model.findOne({ slug })) {
    slug = `${baseSlug}-${counter}`;
    counter++;
  }

  return slug;
}

// Remove sensitive data from JSON output
noteSchema.methods.toJSON = function() {
  const noteObject = this.toObject();
  return noteObject;
};

module.exports = mongoose.model('Note', noteSchema);