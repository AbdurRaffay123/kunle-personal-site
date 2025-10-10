const express = require('express');
const { body } = require('express-validator');
const projectController = require('../controllers/projectController');

const router = express.Router();

// Validation middleware
const validateProject = [
  body('title')
    .notEmpty()
    .withMessage('Title is required')
    .isLength({ max: 200 })
    .withMessage('Title cannot exceed 200 characters')
    .trim(),
  
  body('description')
    .optional()
    .isLength({ max: 1000 })
    .withMessage('Description cannot exceed 1000 characters')
    .trim(),
  
  body('status')
    .optional()
    .isIn(['active', 'completed', 'archived'])
    .withMessage('Status must be either "active", "completed", or "archived"'),
    
  body('technologies')
    .optional()
    .isArray()
    .withMessage('Technologies must be an array')
    .custom((technologies) => {
      if (technologies && !technologies.every(tech => typeof tech === 'string' && tech.trim().length > 0)) {
        throw new Error('Each technology must be a non-empty string');
      }
      return true;
    }),
    
  body('featured')
    .optional()
    .isBoolean()
    .withMessage('Featured must be a boolean value')
];

const validateProjectUpdate = [
  body('title')
    .optional()
    .notEmpty()
    .withMessage('Title cannot be empty')
    .isLength({ max: 200 })
    .withMessage('Title cannot exceed 200 characters')
    .trim(),
  
  body('description')
    .optional()
    .isLength({ max: 1000 })
    .withMessage('Description cannot exceed 1000 characters')
    .trim(),
  
  body('status')
    .optional()
    .isIn(['active', 'completed', 'archived'])
    .withMessage('Status must be either "active", "completed", or "archived"'),
    
  body('technologies')
    .optional()
    .isArray()
    .withMessage('Technologies must be an array')
    .custom((technologies) => {
      if (technologies && !technologies.every(tech => typeof tech === 'string' && tech.trim().length > 0)) {
        throw new Error('Each technology must be a non-empty string');
      }
      return true;
    }),
    
  body('featured')
    .optional()
    .isBoolean()
    .withMessage('Featured must be a boolean value')
];

// Project CRUD routes
router.post('/', validateProject, projectController.createProject);                // POST /api/projects
router.get('/', projectController.getProjects);                                    // GET /api/projects
router.get('/stats', projectController.getProjectStats);                          // GET /api/projects/stats
router.get('/featured', projectController.getFeaturedProjects);                   // GET /api/projects/featured
router.get('/:id', projectController.getProjectById);                             // GET /api/projects/:id
router.put('/:id', validateProjectUpdate, projectController.updateProject);       // PUT /api/projects/:id
router.delete('/:id', projectController.deleteProject);                           // DELETE /api/projects/:id

// Additional routes
router.patch('/:id/toggle-featured', projectController.toggleProjectFeatured);    // PATCH /api/projects/:id/toggle-featured

module.exports = router;