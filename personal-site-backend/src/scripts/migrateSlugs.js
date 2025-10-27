/**
 * Migration script to add slugs to existing notes
 */

const mongoose = require('mongoose');
const Note = require('../models/Note');
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

async function migrateSlugs() {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // Find all notes without slugs
    const notesWithoutSlugs = await Note.find({ slug: { $exists: false } });
    console.log(`Found ${notesWithoutSlugs.length} notes without slugs`);

    // Add slugs to each note
    for (const note of notesWithoutSlugs) {
      const slug = await generateUniqueSlug(note.title, Note);
      note.slug = slug;
      await note.save();
      console.log(`Added slug "${slug}" to note: "${note.title}"`);
    }

    console.log('Migration completed successfully!');
  } catch (error) {
    console.error('Migration failed:', error);
  } finally {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  }
}

// Run migration
migrateSlugs();
