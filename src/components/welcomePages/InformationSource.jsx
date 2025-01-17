/** @format */

import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import websiteLinks from "/icons/website-links.svg";
import files from "/icons/files-01.svg";
import text from "/icons/pencil-edit-01.svg";
import notion from "/icons/notion-02.svg";
import { motion } from "framer-motion";
import Navbar from "../Navbar/Navbar";
import SkipToDashboard from "./skipToDashboard/SkipToDashboard";

const InformationSource = ({ botDetails, setBotDetails }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedOption, setSelectedOption] = useState(
    botDetails.infoSource || ""
  ); // Initialize with existing infoSource if available
  const [errorMessage, setErrorMessage] = useState("");
  const [isAnimated, setIsAnimated] = useState(false); // State to track animation

  const handleNavigate = () => {
    if (!selectedOption) {
      setErrorMessage("Please select an information source before proceeding.");
    } else {
      // Update botDetails with the selected information source
      setBotDetails((prevDetails) => ({
        ...prevDetails,
        infoSource: selectedOption, // Save the selected information source
      }));
      setIsAnimated(true); // Trigger animation on successful selection
      setTimeout(() => {
        navigate("/customization"); // Proceed to the next step after animation
      }, 500); // Wait for the animation to complete
    }
  };

  const handleOptionClick = (label) => {
    setSelectedOption(label); // Store the selected label
    setErrorMessage(""); // Clear error message on valid selection
  };

  const options = [
    {
      id: "website",
      label: "Website Links",
      description: "Crawl your website",
      icon: websiteLinks,
    },
    {
      id: "files",
      label: "Upload Files",
      description: "Upload .pdf, .txt, .doc",
      icon: files,
    },
    {
      id: "text",
      label: "Write Content",
      description: "Write your own content",
      icon: text,
    },
    {
      id: "notion",
      label: "Notion Integration",
      description: "Use Notion Integration",
      icon: notion,
    },
  ];

  // Reset animation state when navigating back to this page
  useEffect(() => {
    if (location.pathname === "/information-source") {
      setIsAnimated(false); // Reset animation state when navigating back
    }
  }, [location.pathname]);

  return (
    <>
      <Navbar />

      <motion.div
        className="container md:px-22 lg:px-28 flex flex-col justify-center pt-[90px] md:pt-[120px]"
        initial={{ x: 0 }} // Initial position when component is mounted
        animate={{ x: isAnimated ? "-100%" : 0 }} // Animate left when isAnimated is true
        transition={{ duration: 0.5 }} // Duration of the animation
      >
        <div className="flex gap-4 mb-2 font-semibold md:mt-0">
          <p>5/8</p>
          <p>Information Source</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left container */}
          <div>
            <h1 className="my-4 text-[28px] font-bold">
              How would you like to feed <br /> information to your bot?
            </h1>
          </div>
          {/* Right container */}
          <div>
            <p className="font-semibold text-[18px] mb-4 text-[#292929]">
              Select knowledge base method
            </p>
            <div className="grid gap-4">
              {options.map((option) => (
                <div
                  key={option.id}
                  onClick={() => handleOptionClick(option.label)} // Save label on click
                  className={`cursor-pointer hover:bg-black1/20 duration-300 w-full md:max-w-[270px] flex gap-3 items-center border py-4 px-2 rounded-lg ${
                    selectedOption === option.label
                      ? "bg-black1/20"
                      : "border-black1"
                  }`}
                >
                  <img src={option.icon} alt={option.label} />
                  <div>
                    <h1 className="text-[20px] font-medium">{option.label}</h1>
                    <p className="text-[16px]">{option.description}</p>
                  </div>
                </div>
              ))}
            </div>
            {errorMessage && (
              <p className="text-gray1 text-sm mt-4">{errorMessage}</p>
            )}
            <button
              onClick={handleNavigate}
              className="mt-10 mb-10 bg-gray1 hover:bg-black font-medium py-4 px-7 rounded-lg text-white transition-all duration-300"
              type="button"
            >
              Set Up Bot
            </button>
          </div>
          <SkipToDashboard />
        </div>
      </motion.div>
    </>
  );
};

export default InformationSource;
