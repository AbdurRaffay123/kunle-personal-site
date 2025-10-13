import instance from "@/axios/Axios";

const API_BASE_URL = "/api/blogs";

// Create a new blog (with image upload)
export const createBlog = async (formData: FormData) => {
  const response = await instance.post(API_BASE_URL, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    withCredentials: true,
  });
  return response.data;
};

// Get all blogs (with pagination)
export const getBlogs = async (page = 1, limit = 10) => {
  const response = await instance.get(`${API_BASE_URL}?page=${page}&limit=${limit}`, {
    withCredentials: true,
  });
  return response.data;
};

// Get a single blog by ID
export const getBlogById = async (id: string) => {
  const response = await instance.get(`${API_BASE_URL}/${id}`, {
    withCredentials: true,
  });
  return response.data;
};

// Update a blog (with image upload)
export const updateBlog = async (id: string, formData: FormData) => {
  const response = await instance.put(`${API_BASE_URL}/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
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