/** @format */

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; // Import Framer Motion for animations
import chatbotImage from "/chatbot-image/chatbotImage.svg";
import PreviewArrow from "/icons/Preview-Arrow.svg";
import ChangeChatbotIcons from "./ChangeChatbotIcons";
import magicWand from "/icons/magic-wand.svg";
import Navbar from "../../Navbar/Navbar";
import SkipToDashboard from "../skipToDashboard/SkipToDashboard";

const Customization = ({ botDetails, setBotDetails }) => {
  const [botName, setBotName] = useState(botDetails.botName);
  const [errorMessage, setErrorMessage] = useState(""); // State to track the error message
  const [isAnimated, setIsAnimated] = useState(false); // State to control the animation
  const navigate = useNavigate(); // For navigation

  useEffect(() => {
    // Set animation state to true when the component is mounted
    setIsAnimated(true);
  }, []);

  // Function to generate random bot names
  const generateRandomBotName = () => {
    const botNames = [
      "ChatPro",
      "Botify",
      "AssistMate",
      "ChatPal",
      "InfoBot",
      "QuickHelp",
      "TalkBot",
      "AI Buddy",
      "BotNinja",
      "SmartHelper",
    ];
    const randomName = botNames[Math.floor(Math.random() * botNames.length)];
    setBotName(randomName);
    setErrorMessage(""); // Clear error message when auto name is used
  };

  // Handle navigation
  const handlePreview = () => {
    if (!botName.trim()) {
      // Check if the input is empty or just spaces
      setErrorMessage("Please enter or generate a bot name before proceeding.");
    } else {
      setErrorMessage(""); // Clear error if input is valid
      setBotDetails((prevDetails) => ({
        ...prevDetails,
        botName: botName,
      }));
      console.log("Bot name:", botName); // Debugging purpose
      navigate("/testing-and-launching"); // Replace with the actual route
    }
  };

  return (
    <>
      <Navbar />

      <motion.div
        className="container md:px-22 lg:px-28 flex flex-col justify-center pt-[90px] md:pt-[120px]"
        initial={{ x: 0 }} // Initial position when component is mounted
        animate={{ x: isAnimated ? 0 : "100%" }} // Animate left when isAnimated is true
        transition={{ duration: 0.5 }} // Duration of the animation
      >
        <div className="flex gap-4 mb-2 font-semibold md:mt-0">
          <p>6/8</p>
          <p>Customization</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left container */}
          <div>
            <h1 className="my-4 text-[28px] font-bold">
              Begin initial bot <br /> customization.
            </h1>
            <form onSubmit={(e) => e.preventDefault()}>
              <label className="font-semibold" htmlFor="botName">
                Bot name
              </label>
              <div className="rounded-lg grid grid-cols-3 justify-between items-center border-2 border-gray1">
                <input
                  id="botName"
                  className="px-5 bg-transparent text-gray1 py-4 outline-none col-span-2"
                  type="text"
                  name="botName"
                  value={botName}
                  onChange={(e) => setBotName(e.target.value)}
                  placeholder="Enter your preferred bot name"
                />
                <button
                  type="button"
                  className="bg-gray1 flex items-center gap-3 py-4 px-5 font-normal text-white"
                  onClick={generateRandomBotName}
                >
                  <img src={magicWand} alt="magicWand" />
                  Auto name
                </button>
              </div>
              {errorMessage && (
                <p className="text-gray1 text-sm mt-2">{errorMessage}</p>
              )}
            </form>
            <ChangeChatbotIcons />
          </div>

          {/* Right container */}
          <div>
            <img src={chatbotImage} alt="chatbot-image" />
            <button
              onClick={handlePreview}
              className="mt-10 mb-10 flex items-center hover:bg-black bg-gray1 font-medium py-4 px-7 rounded-lg text-white transition-all duration-300"
              type="button"
            >
              Preview bot
              <img src={PreviewArrow} alt="PreviewArrow" className="w-6" />
            </button>
          </div>
        </div>

        <SkipToDashboard />
      </motion.div>
    </>
  );
};

export default Customization;
