import axios from "axios";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:4000",
  timeout: 60000, // Increased timeout to 60 seconds for slow MongoDB Atlas
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor
instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor - Remove automatic redirects to prevent conflicts
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Just return the error, let the AuthContext handle redirects
    return Promise.reject(error);
  }
);

export default instance;
