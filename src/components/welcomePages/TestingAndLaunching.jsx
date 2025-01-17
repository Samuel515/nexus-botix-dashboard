/** @format */

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; // Import Framer Motion for animations
import chatbotImageTwo from "/chatbot-image/chatbotImageTwo.svg";
import Navbar from "../Navbar/Navbar";
import SkipToDashboard from "./skipToDashboard/SkipToDashboard";

const TestingAndLaunching = () => {
  const navigate = useNavigate();
  const [isAnimated, setIsAnimated] = useState(false); // State to control the animation

  // Function to handle navigation and animation
  const handleNavigate = () => {
    setIsAnimated(true); // Trigger animation to slide out
    setTimeout(() => {
      navigate("/confirmation-and-dashboard-access"); // Navigate after animation
    }, 500); // Wait for animation to complete (0.5s)
  };

  return (
    <>
      <Navbar />

      <motion.div
        className="container md:px-22 lg:px-28 flex flex-col justify-center pt-[90px] md:pt-[120px]"
        initial={{ x: "100%" }} // Start position (off-screen from the right)
        animate={{ x: isAnimated ? "-100%" : 0 }} // Animate out to the left when isAnimated is true
        transition={{ duration: 0.5 }} // Duration of the animation
      >
        <div className="flex gap-4 mb-2 font-semibold md:mt-0">
          <p>7/8</p>
          <p>Testing & Launch</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left container */}
          <div>
            <h1 className="my-4 text-[28px] font-bold">Chatbot preview.</h1>
          </div>
          {/* Right container */}
          <div>
            <img src={chatbotImageTwo} alt="chatbotImageTwo" />
            <button
              onClick={handleNavigate}
              className="mt-10 mb-10 bg-gray1 hover:bg-black font-medium py-4 px-7 rounded-lg text-white transition-all duration-300"
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

export default TestingAndLaunching;
