import { Navigate } from "react-router-dom";
import { Layout } from "../components";

export const ProtectedRoute = () => {
  const token = sessionStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" />;
  }

  return <Layout />;
};
