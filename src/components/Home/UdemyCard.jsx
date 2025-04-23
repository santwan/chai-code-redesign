// components/UdemyCard.jsx

import React from "react";
import { motion } from "framer-motion";

const courses = [
  {
    title: "Complete web development course",
    description:
      "Covers HTML, CSS, Tailwind, Node, React, MongoDB, Prisma, Deployment etc.",
    rating: 4.7,
    price: 399,
    originalPrice: 3099,
    image: "/images/webdev-course.webp", // replace with your real path
  },
];

const UdemyCard = () => {
  const course = courses[0]; // Using the first course from the array

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className="rounded-2xl bg-black border border-gray-600 p-4 w-[300px] min-w-[300px] shadow-lg text-white"
    >
      <img
        src={course.image}
        alt="course preview"
        className="rounded-lg w-full object-cover"
      />
      <h3 className="text-xl font-bold mt-4">{course.title}</h3>
      <p className="text-sm text-gray-300 mt-2">{course.description}</p>
      <div className="text-xl font-semibold mt-3">{course.rating} ⭐</div>
      <div className="mt-4">
        <span className="text-pink-400 font-bold mr-2">₹{course.price}</span>
        <span className="text-gray-400 line-through">₹{course.originalPrice}</span>
      </div>
      <button className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-xl mt-4 w-full">
        Add to Cart
      </button>
    </motion.div>
  );
};

export default UdemyCard;
