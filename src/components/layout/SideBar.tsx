import { useState, useMemo } from "react";
import {
  HomeIcon,
  CogIcon,
  UserIcon,
  ArrowRightStartOnRectangleIcon,
} from "@heroicons/react/24/outline";
import { SidebarItem } from "./SidebarItem";
import { SidebarContainer } from "./SidebarContainer";
import { useLocation } from "react-router-dom";

export const Sidebar: React.FC = () => {
  const [expanded, setExpanded] = useState(true);
  const location = useLocation();

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
