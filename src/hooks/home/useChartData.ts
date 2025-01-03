import { useMemo } from "react";
import { RootState, useAppSelector } from "../../store";

export const useChartData = () => {
  const tasks = useAppSelector((state: RootState) => state.tasks.tasks);

  const taskStatusCounts = useMemo(
    () =>
      tasks.reduce((acc, task) => {
        acc[task.status] = (acc[task.status] || 0) + 1;
        return acc;
      }, {} as Record<string, number>),
    [tasks]
  );

  const labels = Object.keys(taskStatusCounts);
  const chartValues = Object.values(taskStatusCounts);

  const chartData = useMemo(
    () => ({
      labels: labels,
      datasets: [
        {
          label: "Tasks",
          data: chartValues,
          backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#9400d3"],
        },
      ],
    }),
    [labels, chartValues]
  );

  return {
    chartData,
  };
};
