"use client";

import { usePathname } from "next/navigation";
import { AuthProvider } from "@/contexts/AuthContext";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import FloatingThemeToggle from "@/components/UI/FloatingThemeToggle";

interface ConditionalLayoutProps {
  children: React.ReactNode;
}

export default function ConditionalLayout({ children }: ConditionalLayoutProps) {
  const pathname = usePathname();
  
  // Check if current route is an admin route
  const isAdminRoute = pathname.startsWith('/admin');

  // For admin routes, render with AuthProvider but without Header and Footer
  if (isAdminRoute) {
    return (
      <AuthProvider>
        <div className="min-h-screen">
          <main className="min-h-screen">{children}</main>
        </div>
      </AuthProvider>
    );
  }

  // For public routes, render with Header and Footer (no AuthProvider needed)
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <FloatingThemeToggle />
    </div>
  );
}