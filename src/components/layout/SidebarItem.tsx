import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

interface SidebarItemProps {
  icon: React.ReactNode;
  text: string;
  expanded: boolean;
  activeMenu: string;
}

export const SidebarItem: React.FC<SidebarItemProps> = ({
  icon,
  text,
  expanded = false,
  activeMenu,
}) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <li>
      <button
        className={`
         group relative my-1 flex w-full cursor-pointer
         items-center rounded-md px-3
         py-2 font-medium transition-colors
         ${
           activeMenu === text.toLowerCase()
             ? "text-primary-500 bg-gradient-to-tr from-indigo-200 to-indigo-100"
             : "text-gray-600 hover:bg-indigo-50"
         }
         ${!expanded && "hidden sm:flex"}
     `}
        onClick={() => navigate(`/${text.toLowerCase()}`)}
      >
        <span className="h-6 w-6">{icon}</span>

        <span
          className={`overflow-hidden text-start transition-all ${
            expanded ? "ml-3 w-44" : "w-0"
          }`}
        >
          {t(text)}
        </span>

        {!expanded && (
          <div
            className={`
            text-primary-500 invisible absolute left-full ml-6 -translate-x-3
            rounded-md bg-indigo-100 px-2
            py-1 text-sm opacity-20 transition-all
            group-hover:visible group-hover:translate-x-0 group-hover:opacity-100
        `}
          >
            {text}
          </div>
        )}
      </button>
    </li>
  );
};
