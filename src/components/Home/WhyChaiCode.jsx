import React from "react";
import BenefitCard from "../Global/BenefitCard.jsx";
import { GraduationCap, Users, Brain, Coffee, MessageSquare, Gift } from "lucide-react";

const benefits = [
  {
    Icon: GraduationCap,
    title: "Comprehensive Curriculum",
    description:
      "Master key concepts and hands-on skills with clarity and confidence. Learn what truly matters, the right way, thoroughly and practically.",
  },
  {
    Icon: Users,
    title: "You finish it",
    description:
      "Our cohorts are a collaborative journey. Students learn together, stay motivated, and complete the course on time as a community.",
  },
  {
    Icon: Brain,
    title: "Industry Guests",
    description:
      "We’re connected with industry experts and regularly bring them into our classes for engaging, fun, and insightful sessions.",
  },
  {
    Icon: Coffee,
    title: "Code and Chill",
    description:
      "Coding should be fun, not frightening. With time and practice, everything starts to click and fall into place.",
  },
  {
    Icon: MessageSquare,
    title: "Improve Communication",
    description:
      "Boost communication skills through peer practice. Co-learners teach, share, and grow together.",
  },
  {
    Icon: Gift,
    title: "Bounties",
    description:
      "Every cohort comes with exciting cash prizes, even MacBook giveaways! It’s how we make learning fun and motivating.",
  },
];

const WhyChaiCode = () => {
  return (
    <section className="py-20 px-4 md:px-12 ">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-2">But Why ChaiCode ?</h2>
        <p className="text-lg dark:text-gray-300 mb-16">
          ChaiCode exists because we love tech and teaching
        </p>

        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Benefits */}
          <div className="flex flex-col gap-6">
            {benefits.slice(0, 3).map((benefit, index) => (
              <BenefitCard key={index} {...benefit} />
            ))}
          </div>

          {/* Center profile */}
          <div className="flex flex-col items-center justify-center text-center border hover:scale-105 transition duration-300 border-gray-400 dark:border-gray-700 rounded-xl p-6">
            <img
              src="hitesh.webp"
              alt="Hitesh Choudhary"
              loading="lazy"
              decoding="async"
              className="rounded-lg mb-4 w-full max-w-[280px] mx-auto"
            />
            <h3 className="text-xl font-bold">Hitesh Choudhary</h3>
            <p className="dark:text-gray-300 text-sm mt-2">
              Retired from corporate and full-time YouTuber. x-Founder of LCO (acquired), x-CTO,
              Sr. Director at PW. Runs 2 YT channels (958k & 478k), stepped into 43 countries.
            </p>
            <h4 className="text-lg font-semibold mt-4">Approach</h4>
            <p className="dark:text-gray-300 text-sm">
              Project-based courses with peer learning and bounties with many activities.
            </p>
            {/* Optional: social icons or badges */}
            <div className="flex gap-2 mt-4">
              <div className="w-4 h-4 rounded-full bg-yellow-400" />
              <div className="w-4 h-4 rounded-full bg-pink-500" />
              <div className="w-4 h-4 rounded-full bg-blue-500" />
            </div>
          </div>

          {/* Right Benefits */}
          <div className="flex flex-col gap-6">
            {benefits.slice(3).map((benefit, index) => (
              <BenefitCard key={index + 3} {...benefit} />
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-16">
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-6 rounded-full transition-all">
            Join Cohorts Live Classes
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChaiCode;
