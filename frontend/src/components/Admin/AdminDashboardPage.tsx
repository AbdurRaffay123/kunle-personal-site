/**
 * Admin Dashboard Page - Clean Component without Auth Logic
 */

"use client";

import { useAuth } from "@/contexts/AuthContext";
import AdminLayout from "@/components/Admin/AdminLayout";
import AdminCard from "@/components/Admin/AdminCard";
import {
  DocumentTextIcon,
  BookOpenIcon,
  FolderIcon,
  AcademicCapIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";

export default function AdminDashboardPage() {
  const { user } = useAuth(); // Only get user for display

  // Mock data for dashboard cards
  const stats = [
    {
      title: "Total Blogs",
      value: "12",
      icon: <DocumentTextIcon className="h-6 w-6 text-white" />,
      color: "blue" as const,
    },
    {
      title: "Total Notes",
      value: "8",
      icon: <BookOpenIcon className="h-6 w-6 text-white" />,
      color: "green" as const,
    },
    {
      title: "Total Projects",
      value: "15",
      icon: <FolderIcon className="h-6 w-6 text-white" />,
      color: "yellow" as const,
    },
    {
      title: "Research Items",
      value: "6",
      icon: <AcademicCapIcon className="h-6 w-6 text-white" />,
      color: "purple" as const,
    },
    {
      title: "Total Comments",
      value: "24",
      icon: <ChatBubbleLeftRightIcon className="h-6 w-6 text-white" />,
      color: "red" as const,
    },
  ];

  return (
    <AdminLayout title="Dashboard">
      <div className="space-y-8">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-blue-600 to-sky-500 rounded-xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-2">Welcome Back!</h2>
          <p className="text-blue-100 mb-1">
            Hello, {user?.email || 'Admin'} 👋
          </p>
          <p className="text-blue-100">
            Manage your content, monitor activity, and keep your site updated.
          </p>
          <div className="mt-4 text-sm text-blue-200">
            Last login: {new Date().toLocaleDateString('en-US', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </div>
        </div>

        {/* Stats Cards */}
        <div>
          <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">
            Content Overview
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {stats.map((stat, index) => (
              <AdminCard
                key={index}
                title={stat.title}
                value={stat.value}
                icon={stat.icon}
                color={stat.color}
              />
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-6">
          <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">
            Quick Actions
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <button className="flex items-center p-4 bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/40 rounded-lg transition-colors group">
              <DocumentTextIcon className="h-8 w-8 text-blue-600 dark:text-blue-400 mr-3" />
              <div className="text-left">
                <p className="font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                  New Blog Post
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Create a new article
                </p>
              </div>
            </button>

            <button className="flex items-center p-4 bg-green-50 dark:bg-green-900/20 hover:bg-green-100 dark:hover:bg-green-900/40 rounded-lg transition-colors group">
              <BookOpenIcon className="h-8 w-8 text-green-600 dark:text-green-400 mr-3" />
              <div className="text-left">
                <p className="font-semibold text-slate-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400">
                  Add Note
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Write a quick note
                </p>
              </div>
            </button>

            <button className="flex items-center p-4 bg-yellow-50 dark:bg-yellow-900/20 hover:bg-yellow-100 dark:hover:bg-yellow-900/40 rounded-lg transition-colors group">
              <FolderIcon className="h-8 w-8 text-yellow-600 dark:text-yellow-400 mr-3" />
              <div className="text-left">
                <p className="font-semibold text-slate-900 dark:text-white group-hover:text-yellow-600 dark:group-hover:text-yellow-400">
                  New Project
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Add a project
                </p>
              </div>
            </button>

            <button className="flex items-center p-4 bg-purple-50 dark:bg-purple-900/20 hover:bg-purple-100 dark:hover:bg-purple-900/40 rounded-lg transition-colors group">
              <AcademicCapIcon className="h-8 w-8 text-purple-600 dark:text-purple-400 mr-3" />
              <div className="text-left">
                <p className="font-semibold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400">
                  Research
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Add research item
                </p>
              </div>
            </button>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
              Recent Activity
            </h3>
            <button className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium">
              View All
            </button>
          </div>
          <div className="space-y-4">
            {[
              { 
                action: "New blog post published", 
                title: "Getting Started with Next.js",
                time: "2 hours ago", 
                type: "blog",
                user: "You"
              },
              { 
                action: "Comment approved", 
                title: "Great article on React hooks!",
                time: "4 hours ago", 
                type: "comment",
                user: "John Doe"
              },
              { 
                action: "Project updated", 
                title: "Personal Portfolio Website",
                time: "6 hours ago", 
                type: "project",
                user: "You"
              },
              { 
                action: "Note created", 
                title: "Meeting notes from client call",
                time: "1 day ago", 
                type: "note",
                user: "You"
              },
              { 
                action: "Research item added", 
                title: "AI in Web Development",
                time: "2 days ago", 
                type: "research",
                user: "You"
              },
            ].map((activity, index) => (
              <div key={index} className="flex items-start justify-between p-4 bg-slate-50 dark:bg-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="font-medium text-slate-900 dark:text-white">
                      {activity.action}
                    </p>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      activity.type === "blog" ? "bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-200" :
                      activity.type === "comment" ? "bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-200" :
                      activity.type === "project" ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-200" :
                      activity.type === "note" ? "bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-200" :
                      "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/50 dark:text-indigo-200"
                    }`}>
                      {activity.type}
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">
                    "{activity.title}"
                  </p>
                  <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-500">
                    <span>by {activity.user}</span>
                    <span>•</span>
                    <span>{activity.time}</span>
                  </div>
                </div>
                <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* System Status */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-6">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
              System Status
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600 dark:text-slate-400">Server Status</span>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-sm font-medium text-green-600 dark:text-green-400">Online</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600 dark:text-slate-400">Database</span>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-sm font-medium text-green-600 dark:text-green-400">Connected</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600 dark:text-slate-400">Last Backup</span>
                <span className="text-sm font-medium text-slate-900 dark:text-white">2 hours ago</span>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-6">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
              Storage Usage
            </h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-slate-600 dark:text-slate-400">Images</span>
                  <span className="font-medium text-slate-900 dark:text-white">2.1 GB / 5 GB</span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '42%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-slate-600 dark:text-slate-400">Documents</span>
                  <span className="font-medium text-slate-900 dark:text-white">850 MB / 2 GB</span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: '42.5%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
