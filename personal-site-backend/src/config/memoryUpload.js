const multer = require('multer');

// Memory storage for processing files before saving
const memoryStorage = multer.memoryStorage();

const memoryUpload = multer({
  storage: memoryStorage,
  fileFilter: (req, file, cb) => {
    // Allow images only for memory upload (e.g., for resizing)
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Only image files are allowed for processing'), false);
    }
  },
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB
    files: 1
  }
});

module.exports = memoryUpload;