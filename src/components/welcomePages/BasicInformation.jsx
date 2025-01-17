/** @format */

import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../Navbar/Navbar";
import SkipToDashboard from "./skipToDashboard/SkipToDashboard";

const BasicInformation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [formData, setFormData] = useState({
    email: "",
    businessName: "",
    username: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [isAnimated, setIsAnimated] = useState(false); // State to track animation

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrorMessage(""); // Clear the error message on input
  };

  // Handle navigation
  const handleNavigate = (e) => {
    e.preventDefault(); // Prevent form submission
    const { email, businessName, username } = formData;

    // Validate the form
    if (!email || !businessName || !username) {
      setErrorMessage("All fields must be filled out before continuing.");
    } else {
      setIsAnimated(true); // Trigger animation on successful form validation
      setTimeout(() => {
        navigate("/use-case-selection"); // Navigate to the next page after animation
      }, 500); // Wait for the animation to complete before navigating
    }
  };

  // Detect when the location changes (going back to this page)
  useEffect(() => {
    if (location.pathname === "/basic-information") {
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
          <p>2/8</p>
          <p>Basic Information</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* left container */}
          <div>
            <h1 className="my-4 text-[28px] font-bold">
              Enter your basic <br /> information
            </h1>
          </div>
          {/* right container */}
          <div>
            <form>
              <div className="flex flex-col gap-4">
                <label className="font-semibold" htmlFor="email">
                  Email
                </label>
                <input
                  className="bg-transparent border-2 border-gray4 outline-none py-[10px] px-2 rounded-lg mb-4"
                  placeholder="example@something.com"
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex flex-col gap-4">
                <label className="font-semibold" htmlFor="businessName">
                  Business name
                </label>
                <input
                  className="bg-transparent border-2 border-gray4 outline-none py-[10px] px-2 rounded-lg mb-4"
                  placeholder="Enter business name"
                  type="text"
                  name="businessName"
                  id="businessName"
                  value={formData.businessName}
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex flex-col gap-4">
                <label className="font-semibold" htmlFor="username">
                  User name
                </label>
                <input
                  className="bg-transparent border-2 border-gray4 outline-none py-[10px] px-2 rounded-lg"
                  placeholder="Enter user name"
                  type="text"
                  name="username"
                  id="username"
                  value={formData.username}
                  onChange={handleInputChange}
                />
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
            </form>
          </div>
        </div>
        <SkipToDashboard />
      </motion.div>
    </>
  );
};

export default BasicInformation;
