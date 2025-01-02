import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { ProtectedRoute } from "./ProtectedRoute";
import { Home, Dashboard, Settings, ErrorSection } from "../pages";
import LoginForm from "../components/login/LoginForm";

const Routes = () => {
  const publicRoutes = [
    {
      path: "/login",
      element: <LoginForm />,
    },
    {
      path: "*",
      element: <ErrorSection />,
    },
  ];

  const routesForAuthenticatedOnly = [
    {
      path: "/",
      element: <ProtectedRoute />,
      children: [
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/settings",
          element: <Settings />,
        },
      ],
    },
  ];

  const router = createBrowserRouter([
    ...publicRoutes,
    ...routesForAuthenticatedOnly,
  ]);

  return <RouterProvider router={router} />;
};

export default Routes;
