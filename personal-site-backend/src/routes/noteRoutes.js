const express = require('express');
const noteController = require('../controllers/noteController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Public routes (no authentication required)
router.get('/public', noteController.getPublicNotes);           // GET /api/notes/public
router.get('/public/:id', noteController.getPublicNoteById);    // GET /api/notes/public/:id
router.get('/slug/:slug', noteController.getNoteBySlug);        // GET /api/notes/slug/:slug

// Protected routes (authentication required)
router.use(authMiddleware);

// Admin/User note routes
router.post('/', noteController.createNote);           // POST /api/notes
router.get('/', noteController.getAllNotes);           // GET /api/notes
router.get('/:id', noteController.getNoteById);        // GET /api/notes/:id
router.put('/:id', noteController.updateNote);         // PUT /api/notes/:id
router.delete('/:id', noteController.deleteNote);      // DELETE /api/notes/:id

module.exports = router;