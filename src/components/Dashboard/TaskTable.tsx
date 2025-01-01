import { useMemo } from "react";
import { TaskTypes } from "../../types/task";

interface TaskTableProps {
  tasks: TaskTypes[];
}

export const TaskTable: React.FC<TaskTableProps> = ({ tasks }) => {
  const columns = useMemo(
    () => ["Title", "Due Date", "Priority", "Assignee", "Status"],
    []
  );
  return (
    <div className="overflow-x-auto px-4 py-6">
      <table className="min-w-full table-auto border-collapse bg-white rounded-lg shadow-md">
        <thead className="bg-gray-100">
          <tr>
            {columns.map((column) => (
              <th
                key={column}
                className="px-4 py-2 text-left font-semibold text-sm text-gray-600"
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id} className="border-t border-gray-200">
              <td className="px-4 py-2 text-gray-700">{task.title}</td>
              <td className="px-4 py-2 text-gray-700">
                {new Date(task.dueDate).toLocaleDateString()}
              </td>
              <td className="px-4 py-2 text-gray-700">
                <span
                  className={`px-2 py-1 text-xs font-semibold rounded-full ${
                    task.priority === "High"
                      ? "bg-red-200 text-red-800"
                      : task.priority === "Medium"
                      ? "bg-yellow-200 text-yellow-800"
                      : "bg-green-200 text-green-800"
                  }`}
                >
                  {task.priority}
                </span>
              </td>
              <td className="px-4 py-2 text-gray-700">{task.assign}</td>
              <td className="px-4 py-2 text-gray-700">
                <span
                  className={`px-2 py-1 text-xs font-semibold rounded-full ${
                    task.status === "In Progress"
                      ? "bg-blue-200 text-blue-800"
                      : task.status === "Completed"
                      ? "bg-green-200 text-green-800"
                      : "bg-gray-200 text-gray-800"
                  }`}
                >
                  {task.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
