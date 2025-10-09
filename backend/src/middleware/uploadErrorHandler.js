const multer = require('multer');

const uploadErrorHandler = (err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    switch (err.code) {
      case 'LIMIT_FILE_SIZE':
        return res.status(400).json({
          success: false,
          message: 'File too large. Maximum size allowed is 10MB.'
        });
      case 'LIMIT_FILE_COUNT':
        return res.status(400).json({
          success: false,
          message: 'Too many files. Maximum 5 files allowed.'
        });
      case 'LIMIT_UNEXPECTED_FILE':
        return res.status(400).json({
          success: false,
          message: 'Unexpected file field.'
        });
      default:
        return res.status(400).json({
          success: false,
          message: `Upload error: ${err.message}`
        });
    }
  }

  if (err.message.includes('File type') || err.message.includes('not allowed')) {
    return res.status(400).json({
      success: false,
      message: err.message
    });
  }

  next(err);
};

module.exports = uploadErrorHandler;