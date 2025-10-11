"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { isAuthenticated, isLoading } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Only run protection logic after loading is complete
    if (isLoading) return;

    const isAdminRoute = pathname.startsWith('/admin');
    const isLoginPage = pathname === '/admin/login';

    if (isAdminRoute && !isLoginPage && !isAuthenticated) {
      // Redirect to login if accessing admin route without authentication
      router.replace('/admin/login');
    } else if (isLoginPage && isAuthenticated) {
      // Redirect to dashboard if already authenticated and on login page
      router.replace('/admin/dashboard');
    }
  }, [isAuthenticated, isLoading, pathname, router]);

  // Show loading while auth is being determined
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return <>{children}</>;
}