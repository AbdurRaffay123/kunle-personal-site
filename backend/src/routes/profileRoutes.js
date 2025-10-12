const express = require('express');
const profileController = require('../controllers/profileController');
const authMiddleware = require('../middleware/authMiddleware');
const { uploadProfileImage } = require('../middleware/uploadMiddleware');

const router = express.Router();

// Public routes (no auth required)
router.get('/public', profileController.getPublicProfile);  // GET /api/profile/public

// Apply auth middleware to all remaining profile routes
router.use(authMiddleware);

// Profile routes - Only Create/Update and Read
router.post('/create', uploadProfileImage, profileController.createOrUpdateProfile);   // POST /api/profile/create
router.get('/', profileController.getProfile);                                         // GET /api/profile

// Optional: Add a route to just update image
router.post('/update-image', uploadProfileImage, profileController.updateProfileImage); // POST /api/profile/update-image

module.exports = router;