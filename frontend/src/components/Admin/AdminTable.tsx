/**
 * Admin Table - Reusable table component
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
}

export default function AdminTable({
  columns,
  data,
  onEdit,
  onDelete,
  onApprove,
  showActions = true,
  customActions = [],
}: AdminTableProps) {
  return (
    <div className="w-full bg-white dark:bg-slate-800 rounded-lg shadow-md overflow-hidden">
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
            <tr key={item.id || index} className="hover:bg-slate-50 dark:hover:bg-slate-700">
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
                        className="text-blue-600 hover:underline hover:text-blue-700 dark:hover:text-blue-400 transition-colors duration-200 cursor-pointer"
                      >
                        Edit
                      </button>
                    )}
                    {customActions.map((action, index) => (
                      <button
                        key={index}
                        onClick={() => action.onClick(item)}
                        className={action.className || "text-purple-600 hover:underline hover:text-purple-700 dark:hover:text-purple-400 transition-colors duration-200 cursor-pointer"}
                      >
                        {action.label}
                      </button>
                    ))}
                    {onApprove && (
                      <button
                        onClick={() => onApprove(item)}
                        className="text-green-600 hover:underline hover:text-green-700 dark:hover:text-green-400 transition-colors duration-200 cursor-pointer"
                      >
                        Approve
                      </button>
                    )}
                    {onDelete && (
                      <button
                        onClick={() => onDelete(item)}
                        className="text-red-500 hover:underline hover:text-red-600 dark:hover:text-red-400 transition-colors duration-200 cursor-pointer"
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
  );
}
