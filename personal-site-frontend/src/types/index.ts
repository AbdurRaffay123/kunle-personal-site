/**
 * Core data type definitions for the application
 */

export interface NoteMeta {
  _id: string;
  title: string;
  topic: string;
  tags: string[];
  updatedAt: string;
  createdAt: string;
  content?: string; // Optional content for previews
  user?: {
    _id: string;
    email: string;
  };
  // For backward compatibility with frontend
  slug?: string;
  excerpt?: string;
  readingTime?: number;
  thumbnail?: string;
}

export interface Note extends NoteMeta {
  content: string;
}

export interface BlogMeta {
  _id: string;
  title: string;
  description: string;
  category: string;
  link: string;
  image?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Blog extends BlogMeta {
  content: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  repoUrl?: string;
  liveUrl?: string;
  image?: string;
  featured?: boolean;
  tags?: string[];
}

export interface APIResponse<T> {
  data: T;
  message?: string;
  error?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface SEOProps {
  title: string;
  description: string;
  image?: string;
  path?: string;
  date?: string;
  tags?: string[];
  type?: "website" | "article";
}

