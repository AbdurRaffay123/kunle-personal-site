/**
 * Admin Blogs Management Page
 */

"use client";

import { useState } from "react";
import AdminLayout from "@/components/Admin/AdminLayout";
import AdminTable from "@/components/Admin/AdminTable";
import AdminModal from "@/components/Admin/AdminModal";

interface Blog {
  id: number;
  title: string;
  slug: string;
  status: "published" | "draft";
  createdAt: string;
  author: string;
  views: number;
}

export default function AdminBlogsPage() {
  const [blogs, setBlogs] = useState<Blog[]>([
    {
      id: 1,
      title: "Introduction to Machine Learning",
      slug: "intro-to-ml",
      status: "published",
      createdAt: "2024-01-15",
      author: "Olukunle O.",
      views: 1250,
    },
    {
      id: 2,
      title: "Advanced Deep Learning Techniques",
      slug: "advanced-deep-learning",
      status: "draft",
      createdAt: "2024-01-20",
      author: "Olukunle O.",
      views: 0,
    },
    {
      id: 3,
      title: "Building Recommender Systems",
      slug: "recommender-systems",
      status: "published",
      createdAt: "2024-01-25",
      author: "Olukunle O.",
      views: 890,
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingBlog, setEditingBlog] = useState<Blog | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const columns = [
    { key: "title", label: "Title" },
    { key: "slug", label: "Slug" },
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
    { key: "author", label: "Author" },
    { key: "views", label: "Views" },
    { key: "createdAt", label: "Created" },
  ];

  const filteredBlogs = blogs.filter(blog =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.slug.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEdit = (blog: Blog) => {
    setEditingBlog(blog);
    setIsModalOpen(true);
  };

  const handleDelete = (blog: Blog) => {
    if (confirm(`Are you sure you want to delete "${blog.title}"?`)) {
      setBlogs(blogs.filter(b => b.id !== blog.id));
    }
  };

  const handleSave = (blogData: Partial<Blog>) => {
    if (editingBlog) {
      setBlogs(blogs.map(blog => 
        blog.id === editingBlog.id ? { ...blog, ...blogData } : blog
      ));
    } else {
      const newBlog: Blog = {
        id: Math.max(...blogs.map(b => b.id)) + 1,
        title: blogData.title || "",
        slug: blogData.slug || "",
        status: blogData.status || "draft",
        createdAt: new Date().toISOString().split('T')[0],
        author: "Olukunle O.",
        views: 0,
      };
      setBlogs([...blogs, newBlog]);
    }
    setIsModalOpen(false);
    setEditingBlog(null);
  };

  return (
    <AdminLayout title="Manage Blogs">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
              Blog Posts
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
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
        <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-md">
          <input
            type="text"
            placeholder="Search blogs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Table */}
        <AdminTable
          columns={columns}
          data={filteredBlogs}
          onEdit={handleEdit}
          onDelete={handleDelete}
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
    slug: blog?.slug || "",
    status: blog?.status || "draft",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
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
