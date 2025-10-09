/**
 * Home page with premium layout and proper desktop width
 */

import Link from "next/link";
import { motion } from "framer-motion";
import Hero from "@/components/Hero/Hero";
import NoteCard from "@/components/Card/NoteCard";
import BlogCard from "@/components/Card/BlogCard";
import ProjectCard from "@/components/Card/ProjectCard";
import { getNotes, getBlogs, getProjects } from "@/lib/api";
import { generateMetadata as genMeta } from "@/components/SEO/SEO";

export const metadata = genMeta({
  title: "Olukunle Owolabi",
  description:
    "Lead AI Engineer & Applied Scientist with 7+ years of End-to-End AI & ML experience. Ex Meta Engineer, PhD at Tufts.",
  type: "website",
});

export default async function Home() {
  // Fetch latest content with error handling
  const [notes, blogs, projects] = await Promise.all([
    getNotes().catch(() => []),
    getBlogs().catch(() => []),
    getProjects().catch(() => []),
  ]);

  const latestNotes = notes.slice(0, 3);
  const latestBlogs = blogs.slice(0, 3);
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3) || projects.slice(0, 3);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <Hero />

      {/* Quick Links Section */}
      <section className="py-24 px-8 sm:px-12 lg:px-16 xl:px-24 bg-white dark:bg-slate-900">
        <div className="max-w-screen-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-blue-700 dark:text-blue-400 mb-4">
              Explore My Work
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
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
                className="group relative overflow-hidden rounded-xl bg-white/80 dark:bg-slate-800/60 backdrop-blur-sm border border-slate-200/30 dark:border-slate-700/30 p-8 shadow-lg hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 hover:scale-105"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                <div className="relative z-10">
                  <div className="mb-4 text-5xl">{item.icon}</div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
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
        <section className="py-24 px-8 sm:px-12 lg:px-16 xl:px-24 bg-slate-50 dark:bg-slate-900/50">
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
              {featuredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Latest Notes */}
      {latestNotes.length > 0 && (
        <section className="py-24 px-8 sm:px-12 lg:px-16 xl:px-24 bg-white dark:bg-slate-900">
          <div className="max-w-screen-2xl mx-auto">
            <div className="mb-12 flex items-center justify-between">
              <div>
                <h2 className="text-4xl sm:text-5xl font-bold text-blue-700 dark:text-blue-400 mb-2">
                  Latest Notes
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-400">
                  Recent technical insights and learning resources
                </p>
              </div>
              <Link
                href="/notes"
                className="hidden sm:inline-flex items-center gap-2 px-6 py-3 text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
              >
                View All
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {latestNotes.map((note, index) => (
                <NoteCard key={note.slug} note={note} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Latest Blog Posts */}
      {latestBlogs.length > 0 && (
        <section className="py-24 px-8 sm:px-12 lg:px-16 xl:px-24 bg-slate-50 dark:bg-slate-900/50">
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
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {latestBlogs.map((blog, index) => (
                <BlogCard key={blog.slug} blog={blog} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
