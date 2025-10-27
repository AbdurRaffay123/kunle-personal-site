"use client";

import { useEffect, useState } from "react";
import AdminLayout from "@/components/Admin/AdminLayout";
import { toast, Toaster } from "react-hot-toast";
import { motion } from "framer-motion";
import { 
  getPortfolioItems, 
  createPortfolioItem, 
  updatePortfolioItem, 
  deletePortfolioItem,
  type PortfolioItem 
} from "@/apis/Portfolio/api";

const TYPE_FILTERS = [
  { value: "all", label: "All" },
  { value: "project", label: "Projects" },
  { value: "research", label: "Research" },
];

export default function AdminPortfolioPage() {
  const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<PortfolioItem | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeType, setActiveType] = useState<"all" | "project" | "research">("all");
  const [isLoading, setIsLoading] = useState(false);

  // Delete modal state
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<PortfolioItem | null>(null);

  // Fetch portfolio items
  const fetchPortfolioItems = async () => {
    setIsLoading(true);
    try {
      const response = await getPortfolioItems({ limit: 100 });
      if (response.success) {
        setPortfolioItems(response.data);
      } else {
        toast.error(response.message || "Failed to fetch portfolio items.");
      }
    } catch (error: any) {
      toast.error(error.message || "Failed to fetch portfolio items.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPortfolioItems();
  }, []);

  // Filter items
  const filteredItems = portfolioItems.filter(item => {
    const matchesSearch = !searchTerm ||
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description?.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesType = activeType === "all" || item.type === activeType;
    
    return matchesSearch && matchesType;
  });

  const handleSearch = (value: string) => {
    setSearchTerm(value);
  };

  const handleEdit = (item: PortfolioItem) => {
    setEditingItem(item);
    setIsModalOpen(true);
  };

  const handleDelete = (item: PortfolioItem) => {
    setItemToDelete(item);
    setDeleteModalOpen(true);
  };

  const handleSave = async (data: Partial<PortfolioItem>) => {
    setIsLoading(true);
    try {
      // Ensure technologies and tags are arrays and clean the data
      const processedData = {
        ...data,
        // Clean and validate technologies/tags
        technologies: Array.isArray(data.technologies) 
          ? data.technologies.filter(tech => tech && tech.trim() !== '')
          : [],
        tags: Array.isArray(data.tags) 
          ? data.tags.filter(tag => tag && tag.trim() !== '')
          : [],
        // Ensure required fields are present
        title: data.title?.trim() || '',
        description: data.description?.trim() || '',
        type: data.type || 'project',
        // Clean URLs
        githubUrl: data.githubUrl?.trim() || undefined,
        researchLink: data.researchLink?.trim() || undefined,
        image: data.image?.trim() || undefined,
      };
      
      console.log('Processed data being sent:', processedData);
      
      if (editingItem) {
        // Update existing item
        const response = await updatePortfolioItem(editingItem._id, processedData);
        if (response.success) {
          setPortfolioItems(prev => prev.map(item => 
            item._id === editingItem._id ? response.data : item
          ));
          toast.success('Portfolio item updated successfully!');
        } else {
          toast.error(response.message || 'Failed to update portfolio item.');
        }
      } else {
        // Create new item
        const response = await createPortfolioItem(processedData);
        if (response.success) {
          setPortfolioItems(prev => [response.data, ...prev]);
          toast.success('Portfolio item created successfully!');
        } else {
          toast.error(response.message || 'Failed to create portfolio item.');
        }
      }
      
      setIsModalOpen(false);
      setEditingItem(null);
    } catch (error: any) {
      toast.error(error.message || 'Failed to save portfolio item.');
    } finally {
      setIsLoading(false);
    }
  };

  const confirmDelete = async () => {
    if (!itemToDelete) return;
    setIsLoading(true);
    try {
      const response = await deletePortfolioItem(itemToDelete._id);
      if (response.success) {
        setPortfolioItems(prev => prev.filter(item => item._id !== itemToDelete._id));
        toast.success('Portfolio item deleted successfully!');
      } else {
        toast.error(response.message || 'Failed to delete portfolio item.');
      }
      
      setDeleteModalOpen(false);
      setItemToDelete(null);
    } catch (error: any) {
      toast.error(error.message || 'Failed to delete portfolio item.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    setEditingItem(null);
    setIsModalOpen(false);
  };

  return (
    <AdminLayout title="Portfolio">
      <Toaster position="top-right" />
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Portfolio Management</h2>
            <p className="text-slate-600 dark:text-slate-400">
              Manage your projects and research work
            </p>
          </div>
          <button
            onClick={() => {
              setEditingItem(null);
              setIsModalOpen(true);
            }}
            className="cursor-pointer rounded-md bg-blue-600 px-4 py-2 font-medium text-white transition-colors hover:scale-105 hover:bg-blue-700"
            disabled={isLoading}
          >
            Add New Item
          </button>
        </div>

        {/* Filter and Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Input */}
            <div className="flex-1 max-w-md">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search portfolio items..."
                  value={searchTerm}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border-0 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 shadow-sm"
                  style={{
                    backgroundColor: 'var(--card)',
                    color: 'var(--text-primary)',
                    border: '1px solid var(--border)'
                  }}
                />
              </div>
            </div>

            {/* Type Filter Buttons */}
            <div className="flex items-center gap-1 p-1 rounded-xl" style={{ backgroundColor: 'var(--surface)' }}>
              {TYPE_FILTERS.map((filter) => (
                <button
                  key={filter.value}
                  onClick={() => setActiveType(filter.value as "all" | "project" | "research")}
                  className={`relative px-6 py-2.5 rounded-lg font-medium transition-all duration-300 ${
                    activeType === filter.value
                      ? 'text-white shadow-lg'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                  }`}
                  style={{
                    backgroundColor: activeType === filter.value ? 'var(--primary)' : 'transparent'
                  }}
                >
                  {filter.label}
                  {activeType === filter.value && (
                    <motion.div
                      layoutId="activeFilter"
                      className="absolute inset-0 rounded-lg"
                      style={{ backgroundColor: 'var(--primary)' }}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{filter.label}</span>
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {isLoading && (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
          )}

          {!isLoading && filteredItems.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">📁</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                No portfolio items found
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {searchTerm || activeType !== "all" 
                  ? "Try adjusting your search or filter criteria."
                  : "Get started by adding your first project or research item."
                }
              </p>
              {!searchTerm && activeType === "all" && (
                <button
                  onClick={() => {
                    setEditingItem(null);
                    setIsModalOpen(true);
                  }}
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Add First Item
                </button>
              )}
            </div>
          )}

          {!isLoading && filteredItems.length > 0 && (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-2xl border transition-all duration-300 hover:shadow-2xl hover:scale-105"
                  style={{
                    backgroundColor: 'var(--card)',
                    borderColor: 'var(--border)'
                  }}
                >
                  {/* Type Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold shadow-lg ${
                        item.type === 'project'
                          ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white'
                          : 'bg-gradient-to-r from-purple-500 to-purple-600 text-white'
                      }`}
                    >
                      {item.type === 'project' ? 'Project' : 'Research'}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                      {item.description}
                    </p>

                    {/* Tags/Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {(item.technologies || item.tags || []).slice(0, 3).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 text-xs font-medium rounded-md bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                        >
                          {tag}
                        </span>
                      ))}
                      {(item.technologies || item.tags || []).length > 3 && (
                        <span className="px-2 py-1 text-xs font-medium rounded-md bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300">
                          +{(item.technologies || item.tags || []).length - 3} more
                        </span>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleEdit(item)}
                        className="flex-1 px-3 py-2 text-sm font-medium text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors dark:bg-blue-900/20 dark:text-blue-400 dark:hover:bg-blue-900/30"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(item)}
                        className="flex-1 px-3 py-2 text-sm font-medium text-red-600 bg-red-50 hover:bg-red-100 rounded-lg transition-colors dark:bg-red-900/20 dark:text-red-400 dark:hover:bg-red-900/30"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>

        {/* Create/Edit Modal */}
        {isModalOpen && (
          <PortfolioItemForm
            item={editingItem}
            onSave={handleSave}
            onCancel={handleCancel}
            isLoading={isLoading}
          />
        )}

        {/* Delete Confirmation Modal */}
        {deleteModalOpen && itemToDelete && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-md w-full mx-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Delete Portfolio Item
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Are you sure you want to delete "{itemToDelete.title}"? This action cannot be undone.
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => {
                    setDeleteModalOpen(false);
                    setItemToDelete(null);
                  }}
                  className="flex-1 px-4 py-2 text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
                >
                  Cancel
                </button>
                <button
                  onClick={confirmDelete}
                  disabled={isLoading}
                  className="flex-1 px-4 py-2 bg-red-600 text-white hover:bg-red-700 rounded-lg transition-colors disabled:opacity-50"
                >
                  {isLoading ? 'Deleting...' : 'Delete'}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  );
}

// Portfolio Item Form Component
function PortfolioItemForm({
  item,
  onSave,
  onCancel,
  isLoading = false,
}: {
  item: PortfolioItem | null;
  onSave: (data: Partial<PortfolioItem>) => void;
  onCancel: () => void;
  isLoading?: boolean;
}) {
  const [formData, setFormData] = useState<Partial<PortfolioItem>>(() => ({
    type: 'project',
    title: '',
    description: '',
    technologies: [],
    tags: [],
    githubUrl: '',
    researchLink: '',
    image: '',
    ...item,
  }));

  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>('');

  useEffect(() => {
    setFormData({
      type: 'project',
      title: '',
      description: '',
      technologies: [],
      tags: [],
      githubUrl: '',
      researchLink: '',
      image: '',
      ...item,
    });
    
    // Set image preview if item has an image
    if (item?.image) {
      setImagePreview(item.image);
    } else {
      setImagePreview('');
    }
    setImageFile(null);
  }, [item]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => {
      const newData = { ...prev, [name]: value };
      
      // When type changes, clear the opposite field
      if (name === 'type') {
        if (value === 'project') {
          newData.tags = [];
        } else if (value === 'research') {
          newData.technologies = [];
        }
      }
      
      return newData;
    });
  };

  const handleTagsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const tags = value.split(',').map(tag => tag.trim()).filter(tag => tag !== '');
    setFormData(prev => ({ 
      ...prev, 
      [prev.type === 'project' ? 'technologies' : 'tags']: tags 
    }));
  };

  const handleTechnologiesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const technologies = value.split(',').map(tech => tech.trim()).filter(tech => tech !== '');
    setFormData(prev => ({ 
      ...prev, 
      technologies: technologies 
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file type
      if (!file.type.startsWith('image/')) {
        alert('Please select a valid image file');
        return;
      }
      
      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert('Image size should be less than 5MB');
        return;
      }
      
      setImageFile(file);
      
      // Create preview URL
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setImageFile(null);
    setImagePreview('');
    setFormData(prev => ({ ...prev, image: '' }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // If there's an image file, convert it to base64 and include in formData
    let finalFormData = { ...formData };
    
    if (imageFile) {
      try {
        const base64 = await convertFileToBase64(imageFile);
        finalFormData.image = base64;
      } catch (error) {
        console.error('Error converting image to base64:', error);
        alert('Error processing image. Please try again.');
        return;
      }
    }
    
    onSave(finalFormData);
  };

  const convertFileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          {item ? 'Edit Portfolio Item' : 'Add New Portfolio Item'}
        </h3>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Type Selector */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Item Type
            </label>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full rounded-md border px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500"
              style={{
                backgroundColor: 'var(--card)',
                borderColor: 'var(--border)',
                color: 'var(--text-primary)'
              }}
              disabled={!!item} // Disable type change for existing items
            >
              <option value="project">Project</option>
              <option value="research">Research</option>
            </select>
          </div>

          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Title
            </label>
            <input
              type="text"
              name="title"
              value={formData.title || ''}
              onChange={handleChange}
              required
              className="w-full rounded-md border px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500"
              style={{
                backgroundColor: 'var(--card)',
                borderColor: 'var(--border)',
                color: 'var(--text-primary)'
              }}
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description || ''}
              onChange={handleChange}
              required
              rows={3}
              className="w-full rounded-md border px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500"
              style={{
                backgroundColor: 'var(--card)',
                borderColor: 'var(--border)',
                color: 'var(--text-primary)'
              }}
            />
          </div>

          {/* Technologies/Tags */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              {formData.type === 'project' ? 'Technologies' : 'Tags'} (comma-separated)
            </label>
            <input
              type="text"
              value={(formData.technologies || formData.tags || []).join(', ')}
              onChange={formData.type === 'project' ? handleTechnologiesChange : handleTagsChange}
              placeholder="React, Node.js, MongoDB"
              className="w-full rounded-md border px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500"
              style={{
                backgroundColor: 'var(--card)',
                borderColor: 'var(--border)',
                color: 'var(--text-primary)'
              }}
            />
          </div>

          {/* GitHub URL (for projects) */}
          {formData.type === 'project' && (
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                GitHub URL
              </label>
              <input
                type="url"
                name="githubUrl"
                value={formData.githubUrl || ''}
                onChange={handleChange}
                placeholder="https://github.com/username/repo"
                className="w-full rounded-md border px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                style={{
                  backgroundColor: 'var(--card)',
                  borderColor: 'var(--border)',
                  color: 'var(--text-primary)'
                }}
              />
            </div>
          )}

          {/* Research Link (for research) */}
          {formData.type === 'research' && (
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Research Link
              </label>
              <input
                type="url"
                name="researchLink"
                value={formData.researchLink || ''}
                onChange={handleChange}
                placeholder="https://example.com/research-paper"
                className="w-full rounded-md border px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                style={{
                  backgroundColor: 'var(--card)',
                  borderColor: 'var(--border)',
                  color: 'var(--text-primary)'
                }}
              />
            </div>
          )}

          {/* Image Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Image (Optional)
            </label>
            <div className="space-y-3">
              {/* File Upload Input */}
              <div className="relative">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="w-full rounded-md border px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 dark:file:bg-blue-900 dark:file:text-blue-300"
                  style={{
                    backgroundColor: 'var(--card)',
                    borderColor: 'var(--border)',
                    color: 'var(--text-primary)'
                  }}
                />
              </div>
              
              {/* Image Preview */}
              {imagePreview && (
                <div className="relative">
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="w-full h-32 object-cover rounded-md border"
                    style={{ borderColor: 'var(--border)' }}
                  />
                  <button
                    type="button"
                    onClick={removeImage}
                    className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm hover:bg-red-600"
                  >
                    ×
                  </button>
                </div>
              )}
              
              <div className="text-xs text-gray-500 dark:text-gray-400">
                Upload an image file (max 5MB) or leave empty to use auto-generated image from imageManager
              </div>
            </div>
          </div>

          {/* Form Actions */}
          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onCancel}
              className="flex-1 px-4 py-2 text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="flex-1 px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-lg transition-colors disabled:opacity-50"
            >
              {isLoading ? 'Saving...' : (item ? 'Update' : 'Create')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}