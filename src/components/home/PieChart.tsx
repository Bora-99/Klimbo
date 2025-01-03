import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useChartData } from "../../hooks";

ChartJS.register(ArcElement, Tooltip, Legend);

export const PieChart: React.FC = () => {
  const { chartData } = useChartData();

  return (
    <div className="max-w-sm w-150 h-100 rounded-lg overflow-hidden shadow-lg bg-white border border-gray-200 p-4 mx-auto">
      <h2 className="text-center text-xl font-bold mb-4">Pie Chart</h2>
      <Pie data={chartData} />
    </div>
  );
};