"use client";

import React, { useState, useEffect, useRef } from "react";
import ReactPlayer from "react-player";
import { FiPlay } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

const YourComponent = () => {
  const [showVideoModal, setShowVideoModal] = useState(false);
  const videoRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (showVideoModal) {
      document.body.style.overflow = "hidden";
      document.addEventListener("click", handleClickOutside);
    } else {
      document.body.style.overflow = "auto";
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showVideoModal]);

  const openVideoModal = () => {
    setShowVideoModal(true);
  };

  const closeVideoModal = () => {
    setShowVideoModal(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (videoRef.current && !videoRef.current.contains(event.target as Node)) {
      closeVideoModal();
    }
  };

  return (
    <div>
      {!showVideoModal && (
        <button
          className="bg-transparent text-white p-10 rounded-full border border-white flex items-center justify-center z-999"
          onClick={openVideoModal}
        >
          <FiPlay />
        </button>
      )}

      {showVideoModal && (
        <div className="bg-black p-9xl inset-0 flex items-center justify-center">
          <div
            ref={videoRef}
            className="video-modal middle flex flex-col items-center"
          >
            <button
              className="bg-transparent text-white p-5 mb-6 rounded-full border border-white"
              onClick={closeVideoModal}
            >
              <AiOutlineClose />
            </button>
            <ReactPlayer
              url="https://www.youtube.com/watch?v=RIZVrdeVI3A"
              controls={true}
              width="430px"
              height="300px"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default YourComponent;
