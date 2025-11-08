/**
 * Notepad Toolbar Component
 * 
 * Provides rich text editing controls for the Tiptap editor
 * Includes image insertion, formatting, and other editing tools
 */

"use client";

import { Editor } from '@tiptap/react';
import { 
  Bold, 
  Italic, 
  Underline,
  Strikethrough,
  List, 
  ListOrdered, 
  Quote, 
  Code, 
  Link, 
  Image, 
  Table, 
  Undo, 
  Redo,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  Palette,
  Highlighter,
  Sigma,
  Terminal,
  CheckSquare,
  Subscript as SubscriptIcon,
  Superscript as SuperscriptIcon,
  FileCode,
  Maximize,
  Minimize
} from 'lucide-react';
import { useState, memo, useCallback, useEffect } from 'react';
import { ImageInsertModal } from './ImageInsertModal';
import { TableInsertModal } from './TableInsertModal';

interface NotepadToolbarProps {
  editor: Editor | null;
  isFullscreen?: boolean;
  onToggleFullscreen?: () => void;
}

// Memoized ToolbarButton component to prevent unnecessary re-renders
const ToolbarButton = memo(({ 
  onClick, 
  isActive = false, 
  disabled = false, 
  children, 
  title 
}: {
  onClick: () => void;
  isActive?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
  title: string;
}) => (
  <button
    onClick={(e) => {
      e.preventDefault();
      e.stopPropagation();
      onClick();
    }}
    onMouseDown={(e) => e.preventDefault()}
    disabled={disabled}
    title={title}
    className={`p-2 rounded-md transition-colors ${
      isActive
        ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
        : 'text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-700'
    } ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    aria-label={title}
  >
    {children}
  </button>
));

ToolbarButton.displayName = 'ToolbarButton';

// Memoized Separator component
const Separator = memo(() => (
  <div className="w-px h-6 bg-slate-300 dark:bg-slate-600 mx-1" />
));

Separator.displayName = 'Separator';

export function NotepadToolbar({ editor, isFullscreen = false, onToggleFullscreen }: NotepadToolbarProps) {
  const [showImageModal, setShowImageModal] = useState(false);
  const [showTableModal, setShowTableModal] = useState(false);
  
  // Force re-render when editor state changes (for active states)
  const [, forceUpdate] = useState({});

  // Listen to editor updates for active state changes
  useEffect(() => {
    if (!editor) return;
    
    const handleUpdate = () => forceUpdate({});
    
    editor.on('selectionUpdate', handleUpdate);
    editor.on('transaction', handleUpdate);
    
    return () => {
      editor.off('selectionUpdate', handleUpdate);
      editor.off('transaction', handleUpdate);
    };
  }, [editor]);

  if (!editor) {
    return null;
  }

  return (
    <>
      <div className={`notepad-toolbar-wrapper flex flex-wrap items-center p-2 bg-white dark:bg-slate-900 rounded-t-xl ${
        isFullscreen ? 'justify-center gap-1' : 'justify-center'
      }`}>
        <style dangerouslySetInnerHTML={{ __html: `
          /* Light mode styles */
          .notepad-toolbar-wrapper {
            background-color: white !important;
            color: black !important;
            border-bottom: 1px solid rgba(0, 0, 0, 0.1) !important;
          }
          .notepad-toolbar-wrapper button,
          .notepad-toolbar-wrapper svg,
          .notepad-toolbar-wrapper select,
          .notepad-toolbar-wrapper input {
            color: black !important;
          }
          .notepad-toolbar-wrapper button svg {
            stroke: black !important;
          }
          /* Light mode hover - light gray */
          .notepad-toolbar-wrapper button:hover {
            background-color: rgb(241 245 249) !important; /* slate-100 */
          }
          /* Light mode active - blue */
          .notepad-toolbar-wrapper button.bg-blue-100 {
            background-color: rgb(219 234 254) !important; /* blue-100 */
          }
          .notepad-toolbar-wrapper button.bg-blue-100 svg {
            stroke: rgb(29 78 216) !important; /* blue-700 */
          }
          
          /* Dark mode styles */
          .dark .notepad-toolbar-wrapper {
            background-color: rgb(15 23 42) !important;
            color: white !important;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important;
          }
          .dark .notepad-toolbar-wrapper button,
          .dark .notepad-toolbar-wrapper svg,
          .dark .notepad-toolbar-wrapper select,
          .dark .notepad-toolbar-wrapper input {
            color: white !important;
          }
          .dark .notepad-toolbar-wrapper button svg {
            stroke: white !important;
          }
          /* Dark mode hover - darker gray */
          .dark .notepad-toolbar-wrapper button:hover {
            background-color: rgb(51 65 85) !important; /* slate-700 */
          }
          /* Dark mode active - dark blue */
          .dark .notepad-toolbar-wrapper button.bg-blue-100 {
            background-color: rgb(30 58 138) !important; /* blue-900 */
          }
          .dark .notepad-toolbar-wrapper button.bg-blue-100 svg {
            stroke: rgb(147 197 253) !important; /* blue-300 */
          }
          
          /* Select dropdown - light mode */
          .notepad-toolbar-wrapper select {
            background-color: white !important;
            color: black !important;
            border-color: rgb(203 213 225) !important; /* slate-300 */
          }
          .notepad-toolbar-wrapper select option {
            background-color: white !important;
            color: black !important;
          }
          
          /* Select dropdown - dark mode */
          .dark .notepad-toolbar-wrapper select {
            background-color: rgb(15 23 42) !important; /* slate-900 */
            color: white !important;
            border-color: rgb(71 85 105) !important; /* slate-600 */
          }
          .dark .notepad-toolbar-wrapper select option {
            background-color: rgb(15 23 42) !important;
            color: white !important;
          }
        `}} />
        {/* Text Formatting */}
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleBold().run()}
          isActive={editor.isActive('bold')}
          title="Bold"
        >
          <Bold className="w-4 h-4" />
        </ToolbarButton>

        <ToolbarButton
          onClick={() => editor.chain().focus().toggleItalic().run()}
          isActive={editor.isActive('italic')}
          title="Italic"
        >
          <Italic className="w-4 h-4" />
        </ToolbarButton>

        <ToolbarButton
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          isActive={editor.isActive('underline')}
          title="Underline"
        >
          <Underline className="w-4 h-4" />
        </ToolbarButton>

        <ToolbarButton
          onClick={() => editor.chain().focus().toggleStrike().run()}
          isActive={editor.isActive('strike')}
          title="Strikethrough"
        >
          <Strikethrough className="w-4 h-4" />
        </ToolbarButton>

        {/* Inline Code Button - NEW */}
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleCode().run()}
          isActive={editor.isActive('code')}
          title="Inline Code (select text to format as code)"
        >
          <Code className="w-4 h-4" />
        </ToolbarButton>

        {/* Super/Subscript */}
        <ToolbarButton
          onClick={() => (editor.chain().focus() as any).toggleSuperscript().run()}
          isActive={editor.isActive('superscript')}
          title="Superscript"
        >
          <SuperscriptIcon className="w-4 h-4" />
        </ToolbarButton>
        <ToolbarButton
          onClick={() => (editor.chain().focus() as any).toggleSubscript().run()}
          isActive={editor.isActive('subscript')}
          title="Subscript"
        >
          <SubscriptIcon className="w-4 h-4" />
        </ToolbarButton>

        <Separator />

        {/* Headings */}
        <select
          value={editor.getAttributes('heading').level || 'paragraph'}
          onChange={(e) => {
            e.stopPropagation();
            const level = e.target.value;
            if (level === 'paragraph') {
              editor.chain().setParagraph().run();
            } else {
              editor.chain().toggleHeading({ level: parseInt(level) as 1 | 2 | 3 | 4 | 5 | 6 }).run();
            }
          }}
          className="px-2 py-1 text-sm border border-slate-300 dark:border-slate-600 rounded bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
          title="Text Style"
        >
          <option value="paragraph">Paragraph</option>
          <option value="1">Heading 1</option>
          <option value="2">Heading 2</option>
          <option value="3">Heading 3</option>
          <option value="4">Heading 4</option>
          <option value="5">Heading 5</option>
          <option value="6">Heading 6</option>
        </select>

        <Separator />

        {/* Lists */}
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          isActive={editor.isActive('bulletList')}
          title="Bullet List"
        >
          <List className="w-4 h-4" />
        </ToolbarButton>

        <ToolbarButton
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          isActive={editor.isActive('orderedList')}
          title="Numbered List"
        >
          <ListOrdered className="w-4 h-4" />
        </ToolbarButton>

        {/* Todo List */}
        <ToolbarButton
          onClick={() => (editor.chain().focus() as any).toggleTaskList().run()}
          isActive={editor.isActive('taskList')}
          title="To‑do List"
        >
          <CheckSquare className="w-4 h-4" />
        </ToolbarButton>

        <Separator />

        {/* Block Elements */}
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          isActive={editor.isActive('blockquote')}
          title="Quote"
        >
          <Quote className="w-4 h-4" />
        </ToolbarButton>

        {/* Code Block Button - UPDATED with different icon */}
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          isActive={editor.isActive('codeBlock')}
          title="Code Block (multi-line code)"
        >
          <FileCode className="w-4 h-4" />
        </ToolbarButton>

        <Separator />

        {/* Special Markers */}
        <ToolbarButton
          onClick={() => (editor.chain().focus() as any).toggleMathBlock().run()}
          isActive={editor.isActive('mathBlock')}
          title="Block Equation (Math)"
        >
          <Sigma className="w-4 h-4" />
        </ToolbarButton>

        <ToolbarButton
          onClick={() => (editor.chain().focus() as any).toggleSpecialCodeBlock().run()}
          isActive={editor.isActive('specialCodeBlock')}
          title="Mark as Special Code Block (enhanced styling)"
        >
          <Terminal className="w-4 h-4" />
        </ToolbarButton>

        <Separator />

        {/* Text Alignment */}
        <ToolbarButton
          onClick={() => editor.chain().focus().setTextAlign('left').run()}
          isActive={editor.isActive({ textAlign: 'left' })}
          title="Align Left"
        >
          <AlignLeft className="w-4 h-4" />
        </ToolbarButton>

        <ToolbarButton
          onClick={() => editor.chain().focus().setTextAlign('center').run()}
          isActive={editor.isActive({ textAlign: 'center' })}
          title="Align Center"
        >
          <AlignCenter className="w-4 h-4" />
        </ToolbarButton>

        <ToolbarButton
          onClick={() => editor.chain().focus().setTextAlign('right').run()}
          isActive={editor.isActive({ textAlign: 'right' })}
          title="Align Right"
        >
          <AlignRight className="w-4 h-4" />
        </ToolbarButton>

        <ToolbarButton
          onClick={() => editor.chain().focus().setTextAlign('justify').run()}
          isActive={editor.isActive({ textAlign: 'justify' })}
          title="Justify"
        >
          <AlignJustify className="w-4 h-4" />
        </ToolbarButton>

        <Separator />

        {/* Text Color - Improved with real-time updates */}
        <div className="flex items-center gap-1">
          <input
            type="color"
            onChange={(e) => {
              e.stopPropagation();
              editor.chain().focus().setColor(e.target.value).run();
            }}
            onInput={(e) => {
              // Update color in real-time as user drags the color picker
              const value = (e.target as HTMLInputElement).value;
              editor.chain().focus().setColor(value).run();
            }}
            value={editor.getAttributes('textStyle').color || '#000000'}
            className="w-8 h-8 border border-slate-300 dark:border-slate-600 rounded cursor-pointer"
            title="Text Color"
          />
          <ToolbarButton
            onClick={() => editor.chain().focus().unsetColor().run()}
            isActive={!!editor.getAttributes('textStyle').color}
            title="Remove Text Color"
          >
            <Palette className="w-4 h-4" />
          </ToolbarButton>
        </div>

        {/* Highlight - Toggle Button with Color Picker */}
        <div className="flex items-center gap-1">
          <ToolbarButton
            onClick={() => {
              if (editor.isActive('highlight')) {
                // If highlighted, remove it
                editor.chain().focus().unsetHighlight().run();
              } else {
                // If not highlighted, apply default highlight
                editor.chain().focus().toggleHighlight({ color: '#ffff00' }).run();
              }
            }}
            isActive={editor.isActive('highlight')}
            title="Toggle Highlight"
          >
            <Highlighter className="w-4 h-4" />
          </ToolbarButton>
          <input
            type="color"
            onChange={(e) => {
              e.stopPropagation();
              if (editor.isActive('highlight')) {
                // Update existing highlight color
                editor.chain().focus().setHighlight({ color: e.target.value }).run();
              } else {
                // Apply new highlight with selected color
                editor.chain().focus().toggleHighlight({ color: e.target.value }).run();
              }
            }}
            value={editor.getAttributes('highlight').color || '#ffff00'}
            className="w-8 h-8 border border-slate-300 dark:border-slate-600 rounded cursor-pointer"
            title="Change Highlight Color"
          />
        </div>

        <Separator />

        {/* Links and Media */}
        <ToolbarButton
          onClick={() => {
            const url = window.prompt('Enter URL:');
            if (url) {
              editor.chain().focus().setLink({ href: url }).run();
            }
          }}
          isActive={editor.isActive('link')}
          title="Insert Link"
        >
          <Link className="w-4 h-4" />
        </ToolbarButton>

        <ToolbarButton
          onClick={() => setShowImageModal(true)}
          title="Insert Image"
        >
          <Image className="w-4 h-4" />
        </ToolbarButton>

        <ToolbarButton
          onClick={() => setShowTableModal(true)}
          title="Insert Table"
        >
          <Table className="w-4 h-4" />
        </ToolbarButton>

        <Separator />

        {/* History */}
        <ToolbarButton
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().undo()}
          title="Undo"
        >
          <Undo className="w-4 h-4" />
        </ToolbarButton>

        <ToolbarButton
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().redo()}
          title="Redo"
        >
          <Redo className="w-4 h-4" />
        </ToolbarButton>

        <Separator />

        {/* Fullscreen Toggle Button */}
        {onToggleFullscreen && (
          <ToolbarButton
            onClick={onToggleFullscreen}
            isActive={isFullscreen}
            title={isFullscreen ? "Exit Fullscreen (ESC)" : "Enter Fullscreen"}
          >
            {isFullscreen ? (
              <Minimize className="w-4 h-4" />
            ) : (
              <Maximize className="w-4 h-4" />
            )}
          </ToolbarButton>
        )}
      </div>

      {/* Image Insert Modal */}
      <ImageInsertModal
        isOpen={showImageModal}
        onClose={() => setShowImageModal(false)}
        onInsert={(src, alt) => {
          editor.chain().focus().setImage({ src, alt }).run();
          setShowImageModal(false);
        }}
      />

      {/* Table Insert Modal */}
      <TableInsertModal
        isOpen={showTableModal}
        onClose={() => setShowTableModal(false)}
        onConfirm={(rows, cols, withHeader) => {
          editor.chain().focus().insertTable({ rows, cols, withHeaderRow: withHeader }).run();
        }}
      />
    </>
  );
}