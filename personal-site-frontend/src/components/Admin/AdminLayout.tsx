/**
 * Admin Layout - Shared layout for all admin pages
 */

"use client";

import { useState, useEffect, createContext, useContext } from "react";
import { useRouter } from "next/navigation";
import AdminSidebar from "./AdminSidebar";
import AdminHeader from "./AdminHeader";
import { useAuth } from "@/contexts/AuthContext";

interface AdminLayoutProps {
  children: React.ReactNode;
  title: string;
}

// Context to share sidebar state with child components
const SidebarContext = createContext<{ sidebarOpen: boolean }>({ sidebarOpen: false });

export const useSidebar = () => useContext(SidebarContext);

export default function AdminLayout({ children, title }: AdminLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push("/admin/login");
    }
  }, [isAuthenticated, isLoading, router]);

  // Show loading while checking authentication
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: 'var(--loading-bg)' }}>
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p style={{ color: 'var(--text-primary)' }}>Loading...</p>
        </div>
      </div>
    );
  }

  // Don't render if not authenticated
  if (!isAuthenticated) {
    return null;
  }

  return (
    <SidebarContext.Provider value={{ sidebarOpen }}>
      <div className="flex min-h-screen text-slate-800 dark:text-slate-100" style={{ backgroundColor: 'var(--background)' }}>
        {/* Sidebar */}
        <AdminSidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />

        {/* Mobile sidebar overlay - transparent in light mode, semi-transparent in dark mode */}
        {sidebarOpen && (
          <div 
            className="fixed inset-0 bg-black/0 dark:bg-black/50 z-40 md:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main content */}
        <div className="flex-1 flex flex-col md:ml-16 lg:ml-64">
          {/* Header - Single header, hidden on mobile when sidebar is open */}
          {!sidebarOpen && (
            <AdminHeader
              title={title}
              onMenuClick={() => setSidebarOpen(true)}
            />
          )}

          {/* Page content */}
          <main className="flex-1 p-1 sm:p-2 md:p-4 lg:p-6 xl:p-8 overflow-x-hidden">
            <div className="max-w-7xl mx-auto w-full">
              {children}
            </div>
          </main>
        </div>
      </div>
    </SidebarContext.Provider>
  );
}
