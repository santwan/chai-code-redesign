// sections/UdemySection.jsx

import React from "react";
import UdemyFeatureCard from "./UdemyFeatureCard";

const courses = [
  {
    title: "Complete web development course",
    description: "Only web development course that you will need. Covers HTML, CSS, Tailwind, Node, React, MongoDB, Prisma, Deployment etc.",
    rating: 4.7,
    image: "/images/udemy-preview-card.png", // Replace with actual image path
  },
];

const UdemySection = () => {
  return (
    <section className="bg-gradient-to-r dark:from-black via-orange-400 dark:via-orange-900/60 dark:to-black py-20 px-4">
      <div className="text-center mb-10 text-white">
        <h2 className="text-4xl font-bold">Udemy</h2>
        <p className="text-gray-300 mt-2">Not only in India, we are<br />global leaders in tech education</p>
      </div>

      {courses.map((course, i) => (
        <UdemyFeatureCard key={i} course={course} />
      ))}
    </section>
  );
};

export default UdemySection;