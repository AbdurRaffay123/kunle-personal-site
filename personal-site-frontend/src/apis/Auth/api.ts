import instance from "@/axios/Axios";

// Types for login
export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  success: boolean;
  message: string;
  data: {
    user: {
      id: string;
      email: string;
    };
    // No token field since it's in HTTP-only cookie
  };
}

export interface ApiError {
  success: boolean;
  message: string;
  errors?: any[];
}

/**
 * Admin login
 * @param credentials - Email and password
 * @returns Promise with login response
 */
export const loginUser = async (credentials: LoginRequest): Promise<LoginResponse> => {
  try {
    // Make sure cookies are included in the request
    const response = await instance.post<LoginResponse>('/api/auth/login', credentials, {
      withCredentials: true, // This ensures cookies are sent/received
    });
    return response.data;
  } catch (error: any) {
    // Handle axios error
    if (error.response?.data) {
      throw error.response.data as ApiError;
    }
    
    // Handle network or other errors
    throw {
      success: false,
      message: error.message || 'Network error occurred'
    } as ApiError;
  }
};

/**
 * Admin logout
 * @returns Promise with logout response
 */
export const logoutUser = async (): Promise<{ success: boolean; message: string }> => {
  try {
    const response = await instance.post('/api/auth/logout', {}, {
      withCredentials: true, // Include cookies
    });
    return response.data;
  } catch (error: any) {
    if (error.response?.data) {
      throw error.response.data as ApiError;
    }
    
    throw {
      success: false,
      message: error.message || 'Network error occurred'
    } as ApiError;
  }
};

/**
 * Get current admin user
 * @returns Promise with user data
 */
export const getCurrentUser = async (): Promise<{
  success: boolean;
  message: string;
  data: {
    id: string;
    email: string;
  };
}> => {
  try {
    const response = await instance.get('/api/auth/me', {
      withCredentials: true, // Include cookies
    });
    return response.data;
  } catch (error: any) {
    if (error.response?.data) {
      throw error.response.data as ApiError;
    }
    
    throw {
      success: false,
      message: error.message || 'Network error occurred'
    } as ApiError;
  }
};