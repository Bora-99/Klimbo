import React from "react";

interface TaskCardProps {
  title: string;
  description: string;
  type: string;
  priority: string;
}

const TaskCard: React.FC<TaskCardProps> = ({
  title,
  description,
  type,
  priority,
}) => {
  return (
    <div className="w-80 h-48 rounded overflow-hidden shadow-lg bg-white border border-gray-200 p-4">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <span
          className={`text-xs font-bold px-2 py-1 rounded ${
            priority === "High"
              ? "bg-red-100 text-red-600"
              : priority === "Medium"
              ? "bg-yellow-100 text-yellow-600"
              : "bg-green-100 text-green-600"
          }`}
        >
          {priority}
        </span>
      </div>
      <p className="text-gray-600 mt-2">{description}</p>
      <div className="mt-4 flex justify-between items-center">
        <span className="text-sm font-medium px-3 py-1 bg-blue-100 text-blue-600 rounded-full">
          {type}
        </span>
        <button className="text-sm text-white bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded">
          View Details
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
