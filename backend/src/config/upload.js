const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Base upload directory - stored within the project
const UPLOAD_BASE_DIR = path.join(__dirname, '../stored-files');

// Ensure base directory exists
if (!fs.existsSync(UPLOAD_BASE_DIR)) {
  fs.mkdirSync(UPLOAD_BASE_DIR, { recursive: true });
}

// Helper function to create storage with subdirectories
const createStorage = (subdir = 'general') => {
  return multer.diskStorage({
    destination: (req, file, cb) => {
      const uploadPath = path.join(UPLOAD_BASE_DIR, subdir);
      if (!fs.existsSync(uploadPath)) {
        fs.mkdirSync(uploadPath, { recursive: true });
      }
      cb(null, uploadPath);
    },
    filename: (req, file, cb) => {
      // Get user ID from middleware (req.user set by authMiddleware)
      const userId = req.user?.id || 'anonymous';
      const timestamp = Date.now();
      const ext = path.extname(file.originalname);
      const nameWithoutExt = path.basename(file.originalname, ext);
      const sanitizedName = nameWithoutExt.replace(/[^a-zA-Z0-9_-]/g, '_');
      
      const filename = `${timestamp}-${userId}-${sanitizedName}${ext}`;
      cb(null, filename);
    }
  });
};

// File filters
const imageFilter = (req, file, cb) => {
  const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('Only image files (JPEG, PNG, GIF, WebP) are allowed'), false);
  }
};

const documentFilter = (req, file, cb) => {
  const allowedTypes = [
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'text/plain',
    'text/markdown'
  ];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('Only document files (PDF, DOC, DOCX, TXT, MD) are allowed'), false);
  }
};

const generalFilter = (req, file, cb) => {
  // Blacklist dangerous file types
  const dangerousTypes = [
    'application/x-executable',
    'application/x-msdos-program',
    'application/x-msdownload',
    'application/x-sh',
    'application/x-csh',
    'text/x-script.python',
    'application/javascript',
    'text/javascript'
  ];
  
  if (dangerousTypes.includes(file.mimetype)) {
    cb(new Error('File type not allowed for security reasons'), false);
  } else {
    cb(null, true);
  }
};

// Different upload configurations for different use cases
const configs = {
  // User avatars/profile pictures
  avatar: multer({
    storage: createStorage('avatars'),
    fileFilter: imageFilter,
    limits: {
      fileSize: 2 * 1024 * 1024, // 2MB
      files: 1
    }
  }),

  // Note attachments (images, documents, etc.)
  noteAttachments: multer({
    storage: createStorage('note-attachments'),
    fileFilter: generalFilter,
    limits: {
      fileSize: 10 * 1024 * 1024, // 10MB
      files: 5
    }
  }),

  // Blog post images
  blogImages: multer({
    storage: createStorage('blog-images'),
    fileFilter: imageFilter,
    limits: {
      fileSize: 5 * 1024 * 1024, // 5MB
      files: 10
    }
  }),

  // Documents only
  documents: multer({
    storage: createStorage('documents'),
    fileFilter: documentFilter,
    limits: {
      fileSize: 25 * 1024 * 1024, // 25MB
      files: 3
    }
  }),

  // General purpose uploads
  general: multer({
    storage: createStorage('general'),
    fileFilter: generalFilter,
    limits: {
      fileSize: 10 * 1024 * 1024, // 10MB
      files: 5
    }
  })
};

module.exports = {
  ...configs,
  UPLOAD_BASE_DIR
};