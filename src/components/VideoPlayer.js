"use client";

import { useState } from "react";
import YouTube from "react-youtube";

const VideoPlayer = ({ videoId, fixed = false }) => {
  const [isOpen, setIsOpen] = useState(true);

  const options = {
    width: "300",
    height: "250",
    position: "relative",
  };

  const renderButton = () => {
    if (!fixed) return;
    return (
      <button
        className="text-main-primary float-right bg-main-secondary p-1"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M5.23 15.79a.75.75 0 01-.02-1.06l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 11-1.08 1.04L10 11.832 6.29 15.77a.75.75 0 01-1.06.02zm0-6a.75.75 0 01-.02-1.06l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 11-1.08 1.04L10 5.832 6.29 9.77a.75.75 0 01-1.06.02z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </button>
    );
  };

  return (
    <div className={`${fixed && "fixed bottom-2 right-2"}`}>
      {renderButton()}
      {isOpen && (
        <YouTube
          videoId={videoId}
          onReady={(event) => event.target.pauseVideo()}
          opts={options}
        />
      )}
    </div>
  );
};

export default VideoPlayer;
