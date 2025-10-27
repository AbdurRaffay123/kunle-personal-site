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

// Public routes (no authentication required)
router.get('/', getAllPortfolioItems);
router.get('/stats', getPortfolioStats);
router.get('/:id', getPortfolioItem);

// Protected routes (authentication required)
router.post('/', auth, portfolioValidation, createPortfolioItem);
router.put('/:id', auth, updatePortfolioValidation, updatePortfolioItem);
router.delete('/:id', auth, deletePortfolioItem);

module.exports = router;
