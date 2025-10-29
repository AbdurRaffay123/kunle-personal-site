import instance from '@/axios/Axios';

export interface PortfolioItem {
  _id: string;
  title: string;
  description: string;
  type: 'project' | 'research';
  technologies?: string[];
  tags?: string[];
  category?: string;
  githubUrl?: string;
  researchLink?: string;
  image?: string;
  createdBy?: string;
  createdAt: string;
  updatedAt: string;
  formattedDate?: string;
}

export interface PortfolioResponse {
  success: boolean;
  data: PortfolioItem[];
  pagination?: {
    current: number;
    pages: number;
    total: number;
  };
  message?: string;
}

export interface SinglePortfolioResponse {
  success: boolean;
  data: PortfolioItem;
  message?: string;
}

export interface PortfolioStats {
  success: boolean;
  data: {
    total: number;
    projects: number;
    research: number;
    typeBreakdown: Array<{
      _id: string;
      count: number;
    }>;
  };
}

// Get all portfolio items with optional filtering
export const getPortfolioItems = async (params?: {
  type?: string;
  search?: string;
  page?: number;
  limit?: number;
}): Promise<PortfolioResponse> => {
  try {
    const queryParams = new URLSearchParams();
    
    if (params?.type && params.type !== 'all') {
      queryParams.append('type', params.type);
    }
    if (params?.search) {
      queryParams.append('search', params.search);
    }
    if (params?.page) {
      queryParams.append('page', params.page.toString());
    }
    if (params?.limit) {
      queryParams.append('limit', params.limit.toString());
    }

    const response = await instance.get(`/api/portfolio?${queryParams.toString()}`);
    return response.data;
  } catch (error: any) {
    console.error('Error fetching portfolio items:', error);
    throw new Error(error.response?.data?.message || 'Failed to fetch portfolio items');
  }
};

// Get single portfolio item
export const getPortfolioItem = async (id: string): Promise<SinglePortfolioResponse> => {
  try {
    const response = await instance.get(`/api/portfolio/${id}`);
    return response.data;
  } catch (error: any) {
    console.error('Error fetching portfolio item:', error);
    throw new Error(error.response?.data?.message || 'Failed to fetch portfolio item');
  }
};

// Create new portfolio item
export const createPortfolioItem = async (data: Partial<PortfolioItem>): Promise<SinglePortfolioResponse> => {
  try {
    const response = await instance.post('/api/portfolio', data);
    return response.data;
  } catch (error: any) {
    console.error('Error creating portfolio item:', error);
    console.error('Error response data:', error.response?.data);
    
    if (error.response?.data?.errors) {
      console.error('Validation errors:', error.response.data.errors);
      // Log each validation error individually
      error.response.data.errors.forEach((err: any, index: number) => {
        console.error(`Validation Error ${index + 1}:`, {
          field: err.path || err.param,
          message: err.msg || err.message,
          value: err.value
        });
      });
    }
    
    // Preserve the full error object so the component can access response.data.errors
    if (error.response?.data) {
      const apiError = new Error(error.response.data.message || 'Failed to create portfolio item');
      (apiError as any).response = error.response;
      throw apiError;
    }
    
    throw new Error(error.response?.data?.message || 'Failed to create portfolio item');
  }
};

// Update portfolio item
export const updatePortfolioItem = async (id: string, data: Partial<PortfolioItem>): Promise<SinglePortfolioResponse> => {
  try {
    const response = await instance.put(`/api/portfolio/${id}`, data);
    return response.data;
  } catch (error: any) {
    console.error('Error updating portfolio item:', error);
    console.error('Error response data:', error.response?.data);
    
    // Preserve the full error object so the component can access response.data.errors
    if (error.response?.data) {
      const apiError = new Error(error.response.data.message || 'Failed to update portfolio item');
      (apiError as any).response = error.response;
      throw apiError;
    }
    
    throw new Error(error.response?.data?.message || 'Failed to update portfolio item');
  }
};

// Delete portfolio item
export const deletePortfolioItem = async (id: string): Promise<{ success: boolean; message: string }> => {
  try {
    const response = await instance.delete(`/api/portfolio/${id}`);
    return response.data;
  } catch (error: any) {
    console.error('Error deleting portfolio item:', error);
    throw new Error(error.response?.data?.message || 'Failed to delete portfolio item');
  }
};

// Get portfolio statistics
export const getPortfolioStats = async (): Promise<PortfolioStats> => {
  try {
    const response = await instance.get('/api/portfolio/stats');
    return response.data;
  } catch (error: any) {
    console.error('Error fetching portfolio stats:', error);
    throw new Error(error.response?.data?.message || 'Failed to fetch portfolio statistics');
  }
};

// Search portfolio items
export const searchPortfolioItems = async (query: string, type?: string): Promise<PortfolioResponse> => {
  try {
    const params = new URLSearchParams();
    params.append('search', query);
    if (type && type !== 'all') {
      params.append('type', type);
    }

    const response = await instance.get(`/api/portfolio?${params.toString()}`);
    return response.data;
  } catch (error: any) {
    console.error('Error searching portfolio items:', error);
    throw new Error(error.response?.data?.message || 'Failed to search portfolio items');
  }
};
