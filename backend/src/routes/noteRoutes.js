const express = require('express');
const noteController = require('../controllers/noteController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Apply auth middleware to all note routes (Laravel-style route group)
router.use(authMiddleware);

// Note routes
router.post('/', noteController.createNote);           // POST /api/notes
router.get('/', noteController.getAllNotes);           // GET /api/notes
router.get('/:id', noteController.getNoteById);        // GET /api/notes/:id
router.put('/:id', noteController.updateNote);         // PUT /api/notes/:id
router.delete('/:id', noteController.deleteNote);      // DELETE /api/notes/:id

module.exports = router;