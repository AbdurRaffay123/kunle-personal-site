import instance from "@/axios/Axios";

const API_BASE_URL = "/api/blogs";

interface BlogData {
  title: string;
  description: string;
  category: string;
  content: string;
  tags?: string[];
  fileType?: 'text' | 'pdf' | 'doc';
  fileUrl?: string;
  fileName?: string;
  fileSize?: number;
}

// Create a new blog
export const createBlog = async (data: BlogData) => {
  const response = await instance.post(API_BASE_URL, data, {
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  });
  return response.data;
};

// Get all blogs (with pagination)
export const getBlogs = async (page = 1, limit = 100) => {
  console.log('Making API call to:', `${API_BASE_URL}?page=${page}&limit=${limit}`);
  const response = await instance.get(`${API_BASE_URL}?page=${page}&limit=${limit}`, {
    withCredentials: true,
  });
  console.log('API response:', response.data);
  // Return the data array directly from the response
  return response.data.data || response.data;
};

// Get a single blog by ID
export const getBlogById = async (id: string) => {
  const response = await instance.get(`${API_BASE_URL}/${id}`, {
    withCredentials: true,
  });
  return response.data;
};

// Get a blog by slug
export const getBlogBySlug = async (slug: string) => {
  const response = await instance.get(`${API_BASE_URL}/slug/${slug}`, {
    withCredentials: true,
  });
  return response.data.data.blog;
};

// Like a blog
export const likeBlog = async (id: string) => {
  const response = await instance.post(`${API_BASE_URL}/${id}/like`, {}, {
    withCredentials: true,
  });
  return response.data;
};

// Update a blog
export const updateBlog = async (id: string, data: Partial<BlogData>) => {
  const response = await instance.put(`${API_BASE_URL}/${id}`, data, {
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  });
  return response.data;
};

// Delete a blog
export const deleteBlog = async (id: string) => {
  const response = await instance.delete(`${API_BASE_URL}/${id}`, {
    withCredentials: true,
  });
  return response.data;
};

// Get blog statistics
export const getBlogStats = async () => {
  const response = await instance.get(`${API_BASE_URL}/stats`, {
    withCredentials: true,
  });
  return response.data;
};