const Note = require('../models/Note');

/**
 * Create a new note
 * @param {Object} data - Note data (title, content)
 * @param {string} userId - User ID
 * @returns {Object} - Created note
 */
const createNote = async (data, userId) => {
  try {
    const noteData = {
      ...data,
      user: userId
    };

    const note = new Note(noteData);
    const savedNote = await note.save();
    
    // Populate user info if needed
    await savedNote.populate('user', 'email');
    
    return savedNote;
  } catch (error) {
    throw error;
  }
};

/**
 * Get all notes for a user
 * @param {string} userId - User ID
 * @returns {Array} - Array of notes
 */
const getAllNotes = async (userId) => {
  try {
    const notes = await Note.find({ user: userId })
      .populate('user', 'email')
      .sort({ createdAt: -1 }); // Latest first
    
    return notes;
  } catch (error) {
    throw error;
  }
};

/**
 * Get a single note by ID
 * @param {string} noteId - Note ID
 * @param {string} userId - User ID
 * @returns {Object} - Note object
 */
const getNoteById = async (noteId, userId) => {
  try {
    const note = await Note.findOne({ _id: noteId, user: userId })
      .populate('user', 'email');
    
    if (!note) {
      throw new Error('Note not found');
    }
    
    return note;
  } catch (error) {
    throw error;
  }
};

/**
 * Update a note
 * @param {string} noteId - Note ID
 * @param {Object} data - Updated note data
 * @param {string} userId - User ID
 * @returns {Object} - Updated note
 */
const updateNote = async (noteId, data, userId) => {
  try {
    const note = await Note.findOneAndUpdate(
      { _id: noteId, user: userId },
      { ...data },
      { 
        new: true, 
        runValidators: true 
      }
    ).populate('user', 'email');
    
    if (!note) {
      throw new Error('Note not found');
    }
    
    return note;
  } catch (error) {
    throw error;
  }
};

/**
 * Delete a note
 * @param {string} noteId - Note ID
 * @param {string} userId - User ID
 * @returns {Object} - Deletion result
 */
const deleteNote = async (noteId, userId) => {
  try {
    const note = await Note.findOneAndDelete({ _id: noteId, user: userId });
    
    if (!note) {
      throw new Error('Note not found');
    }
    
    return { message: 'Note deleted successfully', deletedNote: note };
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createNote,
  getAllNotes,
  getNoteById,
  updateNote,
  deleteNote
};