/** @format */

import React, { useState } from "react";
import TrainingForm from "./TrainingForm";
import UsageOverview from "./UsageOverview";
import Files from "./Files";
import Text from "./Text";
import Notion from "./Notion";

const TrainingModule = () => {
  // Get these values from your state management
  const [totalLinks, setTotalLinks] = useState(0);
  const [totalFiles, setTotalFiles] = useState(0);
  const [totalCharacters, setTotalCharacters] = useState(0);

  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (linkId) => {
    setActiveLink(linkId);
  };

  const renderContent = () => {
    switch (activeLink) {
      case "website-links":
        return (
          <p className="mt-4">
            <TrainingForm
              setTotalLinks={setTotalLinks}
              setTotalCharacters={setTotalCharacters}
            />
          </p>
        );
      case "files":
        return (
          <p className="mt-4">
            <Files setTotalFiles={setTotalFiles} />
          </p>
        );
      case "text":
        return (
          <p className="mt-4">
            <Text setCharacterCount={setTotalCharacters} />
          </p>
        );
      case "notion":
        return (
          <p className="mt-4">
            <Notion />
          </p>
        );
      default:
        return;
    }
  };

  return (
    <div>
      <div className="container bg-gray2 p-4">
        <div className="bg-gray3 rounded-md p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="col-span-3">
              <h1 className="font-bold text-[28px] mb-10 mt-4">
                Connect Nexus Botix to your favourite apps
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {/* Website Links */}
                <div
                  className={`flex gap-1 cursor-pointer items-center ${
                    activeLink === "website-links"
                      ? "bg-gray-800 text-white" // Active link styles
                      : "hover:text-white hover:bg-black" // Hover styles for inactive links
                  } bg-gray2 p-3 rounded-lg transition duration-300`}
                  onClick={() => handleLinkClick("website-links")}
                >
                  <img
                    src="/icons/website-links.svg"
                    alt="Website Links"
                    className={`transition duration-300 group-hover:filter group-hover:brightness-0 group-hover:invert ${
                      activeLink === "website-links"
                        ? "filter invert brightness-0"
                        : ""
                    }`}
                  />
                  <div>
                    <h1 className="text-[21px] font-medium">Website Links</h1>
                    <p>Crawl your website</p>
                  </div>
                </div>

                {/* Files */}
                <div
                  className={`flex gap-1 cursor-pointer items-center ${
                    activeLink === "files"
                      ? "bg-gray-800 text-white"
                      : "hover:text-white hover:bg-black"
                  } bg-gray2 p-3 rounded-lg transition duration-300 group`}
                  onClick={() => handleLinkClick("files")}
                >
                  <img
                    src="/icons/files-01.svg"
                    alt="Files"
                    className={`transition duration-300 group-hover:filter group-hover:brightness-0 group-hover:invert ${
                      activeLink === "files" ? "filter invert brightness-0" : ""
                    }`}
                  />
                  <div>
                    <h1 className="text-[21px] font-medium">Files</h1>
                    <p>Upload .pdf, .txt, doc</p>
                  </div>
                </div>
                {/* Text */}
                <div
                  className={`flex gap-1 cursor-pointer items-center ${
                    activeLink === "text"
                      ? "bg-gray-800 text-white "
                      : "hover:text-white hover:bg-black"
                  } bg-gray2 p-3 rounded-lg transition duration-300 group`}
                  onClick={() => handleLinkClick("text")}
                >
                  <img
                    src="/icons/pencil-edit-01.svg"
                    alt="Text"
                    className={`transition duration-300 group-hover:filter group-hover:brightness-0 group-hover:invert ${
                      activeLink === "text" ? "filter invert brightness-0" : ""
                    }`}
                  />
                  <div>
                    <h1 className="text-[21px] font-medium">Text</h1>
                    <p>Write your own content</p>
                  </div>
                </div>
                {/* Notion */}
                <div
                  className={`flex gap-1 cursor-pointer items-center ${
                    activeLink === "notion"
                      ? "bg-gray-800 text-white"
                      : "hover:text-white hover:bg-black"
                  } bg-gray2 p-3 rounded-lg transition duration-300 group`}
                  onClick={() => handleLinkClick("notion")}
                >
                  <img
                    src="/icons/notion-02.svg"
                    alt="Notion"
                    className={`transition duration-300 group-hover:filter group-hover:brightness-0 group-hover:invert ${
                      activeLink === "notion"
                        ? "filter invert brightness-0"
                        : ""
                    }`}
                  />
                  <div>
                    <h1 className="text-[21px] font-medium">Notion</h1>
                    <p>Use Notion documents</p>
                  </div>
                </div>
              </div>
              {renderContent()}
            </div>
            <UsageOverview
              totalLinks={totalLinks}
              totalFiles={totalFiles}
              totalCharacters={totalCharacters}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingModule;
