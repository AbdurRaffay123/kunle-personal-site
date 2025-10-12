const express = require('express');
const { getMainPageDataController } = require('../controllers/mainPageController');

const router = express.Router();

// Public route, no auth
router.get('/', getMainPageDataController);

module.exports = router;