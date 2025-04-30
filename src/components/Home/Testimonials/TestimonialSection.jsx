import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import TestimonialCard from "./TestimonialCard";
import testimonials from "../../../data/testimonials.json";

export default function TestimonialSection() {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="relative w-full px-4 py-20 text-center overflow-hidden">

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto space-y-6">
        {/* Badge */}
        <div className="flex justify-center">
          <span className="px-3 py-1 rounded-full text-sm bg-gray-800 text-gray-200">
            Testimonials
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-orange-500 via-yellow-200 to-orange-500 drop-shadow-[0_2px_15px_rgba(255,161,0,0.5)]">
          Our Students' Feedback
        </h2>

        {/* Subtext */}
        <p className="text-gray-400 max-w-xl mx-auto">
          Explore the incredible advantages of enrolling in our courses and enhancing your skills.
        </p>

        {/* Desktop Grid */}
        <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-10">
          {testimonials.map((data, i) => (
            <TestimonialCard key={i} {...data} />
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="sm:hidden relative w-full max-w-sm mx-auto pt-10">
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50, rotateY: 45, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, rotateY: 0, scale: 1 }}
              exit={{ opacity: 0, x: -50, rotateY: -45, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="shadow-xl rounded-xl"
            >
              <TestimonialCard {...testimonials[index]} />
            </motion.div>
          </AnimatePresence>

          {/* Prev Button */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-orange-700/80 hover:bg-orange-600 p-2 rounded-full text-white shadow-lg transition"
          >
            <ChevronLeft />
          </button>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-orange-700/80 hover:bg-orange-600 p-2 rounded-full text-white shadow-lg transition"
          >
            <ChevronRight />
          </button>
        </div>

        {/* CTA Button */}
        <div className="pt-10">
          <button className="px-6 py-3 font-semibold rounded-md border border-orange-500 text-orange-300 bg-black/40 shadow-[0_0_25px_#ff9100] hover:bg-orange-500 hover:text-white transition duration-300 active:scale-105 animate-pulse">
            Join Cohorts Live Classes
          </button>
        </div>
      </div>
    </section>
  );
}
