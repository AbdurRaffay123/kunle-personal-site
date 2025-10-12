/**
 * Reply Form Component
 * 
 * Separate component for reply forms to avoid focus issues
 */

"use client";

import { useState } from "react";

interface ReplyFormProps {
  onSubmit: (email: string, content: string) => Promise<void>;
  onCancel: () => void;
  isSubmitting: boolean;
}

export default function ReplyForm({ onSubmit, onCancel, isSubmitting }: ReplyFormProps) {
  const [replyEmail, setReplyEmail] = useState("");
  const [replyContent, setReplyContent] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!replyEmail.trim() || !replyContent.trim()) return;
    
    await onSubmit(replyEmail, replyContent);
    setReplyEmail("");
    setReplyContent("");
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
      <div className="mb-3">
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
          Email *
        </label>
        <input
          type="email"
          value={replyEmail}
          onChange={(e) => setReplyEmail(e.target.value)}
          placeholder="your@email.com"
          className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          required
          autoFocus
        />
      </div>
      <textarea
        value={replyContent}
        onChange={(e) => setReplyContent(e.target.value)}
        placeholder="Write your reply..."
        className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
        rows={3}
        required
      />
      <div className="flex gap-2 mt-2">
        <button
          type="submit"
          disabled={isSubmitting || !replyEmail.trim() || !replyContent.trim()}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800"
        >
          {isSubmitting ? 'Posting...' : 'Post Reply'}
        </button>
        <button
          type="button"
          onClick={onCancel}
          disabled={isSubmitting}
          className="px-4 py-2 text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition-colors disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800 rounded"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

