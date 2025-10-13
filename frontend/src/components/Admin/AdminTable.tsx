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
  return (
    <div className="w-full bg-white dark:bg-slate-800 rounded-lg shadow-md overflow-hidden">
      {loading ? (
        <div className="flex items-center justify-center py-12">
          <span className="text-slate-500 dark:text-slate-400 text-lg">Loading...</span>
        </div>
      ) : (
        <table className="w-full">
          <thead className="bg-slate-100 dark:bg-slate-700">
            <tr>
              {columns.map((column) => (
                <th
                  key={column.key}
                  className="px-6 py-3 text-left text-slate-700 dark:text-slate-200 font-medium"
                >
                  {column.label}
                </th>
              ))}
              {showActions && (
                <th className="px-6 py-3 text-left text-slate-700 dark:text-slate-200 font-medium">
                  Actions
                </th>
              )}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
            {data.map((item, index) => (
              <tr key={item._id || item.id || index} className="hover:bg-slate-50 dark:hover:bg-slate-700">
                {columns.map((column) => (
                  <td key={column.key} className="px-6 py-4 text-slate-900 dark:text-slate-100">
                    {column.render ? column.render(item[column.key], item) : item[column.key]}
                  </td>
                ))}
                {showActions && (
                  <td className="px-6 py-4 text-slate-900 dark:text-slate-100">
                    <div className="flex space-x-2">
                      {onEdit && (
                        <button
                          onClick={() => onEdit(item)}
                          className="px-3 py-1.5 text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-md hover:bg-blue-100 dark:hover:bg-blue-900/40 hover:text-blue-700 dark:hover:text-blue-300 hover:border-blue-300 dark:hover:border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800 transition-all duration-200 cursor-pointer"
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
                          className="px-3 py-1.5 text-sm font-medium text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md hover:bg-red-100 dark:hover:bg-red-900/40 hover:text-red-700 dark:hover:text-red-300 hover:border-red-300 dark:hover:border-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800 transition-all duration-200 cursor-pointer"
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
      )}
    </div>
  );
}
