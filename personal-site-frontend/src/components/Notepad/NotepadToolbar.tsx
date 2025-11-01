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
  Superscript as SuperscriptIcon
} from 'lucide-react';
import { useState } from 'react';
import { ImageInsertModal } from './ImageInsertModal';
import { TableInsertModal } from './TableInsertModal';

interface NotepadToolbarProps {
  editor: Editor | null;
}

export function NotepadToolbar({ editor }: NotepadToolbarProps) {
  const [showImageModal, setShowImageModal] = useState(false);
  const [showTableModal, setShowTableModal] = useState(false);

  if (!editor) {
    return null;
  }

  const ToolbarButton = ({ 
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
          : 'hover:bg-slate-100 dark:hover:bg-slate-700'
      } ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      style={{ color: isActive ? undefined : 'var(--foreground)' }}
      aria-label={title}
    >
      {children}
    </button>
  );

  const Separator = () => (
    <div className="w-px h-6 bg-slate-300 dark:bg-slate-600 mx-1" />
  );

  return (
    <>
      <div className="flex flex-wrap items-center gap-1 p-3" style={{ backgroundColor: 'var(--card)' }}>
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
          className="px-2 py-1 text-sm border border-slate-300 dark:border-slate-600 rounded"
          style={{ backgroundColor: 'var(--card)', color: 'var(--foreground)' }}
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

        <ToolbarButton
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          isActive={editor.isActive('codeBlock')}
          title="Code Block"
        >
          <Code className="w-4 h-4" />
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

        {/* Colors */}
        <div className="flex items-center gap-1">
          <input
            type="color"
            onChange={(e) => {
              e.stopPropagation();
              editor.chain().setColor(e.target.value).run();
            }}
            value={editor.getAttributes('textStyle').color || '#000000'}
            className="w-8 h-8 border border-slate-300 dark:border-slate-600 rounded cursor-pointer"
            title="Text Color"
          />
          <ToolbarButton
            onClick={() => editor.chain().unsetColor().run()}
            title="Remove Text Color"
          >
            <Palette className="w-4 h-4" />
          </ToolbarButton>
        </div>

        <div className="flex items-center gap-1">
          <input
            type="color"
            onChange={(e) => {
              e.stopPropagation();
              editor.chain().setHighlight({ color: e.target.value }).run();
            }}
            value={editor.getAttributes('highlight').color || '#ffff00'}
            className="w-8 h-8 border border-slate-300 dark:border-slate-600 rounded cursor-pointer"
            title="Highlight Color"
          />
          <ToolbarButton
            onClick={() => editor.chain().unsetHighlight().run()}
            title="Remove Highlight"
          >
            <Highlighter className="w-4 h-4" />
          </ToolbarButton>
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
