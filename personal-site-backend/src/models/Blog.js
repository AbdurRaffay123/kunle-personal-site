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
  // Add image field for Unsplash integration
  image: {
    type: String,
    default: null
  },
  // Add content field for blog posts
  content: {
    type: String,
    required: [true, 'Content is required'],
    trim: true
  },
  // Add slug field for SEO-friendly URLs
  slug: {
    type: String,
    unique: true,
    sparse: true, // Allow null values but ensure uniqueness when present
    trim: true,
    lowercase: true
  },
  // Add likes count
  likes: {
    type: Number,
    default: 0
  },
  // Add tags for better categorization
  tags: [{
    type: String,
    trim: true,
    maxlength: [50, 'Tag cannot exceed 50 characters']
  }],
  // Add file upload fields
  fileType: {
    type: String,
    enum: ['text', 'pdf', 'doc'],
    default: 'text'
  },
  fileUrl: {
    type: String,
    default: null
  },
  fileName: {
    type: String,
    default: null
  },
  fileSize: {
    type: Number,
    default: null
  }
}, {
  timestamps: true
});

// Index for better query performance
blogSchema.index({ category: 1, createdAt: -1 });
blogSchema.index({ slug: 1 }); // For slug-based lookups
blogSchema.index({ tags: 1 }); // For tag-based searches
blogSchema.index({ likes: -1 }); // For sorting by popularity

// Generate slug from title before saving
blogSchema.pre('save', async function(next) {
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
blogSchema.methods.toJSON = function() {
  const blogObject = this.toObject();
  return blogObject;
};

module.exports = mongoose.model('Blog', blogSchema);