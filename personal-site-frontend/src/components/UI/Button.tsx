/**
 * Button component with various styles and sizes
 */

import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, AnchorHTMLAttributes, forwardRef, ElementType } from "react";

interface BaseButtonProps {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "link";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  fullWidth?: boolean;
  as?: ElementType;
  disabled?: boolean;
}

type ButtonProps = BaseButtonProps &
  (ButtonHTMLAttributes<HTMLButtonElement> | AnchorHTMLAttributes<HTMLAnchorElement>);

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    {
      children,
      variant = "primary",
      size = "md",
      isLoading = false,
      fullWidth = false,
      className,
      disabled,
      as: Component = "button",
      ...props
    },
    ref,
  ) => {
    const variants = {
      primary:
        "bg-primary text-white hover:bg-primary-700 focus:ring-primary-500 disabled:bg-primary-300",
      secondary:
        "bg-accent text-white hover:bg-accent-700 focus:ring-accent-500 disabled:bg-accent-300",
      outline:
        "border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary-500 dark:border-primary-400 dark:text-primary-400",
      ghost:
        "text-primary hover:bg-primary-50 focus:ring-primary-500 dark:hover:bg-primary-900/20",
      link: "text-primary underline-offset-4 hover:underline",
    };

    const sizes = {
      sm: "px-3 py-1.5 text-sm",
      md: "px-4 py-2 text-base",
      lg: "px-6 py-3 text-lg",
    };

    const commonProps = {
      ref: ref as any,
      className: cn(
        "inline-flex items-center justify-center gap-2 rounded-lg font-medium",
        "transition-all duration-200 ease-in-out",
        "focus:outline-none focus:ring-2 focus:ring-offset-2",
        "disabled:cursor-not-allowed disabled:opacity-50",
        variants[variant],
        variant !== "link" && sizes[size],
        fullWidth && "w-full",
        className,
      ),
    };

    const content = (
      <>
        {isLoading && (
          <svg
            className="h-4 w-4 animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {children}
      </>
    );

    if (Component === "button") {
      return (
        <button
          {...commonProps}
          disabled={disabled || isLoading}
          {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
        >
          {content}
        </button>
      );
    }

    return (
      <Component {...commonProps} {...props}>
        {content}
      </Component>
    );
  },
);

Button.displayName = "Button";

export default Button;

