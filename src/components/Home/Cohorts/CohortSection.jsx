import React from "react";
import CohortCard from "./CohortCard.jsx";
import { video } from "framer-motion/client";
import AnimatedOnScroll from "../../AnimatedOnScroll.jsx";


const CohortsSection = () => {
  const cohorts = [
    {
      video: "https://www.youtube.com/watch?v=1NlWOdTuBLk&t=1s",
      title: "Web Dev Cohort – Live 1.0",
      description: "Learn to build software for web with best and latest tech stack",
      price: "6,999 INR",
      oldPrice: "8,999 INR",
      cta: "Buy Now",
    },
    {
      video: "https://www.youtube.com/watch?v=VNb_LawBBWU",
      title: "Gen AI Cohort – Live 1.0",
      description: "Learn to build software for web with best and latest tech stack",
      price: "4,999 INR",
      oldPrice: "9,999 INR",
      cta: "Buy Now",
    },
    {
      video: "https://www.youtube.com/watch?v=Kjd-SWpe1do&t=970s",
      title: "Data Science Cohort – Live 1.0",
      description: "Learn to build software for web with best and latest tech stack",
      price: "6,999 INR",
      oldPrice: "8,999 INR",
      cta: "Buy Now",
    },
  ];

  return (
    <AnimatedOnScroll>
    <section >
      <div className="w-full p-5 flex flex-col justify-center">
        <div className="text-center mb-16">
          <h2 className="text-[55px] font-bold mb-1 text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-400 to-yellow-300 font-playfair drop-shadow-lg tracking-wide">
            <span className="text-[76px]">C</span>OHORTS
          </h2>
          <div className="relative w-full md:w-3/4 mx-auto mb-8">
            <p className="dark:text-orange-400 text-3xl md:font-mono md:text-4xl tracking-wide font-semibold">
              Live training classes
            </p>
            <span className="absolute left-0 w-full h-1 
              rounded-full animate-pulse 
              bg-gradient-to-r dark:from-orange-950/80 via-orange-400 dark:to-orange-950/80">
            </span>
          </div>
        </div>
        <div className=" max-w-full flex flex-wrap gap-8 justify-center">
          {cohorts.map((cohort, i) => (
            <CohortCard key={i} {...cohort} />
          ))}
        </div>
      </div>
    </section>
    </AnimatedOnScroll>
  );
};

export default CohortsSection;