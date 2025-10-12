const UserProfile = require('../models/UserProfile');
const fs = require('fs').promises;
const path = require('path');

/**
 * Create or update user profile
 * @param {string} userId - User ID
 * @param {Object} profileData - Profile data
 * @param {string} imagePath - Image file path (optional)
 * @returns {Object} - Created or updated profile
 */
const createOrUpdateProfile = async (userId, profileData, imagePath = null) => {
  try {
    // Parse socialLinks if sent as JSON string (from FormData)
    if (typeof profileData.socialLinks === "string") {
      profileData.socialLinks = JSON.parse(profileData.socialLinks);
    }

    // Check if profile already exists
    let existingProfile = await UserProfile.findOne({ user: userId });

    // Prepare profile data
    let updateData = {
      user: userId,
      ...profileData
    };

    // Merge socialLinks if updating
    if (profileData.socialLinks && existingProfile) {
      const filteredLinks = Object.fromEntries(
        Object.entries(profileData.socialLinks).filter(([_, v]) => v && v.trim() !== "")
      );
      updateData.socialLinks = {
        ...(existingProfile.socialLinks || { linkedin: '', github: '', twitter: '', email: '' }),
        ...filteredLinks
      };
    }

    // Add image path if provided
    if (imagePath) {
      updateData.image = imagePath;
      if (existingProfile && existingProfile.image && existingProfile.image !== imagePath) {
        try {
          const oldImagePath = path.join(__dirname, '../stored-files/avatars', path.basename(existingProfile.image));
          await fs.unlink(oldImagePath);
        } catch (error) {
          console.warn('Could not delete old profile image:', error.message);
        }
      }
    }

    let profile;
    let isNewProfile = false;

    if (existingProfile) {
      // Update existing profile
      profile = await UserProfile.findOneAndUpdate(
        { user: userId },
        { $set: updateData },
        { new: true, runValidators: true }
      ).populate('user', 'email');
    } else {
      // Create new profile
      profile = new UserProfile(updateData);
      await profile.save();
      await profile.populate('user', 'email');
      isNewProfile = true;
    }

    return { profile, isNewProfile };
  } catch (error) {
    throw error;
  }
};

/**
 * Get user profile
 * @param {string} userId - User ID
 * @returns {Object} - User profile or null if doesn't exist
 */
const getProfile = async (userId) => {
  try {
    const profile = await UserProfile.findOne({ user: userId })
      .populate('user', 'email');
    
    return profile;
  } catch (error) {
    throw error;
  }
};

/**
 * Update only profile image
 * @param {string} userId - User ID
 * @param {string} imagePath - New image path
 * @returns {Object} - Updated profile
 */
const updateProfileImage = async (userId, imagePath) => {
  try {
    let existingProfile = await UserProfile.findOne({ user: userId });
    
    if (!existingProfile) {
      // Create minimal profile with just image if none exists
      const profile = new UserProfile({
        user: userId,
        image: imagePath
      });
      await profile.save();
      await profile.populate('user', 'email');
      return { profile, isNewProfile: true };
    }
    
    // Delete old image if exists
    if (existingProfile.image && existingProfile.image !== imagePath) {
      try {
        const oldImagePath = path.join(__dirname, '../stored-files/avatars', path.basename(existingProfile.image));
        await fs.unlink(oldImagePath);
      } catch (error) {
        console.warn('Could not delete old profile image:', error.message);
      }
    }
    
    // Update with new image
    const profile = await UserProfile.findOneAndUpdate(
      { user: userId },
      { image: imagePath },
      { new: true, runValidators: true }
    ).populate('user', 'email');
    
    return { profile, isNewProfile: false };
  } catch (error) {
    throw error;
  }
};

/**
 * Get profile image URL
 * @param {string} imagePath - Image file path
 * @returns {string} - Full image URL
 */
const getImageUrl = (imagePath) => {
  if (!imagePath) return null;
  
  const baseUrl = process.env.BASE_URL || 'http://localhost:4000';
  const filename = path.basename(imagePath);
  return `${baseUrl}/stored-files/avatars/${filename}`;
};

/**
 * Get public profile (first profile in database, for public display)
 * @returns {Object} - Public profile data or null
 */
const getPublicProfile = async () => {
  try {
    // Get the first profile (assuming single-user site)
    const profile = await UserProfile.findOne().populate('user', 'email').lean();
    
    if (!profile) {
      return null;
    }
    
    // Add full image URL if image exists
    if (profile.image) {
      profile.imageUrl = getImageUrl(profile.image);
    }
    
    return profile;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createOrUpdateProfile,
  getProfile,
  updateProfileImage,
  getImageUrl,
  getPublicProfile
};