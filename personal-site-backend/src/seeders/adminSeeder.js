const mongoose = require('mongoose');
const User = require('../models/User');
require('dotenv').config();

// ============================================
// IMPORTANT: You can update these via environment variables instead of editing this file.
// Set the following in your .env (project root) to override defaults:
//   ADMIN_EMAIL=your-admin-email@example.com
//   ADMIN_PASSWORD=YourSecurePasswordHere
//   OLD_EMAIL=previous-admin-email@example.com   # optional, only if you're changing email
// The script falls back to the existing constants when env vars are not present.
// ============================================
// Read credentials from environment with safe defaults and normalize email values.
const ADMIN_EMAIL = (process.env.ADMIN_EMAIL || 'admin@blog.co').toLowerCase().trim();
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'Hx12890#@12341';
const OLD_EMAIL = process.env.OLD_EMAIL ? process.env.OLD_EMAIL.toLowerCase().trim() : '';
// ============================================

const seedAdmin = async () => {
  try {
    // Connect to database
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB');

    let existingAdmin = null;

    // First, try to find admin by new email
    existingAdmin = await User.findOne({ email: ADMIN_EMAIL });
    
    // If not found and OLD_EMAIL is provided, try to find by old email
    if (!existingAdmin && OLD_EMAIL && OLD_EMAIL.trim() !== '') {
      existingAdmin = await User.findOne({ email: OLD_EMAIL.toLowerCase().trim() });
      if (existingAdmin) {
        console.log(`📧 Found admin with old email: ${OLD_EMAIL}`);
      }
    }
    
    if (existingAdmin) {
      // Update existing admin
      const oldEmail = existingAdmin.email;
      existingAdmin.email = ADMIN_EMAIL.toLowerCase().trim();
      existingAdmin.password = ADMIN_PASSWORD;
      await existingAdmin.save();
      console.log('🔄 Admin user updated successfully!');
      if (oldEmail !== existingAdmin.email) {
        console.log(`📧 Email changed from: ${oldEmail} to: ${existingAdmin.email}`);
      } else {
        console.log(`📧 Email: ${existingAdmin.email}`);
      }
      console.log(`🔑 Password: (updated)`);
    } else {
      // Check if admin with new email already exists (shouldn't happen, but just in case)
      const checkExisting = await User.findOne({ email: ADMIN_EMAIL });
      if (checkExisting) {
        // Update password only
        checkExisting.password = ADMIN_PASSWORD;
        await checkExisting.save();
        console.log('🔄 Admin password updated successfully!');
        console.log(`📧 Email: ${checkExisting.email}`);
        console.log(`🔑 Password: (updated)`);
      } else {
        // Create new admin user
        const adminUser = await User.create({
          email: ADMIN_EMAIL.toLowerCase().trim(),
          password: ADMIN_PASSWORD
        });
        console.log('🎉 Admin user created successfully!');
        console.log(`📧 Email: ${adminUser.email}`);
        console.log(`🔑 Password: (set)`);
      }
    }

  } catch (error) {
    console.error('❌ Error creating/updating admin user:', error.message);
    process.exit(1);
  } finally {
    await mongoose.connection.close();
    console.log('🔌 Database connection closed');
    process.exit(0);
  }
};

seedAdmin();