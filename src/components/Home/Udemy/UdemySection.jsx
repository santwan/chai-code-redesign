import React from "react";
import UdemyFeatureCard from "./UdemyFeatureCard.jsx";

const courses = [
  {
    title: "Complete web development course",
    description:
      "Only web development course that you will need. Covers HTML, CSS, Tailwind, Node, React, MongoDB, Prisma, Deployment etc.",
    rating: 4.7,
  },
];

const UdemySection = () => {
  return (
    <section className="bg-gradient-to-b dark:from-black dark:via-orange-900/60 dark:to-black py-20 px-4">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold md:text-5xl dark:text-orange-500">Udemy</h2>
        <p className="dark:text-gray-100 mt-2">
          Not only in India, we are
          global leaders in tech education
        </p>
      </div>

      {courses.map((course, i) => (
        <UdemyFeatureCard key={i} course={course} />
      ))}
    </section>
  );
};

export default UdemySection;
