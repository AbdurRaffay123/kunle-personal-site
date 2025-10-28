/**
 * Portfolio page - Unified Projects and Research with filtering
 */

"use client";

import { useState, useMemo, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import Spinner from "@/components/UI/Spinner";
import EmptyState from "@/components/UI/EmptyState";
import ErrorState from "@/components/UI/ErrorState";
import { debounce } from "@/lib/utils";
import { useFetch } from "@/hooks/useFetch";
import { getPortfolioItems, type PortfolioItem } from "@/apis/Portfolio/api";
import ProjectCard from "@/components/Card/ProjectCard";
import ResearchCard from "@/components/Card/ResearchCard";

// Fallback dummy data for when API is not available
const FALLBACK_DATA: PortfolioItem[] = [
  {
    _id: "fallback-1",
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration.",
    type: "project",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    githubUrl: "https://github.com/kunle/ecommerce-platform",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
    createdAt: "2024-01-15T00:00:00.000Z",
    updatedAt: "2024-01-15T00:00:00.000Z",
    formattedDate: "January 15, 2024"
  },
  {
    _id: "fallback-2",
    title: "Machine Learning Research",
    description: "Research on improving neural network performance using novel optimization techniques. Published in IEEE Transactions on Neural Networks.",
    type: "research",
    tags: ["Machine Learning", "Neural Networks", "Optimization", "Deep Learning"],
    researchLink: "https://ieeexplore.ieee.org/document/example",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=500&h=300&fit=crop",
    createdAt: "2024-02-20T00:00:00.000Z",
    updatedAt: "2024-02-20T00:00:00.000Z",
    formattedDate: "February 20, 2024"
  },
  {
    _id: "fallback-3",
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, team collaboration features, and project tracking capabilities.",
    type: "project",
    technologies: ["React", "TypeScript", "Socket.io", "PostgreSQL", "Redis"],
    githubUrl: "https://github.com/kunle/task-manager",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
    createdAt: "2024-03-10T00:00:00.000Z",
    updatedAt: "2024-03-10T00:00:00.000Z",
    formattedDate: "March 10, 2024"
  },
  {
    _id: "fallback-4",
    title: "Blockchain Security Analysis",
    description: "Comprehensive analysis of security vulnerabilities in smart contracts and proposed mitigation strategies for DeFi protocols.",
    type: "research",
    tags: ["Blockchain", "Security", "Smart Contracts", "DeFi", "Cryptocurrency"],
    researchLink: "https://arxiv.org/abs/example",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=500&h=300&fit=crop",
    createdAt: "2024-04-05T00:00:00.000Z",
    updatedAt: "2024-04-05T00:00:00.000Z",
    formattedDate: "April 5, 2024"
  },
  {
    _id: "fallback-5",
    title: "Mobile Weather App",
    description: "A cross-platform mobile weather application with location-based forecasts, weather alerts, and beautiful UI design.",
    type: "project",
    technologies: ["React Native", "Expo", "Weather API", "Firebase", "TypeScript"],
    githubUrl: "https://github.com/kunle/weather-app",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop",
    createdAt: "2024-05-12T00:00:00.000Z",
    updatedAt: "2024-05-12T00:00:00.000Z",
    formattedDate: "May 12, 2024"
  },
  {
    _id: "fallback-6",
    title: "AI-Powered Recommendation System",
    description: "Research on developing personalized recommendation systems using collaborative filtering and content-based approaches.",
    type: "research",
    tags: ["Artificial Intelligence", "Recommendation Systems", "Machine Learning", "Data Science"],
    researchLink: "https://link.springer.com/article/example",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500&h=300&fit=crop",
    createdAt: "2024-06-18T00:00:00.000Z",
    updatedAt: "2024-06-18T00:00:00.000Z",
    formattedDate: "June 18, 2024"
  }
];

const TYPE_FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'project', label: 'Projects' },
  { id: 'research', label: 'Research' }
];

export default function PortfolioPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [useFallback, setUseFallback] = useState(false); // Use real API

  // Create a stable fetcher function that doesn't depend on selectedFilter
  const fetcher = useCallback(() => {
    return getPortfolioItems();
  }, []);

  // Fetch portfolio items with fallback handling
  const { data: portfolioResponse, loading, error, refetch } = useFetch(
    fetcher,
    { skip: useFallback }
  );
  
  // Use fallback data if API fails or is skipped
  const portfolioItems = useFallback ? FALLBACK_DATA : (portfolioResponse?.data || []);
  
  // Handle API errors by switching to fallback data
  useEffect(() => {
    if (error && !useFallback) {
      console.log('API error detected, switching to fallback data:', error);
      setUseFallback(true);
    }
  }, [error, useFallback]);
  
  // Don't refetch when filter changes if using fallback data
  // The filtering is handled client-side for fallback data

  // Debounced search
  const debouncedSearch = useCallback(
    debounce((query: string) => {
      setSearchQuery(query);
    }, 300),
    []
  );

  // Filter items based on type and search query
  const filteredItems = useMemo(() => {
    if (!portfolioItems) return [];
    
    // First filter by type
    let filtered = portfolioItems;
    if (selectedFilter !== 'all') {
      filtered = portfolioItems.filter(item => item.type === selectedFilter);
    }
    
    // Then filter by search query
    if (searchQuery.trim()) {
      filtered = filtered.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.type === 'project' ? item.technologies : item.tags)?.some(tech =>
          tech.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    }
    
    return filtered;
  }, [portfolioItems, selectedFilter, searchQuery]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: 'var(--background)' }}>
        <Spinner size="lg" />
      </div>
    );
  }

  // Show error only if we're not using fallback data
  if (error && !useFallback) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: 'var(--background)' }}>
        <ErrorState
          title="Failed to load portfolio"
          message="There was an error loading the portfolio items. Please try again later."
          onRetry={() => {
            setUseFallback(false);
            refetch();
          }}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20" style={{ backgroundColor: 'var(--background)' }}>
      <div className="max-w-screen-2xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4" style={{ color: 'var(--nav-text)' }}>
            Projects & Research
          </h1>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Explore my portfolio of projects and research work in AI, ML, and software engineering.
          </p>
          
          {/* Fallback Data Notice */}
          {useFallback && (
            <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg max-w-2xl mx-auto">
              <div className="flex items-center justify-center">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-yellow-800 dark:text-yellow-200">
                    <strong>Demo Mode:</strong> Showing sample portfolio data. The backend API is currently unavailable.
                  </p>
                </div>
                <button
                  onClick={() => {
                    setUseFallback(false);
                    refetch();
                  }}
                  className="ml-4 px-3 py-1 text-xs bg-yellow-200 dark:bg-yellow-800 text-yellow-800 dark:text-yellow-200 rounded hover:bg-yellow-300 dark:hover:bg-yellow-700 transition-colors"
                >
                  Retry API
                </button>
              </div>
            </div>
          )}
        </motion.div>

        {/* Search and Filters */}
        <div className="mb-8">
          {/* Search Bar */}
          <div className="relative mb-6">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5" style={{ color: 'var(--text-secondary)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search projects & research..."
              className="w-full pl-10 pr-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              style={{
                backgroundColor: 'var(--card)',
                borderColor: 'var(--border)',
                color: 'var(--foreground)',
                border: '1px solid var(--border)'
              }}
              onChange={(e) => debouncedSearch(e.target.value)}
            />
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-3 justify-center">
            {TYPE_FILTERS.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                  selectedFilter === filter.id
                    ? 'shadow-lg'
                    : 'border hover:opacity-80'
                }`}
                style={{
                  backgroundColor: selectedFilter === filter.id ? '#3b82f6' : 'var(--card)',
                  color: selectedFilter === filter.id ? '#ffffff' : 'var(--foreground)',
                  borderColor: selectedFilter === filter.id ? '#3b82f6' : 'var(--border)'
                }}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        {filteredItems.length === 0 ? (
          <EmptyState
            title="No items found"
            description={searchQuery ? "No items match your search criteria." : "No portfolio items available."}
            actionLabel={searchQuery ? "Clear search" : "Add new item"}
            onAction={searchQuery ? () => setSearchQuery('') : undefined}
          />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div key={item._id} className="relative group">
                {item.type === 'project' ? (
                  <ProjectCard project={item} />
                ) : (
                  <ResearchCard research={item} />
                )}
                
                {/* Subtle gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}