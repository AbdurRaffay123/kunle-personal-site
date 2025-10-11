/**
 * Admin Notes Management Page
 */

"use client";

import { useState, useEffect, useRef } from "react";
import AdminLayout from "@/components/Admin/AdminLayout";
import AdminTable from "@/components/Admin/AdminTable";
import AdminModal from "@/components/Admin/AdminModal";
import DeleteConfirmModal from "@/components/Admin/DeleteConfirmModal";
import { NotepadEditor } from "@/components/Notepad/NotepadEditor";
import { createNote, updateNote, deleteNote, getAdminNotes } from "@/lib/api";
import { useAuth } from "@/contexts/AuthContext";
import toast from "react-hot-toast";

interface Note {
  _id: string;
  title: string;
  topic: string;
  createdAt: string;
  updatedAt: string;
  tags: string[];
  content?: string; // Rich text content from NotepadEditor
  user?: {
    _id: string;
    email: string;
  };
}

export default function AdminNotesPage() {
  const { isAuthenticated } = useAuth();
  const [isEditorMode, setIsEditorMode] = useState(false);
  const [currentNote, setCurrentNote] = useState<Note | null>(null);
  const [editorContent, setEditorContent] = useState<string>('');
  const [isAutoSaving, setIsAutoSaving] = useState(false);
  const [loading, setLoading] = useState(true);
  const autoSaveTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [notes, setNotes] = useState<Note[]>([]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingNote, setEditingNote] = useState<Note | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [noteToDelete, setNoteToDelete] = useState<Note | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  // Load notes from backend
  useEffect(() => {
    const loadNotes = async () => {
      if (!isAuthenticated) return;
      
      try {
        setLoading(true);
        const fetchedNotes = await getAdminNotes();
        setNotes(fetchedNotes);
      } catch (error) {
        console.error('Error loading notes:', error);
        toast.error('Failed to load notes');
      } finally {
        setLoading(false);
      }
    };

    loadNotes();
  }, [isAuthenticated]);

  const columns = [
    { key: "title", label: "Title" },
    { key: "topic", label: "Topic" },
    { 
      key: "tags", 
      label: "Tags",
      render: (tags: string[]) => (
        <div className="flex flex-wrap gap-1">
          {tags.slice(0, 2).map((tag, index) => (
            <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-xs rounded-full">
              {tag}
            </span>
          ))}
          {tags.length > 2 && (
            <span className="px-2 py-1 bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300 text-xs rounded-full">
              +{tags.length - 2}
            </span>
          )}
        </div>
      )
    },
    { key: "createdAt", label: "Created" },
  ];

  const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    note.topic.toLowerCase().includes(searchTerm.toLowerCase()) ||
    note.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const handleEdit = (note: Note) => {
    setEditingNote(note);
    setIsModalOpen(true);
  };

  const handleEditContent = (note: Note) => {
    setCurrentNote(note);
    setEditorContent(note.content || '');
    setIsEditorMode(true);
  };

  const handleDelete = (note: Note) => {
    setNoteToDelete(note);
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = async () => {
    if (!isAuthenticated || !noteToDelete) {
      toast.error('Authentication required');
      return;
    }

    try {
      setIsDeleting(true);
      await deleteNote(noteToDelete._id);
      setNotes(notes.filter(n => n._id !== noteToDelete._id));
      toast.success('Note deleted successfully');
      setIsDeleteModalOpen(false);
      setNoteToDelete(null);
    } catch (error) {
      console.error('Error deleting note:', error);
      toast.error('Failed to delete note');
    } finally {
      setIsDeleting(false);
    }
  };

  const cancelDelete = () => {
    setIsDeleteModalOpen(false);
    setNoteToDelete(null);
  };

  const handleSave = async (noteData: Partial<Note>) => {
    if (!isAuthenticated) {
      toast.error('Authentication required');
      return;
    }

    if (editingNote) {
      // For editing existing notes, save directly
      try {
        const updatedNote = await updateNote(editingNote._id, noteData);
        setNotes(notes.map(note => 
          note._id === editingNote._id ? updatedNote : note
        ));
        setIsModalOpen(false);
        setEditingNote(null);
        toast.success('Note updated successfully');
      } catch (error) {
        console.error('Error updating note:', error);
        toast.error('Failed to update note');
      }
    } else {
      // For new notes, create the note and show editor
      const newNote: Note = {
        _id: 'temp-' + Date.now(), // Temporary ID
        title: noteData.title || "",
        topic: noteData.topic || "",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        tags: noteData.tags || [],
      };
      setCurrentNote(newNote);
      setIsModalOpen(false);
      setIsEditorMode(true);
    }
  };

  const handleEditorSave = async () => {
    if (!currentNote || !isAuthenticated) return;

    try {
      if (currentNote._id.startsWith('temp-')) {
        // Create new note
        const newNote = await createNote({
          title: currentNote.title,
          content: editorContent,
          topic: currentNote.topic,
          tags: currentNote.tags
        });
        
        setNotes([newNote, ...notes]);
        toast.success('Note created successfully');
      } else {
        // Update existing note
        const updatedNote = await updateNote(currentNote._id, {
          content: editorContent
        });
        
        setNotes(notes.map(note => 
          note._id === currentNote._id ? updatedNote : note
        ));
        toast.success('Note updated successfully');
      }
      
      setIsEditorMode(false);
      setCurrentNote(null);
      setEditorContent('');
    } catch (error) {
      console.error('Error saving note:', error);
      toast.error('Failed to save note');
    }
  };

  const handleEditorCancel = () => {
    setIsEditorMode(false);
    setCurrentNote(null);
    setEditorContent('');
  };

  // Auto-save functionality
  const autoSave = async (content: string) => {
    if (!currentNote || !content.trim() || currentNote._id.startsWith('temp-')) return;
    
    setIsAutoSaving(true);
    try {
      // Actually save to backend
      await updateNote(currentNote._id, { content });
      console.log('Auto-saved content for note:', currentNote.title);
    } catch (error) {
      console.error('Auto-save failed:', error);
    } finally {
      setIsAutoSaving(false);
    }
  };

  // Debounced auto-save effect
  useEffect(() => {
    if (autoSaveTimeoutRef.current) {
      clearTimeout(autoSaveTimeoutRef.current);
    }

    if (editorContent && isEditorMode) {
      autoSaveTimeoutRef.current = setTimeout(() => {
        autoSave(editorContent);
      }, 2000); // Auto-save after 2 seconds of inactivity
    }

    return () => {
      if (autoSaveTimeoutRef.current) {
        clearTimeout(autoSaveTimeoutRef.current);
      }
    };
  }, [editorContent, isEditorMode]);

  // Show editor mode if active
  if (isEditorMode && currentNote) {
    const isEditingExisting = !currentNote._id.startsWith('temp-');
    return (
      <AdminLayout title={isEditingExisting ? "Edit Note Content" : "Create New Note"}>
        <div className="space-y-6">
          {/* Editor Header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                {currentNote.title}
              </h1>
              <p className="text-slate-600 dark:text-slate-400 mt-1">
                Topic: {currentNote.topic} • {currentNote.tags.length > 0 && `Tags: ${currentNote.tags.join(', ')}`}
              </p>
            </div>
            <div className="flex items-center space-x-3">
              {/* Auto-save indicator */}
              {isAutoSaving && (
                <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600 mr-2"></div>
                  Auto-saving...
                </div>
              )}
              {!isAutoSaving && editorContent && (
                <div className="text-sm text-green-600 dark:text-green-400">
                  ✓ Auto-saved
                </div>
              )}
              
              <button
                onClick={handleEditorCancel}
                className="px-4 py-2 text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleEditorSave}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors font-medium"
              >
                Save & Finish
              </button>
            </div>
          </div>

          {/* Notepad Editor */}
          <NotepadEditor 
            content={editorContent}
            placeholder="Start writing your note content..."
            onChange={(content) => {
              setEditorContent(content);
            }}
          />
        </div>
      </AdminLayout>
    );
  }

  if (loading) {
    return (
      <AdminLayout title="Manage Notes">
        <div className="flex items-center justify-center py-20">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-slate-600 dark:text-slate-400">Loading notes...</p>
          </div>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout title="Manage Notes">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
              Technical Notes
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              Manage your technical notes and learning resources
            </p>
          </div>
          <button
            onClick={() => {
              setEditingNote(null);
              setIsModalOpen(true);
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors font-medium cursor-pointer hover:scale-105"
          >
            Add New Note
          </button>
        </div>

        {/* Search */}
        <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-md">
          <input
            type="text"
            placeholder="Search notes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Table */}
        <AdminTable
          columns={columns}
          data={filteredNotes}
          onEdit={handleEdit}
          onDelete={handleDelete}
          customActions={[
            {
              label: "Edit Content",
              onClick: handleEditContent,
              className: "text-purple-600 hover:underline hover:text-purple-700 dark:hover:text-purple-400 transition-colors duration-200 cursor-pointer"
            }
          ]}
        />

        {/* Modal */}
        <AdminModal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setEditingNote(null);
          }}
          title={editingNote ? "Edit Note" : "Add New Note"}
        >
          <NoteForm
            note={editingNote}
            onSave={handleSave}
            onCancel={() => {
              setIsModalOpen(false);
              setEditingNote(null);
            }}
          />
        </AdminModal>

        {/* Delete Confirmation Modal */}
        <DeleteConfirmModal
          isOpen={isDeleteModalOpen}
          onClose={cancelDelete}
          onConfirm={confirmDelete}
          title="Delete Note"
          message="Are you sure you want to delete this note?"
          itemName={noteToDelete?.title}
          isDeleting={isDeleting}
        />
      </div>
    </AdminLayout>
  );
}

// Note Form Component
function NoteForm({ 
  note, 
  onSave, 
  onCancel 
}: { 
  note: Note | null; 
  onSave: (data: Partial<Note>) => void; 
  onCancel: () => void; 
}) {
  const [formData, setFormData] = useState({
    title: note?.title || "",
    topic: note?.topic || "",
    tags: note?.tags || [],
  });

  const [tagInput, setTagInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  const addTag = () => {
    if (tagInput.trim() && !formData.tags.includes(tagInput.trim())) {
      setFormData({
        ...formData,
        tags: [...formData.tags, tagInput.trim()]
      });
      setTagInput("");
    }
  };

  const removeTag = (tagToRemove: string) => {
    setFormData({
      ...formData,
      tags: formData.tags.filter(tag => tag !== tagToRemove)
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
          Title
        </label>
        <input
          type="text"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          required
        />
      </div>


      <div>
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
          Topic
        </label>
        <input
          type="text"
          value={formData.topic}
          onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
          className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
          Tags
        </label>
        <div className="flex flex-wrap gap-2 mb-2">
          {formData.tags.map((tag, index) => (
            <span
              key={index}
              className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-sm rounded-full"
            >
              {tag}
              <button
                type="button"
                onClick={() => removeTag(tag)}
                className="ml-2 text-blue-600 hover:text-blue-800 dark:text-blue-200 dark:hover:text-blue-100"
              >
                ×
              </button>
            </span>
          ))}
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
            placeholder="Add a tag..."
            className="flex-1 px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button
            type="button"
            onClick={addTag}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Add
          </button>
        </div>
      </div>


      <div className="flex justify-end space-x-3 pt-4">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition-colors"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
        >
          {note ? "Update" : "Create"}
        </button>
      </div>
    </form>
  );
}
