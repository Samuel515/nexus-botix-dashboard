/** @format */

import React, { useState } from "react";
import chatBot1 from "/chatbot-icons/chatBot-1.svg";

const ChatbotTemplate = ({ setActiveView, addChatbot }) => {
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const templates = [
    {
      name: "Customer Support Bot",
      purpose: "To assist users with queries related to products and services.",
    },
    {
      name: "E-commerce Assistant Bot",
      purpose:
        "To guide users through product inquiries and facilitate purchases.",
    },
    {
      name: "Appointment Booking Chatbot",
      purpose: "To facilitate scheduling and managing appointments.",
    },
    {
      name: "Lead Generation Chatbot",
      purpose: "To collect leads and customer information for follow-up.",
    },
    {
      name: "FAQ Chatbot",
      purpose: "To provide quick answers to frequent inquiries.",
    },
    {
      name: "Feedback Collection Chatbot",
      purpose: "To gather user feedback on services or products.",
    },
  ];

  const handleSelection = (templateName) => {
    setSelectedTemplate(templateName);
  };

  const handleConfirm = () => {
    if (selectedTemplate) {
      addChatbot(selectedTemplate);
    } else {
      alert("Please select a chatbot template.");
    }
  };

  return (
    <div>
      <button
        className="hover:text-black2 duration-200 text-black1 underline mb-4"
        onClick={() => setActiveView("main")}
      >
        Back
      </button>
      <div className="container bg-gray2 p-4">
        <div className="bg-gray3 rounded-md p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {templates.map((template, index) => (
              <div
                key={index}
                className={`bg-gray2 border-2 py-4 px-2 flex cursor-pointer flex-col items-start gap-2 rounded-md ${
                  selectedTemplate === template.name ? "border-black1" : ""
                }`}
                onClick={() => handleSelection(template.name)}
              >
                <img src={chatBot1} alt={template.name} />
                <h1 className="text-[18px] font-medium mt-2">
                  {template.name}
                </h1>
                <p className="font-medium">Purpose:</p>
                <p className="text-[14px]">{template.purpose}</p>
                <input
                  type="radio"
                  name="template"
                  checked={selectedTemplate === template.name}
                  onChange={() => handleSelection(template.name)}
                  className="mt-2"
                />
              </div>
            ))}
          </div>
          <button
            onClick={handleConfirm}
            className="bg-gray1 hover:bg-black duration-300 text-white px-4 py-2 mt-4 rounded-md"
          >
            Confirm Selection
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatbotTemplate;
