/**
 * Admin Comments Management Page
 */

"use client";

import { useState, useEffect } from "react";
import AdminLayout from "@/components/Admin/AdminLayout";
import AdminTable from "@/components/Admin/AdminTable";
import { useAuth } from "@/contexts/AuthContext";
import toast from "react-hot-toast";
import DeleteConfirmModal from "@/components/Admin/DeleteConfirmModal";

interface Comment {
  _id: string;
  email: string;
  postId: string;
  postType: "blog" | "note" | "project";
  content: string;
  createdAt: string;
  parentCommentId?: string | null;
  postTitle?: string; // Will be populated
}

export default function AdminCommentsPage() {
  const { isAuthenticated } = useAuth();
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [commentToDelete, setCommentToDelete] = useState<Comment | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  // Helper function to fetch post title
  const fetchPostTitle = async (postId: string, postType: string, apiUrl: string): Promise<string> => {
    try {
      let endpoint = '';
      if (postType === 'note') {
        endpoint = `/api/notes/public/${postId}`;
      } else if (postType === 'blog') {
        endpoint = `/api/blogs/${postId}`;
      } else if (postType === 'project') {
        endpoint = `/api/projects/${postId}`;
      }

      const response = await fetch(`${apiUrl}${endpoint}`);
      const data = await response.json();
      
      if (data.success) {
        return data.data?.note?.title || data.data?.blog?.title || data.data?.project?.title || postId;
      }
      return postId;
    } catch (error) {
      console.error(`Error fetching ${postType} title:`, error);
      return postId;
    }
  };

  // Fetch all comments from backend
  useEffect(() => {
    const fetchComments = async () => {
      if (!isAuthenticated) return;
      
      try {
        setLoading(true);
        const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';
        const response = await fetch(`${API_URL}/api/comments/_admin`, {
          credentials: 'include'
        });
        
        const data = await response.json();
        
        if (data.success) {
          const commentsData = data.data.comments;
          
          // Fetch post titles for all comments
          const enrichedComments = await Promise.all(
            commentsData.map(async (comment: Comment) => {
              const postTitle = await fetchPostTitle(comment.postId, comment.postType, API_URL);
              return { ...comment, postTitle };
            })
          );
          
          setComments(enrichedComments);
        } else {
          toast.error('Failed to load comments');
        }
      } catch (error) {
        console.error('Error fetching comments:', error);
        toast.error('Failed to load comments');
      } finally {
        setLoading(false);
      }
    };

    fetchComments();
  }, [isAuthenticated]);

  const columns = [
    { key: "email", label: "Email" },
    { 
      key: "postTitle", 
      label: "Post",
      render: (value: string, item: Comment) => (
        <div className="max-w-[250px]">
          <div className="font-medium text-slate-900 dark:text-white truncate">
            {item.postTitle || item.postId}
          </div>
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
    {
      key: "parentCommentId",
      label: "Type",
      render: (value: string | null | undefined) => (
        <span className={`px-2 py-1 text-xs rounded-full ${
          value ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' : 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
        }`}>
          {value ? 'Reply' : 'Comment'}
        </span>
      )
    },
    { 
      key: "createdAt", 
      label: "Created",
      render: (value: string) => new Date(value).toLocaleDateString()
    },
  ];

  const filteredComments = comments.filter(comment => {
    const matchesSearch = 
      comment.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      comment.postId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      comment.content.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesSearch;
  });

  const handleDelete = (comment: Comment) => {
    setCommentToDelete(comment);
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = async () => {
    if (!isAuthenticated || !commentToDelete) {
      toast.error('Authentication required');
      return;
    }

    try {
      setIsDeleting(true);
      const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';
      const response = await fetch(`${API_URL}/api/comments/_admin/${commentToDelete._id}`, {
        method: 'DELETE',
        credentials: 'include'
      });

      const data = await response.json();

      if (data.success) {
        setComments(comments.filter(c => c._id !== commentToDelete._id));
        toast.success('Comment deleted successfully');
        setIsDeleteModalOpen(false);
        setCommentToDelete(null);
      } else {
        toast.error(data.error || 'Failed to delete comment');
      }
    } catch (error) {
      console.error('Error deleting comment:', error);
      toast.error('Failed to delete comment');
    } finally {
      setIsDeleting(false);
    }
  };

  const cancelDelete = () => {
    setIsDeleteModalOpen(false);
    setCommentToDelete(null);
  };


  if (loading) {
    return (
      <AdminLayout title="Manage Comments">
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout title="Manage Comments">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
              Comments ({comments.length})
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              View and manage comments on your content
            </p>
          </div>
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
        {filteredComments.length === 0 ? (
          <div className="bg-white dark:bg-slate-800 p-12 rounded-lg shadow-md text-center">
            <p className="text-slate-600 dark:text-slate-400">
              {searchTerm ? 'No comments found matching your search.' : 'No comments yet.'}
            </p>
          </div>
        ) : (
          <AdminTable
            columns={columns}
            data={filteredComments}
            onDelete={handleDelete}
            showActions={true}
          />
        )}

        {/* Delete Confirmation Modal */}
        <DeleteConfirmModal
          isOpen={isDeleteModalOpen}
          onClose={cancelDelete}
          onConfirm={confirmDelete}
          title="Delete Comment"
          message="Are you sure you want to delete this comment?"
          itemName={commentToDelete?.content.substring(0, 50)}
          isDeleting={isDeleting}
        />
      </div>
    </AdminLayout>
  );
}
