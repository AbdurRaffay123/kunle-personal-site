/**
 * Notepad-specific type definitions
 */

export interface NotepadNote {
  id: string;
  title: string;
  content: string; // HTML content from Tiptap
  contentJson?: any; // JSON content from Tiptap for future use
  createdAt: string;
  updatedAt: string;
  tags?: string[];
  isFavorite?: boolean;
}

export interface NotepadNoteMeta {
  id: string;
  title: string;
  updatedAt: string;
  createdAt: string;
  tags?: string[];
  isFavorite?: boolean;
  excerpt?: string; // First 150 characters of content
}

export interface ImageUploadResult {
  success: boolean;
  url?: string;
  error?: string;
}

export interface NotepadService {
  // CRUD operations
  getAllNotes(): Promise<NotepadNoteMeta[]>;
  getNote(id: string): Promise<NotepadNote | null>;
  createNote(note: Omit<NotepadNote, 'id' | 'createdAt' | 'updatedAt'>): Promise<NotepadNote>;
  updateNote(id: string, note: Partial<NotepadNote>): Promise<NotepadNote>;
  deleteNote(id: string): Promise<boolean>;
  
  // Image handling
  uploadImage(file: File): Promise<ImageUploadResult>;
  
  // Search and filtering
  searchNotes(query: string): Promise<NotepadNoteMeta[]>;
  getNotesByTag(tag: string): Promise<NotepadNoteMeta[]>;
  getFavoriteNotes(): Promise<NotepadNoteMeta[]>;
}
