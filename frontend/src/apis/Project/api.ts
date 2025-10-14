import instance from "@/axios/Axios";

// Types
export interface Project {
  _id: string;
  title: string;
  description: string;
  link: string;
  githubUrl?: string;
  liveUrl?: string;
  status?: 'completed' | 'in-progress' | 'planned';
  technologies: string[];
  createdAt: string;
  updatedAt: string;
}

export interface ProjectResponse {
  success: boolean;
  data: Project;
  message?: string;
}

export interface ProjectListResponse {
  success: boolean;
  data: Project[];
  message?: string;
}

export interface ApiError {
  success: boolean;
  message: string;
  errors?: string[];
}

// Create a new project
export const createProject = async (projectData: Omit<Project, "_id" | "createdAt" | "updatedAt">): Promise<ProjectResponse> => {
  try {
    const response = await instance.post("/api/projects", projectData);
    return response.data;
  } catch (error: any) {
    throw {
      success: false,
      message: error.response?.data?.message || "Failed to create project",
      errors: error.response?.data?.errors || [],
    } as ApiError;
  }
};

// Get all projects
export const getProjects = async (): Promise<ProjectListResponse> => {
  try {
    const response = await instance.get("/api/projects");
    return response.data;
  } catch (error: any) {
    throw {
      success: false,
      message: error.response?.data?.message || "Failed to fetch projects",
      errors: error.response?.data?.errors || [],
    } as ApiError;
  }
};

// Get project by ID
export const getProjectById = async (id: string): Promise<ProjectResponse> => {
  try {
    const response = await instance.get(`/api/projects/${id}`);
    return response.data;
  } catch (error: any) {
    throw {
      success: false,
      message: error.response?.data?.message || "Failed to fetch project",
      errors: error.response?.data?.errors || [],
    } as ApiError;
  }
};

// Update project
export const updateProject = async (id: string, projectData: Partial<Project>): Promise<ProjectResponse> => {
  try {
    const response = await instance.put(`/api/projects/${id}`, projectData);
    return response.data;
  } catch (error: any) {
    throw {
      success: false,
      message: error.response?.data?.message || "Failed to update project",
      errors: error.response?.data?.errors || [],
    } as ApiError;
  }
};

// Delete project
export const deleteProject = async (id: string): Promise<{ success: boolean; message: string }> => {
  try {
    const response = await instance.delete(`/api/projects/${id}`);
    return response.data;
  } catch (error: any) {
    throw {
      success: false,
      message: error.response?.data?.message || "Failed to delete project",
      errors: error.response?.data?.errors || [],
    } as ApiError;
  }
};