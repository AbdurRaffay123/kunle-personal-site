const noteService = require('../services/noteService');

/**
 * Create a new note
 */
const createNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const userId = req.user.id;

    // Validate input
    if (!title || !content) {
      return res.status(400).json({
        success: false,
        message: 'Title and content are required'
      });
    }

    const note = await noteService.createNote({ title, content }, userId);

    res.status(201).json({
      success: true,
      message: 'Note created successfully',
      data: { note }
    });

  } catch (error) {
    if (error.name === 'ValidationError') {
      return res.status(400).json({
        success: false,
        message: error.message
      });
    }

    console.error('Error creating note:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
};

/**
 * Get all notes for the authenticated user
 */
const getAllNotes = async (req, res) => {
  try {
    const userId = req.user.id;
    const notes = await noteService.getAllNotes(userId);

    res.status(200).json({
      success: true,
      message: 'Notes retrieved successfully',
      data: { 
        notes,
        count: notes.length
      }
    });

  } catch (error) {
    console.error('Error fetching notes:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
};

/**
 * Get a single note by ID
 */
const getNoteById = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;

    const note = await noteService.getNoteById(id, userId);

    res.status(200).json({
      success: true,
      message: 'Note retrieved successfully',
      data: { note }
    });

  } catch (error) {
    if (error.message === 'Note not found') {
      return res.status(404).json({
        success: false,
        message: 'Note not found'
      });
    }

    console.error('Error fetching note:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
};

/**
 * Update a note
 */
const updateNote = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;
    const userId = req.user.id;

    // Validate input
    if (!title && !content) {
      return res.status(400).json({
        success: false,
        message: 'At least title or content is required for update'
      });
    }

    const updateData = {};
    if (title) updateData.title = title;
    if (content) updateData.content = content;

    const note = await noteService.updateNote(id, updateData, userId);

    res.status(200).json({
      success: true,
      message: 'Note updated successfully',
      data: { note }
    });

  } catch (error) {
    if (error.message === 'Note not found') {
      return res.status(404).json({
        success: false,
        message: 'Note not found'
      });
    }

    if (error.name === 'ValidationError') {
      return res.status(400).json({
        success: false,
        message: error.message
      });
    }

    console.error('Error updating note:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
};

/**
 * Delete a note
 */
const deleteNote = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;

    const result = await noteService.deleteNote(id, userId);

    res.status(200).json({
      success: true,
      message: result.message,
      data: { deletedNote: result.deletedNote }
    });

  } catch (error) {
    if (error.message === 'Note not found') {
      return res.status(404).json({
        success: false,
        message: 'Note not found'
      });
    }

    console.error('Error deleting note:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
};

module.exports = {
  createNote,
  getAllNotes,
  getNoteById,
  updateNote,
  deleteNote
};