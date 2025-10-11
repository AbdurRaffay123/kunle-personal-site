/**
 * Admin Projects Management Page
 */

"use client";

import { useState } from "react";
import AdminLayout from "@/components/Admin/AdminLayout";
import AdminTable from "@/components/Admin/AdminTable";
import AdminModal from "@/components/Admin/AdminModal";

interface Project {
  id: number;
  title: string;
  description: string;
  status: "active" | "completed" | "archived";
  tech: string[];
  featured: boolean;
  createdAt: string;
}

export default function AdminProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([
    {
      id: 1,
      title: "AI Recommendation System",
      description: "Advanced ML-based recommendation engine for e-commerce",
      status: "active",
      tech: ["Python", "TensorFlow", "React", "Node.js"],
      featured: true,
      createdAt: "2024-01-05",
    },
    {
      id: 2,
      title: "Real-time Analytics Dashboard",
      description: "Dashboard for monitoring real-time data streams",
      status: "completed",
      tech: ["React", "D3.js", "WebSocket", "MongoDB"],
      featured: false,
      createdAt: "2024-01-12",
    },
    {
      id: 3,
      title: "Blockchain Voting System",
      description: "Secure voting system using blockchain technology",
      status: "archived",
      tech: ["Solidity", "Web3.js", "React", "Ethereum"],
      featured: false,
      createdAt: "2024-01-20",
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const columns = [
    { key: "title", label: "Title" },
    { key: "description", label: "Description" },
    { 
      key: "status", 
      label: "Status",
      render: (value: string) => (
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
          value === "active" 
            ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
            : value === "completed"
            ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
            : "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
        }`}>
          {value}
        </span>
      )
    },
    { 
      key: "tech", 
      label: "Technologies",
      render: (tech: string[]) => (
        <div className="flex flex-wrap gap-1">
          {tech.slice(0, 2).map((t, index) => (
            <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-xs rounded-full">
              {t}
            </span>
          ))}
          {tech.length > 2 && (
            <span className="px-2 py-1 bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300 text-xs rounded-full">
              +{tech.length - 2}
            </span>
          )}
        </div>
      )
    },
    { 
      key: "featured", 
      label: "Featured",
      render: (featured: boolean) => (
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
          featured 
            ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
            : "bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300"
        }`}>
          {featured ? "Yes" : "No"}
        </span>
      )
    },
    { key: "createdAt", label: "Created" },
  ];

  const filteredProjects = projects.filter(project =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.tech.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const handleEdit = (project: Project) => {
    setEditingProject(project);
    setIsModalOpen(true);
  };

  const handleDelete = (project: Project) => {
    if (confirm(`Are you sure you want to delete "${project.title}"?`)) {
      setProjects(projects.filter(p => p.id !== project.id));
    }
  };

  const handleSave = (projectData: Partial<Project>) => {
    if (editingProject) {
      setProjects(projects.map(project => 
        project.id === editingProject.id ? { ...project, ...projectData } : project
      ));
    } else {
      const newProject: Project = {
        id: Math.max(...projects.map(p => p.id)) + 1,
        title: projectData.title || "",
        description: projectData.description || "",
        status: projectData.status || "active",
        tech: projectData.tech || [],
        featured: projectData.featured || false,
        createdAt: new Date().toISOString().split('T')[0],
      };
      setProjects([...projects, newProject]);
    }
    setIsModalOpen(false);
    setEditingProject(null);
  };

  return (
    <AdminLayout title="Manage Projects">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
              Projects
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              Manage your projects and research work
            </p>
          </div>
          <button
            onClick={() => {
              setEditingProject(null);
              setIsModalOpen(true);
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors font-medium cursor-pointer hover:scale-105"
          >
            Add New Project
          </button>
        </div>

        {/* Search */}
        <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-md">
          <input
            type="text"
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Table */}
        <AdminTable
          columns={columns}
          data={filteredProjects}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />

        {/* Modal */}
        <AdminModal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setEditingProject(null);
          }}
          title={editingProject ? "Edit Project" : "Add New Project"}
        >
          <ProjectForm
            project={editingProject}
            onSave={handleSave}
            onCancel={() => {
              setIsModalOpen(false);
              setEditingProject(null);
            }}
          />
        </AdminModal>
      </div>
    </AdminLayout>
  );
}

// Project Form Component
function ProjectForm({ 
  project, 
  onSave, 
  onCancel 
}: { 
  project: Project | null; 
  onSave: (data: Partial<Project>) => void; 
  onCancel: () => void; 
}) {
  const [formData, setFormData] = useState({
    title: project?.title || "",
    description: project?.description || "",
    status: project?.status || "active",
    tech: project?.tech || [],
    featured: project?.featured || false,
  });

  const [techInput, setTechInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  const addTech = () => {
    if (techInput.trim() && !formData.tech.includes(techInput.trim())) {
      setFormData({
        ...formData,
        tech: [...formData.tech, techInput.trim()]
      });
      setTechInput("");
    }
  };

  const removeTech = (techToRemove: string) => {
    setFormData({
      ...formData,
      tech: formData.tech.filter(tech => tech !== techToRemove)
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
          Title
        </label>
        <input
          type="text"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
          Description
        </label>
        <textarea
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          rows={3}
          className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
          Status
        </label>
        <select
          value={formData.status}
          onChange={(e) => setFormData({ ...formData, status: e.target.value as "active" | "completed" | "archived" })}
          className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="active">Active</option>
          <option value="completed">Completed</option>
          <option value="archived">Archived</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
          Technologies
        </label>
        <div className="flex flex-wrap gap-2 mb-2">
          {formData.tech.map((tech, index) => (
            <span
              key={index}
              className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-sm rounded-full"
            >
              {tech}
              <button
                type="button"
                onClick={() => removeTech(tech)}
                className="ml-2 text-blue-600 hover:text-blue-800 dark:text-blue-200 dark:hover:text-blue-100"
              >
                ×
              </button>
            </span>
          ))}
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            value={techInput}
            onChange={(e) => setTechInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTech())}
            placeholder="Add a technology..."
            className="flex-1 px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button
            type="button"
            onClick={addTech}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Add
          </button>
        </div>
      </div>

      <div className="flex items-center">
        <input
          type="checkbox"
          id="featured"
          checked={formData.featured}
          onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
        />
        <label htmlFor="featured" className="ml-2 block text-sm text-slate-700 dark:text-slate-300">
          Featured Project
        </label>
      </div>

      <div className="flex justify-end space-x-3 pt-4">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition-colors"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
        >
          {project ? "Update" : "Create"}
        </button>
      </div>
    </form>
  );
}
