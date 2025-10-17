/**
 * Premium Navbar - Modern, elegant, blueish-themed header
 * Height: ~90px, Glassmorphism, Full-width, Responsive
 */

"use client";

// In src/components/Header/Header.tsx, update the imports section (lines 8-12):

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "@/components/UI/ThemeToggle";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/project" },
  { name: "Researches", href: "/research" },
  { name: "Notes", href: "/notes" },
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
];

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-md shadow-lg border-b border-gray-200/30 dark:border-slate-700/20`}
        style={{
          backgroundColor: scrolled 
            ? 'var(--background)' 
            : 'var(--background)',
          opacity: scrolled ? 0.95 : 0.9
        }}
    >
      <nav className="max-w-screen-2xl mx-auto flex items-center justify-between py-5 px-[35px]">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center space-x-3"
        >
          <Link href="/">
            <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 dark:from-blue-400 dark:via-blue-500 dark:to-sky-400 bg-clip-text text-transparent hover:from-blue-700 hover:to-blue-500 dark:hover:from-blue-300 dark:hover:to-sky-300 transition-all duration-300 cursor-pointer">
              Olukunle O.
            </h1>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden md:flex items-center space-x-[35px] text-lg font-medium"
        >
          {navigation.map((item, index) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname?.startsWith(item.href));

            return (
              <motion.li
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className={`relative transition-colors duration-300 group ${
                    isActive ? "font-semibold" : ""
                  }`}
                  style={{
                    color: isActive ? 'var(--nav-text)' : 'var(--text-secondary)'
                  }}
                >
                  {item.name}
                  {/* Active Underline */}
                  {isActive && (
                    <motion.span
                      layoutId="navbar-underline"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-sky-500 dark:from-blue-400 dark:to-sky-400 rounded-full"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  {/* Hover Underline */}
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-sky-500 dark:from-blue-400 dark:to-sky-400 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </Link>
              </motion.li>
            );
          })}
        </motion.ul>

        {/* Right Side Actions */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center space-x-4"
        >
          {/* Enhanced Theme Toggle */}
          <ThemeToggle variant="default" />

          {/* Admin Login Link - Only show on public routes */}
          {mounted && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="hidden md:block"
            >
              <Link href="/admin/login">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-700 hover:to-sky-600 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
                >
                  Admin
                </motion.button>
              </Link>
            </motion.div>
          )}

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-600 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            <svg
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </motion.button>
        </motion.div>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden backdrop-blur-md border-t border-slate-200 dark:border-slate-700 shadow-lg"
            style={{ backgroundColor: 'var(--background)' }}
          >
            <div className="max-w-screen-2xl mx-auto px-8 py-6 space-y-4">
              {navigation.map((item, index) => {
                const isActive =
                  pathname === item.href ||
                  (item.href !== "/" && pathname?.startsWith(item.href));

                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block text-lg font-medium py-3 px-4 rounded-lg transition-all ${
                        isActive
                          ? "bg-gradient-to-r from-blue-600 to-sky-500 text-white shadow-md"
                          : "hover:bg-slate-100 dark:hover:bg-slate-800"
                      }`}
                      style={{
                        color: isActive ? 'white' : 'var(--text-secondary)'
                      }}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                );
              })}
              
              {/* Mobile Admin Link */}
              {mounted && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: navigation.length * 0.1 }}
                  className="pt-4 border-t border-slate-200 dark:border-slate-700"
                >
                  <Link
                    href="/admin/login"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block w-full text-center text-lg font-medium py-3 px-4 rounded-lg bg-gradient-to-r from-blue-600 to-sky-500 text-white shadow-md hover:from-blue-700 hover:to-sky-600 transition-all duration-300 cursor-pointer"
                  >
                    Admin
                  </Link>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
