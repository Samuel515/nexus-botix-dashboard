/** @format */

import React, { useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../Navbar/Navbar";
import SkipToDashboard from "./skipToDashboard/SkipToDashboard";

const IndustrySelection = ({ botDetails, setBotDetails }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false); // State to track animation

  // Function to handle navigation
  const handleNavigate = () => {
    if (botDetails.industry) {
      setIsAnimated(true); // Trigger animation on successful selection
      setTimeout(() => {
        navigate("/information-source"); // Navigate to the next page after animation
      }, 500); // Wait for the animation to complete
    } else {
      alert("Please select an industry or skip.");
    }
  };

  const handleOptionClick = (option) => {
    // Update the global state with the selected industry
    setBotDetails((prevDetails) => ({
      ...prevDetails,
      industry: option,
    }));
    setIsDropdownOpen(false); // Close the dropdown after selecting
  };

  // Reset animation state when navigating back to this page
  useEffect(() => {
    if (location.pathname === "/industry-selection") {
      setIsAnimated(false); // Reset animation state when navigating back
    }
  }, [location.pathname]);

  return (
    <>
      <Navbar />

      <motion.div
        className="container md:px-22 lg:px-28 flex flex-col pt-[90px] md:pt-[120px]"
        initial={{ x: 0 }} // Initial position when component is mounted
        animate={{ x: isAnimated ? "-100%" : 0 }} // Animate left when isAnimated is true
        transition={{ duration: 0.5 }} // Duration of the animation
      >
        <div className="flex gap-4 mb-2 font-semibold">
          <p>4/8</p>
          <p>Industry Selection</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* left container */}
          <div>
            <h1 className="my-4 text-[28px] font-bold">
              What industry best <br /> describes your business.
            </h1>
          </div>
          {/* right container */}
          <div>
            <div
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="px-6 py-4 border-2 rounded-lg border-gray4 flex items-center justify-between cursor-pointer"
            >
              <p>{botDetails.industry || "My business is in"}</p>
              <FaChevronDown
                className={`transform transition-transform duration-300 ${
                  isDropdownOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </div>
            {/* Dropdown Options */}
            <div
              className={`transition-[max-height] duration-500 ease-in-out overflow-hidden ${
                isDropdownOpen ? "max-h-60" : "max-h-0"
              }`}
            >
              <div className="bg-white shadow-md p-4 rounded-lg mt-2 leading-10 font-medium text-black1">
                {["Healthcare", "E-Commerce", "Education", "Real Estate"].map(
                  (option) => (
                    <p
                      key={option}
                      onClick={() => handleOptionClick(option)}
                      className={`cursor-pointer hover:bg-black1/40 hover:text-white duration-300 rounded-md px-2 ${
                        botDetails.industry === option
                          ? "bg-black1/40 text-white"
                          : ""
                      }`}
                    >
                      {option}
                    </p>
                  )
                )}
              </div>
            </div>
            <div className="mt-10 flex gap-10">
              <button
                onClick={handleNavigate}
                className="bg-gray1 hover:bg-black font-medium py-4 px-4 rounded-lg text-white transition-all duration-300"
                type="submit"
              >
                Continue
              </button>
              <button
                onClick={() => {
                  setBotDetails((prevDetails) => ({
                    ...prevDetails,
                    industry: "Skipped",
                  }));
                  navigate("/information-source");
                }}
                className="font-medium text-gray1 border-2 border-gray1 py-4 px-6 rounded-lg"
              >
                Skip Selection
              </button>
            </div>
          </div>
        </div>
        <SkipToDashboard />
      </motion.div>
    </>
  );
};

export default IndustrySelection;
