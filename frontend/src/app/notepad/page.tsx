/**
 * Notepad Page
 * 
 * Main notepad application with rich text editing capabilities
 * Features: CRUD operations, image insertion, responsive design
 */

"use client";

import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Save, Tag, Star, StarOff } from 'lucide-react';
import { NotepadList } from '@/components/Notepad/NotepadList';
import { NotepadEditor } from '@/components/Notepad/NotepadEditor';
import { ConfirmDeleteModal } from '@/components/Notepad/ConfirmDeleteModal';
import { HintBanner } from '@/components/Notepad/HintBanner';
import { NotepadNote, NotepadNoteMeta } from '@/types/notepad';
import { notepadService } from '@/services/notepadService';
import toast from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';

export default function NotepadPage() {
  const [notes, setNotes] = useState<NotepadNoteMeta[]>([]);
  const [selectedNote, setSelectedNote] = useState<NotepadNote | null>(null);
  const [selectedNoteMeta, setSelectedNoteMeta] = useState<NotepadNoteMeta | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [noteToDelete, setNoteToDelete] = useState<NotepadNoteMeta | null>(null);
  
  // Form state
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState('');
  const [isFavorite, setIsFavorite] = useState(false);

  const loadNotes = useCallback(async () => {
    try {
      setIsLoading(true);
      const allNotes = await notepadService.getAllNotes();
      setNotes(allNotes);
    } catch (error) {
      toast.error('Failed to load notes');
    } finally {
      setIsLoading(false);
    }
  }, []);

  const loadNote = useCallback(async (noteMeta: NotepadNoteMeta) => {
    try {
      setIsLoading(true);
      const note = await notepadService.getNote(noteMeta.id);
      if (note) {
        setSelectedNote(note);
        setSelectedNoteMeta(noteMeta);
        setTitle(note.title);
        setContent(note.content);
        setTags(note.tags || []);
        setIsFavorite(note.isFavorite || false);
      }
    } catch (error) {
      toast.error('Failed to load note');
    } finally {
      setIsLoading(false);
    }
  }, []);

  const saveNote = useCallback(async () => {
    if (!title.trim()) {
      toast.error('Please enter a title');
      return;
    }

    try {
      setIsSaving(true);
      
      if (selectedNote) {
        // Update existing note
        await notepadService.updateNote(selectedNote.id, {
          title: title.trim(),
          content,
          tags,
          isFavorite,
        });
        toast.success('Note saved successfully');
      } else {
        // Create new note
        const newNote = await notepadService.createNote({
          title: title.trim(),
          content,
          tags,
          isFavorite,
        });
        setSelectedNote(newNote);
        setSelectedNoteMeta({
          id: newNote.id,
          title: newNote.title,
          updatedAt: newNote.updatedAt,
          createdAt: newNote.createdAt,
          tags: newNote.tags,
          isFavorite: newNote.isFavorite,
          excerpt: newNote.content.replace(/<[^>]*>/g, '').substring(0, 150)
        });
        toast.success('Note created successfully');
      }
      
      await loadNotes();
    } catch (error) {
      toast.error('Failed to save note');
    } finally {
      setIsSaving(false);
    }
  }, [selectedNote, title, content, tags, isFavorite, loadNotes]);

  const createNewNote = useCallback(() => {
    setSelectedNote(null);
    setSelectedNoteMeta(null);
    setTitle('');
    setContent('');
    setTags([]);
    setIsFavorite(false);
    setTagInput('');
  }, []);

  const handleNoteSelect = useCallback((noteMeta: NotepadNoteMeta) => {
    loadNote(noteMeta);
    if (window.innerWidth < 768) {
      setSidebarOpen(false);
    }
  }, [loadNote]);

  const handleDelete = useCallback((note: NotepadNoteMeta) => {
    setNoteToDelete(note);
    setShowDeleteModal(true);
  }, []);

  const confirmDelete = useCallback(async () => {
    if (!noteToDelete) return;

    try {
      await notepadService.deleteNote(noteToDelete.id);
      await loadNotes();
      
      if (selectedNote?.id === noteToDelete.id) {
        createNewNote();
      }
      
      toast.success('Note deleted successfully');
    } catch (error) {
      toast.error('Failed to delete note');
    }
  }, [noteToDelete, loadNotes, selectedNote, createNewNote]);

  const addTag = useCallback(() => {
    if (tagInput.trim() && !tags.includes(tagInput.trim())) {
      setTags([...tags, tagInput.trim()]);
      setTagInput('');
    }
  }, [tagInput, tags]);

  const removeTag = useCallback((tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  }, [tags]);

  // Auto-save functionality
  useEffect(() => {
    if (!selectedNote || !title.trim()) return;

    const timeoutId = setTimeout(() => {
      saveNote();
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, [title, content, tags, isFavorite, selectedNote, saveNote]);

  // Load notes on mount
  useEffect(() => {
    loadNotes();
  }, [loadNotes]);

  // Handle responsive sidebar
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setSidebarOpen(true);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="h-screen bg-slate-50 dark:bg-slate-900 flex flex-col">
      <Toaster position="top-right" />
      
      {/* Header */}
      <header className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors md:hidden"
            >
              {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
            <h1 className="text-xl font-semibold text-slate-900 dark:text-white">
              Notepad
            </h1>
          </div>
          
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsFavorite(!isFavorite)}
              className={`p-2 rounded-lg transition-colors ${
                isFavorite
                  ? 'text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'
                  : 'text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700'
              }`}
              title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
            >
              {isFavorite ? (
                <Star className="w-5 h-5 fill-current" />
              ) : (
                <StarOff className="w-5 h-5" />
              )}
            </button>
            
            <button
              onClick={saveNote}
              disabled={isSaving || !title.trim()}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Save className="w-4 h-4" />
              {isSaving ? 'Saving...' : 'Save'}
            </button>
          </div>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar */}
        <motion.div
          initial={false}
          animate={{ 
            width: sidebarOpen ? '320px' : '0px',
            opacity: sidebarOpen ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
          className="bg-white dark:bg-slate-800 border-r border-slate-200 dark:border-slate-700 overflow-hidden"
        >
          <NotepadList
            selectedNoteId={selectedNoteMeta?.id}
            onNoteSelect={handleNoteSelect}
            onNewNote={createNewNote}
            onNoteUpdate={loadNotes}
          />
        </motion.div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {selectedNote || !selectedNoteMeta ? (
            <>
              {/* Note Title */}
              <div className="p-4 border-b border-slate-200 dark:border-slate-700">
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Note title..."
                  className="w-full text-2xl font-bold bg-transparent border-none outline-none text-slate-900 dark:text-white placeholder-slate-400"
                />
              </div>

              {/* Tags */}
              <div className="p-4 border-b border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-2 mb-2">
                  <Tag className="w-4 h-4 text-slate-400" />
                  <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
                    Tags
                  </span>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-2">
                  {tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm rounded-full"
                    >
                      {tag}
                      <button
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
                    className="flex-1 px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <button
                    onClick={addTag}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Add
                  </button>
                </div>
              </div>

              {/* Editor */}
              <div className="flex-1 p-4 overflow-auto">
                <HintBanner />
                <NotepadEditor
                  content={content}
                  onChange={setContent}
                  placeholder="Start writing your note…"
                />
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-slate-200 dark:bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-2">
                  Select a note to start editing
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Choose a note from the sidebar or create a new one
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      <ConfirmDeleteModal
        isOpen={showDeleteModal}
        onClose={() => {
          setShowDeleteModal(false);
          setNoteToDelete(null);
        }}
        onConfirm={confirmDelete}
        title="Delete Note"
        message="Are you sure you want to delete this note?"
        itemName={noteToDelete?.title}
      />
    </div>
  );
}
