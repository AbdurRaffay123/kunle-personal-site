/**
 * Notepad Service Layer
 * 
 * This service provides a clean abstraction for note management.
 * Currently uses LocalStorage but can be easily swapped for backend API calls.
 * 
 * TODO: Replace LocalStorage implementation with backend API calls
 * - Change getAllNotes() to fetch from /api/notes
 * - Change createNote() to POST /api/notes
 * - Change updateNote() to PUT /api/notes/:id
 * - Change deleteNote() to DELETE /api/notes/:id
 * - Implement uploadImage() to POST /api/upload with file upload
 */

import { NotepadNote, NotepadNoteMeta, NotepadService, ImageUploadResult } from '@/types/notepad';

const STORAGE_KEY = 'notepad-notes';
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ALLOWED_IMAGE_TYPES = ['image/png', 'image/jpeg', 'image/jpg', 'image/webp', 'image/svg+xml'];

class LocalStorageNotepadService implements NotepadService {
  private generateId(): string {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }

  private getStoredNotes(): NotepadNote[] {
    if (typeof window === 'undefined') return [];
    
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error('Error reading notes from localStorage:', error);
      return [];
    }
  }

  private saveNotes(notes: NotepadNote[]): void {
    if (typeof window === 'undefined') return;
    
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
    } catch (error) {
      console.error('Error saving notes to localStorage:', error);
    }
  }

  private stripHtml(html: string): string {
    const div = document.createElement('div');
    div.innerHTML = html;
    return div.textContent || div.innerText || '';
  }

  async getAllNotes(): Promise<NotepadNoteMeta[]> {
    const notes = this.getStoredNotes();
    return notes.map(note => ({
      id: note.id,
      title: note.title,
      updatedAt: note.updatedAt,
      createdAt: note.createdAt,
      tags: note.tags,
      isFavorite: note.isFavorite,
      excerpt: this.stripHtml(note.content).substring(0, 150)
    })).sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());
  }

  async getNote(id: string): Promise<NotepadNote | null> {
    const notes = this.getStoredNotes();
    return notes.find(note => note.id === id) || null;
  }

  async createNote(noteData: Omit<NotepadNote, 'id' | 'createdAt' | 'updatedAt'>): Promise<NotepadNote> {
    const now = new Date().toISOString();
    const newNote: NotepadNote = {
      ...noteData,
      id: this.generateId(),
      createdAt: now,
      updatedAt: now,
    };

    const notes = this.getStoredNotes();
    notes.push(newNote);
    this.saveNotes(notes);

    return newNote;
  }

  async updateNote(id: string, noteData: Partial<NotepadNote>): Promise<NotepadNote> {
    const notes = this.getStoredNotes();
    const noteIndex = notes.findIndex(note => note.id === id);
    
    if (noteIndex === -1) {
      throw new Error('Note not found');
    }

    const updatedNote: NotepadNote = {
      ...notes[noteIndex],
      ...noteData,
      id, // Ensure ID doesn't change
      updatedAt: new Date().toISOString(),
    };

    notes[noteIndex] = updatedNote;
    this.saveNotes(notes);

    return updatedNote;
  }

  async deleteNote(id: string): Promise<boolean> {
    const notes = this.getStoredNotes();
    const filteredNotes = notes.filter(note => note.id !== id);
    
    if (filteredNotes.length === notes.length) {
      return false; // Note not found
    }

    this.saveNotes(filteredNotes);
    return true;
  }

  async uploadImage(file: File): Promise<ImageUploadResult> {
    // Validate file
    if (!ALLOWED_IMAGE_TYPES.includes(file.type)) {
      return {
        success: false,
        error: `Unsupported file type. Allowed types: ${ALLOWED_IMAGE_TYPES.join(', ')}`
      };
    }

    if (file.size > MAX_FILE_SIZE) {
      return {
        success: false,
        error: `File too large. Maximum size: ${MAX_FILE_SIZE / (1024 * 1024)}MB`
      };
    }

    try {
      // Convert to data URL for LocalStorage
      const dataUrl = await this.fileToDataUrl(file);
      
      // TODO: Replace with server upload
      // const response = await fetch('/api/upload', {
      //   method: 'POST',
      //   body: formData
      // });
      // const result = await response.json();
      // return { success: true, url: result.url };

      return {
        success: true,
        url: dataUrl
      };
    } catch (error) {
      return {
        success: false,
        error: 'Failed to process image file'
      };
    }
  }

  private fileToDataUrl(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

  async searchNotes(query: string): Promise<NotepadNoteMeta[]> {
    const notes = await this.getAllNotes();
    const lowercaseQuery = query.toLowerCase();
    
    return notes.filter(note => 
      note.title.toLowerCase().includes(lowercaseQuery) ||
      note.excerpt?.toLowerCase().includes(lowercaseQuery) ||
      note.tags?.some(tag => tag.toLowerCase().includes(lowercaseQuery))
    );
  }

  async getNotesByTag(tag: string): Promise<NotepadNoteMeta[]> {
    const notes = await this.getAllNotes();
    return notes.filter(note => note.tags?.includes(tag));
  }

  async getFavoriteNotes(): Promise<NotepadNoteMeta[]> {
    const notes = await this.getAllNotes();
    return notes.filter(note => note.isFavorite);
  }
}

// Export singleton instance
export const notepadService = new LocalStorageNotepadService();

// TODO: Replace with backend service when ready
// export const notepadService = new BackendNotepadService();
