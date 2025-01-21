/** @format */

import React, { useState } from "react";
import CreateChatbot from "./CreateChatbot";
import ChatbotTemplate from "./ChatbotTemplate";
import TrainingModule from "../trainingModule/TrainingModule";
import ChatbotIcon from "/chatbot-icons/chatBot-1.svg";
import WhitePlusIcon from "/icons/white-plus.svg";
import ArrowRightIcon from "/social-media-icons/arrow-right.svg";

const MyChatbots = () => {
  const [activeView, setActiveView] = useState("main");
  const [chatbots, setChatbots] = useState([
    {
      id: "s5qh5yOmipn7e7559ak1",
      name: "Nexus bot",
      created: "27/11/2024",
    },
  ]);

  const addChatbot = (name) => {
    const newChatbot = {
      id: Math.random().toString(36).substr(2, 16),
      name,
      created: new Date().toLocaleDateString(),
    };
    setChatbots((prev) => [...prev, newChatbot]);
    setActiveView("main");
  };

  const renderContent = () => {
    switch (activeView) {
      case "createChatbot":
        return (
          <CreateChatbot
            setActiveView={setActiveView}
            addChatbot={addChatbot}
          />
        );
      case "chatbotTemplate":
        return (
          <ChatbotTemplate
            setActiveView={setActiveView}
            addChatbot={addChatbot}
          />
        );
      case "trainingModule":
        return <TrainingModule setActiveView={setActiveView} />;
      default:
        return (
          <div className="container bg-gray2 p-4">
            <div className="bg-gray3 rounded-md p-4">
              <div className="my-4">
                <h1 className="font-bold text-[28px]">Build your AI Agents</h1>
                <p>
                  Craft customized AI Agents for your business and customer
                  support.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {chatbots.map((bot) => (
                  <div
                    key={bot.id}
                    className="bg-gray2 border-2 p-4 grid gap-2 rounded-md"
                  >
                    <img src={ChatbotIcon} alt={bot.name} />
                    <h1 className="text-[18px] font-medium mt-4">{bot.name}</h1>
                    <p className="text-[14px]">
                      ID: <span>{bot.id}</span>
                    </p>
                    <p className="text-[14px]">
                      Created: <span>{bot.created}</span>
                    </p>
                    <p className="text-[14px] underline mt-4">View chatbot</p>
                  </div>
                ))}
                <div>
                  <div
                    className="cursor-pointer h-[200px] rounded-md bg-black flex flex-col items-center justify-center"
                    onClick={() => setActiveView("createChatbot")}
                  >
                    <img src={WhitePlusIcon} alt="Create new" />
                    <h1 className="text-gray3 text-[16px]">
                      Create new Chatbot
                    </h1>
                  </div>
                </div>
              </div>
              <a
                className="text-[18px] font-medium flex items-center gap-2 mt-6"
                href="#"
              >
                Upgrade plan to get more privileges{" "}
                <img src={ArrowRightIcon} alt="Arrow" />
              </a>
            </div>
          </div>
        );
    }
  };

  return <div>{renderContent()}</div>;
};

export default MyChatbots;
