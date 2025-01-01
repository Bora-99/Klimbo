import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { ProtectedRoute } from "./ProtectedRoute";
import { LoginForm } from "../components";
import { Home, Dashboard, Settings } from "../pages";

const Routes = () => {
  const publicRoutes = [
    {
      path: "/logIn",
      element: <LoginForm />,
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
