/**
 * Core data type definitions for the application
 */

export interface NoteMeta {
  slug: string;
  title: string;
  excerpt: string;
  tags: string[];
  updatedAt: string;
  createdAt?: string;
  readingTime?: number;
  thumbnail?: string;
  topic?: string;
}

export interface Note extends NoteMeta {
  content: string;
}

export interface BlogMeta {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  tags: string[];
  thumbnail?: string;
  updatedAt: string;
  createdAt?: string;
  readingTime?: number;
  author?: string;
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

