"use client";

import { useState, useEffect } from "react";
import { Toaster, toast } from "react-hot-toast";
import AdminLayout from "@/components/Admin/AdminLayout";
import AdminTable from "@/components/Admin/AdminTable";
import AdminModal from "@/components/Admin/AdminModal";
import DeleteConfirmModal from "@/components/Admin/DeleteConfirmModal";
import { createResearch, getAllResearch, updateResearch, deleteResearch } from "@/apis/Research/api";
import type { CreateResearchRequest } from "@/apis/Research/api";

interface Research {
  id: string; // Use string, not number
  title: string;
  description: string;
  category: string;
  link: string;
  createdAt: string;
  tags: string[];
}

export default function AdminResearchPage() {
  // Start with an empty array
  const [research, setResearch] = useState<Research[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingResearch, setEditingResearch] = useState<Research | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [researchToDelete, setResearchToDelete] = useState<Research | null>(null);

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

  // Fetch all research on mount
  useEffect(() => {
    fetchResearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchResearch = async () => {
    setIsLoading(true);
    try {
      const response = await getAllResearch();
      if (response.success) {
        const fetchedResearch: Research[] = response.data.map((item: any) => ({
          id: item._id, // Use string, not parseInt
          title: item.title,
          description: item.description,
          category: item.category,
          link: item.researchLink,
          createdAt: item.createdAt.split('T')[0],
          tags: item.tags,
        }));
        setResearch(fetchedResearch);
      }
    } catch (error) {
      console.error('Error fetching research:', error);
      toast.error('Failed to fetch research. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleEdit = (item: Research) => {
    setEditingResearch(item);
    setIsModalOpen(true);
  };

  const handleDelete = (item: Research) => {
    setResearchToDelete(item);
    setDeleteModalOpen(true);
  };

  const handleSave = async (researchData: Partial<Research>) => {
    setIsLoading(true);
    try {
      if (editingResearch) {
        // Update existing research
        const updateData = {
          title: researchData.title || "",
          description: researchData.description || "",
          category: researchData.category || "",
          researchLink: researchData.link || "",
          tags: researchData.tags || [],
        };
        const response = await updateResearch(editingResearch.id.toString(), updateData);
        if (response.success) {
          toast.success('Research updated successfully!');
          fetchResearch();
        } else {
          toast.error(response.message || 'Failed to update research.');
        }
        setIsModalOpen(false);
        setEditingResearch(null);
      } else {
        // Create new research
        const newResearchData: CreateResearchRequest = {
          title: researchData.title || "",
          description: researchData.description || "",
          category: researchData.category || "",
          researchLink: researchData.link || "",
          tags: researchData.tags || [],
        };
        const response = await createResearch(newResearchData);
        if (response.success) {
          toast.success('Research created successfully!');
          fetchResearch();
        } else {
          toast.error(response.message || 'Failed to create research.');
        }
        setIsModalOpen(false);
        setEditingResearch(null);
      }
    } catch (error: any) {
      toast.error(error.message || 'Failed to save research. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const confirmDelete = async () => {
    if (!researchToDelete) return;
    setIsLoading(true);
    try {
      const response = await deleteResearch(researchToDelete.id);
      if (response.success) {
        toast.success('Research deleted successfully!');
        fetchResearch();
      } else {
        toast.error(response.message || 'Failed to delete research.');
      }
    } catch (error: any) {
      toast.error(error.message || 'Failed to delete research.');
    } finally {
      setIsLoading(false);
      setDeleteModalOpen(false);
      setResearchToDelete(null);
    }
  };

  return (
    <AdminLayout title="Manage Research">
      <Toaster position="top-right" />
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
              Research
            </h2>
            <p style={{ color: 'var(--text-primary)' }}>
              Manage your research projects and publications
            </p>
          </div>
          <button
            onClick={() => {
              setEditingResearch(null);
              setIsModalOpen(true);
            }}
            disabled={isLoading}
            className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed text-white px-4 py-2 rounded-md transition-all duration-200 font-medium cursor-pointer hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800"
          >
            {isLoading ? 'Creating...' : 'Add New Research'}
          </button>
        </div>

        {/* Search */}
        <div className="p-4 rounded-lg shadow-md" style={{ backgroundColor: 'var(--search-bg)' }}>
          <input
            type="text"
            placeholder="Search research..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            style={{
              backgroundColor: 'var(--card)',
              borderColor: 'var(--search-border)',
              color: 'var(--search-text)'
            }}
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

        {/* Delete Confirmation Modal */}
        <DeleteConfirmModal
          isOpen={deleteModalOpen}
          onClose={() => {
            setDeleteModalOpen(false);
            setResearchToDelete(null);
          }}
          onConfirm={confirmDelete}
          title="Delete Research"
          message="Are you sure you want to delete this research? This action cannot be undone."
          itemName={researchToDelete?.title}
          isDeleting={isLoading}
        />
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
    tags: research?.tags || [],
  });

  const [tagInput, setTagInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLoading) return;
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
        <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-primary)' }}>
          Title
        </label>
        <input
          type="text"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          disabled={isLoading}
          className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:cursor-not-allowed"
          style={{
            backgroundColor: 'var(--card)',
            color: 'var(--foreground)',
            borderColor: 'var(--border)'
          }}
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-primary)' }}>
          Description
        </label>
        <textarea
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          disabled={isLoading}
          rows={3}
          className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:cursor-not-allowed"
          style={{
            backgroundColor: 'var(--card)',
            color: 'var(--foreground)',
            borderColor: 'var(--border)'
          }}
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-primary)' }}>
          Category
        </label>
        <input
          type="text"
          value={formData.category}
          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
          disabled={isLoading}
          className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:cursor-not-allowed"
          style={{
            backgroundColor: 'var(--card)',
            color: 'var(--foreground)',
            borderColor: 'var(--border)'
          }}
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-primary)' }}>
          Research Link
        </label>
        <input
          type="url"
          value={formData.link}
          onChange={(e) => setFormData({ ...formData, link: e.target.value })}
          disabled={isLoading}
          placeholder="https://example.com/research-paper"
          className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:cursor-not-allowed"
          style={{
            backgroundColor: 'var(--card)',
            color: 'var(--foreground)',
            borderColor: 'var(--border)'
          }}
          required
        />
        <p className="text-xs mt-1" style={{ color: 'var(--text-secondary)' }}>
          Enter the URL to your research paper, publication, or project repository
        </p>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-primary)' }}>
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
            className="flex-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:cursor-not-allowed"
            style={{
              backgroundColor: 'var(--card)',
              color: 'var(--foreground)',
              borderColor: 'var(--border)'
            }}
          />
          <button
            type="button"
            onClick={addTag}
            disabled={isLoading}
            className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 hover:shadow-lg hover:scale-105 transition-all duration-200 disabled:bg-purple-400 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800 cursor-pointer"
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
          className="px-4 py-2 text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition-all duration-200 disabled:cursor-not-allowed rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800 cursor-pointer"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={isLoading}
          className="bg-blue-600 hover:bg-blue-700 hover:shadow-lg hover:scale-105 text-white px-4 py-2 rounded-md transition-all duration-200 disabled:bg-blue-400 disabled:cursor-not-allowed flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800 cursor-pointer"
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
