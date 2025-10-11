/**
 * Admin Header - Top navigation bar
 */

"use client";

import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { useAuth } from "@/contexts/AuthContext";
import LogoutModal from "./LogoutModal";

interface AdminHeaderProps {
  title: string;
  onMenuClick: () => void;
}

export default function AdminHeader({ title, onMenuClick }: AdminHeaderProps) {
  const { theme, setTheme } = useTheme();
  const { user, logout } = useAuth();
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleLogout = () => {
    setShowLogoutModal(true);
  };

  const confirmLogout = () => {
    logout();
    setShowLogoutModal(false);
  };

  return (
    <header className="flex justify-between items-center bg-white dark:bg-slate-800 py-4 px-6 lg:px-8 shadow-md border-b border-slate-200 dark:border-slate-700">
      {/* Left side */}
      <div className="flex items-center gap-4">
        <button
          onClick={onMenuClick}
          className="md:hidden p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
        >
          <Bars3Icon className="h-6 w-6" />
        </button>
        <h1 className="text-2xl font-semibold text-slate-900 dark:text-white">
          {title}
        </h1>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-4">
        {/* User Info */}
        {user && (
          <div className="hidden sm:flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 px-5">
            <span>Welcome,</span>
            <span className="font-medium text-slate-900 dark:text-slate-200">
              {user.user.email}
            </span>
          </div>
        )}

        {/* Theme Toggle */}
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors duration-200 cursor-pointer hover:scale-105"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? (
            <SunIcon className="h-5 w-5" />
          ) : (
            <MoonIcon className="h-5 w-5" />
          )}
        </button>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition-colors font-medium cursor-pointer hover:scale-105"
        >
          Sign Out
        </button>
      </div>

      {/* Logout Confirmation Modal */}
      <LogoutModal
        isOpen={showLogoutModal}
        onClose={() => setShowLogoutModal(false)}
        onConfirm={confirmLogout}
      />
    </header>
  );
}
