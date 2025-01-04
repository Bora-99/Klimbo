import React, { useMemo, useState } from "react";
import { ITaskTypes } from "../../../types";
import { TaskModal } from "./TaskModal";
import { useTranslation } from "react-i18next";

interface TaskCardProps {
  item: ITaskTypes;
}

export const TaskCard: React.FC<TaskCardProps> = ({ item }) => {
  const { title, description, type, priority } = item;
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  const backgroundColor = useMemo(() => {
    switch (priority) {
      case "High":
        return "bg-red-100 text-red-600";
      case "Medium":
        return "bg-yellow-100 text-yellow-600";
      case "Low":
        return "bg-green-100 text-green-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  }, [priority]);

  return (
    <>
      <div className="min-h-48 rounded overflow-hidden shadow-lg bg-white border border-gray-200 p-4">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-semibold text-gray-800 overflow-hidden text-ellipsis whitespace-normal">
            {title}
          </h3>
          <span
            className={`text-xs font-bold px-2 py-1 rounded ${backgroundColor}`}
          >
            {priority}
          </span>
        </div>
        <p className="text-gray-600 mt-2 overflow-hidden text-ellipsis whitespace-normal">
          {description}
        </p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-sm font-medium px-3 py-1 bg-blue-100 text-blue-600 rounded-full">
            {type}
          </span>
          <button
            className="text-sm text-white bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded"
            onClick={() => setOpen(true)}
          >
            {t("viewDetails")}
          </button>
        </div>
      </div>
      <TaskModal open={open} setOpen={setOpen} editMode={item} viewMode />
    </>
  );
};
