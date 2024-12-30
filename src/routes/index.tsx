import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { ProtectedRoute } from "./ProtectedRoute";
import LogInForm from "../components/login/LogInForm";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Settings from "../pages/Settings";

const Routes = () => {
  const publicRoutes = [
    {
      path: "/logIn",
      element: <LogInForm />,
    },
    // {
    //   path: "/about-us",
    //   element: <div>About Us</div>,
    // },
  ];

  const routesForNotAuthenticatedOnly = [
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
    ...routesForNotAuthenticatedOnly,
  ]);

  return <RouterProvider router={router} />;
};

export default Routes;
