/**
 * Admin Dashboard Page - Clean Component without Auth Logic
 */

"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import AdminLayout from "@/components/Admin/AdminLayout";
import AdminCard from "@/components/Admin/AdminCard";
import { getDashboardStats, getRecentActivity } from "@/lib/api";
import {
  DocumentTextIcon,
  BookOpenIcon,
  BriefcaseIcon,
  ChatBubbleLeftRightIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

interface DashboardStats {
  totalBlogs: number;
  totalNotes: number;
  totalProjects?: number;
  totalResearch?: number;
  totalPortfolio?: number;
  totalComments: number;
}

interface ActivityItem {
  id: string;
  type: string;
  action: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  user: string;
  postId?: string;
  postType?: string;
}

export default function AdminDashboardPage() {
  const router = useRouter();
  const { user } = useAuth();
  const [stats, setStats] = useState<DashboardStats>({
    totalBlogs: 0,
    totalNotes: 0,
    totalProjects: 0,
    totalResearch: 0,
    totalPortfolio: 0,
    totalComments: 0,
  });
  const [activities, setActivities] = useState<ActivityItem[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch dashboard data
  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setLoading(true);
        const [statsData, activityData] = await Promise.all([
          getDashboardStats(),
          getRecentActivity(5)
        ]);
        setStats(statsData);
        setActivities(activityData);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  // Format stats for display
  const statsCards = [
    {
      title: "Total Blogs",
      value: stats.totalBlogs.toString(),
      icon: <DocumentTextIcon className="h-6 w-6 text-white" />,
      color: "blue" as const,
    },
    {
      title: "Total Notes",
      value: stats.totalNotes.toString(),
      icon: <BookOpenIcon className="h-6 w-6 text-white" />,
      color: "green" as const,
    },
    {
      title: "Portfolio Items",
      value: ((stats.totalProjects || 0) + (stats.totalResearch || 0)).toString(),
      icon: <BriefcaseIcon className="h-6 w-6 text-white" />,
      color: "purple" as const,
    },
    {
      title: "Total Comments",
      value: stats.totalComments.toString(),
      icon: <ChatBubbleLeftRightIcon className="h-6 w-6 text-white" />,
      color: "red" as const,
    },
  ];

  // Quick action handlers
  const handleQuickAction = (action: string) => {
    switch (action) {
      case 'blog':
        router.push('/admin/dashboard/blogs');
        break;
      case 'note':
        router.push('/admin/dashboard/notes');
        break;
      case 'portfolio':
        router.push('/admin/dashboard/portfolio');
        break;
      default:
        break;
    }
  };

  // Handle activity item click - redirect to appropriate page
  const handleActivityClick = (activity: ActivityItem) => {
    const { type, postId } = activity;
    
    switch (type) {
      case 'blog':
        router.push('/admin/dashboard/blogs');
        break;
      case 'note':
        router.push('/admin/dashboard/notes');
        break;
      case 'project':
      case 'research':
        router.push('/admin/dashboard/portfolio');
        break;
      case 'comment':
        // Redirect to the post type where the comment was made
        if (activity.postType === 'blog') {
          router.push('/admin/dashboard/blogs');
        } else {
          router.push('/admin/dashboard/portfolio');
        }
        break;
      default:
        console.log('Unknown activity type:', type);
    }
  };

  // Format time ago
  const formatTimeAgo = (dateString: string) => {
    // Use a fixed reference date to prevent hydration mismatch
    const now = new Date('2025-01-15T16:00:00Z');
    const date = new Date(dateString);
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
    
    if (diffInSeconds < 60) return 'Just now';
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} minutes ago`;
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} hours ago`;
    return `${Math.floor(diffInSeconds / 86400)} days ago`;
  };

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
            Last login: {new Date('2025-01-15T16:00:00Z').toLocaleDateString('en-US', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </div>
        </div>

        {/* Stats Cards */}
        <div>
          <h3 className="text-2xl font-semibold mb-6" style={{ color: 'var(--text-primary)' }}>
            Content Overview
          </h3>
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[...Array(4)].map((_, index) => (
                <div key={index} className="animate-pulse">
                  <div className="bg-slate-200 dark:bg-slate-700 rounded-lg h-24"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {statsCards.map((stat, index) => (
                <AdminCard
                  key={index}
                  title={stat.title}
                  value={stat.value}
                  icon={stat.icon}
                  color={stat.color}
                />
              ))}
            </div>
          )}
        </div>

        {/* Quick Actions */}
        <div className="rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300" style={{ backgroundColor: 'var(--admin-quick-actions-bg)' }}>
          <h3 className="text-2xl font-semibold mb-6" style={{ color: 'var(--text-primary)' }}>
            Quick Actions
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <button 
              onClick={() => handleQuickAction('blog')}
              className="flex items-center p-4 hover:shadow-md rounded-lg transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800 cursor-pointer"
              style={{ backgroundColor: 'var(--admin-quick-action-card-bg)' }}
            >
              <DocumentTextIcon className="h-8 w-8 text-blue-600 dark:text-blue-400 mr-3 group-hover:scale-110 transition-transform duration-200" />
              <div className="text-left flex-1">
                <p className="font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200" style={{ color: 'var(--text-primary)' }}>
                  New Blog Post
                </p>
                <p className="text-sm group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors duration-200" style={{ color: 'var(--text-primary)' }}>
                  Create a new article
                </p>
              </div>
              <ArrowRightIcon className="h-5 w-5 text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:translate-x-1 group-hover:scale-110 transition-all duration-200" />
            </button>

            <button 
              onClick={() => handleQuickAction('note')}
              className="flex items-center p-4 hover:shadow-md rounded-lg transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800 cursor-pointer"
              style={{ backgroundColor: 'var(--admin-quick-action-card-bg)' }}
            >
              <BookOpenIcon className="h-8 w-8 text-green-600 dark:text-green-400 mr-3 group-hover:scale-110 transition-transform duration-200" />
              <div className="text-left flex-1">
                <p className="font-semibold group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-200" style={{ color: 'var(--text-primary)' }}>
                  Add Note
                </p>
                <p className="text-sm group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors duration-200" style={{ color: 'var(--text-primary)' }}>
                  Write a quick note
                </p>
              </div>
              <ArrowRightIcon className="h-5 w-5 text-slate-400 group-hover:text-green-600 dark:group-hover:text-green-400 group-hover:translate-x-1 group-hover:scale-110 transition-all duration-200" />
            </button>

            <button 
              onClick={() => handleQuickAction('portfolio')}
              className="flex items-center p-4 hover:shadow-md rounded-lg transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800 cursor-pointer"
              style={{ backgroundColor: 'var(--admin-quick-action-card-bg)' }}
            >
              <BriefcaseIcon className="h-8 w-8 text-purple-600 dark:text-purple-400 mr-3 group-hover:scale-110 transition-transform duration-200" />
              <div className="text-left flex-1">
                <p className="font-semibold group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-200" style={{ color: 'var(--text-primary)' }}>
                  Portfolio
                </p>
                <p className="text-sm group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors duration-200" style={{ color: 'var(--text-primary)' }}>
                  Manage projects & research
                </p>
              </div>
              <ArrowRightIcon className="h-5 w-5 text-slate-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 group-hover:translate-x-1 group-hover:scale-110 transition-all duration-200" />
            </button>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300" style={{ backgroundColor: 'var(--admin-recent-activity-bg)' }}>
          <div className="mb-6">
            <h3 className="text-2xl font-semibold" style={{ color: 'var(--text-primary)' }}>
              Recent Activity
            </h3>
          </div>
          {loading ? (
            <div className="space-y-3">
              {[...Array(5)].map((_, index) => (
                <div key={index} className="animate-pulse">
                  <div className="flex items-start justify-between p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                    <div className="flex-1">
                      <div className="h-4 bg-slate-200 dark:bg-slate-600 rounded w-3/4 mb-2"></div>
                      <div className="h-3 bg-slate-200 dark:bg-slate-600 rounded w-1/2 mb-1"></div>
                      <div className="h-3 bg-slate-200 dark:bg-slate-600 rounded w-1/4"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : activities.length > 0 ? (
            <div className="space-y-3">
              {activities.map((activity, index) => (
                <div 
                  key={activity.id || index} 
                  onClick={() => handleActivityClick(activity)}
                  className="flex items-start justify-between p-4 rounded-lg hover:shadow-md transition-all duration-300 group cursor-pointer" 
                  style={{ backgroundColor: 'var(--admin-quick-action-card-bg)' }}
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200" style={{ color: 'var(--text-primary)' }}>
                        {activity.action}
                      </p>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium transition-all duration-200 group-hover:scale-105 ${
                        activity.type === "blog" ? "bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-200 group-hover:bg-blue-200 dark:group-hover:bg-blue-900/70" :
                        activity.type === "comment" ? "bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-200 group-hover:bg-green-200 dark:group-hover:bg-green-900/70" :
                        activity.type === "project" ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-200 group-hover:bg-yellow-200 dark:group-hover:bg-yellow-900/70" :
                        activity.type === "note" ? "bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-200 group-hover:bg-purple-200 dark:group-hover:bg-purple-900/70" :
                        "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/50 dark:text-indigo-200 group-hover:bg-indigo-200 dark:group-hover:bg-indigo-900/70"
                      }`}>
                        {activity.type}
                      </span>
                    </div>
                    <p className="text-sm mb-1 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors duration-200" style={{ color: 'var(--text-primary)' }}>
                      "{activity.title}"
                    </p>
                    <div className="flex items-center gap-2 text-xs group-hover:text-slate-600 dark:group-hover:text-slate-400 transition-colors duration-200" style={{ color: 'var(--text-primary)' }}>
                      <span>by {activity.user}</span>
                      <span>•</span>
                      <span>{formatTimeAgo(activity.updatedAt)}</span>
                    </div>
                  </div>
                  <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 group-hover:translate-x-1 group-hover:scale-110 transition-all duration-200">
                    <ArrowRightIcon className="h-5 w-5" />
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-slate-500 dark:text-slate-400">No recent activity found</p>
            </div>
          )}
        </div>

      </div>
    </AdminLayout>
  );
}
