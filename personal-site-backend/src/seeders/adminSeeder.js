const mongoose = require('mongoose');
const User = require('../models/User');

// ============================================
// IMPORTANT: Seeder uses hard-coded admin credentials below.
// To update credentials, edit these constants and run `npm run seed:admin`.
// This file intentionally does NOT load .env or rely on dotenv.
// MongoDB connection URI must be provided by the environment where you run the seeder
// (e.g., set MONGODB_URI in your shell or deploy platform). The seeder will use
// process.env.MONGODB_URI when connecting.
// ============================================
// Your NEW email address (the one you want to use for login)
const ADMIN_EMAIL = 'admin@olukunleowolabi.com';

// Your NEW password (the one you want to use for login)
const ADMIN_PASSWORD = 'Hx12890#@12341';

// OPTIONAL: Your OLD email address (only fill this if you're changing your email)
// If you're only changing your password, leave this empty: const OLD_EMAIL = '';
// If you're changing your email, put your current/old email here
const OLD_EMAIL = '';
// ============================================

// (Credentials are hard-coded above; this file intentionally does not read from .env)

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