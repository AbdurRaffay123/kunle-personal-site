/**
 * Delete Confirmation Modal Component
 * 
 * A reusable modal for confirming delete actions
 */

"use client";

import { XMarkIcon, ExclamationTriangleIcon } from "@heroicons/react/24/outline";

interface DeleteConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
  itemName?: string;
  isDeleting?: boolean;
}

export default function DeleteConfirmModal({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  itemName,
  isDeleting = false
}: DeleteConfirmModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="flex min-h-full items-center justify-center p-2 md:p-4">
        <div className="relative bg-white dark:bg-slate-800 rounded-lg shadow-xl max-w-md w-full p-4 md:p-6">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 md:top-4 md:right-4 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
            disabled={isDeleting}
          >
            <XMarkIcon className="h-5 w-5 md:h-6 md:w-6" />
          </button>

          {/* Icon */}
          <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 mx-auto bg-red-100 dark:bg-red-900/30 rounded-full mb-3 md:mb-4">
            <ExclamationTriangleIcon className="h-5 w-5 md:h-6 md:w-6 text-red-600 dark:text-red-400" />
          </div>

          {/* Title */}
          <h3 className="text-base md:text-lg font-semibold text-slate-900 dark:text-white text-center mb-2">
            {title}
          </h3>

          {/* Message */}
          <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 text-center mb-2">
            {message}
          </p>

          {/* Item name (if provided) */}
          {itemName && (
            <p className="text-sm md:text-base text-slate-900 dark:text-white font-medium text-center mb-4 md:mb-6">
              &quot;{itemName}&quot;
            </p>
          )}

          {/* Warning */}
          <p className="text-xs md:text-sm text-red-600 dark:text-red-400 text-center mb-4 md:mb-6">
            This action cannot be undone.
          </p>

          {/* Actions */}
          <div className="flex flex-col md:flex-row gap-2 md:gap-3">
            <button
              onClick={onClose}
              className="w-full md:flex-1 px-4 py-2 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-md hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
              disabled={isDeleting}
            >
              Cancel
            </button>
            <button
              onClick={onConfirm}
              className="w-full md:flex-1 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isDeleting}
            >
              {isDeleting ? 'Deleting...' : 'Delete'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


