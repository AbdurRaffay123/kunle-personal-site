"use client";

import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { useAuth } from "@/contexts/AuthContext";
import LogoutModal from "./LogoutModal";
import ThemeToggle from "@/components/UI/ThemeToggle";

interface AdminHeaderProps {
  title: string;
  onMenuClick: () => void;
}

export default function AdminHeader({ title, onMenuClick }: AdminHeaderProps) {
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
    <header className="flex justify-between items-center py-2 sm:py-3 md:py-4 px-3 sm:px-4 md:px-6 lg:px-8 shadow-md border-b" style={{ 
      backgroundColor: 'var(--card)',
      borderColor: 'var(--border)'
    }}>
      {/* Left side */}
      <div className="flex items-center gap-2 sm:gap-3 md:gap-4 flex-1 min-w-0">
        <button
          onClick={onMenuClick}
          className="p-1.5 sm:p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors flex-shrink-0"
          style={{ color: 'var(--text-primary)' }}
        >
          <Bars3Icon className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>
        <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold truncate" style={{ color: 'var(--text-primary)' }}>
          {title}
        </h1>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-2 sm:gap-3 md:gap-4 flex-shrink-0">
        {/* User Info - Hidden on very small screens */}
        {user && (
          <div className="hidden sm:flex items-center gap-1 sm:gap-2 text-xs sm:text-sm px-2 sm:px-3 md:px-5" style={{ color: 'var(--text-primary)' }}>
            <span className="hidden md:inline">Welcome,</span>
            <span className="font-medium truncate max-w-[100px] sm:max-w-none">
              {user.email || "Admin"}
            </span>
          </div>
        )}

        {/* Enhanced Theme Toggle */}
        <ThemeToggle variant="minimal" />

        {/* Logout Button - Smaller on mobile */}
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white px-2 py-1.5 sm:px-3 sm:py-2 md:px-4 md:py-2 rounded-md transition-colors text-xs sm:text-sm md:text-base font-medium cursor-pointer hover:scale-105"
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
