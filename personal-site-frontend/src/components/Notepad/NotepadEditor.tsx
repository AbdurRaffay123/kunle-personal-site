/**
 * Notepad Editor Component - FIXED VERSION
 *
 * Main Tiptap editor with image support, drag-and-drop, and paste functionality
 * FIXES:
 * 1. Inline code mark works properly (select text and apply code formatting)
 * 2. Code blocks use Tiptap's default styling
 * 3. Text alignment preserved for all other elements
 */

"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import CodeBlock from "@tiptap/extension-code-block";
import Code from "@tiptap/extension-code";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import { Table } from "@tiptap/extension-table";
import { TableRow } from "@tiptap/extension-table-row";
import { TableCell } from "@tiptap/extension-table-cell";
import { TableHeader } from "@tiptap/extension-table-header";
import { Color } from "@tiptap/extension-color";
import { TextStyle } from "@tiptap/extension-text-style";
import { Underline } from "@tiptap/extension-underline";
import { Highlight } from "@tiptap/extension-highlight";
import { TextAlign } from "@tiptap/extension-text-align";
import { Placeholder } from "@tiptap/extension-placeholder";
import { NotepadToolbar } from "./NotepadToolbar";
import { notepadService } from "@/services/notepadService";
import toast from "react-hot-toast";
import { useCallback, useEffect } from "react";
import MathBlock from "./extensions/MathBlock";
import SpecialCodeBlock from "./extensions/SpecialCodeBlock";
import TaskList from "@tiptap/extension-task-list";
import TaskItem from "@tiptap/extension-task-item";
import Superscript from "@tiptap/extension-superscript";
import Subscript from "@tiptap/extension-subscript";
import BubbleMenu from "@tiptap/extension-bubble-menu";
import Document from "@tiptap/extension-document";
import Youtube from "@tiptap/extension-youtube";

interface NotepadEditorProps {
  content?: string;
  onChange?: (content: string) => void;
  placeholder?: string;
}

export function NotepadEditor({
  content = "",
  onChange,
  placeholder = "Start writing your note…",
}: NotepadEditorProps) {
  const editor = useEditor({
    extensions: [
      Document,
      StarterKit.configure({
        // Disable code and codeBlock from StarterKit - we'll add them separately
        code: false,
        codeBlock: false,
      }),
      // Add Code mark separately for inline code (select text and apply)
      Code,
      // Add CodeBlock separately for multi-line code blocks
      CodeBlock,
      Image.configure({
        HTMLAttributes: { class: "max-w-md h-auto rounded-lg mx-auto block" },
      }),
      Link.configure({
        openOnClick: false,
        HTMLAttributes: { class: "text-blue-600 hover:text-blue-800 underline" },
      }),
      Table.configure({ resizable: true }),
      TableRow,
      TableHeader,
      TableCell,
      TaskList,
      TaskItem,
      Superscript,
      Subscript,
      Underline,
      Highlight.configure({ multicolor: true }),
      Color,
      TextStyle,
      TextAlign.configure({
        types: ["heading", "paragraph"],
        alignments: ["left", "center", "right", "justify"],
      }),
      BubbleMenu,
      Placeholder.configure({ placeholder }),
      MathBlock,
      SpecialCodeBlock,
      Youtube,
    ],
    content,
    immediatelyRender: false,
    onCreate: ({ editor }) => {
      const editorElement = editor.view.dom;
      if (editorElement) {
        (editorElement as HTMLElement).style.scrollBehavior = "smooth";
      }
    },
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      onChange?.(html);
    },
    editorProps: {
      attributes: {
        class:
          "prose prose-slate dark:prose-invert max-w-none focus:outline-none min-h-[400px] p-4 notepad-content",
      },
      handleDrop: (view, event, slice, moved) => {
        if (
          !moved &&
          event.dataTransfer &&
          event.dataTransfer.files &&
          event.dataTransfer.files[0]
        ) {
          const file = event.dataTransfer.files[0];

          if (file.type.startsWith("image/")) {
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
          if (item.type.startsWith("image/")) {
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

  const handleImageUpload = useCallback(
    async (file: File) => {
      try {
        const result = await notepadService.uploadImage(file);
        if (result.success && result.url) {
          const alt = prompt("Enter alt text for the image (for accessibility):") || "Image";
          editor?.chain().focus().setImage({ src: result.url, alt }).run();
          toast.success("Image inserted successfully");
        } else {
          toast.error(result.error || "Failed to upload image");
        }
      } catch (error) {
        toast.error("Failed to process image");
      }
    },
    [editor],
  );

  useEffect(() => {
    if (editor && content !== undefined) {
      const currentContent = editor.getHTML();
      if (currentContent !== content) {
        editor.commands.setContent(content);
      }
    }
  }, [editor, content]);

  useEffect(() => {
    if (editor) {
      const applyListStyles = () => {
        const editorElement = document.querySelector(".ProseMirror");
        if (editorElement) {
          const lists = editorElement.querySelectorAll("ul, ol");
          lists.forEach((list) => {
            if ((list as HTMLElement).getAttribute("data-type") === "taskList") {
              return;
            }
            (list as HTMLElement).style.listStyleType = list.tagName === "UL" ? "disc" : "decimal";
            (list as HTMLElement).style.paddingLeft = "1.5rem";
            (list as HTMLElement).style.margin = "1rem 0";
            const items = list.querySelectorAll("li");
            items.forEach((li) => {
              (li as HTMLElement).style.margin = "0.25rem 0";
              (li as HTMLElement).style.lineHeight = "1.6";
              (li as HTMLElement).style.color = "rgb(51 65 85)";
            });
          });
        }
      };

      applyListStyles();
      editor.on("update", applyListStyles);
      editor.on("selectionUpdate", applyListStyles);

      return () => {
        editor.off("update", applyListStyles);
        editor.off("selectionUpdate", applyListStyles);
      };
    }
  }, [editor]);

  if (!editor) {
    return (
      <div className="rounded-lg border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-800">
        <div className="p-4">
          <div className="animate-pulse">
            <div className="mb-2 h-4 w-3/4 rounded bg-slate-200 dark:bg-slate-700"></div>
            <div className="h-4 w-1/2 rounded bg-slate-200 dark:bg-slate-700"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="notion-editor-container mx-auto max-w-6xl rounded-xl border border-slate-200 bg-white px-0 py-8 shadow-lg dark:border-slate-700 dark:bg-slate-900">
      <style
        dangerouslySetInnerHTML={{
          __html: `
          .ProseMirror {
            color: var(--foreground) !important;
            background-color: var(--card) !important;
          }
          /* Contenteditable div margins */
          .ProseMirror.notepad-content {
            margin-left: 0.5rem !important;
            margin-right: 0.5rem !important;
          }
          
          /* Lists */
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
          
          /* Typography colors - preserve alignment */
          .ProseMirror h1, .ProseMirror h2, .ProseMirror h3, 
          .ProseMirror h4, .ProseMirror h5, .ProseMirror h6,
          .ProseMirror p, .ProseMirror strong, .ProseMirror em {
            color: var(--foreground) !important;
          }
          
          /* Inline Code Styling - For selected text */
          .ProseMirror code:not(pre code) {
            color: #e11d48 !important;
            background: rgba(251, 113, 133, 0.1) !important;
            padding: 0.2em 0.4em !important;
            border-radius: 3px !important;
            font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace !important;
            font-size: 0.9em !important;
            display: inline !important;
            word-wrap: break-word !important;
            font-weight: 500 !important;
          }
          /* --- FIXED SELECTOR --- */
          .dark .ProseMirror code:not(pre code) {
            color: #60a5fa !important;
            background: rgba(96, 165, 250, 0.1) !important;
          }
          
          /* Code Block Styling - Multi-line code (wraps text, no overflow) */
          .ProseMirror pre {
            background: #f5f5f5 !important;
            border: 1px solid #e5e5e5 !important;
            border-radius: 6px !important;
            margin: 1rem 0 !important;
            padding: 1rem !important;
            position: relative !important;
            display: block !important;
            text-align: left !important;
            font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace !important;
          }
          .ProseMirror pre code {
            color: #374151 !important;
            background: transparent !important;
            padding: 0 !important;
            border: none !important;
            font-family: inherit !important;
            font-size: 0.875rem !important;
            display: block !important;
            white-space: pre-wrap !important;
            word-wrap: break-word !important;
            line-height: 1.6 !important;
          }
          /* --- FIXED SELECTOR --- */
          .dark .ProseMirror pre {
            background: #1f2937 !important;
            border-color: #374151 !important;
          }
          /* --- FIXED SELECTOR --- */
          .dark .ProseMirror pre code {
            color: #e5e7eb !important;
          }
          
          /* Blockquote Styling - Preserve alignment */
          .ProseMirror blockquote {
            border-left: 4px solid #1e40af !important;
            background: transparent !important;
            padding: 0.5rem 0 0.5rem 1.5rem !important;
            margin: 1rem 0 !important;
            border-radius: 0 !important;
            color: #111111 !important;
            position: relative !important;
            font-style: italic !important;
            display: block !important;
            font-size: 1.125rem !important;
          }
          /* --- FIXED SELECTOR --- */
          .dark .ProseMirror blockquote {
            border-left-color: #4b5563 !important;
            color: #e5e7eb !important;
          }
          
          /* Math Block Styling - Center aligned */
          .ProseMirror div[data-type="math-block"] {
            background: transparent !important;
            border: none !important;
            border-radius: 0 !important;
            padding: 0.75rem 0 !important;
            margin: 1rem 0 !important;
            position: relative !important;
            overflow: visible !important;
            display: block !important;
            text-align: center !important;
          }
          .ProseMirror div[data-type="math-block"] > * {
            color: #111111 !important;
            font-family: 'Georgia', 'Times New Roman', serif !important;
            font-size: 1.125rem !important;
          }
          /* --- FIXED SELECTOR --- */
          .dark .ProseMirror div[data-type="math-block"] > * {
            color: #e5e7eb !important;
          }
          
          /* Special Code Block Styling (Dark "Pro" Theme - Text Wrapping) */
          .ProseMirror pre[data-type="special-code"] {
            background: #1f2937 !important; /* Dark background */
            border: 1px solid #374151 !important; /* Dark border */
            border-radius: 6px !important;
            margin: 1.5rem 0 !important;
            padding: 1rem !important;
            position: relative !important;
            display: block !important;
            text-align: left !important;
          }
          .ProseMirror pre[data-type="special-code"] code {
            color: #e5e7eb !important; /* Light text */
            font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace !important;
            font-size: 0.875rem !important;
            display: block !important;
            white-space: pre-wrap !important;
            word-wrap: break-word !important;
            line-height: 1.6 !important;
            background: transparent !important;
            padding: 0 !important;
            border: none !important;
          }
          
          /* Keep the dark mode styles for the special block consistent */
          /* --- FIXED SELECTOR --- */
          .dark .ProseMirror pre[data-type="special-code"] {
            background: #1f2937 !important;
            border-color: #374151 !important;
          }
          /* --- FIXED SELECTOR --- */
          .dark .ProseMirror pre[data-type="special-code"] code {
            color: #e5e7eb !important;
          }
          
          /* Table Styling */
          .ProseMirror table {
            border-collapse: collapse !important;
            width: 100% !important;
            table-layout: auto !important;
            margin: 1rem 0 !important;
          }
          .ProseMirror table td,
          .ProseMirror table th {
            padding: 0.75rem 1rem !important;
            word-wrap: break-word !important;
            word-break: break-word !important;
            overflow-wrap: break-word !important;
            white-space: normal !important;
            vertical-align: top !important;
            border: 1px solid #d1d5db !important;
            max-width: 0 !important;
          }
          /* --- FIXED SELECTOR --- */
          .dark .ProseMirror table td,
          .dark .ProseMirror table th {
            border-color: #4b5563 !important;
          }
          
          /* Task Lists */
          .ProseMirror ul[data-type="taskList"] {
            list-style: none !important;
            padding-left: 0 !important;
            margin: 1rem 0 !important;
          }
          .ProseMirror ul[data-type="taskList"] li {
            list-style: none !important;
            margin: 0.5rem 0 !important;
            display: flex !important;
            align-items: flex-start !important;
            line-height: 1.6 !important;
          }
          .ProseMirror ul[data-type="taskList"] li > label {
            display: flex !important;
            align-items: flex-start !important;
            flex-shrink: 0 !important;
            margin-right: 0.5rem !important;
            margin-top: 0.2em !important;
            cursor: pointer !important;
            user-select: none !important;
          }
          .ProseMirror ul[data-type="taskList"] li > label input[type="checkbox"] {
            width: 1.125rem !important;
            height: 1.125rem !important;
            margin: 0 !important;
            cursor: pointer !important;
            flex-shrink: 0 !important;
          }
          .ProseMirror ul[data-type="taskList"] li > div {
            flex: 1 1 auto !important;
            min-width: 0 !important;
            display: inline !important;
          }
          .ProseMirror ul[data-type="taskList"] li > div > p {
            margin: 0 !important;
            padding: 0 !important;
            display: inline !important;
            line-height: 1.6 !important;
          }
          .ProseMirror ul[data-type="taskList"] li > div > p + p {
            margin-top: 0.5rem !important;
            display: block !important;
          }
          /* Strikethrough for checked to-do items */
          .ProseMirror ul[data-type="taskList"] li[data-checked="true"] > div,
          .ProseMirror ul[data-type="taskList"] li:has(input[type="checkbox"]:checked) > div {
            text-decoration: line-through !important;
            opacity: 0.7 !important;
          }
          .ProseMirror ul[data-type="taskList"] li[data-checked="true"] > div > p,
          .ProseMirror ul[data-type="taskList"] li:has(input[type="checkbox"]:checked) > div > p {
            text-decoration: line-through !important;
          }
        `,
        }}
      />
      <div className="sticky top-0 z-50 border-b border-slate-200 bg-[var(--card)] shadow-sm dark:border-slate-700">
        <NotepadToolbar editor={editor} />
      </div>
      <div className="relative">
        <EditorContent
          editor={editor}
          className="focus-within:ring-opacity-50 max-h-[calc(100vh-300px)] min-h-[400px] overflow-auto rounded-b-lg focus-within:ring-2 focus-within:ring-blue-500"
          style={{ scrollBehavior: "auto" }}
        />

        <div
          className="pointer-events-none absolute inset-0 flex items-center justify-center rounded-b-lg border-2 border-dashed border-blue-300 bg-blue-50 opacity-0 transition-opacity duration-200 dark:border-blue-600 dark:bg-blue-900/20"
          onDragOver={(e) => {
            e.preventDefault();
            e.currentTarget.classList.remove("opacity-0");
            e.currentTarget.classList.add("opacity-100");
          }}
          onDragLeave={(e) => {
            e.preventDefault();
            e.currentTarget.classList.remove("opacity-100");
            e.currentTarget.classList.add("opacity-0");
          }}
          onDrop={(e) => {
            e.preventDefault();
            e.currentTarget.classList.remove("opacity-100");
            e.currentTarget.classList.add("opacity-0");
          }}
        >
          <div className="text-center">
            <div className="mb-2 text-blue-600 dark:text-blue-400">
              <svg
                className="mx-auto h-12 w-12"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                />
              </svg>
            </div>
            <p className="font-medium text-blue-600 dark:text-blue-400">
              Drop image here to insert
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
