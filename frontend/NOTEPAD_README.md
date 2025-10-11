# Notepad Application

A complete frontend notepad application built with Next.js, Tiptap editor, and Tailwind CSS. Features rich text editing, image insertion, and local storage with easy backend integration hooks.

## Features

### ✨ Rich Text Editing
- **Bold, Italic, Underline** formatting
- **Headings** (H1-H6) with dropdown selection
- **Lists** (bullet and numbered)
- **Text alignment** (left, center, right, justify)
- **Colors** (text color and highlight)
- **Links** with URL insertion
- **Code blocks** with syntax highlighting
- **Blockquotes**
- **Tables** with resizable columns
- **Undo/Redo** functionality

### 🖼️ Image Support
- **URL insertion** - Paste image URLs with preview
- **File upload** - Upload images from local machine
- **Drag & drop** - Drag images directly into the editor
- **Paste support** - Paste images from clipboard
- **Alt text** - Accessibility support for all images
- **File validation** - Size limits (5MB) and format checking

### 📝 Note Management
- **CRUD operations** - Create, read, update, delete notes
- **Auto-save** - Notes save automatically after 2 seconds
- **Search & filter** - Find notes by title, content, or tags
- **Favorites** - Mark notes as favorites
- **Tags** - Organize notes with custom tags
- **Responsive design** - Works on desktop and mobile

### 🎨 UI/UX Features
- **Dark/Light theme** support
- **Responsive sidebar** - Collapses on mobile
- **Smooth animations** - Framer Motion transitions
- **Toast notifications** - User feedback for actions
- **Loading states** - Visual feedback during operations
- **Confirmation modals** - Safe delete operations

## Technical Architecture

### Service Layer
The application uses a clean service layer abstraction (`notepadService`) that currently uses LocalStorage but can be easily swapped for backend API calls.

**Current Implementation:**
```typescript
// LocalStorage implementation
export const notepadService = new LocalStorageNotepadService();
```

**Future Backend Integration:**
```typescript
// TODO: Replace with backend service
export const notepadService = new BackendNotepadService();
```

### Image Handling
Images are currently stored as data URLs in LocalStorage. The service includes a stub function for server upload:

```typescript
// TODO: Replace with server upload
// const response = await fetch('/api/upload', {
//   method: 'POST',
//   body: formData
// });
// const result = await response.json();
// return { success: true, url: result.url };
```

### Data Structure
```typescript
interface NotepadNote {
  id: string;
  title: string;
  content: string; // HTML from Tiptap
  contentJson?: any; // JSON for future use
  createdAt: string;
  updatedAt: string;
  tags?: string[];
  isFavorite?: boolean;
}
```

## Getting Started

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

Visit `http://localhost:3000/notepad` to access the notepad.

## Testing Image Features

### 1. URL Insertion
1. Click the image button in the toolbar
2. Select "From URL" tab
3. Paste an image URL (e.g., `https://picsum.photos/400/300`)
4. Add alt text for accessibility
5. Click "Insert Image"

### 2. File Upload
1. Click the image button in the toolbar
2. Select "Upload File" tab
3. Choose an image file (PNG, JPEG, WebP, SVG)
4. Add alt text
5. Click "Insert Image"

### 3. Drag & Drop
1. Drag an image file from your computer
2. Drop it directly onto the editor
3. Add alt text when prompted

### 4. Paste from Clipboard
1. Copy an image (Ctrl+C or right-click copy)
2. Paste it into the editor (Ctrl+V)
3. Add alt text when prompted

## Backend Integration Guide

### 1. Replace Service Implementation
Update `src/services/notepadService.ts`:

```typescript
class BackendNotepadService implements NotepadService {
  private baseUrl = process.env.NEXT_PUBLIC_API_URL;

  async getAllNotes(): Promise<NotepadNoteMeta[]> {
    const response = await fetch(`${this.baseUrl}/api/notes`);
    return response.json();
  }

  async createNote(noteData: Omit<NotepadNote, 'id' | 'createdAt' | 'updatedAt'>): Promise<NotepadNote> {
    const response = await fetch(`${this.baseUrl}/api/notes`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(noteData)
    });
    return response.json();
  }

  // ... implement other methods
}

export const notepadService = new BackendNotepadService();
```

### 2. Implement Image Upload
Replace the `uploadImage` method:

```typescript
async uploadImage(file: File): Promise<ImageUploadResult> {
  const formData = new FormData();
  formData.append('image', file);

  const response = await fetch(`${this.baseUrl}/api/upload`, {
    method: 'POST',
    body: formData
  });

  const result = await response.json();
  return { success: true, url: result.url };
}
```

### 3. Update Environment Variables
Add to `.env.local`:
```
NEXT_PUBLIC_API_URL=http://localhost:4000
```

## File Structure

```
src/
├── app/notepad/
│   └── page.tsx                 # Main notepad page
├── components/Notepad/
│   ├── NotepadEditor.tsx        # Tiptap editor component
│   ├── NotepadToolbar.tsx       # Rich text toolbar
│   ├── NotepadList.tsx          # Notes sidebar
│   ├── ImageInsertModal.tsx     # Image insertion modal
│   └── ConfirmDeleteModal.tsx   # Delete confirmation
├── services/
│   └── notepadService.ts        # Data service layer
└── types/
    └── notepad.ts               # Type definitions
```

## Dependencies

### Core
- `@tiptap/react` - Rich text editor
- `@tiptap/starter-kit` - Basic editor functionality
- `@tiptap/extension-*` - Additional editor features
- `lowlight` - Code syntax highlighting
- `react-hot-toast` - Toast notifications
- `framer-motion` - Animations

### Extensions Used
- `@tiptap/extension-image` - Image support
- `@tiptap/extension-link` - Link support
- `@tiptap/extension-table` - Table support
- `@tiptap/extension-color` - Text colors
- `@tiptap/extension-text-style` - Text styling
- `@tiptap/extension-underline` - Underline
- `@tiptap/extension-highlight` - Text highlighting
- `@tiptap/extension-text-align` - Text alignment
- `@tiptap/extension-code-block-lowlight` - Code blocks
- `@tiptap/extension-placeholder` - Placeholder text

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Performance Notes

- Images are stored as data URLs in LocalStorage (suitable for development)
- For production, implement server-side image storage
- Consider implementing image compression for large files
- Add pagination for large note collections

## Accessibility

- All toolbar buttons have proper ARIA labels
- Images include alt text for screen readers
- Keyboard navigation support
- High contrast mode compatible
- Focus management for modals

## Future Enhancements

- [ ] Real-time collaboration
- [ ] Note sharing and permissions
- [ ] Export to PDF/Markdown
- [ ] Advanced search with filters
- [ ] Note templates
- [ ] Version history
- [ ] Offline support with sync
- [ ] Plugin system for extensions
