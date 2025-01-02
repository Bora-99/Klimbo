import React from "react";
import { PieChart, PolarAreaChart } from "../components";

export const Home: React.FC = () => {
  return (
    <div className="flex justify-around items-center h-full">
      <div className="flex-1 max-w-md h-96 flex justify-center items-center">
        <PolarAreaChart />
      </div>
      <div className="flex-1 max-w-md h-96 flex justify-center items-center">
        <PieChart />
      </div>
    </div>
  );
};
