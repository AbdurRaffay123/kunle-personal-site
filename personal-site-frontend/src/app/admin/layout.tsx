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
      <div className="min-h-screen" style={{ backgroundColor: 'var(--background)' }}>
        {children}
      </div>
    </AuthProvider>
  );
}
