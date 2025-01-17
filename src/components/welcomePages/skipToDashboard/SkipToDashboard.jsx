/** @format */

import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const SkipToDashboard = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to handle the button click and navigate to the dashboard
  const handleSkipToDashboard = () => {
    navigate("/dashboard-overview"); // Navigate to the dashboard route
  };
  return (
    <div>
      <div className="md:mt-10 pb-4 flex md:fixed md:bottom-10 md:right-20">
        <button
          onClick={handleSkipToDashboard}
          className="underline text-black1 hover:text-black duration-200 font-normal text-[12px]"
        >
          Skip to dashboard
        </button>
      </div>
    </div>
  );
};

export default SkipToDashboard;
