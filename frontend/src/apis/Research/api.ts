import instance from "@/axios/Axios";

// Types
export interface CreateResearchRequest {
  title: string;
  description: string;
  category: string;
  researchLink: string;
  tags: string[];
}

export interface UpdateResearchRequest extends Partial<CreateResearchRequest> {
  id: string;
}

export interface Research {
  _id: string;
  title: string;
  description: string;
  category: string;
  researchLink: string;
  tags: string[];
  isPublished: boolean;
  createdBy: string;
  createdAt: string;
  updatedAt: string;
  formattedDate?: string;
}

export interface ResearchResponse {
  success: boolean;
  message: string;
  data: Research;
}

export interface ResearchListResponse {
  success: boolean;
  message: string;
  data: Research[];
  pagination?: {
    currentPage: number;
    totalPages: number;
    totalCount: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
  };
}

export interface ApiError {
  success: boolean;
  message: string;
  errors?: string[];
}

// API Functions
export const createResearch = async (researchData: CreateResearchRequest): Promise<ResearchResponse> => {
  try {
    const response = await instance.post('/api/research/create', researchData);
    return response.data;
  } catch (error: any) {
    console.error('Create research error:', error);
    throw {
      success: false,
      message: error.response?.data?.message || 'Failed to create research',
      errors: error.response?.data?.errors || []
    } as ApiError;
  }
};

export const getAllResearch = async (params?: {
  page?: number;
  limit?: number;
  category?: string;
  tags?: string;
  search?: string;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}): Promise<ResearchListResponse> => {
  try {
    const response = await instance.get('/api/research', { params });
    return response.data;
  } catch (error: any) {
    console.error('Get all research error:', error);
    throw {
      success: false,
      message: error.response?.data?.message || 'Failed to fetch research',
      errors: error.response?.data?.errors || []
    } as ApiError;
  }
};

export const getResearchById = async (id: string): Promise<ResearchResponse> => {
  try {
    const response = await instance.get(`/api/research/${id}`);
    return response.data;
  } catch (error: any) {
    console.error('Get research by ID error:', error);
    throw {
      success: false,
      message: error.response?.data?.message || 'Failed to fetch research',
      errors: error.response?.data?.errors || []
    } as ApiError;
  }
};

export const updateResearch = async (id: string, researchData: Partial<CreateResearchRequest>): Promise<ResearchResponse> => {
  try {
    const response = await instance.put(`/api/research/update/${id}`, researchData);
    return response.data;
  } catch (error: any) {
    console.error('Update research error:', error);
    throw {
      success: false,
      message: error.response?.data?.message || 'Failed to update research',
      errors: error.response?.data?.errors || []
    } as ApiError;
  }
};

export const deleteResearch = async (id: string): Promise<{ success: boolean; message: string }> => {
  try {
    const response = await instance.delete(`/api/research/delete/${id}`);
    return response.data;
  } catch (error: any) {
    console.error('Delete research error:', error);
    throw {
      success: false,
      message: error.response?.data?.message || 'Failed to delete research',
      errors: error.response?.data?.errors || []
    } as ApiError;
  }
};

export const getResearchCategories = async (): Promise<{ success: boolean; message: string; data: string[] }> => {
  try {
    const response = await instance.get('/api/research/categories');
    return response.data;
  } catch (error: any) {
    console.error('Get research categories error:', error);
    throw {
      success: false,
      message: error.response?.data?.message || 'Failed to fetch categories',
      errors: error.response?.data?.errors || []
    } as ApiError;
  }
};

export const getResearchTags = async (): Promise<{ success: boolean; message: string; data: string[] }> => {
  try {
    const response = await instance.get('/api/research/tags');
    return response.data;
  } catch (error: any) {
    console.error('Get research tags error:', error);
    throw {
      success: false,
      message: error.response?.data?.message || 'Failed to fetch tags',
      errors: error.response?.data?.errors || []
    } as ApiError;
  }
};

export const getResearchByCategory = async (category: string): Promise<ResearchListResponse> => {
  try {
    const response = await instance.get(`/api/research/category/${category}`);
    return response.data;
  } catch (error: any) {
    console.error('Get research by category error:', error);
    throw {
      success: false,
      message: error.response?.data?.message || 'Failed to fetch research by category',
      errors: error.response?.data?.errors || []
    } as ApiError;
  }
};