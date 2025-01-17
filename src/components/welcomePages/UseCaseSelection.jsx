/** @format */

import React, { useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../Navbar/Navbar";
import SkipToDashboard from "./skipToDashboard/SkipToDashboard";

const UseCaseSelection = ({ botDetails, setBotDetails }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState(""); // State for error message
  const [isAnimated, setIsAnimated] = useState(false); // State to track animation

  // Function to handle navigation
  const handleNavigate = () => {
    if (!botDetails.useCase) {
      // Show error if no option is selected
      setErrorMessage("Please select an option before continuing.");
    } else {
      setIsAnimated(true); // Trigger animation on successful selection
      setTimeout(() => {
        navigate("/industry-selection"); // Navigate to the next page after animation
      }, 500); // Wait for the animation to complete
    }
  };

  const handleOptionClick = (option) => {
    // Update the global state with the selected use case
    setBotDetails((prevDetails) => ({
      ...prevDetails,
      useCase: option,
    }));
    setErrorMessage(""); // Clear the error message on valid selection
    setIsDropdownOpen(false); // Close the dropdown after selecting
  };

  // Reset animation state when navigating back to this page
  useEffect(() => {
    if (location.pathname === "/use-case-selection") {
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
          <p>3/8</p>
          <p>Use Case Selection</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* left container */}
          <div>
            <h1 className="my-4 text-[28px] font-bold">
              What would you like <br /> your chatbot to do?
            </h1>
          </div>
          {/* right container */}
          <div>
            <div
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="px-6 py-4 border-2 rounded-lg border-gray4 flex items-center justify-between cursor-pointer"
            >
              <p>{botDetails.useCase || "I want the chatbot to"}</p>
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
                {[
                  "Answer FAQs",
                  "Book Appointments",
                  "Collect Leads",
                  "Provide Customer Support",
                ].map((option) => (
                  <p
                    key={option}
                    onClick={() => handleOptionClick(option)}
                    className={`cursor-pointer hover:bg-black1/40 hover:text-white duration-300 rounded-md px-2 ${
                      botDetails.useCase === option
                        ? "bg-black1/40 text-white"
                        : ""
                    }`}
                  >
                    {option}
                  </p>
                ))}
              </div>
            </div>
            {/* Error Message */}
            {errorMessage && (
              <p className="text-gray1 text-sm mt-2">{errorMessage}</p>
            )}
            <button
              onClick={handleNavigate}
              className="mt-10 bg-gray1 hover:bg-black font-medium py-4 px-4 rounded-lg text-white transition-all duration-300"
              type="submit"
            >
              Continue
            </button>
          </div>
        </div>
        <SkipToDashboard />
      </motion.div>
    </>
  );
};

export default UseCaseSelection;
