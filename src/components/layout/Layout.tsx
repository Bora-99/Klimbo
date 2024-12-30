import { Outlet } from "react-router-dom";
import { Sidebar } from "./SideBar";

const Layout = () => {
  return (
    <div className="flex h-screen">
      <div>
        <Sidebar />
      </div>
      <div className="flex-1  p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
