import React from "react";
import { PieChart, TaskTable } from "../components";
import { useHomePage } from "../hooks";

export const Home: React.FC = () => {
  const { user, highPriorityTasks } = useHomePage();

  return (
    <div className="flex justify-around flex-wrap items-center h-full">
      <div className="flex-1 font-bold flex-col h-96 flex justify-center items-center">
        Hi {user?.username}! Here are your
        {user?.role === "admin" ? " team high priority" : ""} tasks:
        {highPriorityTasks.length > 0 ? (
          <TaskTable tasks={highPriorityTasks} />
        ) : (
          <p>"No tasks for today."</p>
        )}
      </div>
      <div className="flex-1 max-w-md h-96 flex justify-center items-center">
        <PieChart />
      </div>
    </div>
  );
};
