/** @format */

import React, { useState, useEffect } from "react";

const TrainingForm = ({ setTotalLinks, setTotalCharacters }) => {
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [crawledLinks, setCrawledLinks] = useState([]);
  const [manualLinks, setManualLinks] = useState([]);
  const [manualLink, setManualLink] = useState("");

  // Update the totals whenever the crawledLinks or manualLinks state changes
  useEffect(() => {
    // Update total links and total characters in the parent component
    const totalLinks = crawledLinks.length + manualLinks.length;
    const totalCharacters =
      crawledLinks.reduce((total, link) => total + link.characters, 0) +
      manualLinks.reduce((total, link) => total + link.characters, 0);

    setTotalLinks(totalLinks);
    setTotalCharacters(totalCharacters);
  }, [crawledLinks, manualLinks, setTotalLinks, setTotalCharacters]);

  // Handle crawl button click
  const handleCrawl = () => {
    if (websiteUrl.trim()) {
      if (crawledLinks.length + manualLinks.length < 5) {
        const newLink = {
          url: websiteUrl,
          characters: websiteUrl.length * 10, // Simulated character count
        };

        setCrawledLinks((prevLinks) => [...prevLinks, newLink]);
        setWebsiteUrl(""); // Clear the input after crawling
      } else {
        alert("You can only add up to 5 links in total.");
      }
    }
  };

  // Handle manual link addition
  const handleAddManualLink = () => {
    if (manualLink.trim()) {
      if (crawledLinks.length + manualLinks.length < 5) {
        const newLink = {
          url: manualLink,
          characters: manualLink.length * 10, // Simulated character count
          type: "manual",
        };

        setManualLinks((prevLinks) => [...prevLinks, newLink]);
        setManualLink(""); // Clear the input after adding
      } else {
        alert("You can only add up to 5 links in total.");
      }
    }
  };

  // Handle link deletion
  const handleDeleteLink = (index, type) => {
    if (type === "manual") {
      setManualLinks((prevLinks) => prevLinks.filter((_, i) => i !== index));
    } else {
      setCrawledLinks((prevLinks) => prevLinks.filter((_, i) => i !== index));
    }
  };

  return (
    <div className="my-10 w-full md:max-w-[600px]">
      <form onSubmit={(e) => e.preventDefault()}>
        {/* Website URL Crawl */}
        <div>
          <label htmlFor="yourWebsite" className="text-[16px] text-black2">
            Your website
          </label>
          <div className="mt-2 flex justify-between items-center gap-4">
            <input
              className="px-6 py-4 border-2 bg-transparent border-gray4 w-full rounded-lg"
              type="url"
              name="yourWebsite"
              value={websiteUrl}
              onChange={(e) => setWebsiteUrl(e.target.value)}
            />
            <button
              type="button"
              className="bg-black px-6 py-4 rounded-lg text-white font-semibold"
              onClick={handleCrawl}
            >
              Crawl
            </button>
          </div>
        </div>

        {/* Add manual links */}
        <div className="mt-14">
          <label htmlFor="manualLink" className="text-[16px] text-black2">
            Add manual links
          </label>
          <div className="mt-2 flex justify-between items-center gap-4">
            <input
              className="px-6 py-4 border-2 bg-transparent border-gray4 w-full rounded-lg"
              type="url"
              name="manualLink"
              value={manualLink}
              onChange={(e) => setManualLink(e.target.value)}
              placeholder="https://.."
            />
            <div className="flex items-center">
              <img src="/icons/plus-icon.svg" alt="Plus Icon" />
              <button
                type="button"
                className="py-1 px-3 rounded-lg text-black2 font-semibold whitespace-nowrap"
                onClick={handleAddManualLink}
              >
                Add link
              </button>
            </div>
          </div>

          {(crawledLinks.length > 0 || manualLinks.length > 0) && (
            <>
              <p className="mt-4 text-black2">
                Links Found: {crawledLinks.length + manualLinks.length} - Total
                Characters:{" "}
                {crawledLinks.reduce(
                  (total, link) => total + link.characters,
                  0
                ) +
                  manualLinks.reduce(
                    (total, link) => total + link.characters,
                    0
                  )}
              </p>

              {/* Display crawled links */}
              {crawledLinks.map((link, index) => (
                <div
                  key={`crawled-${index}`}
                  className="flex justify-between items-center border-b border-gray4 py-3"
                >
                  <p className="font-normal text-black">
                    {link.url} - {link.characters} characters
                  </p>
                  <button
                    type="button"
                    onClick={() => handleDeleteLink(index, "crawled")}
                    className="cursor-pointer"
                  >
                    <img src="/icons/delete.svg" alt="delete" />
                  </button>
                </div>
              ))}

              {/* Display manual links */}
              {manualLinks.map((link, index) => (
                <div
                  key={`manual-${index}`}
                  className="flex justify-between items-center border-b border-gray4 py-3"
                >
                  <p className="font-normal text-black">
                    {link.url} - {link.characters} characters (Manual)
                  </p>
                  <button
                    type="button"
                    onClick={() => handleDeleteLink(index, "manual")}
                    className="cursor-pointer"
                  >
                    <img src="/icons/delete.svg" alt="delete" />
                  </button>
                </div>
              ))}
            </>
          )}
        </div>
      </form>
      {/* create & train button */}
      <div className="flex flex-col justify-end items-end mt-10">
        <p className="text-[16px] text-black2">Initiate Training with Links:</p>
        <button className="flex items-center gap-1 bg-black1 text-white rounded-lg py-4 px-7">
          Create & Train Bot
          <img src="/icons/arrow-right.svg" />
        </button>
      </div>
    </div>
  );
};

export default TrainingForm;
