"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, checkAuth, isLoading } = useAuth();
  const [authChecked, setAuthChecked] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const verifyAuth = async () => {
      const isValid = await checkAuth();
      if (!isValid) {
        router.replace("/admin/login");
      } else {
        setAuthChecked(true);
      }
    };

    if (!isAuthenticated && !authChecked) {
      verifyAuth();
    } else if (isAuthenticated) {
      setAuthChecked(true);
    }
  }, [isAuthenticated, checkAuth, authChecked, router]);

  // Only render children if authenticated
  if (!isAuthenticated || !authChecked) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50 dark:bg-slate-900">
        <div className="text-center">
          <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-b-2 border-blue-600"></div>
          <p className="text-slate-600 dark:text-slate-400">Loading...</p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
