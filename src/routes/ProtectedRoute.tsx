import { Navigate } from "react-router-dom";
import { Layout } from "../components";
import { useEffect } from "react";
import { fetchTasks, fetchUsers, useAppDispatch } from "../store";

export const ProtectedRoute = () => {
  const token = sessionStorage.getItem("token");

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (token) {
      const getData = async () => {
        try {
          await Promise.all([
            dispatch(fetchTasks()).unwrap(),
            dispatch(fetchUsers()).unwrap(),
          ]);
        } catch (err) {
          console.error(err);
        }
      };

      getData();
    }
  }, [token, dispatch]);

  if (!token) {
    return <Navigate to="/login" />;
  }

  return <Layout />;
};
