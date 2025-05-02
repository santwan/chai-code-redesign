import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Star } from "lucide-react";
import UdemyCard from "./UdemyCard";

const UdemyFeatureCard = ({ course }) => {

  const glowAnimation = {
    initial: { opacity: 0, scale: 0.9, y: 20 },
    whileInView: { opacity: 1, scale: 1, y: 0 },
    whileHover: { scale: 1.02 },
    transition: { duration: 0.5, ease: "easeOut" },
    viewport: { once: true, amount: 0.3 }
  };

  const sharedClasses =  "relative border border-orange-600/40 rounded-lg p-2 transition duration-300 group";

  const glowBorder = (
    <div className="absolute inset-0 rounded-lg border-2 md:border-transparent border-orange-500/40 animate-pulse md:group-hover:border-orange-500 group-hover:shadow-[0_0_20px_5px_rgba(255,115,0,0.4)] transition-all duration-100 pointer-events-none" />
  );

  const contentWrapper = (text) => (
    <div className="relative z-10">{text}</div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="flex flex-col md:flex-row items-center md:items-stretch gap-6 bg-white dark:bg-black border border-gray-200 dark:border-gray-700 rounded-2xl p-6 w-full max-w-6xl mx-auto shadow-md"
    >
      {/* Left: UdemyCard */}
      <div className="w-full md:w-[320px] flex-shrink-0 flex justify-center md:justify-start">
        <UdemyCard course={course} />
      </div>

      {/* Right: Content */}
      <div className="w-full flex flex-col justify-center h-full text-center  md:py-4 lg:px-15">
        <h2 className="text-2xl md:text-[38px] font-bold text-black dark:text-white">
          {course.title}
        </h2>

        <div className="text-gray-600 dark:text-gray-300 my-4 lg:px-10 text-sm md:text-base mx-auto font-serif md:mx-0">
          Only web development course that you will need. {course.description}
        </div>

        {/* Highlights */}
        <div className="font-mono text-sm md:text-base text-gray-200 grid grid-rows-2 gap-5">
          <div className="grid grid-cols-2 gap-5">
            <motion.div {...glowAnimation} className={sharedClasses}>
              {glowBorder}
              {contentWrapper("Real-world projects & assignments")}
            </motion.div>

            <motion.div
              {...glowAnimation}
              className={`${sharedClasses}`}
            >
              {glowBorder}
              {contentWrapper("Doubt support via Discord & mail")}
            </motion.div>
          </div>

          <div className="grid grid-cols-2 gap-5">
            <motion.div {...glowAnimation} className={sharedClasses}>
              {glowBorder}
              {contentWrapper("Lifetime access on Udemy")}
            </motion.div>

            <motion.div {...glowAnimation} className={sharedClasses}>
              {glowBorder}
              {contentWrapper("Covers full MERN stack")}
            </motion.div>
          </div>
        </div>

        {/* Rating */}
        <div className="mt-6">
          <div className="flex items-center justify-center  gap-2 text-yellow-500 dark:text-yellow-400 text-3xl font-bold">
            {course.rating} <Star fill="currentColor" className="w-7 h-7" />
          </div>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
            Top Rated on Udemy
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default UdemyFeatureCard;
