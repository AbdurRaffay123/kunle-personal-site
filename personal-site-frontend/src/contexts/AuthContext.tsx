"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { useRouter } from "next/navigation";
import {
  loginUser,
  logoutUser,
  getCurrentUser,
  type LoginRequest,
  type ApiError,
} from "@/apis/Auth/api";

interface User {
  id: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string;
  login: (credentials: LoginRequest) => Promise<boolean>;
  logout: () => Promise<void>;
  checkAuth: () => Promise<boolean>; // Add checkAuth function
  clearError: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const login = async (credentials: LoginRequest): Promise<boolean> => {
    setIsLoading(true);
    setError("");

    try {
      const response = await loginUser(credentials);

      if (response.success) {
        setUser(response.data.user);
        return true;
      } else {
        setError(response.message || "Login failed. Please try again.");
        return false;
      }
    } catch (error: unknown) {
      const apiError = error as ApiError & { response?: { status?: number } };

      let errorMessage = "An unexpected error occurred. Please try again.";

      if (apiError.message) {
        if (apiError.message.includes("Invalid") || apiError.message.includes("credentials")) {
          errorMessage = "Invalid email or password. Please check your credentials and try again.";
        } else if (apiError.message.includes("Network")) {
          errorMessage = "Unable to connect to the server. Please check your internet connection.";
        } else {
          errorMessage = apiError.message;
        }
      }

      setError(errorMessage);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async (): Promise<void> => {
    setIsLoading(true);

    try {
      setUser(null);
      await logoutUser();
    } catch (error: unknown) {
      console.error("Logout error:", error);
      setUser(null);
    } finally {
      setIsLoading(false);
      // Navigate to home page instead of admin login
      router.replace("/");
    }
  };

  // New function to check authentication - called manually from dashboard
  const checkAuth = async (): Promise<boolean> => {
    setIsLoading(true);

    try {
      const response = await getCurrentUser();

      if (response.success && response.data) {
        setUser(response.data);
        return true;
      } else {
        setUser(null);
        return false;
      }
    } catch (error: unknown) {
      const apiError = error as ApiError & { response?: { status?: number } };

      // Only log non-401 errors
      if (apiError.response?.status !== 401) {
        console.error("Auth check error:", {
          message: apiError.message || "Unknown error",
          status: apiError.response?.status,
        });
      }

      setUser(null);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const clearError = () => {
    setError("");
  };

  const value: AuthContextType = {
    user,
    isAuthenticated: !!user,
    isLoading,
    error,
    login,
    logout,
    checkAuth, // Expose checkAuth function
    clearError,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
