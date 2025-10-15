/**
 * Home page with premium layout and proper desktop width
 */

"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Hero from "@/components/Hero/Hero";
import NoteCard from "@/components/Card/NoteCard";
import BlogCard from "@/components/Card/BlogCard";
import ProjectCard from "@/components/Card/ProjectCard";
import ResearchCard from "@/components/Card/ResearchCard";
import { getNotes } from "@/lib/api";
import { getBlogs } from "@/apis/Blog/api"; // <-- Use the new blog API
import { getMainPageData } from "@/apis/About/api"; // <-- Import your profile API
import type { BlogMeta } from "@/types";

export default function Home() {
  // State for data
  const [latestBlogs, setLatestBlogs] = useState<BlogMeta[]>([]);
  const [latestNotes, setLatestNotes] = useState<any[]>([]);
  const [featuredProjects, setFeaturedProjects] = useState<any[]>([]);
  const [latestResearch, setLatestResearch] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        // Fetch blogs from database
        console.log('Home page: Fetching blogs from database...');
        const blogs = await getBlogs();
        console.log('Home page: Blogs received:', blogs);
        setLatestBlogs(blogs.slice(0, 3));
        
        // Fetch notes
        const notes = await getNotes();
        setLatestNotes(notes.slice(0, 3));

        // Fetch user profile (which includes projects and research)
        const profileRes = await getMainPageData();
        const profile = profileRes?.data || {};
        setFeaturedProjects(profile.projects?.slice(0, 3) || []);
        setLatestResearch(profile.research?.slice(0, 3) || []);
        
      } catch (error) {
        console.error('Home page: Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--background)' }}>
      <Hero/>

      {/* Quick Links Section */}
      <section className="py-24 px-8 sm:px-12 lg:px-16 xl:px-24" style={{ backgroundColor: 'var(--background)' }}>
        <div className="max-w-screen-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4" style={{ color: 'var(--nav-text)' }}>
              Explore My Work
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Discover my projects, technical notes, and insights on AI & ML
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Projects",
                description: "Explore my research and development work",
                href: "/project",
                icon: "🚀",
                gradient: "from-blue-600 to-blue-800",
              },
              {
                title: "Notes",
                description: "Technical notes and learning resources",
                href: "/notes",
                icon: "📝",
                gradient: "from-sky-600 to-sky-800",
              },
              {
                title: "Blog",
                description: "Articles and insights on AI/ML",
                href: "/blog",
                icon: "✍️",
                gradient: "from-blue-700 to-sky-700",
              },
              {
                title: "About",
                description: "Get to know more about me",
                href: "/about",
                icon: "👋",
                gradient: "from-sky-700 to-blue-900",
              },
            ].map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group relative overflow-hidden rounded-xl backdrop-blur-sm border p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: 'var(--explore-card-bg)',
                  borderColor: 'var(--border)',
                  boxShadow: 'var(--shadow)'
                }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                <div className="relative z-10">
                  <div className="mb-4 text-5xl">{item.icon}</div>
                  <h3 
                    className="text-xl font-bold mb-2 transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400"
                    style={{ 
                      color: 'var(--text-primary)'
                    }}
                  >
                    {item.title}
                  </h3>
                  <p style={{ color: 'var(--text-secondary)' }}>
                    {item.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <section className="py-24 px-8 sm:px-12 lg:px-16 xl:px-24" style={{ backgroundColor: 'var(--surface)' }}>
          <div className="max-w-screen-2xl mx-auto">
            <div className="mb-12 flex items-center justify-between">
              <div>
                <h2 className="text-4xl sm:text-5xl font-bold text-blue-700 dark:text-blue-400 mb-2">
                  Featured Projects
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-400">
                  Showcasing my latest work in AI/ML
                </p>
              </div>
              <Link
                href="/project"
                className="hidden sm:inline-flex items-center gap-2 px-6 py-3 text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
              >
                View All
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
              {featuredProjects.map((project: any, index: number) => (
                <ProjectCard key={project._id || `project-${index}`} project={project} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Latest Research */}
      {latestResearch.length > 0 && (
        <section className="py-24 px-8 sm:px-12 lg:px-16 xl:px-24" style={{ backgroundColor: 'var(--background)' }}>
          <div className="max-w-screen-2xl mx-auto">
            <div className="mb-12 flex items-center justify-between">
              <div>
                <h2 className="text-4xl sm:text-5xl font-bold text-blue-700 dark:text-blue-400 mb-2">
                  Latest Research
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-400">
                  Recent technical insights and learning resources
                </p>
              </div>
              <Link
                href="/research"
                className="hidden sm:inline-flex items-center gap-2 px-6 py-3 text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
              >
                View All
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {latestResearch.map((research: any, index: number) => (
                <ResearchCard key={research._id || `research-${index}`} research={research} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Latest Notes */}
      {latestNotes.length > 0 && (
        <section className="py-24 px-8 sm:px-12 lg:px-16 xl:px-24" style={{ backgroundColor: 'var(--surface)' }}>
          <div className="max-w-screen-2xl mx-auto">
            <div className="mb-12 flex items-center justify-between">
              <div>
                <h2 className="text-4xl sm:text-5xl font-bold mb-2" style={{ color: 'var(--nav-text)' }}>
                  Latest Notes
                </h2>
                <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
                  Quick thoughts and technical notes
                </p>
              </div>
              <Link
                href="/notes"
                className="hidden sm:inline-flex items-center gap-2 px-6 py-3 font-semibold transition-colors"
                style={{ color: 'var(--nav-text)' }}
              >
                View All
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {latestNotes.map((note: any, index: number) => (
                <NoteCard key={note._id || `note-${index}`} note={note} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Latest Blog Posts */}
      <section className="py-24 px-8 sm:px-12 lg:px-16 xl:px-24" style={{ backgroundColor: 'var(--surface)' }}>
        <div className="max-w-screen-2xl mx-auto">
          <div className="mb-12 flex items-center justify-between">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-blue-700 dark:text-blue-400 mb-2">
                Latest Blog Posts
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                Articles and insights on AI, ML, and technology
              </p>
            </div>
            <Link
              href="/blog"
              className="hidden sm:inline-flex items-center gap-2 px-6 py-3 text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
            >
              View All
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
          
          {loading ? (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="animate-pulse">
                  <div className="bg-slate-200 dark:bg-slate-700 rounded-xl h-64 mb-4"></div>
                  <div className="bg-slate-200 dark:bg-slate-700 rounded h-4 mb-2"></div>
                  <div className="bg-slate-200 dark:bg-slate-700 rounded h-3 w-3/4"></div>
                </div>
              ))}
            </div>
          ) : latestBlogs.length > 0 ? (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {latestBlogs.map((blog: BlogMeta, index: number) => (
                <BlogCard key={blog._id || `blog-${index}`} blog={blog} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-slate-600 dark:text-slate-400 text-lg">
                No blog posts available at the moment.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
