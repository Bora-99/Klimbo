import {
  ArrowRightIcon,
  ArrowLeftIcon,
  EllipsisVerticalIcon,
} from "@heroicons/react/24/outline";
import { Button } from "../shared/Button";
import { LanguageSwitcher } from "./LanguageSwitcher";

interface ISideBarProps {
  children: React.JSX.Element;
  expanded: boolean;
  setExpanded: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SidebarContainer: React.FC<ISideBarProps> = ({
  children,
  expanded,
  setExpanded,
} ) =>
{
  
  const user = JSON.parse(sessionStorage.getItem("user") ?? "");

  return (
    <div className="relative">
      <div
        className={`fixed  inset-0 -z-10 block bg-gray-400  ${
          expanded ? "block sm:hidden" : "hidden"
        }`}
      />
      <aside
        className={`box-border h-screen transition-all ${
          expanded ? "w-5/6 sm:w-64" : "w-0 sm:w-20"
        }`}
      >
        <nav className="flex h-full flex-col border-r bg-white shadow-sm">
          <div className="flex items-center justify-between p-4 pb-2">
            <img
              src="src/assets/logo.png"
              className={`overflow-hidden transition-all ${
                expanded ? "w-32" : "w-0"
              }`}
              alt="logo"
            />
            <div className={`${expanded ? "" : "hidden sm:block"}`}>
              <Button
                onClick={() => setExpanded((curr: boolean) => !curr)}
                className="rounded-lg bg-gray-50 p-1.5 hover:bg-gray-100"
              >
                {expanded ? (
                  <ArrowRightIcon className="h-6 w-6" />
                ) : (
                  <ArrowLeftIcon className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>
          <ul className="flex-1 px-3">{children}</ul>
          <LanguageSwitcher expanded={expanded} />

          <div className="flex border-t p-3">
            <div className="flex justify-center items-center content-center bg-[#c7d2fe] h-10 w-10  rounded-md">
              {user.username.charAt(0).toUpperCase()}
            </div>
            <div
              className={`
                flex items-center justify-between
                overflow-hidden transition-all ${expanded ? "ml-3 w-52" : "w-0"}
            `}
            >
              <div className="leading-4">
                <h4 className="font-semibold">{user.username}</h4>
                <span className="text-xs text-gray-600">{user.email}</span>
              </div>
              <EllipsisVerticalIcon className="h-6 w-6" />
            </div>
          </div>
        </nav>
      </aside>
    </div>
  );
};
