/**
 * Admin Blogs Management Page
 * Updated: Uses backend APIs for CRUD operations, removes dummy data.
 */

"use client";

import { useEffect, useState } from "react";
import AdminLayout from "@/components/Admin/AdminLayout";
import AdminTable from "@/components/Admin/AdminTable";
import AdminModal from "@/components/Admin/AdminModal";
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
  image?: string;
  createdAt: string;
  views: number;
}

const BACKEND_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000/";
// Ensure only one slash between backend URL and image path
const columns = [
  { key: "title", label: "Title" },
  { key: "description", label: "Description" },
  { key: "category", label: "Category" },
  {
    key: "image",
    label: "Image",
    render: (value: string) =>
      value ? (
        <img
          src={
            value.startsWith("/stored-files/")
              ? `${BACKEND_URL.replace(/\/$/, "")}${value}`
              : `${BACKEND_URL.replace(/\/$/, "")}/stored-files/blog-images/${value}`
          }
          alt="Blog"
          className="h-10 w-16 object-cover rounded"
        />
      ) : (
        <span className="text-slate-400">No Image</span>
      ),
  },
  { key: "views", label: "Views" },
  { key: "createdAt", label: "Created" },
];

export default function AdminBlogsPage() {
  // State for blogs, modal, editing, and search
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingBlog, setEditingBlog] = useState<Blog | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);

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
      setBlogs(res.data);
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

  // Delete handler (calls API)
  const handleDelete = async (blog: Blog) => {
    if (confirm(`Are you sure you want to delete "${blog.title}"?`)) {
      try {
        await apiDeleteBlog(blog._id);
        fetchBlogs();
      } catch (error) {
        console.error("Failed to delete blog:", error);
      }
    }
  };

  // Save handler (create or update)
  const handleSave = async (blogData: Partial<Blog> & { imageFile?: File }) => {
    try {
      // Prepare FormData for image upload
      const formData = new FormData();
      formData.append("title", blogData.title || "");
      formData.append("description", blogData.description || "");
      formData.append("category", blogData.category || "");
      if (blogData.imageFile) {
        formData.append("image", blogData.imageFile);
      }

      if (editingBlog) {
        await updateBlog(editingBlog._id, formData);
      } else {
        await createBlog(formData);
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
      </div>
    </AdminLayout>
  );
}

/**
 * BlogForm component
 * Handles both create and update, supports image upload.
 */
function BlogForm({
  blog,
  onSave,
  onCancel,
}: {
  blog: Blog | null;
  onSave: (data: Partial<Blog> & { imageFile?: File }) => void;
  onCancel: () => void;
}) {
  const [formData, setFormData] = useState({
    title: blog?.title || "",
    description: blog?.description || "",
    category: blog?.category || "",
    image: blog?.image || "",
    imageFile: undefined as File | undefined,
  });

  // Handle file input change
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        imageFile: file,
        image: URL.createObjectURL(file),
      }));
    }
  };

  // Submit handler
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
          onChange={(e) =>
            setFormData({ ...formData, title: e.target.value })
          }
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
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
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
          onChange={(e) =>
            setFormData({ ...formData, category: e.target.value })
          }
          className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
          Image
        </label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        {formData.image && (
          <img
            src={
              formData.image.startsWith("blob:")
                ? formData.image
                : formData.image.startsWith("/stored-files/")
                  ? `${BACKEND_URL.replace(/\/$/, "")}${formData.image}`
                  : `${BACKEND_URL.replace(/\/$/, "")}/stored-files/blog-images/${formData.image}`
            }
            alt="Preview"
            className="mt-2 h-20 w-32 object-cover rounded"
          />
        )}
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
