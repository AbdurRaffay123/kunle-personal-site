/**
 * Like Button Component for Blogs
 */

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import instance from "@/axios/Axios";

interface LikeButtonProps {
  blogId: string;
  initialLikes: number;
  className?: string;
}

export default function LikeButton({ blogId, initialLikes, className = "" }: LikeButtonProps) {
  const [likes, setLikes] = useState(initialLikes);
  const [isLiked, setIsLiked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLike = async () => {
    if (isLoading) return;
    
    setIsLoading(true);
    
    try {
      const response = await instance.post(`/api/blogs/${blogId}/like`);
      
      if (response.data.success) {
        setLikes(response.data.data.likes);
        setIsLiked(true);
        
        // Show success animation
        setTimeout(() => {
          setIsLiked(false);
        }, 1000);
      }
    } catch (error) {
      console.error('Error liking blog:', error);
      // Could add toast notification here
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.button
      onClick={handleLike}
      disabled={isLoading}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      animate={isLiked ? { scale: [1, 1.2, 1] } : {}}
    >
      <motion.svg
        className="w-5 h-5"
        fill={isLiked ? "currentColor" : "none"}
        viewBox="0 0 24 24"
        stroke="currentColor"
        animate={isLiked ? { scale: [1, 1.3, 1] } : {}}
        transition={{ duration: 0.3 }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </motion.svg>
      
      <span className="text-sm font-medium">
        {isLoading ? "..." : likes}
      </span>
      
      {isLiked && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          className="absolute -top-2 -right-2 text-red-500 text-xs font-bold"
        >
          +1
        </motion.div>
      )}
    </motion.button>
  );
}
