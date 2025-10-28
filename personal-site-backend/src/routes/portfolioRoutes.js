const express = require('express');
const router = express.Router();
const {
  getAllPortfolioItems,
  getPortfolioItem,
  createPortfolioItem,
  updatePortfolioItem,
  deletePortfolioItem,
  getPortfolioStats
} = require('../controllers/portfolioController');
const { portfolioValidation, updatePortfolioValidation } = require('../middleware/portfolioValidation');
const auth = require('../middleware/authMiddleware');
const { cacheMiddleware, clearCache } = require('../middleware/cacheMiddleware');

// Public routes (no authentication required) - with caching
router.get('/', cacheMiddleware(300), getAllPortfolioItems); // 5 min cache
router.get('/stats', cacheMiddleware(600), getPortfolioStats); // 10 min cache
router.get('/:id', cacheMiddleware(300), getPortfolioItem); // 5 min cache

// Protected routes (authentication required) - clear cache on changes
router.post('/', auth, portfolioValidation, createPortfolioItem, (req, res, next) => {
  clearCache('/api/portfolio');
  next();
});
router.put('/:id', auth, updatePortfolioValidation, updatePortfolioItem, (req, res, next) => {
  clearCache('/api/portfolio');
  next();
});
router.delete('/:id', auth, deletePortfolioItem, (req, res, next) => {
  clearCache('/api/portfolio');
  next();
});

module.exports = router;
