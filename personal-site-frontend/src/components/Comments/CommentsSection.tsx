/**
 * Comments Section Component
 * 
 * Displays comments and replies with real-time updates via Socket.io
 */

"use client";

import { useState, useEffect, useCallback } from "react";
import { socket } from "@/lib/socket";
import toast from "react-hot-toast";
import { ChatBubbleLeftIcon, ArrowUturnLeftIcon } from "@heroicons/react/24/outline";
import ReplyForm from "./ReplyForm";

interface Comment {
  _id: string;
  email: string;
  content: string;
  postId: string;
  postType: string;
  parentCommentId?: string | null;
  createdAt: string;
  replies?: Comment[];
}

interface CommentsSectionProps {
  postId: string;
  postType: "blog" | "note" | "project";
}

export default function CommentsSection({ postId, postType }: CommentsSectionProps) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [replyingTo, setReplyingTo] = useState<string | null>(null);
  
  // Form states
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");

  // Fetch comments
  const fetchComments = useCallback(async () => {
    try {
      const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';
      const response = await fetch(
        `${API_URL}/api/comments/${postType}/${postId}`
      );
      const data = await response.json();
      
      if (data.success) {
        setComments(data.data.comments);
      }
    } catch (error) {
      console.error('Error fetching comments:', error);
    } finally {
      setLoading(false);
    }
  }, [postId, postType]);

  // Submit main comment
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim() || !content.trim()) {
      toast.error('Please fill in all fields');
      return;
    }

    try {
      setSubmitting(true);
      
      const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';
      const response = await fetch(
        `${API_URL}/api/comments`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email,
            content,
            postId,
            postType,
            parentCommentId: null
          })
        }
      );

      const data = await response.json();

      if (data.success) {
        toast.success('Comment posted successfully!');
        setContent('');
        
        // Refresh comments
        await fetchComments();
      } else {
        toast.error(data.error || 'Failed to post comment');
      }
    } catch (error) {
      console.error('Error posting comment:', error);
      toast.error('Failed to post comment');
    } finally {
      setSubmitting(false);
    }
  };

  // Submit reply - takes email and content from reply form
  const handleReplySubmit = async (parentId: string, replyEmail: string, replyContent: string) => {
    try {
      const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';
      const response = await fetch(
        `${API_URL}/api/comments`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: replyEmail,
            content: replyContent,
            postId,
            postType,
            parentCommentId: parentId
          })
        }
      );

      const data = await response.json();

      if (data.success) {
        toast.success('Reply posted successfully!');
        setReplyingTo(null);
        
        // Refresh comments
        await fetchComments();
      } else {
        toast.error(data.error || 'Failed to post reply');
      }
    } catch (error) {
      console.error('Error posting reply:', error);
      toast.error('Failed to post reply');
    }
  };

  // Socket.io real-time updates
  useEffect(() => {
    // Join the post's comment room
    socket.emit('join-post', postId);

    // Listen for new comments
    socket.on('new-comment', (newComment: Comment) => {
      if (newComment.postId === postId) {
        fetchComments();
      }
    });

    // Listen for deleted comments
    socket.on('delete-comment', ({ commentId }: { commentId: string }) => {
      // Refresh comments to handle cascade deletion properly
      fetchComments();
    });

    // Cleanup
    return () => {
      socket.emit('leave-post', postId);
      socket.off('new-comment');
      socket.off('delete-comment');
    };
  }, [postId, fetchComments]);

  // Initial fetch
  useEffect(() => {
    fetchComments();
  }, [fetchComments]);

  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  // Comment component (recursive for replies)
  const CommentItem = ({ comment, isReply = false }: { comment: Comment; isReply?: boolean }) => (
    <div className={`${isReply ? 'ml-8 md:ml-12 mt-3' : ''} mb-4`}>
      <div className={`p-4 rounded-lg shadow-sm border ${
        isReply 
          ? 'border-blue-200 dark:border-blue-800 border-l-4 border-l-blue-500' 
          : ''
      }`} style={{
        backgroundColor: isReply ? 'var(--comments-input-bg)' : 'var(--comments-input-bg)',
        borderColor: isReply ? undefined : 'var(--comments-input-border)'
      }}>
        <div className="flex items-start justify-between mb-2">
          <div className="flex items-center gap-2">
            {isReply && (
              <ArrowUturnLeftIcon className="h-4 w-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
            )}
            <div>
              <h4 className="font-semibold" style={{ color: 'var(--text-primary)' }}>
                {comment.email}
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                {formatDate(comment.createdAt)}
                {isReply && (
                  <span className="px-2 py-0.5 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium">
                    Reply
                  </span>
                )}
              </p>
            </div>
          </div>
          {!isReply && (
            <button
              onClick={() => setReplyingTo(comment._id)}
              className="text-sm text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1 flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800 rounded px-2 py-1"
            >
              <ArrowUturnLeftIcon className="h-4 w-4" />
              Reply
            </button>
          )}
        </div>
        
        <p className="whitespace-pre-wrap" style={{ color: 'var(--text-primary)' }}>
          {comment.content}
        </p>
        
        {/* Reply form */}
        {replyingTo === comment._id && (
          <ReplyForm
            onSubmit={(replyEmail, replyContent) => handleReplySubmit(comment._id, replyEmail, replyContent)}
            onCancel={() => setReplyingTo(null)}
            isSubmitting={submitting}
          />
        )}
      </div>

      {/* Render replies */}
      {comment.replies && comment.replies.length > 0 && (
        <div className="mt-4">
          <div className="flex items-center gap-2 mb-3 text-sm text-slate-600 dark:text-slate-400">
            <div className="h-px flex-1 bg-slate-200 dark:bg-slate-700"></div>
            <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full font-medium">
              {comment.replies.length} {comment.replies.length === 1 ? 'Reply' : 'Replies'}
            </span>
            <div className="h-px flex-1 bg-slate-200 dark:bg-slate-700"></div>
          </div>
          {comment.replies.map(reply => (
            <CommentItem key={reply._id} comment={reply} isReply={true} />
          ))}
        </div>
      )}
    </div>
  );

  if (loading) {
    return (
      <div className="p-8 rounded-lg shadow-sm" style={{ backgroundColor: 'var(--comments-bg)' }}>
        <div className="animate-pulse space-y-4">
          <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-1/4"></div>
          <div className="h-20 bg-slate-200 dark:bg-slate-700 rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 rounded-lg" style={{ backgroundColor: 'var(--comments-bg)' }}>
      {/* Header */}
      <div className="flex items-center gap-2 mb-6">
        <ChatBubbleLeftIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
        <h3 className="text-2xl font-bold" style={{ color: 'var(--nav-text)' }}>
          Comments ({comments.length})
        </h3>
      </div>

      {/* Comment form */}
      <form onSubmit={handleSubmit} className="mb-8 p-6 rounded-lg shadow-sm border" style={{ backgroundColor: 'var(--comments-input-bg)', borderColor: 'var(--comments-input-border)' }}>
        <h4 className="text-lg font-semibold mb-4" style={{ color: 'var(--nav-text)' }}>
          Leave a Comment
        </h4>
        
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" style={{ color: 'var(--nav-text)' }}>
            Email *
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            style={{
              backgroundColor: 'var(--comments-input-bg)',
              borderColor: 'var(--comments-input-border)',
              color: 'var(--comments-input-text)'
            }}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" style={{ color: 'var(--nav-text)' }}>
            Comment *
          </label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Share your thoughts..."
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            style={{
              backgroundColor: 'var(--comments-input-bg)',
              borderColor: 'var(--comments-input-border)',
              color: 'var(--comments-input-text)'
            }}
            rows={4}
            required
          />
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800"
        >
          {submitting ? 'Posting...' : 'Post Comment'}
        </button>
      </form>

      {/* Comments list */}
      {comments.length === 0 ? (
        <div className="text-center py-12">
          <ChatBubbleLeftIcon className="h-12 w-12 text-slate-300 dark:text-slate-700 mx-auto mb-4" />
          <p className="text-slate-600 dark:text-slate-400">
            No comments yet. Be the first to comment!
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {comments.map(comment => (
            <CommentItem key={comment._id} comment={comment} />
          ))}
        </div>
      )}
    </div>
  );
}

