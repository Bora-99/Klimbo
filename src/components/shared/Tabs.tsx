import { Button } from "./Button";

interface ITabsProps {
  tabs: ITabs[];
  onTabClick: (tab: ITabs) => void;
  activeTab: string;
}

interface ITabs {
  id: string;
  label: string;
}

export const Tabs: React.FC<ITabsProps> = ({ tabs, onTabClick, activeTab }) => {
  return (
    <div className="flex space-x-4 border-b border-gray-200">
      {tabs.map((tab) => (
        <Button
          key={tab.id}
          onClick={() => onTabClick(tab)}
          className={`relative px-4 py-2 text-blue-600 font-medium focus:outline-none ${
            activeTab === tab.id ? "text-blue-600" : "hover:text-blue-500"
          }`}
        >
          <>
            {tab.label}
            {activeTab === tab.id && (
              <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-600" />
            )}
          </>
        </Button>
      ))}
    </div>
  );
};
