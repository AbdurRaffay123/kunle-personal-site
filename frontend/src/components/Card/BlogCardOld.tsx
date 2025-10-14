/**
 * Premium Blog Card with image and glassmorphism
 */

"use client";

import { motion } from "framer-motion";
import { BlogMeta } from "@/types";
import { formatDate } from "@/lib/utils";
import CardImage from "@/components/UI/CardImage";

interface BlogCardProps {
  blog: BlogMeta;
  featured?: boolean;
  index?: number;
}

// Generate reliable tech-related image URL based on category
const getTechImage = (category: string | undefined, title: string): string => {
  // Handle undefined category
  if (!category) {
    category = 'technology'; // Default fallback
  }
  
  // Create a hash from title for consistent image selection
  const hash = title.split('').reduce((a, b) => {
    a = ((a << 5) - a) + b.charCodeAt(0);
    return a & a;
  }, 0);
  
  const techImageMap: { [key: string]: string[] } = {
    'technology': [
      'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop&crop=center&auto=format'
    ],
    'programming': [
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=400&h=300&fit=crop&crop=center&auto=format'
    ],
    'web-development': [
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop&crop=center&auto=format'
    ],
    'ai': [
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop&crop=center&auto=format'
    ],
    'machine-learning': [
      'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop&crop=center&auto=format'
    ],
    'data-science': [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center&auto=format'
    ],
    'javascript': [
      'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=400&h=300&fit=crop&crop=center&auto=format'
    ],
    'react': [
      'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop&crop=center&auto=format'
    ],
    'nodejs': [
      'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=300&fit=crop&crop=center&auto=format'
    ],
    'python': [
      'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=300&fit=crop&crop=center&auto=format'
    ],
    'mobile': [
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop&crop=center&auto=format'
    ],
    'design': [
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop&crop=center&auto=format'
    ],
    'ui': [
      'https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=300&fit=crop&crop=center&auto=format'
    ],
    'ux': [
      'https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=300&fit=crop&crop=center&auto=format'
    ],
    'ml-ai': [
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop&crop=center&auto=format'
    ],
    'devops': [
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop&crop=center&auto=format'
    ],
    'cybersecurity': [
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop&crop=center&auto=format'
    ],
    'blockchain': [
      'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=300&fit=crop&crop=center&auto=format'
    ],
    'cloud': [
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop&crop=center&auto=format'
    ],
    'database': [
      'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=300&fit=crop&crop=center&auto=format'
    ],
    // Additional categories for future blog posts
    'frontend': [
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop&crop=center&auto=format'
    ],
    'backend': [
      'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=300&fit=crop&crop=center&auto=format'
    ],
    'fullstack': [
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=400&h=300&fit=crop&crop=center&auto=format'
    ],
    'typescript': [
      'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop&crop=center&auto=format'
    ],
    'vue': [
      'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop&crop=center&auto=format'
    ],
    'angular': [
      'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop&crop=center&auto=format'
    ],
    'golang': [
      'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop&crop=center&auto=format'
    ],
    'rust': [
      'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop&crop=center&auto=format'
    ],
    'java': [
      'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center&auto=format'
    ],
    'csharp': [
      'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center&auto=format'
    ],
    'php': [
      'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center&auto=format'
    ],
    'ruby': [
      'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center&auto=format'
    ],
    'swift': [
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop&crop=center&auto=format'
    ],
    'kotlin': [
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop&crop=center&auto=format'
    ],
    'flutter': [
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop&crop=center&auto=format'
    ],
    'docker': [
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop&crop=center&auto=format'
    ],
    'kubernetes': [
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop&crop=center&auto=format'
    ],
    'aws': [
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop&crop=center&auto=format'
    ],
    'azure': [
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop&crop=center&auto=format'
    ],
    'gcp': [
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop&crop=center&auto=format'
    ],
    'mongodb': [
      'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=300&fit=crop&crop=center&auto=format'
    ],
    'postgresql': [
      'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=300&fit=crop&crop=center&auto=format'
    ],
    'mysql': [
      'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=300&fit=crop&crop=center&auto=format'
    ],
    'redis': [
      'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=300&fit=crop&crop=center&auto=format'
    ],
    'elasticsearch': [
      'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=300&fit=crop&crop=center&auto=format'
    ],
    'graphql': [
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop&crop=center&auto=format'
    ],
    'rest': [
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop&crop=center&auto=format'
    ],
    'microservices': [
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop&crop=center&auto=format'
    ],
    'testing': [
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=400&h=300&fit=crop&crop=center&auto=format'
    ],
    'performance': [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center&auto=format'
    ],
    'scalability': [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center&auto=format'
    ],
    'architecture': [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center&auto=format'
    ],
    'algorithms': [
      'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop&crop=center&auto=format'
    ],
    'open-source': [
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=400&h=300&fit=crop&crop=center&auto=format'
    ],
    'tools': [
      'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop&crop=center&auto=format'
    ],
    'tutorial': [
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=400&h=300&fit=crop&crop=center&auto=format'
    ],
    'news': [
      'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop&crop=center&auto=format'
    ],
    'trends': [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center&auto=format'
    ],
    'career': [
      'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop&crop=center&auto=format'
    ],
    'interview': [
      'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop&crop=center&auto=format'
    ],
    'best-practices': [
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=400&h=300&fit=crop&crop=center&auto=format'
    ],
    'tips': [
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop&crop=center&auto=format',
      'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=400&h=300&fit=crop&crop=center&auto=format'
    ]
  };
  
  // Get images for the category, fallback to programming images
  const categoryImages = techImageMap[category.toLowerCase()] || techImageMap['programming'];
  
  // Select image based on hash for consistency
  const imageIndex = Math.abs(hash) % categoryImages.length;
  return categoryImages[imageIndex];
};

export default function BlogCard({ blog, featured = false, index = 0 }: BlogCardProps) {
  const CardContent = (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{
        scale: 1.02,
        y: -4,
        transition: { duration: 0.3 },
      }}
      className={`group overflow-hidden rounded-xl bg-white/80 dark:bg-slate-800/60 backdrop-blur-sm border border-slate-200/30 dark:border-slate-700/30 shadow-lg hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 ${
        featured ? "flex flex-col md:flex-row h-full" : "flex flex-col h-full"
      }`}
    >
      {/* Image */}
      <div
        className={`relative overflow-hidden bg-gradient-to-br from-blue-100 to-sky-100 dark:from-blue-900/20 dark:to-sky-900/20 ${
          featured ? "h-64 md:h-auto md:w-1/2" : "h-56"
        }`}
      >
        <img
          src={blog.image || getTechImage(blog.category, blog.title)}
          alt={blog.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
          onError={(e) => {
            // Fallback to a tech-themed placeholder if image fails
            const target = e.target as HTMLImageElement;
            // Use a more reliable fallback with tech theme
            target.src = `https://via.placeholder.com/400x300/1e40af/FFFFFF?text=${encodeURIComponent(blog.category.toUpperCase())}`;
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className={`flex flex-1 flex-col p-6 ${featured ? "md:w-1/2" : ""}`}>
        {/* Metadata */}
        <div className="mb-3 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
          <time dateTime={blog.createdAt}>
            {formatDate(blog.createdAt, "short")}
          </time>
          <span aria-hidden="true">•</span>
          <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
            {blog.category}
          </span>
        </div>

        {/* Title */}
        <h3
          className={`mb-3 font-bold text-slate-900 dark:text-white transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400 ${
            featured ? "text-2xl md:text-3xl" : "text-xl"
          }`}
        >
          {blog.title}
        </h3>

        {/* Description */}
        <p className="mb-4 flex-1 text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed">
          {blog.description}
        </p>

        {/* Check Blog Button */}
        <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
          <a
            href={blog.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800 transition-all duration-200 hover:shadow-lg hover:scale-105"
          >
            <span>Check Blog</span>
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      </div>
    </motion.article>
  );

  return CardContent;
}
