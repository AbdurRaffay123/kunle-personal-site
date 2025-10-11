"use client";

import { useEffect, useState } from "react";
import AdminLayout from "@/components/Admin/AdminLayout";
import AdminTable from "@/components/Admin/AdminTable";
import AdminModal from "@/components/Admin/AdminModal";
import {
  getProjects,
  createProject,
  updateProject,
  deleteProject,
  Project,
} from "@/apis/Project/api";
import { Toaster, toast } from "react-hot-toast";

export default function AdminProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Delete modal state
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [projectToDelete, setProjectToDelete] = useState<Project | null>(null);

  // Fetch projects from API
  const fetchProjects = async () => {
    setIsLoading(true);
    try {
      const response = await getProjects();
      if (response.success) {
        setProjects(response.data);
      } else {
        toast.error(response.message || "Failed to fetch projects.");
      }
    } catch (error: any) {
      toast.error(error.message || "Failed to fetch projects.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const columns = [
    { key: "title", label: "Title" },
    { key: "description", label: "Description" },
    {
      key: "technologies",
      label: "Technologies",
      render: (tech: string[]) => (
        <div className="flex flex-wrap gap-1">
          {tech.slice(0, 2).map((t, index) => (
            <span
              key={index}
              className="rounded-full bg-blue-100 px-2 py-1 text-xs text-blue-800 dark:bg-blue-900 dark:text-blue-200"
            >
              {t}
            </span>
          ))}
          {tech.length > 2 && (
            <span className="rounded-full bg-slate-100 px-2 py-1 text-xs text-slate-600 dark:bg-slate-700 dark:text-slate-300">
              +{tech.length - 2}
            </span>
          )}
        </div>
      ),
    },
    {
      key: "link",
      label: "Link",
      render: (value: string) => (
        <a
          href={value}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-blue-600 underline hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
        >
          View Project
        </a>
      ),
    },
    { key: "createdAt", label: "Created" },
  ];

  const filteredProjects = projects.filter(
    (project) =>
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.technologies.some((tech) => tech.toLowerCase().includes(searchTerm.toLowerCase())),
  );

  const handleEdit = (project: Project) => {
    setEditingProject(project);
    setIsModalOpen(true);
  };

  // Open delete modal
  const handleDelete = (project: Project) => {
    setProjectToDelete(project);
    setDeleteModalOpen(true);
  };

  const handleSave = async (projectData: Partial<Project>) => {
    setIsLoading(true);
    try {
      if (editingProject && editingProject._id) {
        // Update
        const response = await updateProject(editingProject._id, projectData);
        console.log(response);
        if (response.success) {
          toast.success("Project updated successfully!");

          fetchProjects();
        } else {
          toast.error(response.message || "Failed to update project.");
        }
      } else {
        // Create
        const response = await createProject({
          title: projectData.title || "",
          description: projectData.description || "",
          link: projectData.link || "",
          technologies: projectData.technologies || [],
        });
        if (response.success) {
          toast.success("Project created successfully!");
          fetchProjects();
        } else {
          toast.error(response.message || "Failed to create project.");
        }
      }
    } catch (error: any) {
      toast.error(error.message || "Failed to save project.");
    } finally {
      setIsLoading(false);
      setIsModalOpen(false);
      setEditingProject(null);
    }
  };

  // Confirm delete
  const confirmDelete = async () => {
    if (!projectToDelete?._id) return;
    setIsLoading(true);
    try {
      const response = await deleteProject(projectToDelete._id);
      if (response.success) {
        toast.success("Project deleted successfully!");
        fetchProjects();
      } else {
        toast.error(response.message || "Failed to delete project.");
      }
    } catch (error: any) {
      toast.error(error.message || "Failed to delete project.");
    } finally {
      setIsLoading(false);
      setDeleteModalOpen(false);
      setProjectToDelete(null);
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setEditingProject(null);
  };

  return (
    <AdminLayout title="Manage Projects">
      <Toaster position="top-right" />
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Projects</h2>
            <p className="text-slate-600 dark:text-slate-400">
              Manage your projects and research work
            </p>
          </div>
          <button
            onClick={() => {
              setEditingProject(null);
              setIsModalOpen(true);
            }}
            className="cursor-pointer rounded-md bg-blue-600 px-4 py-2 font-medium text-white transition-colors hover:scale-105 hover:bg-blue-700"
            disabled={isLoading}
          >
            Add New Project
          </button>
        </div>

        {/* Search */}
        <div className="rounded-lg bg-white p-4 shadow-md dark:bg-slate-800">
          <input
            type="text"
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-md border border-slate-300 bg-white px-4 py-2 text-slate-900 placeholder-slate-500 focus:border-transparent focus:ring-2 focus:ring-blue-500 dark:border-slate-600 dark:bg-slate-900 dark:text-white dark:placeholder-slate-400"
          />
        </div>

        {/* Table */}
        <AdminTable
          columns={columns}
          data={filteredProjects}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />

        {/* Modal for create/update */}
        <AdminModal
          isOpen={isModalOpen}
          onClose={handleCancel}
          title={editingProject ? "Edit Project" : "Add New Project"}
        >
          <ProjectForm
            project={editingProject}
            onSave={handleSave}
            onCancel={handleCancel}
            isLoading={isLoading}
          />
        </AdminModal>

        {/* Delete Confirmation Modal */}
        <AdminModal
          isOpen={deleteModalOpen}
          onClose={() => {
            setDeleteModalOpen(false);
            setProjectToDelete(null);
          }}
          title="Delete Project"
        >
          <div className="space-y-4">
            <p>
              Are you sure you want to delete{" "}
              <span className="font-semibold">{projectToDelete?.title}</span>?
            </p>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => {
                  setDeleteModalOpen(false);
                  setProjectToDelete(null);
                }}
                className="rounded bg-slate-200 px-4 py-2 text-slate-800 dark:bg-slate-700 dark:text-slate-200"
                disabled={isLoading}
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700"
                disabled={isLoading}
              >
                {isLoading ? "Deleting..." : "Delete"}
              </button>
            </div>
          </div>
        </AdminModal>
      </div>
    </AdminLayout>
  );
}

// Project Form Component
function ProjectForm({
  project,
  onSave,
  onCancel,
  isLoading = false,
}: {
  project: Project | null;
  onSave: (data: Partial<Project>) => void;
  onCancel: () => void;
  isLoading?: boolean;
}) {
  const [formData, setFormData] = useState({
    title: project?.title || "",
    description: project?.description || "",
    link: project?.link || "",
    technologies: project?.technologies || [],
  });

  const [techInput, setTechInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLoading) return;
    onSave(formData);
  };

  const addTech = () => {
    if (techInput.trim() && !formData.technologies.includes(techInput.trim())) {
      setFormData({
        ...formData,
        technologies: [...formData.technologies, techInput.trim()],
      });
      setTechInput("");
    }
  };

  const removeTech = (techToRemove: string) => {
    setFormData({
      ...formData,
      technologies: formData.technologies.filter((tech) => tech !== techToRemove),
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
          Title
        </label>
        <input
          type="text"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="w-full rounded-md border border-slate-300 bg-white px-4 py-2 text-slate-900 focus:border-transparent focus:ring-2 focus:ring-blue-500 dark:border-slate-600 dark:bg-slate-900 dark:text-white"
          required
          disabled={isLoading}
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
          Description
        </label>
        <textarea
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          rows={3}
          className="w-full rounded-md border border-slate-300 bg-white px-4 py-2 text-slate-900 focus:border-transparent focus:ring-2 focus:ring-blue-500 dark:border-slate-600 dark:bg-slate-900 dark:text-white"
          required
          disabled={isLoading}
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
          Project Link
        </label>
        <input
          type="url"
          value={formData.link}
          onChange={(e) => setFormData({ ...formData, link: e.target.value })}
          placeholder="https://example.com/project"
          className="w-full rounded-md border border-slate-300 bg-white px-4 py-2 text-slate-900 focus:border-transparent focus:ring-2 focus:ring-blue-500 dark:border-slate-600 dark:bg-slate-900 dark:text-white"
          required
          disabled={isLoading}
        />
        <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
          Enter the URL to your project repository or demo
        </p>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
          Technologies
        </label>
        <div className="mb-2 flex flex-wrap gap-2">
          {formData.technologies.map((tech, index) => (
            <span
              key={index}
              className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800 dark:bg-blue-900 dark:text-blue-200"
            >
              {tech}
              <button
                type="button"
                onClick={() => removeTech(tech)}
                className="ml-2 text-blue-600 hover:text-blue-800 dark:text-blue-200 dark:hover:text-blue-100"
                disabled={isLoading}
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
            onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), addTech())}
            placeholder="Add a technology..."
            className="flex-1 rounded-md border border-slate-300 bg-white px-4 py-2 text-slate-900 focus:border-transparent focus:ring-2 focus:ring-blue-500 dark:border-slate-600 dark:bg-slate-900 dark:text-white"
            disabled={isLoading}
          />
          <button
            type="button"
            onClick={addTech}
            className="rounded-md bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700"
            disabled={isLoading}
          >
            Add
          </button>
        </div>
      </div>

      <div className="flex justify-end space-x-3 pt-4">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 text-slate-600 transition-colors hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200"
          disabled={isLoading}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700"
          disabled={isLoading}
        >
          {project ? "Update" : "Create"}
        </button>
      </div>
    </form>
  );
}
