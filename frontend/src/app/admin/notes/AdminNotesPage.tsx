/**
 * Admin Notes Management Page
 */

"use client";

import { useState } from "react";
import AdminLayout from "@/components/Admin/AdminLayout";
import AdminTable from "@/components/Admin/AdminTable";
import AdminModal from "@/components/Admin/AdminModal";

interface Note {
  id: number;
  title: string;
  slug: string;
  topic: string;
  status: "published" | "draft";
  createdAt: string;
  tags: string[];
}

export default function AdminNotesPage() {
  const [notes, setNotes] = useState<Note[]>([
    {
      id: 1,
      title: "Introduction to Transformers",
      slug: "intro-to-transformers",
      topic: "Machine Learning",
      status: "published",
      createdAt: "2024-01-10",
      tags: ["AI", "NLP", "Transformers"],
    },
    {
      id: 2,
      title: "Advanced Python Techniques",
      slug: "advanced-python",
      topic: "Programming",
      status: "draft",
      createdAt: "2024-01-18",
      tags: ["Python", "Programming"],
    },
    {
      id: 3,
      title: "Data Visualization Best Practices",
      slug: "data-visualization",
      topic: "Data Science",
      status: "published",
      createdAt: "2024-01-22",
      tags: ["Data Science", "Visualization"],
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingNote, setEditingNote] = useState<Note | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const columns = [
    { key: "title", label: "Title" },
    { key: "topic", label: "Topic" },
    { 
      key: "status", 
      label: "Status",
      render: (value: string) => (
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
          value === "published" 
            ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
            : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
        }`}>
          {value}
        </span>
      )
    },
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

  const handleDelete = (note: Note) => {
    if (confirm(`Are you sure you want to delete "${note.title}"?`)) {
      setNotes(notes.filter(n => n.id !== note.id));
    }
  };

  const handleSave = (noteData: Partial<Note>) => {
    if (editingNote) {
      setNotes(notes.map(note => 
        note.id === editingNote.id ? { ...note, ...noteData } : note
      ));
    } else {
      const newNote: Note = {
        id: Math.max(...notes.map(n => n.id)) + 1,
        title: noteData.title || "",
        slug: noteData.slug || "",
        topic: noteData.topic || "",
        status: noteData.status || "draft",
        createdAt: new Date().toISOString().split('T')[0],
        tags: noteData.tags || [],
      };
      setNotes([...notes, newNote]);
    }
    setIsModalOpen(false);
    setEditingNote(null);
  };

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
    slug: note?.slug || "",
    topic: note?.topic || "",
    status: note?.status || "draft",
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
          Slug
        </label>
        <input
          type="text"
          value={formData.slug}
          onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
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

      <div>
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
          Status
        </label>
        <select
          value={formData.status}
          onChange={(e) => setFormData({ ...formData, status: e.target.value as "published" | "draft" })}
          className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="draft">Draft</option>
          <option value="published">Published</option>
        </select>
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
