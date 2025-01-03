import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { tabletBreakpoint } from "../../constants";
import { useWindowDimensions } from "../../hooks";
import { Navbar } from "./Navbar";

export const Layout: React.FC = () => {
  const { width } = useWindowDimensions();

  return (
    <div
      className={`flex ${
        width < tabletBreakpoint ? "flex-col" : "flex-row"
      } h-screen`}
    >
      <div>{width < tabletBreakpoint ? <Navbar /> : <Sidebar />}</div>
      <div className="flex-1  p-4">
        <Outlet />
      </div>
    </div>
  );
};