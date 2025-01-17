/** @format */

import React from "react";

const Analytics = () => {
  return (
    <div>
      <div className="container bg-gray2 p-4">
        <div className=" bg-white rounded-md p-4">
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className=" bg-gray2 border-2 rounded-md border-gray4 p-4 flex flex-col items-start gap-5">
              <img src="/analytic-icons/interactions.svg" />
              <h1 className=" font-medium text-[20px]">Interactions</h1>
              <h1 className=" font-semibold text-[28px]">6</h1>
              <p className=" text-[14px]">
                The number of chat started by your user
              </p>
            </div>
            <div className=" bg-gray2 border-2 rounded-md border-gray4 p-4 flex flex-col items-start gap-5">
              <img src="/analytic-icons/message.svg" />
              <h1 className=" font-medium text-[20px]">Messages</h1>
              <h1 className=" font-semibold text-[28px]">20</h1>
              <p className=" text-[14px]">
                Number of messages between your users and the AI agent
              </p>
            </div>
            <div className=" bg-gray2 border-2 rounded-md border-gray4 p-4 flex flex-col items-start gap-5">
              <img src="/analytic-icons/leads.svg" />
              <h1 className=" font-medium text-[20px]">Leads</h1>
              <h1 className=" font-semibold text-[28px]">9</h1>
              <p className=" text-[14px]">
                Users that wanted more details from your team and sent their
                contact details
              </p>
            </div>
            <div className=" bg-gray2 border-2 rounded-md border-gray4 p-4 flex flex-col items-start gap-5">
              <img src="/analytic-icons/character-count.svg" />
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
                <img src="/analytic-icons/link.svg" />
                <h1 className=" font-medium text-[20px]">Links</h1>
                <h1 className=" font-semibold text-[28px]">1/5</h1>
              </div>
              <div className=" bg-gray2 border-2 rounded-md border-gray4 p-4 flex flex-col items-start gap-5">
                <img src="/analytic-icons/files.svg" />
                <h1 className=" font-medium text-[20px]">Files</h1>
                <h1 className=" font-semibold text-[28px]">1/5</h1>
              </div>
              <div className=" bg-gray2 border-2 rounded-md border-gray4 p-4 flex flex-col items-start gap-5">
                <img src="/analytic-icons/character-count.svg" />
                <h1 className=" font-medium text-[20px]">Character count</h1>
                <h1 className=" font-semibold text-[28px]">4k/200k</h1>
              </div>
            </div>
            <a className=" font-medium flex items-center gap-2 mt-6" href="#">
              Upgrade plan to get more privilages{" "}
              <img src="/social-media-icons/arrow-right.svg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
