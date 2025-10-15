/**
 * Admin Card - Dashboard summary card
 */

interface AdminCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  color?: "blue" | "green" | "yellow" | "red" | "purple";
}

export default function AdminCard({ title, value, icon, color = "blue" }: AdminCardProps) {
  const colorClasses = {
    blue: "bg-blue-500 dark:bg-blue-600",
    green: "bg-green-500 dark:bg-green-600",
    yellow: "bg-yellow-500 dark:bg-yellow-600",
    red: "bg-red-500 dark:bg-red-600",
    purple: "bg-purple-500 dark:bg-purple-600",
  };

  return (
    <div className="p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow" style={{ backgroundColor: 'var(--admin-card-bg)' }}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium" style={{ color: 'var(--admin-card-text)' }}>
            {title}
          </p>
          <p className="text-3xl font-bold" style={{ color: 'var(--admin-card-text)' }}>
            {value}
          </p>
        </div>
        <div className={`p-3 rounded-full ${colorClasses[color]}`}>
          {icon}
        </div>
      </div>
    </div>
  );
}
