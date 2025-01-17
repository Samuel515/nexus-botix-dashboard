/** @format */

import React from "react";
import Heading from "../heading/heading";
import Overview from "../overview/Overview";
import Analytics from "../analytic/Analytics";
import Integrations from "../integrations/Integrations";
import TrainingModule from "../trainingModule/TrainingModule";
import MyChatbots from "../myChatbots/MyChatbots";

const DashboardContainer = ({ activeItem, toggleSidebar }) => {
  const renderContent = () => {
    switch (activeItem) {
      case "overview":
        return <Overview />;
      case "my-chatbots":
        return <MyChatbots />;
      case "messages":
        return <div>Messages Content</div>;
      case "training":
        return <TrainingModule />;
      case "analytics":
        return <Analytics />;
      case "integrations":
        return <Integrations />;
      case "settings":
        return <div>Settings Content</div>;
      default:
        return <Overview />;
    }
  };

  return (
    <div>
      <Heading toggleSidebar={toggleSidebar} activeItem={activeItem} />
      <div className="p-4">{renderContent()}</div>
    </div>
  );
};

export default DashboardContainer;
