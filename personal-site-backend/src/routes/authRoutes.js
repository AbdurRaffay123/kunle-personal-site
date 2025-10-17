const express = require('express');
const authController = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// POST /login
router.post('/login', authController.login);

// POST /logout (protected route)
router.post('/logout', authMiddleware, authController.logout);

// GET /me (optional - get current user info)
router.get('/me', authMiddleware, (req, res) => {
  res.status(200).json({
    success: true,
    message: 'User info retrieved',
    data: {
      user: req.user
    }
  });
});

module.exports = router;