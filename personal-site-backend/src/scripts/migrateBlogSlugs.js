/**
 * Migration script to add slugs to existing blogs
 */

const mongoose = require('mongoose');
const Blog = require('../models/Blog');
require('dotenv').config();

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

async function migrateBlogSlugs() {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // Find all blogs without slugs
    const blogsWithoutSlugs = await Blog.find({ slug: { $exists: false } });
    console.log(`Found ${blogsWithoutSlugs.length} blogs without slugs`);

    // Add slugs to each blog
    for (const blog of blogsWithoutSlugs) {
      const slug = await generateUniqueSlug(blog.title, Blog);
      blog.slug = slug;
      
      // Add default content if missing
      if (!blog.content) {
        blog.content = `# ${blog.title}\n\n${blog.description}\n\nThis is a blog post about ${blog.category.toLowerCase()}. You can read more about this topic by visiting the [original post](${blog.link}).`;
      }
      
      await blog.save();
      console.log(`Added slug "${slug}" to blog: "${blog.title}"`);
    }

    console.log('Blog migration completed successfully!');
  } catch (error) {
    console.error('Blog migration failed:', error);
  } finally {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  }
}

// Run migration
migrateBlogSlugs();
