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
    primary: "bg-primary-50 text-primary-700 hover:bg-primary-100 dark:bg-primary-900/30 dark:text-primary-300 dark:hover:bg-primary-900/50",
    accent: "bg-accent-50 text-accent-700 hover:bg-accent-100 dark:bg-accent-900/30 dark:text-accent-300 dark:hover:bg-accent-900/50",
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

