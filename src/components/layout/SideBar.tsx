import { useState, useMemo } from "react";
import {
  HomeIcon,
  CogIcon,
  UserIcon,
  ArrowRightStartOnRectangleIcon,
} from "@heroicons/react/24/outline";

import { useLocation, useNavigate } from "react-router-dom";
import { logout } from "../../store/actions";
import { SidebarContainer } from "./SidebarContainer";
import { SidebarItem } from "./SidebarItem";

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
        icon: <ArrowRightStartOnRectangleIcon />,
        text: "Logout",
        onCustomClick: () => {
          logout();
          navigate("/login");
        },
      },
    ],
    [navigate]
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
