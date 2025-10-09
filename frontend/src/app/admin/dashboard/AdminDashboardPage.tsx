/**
 * Admin Dashboard Page
 */

"use client";

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
          <h2 className="text-3xl font-bold mb-2">Welcome to Admin Panel</h2>
          <p className="text-blue-100">
            Manage your content, monitor activity, and keep your site updated.
          </p>
        </div>

        {/* Stats Cards */}
        <div>
          <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">
            Overview
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

        {/* Recent Activity */}
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-6">
          <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">
            Recent Activity
          </h3>
          <div className="space-y-4">
            {[
              { action: "New blog post published", time: "2 hours ago", type: "blog" },
              { action: "Comment approved", time: "4 hours ago", type: "comment" },
              { action: "Project updated", time: "6 hours ago", type: "project" },
              { action: "Note created", time: "1 day ago", type: "note" },
            ].map((activity, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                <div>
                  <p className="font-medium text-slate-900 dark:text-white">
                    {activity.action}
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {activity.time}
                  </p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  activity.type === "blog" ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200" :
                  activity.type === "comment" ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" :
                  activity.type === "project" ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200" :
                  "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
                }`}>
                  {activity.type}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
