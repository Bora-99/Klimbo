import { useMemo } from "react";
import { useAppSelector, RootState } from "../../store";
import { useFetchTask } from "../useFetchTasks";

export const useHomePage = () => {
  useFetchTask();
  const tasks = useAppSelector((state: RootState) => state.tasks.tasks);

  const user = JSON.parse(sessionStorage.getItem("user") ?? "");

  const highPriorityTasks = useMemo(
    () =>
      tasks.filter(
        (task) => task.priority === "High" && task.reporter === user.username
      ),
    [tasks]
  );

  const userTasks = useMemo(
    () => tasks.filter((task) => task.assign === user.username),
    [tasks, user]
  );

  return {
    user,
    highPriorityTasks: user.role === "admin" ? highPriorityTasks : userTasks,
  };
};
