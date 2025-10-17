/**
 * Empty state component for when no data is available
 */

import { ReactNode } from "react";
import Button from "./Button";
import Link from "next/link";

interface EmptyStateProps {
  icon?: ReactNode;
  title: string;
  description: string;
  actionLabel?: string;
  actionHref?: string;
  onAction?: () => void;
}

export default function EmptyState({
  icon,
  title,
  description,
  actionLabel,
  actionHref,
  onAction,
}: EmptyStateProps) {
  return (
    <div
      className="flex min-h-[400px] flex-col items-center justify-center rounded-2xl border p-12 text-center shadow-xl backdrop-blur-sm"
      style={{
        backgroundColor: 'var(--explore-card-bg)',
        borderColor: 'var(--border)'
      }}
      role="status"
      aria-live="polite"
    >
      {icon && (
        <div className="mb-6 text-gray-400 dark:text-gray-500" aria-hidden="true">
          {icon}
        </div>
      )}
      
      <h3 className="mb-3 text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
        {title}
      </h3>
      
      <p className="mb-6 max-w-md" style={{ color: 'var(--text-primary)' }}>
        {description}
      </p>

      {(actionLabel && (actionHref || onAction)) && (
        <>
          {actionHref ? (
            <Button as={Link} href={actionHref} variant="primary">
              {actionLabel}
            </Button>
          ) : (
            <Button onClick={onAction} variant="primary">
              {actionLabel}
            </Button>
          )}
        </>
      )}
    </div>
  );
}

