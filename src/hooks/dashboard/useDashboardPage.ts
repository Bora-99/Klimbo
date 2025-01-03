import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useAppSelector, RootState } from "../../store";

export const useDashboardTabs = () => {
  const { t } = useTranslation();

  const tabs = useMemo(
    () => [
      { id: "table", label: t("table") },
      { id: "kanban", label: t("kanban") },
      { id: "calendar", label: t("calendar") },
    ],
    [t]
  );
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const tasks = useAppSelector((state: RootState) => state.tasks.tasks);

  return { activeTab, setActiveTab, tabs, tasks };
};
