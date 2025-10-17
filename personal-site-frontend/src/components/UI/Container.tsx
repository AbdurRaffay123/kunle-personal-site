/**
 * Container component for layout and max-width control
 */

import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg" | "xl" | "full";
  className?: string;
  as?: "div" | "section" | "article" | "main";
}

export default function Container({
  children,
  size = "lg",
  className,
  as: Component = "div",
}: ContainerProps) {
  const sizes = {
    sm: "max-w-2xl",
    md: "max-w-4xl",
    lg: "max-w-6xl",
    xl: "max-w-7xl",
    full: "max-w-full",
  };

  return (
    <Component className={cn("mx-auto w-full px-4 sm:px-6 lg:px-8", sizes[size], className)}>
      {children}
    </Component>
  );
}

