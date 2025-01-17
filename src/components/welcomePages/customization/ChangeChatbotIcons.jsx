/** @format */

import React, { useState } from "react";
import chatbot1 from "/chatbot-icons/chatBot-1.svg";
import chatbot2 from "/chatbot-icons/chatBot-2.svg";
import chatbot3 from "/chatbot-icons/chatBot-3.svg";
import chatbot4 from "/chatbot-icons/chatBot-4.svg";
import chatbot5 from "/chatbot-icons/chatBot-5.svg";
import chatbot6 from "/chatbot-icons/chatBot-6.svg";
import checkbox from "/icons/checkmark.svg";

const ChangechatbotIcons = () => {
  // State to track the currently selected chatbot icon
  const [selectedIcon, setSelectedIcon] = useState(chatbot1);
  // State to track the currently active icon in the selection grid
  const [activeIcon, setActiveIcon] = useState(null);
  // Temporary state to track the icon before confirming the selection
  const [selectedTempIcon, setSelectedTempIcon] = useState(null);
  // State to toggle the visibility of the icon selection grid
  const [isLogoChanging, setIsLogoChanging] = useState(false);
  // State to manage the visibility of the checkbox
  const [showCheckbox, setShowCheckbox] = useState(false);

  // Function to handle icon selection
  const handleIconSelect = (icon) => {
    setSelectedTempIcon(icon); // Temporarily store the selected icon
    setActiveIcon(icon); // Set the selected icon as active
  };

  // Function to handle the "Upload Logo" button click (finalize the selection)
  const handleUploadLogoClick = () => {
    setShowCheckbox(true); // Show the checkbox
    setIsLogoChanging(false); // Close the icon selection grid
    if (selectedTempIcon) {
      setSelectedIcon(selectedTempIcon); // Confirm the selected icon
    }
    setIsLogoChanging(false); // Close the icon selection grid
  };

  // Function to handle the "Change Logo" button click
  const handleChangeLogoClick = () => {
    setIsLogoChanging(true); // Show the icon selection grid
    setShowCheckbox(false); // Reset the checkbox visibility
    setIsLogoChanging(true); // Show the icon selection grid
  };
  return (
    <div>
      <div className="mt-6">
        <img
          src={selectedIcon}
          alt="selected chatbot"
          className="object-contain"
        />
        <p
          onClick={handleChangeLogoClick}
          className="underline font-semibold mt-2 cursor-pointer"
        >
          Change Logo
        </p>

        {/* Icon Selection Grid with animation */}
        <div
          className={`${
            isLogoChanging ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden transition-all duration-500 ease-in-out bg-white p-6 w-full md:max-w-[350px] rounded-lg mt-2`}
        >
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-5">
            <img
              src={chatbot1}
              alt="chatbot1"
              className={`cursor-pointer duration-300 rounded-md hover:bg-gray4 object-contain p-1 hover:scale-105 transition-transform ${
                activeIcon === chatbot1 ? "bg-gray4" : ""
              }`}
              onClick={() => handleIconSelect(chatbot1)} // Update selected icon
            />
            <img
              src={chatbot2}
              alt="chatbot2"
              className={`cursor-pointer duration-300 rounded-md hover:bg-gray4 object-contain hover:scale-105 transition-transform ${
                activeIcon === chatbot2 ? "bg-gray4" : ""
              }`}
              onClick={() => handleIconSelect(chatbot2)} // Update selected icon
            />
            <img
              src={chatbot3}
              alt="chatbot3"
              className={`cursor-pointer duration-300 rounded-md hover:bg-gray4 object-contain hover:scale-105 transition-transform ${
                activeIcon === chatbot3 ? "bg-gray4" : ""
              }`}
              onClick={() => handleIconSelect(chatbot3)} // Update selected icon
            />
            <img
              src={chatbot4}
              alt="chatbot4"
              className={`cursor-pointer duration-300 rounded-md hover:bg-gray4 object-contain hover:scale-105 transition-transform ${
                activeIcon === chatbot4 ? "bg-gray4" : ""
              }`}
              onClick={() => handleIconSelect(chatbot4)} // Update selected icon
            />
            <img
              src={chatbot5}
              alt="chatbot5"
              className={`cursor-pointer duration-300 rounded-md hover:bg-gray4 object-contain hover:scale-105 transition-transform ${
                activeIcon === chatbot5 ? "bg-gray4" : ""
              }`}
              onClick={() => handleIconSelect(chatbot5)} // Update selected icon
            />
            <img
              src={chatbot6}
              alt="chatbot6"
              className={`cursor-pointer duration-300 rounded-md hover:bg-gray4 p-1 object-contain hover:scale-105 transition-transform ${
                activeIcon === chatbot6 ? "bg-gray4 " : ""
              }`}
              onClick={() => handleIconSelect(chatbot6)} // Update selected icon
            />
          </div>
          <div className="flex justify-between items-center">
            <p
              onClick={handleUploadLogoClick}
              className="underline font-semibold mt-8 cursor-pointer "
            >
              Upload Logo
            </p>
            {showCheckbox && ( // Conditionally render the checkbox image
              <img src={checkbox} alt="checkbox" />
            )}
          </div>
        </div>
      </div>
      {showCheckbox && (
        <div>
          <div className="bg-gray1 w-10 h-10 rounded-md"></div>
          <p className="underline font-semibold mt-2">Change Color</p>
        </div>
      )}
    </div>
  );
};

export default ChangechatbotIcons;
