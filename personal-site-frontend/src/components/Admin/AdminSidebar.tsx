/**
 * Admin Sidebar - Navigation menu
 * Updated to include Notepad link
 */

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  HomeIcon,
  DocumentTextIcon,
  BookOpenIcon,
  BriefcaseIcon,
  ChatBubbleLeftRightIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

interface AdminSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const navigation = [
  { name: "Dashboard", href: "/admin/dashboard", icon: HomeIcon },
  { name: "Blogs", href: "/admin/dashboard/blogs", icon: DocumentTextIcon },
  { name: "Notes", href: "/admin/dashboard/notes", icon: BookOpenIcon },
  { name: "Portfolio", href: "/admin/dashboard/portfolio", icon: BriefcaseIcon },
  { name: "Comments", href: "/admin/dashboard/comments", icon: ChatBubbleLeftRightIcon },
  { name: "About", href: "/admin/dashboard/about", icon: UserIcon },
];

export default function AdminSidebar({ isOpen, onClose }: AdminSidebarProps) {
  const pathname = usePathname();

  return (
    <>
      {/* Mobile overlay - transparent in light mode, semi-transparent in dark mode */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/0 dark:bg-black/50 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-16 md:w-20 lg:w-64 text-slate-200 transform transition-all duration-300 ease-in-out md:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ backgroundColor: 'var(--surface)' }}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-center h-16 px-2 md:px-4 lg:px-6 border-b border-slate-700">
            <h2 className="hidden lg:block text-xl font-bold bg-gradient-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent">
              Admin Panel
            </h2>
            <div className="lg:hidden w-8 h-8 bg-gradient-to-r from-blue-400 to-sky-400 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">A</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-2 md:px-3 lg:px-6 py-6 space-y-2">
            {navigation.map((item) => {
              // Check if current path matches exactly or starts with the href for nested routes
              const isActive = pathname === item.href || 
                              (item.href !== "/admin/dashboard" && pathname.startsWith(item.href));
              
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={onClose}
                  className={`flex items-center px-2 md:px-3 lg:px-4 py-3 rounded-md text-base font-medium transition-all group relative ${
                    isActive
                      ? "shadow-md"
                      : "hover:bg-slate-700"
                  }`}
                  style={{
                    backgroundColor: isActive ? 'var(--nav-text)' : 'transparent',
                    color: isActive ? 'white' : 'var(--text-primary)'
                  }}
                  title={item.name} // Tooltip for icon-only mode
                >
                  <item.icon className="h-5 w-5 lg:mr-3 flex-shrink-0" />
                  <span className="hidden lg:block">{item.name}</span>
                  
                  {/* Tooltip for tablet/mobile icon-only mode */}
                  <div className="absolute left-full ml-2 px-2 py-1 bg-slate-900 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50 lg:hidden">
                    {item.name}
                  </div>
                </Link>
              );
            })}
          </nav>

          {/* Footer */}
          <div className="px-6 py-4 border-t border-slate-700">
            <p className="text-sm text-slate-400">
              Admin Panel v1.0
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
