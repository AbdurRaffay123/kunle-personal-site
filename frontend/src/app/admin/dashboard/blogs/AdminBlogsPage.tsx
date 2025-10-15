/**
 * Admin Blogs Management Page
 * Updated: Uses backend APIs for CRUD operations, removes dummy data.
 */

"use client";

import { useEffect, useState } from "react";
import AdminLayout from "@/components/Admin/AdminLayout";
import AdminTable from "@/components/Admin/AdminTable";
import AdminModal from "@/components/Admin/AdminModal";
import { ConfirmDeleteModal } from "@/components/Notepad/ConfirmDeleteModal";
import {
  getBlogs,
  createBlog,
  updateBlog,
  deleteBlog as apiDeleteBlog,
} from "@/apis/Blog/api";

interface Blog {
  _id: string;
  title: string;
  description: string;
  category: string;
  link: string;
  createdAt: string;
  updatedAt: string;
}

const columns = [
  { key: "title", label: "Title" },
  { 
    key: "description", 
    label: "Description",
    render: (value: string) => (
      <span className="max-w-xs truncate block" title={value}>
        {value}
      </span>
    )
  },
  { key: "category", label: "Category" },
  { 
    key: "link", 
    label: "Link",
    render: (value: string | undefined | null) => {
      const safeValue = value || '';
      
      return (
        <a 
          href={safeValue || '#'} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 truncate max-w-xs block"
          title={safeValue}
        >
          {safeValue.length > 30 ? `${safeValue.substring(0, 30)}...` : safeValue || 'No link'}
        </a>
      );
    }
  },
  { key: "createdAt", label: "Created" },
];

export default function AdminBlogsPage() {
  // State for blogs, modal, editing, and search
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingBlog, setEditingBlog] = useState<Blog | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [deleteModal, setDeleteModal] = useState<{
    isOpen: boolean;
    blog: Blog | null;
  }>({ isOpen: false, blog: null });

  // Fetch blogs from API on mount
  useEffect(() => {
    fetchBlogs();
  }, []);

  // Fetch blogs from backend API
  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const res = await getBlogs();
      console.log(res);
      setBlogs(res.data || res);
    } catch (error) {
      // Handle error (show toast or log)
      console.error("Failed to fetch blogs:", error);
    }
    setLoading(false);
  };

  // Filter blogs by search term
  const filteredBlogs = blogs.filter(
    (blog) =>
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Edit handler
  const handleEdit = (blog: Blog) => {
    setEditingBlog(blog);
    setIsModalOpen(true);
  };

  // Delete handler - opens confirmation modal
  const handleDelete = (blog: Blog) => {
    setDeleteModal({ isOpen: true, blog });
  };

  // Confirm delete handler (calls API)
  const handleConfirmDelete = async () => {
    if (!deleteModal.blog) return;
    
    try {
      await apiDeleteBlog(deleteModal.blog._id);
      fetchBlogs();
      setDeleteModal({ isOpen: false, blog: null });
    } catch (error) {
      console.error("Failed to delete blog:", error);
    }
  };

  // Save handler (create or update)
  const handleSave = async (blogData: Partial<Blog>) => {
    try {
      const data = {
        title: blogData.title || "",
        description: blogData.description || "",
        category: blogData.category || "",
        link: blogData.link || "",
      };

      if (editingBlog) {
        await updateBlog(editingBlog._id, data);
      } else {
        await createBlog(data);
      }
      fetchBlogs();
      setIsModalOpen(false);
      setEditingBlog(null);
    } catch (error) {
      console.error("Failed to save blog:", error);
    }
  };

  return (
    <AdminLayout title="Manage Blogs">
      <div className="space-y-4 md:space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          <div className="text-center md:text-left">
            <h2 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-white">
              Blog Posts
            </h2>
            <p className="text-sm md:text-base" style={{ color: 'var(--text-primary)' }}>
              Manage your blog posts and articles
            </p>
          </div>
          <button
            onClick={() => {
              setEditingBlog(null);
              setIsModalOpen(true);
            }}
            className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-all duration-200 font-medium cursor-pointer hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800"
          >
            <span className="md:hidden">+ Add New Blog</span>
            <span className="hidden md:inline">Add New Blog</span>
          </button>
        </div>

        {/* Search */}
        <div className="p-3 md:p-4 rounded-lg shadow-md" style={{ backgroundColor: 'var(--search-bg)' }}>
          <input
            type="text"
            placeholder="Search blogs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
          data={filteredBlogs}
          onEdit={handleEdit}
          onDelete={handleDelete}
          loading={loading}
        />

        {/* Modal */}
        <AdminModal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setEditingBlog(null);
          }}
          title={editingBlog ? "Edit Blog" : "Add New Blog"}
        >
          <BlogForm
            blog={editingBlog}
            onSave={handleSave}
            onCancel={() => {
              setIsModalOpen(false);
              setEditingBlog(null);
            }}
          />
        </AdminModal>

        {/* Delete Confirmation Modal */}
        <ConfirmDeleteModal
          isOpen={deleteModal.isOpen}
          onClose={() => setDeleteModal({ isOpen: false, blog: null })}
          onConfirm={handleConfirmDelete}
          title="Delete Blog Post"
          message="Are you sure you want to delete this blog post? This action cannot be undone."
          itemName={deleteModal.blog?.title}
        />
      </div>
    </AdminLayout>
  );
}

/**
 * BlogForm component
 * Handles both create and update for external blog links.
 */
function BlogForm({
  blog,
  onSave,
  onCancel,
}: {
  blog: Blog | null;
  onSave: (data: Partial<Blog>) => void;
  onCancel: () => void;
}) {
  const [formData, setFormData] = useState({
    title: blog?.title || "",
    description: blog?.description || "",
    category: blog?.category || "",
    link: blog?.link || "",
  });

  // Submit handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
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
          onChange={(e) =>
            setFormData({ ...formData, title: e.target.value })
          }
          className="w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
          rows={3}
          className="w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
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
          onChange={(e) =>
            setFormData({ ...formData, category: e.target.value })
          }
          className="w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
          External Link
        </label>
        <input
          type="url"
          value={formData.link}
          onChange={(e) =>
            setFormData({ ...formData, link: e.target.value })
          }
          className="w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          style={{ 
            backgroundColor: 'var(--card)', 
            color: 'var(--foreground)', 
            borderColor: 'var(--border)' 
          }}
          placeholder="https://example.com/blog-post"
          required
        />
        <p className="text-xs md:text-sm mt-1" style={{ color: 'var(--text-primary)' }}>
          The URL where the blog post is hosted externally
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-end gap-3 pt-4">
        <button
          type="button"
          onClick={onCancel}
          className="w-full md:w-auto px-4 py-2 text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition-all duration-200 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800 cursor-pointer"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 hover:shadow-lg hover:scale-105 text-white px-4 py-2 rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800 cursor-pointer"
        >
          {blog ? "Update" : "Create"}
        </button>
      </div>
    </form>
  );
}
