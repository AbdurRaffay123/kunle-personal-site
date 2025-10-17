/**
 * Notepad List Component
 * 
 * Displays list of notes with search, filtering, and CRUD operations
 */

"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Plus, 
  Star, 
  StarOff, 
  Edit, 
  Trash2, 
  Calendar,
  Tag as TagIcon
} from 'lucide-react';
import { NotepadNoteMeta } from '@/types/notepad';
import { notepadService } from '@/services/notepadService';
import { formatDate } from '@/lib/utils';
import toast from 'react-hot-toast';

interface NotepadListProps {
  selectedNoteId?: string;
  onNoteSelect: (note: NotepadNoteMeta) => void;
  onNewNote: () => void;
  onNoteUpdate: () => void;
}

export function NotepadList({ 
  selectedNoteId, 
  onNoteSelect, 
  onNewNote, 
  onNoteUpdate 
}: NotepadListProps) {
  const [notes, setNotes] = useState<NotepadNoteMeta[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState<'all' | 'favorites'>('all');
  const [loading, setLoading] = useState(true);

  const loadNotes = async () => {
    try {
      setLoading(true);
      const allNotes = await notepadService.getAllNotes();
      setNotes(allNotes);
    } catch (error) {
      toast.error('Failed to load notes');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadNotes();
  }, []);

  const handleDelete = async (note: NotepadNoteMeta, e: React.MouseEvent) => {
    e.stopPropagation();
    
    if (confirm(`Are you sure you want to delete "${note.title}"?`)) {
      try {
        await notepadService.deleteNote(note.id);
        await loadNotes();
        onNoteUpdate();
        toast.success('Note deleted successfully');
      } catch (error) {
        toast.error('Failed to delete note');
      }
    }
  };

  const handleToggleFavorite = async (note: NotepadNoteMeta, e: React.MouseEvent) => {
    e.stopPropagation();
    
    try {
      await notepadService.updateNote(note.id, { 
        isFavorite: !note.isFavorite 
      });
      await loadNotes();
      onNoteUpdate();
      toast.success(note.isFavorite ? 'Removed from favorites' : 'Added to favorites');
    } catch (error) {
      toast.error('Failed to update note');
    }
  };

  const filteredNotes = notes.filter(note => {
    const matchesSearch = !searchTerm || 
      note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.excerpt?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.tags?.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesFilter = filter === 'all' || 
      (filter === 'favorites' && note.isFavorite);
    
    return matchesSearch && matchesFilter;
  });

  if (loading) {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col bg-white dark:bg-slate-800 border-r border-slate-200 dark:border-slate-700">
      {/* Header */}
      <div className="p-4 border-b border-slate-200 dark:border-slate-700">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
            Notes
          </h2>
          <button
            onClick={onNewNote}
            className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            title="New Note"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>

        {/* Search */}
        <div className="relative mb-3">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search notes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Filters */}
        <div className="flex gap-2">
          <button
            onClick={() => setFilter('all')}
            className={`px-3 py-1 text-sm rounded-full transition-colors ${
              filter === 'all'
                ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
                : 'text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-700'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter('favorites')}
            className={`px-3 py-1 text-sm rounded-full transition-colors ${
              filter === 'favorites'
                ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
                : 'text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-700'
            }`}
          >
            <Star className="w-3 h-3 inline mr-1" />
            Favorites
          </button>
        </div>
      </div>

      {/* Notes List */}
      <div className="flex-1 overflow-y-auto">
        <AnimatePresence>
          {filteredNotes.length === 0 ? (
            <div className="p-4 text-center text-slate-500 dark:text-slate-400">
              {searchTerm || filter !== 'all' ? 'No notes found' : 'No notes yet. Create your first note!'}
            </div>
          ) : (
            filteredNotes.map((note) => (
              <motion.div
                key={note.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
                onClick={() => onNoteSelect(note)}
                className={`p-4 border-b border-slate-200 dark:border-slate-700 cursor-pointer transition-colors hover:bg-slate-50 dark:hover:bg-slate-700 ${
                  selectedNoteId === note.id ? 'bg-blue-50 dark:bg-blue-900/20 border-l-4 border-l-blue-500' : ''
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-medium text-slate-900 dark:text-white line-clamp-2 flex-1">
                    {note.title || 'Untitled Note'}
                  </h3>
                  <div className="flex items-center gap-1 ml-2">
                    <button
                      onClick={(e) => handleToggleFavorite(note, e)}
                      className="p-1 hover:bg-slate-200 dark:hover:bg-slate-600 rounded transition-colors"
                      title={note.isFavorite ? 'Remove from favorites' : 'Add to favorites'}
                    >
                      {note.isFavorite ? (
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      ) : (
                        <StarOff className="w-4 h-4 text-slate-400" />
                      )}
                    </button>
                    <button
                      onClick={(e) => handleDelete(note, e)}
                      className="p-1 hover:bg-red-100 dark:hover:bg-red-900/20 rounded transition-colors"
                      title="Delete note"
                    >
                      <Trash2 className="w-4 h-4 text-red-500" />
                    </button>
                  </div>
                </div>

                {note.excerpt && (
                  <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2 mb-2">
                    {note.excerpt}
                  </p>
                )}

                <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3 h-3" />
                    <span>{formatDate(note.updatedAt, 'short')}</span>
                  </div>
                  
                  {note.tags && note.tags.length > 0 && (
                    <div className="flex items-center gap-1">
                      <TagIcon className="w-3 h-3" />
                      <span>{note.tags.length}</span>
                    </div>
                  )}
                </div>

                {note.tags && note.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1 mt-2">
                    {note.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                    {note.tags.length > 3 && (
                      <span className="px-2 py-1 text-xs bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 rounded-full">
                        +{note.tags.length - 3}
                      </span>
                    )}
                  </div>
                )}
              </motion.div>
            ))
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
