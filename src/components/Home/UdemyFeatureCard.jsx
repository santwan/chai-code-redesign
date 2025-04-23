// components/UdemyFeatureCard.jsx
import React from "react";
import { motion } from "framer-motion";
import UdemyCard from "./UdemyCard";

const UdemyFeatureCard = ({ course }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="flex flex-col md:flex-row items-center gap-6 bg-[#0d0d0d] border border-gray-700 rounded-xl p-6 text-white w-full max-w-5xl mx-auto shadow-md"
    >
      {/* LEFT: Actual reusable UdemyCard component */}
      <div className="w-full md:w-[300px] flex-shrink-0">
        <UdemyCard course={course} />
      </div>

      {/* RIGHT: Description & highlights */}
      <div className="text-center md:text-left w-full">
        <h3 className="text-2xl md:text-3xl font-bold">{course.title}</h3>
        <p className="text-gray-300 mt-2 text-sm md:text-base">{course.description}</p>
        <div className="mt-4">
          <div className="text-3xl font-bold text-white">{course.rating} Stars</div>
          <div className="text-gray-400 text-sm mt-1">Top Rated on Udemy</div>
        </div>
      </div>
    </motion.div>
  );
};

export default UdemyFeatureCard;
