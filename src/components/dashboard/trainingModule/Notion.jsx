/** @format */

import React from "react";

const Notion = () => {
  return (
    <div>
      <div className=" mt-10">
        <p className=" text-[16px] text-black2 ">
          Link your Notion account to use your pages for chatbot training. We'll
          pull content from the selected pages in your account.
        </p>
      </div>
      {/* create & train button */}
      <div className="flex flex-col justify-start items-start mt-10">
        <p className="text-[16px] text-black2">Initiate Training with Links:</p>
        <button className="flex items-center gap-1 bg-black1 text-white rounded-lg py-4 px-7">
          Create & Train Bot
          <img src="/icons/arrow-right.svg" />
        </button>
      </div>
    </div>
  );
};

export default Notion;
