/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const ConfirmationDashboardAccess = ({ botDetails }) => {
  const navigate = useNavigate();
  // Function to handle navigation to the dashboard
  const handleSubmit = () => {
    navigate("/dashboard-overview"); // Replace with your dashboard route if it's different
  };

  const { botName, useCase, industry, infoSource } = botDetails;

  return (
    <>
      <Navbar />
      <div className="container md:px-22 lg:px-28 flex flex-col justify-center pt-[90px] md:pt-[120px]">
        <div className="flex gap-4 mb-2 font-semibold">
          <p>8/8</p>
          <p>Confirmation and Dashboard Access</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left container */}
          <div>
            <h1 className="my-4 text-[28px] font-bold">Details Confirmation</h1>
            <p className="font-normal">Your bot is ready to get to work!</p>
          </div>
          {/* Right container */}
          <div>
            <div className="flex flex-col gap-4">
              <label htmlFor="botName">Bot name</label>
              <input
                className="bg-transparent border-2 border-gray4 outline-none py-[10px] px-6 rounded-lg mb-4"
                type="text"
                id="botName"
                name="botName"
                value={botName} // Default value if botName is not provided
                readOnly
              />
            </div>
            <div className="flex flex-col gap-4">
              <label htmlFor="useCase">Use case</label>
              <input
                className="bg-transparent border-2 border-gray4 outline-none py-[10px] px-6 rounded-lg mb-4"
                type="text"
                id="useCase"
                name="useCase"
                value={useCase} // Default value if useCase is not provided
                readOnly
              />
            </div>
            <div className="flex flex-col gap-4">
              <label htmlFor="industry">Industry</label>
              <input
                className="bg-transparent border-2 border-gray4 outline-none py-[10px] px-6 rounded-lg mb-4"
                type="text"
                id="industry"
                name="industry"
                value={industry} // Default value if industry is not provided
                readOnly
              />
            </div>
            <div className="flex flex-col gap-4">
              <label htmlFor="infoSource">Data Source</label>
              <input
                className="bg-transparent border-2 border-gray4 outline-none py-[10px] px-6 rounded-lg mb-4"
                type="text"
                id="infoSource"
                name="infoSource"
                value={infoSource} // Show infoSource
                readOnly
              />
            </div>
            <div className="flex justify-end items-end">
              <button
                onClick={handleSubmit}
                className="mt-10 bg-gray1 hover:bg-black font-medium py-3 px-6 rounded-lg text-white transition-all duration-300 mb-8"
                type="button"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfirmationDashboardAccess;
