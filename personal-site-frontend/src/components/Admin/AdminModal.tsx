/**
 * Admin Modal - Generic modal for forms
 */

"use client";

import { useEffect } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

interface AdminModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export default function AdminModal({ isOpen, onClose, title, children }: AdminModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-2 md:p-4">
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
          onClick={onClose}
        />

        {/* Modal */}
        <div className="relative rounded-lg md:rounded-xl shadow-xl w-full max-w-2xl max-h-[95vh] md:max-h-[90vh] overflow-y-auto" style={{ backgroundColor: 'var(--card)' }}>
          {/* Header */}
          <div className="flex items-center justify-between p-4 md:p-6 border-b" style={{ borderColor: 'var(--border)' }}>
            <h3 className="text-lg md:text-xl font-semibold" style={{ color: 'var(--text-primary)' }}>
              {title}
            </h3>
            <button
              onClick={onClose}
              className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-md transition-colors"
              style={{ color: 'var(--text-primary)' }}
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          </div>

          {/* Content */}
          <div className="p-4 md:p-6">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
