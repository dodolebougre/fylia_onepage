import React from "react";
import VideoButton from "../../components/VideoButton";

const Video = () => {
  return (
    <div
      id="video"
      className="flex items-center justify-center h-screen mb-12 md:bg-fixed bg-center bg-cover object-cover"
      style={{
        backgroundImage: 'url("/assets/image/tableausombre.png")',
      }}
    >
      <div className="flex flex-col items-end">
        <div className="relative">
          <img
            width={1000}
            className="block mx-auto -z-2"
            src="/assets/image/tableauclair.png"
            alt="tableau"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <VideoButton />
          </div>
        </div>

        <div className="text-white text-right italic">
          <p>
            <strong>Témoignage :</strong> Clodette
          </p>
          <p>
            <strong>Artiste :</strong> Sarah Delage
          </p>
        </div>
      </div>
    </div>
  );
};

export default Video;
