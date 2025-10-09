/**
 * Admin Research Management Page
 */

"use client";

import { useState } from "react";
import AdminLayout from "@/components/Admin/AdminLayout";
import AdminTable from "@/components/Admin/AdminTable";
import AdminModal from "@/components/Admin/AdminModal";

interface Research {
  id: number;
  title: string;
  description: string;
  category: string;
  status: "ongoing" | "completed" | "published";
  authors: string[];
  createdAt: string;
  tags: string[];
}

export default function AdminResearchPage() {
  const [research, setResearch] = useState<Research[]>([
    {
      id: 1,
      title: "Advanced Neural Network Architectures",
      description: "Research on novel neural network architectures for improved performance",
      category: "Machine Learning",
      status: "ongoing",
      authors: ["Olukunle O.", "Dr. Smith"],
      createdAt: "2024-01-08",
      tags: ["Deep Learning", "Neural Networks", "AI"],
    },
    {
      id: 2,
      title: "Quantum Computing Applications in ML",
      description: "Exploring quantum computing applications in machine learning algorithms",
      category: "Quantum Computing",
      status: "completed",
      authors: ["Olukunle O.", "Dr. Johnson"],
      createdAt: "2024-01-15",
      tags: ["Quantum Computing", "Machine Learning", "Algorithms"],
    },
    {
      id: 3,
      title: "Ethical AI in Healthcare",
      description: "Research on ethical considerations in AI applications for healthcare",
      category: "Ethics",
      status: "published",
      authors: ["Olukunle O.", "Dr. Brown"],
      createdAt: "2024-01-28",
      tags: ["Ethics", "Healthcare", "AI"],
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingResearch, setEditingResearch] = useState<Research | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const columns = [
    { key: "title", label: "Title" },
    { key: "category", label: "Category" },
    { 
      key: "status", 
      label: "Status",
      render: (value: string) => (
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
          value === "published" 
            ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
            : value === "completed"
            ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
            : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
        }`}>
          {value}
        </span>
      )
    },
    { 
      key: "authors", 
      label: "Authors",
      render: (authors: string[]) => (
        <div className="text-sm">
          {authors.join(", ")}
        </div>
      )
    },
    { 
      key: "tags", 
      label: "Tags",
      render: (tags: string[]) => (
        <div className="flex flex-wrap gap-1">
          {tags.slice(0, 2).map((tag, index) => (
            <span key={index} className="px-2 py-1 bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 text-xs rounded-full">
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

  const filteredResearch = research.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const handleEdit = (item: Research) => {
    setEditingResearch(item);
    setIsModalOpen(true);
  };

  const handleDelete = (item: Research) => {
    if (confirm(`Are you sure you want to delete "${item.title}"?`)) {
      setResearch(research.filter(r => r.id !== item.id));
    }
  };

  const handleSave = (researchData: Partial<Research>) => {
    if (editingResearch) {
      setResearch(research.map(item => 
        item.id === editingResearch.id ? { ...item, ...researchData } : item
      ));
    } else {
      const newResearch: Research = {
        id: Math.max(...research.map(r => r.id)) + 1,
        title: researchData.title || "",
        description: researchData.description || "",
        category: researchData.category || "",
        status: researchData.status || "ongoing",
        authors: researchData.authors || [],
        createdAt: new Date().toISOString().split('T')[0],
        tags: researchData.tags || [],
      };
      setResearch([...research, newResearch]);
    }
    setIsModalOpen(false);
    setEditingResearch(null);
  };

  return (
    <AdminLayout title="Manage Research">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
              Research
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              Manage your research projects and publications
            </p>
          </div>
          <button
            onClick={() => {
              setEditingResearch(null);
              setIsModalOpen(true);
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors font-medium cursor-pointer hover:scale-105"
          >
            Add New Research
          </button>
        </div>

        {/* Search */}
        <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-md">
          <input
            type="text"
            placeholder="Search research..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Table */}
        <AdminTable
          columns={columns}
          data={filteredResearch}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />

        {/* Modal */}
        <AdminModal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setEditingResearch(null);
          }}
          title={editingResearch ? "Edit Research" : "Add New Research"}
        >
          <ResearchForm
            research={editingResearch}
            onSave={handleSave}
            onCancel={() => {
              setIsModalOpen(false);
              setEditingResearch(null);
            }}
          />
        </AdminModal>
      </div>
    </AdminLayout>
  );
}

// Research Form Component
function ResearchForm({ 
  research, 
  onSave, 
  onCancel 
}: { 
  research: Research | null; 
  onSave: (data: Partial<Research>) => void; 
  onCancel: () => void; 
}) {
  const [formData, setFormData] = useState({
    title: research?.title || "",
    description: research?.description || "",
    category: research?.category || "",
    status: research?.status || "ongoing",
    authors: research?.authors || [],
    tags: research?.tags || [],
  });

  const [authorInput, setAuthorInput] = useState("");
  const [tagInput, setTagInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  const addAuthor = () => {
    if (authorInput.trim() && !formData.authors.includes(authorInput.trim())) {
      setFormData({
        ...formData,
        authors: [...formData.authors, authorInput.trim()]
      });
      setAuthorInput("");
    }
  };

  const removeAuthor = (authorToRemove: string) => {
    setFormData({
      ...formData,
      authors: formData.authors.filter(author => author !== authorToRemove)
    });
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
          Description
        </label>
        <textarea
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          rows={3}
          className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
          Category
        </label>
        <input
          type="text"
          value={formData.category}
          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
          className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
          Status
        </label>
        <select
          value={formData.status}
          onChange={(e) => setFormData({ ...formData, status: e.target.value as "ongoing" | "completed" | "published" })}
          className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="ongoing">Ongoing</option>
          <option value="completed">Completed</option>
          <option value="published">Published</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
          Authors
        </label>
        <div className="flex flex-wrap gap-2 mb-2">
          {formData.authors.map((author, index) => (
            <span
              key={index}
              className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 text-sm rounded-full"
            >
              {author}
              <button
                type="button"
                onClick={() => removeAuthor(author)}
                className="ml-2 text-green-600 hover:text-green-800 dark:text-green-200 dark:hover:text-green-100"
              >
                ×
              </button>
            </span>
          ))}
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            value={authorInput}
            onChange={(e) => setAuthorInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addAuthor())}
            placeholder="Add an author..."
            className="flex-1 px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button
            type="button"
            onClick={addAuthor}
            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
          >
            Add
          </button>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
          Tags
        </label>
        <div className="flex flex-wrap gap-2 mb-2">
          {formData.tags.map((tag, index) => (
            <span
              key={index}
              className="inline-flex items-center px-3 py-1 bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 text-sm rounded-full"
            >
              {tag}
              <button
                type="button"
                onClick={() => removeTag(tag)}
                className="ml-2 text-purple-600 hover:text-purple-800 dark:text-purple-200 dark:hover:text-purple-100"
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
            className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
          >
            Add
          </button>
        </div>
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
          {research ? "Update" : "Create"}
        </button>
      </div>
    </form>
  );
}
