/** @format */

import React from "react";

// Import icons dynamically
import OverviewIcon from "/side-bar-icons/overview.svg";
import MyChatbotsIcon from "/side-bar-icons/chat-bot.svg";
import MessagesIcon from "/side-bar-icons/message.svg";
import TrainingIcon from "/side-bar-icons/brain.svg";
import AnalyticsIcon from "/side-bar-icons/chart-histogram.svg";
import IntegrationsIcon from "/side-bar-icons/algorithm.svg";
import SettingsIcon from "/side-bar-icons/setting.svg";
import Logo from "/Logo.svg"

const Sidebbar = ({
  handleClick,
  activeItem,
  isSidebarOpen,
  toggleSidebar,
}) => {
  const menuItems = [
    { id: "overview", label: "Overview", icon: OverviewIcon },
    { id: "my-chatbots", label: "My Chatbots", icon: MyChatbotsIcon },
    { id: "messages", label: "Messages", icon: MessagesIcon },
    { id: "training", label: "Training Module", icon: TrainingIcon },
    { id: "analytics", label: "Analytics", icon: AnalyticsIcon },
    { id: "integrations", label: "Integrations", icon: IntegrationsIcon },
    { id: "settings", label: "Settings", icon: SettingsIcon },
  ];

  return (
    <div>
      {/* Sidebar container */}
      <div
        className={`h-screen fixed top-0 bg-gray2 border-r-2 border-gray4 transition-transform duration-300 z-50 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:w-full max-w-20 md:max-w-[20%] lg:max-w-[20%]`}
      >
        {/* Logo */}
        <div className="px-6 py-5 mb-8">
          <img src={Logo} alt="Logo" className="h-12" />
        </div>

        {/* Menu Items */}
        <div>
          {menuItems.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                handleClick(item.id);
                if (isSidebarOpen) toggleSidebar(); // Close sidebar on item click in mobile view
              }}
              className={`flex gap-4 items-center py-4 cursor-pointer duration-300 px-6 ${
                activeItem === item.id ? "bg-white" : "hover:bg-gray3 "
              }`}
            >
              <img className="w-6" src={item.icon} alt={item.label} />
              <p className="hidden md:block font-medium text-[18px]">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Backdrop (Mobile only) */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={toggleSidebar} // Close sidebar when clicking outside
        ></div>
      )}
    </div>
  );
};

export default Sidebbar;
