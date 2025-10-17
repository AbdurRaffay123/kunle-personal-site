/**
 * Admin Table - Reusable table component
 * Updated: Added optional loading prop for showing loading state.
 */

interface Column {
  key: string;
  label: string;
  render?: (value: any, item: any) => React.ReactNode;
}

interface AdminTableProps {
  columns: Column[];
  data: any[];
  onEdit?: (item: any) => void;
  onDelete?: (item: any) => void;
  onApprove?: (item: any) => void;
  showActions?: boolean;
  customActions?: Array<{
    label: string;
    onClick: (item: any) => void;
    className?: string;
  }>;
  loading?: boolean; // <-- Added loading prop
}

export default function AdminTable({
  columns,
  data,
  onEdit,
  onDelete,
  onApprove,
  showActions = true,
  customActions = [],
  loading = false, // <-- Default loading to false
}: AdminTableProps) {
  if (loading) {
    return (
      <div className="w-full rounded-lg shadow-md overflow-hidden" style={{ backgroundColor: 'var(--card)' }}>
        <div className="flex items-center justify-center py-12">
          <span className="text-lg" style={{ color: 'var(--text-secondary)' }}>Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Desktop Table View (lg and up) */}
      <div className="hidden lg:block rounded-lg shadow-md overflow-hidden" style={{ backgroundColor: 'var(--card)' }}>
      <table className="w-full">
          <thead style={{ backgroundColor: 'var(--nav-text)' }}>
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                  className="px-6 py-3 text-left font-medium"
                  style={{ color: 'white' }}
              >
                {column.label}
              </th>
            ))}
            {showActions && (
                <th className="px-6 py-3 text-left font-medium" style={{ color: 'white' }}>
                Actions
              </th>
            )}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
          {data.map((item, index) => (
              <tr key={item._id || item.id || index}>
              {columns.map((column) => (
                  <td key={column.key} className="px-6 py-4" style={{ color: 'var(--text-primary)' }}>
                  {column.render ? column.render(item[column.key], item) : item[column.key]}
                </td>
              ))}
              {showActions && (
                  <td className="px-6 py-4" style={{ color: 'var(--text-primary)' }}>
                  <div className="flex space-x-2">
                    {onEdit && (
                      <button
                        onClick={() => onEdit(item)}
                          className="px-3 py-1.5 text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800 transition-all duration-200 cursor-pointer"
                          style={{ backgroundColor: '#10B981', color: 'white' }}
                      >
                        Edit
                      </button>
                    )}
                      {customActions.map((action, index) => (
                        <button
                          key={index}
                          onClick={() => action.onClick(item)}
                          className={action.className || "px-3 py-1.5 text-sm font-medium text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-md hover:bg-purple-100 dark:hover:bg-purple-900/40 hover:text-purple-700 dark:hover:text-purple-300 hover:border-purple-300 dark:hover:border-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800 transition-all duration-200 cursor-pointer"}
                        >
                          {action.label}
                        </button>
                      ))}
                    {onApprove && (
                      <button
                        onClick={() => onApprove(item)}
                          className="px-3 py-1.5 text-sm font-medium text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-md hover:bg-green-100 dark:hover:bg-green-900/40 hover:text-green-700 dark:hover:text-green-300 hover:border-green-300 dark:hover:border-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800 transition-all duration-200 cursor-pointer"
                      >
                        Approve
                      </button>
                    )}
                    {onDelete && (
                      <button
                        onClick={() => onDelete(item)}
                          className="px-3 py-1.5 text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800 transition-all duration-200 cursor-pointer"
                          style={{ backgroundColor: '#EF4444', color: 'white' }}
                        >
                          Delete
                        </button>
                      )}
                    </div>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Tablet Table View (md to lg) - Condensed with hidden columns */}
      <div className="hidden md:block lg:hidden rounded-lg shadow-md overflow-hidden" style={{ backgroundColor: 'var(--card)' }}>
        <table className="w-full">
          <thead style={{ backgroundColor: 'var(--nav-text)' }}>
            <tr>
              {/* Show only essential columns for tablet */}
              {columns.filter(col => 
                ['title', 'email', 'category', 'postTitle', 'postType', 'parentCommentId'].includes(col.key)
              ).map((column) => (
                <th
                  key={column.key}
                  className="px-4 py-3 text-left font-medium text-sm"
                  style={{ color: 'white' }}
                >
                  {column.label}
                </th>
              ))}
              {showActions && (
                <th className="px-4 py-3 text-left font-medium text-sm" style={{ color: 'white' }}>
                  Actions
                </th>
              )}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
            {data.map((item, index) => (
              <tr key={item._id || item.id || index}>
                {/* Show only essential columns for tablet */}
                {columns.filter(col => 
                  ['title', 'email', 'category', 'postTitle', 'postType', 'parentCommentId'].includes(col.key)
                ).map((column) => (
                  <td key={column.key} className="px-4 py-3 text-sm" style={{ color: 'var(--text-primary)' }}>
                    {column.key === 'title' && item.title ? (
                      <div className="max-w-[200px] truncate font-medium">
                        {item.title}
                      </div>
                    ) : column.key === 'email' && item.email ? (
                      <div className="max-w-[150px] truncate font-medium">
                        {item.email}
                      </div>
                    ) : column.key === 'category' && item.category ? (
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300">
                        {item.category}
                      </span>
                    ) : column.key === 'postTitle' && item.postTitle ? (
                      <div className="max-w-[150px]">
                        <div className="font-medium truncate" style={{ color: 'var(--text-primary)' }}>
                          {item.postTitle}
                        </div>
                        <div className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                          {item.postType}
                        </div>
                      </div>
                    ) : column.key === 'parentCommentId' ? (
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        item.parentCommentId 
                          ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' 
                          : 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                      }`}>
                        {item.parentCommentId ? 'Reply' : 'Comment'}
                      </span>
                    ) : column.render ? column.render(item[column.key], item) : item[column.key]}
                  </td>
                ))}
                {showActions && (
                  <td className="px-4 py-3" style={{ color: 'var(--text-primary)' }}>
                    <div className="flex space-x-1">
                      {onEdit && (
                        <button
                          onClick={() => onEdit(item)}
                          className="px-2 py-1 text-xs font-medium rounded transition-all duration-200 cursor-pointer"
                          style={{ backgroundColor: '#10B981', color: 'white' }}
                          title="Edit"
                        >
                          Edit
                        </button>
                      )}
                      {onDelete && (
                        <button
                          onClick={() => onDelete(item)}
                          className="px-2 py-1 text-xs font-medium rounded transition-all duration-200 cursor-pointer"
                          style={{ backgroundColor: '#EF4444', color: 'white' }}
                          title="Delete"
                      >
                        Delete
                      </button>
                    )}
                  </div>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
      </div>

      {/* Mobile Card View (sm and below) */}
      <div className="md:hidden space-y-4">
        {data.map((item, index) => {
          // Check if this is a comment item (has email field)
          const isComment = item.email !== undefined;
          
          return (
            <div key={item._id || item.id || index} className="rounded-lg shadow-md p-4 border" style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)' }}>
              {isComment ? (
                // Comment Card Layout
                <>
                  {/* Comment Type Badge */}
                  <div className="flex items-center justify-between mb-3">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      item.parentCommentId 
                        ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300' 
                        : 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
                    }`}>
                      {item.parentCommentId ? 'Reply' : 'Comment'}
                    </span>
                    {item.createdAt && (
                      <span className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                        {new Date(item.createdAt).toLocaleDateString()}
                      </span>
                    )}
                  </div>
                  
                  {/* Email (Primary) */}
                  <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                    {item.email}
                  </h3>
                  
                  {/* Post Info (Secondary) */}
                  {item.postTitle && (
                    <div className="mb-3">
                      <p className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                        On: {item.postTitle}
                      </p>
                      {item.postType && (
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-slate-100 dark:bg-slate-700" style={{ color: 'var(--text-secondary)' }}>
                          {item.postType}
                        </span>
                      )}
                    </div>
                  )}
                  
                  {/* Content */}
                  {item.content && (
                    <p className="text-sm mb-4 line-clamp-3" style={{ color: 'var(--text-primary)' }}>
                      {item.content}
                    </p>
                  )}
                </>
              ) : (
                // Blog/General Card Layout
                <>
                  {/* Main Title */}
                  <h3 className="text-lg font-semibold mb-2 line-clamp-2" style={{ color: 'var(--text-primary)' }}>
                    {item.title || 'Untitled'}
                  </h3>
                  
                  {/* Secondary Info */}
                  <div className="flex flex-wrap items-center gap-4 mb-3">
                    {item.category && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300">
                        {item.category}
                      </span>
                    )}
                    {item.createdAt && (
                      <span className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                        {new Date(item.createdAt).toLocaleDateString()}
                      </span>
                    )}
                  </div>
                  
                  {/* Description */}
                  {item.description && (
                    <p className="text-sm mb-4 line-clamp-2" style={{ color: 'var(--text-primary)' }}>
                      {item.description}
                    </p>
                  )}
                  
                  {/* Link */}
                  {item.link && (
                    <div className="mb-4">
                      <a 
                        href={item.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                      >
                        <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        View Link
                      </a>
                    </div>
                  )}
                </>
              )}
              
              {/* Actions */}
              {showActions && (
                <div className="flex flex-col sm:flex-row gap-2 pt-3 border-t border-slate-200 dark:border-slate-700">
                  {onEdit && (
                    <button
                      onClick={() => onEdit(item)}
                      className="w-full px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 cursor-pointer"
                      style={{ backgroundColor: '#10B981', color: 'white' }}
                    >
                      Edit
                    </button>
                  )}
                  {customActions.map((action, actionIndex) => (
                    <button
                      key={actionIndex}
                      onClick={() => action.onClick(item)}
                      className={action.className || "w-full px-4 py-2 text-sm font-medium text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-md hover:bg-purple-100 dark:hover:bg-purple-900/40 hover:text-purple-700 dark:hover:text-purple-300 transition-all duration-200 cursor-pointer"}
                    >
                      {action.label}
                    </button>
                  ))}
                  {onApprove && (
                    <button
                      onClick={() => onApprove(item)}
                      className="w-full px-4 py-2 text-sm font-medium text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-md hover:bg-green-100 dark:hover:bg-green-900/40 hover:text-green-700 dark:hover:text-green-300 transition-all duration-200 cursor-pointer"
                    >
                      Approve
                    </button>
                  )}
                  {onDelete && (
                    <button
                      onClick={() => onDelete(item)}
                      className="w-full px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 cursor-pointer"
                      style={{ backgroundColor: '#EF4444', color: 'white' }}
                    >
                      Delete
                    </button>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
