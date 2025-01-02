import { useEffect, useState } from "react";
import { TaskStatus } from "../../constants";
import { fetchTasks, useAppDispatch } from "../../store";

export const useChartData = () => {
  const [chartData, setChartData] = useState({
    labels: TaskStatus,
    datasets: [
      {
        label: "Tasks",
        data: [0, 0, 0, 0],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#9400d3"],
      },
    ],
  });

  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchTask = async () => {
      const data = await dispatch(fetchTasks()).unwrap();

      const taskStatusCounts = data.reduce((acc, task) => {
        acc[task.status] = (acc[task.status] || 0) + 1;
        return acc;
      }, {} as Record<string, number>);

      const labels = Object.keys(taskStatusCounts);
      const chartData = Object.values(taskStatusCounts);

      setChartData({
        labels: labels,
        datasets: [
          {
            label: "Tasks",
            data: chartData,
            backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#9400d3"],
          },
        ],
      });
    };

    fetchTask();
  }, [dispatch]);

  return {
    chartData,
  };
};
