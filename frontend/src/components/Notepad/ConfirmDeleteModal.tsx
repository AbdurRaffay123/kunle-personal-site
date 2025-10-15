/**
 * Confirm Delete Modal Component
 * 
 * Reusable confirmation modal for delete operations
 */

"use client";

import { X, AlertTriangle } from 'lucide-react';

interface ConfirmDeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
  itemName?: string;
}

export function ConfirmDeleteModal({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  itemName
}: ConfirmDeleteModalProps) {
  if (!isOpen) return null;

  const handleConfirm = () => {
    onConfirm();
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="rounded-lg shadow-xl max-w-md w-full" style={{ backgroundColor: 'var(--card)' }}>
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-700">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-red-100 dark:bg-red-900/20 rounded-full">
              <AlertTriangle className="w-5 h-5 text-red-600 dark:text-red-400" />
            </div>
            <h3 className="text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>
              {title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4">
          <p className="mb-4" style={{ color: 'var(--text-primary)' }}>
            {message}
          </p>
          
          {itemName && (
            <div className="p-3 rounded-md mb-4" style={{ backgroundColor: 'var(--surface)' }}>
              <p className="font-medium" style={{ color: 'var(--text-primary)' }}>
                "{itemName}"
              </p>
            </div>
          )}

          <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
            This action cannot be undone.
          </p>
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-3 p-4 border-t border-slate-200 dark:border-slate-700">
          <button
            onClick={onClose}
            className="px-4 py-2 transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800 rounded-md cursor-pointer"
            style={{
              color: 'var(--text-primary)',
              backgroundColor: 'var(--card)',
              borderColor: 'var(--border)',
              border: '1px solid'
            }}
          >
            Cancel
          </button>
          <button
            onClick={handleConfirm}
            className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 hover:shadow-lg hover:shadow-red-500/25 transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800 cursor-pointer"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
