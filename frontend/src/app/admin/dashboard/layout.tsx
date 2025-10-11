"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isAuthenticated, checkAuth, isLoading } = useAuth();
  const [authChecked, setAuthChecked] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const verifyAuth = async () => {
      try {
        const isValid = await checkAuth();
        
        if (!isValid) {
          router.replace("/admin/login");
        } else {
          setAuthChecked(true);
        }
      } catch (error) {
        console.error("Auth verification failed:", error);
        router.replace("/admin/login");
      }
    };

    // Check auth for all dashboard routes
    if (!isAuthenticated && !authChecked) {
      verifyAuth();
    } else if (isAuthenticated) {
      setAuthChecked(true);
    }
  }, [isAuthenticated, checkAuth, authChecked, router]);

  // Show loading while checking authentication
  if (isLoading || !authChecked) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-900">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-slate-600 dark:text-slate-400">Loading...</p>
        </div>
      </div>
    );
  }

  // Render children only if authenticated
  return <>{children}</>;
}