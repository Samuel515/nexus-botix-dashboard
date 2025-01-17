/** @format */

import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../Navbar/Navbar";
import SkipToDashboard from "./skipToDashboard/SkipToDashboard";

const Introduction = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isAnimated, setIsAnimated] = useState(false); // State to track animation

  // Handle navigation and trigger animation
  const handleNavigate = () => {
    setIsAnimated(true); // Trigger the animation when the button is clicked
    setTimeout(() => {
      navigate("/basic-information"); // Navigate to the next page after animation
    }, 500); // Wait for the animation to complete before navigating
  };

  // Detect when the location changes (going back to this page)
  useEffect(() => {
    if (location.pathname === "/") {
      setIsAnimated(false); // Reset animation state when navigating back to this page
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
        <div className="flex gap-4 mb-2 font-semibold">
          <p>1/8</p>
          <p>introduction</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* left container */}
          <div>
            <h1 className="my-4 text-[28px] font-bold">
              Revolutionize Your <br /> Customer Engagement
            </h1>
            <p className="font-normal">
              Easily build chatbots for multiple <br /> industries and use cases
            </p>
          </div>
          {/* right container */}
          <div className="bg-white p-10 rounded-lg">
            <p className="text-[18px] font-semibold">
              Let’s get you started by answering a few questions to build your
              chatbot
            </p>

            <div className="mt-16 grid grid-cols-3 items-center gap-6">
              <button
                onClick={handleNavigate}
                className="py-[12px] rounded-md bg-gray1 hover:bg-black duration-300 text-white"
              >
                Get Started
              </button>
              <p className="col-span-2 text-[12px] font-normal">
                It only takes 10 -15 minutes and you can edit it later. We'll
                save as you go.
              </p>
            </div>
          </div>
        </div>
        <SkipToDashboard />
      </motion.div>
    </>
  );
};

export default Introduction;
