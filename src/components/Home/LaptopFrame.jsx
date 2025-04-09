import React from "react";
import ReactPlayer from "react-player";

const LaptopFrame = () => {
  return (
    <div className="w-full flex justify-center items-center px-4 py-10">
      {/* Desktop View (Laptop Frame) */}
      <div className="hidden md:flex flex-col items-center">
        {/* Top Camera Notch */}
        <div className="w-[800px] h-4 dark:bg-gray-300 bg-gray-800 rounded-t-[1.5rem] relative flex justify-center items-center">
          <div className="w-2 h-2 bg-gray-500 dark:bg-gray-600 rounded-full"></div>
        </div>

        {/* Screen with Border */}
        <div className="w-[800px] h-[450px] border-t-0 border-4 dark:border-gray-300 border-gray-700 bg-black rounded-t-none rounded-b-[0.5rem] overflow-hidden shadow-2xl relative">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=foGklduxhM0&t=237s"
            width="100%"
            height="100%"
            controls
          />
        </div>

        {/* Bottom Base with Logo */}
        <div className="w-[900px] h-8 dark:bg-gray-300 bg-gray-800 rounded-b-[2rem] flex items-center justify-center text-sm text-white dark:text-gray-900 font-medium shadow-md -mt-1">
          <span>ChaiCodeBook Pro</span>
        </div>
      </div>
      {/* Mobile View (Simple Video Box) */}
        <div className="md:hidden w-full max-w-md aspect-video rounded-lg overflow-hidden shadow-lg">
            <ReactPlayer
            url="https://www.youtube.com/watch?v=foGklduxhM0&t=237s"
            width="100%"
            height="100%"
            controls
            />
        </div>
    </div>
  );
};

export default LaptopFrame;
