/**
 * Dashboard Routes
 */

const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboardController');
const authMiddleware = require('../middleware/authMiddleware');

// Protected routes - require authentication
router.get('/stats', authMiddleware, dashboardController.getDashboardStats);
router.get('/activity', authMiddleware, dashboardController.getRecentActivity);

module.exports = router;
