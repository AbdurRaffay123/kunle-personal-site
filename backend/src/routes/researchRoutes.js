const express = require('express');
const researchController = require('../controllers/researchController');
const authMiddleware = require('../middleware/authMiddleware')// Using your auth middleware
const { validateResearch } = require('../validation/research/validation'); // Optional validation middleware

const router = express.Router();

// Public routes (no authentication required)
router.get('/', researchController.getAllResearch);
router.get('/categories', researchController.getCategories);
router.get('/tags', researchController.getTags);
router.get('/category/:category', researchController.getResearchByCategory);
router.get('/tag/:tag', researchController.getResearchByTag); // GET /api/research/tag/:tag
router.get('/:id', researchController.getResearchById);

// Protected routes (authentication required)
router.use(authMiddleware); // Apply authentication middleware to all routes below

router.post('/create', validateResearch, researchController.createResearch);
router.put('/update/:id', validateResearch, researchController.updateResearch);
router.delete('/delete/:id', researchController.deleteResearch);

module.exports = router;