const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Create stored-files/avatars directory if it doesn't exist
const uploadDir = path.join(__dirname, '../../stored-files/avatars');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Storage configuration for profile images
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
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

// File filter for profile images
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
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 2 * 1024 * 1024, // 2MB limit
    files: 1 // Single file only
  }
}).single('profileImage'); // Field name 'profileImage'

module.exports = {
  uploadProfileImage
};