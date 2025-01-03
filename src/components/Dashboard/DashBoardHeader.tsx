import { DashboardTabs } from "./DashBoardTabs";
import { useFetchTask } from "../../hooks";

export const DashBoardHeader: React.FC = () => {
  useFetchTask();
  return (
    <div>
      <DashboardTabs />;
    </div>
  );
};
