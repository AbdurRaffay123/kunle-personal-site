"use client";

import { useState } from "react";
import AdminLayout from "@/components/Admin/AdminLayout";
import AdminTable from "@/components/Admin/AdminTable";
import AdminModal from "@/components/Admin/AdminModal";
import { createResearch } from "@/apis/Research/api";
import type { CreateResearchRequest } from "@/apis/Research/api";

interface Research {
  id: number;
  title: string;
  description: string;
  category: string;
  link: string;
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
      link: "https://arxiv.org/abs/2301.12345",
      authors: ["Olukunle O.", "Dr. Smith"],
      createdAt: "2024-01-08",
      tags: ["Deep Learning", "Neural Networks", "AI"],
    },
    {
      id: 2,
      title: "Quantum Computing Applications in ML",
      description: "Exploring quantum computing applications in machine learning algorithms",
      category: "Quantum Computing",
      link: "https://journals.nature.com/articles/quantum-ml-2024",
      authors: ["Olukunle O.", "Dr. Johnson"],
      createdAt: "2024-01-15",
      tags: ["Quantum Computing", "Machine Learning", "Algorithms"],
    },
    {
      id: 3,
      title: "Ethical AI in Healthcare",
      description: "Research on ethical considerations in AI applications for healthcare",
      category: "Ethics",
      link: "https://www.researchgate.net/publication/ethical-ai-healthcare",
      authors: ["Olukunle O.", "Dr. Brown"],
      createdAt: "2024-01-28",
      tags: ["Ethics", "Healthcare", "AI"],
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingResearch, setEditingResearch] = useState<Research | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const columns = [
    { key: "title", label: "Title" },
    { key: "category", label: "Category" },
    { 
      key: "link", 
      label: "Link",
      render: (value: string) => (
        <a 
          href={value} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm underline"
        >
          View Research
        </a>
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

  const handleSave = async (researchData: Partial<Research>) => {
    if (editingResearch) {
      // Update functionality - keeping existing logic for now
      setResearch(research.map(item => 
        item.id === editingResearch.id ? { ...item, ...researchData } : item
      ));
      setIsModalOpen(false);
      setEditingResearch(null);
    } else {
      // Create new research using API
      setIsLoading(true);
      try {
        const newResearchData: CreateResearchRequest = {
          title: researchData.title || "",
          description: researchData.description || "",
          category: researchData.category || "",
          researchLink: researchData.link || "",
          authors: researchData.authors || [],
          tags: researchData.tags || [],
        };

        const response = await createResearch(newResearchData);
        
        if (response.success) {
          // Convert API response to local Research format
          const newResearch: Research = {
            id: parseInt(response.data._id) || Math.max(...research.map(r => r.id)) + 1,
            title: response.data.title,
            description: response.data.description,
            category: response.data.category,
            link: response.data.researchLink,
            authors: response.data.authors,
            createdAt: response.data.createdAt.split('T')[0],
            tags: response.data.tags,
          };

          setResearch([newResearch, ...research]); // Add to beginning of array
          setIsModalOpen(false);
          setEditingResearch(null);
          
          // Show success message
          alert('Research created successfully!');
        }
      } catch (error: any) {
        console.error('Error creating research:', error);
        alert(error.message || 'Failed to create research. Please try again.');
      } finally {
        setIsLoading(false);
      }
    }
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
            disabled={isLoading}
            className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed text-white px-4 py-2 rounded-md transition-colors font-medium cursor-pointer hover:scale-105"
          >
            {isLoading ? 'Creating...' : 'Add New Research'}
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
            isLoading={isLoading}
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
  onCancel,
  isLoading = false
}: { 
  research: Research | null; 
  onSave: (data: Partial<Research>) => void; 
  onCancel: () => void;
  isLoading?: boolean;
}) {
  const [formData, setFormData] = useState({
    title: research?.title || "",
    description: research?.description || "",
    category: research?.category || "",
    link: research?.link || "",
    authors: research?.authors || [],
    tags: research?.tags || [],
  });

  const [authorInput, setAuthorInput] = useState("");
  const [tagInput, setTagInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLoading) return;
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
          disabled={isLoading}
          className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-slate-100 dark:disabled:bg-slate-700 disabled:cursor-not-allowed"
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
          disabled={isLoading}
          rows={3}
          className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-slate-100 dark:disabled:bg-slate-700 disabled:cursor-not-allowed"
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
          disabled={isLoading}
          className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-slate-100 dark:disabled:bg-slate-700 disabled:cursor-not-allowed"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
          Research Link
        </label>
        <input
          type="url"
          value={formData.link}
          onChange={(e) => setFormData({ ...formData, link: e.target.value })}
          disabled={isLoading}
          placeholder="https://example.com/research-paper"
          className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-slate-100 dark:disabled:bg-slate-700 disabled:cursor-not-allowed"
          required
        />
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
          Enter the URL to your research paper, publication, or project repository
        </p>
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
                disabled={isLoading}
                className="ml-2 text-green-600 hover:text-green-800 dark:text-green-200 dark:hover:text-green-100 disabled:cursor-not-allowed"
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
            disabled={isLoading}
            placeholder="Add an author..."
            className="flex-1 px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-slate-100 dark:disabled:bg-slate-700 disabled:cursor-not-allowed"
          />
          <button
            type="button"
            onClick={addAuthor}
            disabled={isLoading}
            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors disabled:bg-green-400 disabled:cursor-not-allowed"
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
                disabled={isLoading}
                className="ml-2 text-purple-600 hover:text-purple-800 dark:text-purple-200 dark:hover:text-purple-100 disabled:cursor-not-allowed"
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
            disabled={isLoading}
            placeholder="Add a tag..."
            className="flex-1 px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-slate-100 dark:disabled:bg-slate-700 disabled:cursor-not-allowed"
          />
          <button
            type="button"
            onClick={addTag}
            disabled={isLoading}
            className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors disabled:bg-purple-400 disabled:cursor-not-allowed"
          >
            Add
          </button>
        </div>
      </div>

      <div className="flex justify-end space-x-3 pt-4">
        <button
          type="button"
          onClick={onCancel}
          disabled={isLoading}
          className="px-4 py-2 text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition-colors disabled:cursor-not-allowed"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={isLoading}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors disabled:bg-blue-400 disabled:cursor-not-allowed flex items-center gap-2"
        >
          {isLoading && (
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
          )}
          {research ? "Update" : isLoading ? "Creating..." : "Create"}
        </button>
      </div>
    </form>
  );
}
