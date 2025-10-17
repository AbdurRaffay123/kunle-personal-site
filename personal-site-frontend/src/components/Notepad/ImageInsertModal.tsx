/**
 * Image Insert Modal Component
 * 
 * Provides three ways to insert images:
 * 1. Image via URL
 * 2. Local file upload
 * 3. Drag and drop support
 */

"use client";

import { useState, useRef } from 'react';
import { Upload, Link, X, Image as ImageIcon } from 'lucide-react';
import { notepadService } from '@/services/notepadService';
import toast from 'react-hot-toast';

interface ImageInsertModalProps {
  isOpen: boolean;
  onClose: () => void;
  onInsert: (src: string, alt: string) => void;
}

export function ImageInsertModal({ isOpen, onClose, onInsert }: ImageInsertModalProps) {
  const [activeTab, setActiveTab] = useState<'url' | 'upload'>('url');
  const [url, setUrl] = useState('');
  const [alt, setAlt] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUrlSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (url.trim() && alt.trim()) {
      onInsert(url.trim(), alt.trim());
      resetForm();
    } else {
      toast.error('Please provide both URL and alt text');
    }
  };

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    try {
      const result = await notepadService.uploadImage(file);
      if (result.success && result.url) {
        setPreview(result.url);
        toast.success('Image ready to insert');
      } else {
        toast.error(result.error || 'Failed to process image');
      }
    } catch (error) {
      toast.error('Failed to process image');
    } finally {
      setIsUploading(false);
    }
  };

  const handleFileInsert = () => {
    if (preview && alt.trim()) {
      onInsert(preview, alt.trim());
      resetForm();
    } else {
      toast.error('Please provide alt text');
    }
  };

  const resetForm = () => {
    setUrl('');
    setAlt('');
    setPreview(null);
    setIsUploading(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-slate-800 rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-700">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Insert Image
          </h3>
          <button
            onClick={handleClose}
            className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-slate-200 dark:border-slate-700">
          <button
            onClick={() => setActiveTab('url')}
            className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
              activeTab === 'url'
                ? 'text-blue-600 border-b-2 border-blue-600 dark:text-blue-400'
                : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300'
            }`}
          >
            <Link className="w-4 h-4 inline mr-2" />
            From URL
          </button>
          <button
            onClick={() => setActiveTab('upload')}
            className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
              activeTab === 'upload'
                ? 'text-blue-600 border-b-2 border-blue-600 dark:text-blue-400'
                : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300'
            }`}
          >
            <Upload className="w-4 h-4 inline mr-2" />
            Upload File
          </button>
        </div>

        {/* Content */}
        <div className="p-4">
          {/* URL Tab */}
          {activeTab === 'url' && (
            <form onSubmit={handleUrlSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Image URL
                </label>
                <input
                  type="url"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="https://example.com/image.jpg"
                  className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Alt Text (for accessibility)
                </label>
                <input
                  type="text"
                  value={alt}
                  onChange={(e) => setAlt(e.target.value)}
                  placeholder="Describe the image"
                  className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              {url && (
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Preview
                  </label>
                  <div className="border border-slate-300 dark:border-slate-600 rounded-md p-2 bg-slate-50 dark:bg-slate-700">
                    <img
                      src={url}
                      alt="Preview"
                      className="max-w-full h-32 object-contain mx-auto"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.nextElementSibling?.classList.remove('hidden');
                      }}
                    />
                    <div className="hidden text-center text-slate-500 dark:text-slate-400 py-8">
                      <ImageIcon className="w-8 h-8 mx-auto mb-2" />
                      <p>Invalid image URL</p>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={handleClose}
                  className="px-4 py-2 text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  Insert Image
                </button>
              </div>
            </form>
          )}

          {/* Upload Tab */}
          {activeTab === 'upload' && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Choose Image File
                </label>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/png,image/jpeg,image/jpg,image/webp,image/svg+xml"
                  onChange={handleFileSelect}
                  className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Supported formats: PNG, JPEG, WebP, SVG. Max size: 5MB
                </p>
              </div>

              {isUploading && (
                <div className="text-center py-4">
                  <div className="inline-block animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">Processing image...</p>
                </div>
              )}

              {preview && (
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Alt Text (for accessibility)
                  </label>
                  <input
                    type="text"
                    value={alt}
                    onChange={(e) => setAlt(e.target.value)}
                    placeholder="Describe the image"
                    className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
              )}

              {preview && (
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Preview
                  </label>
                  <div className="border border-slate-300 dark:border-slate-600 rounded-md p-2 bg-slate-50 dark:bg-slate-700">
                    <img
                      src={preview}
                      alt="Preview"
                      className="max-w-full h-32 object-contain mx-auto"
                    />
                  </div>
                </div>
              )}

              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={handleClose}
                  className="px-4 py-2 text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-300"
                >
                  Cancel
                </button>
                <button
                  onClick={handleFileInsert}
                  disabled={!preview || !alt.trim()}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Insert Image
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
