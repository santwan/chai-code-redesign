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
    image: "hitesh-udemy.webp",
  },
];

const UdemyCard = () => {
  const course = courses[0];

  return (
    <motion.article
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className="rounded-2xl dark:bg-black border border-gray-700 p-4 w-full max-w-sm shadow-xl dark:text-white"
    >
      <img
        src={course.image}
        alt={`Preview of ${course.title}`}
        className="rounded-lg w-full object-cover aspect-video"
      />

      <h3 className="text-lg font-bold mt-4">{course.title}</h3>
      <p className="text-sm dark:text-gray-300 mt-2">{course.description}</p>

      <div className="text-green-800/90 dark:text-yellow-400 text-lg font-bold mt-3">
        {course.rating} ⭐
      </div>

      <div className="mt-3 flex items-center space-x-3">
        <span className="text-pink-400 font-bold text-lg">₹{course.price}</span>
        <span className="text-gray-400 line-through text-sm">
          ₹{course.originalPrice}
        </span>
      </div>

      {/* Side-by-side Buttons */}
      <div className="mt-4 flex gap-2">
        <a
          href="https://www.udemy.com/course/web-dev-master/"
          aria-label={`Add ${course.title} to cart`}
          className="flex-1 text-center bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-xl font-semibold transition"
        >
          Add to Cart
        </a>
        <a
          href="https://www.udemy.com/course/web-dev-master/"
          aria-label={`Buy ${course.title} now`}
          className="flex-1 text-center bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-xl font-semibold transition"
        >
          Buy Now
        </a>
      </div>
    </motion.article>
  );
};

export default UdemyCard;
