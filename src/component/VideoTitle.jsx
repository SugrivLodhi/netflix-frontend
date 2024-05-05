import React from "react";

const VideoTitle = () => {
  return (
    <div className="absolute z-10 top-1/3 left-12 text-white">
      <h2 className="p-2">Sugriv Lodhi</h2>
      <p>I am MERN Stack Developer</p>
      <div className="flex gap-4 mt-4">
        <button className="border rounded-md py-2 px-3 min-w-24">Play</button>
        <button className="border rounded-md py-2 px-3">Watch Later</button>
      </div>
    </div>
  );
};

export default VideoTitle;
