import { useState } from "react";
import PropTypes from "prop-types";

export function Tabs({ children }) {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = children.map((child) => ({
    id: child.props.id,
    label: child.props.label,
    icon: child.props.icon,
  }));

  return (
    <div className="w-full">
      {/* Tab Headers */}
      <div className="flex justify-evenly border-b border-gray-300">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex flex-col items-center justify-center w-full py-3 text-gray-600 hover:text-blue-400 ${
              activeTab === tab.id ? "text-blue-500 border-b-2 border-green-500" : ""
            }`}
          >
            <img src={tab.icon} alt={tab.label} className="h-6 w-6" />
            <span className={`text-sm ${
              activeTab === tab.id ? "font-bold text-gray-800" : ""
            }`}>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="p-4">
        {children.find((child) => child.props.id === activeTab)}
      </div>
    </div>
  );
}

Tabs.propTypes = {
  children: PropTypes.node.isRequired,
};

export function Tab({ children }) {
  return <>{children}</>;
}

Tab.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  label: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired, // Make sure the icon is passed as an image URL
  children: PropTypes.node.isRequired,
};
