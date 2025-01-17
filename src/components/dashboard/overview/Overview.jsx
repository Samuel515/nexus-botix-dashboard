/** @format */

import React from "react";

const Overview = () => {
  return (
    <div className="container bg-gray2 p-4">
      <div className=" bg-gray3 rounded-md p-4">
        <div className=" grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className=" col-span-1 md:col-span-2">
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className=" bg-gray2 border-2 rounded-md border-gray4 p-4 flex flex-col items-start gap-5">
                <img src="/overview-icons/leads.svg" />
                <h1 className=" font-medium text-[20px]">Leads</h1>
                <h1 className=" font-semibold text-[28px]">0</h1>
                <p>Generated</p>
              </div>
              <div className=" bg-gray2 border-2 rounded-md border-gray4 p-4 flex flex-col items-start gap-5">
                <img src="/overview-icons/message.svg" />
                <h1 lassName=" font-medium text-[20px]">Messages</h1>
                <h1 className=" font-semibold text-[28px]">10/50</h1>
                <p>Sent</p>
              </div>
              <div className=" bg-gray2 border-2 rounded-md border-gray4 p-4 flex flex-col items-start gap-5">
                <img src="/overview-icons/character-count.svg" />
                <h1 lassName=" font-medium text-[20px]">Character count</h1>
                <h1 className=" font-semibold text-[28px]">4k/200k</h1>
                <p>Used</p>
              </div>
            </div>
          </div>
          <div>
            <img className="w-[100vh]" src="/overview-icons/Frame.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
