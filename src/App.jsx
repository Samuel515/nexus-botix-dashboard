/** @format */

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Introduction from "./components/welcomePages/introduction";
import BasicInformation from "./components/welcomePages/BasicInformation";
import UseCaseSelection from "./components/welcomePages/UseCaseSelection";
import IndustrySelection from "./components/welcomePages/IndustrySelection";
import InformationSource from "./components/welcomePages/InformationSource";
import Customization from "./components/welcomePages/customization/Customization";
import TestingAndLaunching from "./components/welcomePages/TestingAndLaunching";
import ConfirmationDashboardAccess from "./components/welcomePages/ConfirmationDashboardAccess";
import Dashboard from "./components/dashboard/Dashboard";
// import CreateChatbot from "./components/dashboard/myChatbots/CreateChatbot";

const App = () => {
  const [botDetails, setBotDetails] = useState(() => {
    const savedData = localStorage.getItem("botDetails");
    return savedData
      ? JSON.parse(savedData)
      : {
          botName: "",
          useCase: "",
          industry: "",
          infoSource: "",
        };
  });

  // Save botDetails to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("botDetails", JSON.stringify(botDetails));
  }, [botDetails]);
  return (
    <div className="font-primary">
      <Router>
        <Routes>
          <Route path="/" element={<Introduction />} />
          <Route path="/basic-information" element={<BasicInformation />} />
          <Route
            path="/use-case-selection"
            element={
              <UseCaseSelection
                botDetails={botDetails}
                setBotDetails={setBotDetails}
              />
            }
          />
          <Route
            path="/industry-selection"
            element={
              <IndustrySelection
                botDetails={botDetails}
                setBotDetails={setBotDetails}
              />
            }
          />
          <Route
            path="/information-source"
            element={
              <InformationSource
                botDetails={botDetails}
                setBotDetails={setBotDetails}
              />
            }
          />
          <Route
            path="/customization"
            element={
              <Customization
                botDetails={botDetails}
                setBotDetails={setBotDetails}
              />
            }
          />
          <Route
            path="/testing-and-launching"
            element={
              <TestingAndLaunching
                botDetails={botDetails}
                setBotDetails={setBotDetails}
              />
            }
          />
          <Route
            path="/confirmation-and-dashboard-access"
            element={<ConfirmationDashboardAccess botDetails={botDetails} />}
          />
          <Route path="/dashboard-overview" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
