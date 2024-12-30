import React, { useEffect, useState } from "react";
import axios from "axios";
import TaskCard from "../components/Dashboard/TaskCard";
import { API } from "../const";
import { TaskTypes } from "../types/task";

const Dashboard: React.FC = () => {
  const [tasks, setTasks] = useState<TaskTypes[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch tasks from JSON server
    const fetchTasks = async () => {
      try {
        const response = await axios.get(`${API}/tasks`);
        setTasks(response.data);
      } catch (err) {
        setError("Failed to fetch tasks.");
      }
    };

    fetchTasks();
  }, []);

  return (
    <>
      {tasks.map((task) => (
        <TaskCard key={task.id} {...task} />
      ))}
    </>
  );
};

export default Dashboard;
