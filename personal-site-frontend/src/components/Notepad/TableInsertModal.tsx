"use client";

import { useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface TableInsertModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (rows: number, cols: number, withHeader: boolean) => void;
}

export function TableInsertModal({ isOpen, onClose, onConfirm }: TableInsertModalProps) {
  const [rows, setRows] = useState('3');
  const [cols, setCols] = useState('3');
  const [withHeader, setWithHeader] = useState(true);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const rowNum = parseInt(rows) || 3;
    const colNum = parseInt(cols) || 3;
    
    if (rowNum < 1 || rowNum > 20 || colNum < 1 || colNum > 20) {
      alert('Rows and columns must be between 1 and 20');
      return;
    }
    
    onConfirm(rowNum, colNum, withHeader);
    onClose();
    // Reset form
    setRows('3');
    setCols('3');
    setWithHeader(true);
  };

  const handleClose = () => {
    onClose();
    // Reset form
    setRows('3');
    setCols('3');
    setWithHeader(true);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={handleClose}>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 w-full max-w-md mx-4" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Insert Table</h2>
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
          >
            <XMarkIcon className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="rows" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Number of Rows
            </label>
            <input
              type="number"
              id="rows"
              min="1"
              max="20"
              value={rows}
              onChange={(e) => setRows(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              required
              autoFocus
            />
          </div>

          <div>
            <label htmlFor="cols" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Number of Columns
            </label>
            <input
              type="number"
              id="cols"
              min="1"
              max="20"
              value={cols}
              onChange={(e) => setCols(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              required
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="withHeader"
              checked={withHeader}
              onChange={(e) => setWithHeader(e.target.checked)}
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label htmlFor="withHeader" className="ml-2 text-sm text-gray-700 dark:text-gray-300">
              Include Header Row
            </label>
          </div>

          <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200 dark:border-gray-700">
            <button
              type="button"
              onClick={handleClose}
              className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Insert Table
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

