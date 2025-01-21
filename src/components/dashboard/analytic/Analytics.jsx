/** @format */

import React from "react";
import AnalyticInteractions from "/analytic-icons/interactions.svg";
import AnalyticMessages from "/analytic-icons/message.svg";
import AnalyticLeads from "/analytic-icons/leads.svg";
import AnalyticCharacterCount from "/analytic-icons/character-count.svg";
import TrainingLinks from "/analytic-icons/link.svg";
import TrainingFiles from "/analytic-icons/files.svg";
import ArrowRightIcon from "/social-media-icons/arrow-right.svg";

const Analytics = () => {
  return (
    <div>
      <div className="container bg-gray2 p-4">
        <div className=" bg-white rounded-md p-4">
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className=" bg-gray2 border-2 rounded-md border-gray4 p-4 flex flex-col items-start gap-5">
              <img src={AnalyticInteractions} alt="Interactions Icon" />
              <h1 className=" font-medium text-[20px]">Interactions</h1>
              <h1 className=" font-semibold text-[28px]">6</h1>
              <p className=" text-[14px]">
                The number of chat started by your user
              </p>
            </div>
            <div className=" bg-gray2 border-2 rounded-md border-gray4 p-4 flex flex-col items-start gap-5">
              <img src={AnalyticMessages} alt="Messages Icon" />
              <h1 className=" font-medium text-[20px]">Messages</h1>
              <h1 className=" font-semibold text-[28px]">20</h1>
              <p className=" text-[14px]">
                Number of messages between your users and the AI agent
              </p>
            </div>
            <div className=" bg-gray2 border-2 rounded-md border-gray4 p-4 flex flex-col items-start gap-5">
              <img src={AnalyticLeads} alt="Leads Icon" />
              <h1 className=" font-medium text-[20px]">Leads</h1>
              <h1 className=" font-semibold text-[28px]">9</h1>
              <p className=" text-[14px]">
                Users that wanted more details from your team and sent their
                contact details
              </p>
            </div>
            <div className=" bg-gray2 border-2 rounded-md border-gray4 p-4 flex flex-col items-start gap-5">
              <img src={AnalyticCharacterCount} alt="Character Count Icon" />
              <h1 className=" font-medium text-[20px]">Character count</h1>
              <h1 className=" font-semibold text-[28px]">4k/200k</h1>
              <p className=" text-[14px]">Consumed messages this month</p>
            </div>
          </div>
          <div className=" my-7">
            <div className=" mb-4">
              <h1 className=" font-bold text-[28px]">Training Data</h1>
              <p>Here are the sources that your AI agent is trained on.</p>
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              <div className=" bg-gray2 border-2 rounded-md border-gray4 p-4 flex flex-col items-start gap-5">
                <img src={TrainingLinks} alt="Links Icon" />
                <h1 className=" font-medium text-[20px]">Links</h1>
                <h1 className=" font-semibold text-[28px]">1/5</h1>
              </div>
              <div className=" bg-gray2 border-2 rounded-md border-gray4 p-4 flex flex-col items-start gap-5">
                <img src={TrainingFiles} alt="Files Icon" />
                <h1 className=" font-medium text-[20px]">Files</h1>
                <h1 className=" font-semibold text-[28px]">1/5</h1>
              </div>
              <div className=" bg-gray2 border-2 rounded-md border-gray4 p-4 flex flex-col items-start gap-5">
                <img src={AnalyticCharacterCount} alt="Character Count Icon" />
                <h1 className=" font-medium text-[20px]">Character count</h1>
                <h1 className=" font-semibold text-[28px]">4k/200k</h1>
              </div>
            </div>
            <a
              className=" font-medium flex items-center gap-2 mt-6"
              href="#"
            >
              Upgrade plan to get more privileges{" "}
              <img src={ArrowRightIcon} alt="Arrow Right Icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
