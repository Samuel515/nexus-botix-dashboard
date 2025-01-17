/** @format */

import React from "react";

const UsageOverview = ({ totalLinks, totalFiles, totalCharacters }) => {
  // Constants for maximum values
  const MAX_LINKS = 5;
  const MAX_FILES = 20;
  const MAX_CHARACTERS = 100000;

  // Calculate percentages for progress bars
  //   const linksPercentage = (totalLinks / MAX_LINKS) * 100;
  //   const filesPercentage = (totalFiles / MAX_FILES) * 100;
  //   const charactersPercentage = (totalCharacters / MAX_CHARACTERS) * 100;

  // Format character count to be more readable (e.g., 1.2k)
  const formatCharacterCount = (count) => {
    if (count >= 1000) {
      return (count / 1000).toFixed(1) + "k";
    }
    return count;
  };

  return (
    <div>
      <div className="mb-10 mt-7">
        <div className="bg-white rounded-t-lg p-5">
          <h1 className="text-[20px] font-medium">Usage Overview</h1>
        </div>
        <div className="bg-gray2 h-auto flex flex-col gap-6 p-5 rounded-b-lg">
          {/* Links */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <p className="text-black2">Links</p>
              <p className="text-black2">
                {totalLinks}/{MAX_LINKS}
              </p>
            </div>
            {/* <div className="w-full bg-gray4 rounded-full h-2">
              <div
                className="bg-gray1 h-2 rounded-full transition-all duration-300"
                style={{ width: `${Math.min(linksPercentage, 100)}%` }}
              />
            </div> */}
          </div>

          {/* Files */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <p className="text-black2">Files</p>
              <p className="text-black2">
                {totalFiles}/{MAX_FILES}
              </p>
            </div>
            {/* <div className="w-full bg-gray4 rounded-full h-2">
              <div
                className="bg-gray1 h-2 rounded-full transition-all duration-300"
                style={{ width: `${Math.min(filesPercentage, 100)}%` }}
              />
            </div> */}
          </div>

          {/* Characters */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <p className="text-black2">Characters</p>
              <p className="text-black2">
                {formatCharacterCount(totalCharacters)}/
                {formatCharacterCount(MAX_CHARACTERS)}
              </p>
            </div>
            {/* <div className="w-full bg-gray4 rounded-full h-2">
              <div
                className="bg-gray1 h-2 rounded-full transition-all duration-300"
                style={{ width: `${Math.min(charactersPercentage, 100)}%` }}
              />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsageOverview;
