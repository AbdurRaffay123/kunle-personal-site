/**
 * Notepad Editor Component
 * 
 * Main Tiptap editor with image support, drag-and-drop, and paste functionality
 */

"use client";

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import Link from '@tiptap/extension-link';
import { Table } from '@tiptap/extension-table';
import { TableRow } from '@tiptap/extension-table-row';
import { TableCell } from '@tiptap/extension-table-cell';
import { TableHeader } from '@tiptap/extension-table-header';
import { Color } from '@tiptap/extension-color';
import { TextStyle } from '@tiptap/extension-text-style';
import { Underline } from '@tiptap/extension-underline';
import { Highlight } from '@tiptap/extension-highlight';
import { TextAlign } from '@tiptap/extension-text-align';
import { Placeholder } from '@tiptap/extension-placeholder';
import { NotepadToolbar } from './NotepadToolbar';
import { notepadService } from '@/services/notepadService';
import toast from 'react-hot-toast';
import { useCallback, useEffect } from 'react';
import MathBlock from './extensions/MathBlock';
import SpecialCodeBlock from './extensions/SpecialCodeBlock';

interface NotepadEditorProps {
  content?: string;
  onChange?: (content: string) => void;
  placeholder?: string;
}

export function NotepadEditor({ 
  content = '', 
  onChange, 
  placeholder = 'Start writing your note…' 
}: NotepadEditorProps) {
  
  const editor = useEditor({
    extensions: [
      StarterKit,
      Image.configure({
        HTMLAttributes: {
          class: 'max-w-md h-auto rounded-lg mx-auto block',
        },
      }),
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: 'text-blue-600 hover:text-blue-800 underline',
        },
      }),
      Table.configure({
        resizable: true,
      }),
      TableRow,
      TableHeader,
      TableCell,
      Color,
      TextStyle,
      Underline,
      Highlight.configure({
        multicolor: true,
      }),
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      Placeholder.configure({
      placeholder,
    }),
    MathBlock,
    SpecialCodeBlock,
  ],
  content,
  immediatelyRender: false, // Fix SSR hydration issues
  onCreate: ({ editor }) => {
    // Store the initial scroll position to prevent auto-scroll on toolbar clicks
    const editorElement = editor.view.dom;
    if (editorElement) {
      (editorElement as HTMLElement).style.scrollBehavior = 'smooth';
    }
  },
  onUpdate: ({ editor }) => {
    const html = editor.getHTML();
    onChange?.(html);
  },
    editorProps: {
      attributes: {
        class: 'prose prose-slate dark:prose-invert max-w-none focus:outline-none min-h-[400px] p-4',
      },
      handleDrop: (view, event, slice, moved) => {
        if (!moved && event.dataTransfer && event.dataTransfer.files && event.dataTransfer.files[0]) {
          const file = event.dataTransfer.files[0];
          
          // Check if it's an image file
          if (file.type.startsWith('image/')) {
            event.preventDefault();
            handleImageUpload(file);
            return true;
          }
        }
        return false;
      },
      handlePaste: (view, event, slice) => {
        const items = Array.from(event.clipboardData?.items || []);
        
        for (const item of items) {
          if (item.type.startsWith('image/')) {
            event.preventDefault();
            const file = item.getAsFile();
            if (file) {
              handleImageUpload(file);
            }
            return true;
          }
        }
        return false;
      },
    },
  });

  const handleImageUpload = useCallback(async (file: File) => {
    try {
      const result = await notepadService.uploadImage(file);
      if (result.success && result.url) {
        // Prompt for alt text
        const alt = prompt('Enter alt text for the image (for accessibility):') || 'Image';
        editor?.chain().focus().setImage({ src: result.url, alt }).run();
        toast.success('Image inserted successfully');
      } else {
        toast.error(result.error || 'Failed to upload image');
      }
    } catch (error) {
      toast.error('Failed to process image');
    }
  }, [editor]);

  // Update editor content when content prop changes
  useEffect(() => {
    if (editor && content !== undefined) {
      const currentContent = editor.getHTML();
      // Only update if content is different to avoid unnecessary re-renders
      if (currentContent !== content) {
        editor.commands.setContent(content);
      }
    }
  }, [editor, content]);

  // Apply list styles after editor is created
  useEffect(() => {
    if (editor) {
      const applyListStyles = () => {
        const editorElement = document.querySelector('.ProseMirror');
        if (editorElement) {
          const lists = editorElement.querySelectorAll('ul, ol');
          lists.forEach(list => {
            (list as HTMLElement).style.listStyleType = list.tagName === 'UL' ? 'disc' : 'decimal';
            (list as HTMLElement).style.paddingLeft = '1.5rem';
            (list as HTMLElement).style.margin = '1rem 0';
            
            const items = list.querySelectorAll('li');
            items.forEach(li => {
              (li as HTMLElement).style.margin = '0.25rem 0';
              (li as HTMLElement).style.lineHeight = '1.6';
              (li as HTMLElement).style.color = 'rgb(51 65 85)';
            });
          });
        }
      };

      // Apply styles immediately
      applyListStyles();

      // Apply styles on update
      editor.on('update', applyListStyles);
      editor.on('selectionUpdate', applyListStyles);

      return () => {
        editor.off('update', applyListStyles);
        editor.off('selectionUpdate', applyListStyles);
      };
    }
  }, [editor]);

  if (!editor) {
    return (
      <div className="border border-slate-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800">
        <div className="p-4">
          <div className="animate-pulse">
            <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-1/2"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="border border-slate-200 dark:border-slate-700 rounded-lg shadow-sm" style={{ backgroundColor: 'var(--card)' }}>
      <style dangerouslySetInnerHTML={{
        __html: `
          .ProseMirror {
            color: var(--foreground) !important;
            background-color: var(--card) !important;
          }
          .ProseMirror ul {
            list-style-type: disc !important;
            padding-left: 1.5rem !important;
            margin: 1rem 0 !important;
          }
          .ProseMirror ol {
            list-style-type: decimal !important;
            padding-left: 1.5rem !important;
            margin: 1rem 0 !important;
          }
          .ProseMirror li {
            margin: 0.25rem 0 !important;
            line-height: 1.6 !important;
            color: var(--foreground) !important;
          }
          .ProseMirror h1, .ProseMirror h2, .ProseMirror h3, .ProseMirror h4, .ProseMirror h5, .ProseMirror h6 {
            color: var(--foreground) !important;
          }
          .ProseMirror p {
            color: var(--foreground) !important;
          }
          .ProseMirror strong {
            color: var(--foreground) !important;
          }
          .ProseMirror em {
            color: var(--foreground) !important;
          }
          .ProseMirror code {
            color: var(--foreground) !important;
          }
          /* Code Block Styling */
          .ProseMirror pre {
            background: #1e1e1e !important;
            border: 1px solid #333 !important;
            border-radius: 12px !important;
            padding: 1.25rem !important;
            margin: 1rem 0 !important;
            overflow-x: auto !important;
            position: relative !important;
          }
          .ProseMirror pre::before {
            content: 'CODE' !important;
            position: absolute !important;
            top: 0.5rem !important;
            right: 1rem !important;
            font-size: 0.75rem !important;
            font-weight: 700 !important;
            letter-spacing: 0.05em !important;
            color: #fff !important;
            background: #3b82f6 !important;
            padding: 0.25rem 0.5rem !important;
            border-radius: 4px !important;
            text-transform: uppercase !important;
          }
          .ProseMirror pre code {
            color: #fff !important;
            background: transparent !important;
            padding: 0 !important;
            border: none !important;
            font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace !important;
            font-size: 0.875rem !important;
          }
          
          /* Code Block Styling - Light Mode */
          @media (prefers-color-scheme: light) {
            .ProseMirror pre {
              background: #f7f9fc !important;
              border: 1px solid #e2e8f0 !important;
            }
            .ProseMirror pre::before {
              background: #3b82f6 !important;
              color: #fff !important;
            }
            .ProseMirror pre code {
              color: #1e293b !important;
            }
          }
          
          /* Blockquote Styling */
          .ProseMirror blockquote {
            border-left: 4px solid #6366f1 !important;
            background: linear-gradient(to right, rgba(99, 102, 241, 0.08), transparent) !important;
            padding: 1rem 1.5rem !important;
            margin: 1rem 0 !important;
            border-radius: 0 8px 8px 0 !important;
            color: var(--foreground) !important;
            position: relative !important;
            font-style: italic !important;
          }
          
          /* Math Block Styling */
          .ProseMirror div[data-type="math-block"] {
            background: linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(99, 102, 241, 0.1)) !important;
            border: 2px solid #8b5cf6 !important;
            border-radius: 12px !important;
            padding: 1.25rem !important;
            margin: 1rem 0 !important;
            position: relative !important;
            overflow: hidden !important;
          }
          .ProseMirror div[data-type="math-block"]::before {
            content: 'MATH' !important;
            position: absolute !important;
            top: 0.5rem !important;
            right: 1rem !important;
            font-size: 0.75rem !important;
            font-weight: 700 !important;
            letter-spacing: 0.05em !important;
            color: #fff !important;
            background: #8b5cf6 !important;
            padding: 0.25rem 0.5rem !important;
            border-radius: 4px !important;
            text-transform: uppercase !important;
          }
          .ProseMirror div[data-type="math-block"] > * {
            color: var(--foreground) !important;
            font-family: 'Georgia', 'Times New Roman', serif !important;
          }
          
          /* Math Block - Light Mode */
          @media (prefers-color-scheme: light) {
            .ProseMirror div[data-type="math-block"] {
              background: linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(99, 102, 241, 0.15)) !important;
              border: 2px solid #8b5cf6 !important;
            }
            .ProseMirror div[data-type="math-block"] > * {
              color: #1e293b !important;
            }
          }
          
          /* Special Code Block (HTML) Styling */
          .ProseMirror pre[data-type="special-code"] {
            background: #1e1e1e !important;
            border: 2px solid #10b981 !important;
            border-radius: 12px !important;
            padding: 1.25rem !important;
            margin: 1rem 0 !important;
            position: relative !important;
          }
          .ProseMirror pre[data-type="special-code"]::before {
            content: 'HTML' !important;
            position: absolute !important;
            top: 0.5rem !important;
            right: 1rem !important;
            font-size: 0.75rem !important;
            font-weight: 700 !important;
            letter-spacing: 0.05em !important;
            color: #fff !important;
            background: #10b981 !important;
            padding: 0.25rem 0.5rem !important;
            border-radius: 4px !important;
            text-transform: uppercase !important;
          }
          .ProseMirror pre[data-type="special-code"] code {
            color: #fff !important;
            font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace !important;
            font-size: 0.875rem !important;
          }
          
          /* Special Code Block - Light Mode */
          @media (prefers-color-scheme: light) {
            .ProseMirror pre[data-type="special-code"] {
              background: #f0fdf4 !important;
              border: 2px solid #10b981 !important;
            }
            .ProseMirror pre[data-type="special-code"] code {
              color: #065f46 !important;
            }
          }
        `
      }} />
      <div className="sticky top-0 z-50 bg-[var(--card)] border-b border-slate-200 dark:border-slate-700 shadow-sm">
        <NotepadToolbar editor={editor} />
      </div>
      <div className="relative">
        <EditorContent 
          editor={editor} 
          className="min-h-[400px] focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-opacity-50 rounded-b-lg overflow-auto max-h-[calc(100vh-300px)]"
          style={{ scrollBehavior: 'auto' }}
        />
        
        {/* Drag and drop overlay */}
        <div 
          className="absolute inset-0 bg-blue-50 dark:bg-blue-900/20 border-2 border-dashed border-blue-300 dark:border-blue-600 rounded-b-lg flex items-center justify-center opacity-0 pointer-events-none transition-opacity duration-200"
          onDragOver={(e) => {
            e.preventDefault();
            e.currentTarget.classList.remove('opacity-0');
            e.currentTarget.classList.add('opacity-100');
          }}
          onDragLeave={(e) => {
            e.preventDefault();
            e.currentTarget.classList.remove('opacity-100');
            e.currentTarget.classList.add('opacity-0');
          }}
          onDrop={(e) => {
            e.preventDefault();
            e.currentTarget.classList.remove('opacity-100');
            e.currentTarget.classList.add('opacity-0');
          }}
        >
          <div className="text-center">
            <div className="text-blue-600 dark:text-blue-400 mb-2">
              <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
            </div>
            <p className="text-blue-600 dark:text-blue-400 font-medium">Drop image here to insert</p>
          </div>
        </div>
      </div>
    </div>
  );
}
