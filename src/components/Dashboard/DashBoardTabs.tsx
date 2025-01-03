import { useMemo, useState } from "react";
import { TaskTable } from "./task/TaskTable";
import { Calendar } from "./calendar/Calendar";
import { Button } from "../shared";
import { TaskModal } from "./task";
import { useDashboardTabs } from "../../hooks/dashboard";

interface IRenderTabs {
  kanban: JSX.Element;
  table: JSX.Element;
  calendar: JSX.Element;
}

export const DashboardTabs: React.FC = () => {
  const { activeTab, setActiveTab, tabs, tasks } = useDashboardTabs();

  const [open, setOpen] = useState(false);

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
      <div className="flex justify-between items-center">
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
        <Button onClick={() => setOpen(true)} types="primary">
          Create Task
        </Button>
      </div>

      <div className="p-4">{renderTabs[activeTab as keyof IRenderTabs]}</div>

      <TaskModal open={open} setOpen={setOpen} />
    </div>
  );
};
