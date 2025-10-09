const profileService = require('../services/profileService');

/**
 * Create or update user profile
 */
const createOrUpdateProfile = async (req, res) => {
  try {
    const userId = req.user.id;
    const { name, designation, bio, socialLinks } = req.body;
    
    // Parse socialLinks if it's a string (from form data)
    let parsedSocialLinks = socialLinks;
    if (typeof socialLinks === 'string') {
      try {
        parsedSocialLinks = JSON.parse(socialLinks);
      } catch (error) {
        parsedSocialLinks = {};
      }
    }
    
    const profileData = {
      name,
      designation,
      bio,
      socialLinks: parsedSocialLinks || {}
    };
    
    // Get image path from multer if file was uploaded
    const imagePath = req.file ? `/uploads/profile_images/${req.file.filename}` : null;
    
    const { profile, isNewProfile } = await profileService.createOrUpdateProfile(userId, profileData, imagePath);
    
    // Add full image URL to response
    const responseProfile = profile.toJSON();
    if (responseProfile.image) {
      responseProfile.imageUrl = profileService.getImageUrl(responseProfile.image);
    }
    
    const message = isNewProfile ? 'Profile created successfully' : 'Profile updated successfully';
    
    res.status(200).json({
      success: true,
      message,
      data: responseProfile
    });
    
  } catch (error) {
    if (error.name === 'ValidationError') {
      return res.status(400).json({
        success: false,
        message: error.message
      });
    }
    
    console.error('Error creating/updating profile:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
};

/**
 * Get user profile
 */
const getProfile = async (req, res) => {
  try {
    const userId = req.user.id;
    
    const profile = await profileService.getProfile(userId);
    
    if (!profile) {
      return res.status(200).json({
        success: true,
        message: 'No profile found. Create one to get started.',
        data: null
      });
    }
    
    // Add full image URL to response
    const responseProfile = profile.toJSON();
    if (responseProfile.image) {
      responseProfile.imageUrl = profileService.getImageUrl(responseProfile.image);
    }
    
    res.status(200).json({
      success: true,
      message: 'Profile retrieved successfully',
      data: responseProfile
    });
    
  } catch (error) {
    console.error('Error fetching profile:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
};

/**
 * Update only profile image
 */
const updateProfileImage = async (req, res) => {
  try {
    const userId = req.user.id;
    
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: 'No image file provided'
      });
    }
    
    const imagePath = `/uploads/profile_images/${req.file.filename}`;
    const { profile, isNewProfile } = await profileService.updateProfileImage(userId, imagePath);
    
    // Add full image URL to response
    const responseProfile = profile.toJSON();
    responseProfile.imageUrl = profileService.getImageUrl(responseProfile.image);
    
    const message = isNewProfile 
      ? 'Profile created with image successfully' 
      : 'Profile image updated successfully';
    
    res.status(200).json({
      success: true,
      message,
      data: responseProfile
    });
    
  } catch (error) {
    console.error('Error updating profile image:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
};

module.exports = {
  createOrUpdateProfile,
  getProfile,
  updateProfileImage
};