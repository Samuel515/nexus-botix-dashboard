/** @format */

import React from "react";

const CreateChatbot = ({ setActiveView }) => {
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
            <div
              className=" bg-gray2 hover:bg-gray-200 duration-300 border-2 cursor-pointer p-4 flex flex-col items-start gap-2 rounded-md"
              onClick={() => setActiveView("trainingModule")}
            >
              <img src="/icons/plus-add.svg" alt="Plus Add" />
              <h1 className=" text-[18px] font-medium mt-4">
                Start from scratch
              </h1>
              <p className=" text-[14px]">
                Build your chatbot from the ground up and customize it to your
                needs.
              </p>
            </div>
            <div
              className=" bg-gray2 hover:bg-gray-200 duration-300 border-2 cursor-pointer p-4 flex flex-col items-start gap-2 rounded-md"
              onClick={() => setActiveView("chatbotTemplate")}
            >
              <img src="/icons/libraries.svg" alt="Libraries" />
              <h1 className=" text-[18px] font-medium mt-4">Select template</h1>
              <p className=" text-[14px]">
                Select from easily customizable pre-made templates and speed up
                your workflow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateChatbot;
