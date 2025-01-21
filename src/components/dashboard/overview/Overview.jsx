/** @format */

import React from "react";
import LeadsIcon from "/overview-icons/leads.svg";
import MessageIcon from "/overview-icons/message.svg";
import CharacterCountIcon from "/overview-icons/character-count.svg";
import FrameIcon from "/overview-icons/Frame.svg";

const Overview = () => {
  return (
    <div className="container bg-gray2 p-4">
      <div className=" bg-gray3 rounded-md p-4">
        <div className=" grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className=" col-span-1 md:col-span-2">
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className=" bg-gray2 border-2 rounded-md border-gray4 p-4 flex flex-col items-start gap-5">
                <img src={LeadsIcon} alt="Leads Icon" />
                <h1 className=" font-medium text-[20px]">Leads</h1>
                <h1 className=" font-semibold text-[28px]">0</h1>
                <p>Generated</p>
              </div>
              <div className=" bg-gray2 border-2 rounded-md border-gray4 p-4 flex flex-col items-start gap-5">
                <img src={MessageIcon} alt="Messages Icon" />
                <h1 className=" font-medium text-[20px]">Messages</h1>
                <h1 className=" font-semibold text-[28px]">10/50</h1>
                <p>Sent</p>
              </div>
              <div className=" bg-gray2 border-2 rounded-md border-gray4 p-4 flex flex-col items-start gap-5">
                <img src={CharacterCountIcon} alt="Character Count Icon" />
                <h1 className=" font-medium text-[20px]">Character count</h1>
                <h1 className=" font-semibold text-[28px]">4k/200k</h1>
                <p>Used</p>
              </div>
            </div>
          </div>
          <div>
            <img className="w-[100vh]" src={FrameIcon} alt="Frame Icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
