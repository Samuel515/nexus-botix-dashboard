/** @format */

import React, { useState, useRef, useEffect } from "react";

const Files = ({ setTotalFiles }) => {
  const [files, setFiles] = useState([]);
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef(null);

  // Accepted file types and max size (5MB)
  const acceptedTypes = [".pdf", ".doc", ".docx", ".csv", ".txt"];
  const maxSize = 5 * 1024 * 1024; // 5MB in bytes
  const maxFiles = 20; // Max number of files allowed

  useEffect(() => {
    // Update the total number of files whenever the file list changes
    setTotalFiles(files.length);
  }, [files, setTotalFiles]);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const validateFile = (file) => {
    const extension = "." + file.name.split(".").pop().toLowerCase();
    if (!acceptedTypes.includes(extension)) {
      alert(`File type ${extension} is not supported`);
      return false;
    }
    if (file.size > maxSize) {
      alert("File size exceeds 5MB limit");
      return false;
    }
    return true;
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const droppedFiles = [...e.dataTransfer.files];
    if (files.length + droppedFiles.length > maxFiles) {
      alert(`You can only upload a maximum of ${maxFiles} files.`);
      return;
    }

    const validFiles = droppedFiles.filter(validateFile);
    setFiles((prev) => [...prev, ...validFiles]);
  };

  const handleFileChange = (e) => {
    const selectedFiles = [...e.target.files];
    if (files.length + selectedFiles.length > maxFiles) {
      alert(`You can only upload a maximum of ${maxFiles} files.`);
      return;
    }

    const validFiles = selectedFiles.filter(validateFile);
    setFiles((prev) => [...prev, ...validFiles]);
  };

  const handleDelete = (indexToRemove) => {
    setFiles(files.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="space-y-5">
      <div
        className={`bg-transparent border-2 py-20 border-gray1 cursor-pointer rounded-lg flex flex-col justify-center items-center relative
          ${dragActive ? "border-blue-500 bg-blue-50 " : ""}`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current.click()}
      >
        <input
          ref={fileInputRef}
          type="file"
          multiple
          className="hidden"
          accept={acceptedTypes.join(",")}
          onChange={handleFileChange}
        />
        <img src="/icons/file-upload.svg" alt="upload icon" />
        <h1 className="text-[20px] text-black2 my-4">
          Click to upload files or Drag & Drop
        </h1>
        <p className="text-black2 font-medium">
          .pdf, .doc, .docx, .csv or .txt (max. 5MB)
        </p>
      </div>

      {/* Display uploaded files */}
      {files.length > 0 && (
        <div className="space-y-2">
          <h2 className="font-semibold text-black2">Uploaded Files:</h2>
          {files.map((file, index) => (
            <div
              key={index}
              className="flex justify-between items-center p-3 border border-gray1 rounded-lg"
            >
              <div className="flex items-center space-x-3">
                <img
                  src="/icons/file-upload.svg"
                  alt="file"
                  className="w-6 h-6"
                />
                <div>
                  <p className="text-sm font-medium">{file.name}</p>
                  <p className="text-xs text-gray-500">
                    {(file.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                </div>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleDelete(index);
                }}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <img src="/icons/delete.svg" alt="delete" className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>
      )}
      {/* create & train button */}
      <div className="flex flex-col justify-end items-end mt-16">
        <p className="text-[16px] text-black2">Initiate Training with Links:</p>
        <button className="flex items-center gap-1 bg-black1 text-white rounded-lg py-4 px-7">
          Create & Train Bot
          <img src="/icons/arrow-right.svg" />
        </button>
      </div>
    </div>
  );
};

export default Files;
