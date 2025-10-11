import React from "react";
import type { Research } from "@/apis/Research/api";

interface ResearchCardProps {
  research: Research;
  index?: number;
}

const ResearchCard: React.FC<ResearchCardProps> = ({ research }) => {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-6 flex flex-col h-full transition hover:scale-[1.02] hover:shadow-lg">
      <h2 className="text-xl font-semibold text-blue-700 dark:text-blue-400 mb-2">
        {research.title}
      </h2>
      <p className="text-slate-700 dark:text-slate-300 mb-3 line-clamp-3">
        {research.description}
      </p>
      <div className="mb-2">
        <span className="inline-block bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 px-3 py-1 rounded-full text-xs font-medium mr-2">
          {research.category}
        </span>
        {research.tags && research.tags.length > 0 && (
          <span className="inline-flex flex-wrap gap-1">
            {research.tags.slice(0, 3).map((tag, idx) => (
              <span
                key={idx}
                className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded-full text-xs font-medium"
              >
                {tag}
              </span>
            ))}
            {research.tags.length > 3 && (
              <span className="bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 px-2 py-1 rounded-full text-xs font-medium">
                +{research.tags.length - 3}
              </span>
            )}
          </span>
        )}
      </div>
      <a
        href={research.researchLink}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto text-blue-600 dark:text-blue-400 underline text-sm font-medium hover:text-blue-800 dark:hover:text-blue-300"
      >
        View Research
      </a>
      <div className="mt-2 text-xs text-slate-500 dark:text-slate-400">
        {research.formattedDate || new Date(research.createdAt).toLocaleDateString()}
      </div>
    </div>
  );
};

export default ResearchCard;