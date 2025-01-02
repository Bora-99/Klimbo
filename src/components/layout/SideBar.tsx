import { useState, useMemo } from "react";
import {
  HomeIcon,
  CogIcon,
  UserIcon,
  ArrowRightStartOnRectangleIcon,
} from "@heroicons/react/24/outline";
import { SidebarItem } from "./SidebarItem";
import { SidebarContainer } from "./SidebarContainer";
import { useLocation, useNavigate } from "react-router-dom";
import { logout } from "../../store/actions";

export const Sidebar: React.FC = () => {
  const [expanded, setExpanded] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  const activeTab = useMemo(
    () => location.pathname.split("/")[1],
    [location.pathname]
  );

  const navBarItems = useMemo(
    () => [
      {
        icon: <HomeIcon />,
        text: "Home",
      },
      {
        icon: <UserIcon />,
        text: "Dashboard",
      },
      {
        icon: <CogIcon />,
        text: "Settings",
      },
      {
        icon: <ArrowRightStartOnRectangleIcon />,
        text: "Logout",
        onCustomClick: () => {
          logout();
          navigate("/login");
        },
      },
    ],
    []
  );

  return (
    <SidebarContainer expanded={expanded} setExpanded={setExpanded}>
      <>
        {navBarItems.map((item) => (
          <SidebarItem
            key={item.text}
            activeMenu={activeTab}
            expanded={expanded}
            {...item}
          />
        ))}
      </>
    </SidebarContainer>
  );
};
