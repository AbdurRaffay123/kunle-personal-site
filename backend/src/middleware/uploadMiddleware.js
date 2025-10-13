const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { UPLOAD_BASE_DIR } = require('../config/upload'); // <-- Use the same base dir

// Create avatars and blog-images subfolders inside the same base directory
const avatarsDir = path.join(UPLOAD_BASE_DIR, 'avatars');
if (!fs.existsSync(avatarsDir)) {
  fs.mkdirSync(avatarsDir, { recursive: true });
}

const blogImagesDir = path.join(UPLOAD_BASE_DIR, 'blog-images');
if (!fs.existsSync(blogImagesDir)) {
  fs.mkdirSync(blogImagesDir, { recursive: true });
}

// Storage configuration for profile images
const avatarStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, avatarsDir);
  },
  filename: (req, file, cb) => {
    // Generate unique filename: timestamp-userId-original_name.ext
    const userId = req.user?.id || 'anonymous';
    const timestamp = Date.now();
    const ext = path.extname(file.originalname);
    const nameWithoutExt = path.basename(file.originalname, ext);
    const sanitizedName = nameWithoutExt.replace(/[^a-zA-Z0-9_-]/g, '_');
    
    const filename = `${timestamp}-${userId}-${sanitizedName}${ext}`;
    cb(null, filename);
  }
});

// Storage configuration for blog images
const blogImageStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, blogImagesDir);
  },
  filename: (req, file, cb) => {
    const timestamp = Date.now();
    const ext = path.extname(file.originalname);
    const nameWithoutExt = path.basename(file.originalname, ext);
    const sanitizedName = nameWithoutExt.replace(/[^a-zA-Z0-9_-]/g, '_');
    const filename = `${timestamp}-${sanitizedName}${ext}`;
    cb(null, filename);
  }
});

// File filter for images (shared)
const fileFilter = (req, file, cb) => {
  const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
  
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('Only image files (.jpg, .jpeg, .png, .webp) are allowed'), false);
  }
};

// Profile image upload middleware
const uploadProfileImage = multer({
  storage: avatarStorage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 2 * 1024 * 1024, // 2MB limit
    files: 1 // Single file only
  }
}).single('image'); // Field name 'image' for profile

// Blog image upload middleware
const uploadBlogImage = multer({
  storage: blogImageStorage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit
    files: 1 // Single file only
  }
}).single('image'); // Field name 'image' for blog

module.exports = {
  uploadProfileImage,
  uploadBlogImage
};