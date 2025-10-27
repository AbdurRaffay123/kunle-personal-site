/**
 * Tag component for displaying labels with optional interactivity
 */

import { cn } from "@/lib/utils";
import Link from "next/link";

interface TagProps {
  children: React.ReactNode;
  href?: string;
  variant?: "default" | "primary" | "accent";
  size?: "sm" | "md";
  interactive?: boolean;
  onClick?: () => void;
  className?: string;
}

export default function Tag({
  children,
  href,
  variant = "default",
  size = "sm",
  interactive = false,
  onClick,
  className,
}: TagProps) {
  const variants = {
    default: "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700",
    primary: "bg-blue-50 text-blue-700 hover:bg-blue-100 dark:bg-blue-900/30 dark:text-blue-300 dark:hover:bg-blue-900/50",
    accent: "bg-purple-50 text-purple-700 hover:bg-purple-100 dark:bg-purple-900/30 dark:text-purple-300 dark:hover:bg-purple-900/50",
  };

  const sizes = {
    sm: "px-2 py-1 text-xs",
    md: "px-3 py-1.5 text-sm",
  };

  const baseStyles = cn(
    "inline-flex items-center rounded-md font-medium transition-colors",
    variants[variant],
    sizes[size],
    (interactive || href || onClick) && "cursor-pointer",
    className,
  );

  if (href) {
    return (
      <Link href={href} className={baseStyles}>
        {children}
      </Link>
    );
  }

  if (onClick) {
    return (
      <button type="button" onClick={onClick} className={baseStyles}>
        {children}
      </button>
    );
  }

  return <span className={baseStyles}>{children}</span>;
}

