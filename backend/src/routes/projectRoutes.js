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

  body('link')
    .notEmpty()
    .withMessage('Project link is required')
    .isURL()
    .withMessage('Please provide a valid URL')
    .trim(),

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

  body('link')
    .optional()
    .notEmpty()
    .withMessage('Project link cannot be empty')
    .isURL()
    .withMessage('Please provide a valid URL')
    .trim(),

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
];

// Project CRUD routes
router.post('/', validateProject, projectController.createProject);                // POST /api/projects
router.get('/', projectController.getProjects);                                    // GET /api/projects
router.get('/:id', projectController.getProjectById);                             // GET /api/projects/:id
router.put('/:id', validateProjectUpdate, projectController.updateProject);       // PUT /api/projects/:id
router.delete('/:id', projectController.deleteProject);                           // DELETE /api/projects/:id

module.exports = router;