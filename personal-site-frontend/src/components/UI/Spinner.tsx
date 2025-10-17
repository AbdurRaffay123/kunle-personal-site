/**
 * Loading spinner component
 */

import { cn } from "@/lib/utils";

interface SpinnerProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  label?: string;
}

export default function Spinner({ size = "md", className, label = "Loading..." }: SpinnerProps) {
  const sizes = {
    sm: "h-4 w-4 border-2",
    md: "h-8 w-8 border-2",
    lg: "h-12 w-12 border-3",
    xl: "h-16 w-16 border-4",
  };

  return (
    <div className="flex items-center justify-center" role="status" aria-label={label}>
      <div
        className={cn(
          "animate-spin rounded-full border-primary border-t-transparent",
          sizes[size],
          className,
        )}
      />
      <span className="sr-only">{label}</span>
    </div>
  );
}

