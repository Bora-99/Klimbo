import { useEffect } from "react";
import { fetchTasks, useAppDispatch } from "../store";

export const useFetchTask = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const getTasks = async () => {
      try {
        await dispatch(fetchTasks()).unwrap();
      } catch (err) {
        console.error(err);
      }
    };

    getTasks();
  }, [dispatch]);
};
