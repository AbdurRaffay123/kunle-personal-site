/**
 * Admin Blog Management Page
 */

"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import AdminLayout from "@/components/Admin/AdminLayout";
import AdminTable from "@/components/Admin/AdminTable";
import AdminModal from "@/components/Admin/AdminModal";
import DeleteConfirmModal from "@/components/Admin/DeleteConfirmModal";
import { NotepadEditor } from "@/components/Notepad/NotepadEditor";
import { createBlog, updateBlog, deleteBlog, getBlogs } from "@/apis/Blog/api";
import { BlogMeta } from "@/types";
import { useAuth } from "@/contexts/AuthContext";
import toast from "react-hot-toast";

interface Blog {
  _id: string;
  title: string;
  description: string;
  category: string;
  createdAt: string;
  updatedAt: string;
  tags: string[];
  content?: string; // Rich text content from NotepadEditor
}

export default function AdminBlogPage() {
  const router = useRouter();
  const { isAuthenticated } = useAuth();
  const [isEditorMode, setIsEditorMode] = useState(false);
  const [currentBlog, setCurrentBlog] = useState<Blog | null>(null);
  const [editorContent, setEditorContent] = useState<string>('');
  const [isAutoSaving, setIsAutoSaving] = useState(false);
  const [loading, setLoading] = useState(true);
  const autoSaveTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [blogs, setBlogs] = useState<Blog[]>([]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingBlog, setEditingBlog] = useState<Blog | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [blogToDelete, setBlogToDelete] = useState<Blog | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  // Load blogs from backend
  useEffect(() => {
    const loadBlogs = async () => {
      if (!isAuthenticated) return;
      
      try {
        setLoading(true);
        const fetchedBlogs = await getBlogs();
        setBlogs(Array.isArray(fetchedBlogs) ? fetchedBlogs : []);
      } catch (error) {
        console.error('Error loading blogs:', error);
        toast.error('Failed to load blogs');
      } finally {
        setLoading(false);
      }
    };

    loadBlogs();
  }, [isAuthenticated]);

  const columns = [
    { key: "title", label: "Title" },
    { key: "category", label: "Category" },
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

  const filteredBlogs = blogs.filter(blog =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const handleEdit = (blog: Blog) => {
    setEditingBlog(blog);
    setIsModalOpen(true);
  };

  const handleEditContent = (blog: Blog) => {
    setCurrentBlog(blog);
    setEditorContent(blog.content || '');
    setIsEditorMode(true);
  };

  const handleDelete = (blog: Blog) => {
    setBlogToDelete(blog);
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = async () => {
    if (!isAuthenticated || !blogToDelete) {
      toast.error('Authentication required');
      return;
    }

    try {
      setIsDeleting(true);
      await deleteBlog(blogToDelete._id);
      setBlogs(blogs.filter(b => b._id !== blogToDelete._id));
      toast.success('Blog deleted successfully');
      setIsDeleteModalOpen(false);
      setBlogToDelete(null);
    } catch (error) {
      console.error('Error deleting blog:', error);
      toast.error('Failed to delete blog');
    } finally {
      setIsDeleting(false);
    }
  };

  const cancelDelete = () => {
    setIsDeleteModalOpen(false);
    setBlogToDelete(null);
  };

  const handleSave = async (blogData: Partial<Blog>) => {
    if (!isAuthenticated) {
      toast.error('Authentication required');
      return;
    }

    if (editingBlog) {
      // For editing existing blogs, save directly
      try {
        const updatedBlog = await updateBlog(editingBlog._id, blogData);
        setBlogs(blogs.map(blog => 
          blog._id === editingBlog._id ? updatedBlog.data || updatedBlog : blog
        ));
        setIsModalOpen(false);
        setEditingBlog(null);
        toast.success('Blog updated successfully');
      } catch (error) {
        console.error('Error updating blog:', error);
        toast.error('Failed to update blog');
      }
    } else {
      // For new blogs, create the blog and show editor
      const newBlog: Blog = {
        _id: 'temp-' + Math.random().toString(36).substr(2, 9), // Temporary ID
        title: blogData.title || "",
        description: blogData.description || "",
        category: blogData.category || "",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        tags: blogData.tags || [],
      };
      setCurrentBlog(newBlog);
      setIsModalOpen(false);
      setIsEditorMode(true);
    }
  };

  const handleEditorSave = async () => {
    if (!currentBlog || !isAuthenticated) return;

    try {
      if (currentBlog._id.startsWith('temp-')) {
        // Create new blog
        const newBlog = await createBlog({
          title: currentBlog.title,
          description: currentBlog.description,
          category: currentBlog.category,
          content: editorContent,
          tags: currentBlog.tags,
          fileType: 'text'
        });
        
        setBlogs([newBlog.data || newBlog, ...blogs]);
        toast.success('Blog created successfully');
      } else {
        // Update existing blog
        const updatedBlog = await updateBlog(currentBlog._id, {
          content: editorContent
        });
        
        setBlogs(blogs.map(blog => 
          blog._id === currentBlog._id ? updatedBlog.data || updatedBlog : blog
        ));
        toast.success('Blog updated successfully');
      }
      
      setIsEditorMode(false);
      setCurrentBlog(null);
      setEditorContent('');
    } catch (error: any) {
      console.error('Error saving blog:', error);
      toast.error(error.response?.data?.message || 'Failed to save blog');
    }
  };

  const handleEditorCancel = () => {
    setIsEditorMode(false);
    setCurrentBlog(null);
    setEditorContent('');
  };

  // Auto-save functionality
  const autoSave = async (content: string) => {
    if (!currentBlog || !content.trim() || currentBlog._id.startsWith('temp-')) return;
    
    setIsAutoSaving(true);
    try {
      // Actually save to backend
      await updateBlog(currentBlog._id, { content });
      console.log('Auto-saved content for blog:', currentBlog.title);
    } catch (error) {
      console.error('Auto-save failed:', error);
    } finally {
      setIsAutoSaving(false);
    }
  };

  // Debounced auto-save effect
  useEffect(() => {
    if (autoSaveTimeoutRef.current) {
      clearTimeout(autoSaveTimeoutRef.current);
    }

    if (editorContent && isEditorMode) {
      autoSaveTimeoutRef.current = setTimeout(() => {
        autoSave(editorContent);
      }, 2000); // Auto-save after 2 seconds of inactivity
    }

    return () => {
      if (autoSaveTimeoutRef.current) {
        clearTimeout(autoSaveTimeoutRef.current);
      }
    };
  }, [editorContent, isEditorMode]);

  // Show editor mode if active
  if (isEditorMode && currentBlog) {
    const isEditingExisting = !currentBlog._id.startsWith('temp-');
    return (
      <AdminLayout title={isEditingExisting ? "Edit Blog Content" : "Create New Blog"}>
        <div className="space-y-6">
          {/* Back Button - Navigate to Blogs List */}
          <div className="flex justify-start">
            <button
              onClick={() => {
                setIsEditorMode(false);
                setCurrentBlog(null);
                setEditorContent('');
              }}
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800 transition-colors"
            >
              <ArrowLeftIcon className="w-4 h-4 mr-2" />
              Back to Blogs List
            </button>
          </div>
          
          {/* Editor Header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                {currentBlog.title}
              </h1>
              <p className="text-slate-600 dark:text-slate-400 mt-1">
                Category: {currentBlog.category} • {currentBlog.tags.length > 0 && `Tags: ${currentBlog.tags.join(', ')}`}
              </p>
            </div>
            <div className="flex items-center space-x-3">
              {/* Auto-save indicator */}
              {isAutoSaving && (
                <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600 mr-2"></div>
                  Auto-saving...
                </div>
              )}
              {!isAutoSaving && editorContent && (
                <div className="text-sm text-green-600 dark:text-green-400">
                  ✓ Auto-saved
                </div>
              )}
              
              <button
                onClick={handleEditorCancel}
                className="px-4 py-2 text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition-all duration-200 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800 cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={handleEditorSave}
                className="bg-blue-600 hover:bg-blue-700 hover:shadow-lg hover:scale-105 text-white px-4 py-2 rounded-md transition-all duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800 cursor-pointer"
              >
                Save & Finish
              </button>
            </div>
          </div>

          {/* Notepad Editor */}
          <NotepadEditor 
            content={editorContent}
            placeholder="Start writing your blog content..."
            onChange={(content) => {
              setEditorContent(content);
            }}
          />
        </div>
      </AdminLayout>
    );
  }

  if (loading) {
    return (
      <AdminLayout title="Manage Blogs">
        <div className="space-y-6">
          <div className="flex items-center justify-center py-20">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <p className="text-slate-600 dark:text-slate-400">Loading blogs...</p>
            </div>
          </div>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout title="Manage Blogs">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
              Blog Management
            </h2>
            <p style={{ color: 'var(--text-primary)' }}>
              Manage your blog posts and articles
            </p>
          </div>
          <button
            onClick={() => {
              setEditingBlog(null);
              setIsModalOpen(true);
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-all duration-200 font-medium cursor-pointer hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800"
          >
            Add New Blog
          </button>
        </div>

        {/* Search */}
        <div className="p-4 rounded-lg shadow-md" style={{ backgroundColor: 'var(--search-bg)' }}>
          <input
            type="text"
            placeholder="Search blogs..."
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
          data={filteredBlogs}
          onEdit={handleEdit}
          onDelete={handleDelete}
          customActions={[
            {
              label: "Edit Content",
              onClick: handleEditContent
            }
          ]}
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
        <DeleteConfirmModal
          isOpen={isDeleteModalOpen}
          onClose={cancelDelete}
          onConfirm={confirmDelete}
          title="Delete Blog"
          message="Are you sure you want to delete this blog?"
          itemName={blogToDelete?.title}
          isDeleting={isDeleting}
        />
      </div>
    </AdminLayout>
  );
}

// Blog Form Component
function BlogForm({ 
  blog, 
  onSave, 
  onCancel 
}: { 
  blog: Blog | null; 
  onSave: (data: Partial<Blog>) => void; 
  onCancel: () => void; 
}) {
  const [formData, setFormData] = useState({
    title: blog?.title || "",
    description: blog?.description || "",
    category: blog?.category || "",
    tags: blog?.tags || [],
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
        <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-primary)' }}>
          Title
        </label>
        <input
          type="text"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
          className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          style={{
            backgroundColor: 'var(--card)',
            color: 'var(--foreground)',
            borderColor: 'var(--border)'
          }}
          rows={3}
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
          className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
            className="flex-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            style={{
              backgroundColor: 'var(--card)',
              color: 'var(--foreground)',
              borderColor: 'var(--border)'
            }}
          />
          <button
            type="button"
            onClick={addTag}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 hover:shadow-lg hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800 cursor-pointer"
          >
            Add
          </button>
        </div>
      </div>

      <div className="flex justify-end space-x-3 pt-4">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition-all duration-200 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800 cursor-pointer"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 hover:shadow-lg hover:scale-105 text-white px-4 py-2 rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800 cursor-pointer"
        >
          {blog ? "Update" : "Create"}
        </button>
      </div>
    </form>
  );
}
