import { useEffect, useMemo, useState } from "react";
import { TaskTable } from "./TaskTable";
import axios from "axios";
import { TaskTypes } from "../../types/task";
import { Calendar } from "./calendarBoard/Calendar";
import { Button } from "../shared";
import { API } from "../../constants";
import { useTranslation } from "react-i18next";

interface IRenderTabs {
  kanban: JSX.Element;
  table: JSX.Element;
  calendar: JSX.Element;
}

export const DashboardTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<keyof IRenderTabs>("table");
  const { t } = useTranslation();

  const tabs = useMemo(
    () => [
      { id: "table", label: t("table") },
      { id: "kanban", label: t("kanban") },
      { id: "calendar", label: t("calendar") },
    ],
    [t]
  );

  const [tasks, setTasks] = useState<TaskTypes[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get(`${API}/tasks`);
        setTasks(response.data);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch tasks.");
      }
    };

    fetchTasks();
  }, []);

  const renderTabs: IRenderTabs = useMemo(
    () => ({
      kanban: <div>Kanban Content</div>,
      table: <TaskTable tasks={tasks} />,
      calendar: <Calendar tasks={tasks} />,
    }),
    [tasks]
  );

  return (
    <div className="w-full">
      <div className="flex space-x-4 border-b border-gray-200">
        {tabs.map((tab) => (
          <Button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as keyof IRenderTabs)}
            className={`relative px-4 py-2 text-blue-600 font-medium focus:outline-none ${
              activeTab === tab.id ? "text-blue-600" : "hover:text-blue-500"
            }`}
          >
            <>
              {tab.label}
              {activeTab === tab.id && (
                <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-600" />
              )}
            </>
          </Button>
        ))}
      </div>

      <div className="p-4">{error || renderTabs[activeTab]}</div>
    </div>
  );
};
