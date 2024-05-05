import React from "react";

const BackGroundVideo = () => {
  return (
    <div className="w-full">
      <iframe
        className=" w-full aspect-video"
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/aznxojO15M0?si=VGTlRdM9q8SQ2Nc9&autoplay=1"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default BackGroundVideo;
