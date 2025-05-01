import React, { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import Skeleton from "../Global/Skeleton.jsx";

const ReactPlayer = lazy(() => import("react-player/lazy"));

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 90,
      damping: 15,
    },
  },
};

const LaptopFrame = () => {
  return (
    <motion.div
      className="w-full flex justify-center items-center px-4 py-10"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.4 }}
    >
      {/* Desktop View */}
      <div className="hidden md:flex flex-col items-center">
        {/* Top Notch */}
        <div className="w-[800px] h-4 bg-gray-800 dark:bg-gray-300 rounded-t-[1.5rem] flex justify-center items-center">
          <div className="w-2 h-2 bg-gray-500 dark:bg-gray-600 rounded-full"></div>
        </div>

        {/* Video Frame */}
        <div className="w-[800px] h-[450px] border-t-0 border-4 border-gray-700 dark:border-gray-300 bg-black rounded-b-[0.5rem] overflow-hidden shadow-2xl">
          <Suspense fallback={<Skeleton className="w-full h-full" />}>
            <ReactPlayer
              url="https://www.youtube.com/watch?v=foGklduxhM0&t=237s"
              width="100%"
              height="100%"
              controls
              light={true}
            />
          </Suspense>
        </div>

        {/* Base */}
        <div className="w-[900px] h-8 bg-gray-800 dark:bg-gray-300 rounded-b-[2rem] flex items-center justify-center text-sm text-white dark:text-gray-900 font-medium shadow-md -mt-1">
          <span>ChaiCodeBook Pro</span>
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden w-full max-w-md aspect-video rounded-lg overflow-hidden shadow-lg">
        <Suspense fallback={<Skeleton className="w-full h-full" />}>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=foGklduxhM0&t=237s"
            width="100%"
            height="100%"
            controls
            light={true}
          />
        </Suspense>
      </div>
    </motion.div>
  );
};

export default LaptopFrame;
