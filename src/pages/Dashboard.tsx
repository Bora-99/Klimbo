import React from "react";
import { useFetchTask } from "../hooks";
import { DashboardTabs } from "../components";

export const Dashboard: React.FC = () => {
  useFetchTask();
  return <DashboardTabs />;
};
