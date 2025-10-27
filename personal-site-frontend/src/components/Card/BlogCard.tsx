/**
 * Premium Blog Card with reusable CardImage component
 */

"use client";

import Link from "next/link";
import { generateSlug } from "@/lib/slug";
import { motion } from "framer-motion";
import { BlogMeta } from "@/types";
import { formatDate } from "@/lib/utils";
import CardImage from "@/components/UI/CardImage";

interface BlogCardProps {
  blog: BlogMeta;
  featured?: boolean;
  index?: number;
}

export default function BlogCard({ blog, featured = false, index = 0 }: BlogCardProps) {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5, 
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94] as const
      }
    },
    hover: { 
      y: -8,
      transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] as const }
    }
  };

  return (
    <Link href={`/blog/${(blog as any).slug || generateSlug(blog.title)}`}>
      <motion.div
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        className="group relative overflow-hidden rounded-xl backdrop-blur-sm border shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
        style={{
          backgroundColor: 'var(--card)',
          borderColor: 'var(--border)',
          boxShadow: 'var(--shadow)'
        }}
      >
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <CardImage
          src={blog.image}
          alt={blog.title}
          category={blog.category}
          title={blog.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          fallbackText={blog.category?.toUpperCase() || 'BLOG'}
        />
        
        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className="px-2 py-1 text-xs font-medium bg-blue-600/90 dark:bg-blue-500/90 text-white rounded-full backdrop-blur-sm">
            {blog.category || 'General'}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 line-clamp-2 transition-colors" style={{ color: 'var(--nav-text)' }}>
          {blog.title}
        </h3>
        
        <p className="text-gray-600 dark:text-slate-400 text-sm mb-4 line-clamp-3">
          {blog.description}
        </p>

        {/* Metadata */}
        <div className="flex items-center justify-between text-xs text-gray-500 dark:text-slate-500 mb-4">
          <span className="flex items-center gap-1">
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {formatDate(blog.createdAt)}
          </span>
        </div>

        {/* Action Button */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800">
          Read More
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </motion.div>
    </Link>
  );
}
