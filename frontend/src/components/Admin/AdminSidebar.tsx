/**
 * Admin Sidebar - Navigation menu
 */

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  HomeIcon,
  DocumentTextIcon,
  BookOpenIcon,
  FolderIcon,
  AcademicCapIcon,
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
  { name: "Projects", href: "/admin/dashboard/projects", icon: FolderIcon }, // Fixed: changed 'folder' to 'href'
  { name: "Research", href: "/admin/dashboard/research", icon: AcademicCapIcon },
  { name: "Comments", href: "/admin/dashboard/comments", icon: ChatBubbleLeftRightIcon },
  { name: "About", href: "/admin/dashboard/about", icon: UserIcon },
];

export default function AdminSidebar({ isOpen, onClose }: AdminSidebarProps) {
  const pathname = usePathname();

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-slate-800 text-slate-200 transform transition-transform duration-300 ease-in-out md:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-center h-16 px-6 border-b border-slate-700">
            <h2 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent">
              Admin Panel
            </h2>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-6 py-6 space-y-2">
            {navigation.map((item) => {
              // Check if current path matches exactly or starts with the href for nested routes
              const isActive = pathname === item.href || 
                              (item.href !== "/admin/dashboard" && pathname.startsWith(item.href));
              
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={onClose}
                  className={`flex items-center px-4 py-3 rounded-md text-base font-medium transition-all ${
                    isActive
                      ? "bg-blue-700 text-white shadow-md"
                      : "hover:bg-slate-700 hover:text-white"
                  }`}
                >
                  <item.icon className="h-5 w-5 mr-3" />
                  {item.name}
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
