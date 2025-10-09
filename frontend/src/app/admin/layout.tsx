/**
 * Admin Layout - Completely overrides root layout for admin pages
 */

import { AuthProvider } from "@/contexts/AuthContext";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
        {children}
      </div>
    </AuthProvider>
  );
}
