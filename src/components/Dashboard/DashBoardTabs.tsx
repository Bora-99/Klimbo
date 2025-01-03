import { useMemo, useState } from "react";
import { Calendar } from "./calendar/Calendar";
import { Button, Tabs } from "../shared";
import { TaskModal, TaskTable } from "./task";
import { useDashboardTabs } from "../../hooks";
import { KanbanBoard } from "./kanban";
import { useTranslation } from "react-i18next";

interface IRenderTabs {
  kanban: JSX.Element;
  table: JSX.Element;
  calendar: JSX.Element;
}

export const DashboardTabs: React.FC = () => {
  const { activeTab, setActiveTab, tabs, tasks } = useDashboardTabs();
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  const renderTabs: IRenderTabs = useMemo(
    () => ({
      kanban: <KanbanBoard />,
      table: <TaskTable tasks={tasks} />,
      calendar: <Calendar tasks={tasks} />,
    }),
    [tasks]
  );

  return (
    <div className="w-full">
      <div className="flex justify-between items-center">
        <Tabs
          tabs={tabs}
          onTabClick={(tab) => setActiveTab(tab.id as keyof IRenderTabs)}
          activeTab={activeTab}
        />
        <Button onClick={() => setOpen(true)} types="primary">
          {t("addTask")}
        </Button>
      </div>

      <div className="p-4">{renderTabs[activeTab as keyof IRenderTabs]}</div>

      <TaskModal open={open} setOpen={setOpen} />
    </div>
  );
};
