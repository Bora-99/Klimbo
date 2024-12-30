import {
  HomeIcon,
  CogIcon,
  UserIcon,
  ArrowRightStartOnRectangleIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import { SidebarItem } from "./SidebarItem";
import { SidebarContainer } from "./SideBarContainer";
import { useLocation } from "react-router-dom";

export const Sidebar = () => {
  const location = useLocation();

  const activeTab = location.pathname.split("/")[1];

  const [expanded, setExpanded] = useState(true);

  const navBarItems = [
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
  ];

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
