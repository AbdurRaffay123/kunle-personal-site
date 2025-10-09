/**
 * Admin Comments Management Page
 */

"use client";

import { useState } from "react";
import AdminLayout from "@/components/Admin/AdminLayout";
import AdminTable from "@/components/Admin/AdminTable";
import AdminModal from "@/components/Admin/AdminModal";

interface Comment {
  id: number;
  author: string;
  email: string;
  post: string;
  content: string;
  createdAt: string;
  postType: "blog" | "note" | "project";
}

export default function AdminCommentsPage() {
  const [comments, setComments] = useState<Comment[]>([
    {
      id: 1,
      author: "John Doe",
      email: "john@example.com",
      post: "Introduction to Machine Learning",
      content: "Great article! Very informative and well-written.",
      createdAt: "2024-01-15",
      postType: "blog",
    },
    {
      id: 2,
      author: "Sarah Smith",
      email: "sarah@example.com",
      post: "Advanced Python Techniques",
      content: "This helped me understand the concepts better. Thanks!",
      createdAt: "2024-01-18",
      postType: "note",
    },
    {
      id: 3,
      author: "Mike Johnson",
      email: "mike@example.com",
      post: "AI Recommendation System",
      content: "Interesting project. Would love to see more details.",
      createdAt: "2024-01-20",
      postType: "project",
    },
    {
      id: 4,
      author: "Emily Brown",
      email: "emily@example.com",
      post: "Building Recommender Systems",
      content: "Excellent work! The implementation looks solid.",
      createdAt: "2024-01-22",
      postType: "blog",
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingComment, setEditingComment] = useState<Comment | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const columns = [
    { key: "author", label: "Author" },
    { key: "email", label: "Email" },
    { 
      key: "post", 
      label: "Post",
      render: (value: string, item: Comment) => (
        <div>
          <div className="font-medium">{value}</div>
          <div className="text-xs text-slate-500 dark:text-slate-400">
            {item.postType}
          </div>
        </div>
      )
    },
    { 
      key: "content", 
      label: "Content",
      render: (value: string) => (
        <div className="max-w-xs truncate">
          {value}
        </div>
      )
    },
    { key: "createdAt", label: "Created" },
  ];

  const filteredComments = comments.filter(comment => {
    const matchesSearch = 
      comment.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      comment.post.toLowerCase().includes(searchTerm.toLowerCase()) ||
      comment.content.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesSearch;
  });

  const handleEdit = (comment: Comment) => {
    setEditingComment(comment);
    setIsModalOpen(true);
  };

  const handleDelete = (comment: Comment) => {
    if (confirm(`Are you sure you want to delete this comment by ${comment.author}?`)) {
      setComments(comments.filter(c => c.id !== comment.id));
    }
  };


  const handleSave = (commentData: Partial<Comment>) => {
    if (editingComment) {
      setComments(comments.map(comment => 
        comment.id === editingComment.id ? { ...comment, ...commentData } : comment
      ));
    } else {
      const newComment: Comment = {
        id: Math.max(...comments.map(c => c.id)) + 1,
        author: commentData.author || "",
        email: commentData.email || "",
        post: commentData.post || "",
        content: commentData.content || "",
        createdAt: new Date().toISOString().split('T')[0],
        postType: commentData.postType || "blog",
      };
      setComments([...comments, newComment]);
    }
    setIsModalOpen(false);
    setEditingComment(null);
  };


  return (
    <AdminLayout title="Manage Comments">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
              Comments
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              Manage comments on your content
            </p>
          </div>
          <button
            onClick={() => {
              setEditingComment(null);
              setIsModalOpen(true);
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors font-medium cursor-pointer hover:scale-105"
          >
            Add New Comment
          </button>
        </div>


        {/* Filters */}
        <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-md">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              placeholder="Search comments..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Table */}
        <AdminTable
          columns={columns}
          data={filteredComments}
          onEdit={handleEdit}
          onDelete={handleDelete}
          showActions={true}
        />

        {/* Modal */}
        <AdminModal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setEditingComment(null);
          }}
          title={editingComment ? "Edit Comment" : "Add New Comment"}
        >
          <CommentForm
            comment={editingComment}
            onSave={handleSave}
            onCancel={() => {
              setIsModalOpen(false);
              setEditingComment(null);
            }}
          />
        </AdminModal>
      </div>
    </AdminLayout>
  );
}

// Comment Form Component
function CommentForm({ 
  comment, 
  onSave, 
  onCancel 
}: { 
  comment: Comment | null; 
  onSave: (data: Partial<Comment>) => void; 
  onCancel: () => void; 
}) {
  const [formData, setFormData] = useState({
    author: comment?.author || "",
    email: comment?.email || "",
    post: comment?.post || "",
    content: comment?.content || "",
    postType: comment?.postType || "blog",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
          Author
        </label>
        <input
          type="text"
          value={formData.author}
          onChange={(e) => setFormData({ ...formData, author: e.target.value })}
          className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
          Email
        </label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
          Post
        </label>
        <input
          type="text"
          value={formData.post}
          onChange={(e) => setFormData({ ...formData, post: e.target.value })}
          className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
          Post Type
        </label>
        <select
          value={formData.postType}
          onChange={(e) => setFormData({ ...formData, postType: e.target.value as "blog" | "note" | "project" })}
          className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="blog">Blog</option>
          <option value="note">Note</option>
          <option value="project">Project</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
          Content
        </label>
        <textarea
          value={formData.content}
          onChange={(e) => setFormData({ ...formData, content: e.target.value })}
          rows={4}
          className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          required
        />
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
          {comment ? "Update" : "Create"}
        </button>
      </div>
    </form>
  );
}
