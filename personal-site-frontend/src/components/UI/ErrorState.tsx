/**
 * Error state component for displaying errors
 */

import Button from "./Button";

interface ErrorStateProps {
  title?: string;
  message: string;
  onRetry?: () => void;
  showRetry?: boolean;
}

export default function ErrorState({
  title = "Something went wrong",
  message,
  onRetry,
  showRetry = true,
}: ErrorStateProps) {
  return (
    <div
      className="flex min-h-[400px] flex-col items-center justify-center rounded-2xl border border-red-200 bg-gradient-to-br from-red-50 to-white p-12 text-center shadow-xl backdrop-blur-sm dark:border-red-800 dark:from-red-900/20 dark:to-gray-900"
      role="alert"
      aria-live="assertive"
    >
      <div className="mb-6" aria-hidden="true">
        <svg
          className="h-16 w-16 text-red-500 dark:text-red-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
      </div>

      <h3 className="mb-3 text-2xl font-bold text-red-900 dark:text-red-200">
        {title}
      </h3>

      <p className="mb-6 max-w-md text-red-700 dark:text-red-300">
        {message}
      </p>

      {showRetry && onRetry && (
        <Button onClick={onRetry} variant="primary">
          Try Again
        </Button>
      )}
    </div>
  );
}

