"use client";

import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

interface BackButtonProps {
  className?: string;
  href?: string;
  label?: string;
}

export default function BackButton({ 
  className = "", 
  href = "/notes",
  label = "Back to Notes"
}: BackButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800 transition-colors ${className}`}
    >
      <ArrowLeftIcon className="w-4 h-4 mr-2" />
      {label}
    </Link>
  );
}
