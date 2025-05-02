import React from "react";
import { motion } from "framer-motion";
import BenefitCard from "../../Global/BenefitCard.jsx";
import {
  GraduationCap,
  Trophy,
  Home,
  Code2,
  FlaskConical,
  Repeat,
  Users,
} from "lucide-react";

const benefits = [
  {
    title: "Taught by Professionals",
    description: "Our cohorts are being taught by top industry experts and educators.",
    Icon: GraduationCap,
  },
  {
    title: "Bounties",
    description: "Earn rewards, from Cash to MacBook. Keeps you motivated to work hard",
    Icon: Trophy,
  },
  {
    title: "Coding hostels",
    description: "There is nothing like late night discussion with fellow learners and solving bugs",
    Icon: Home,
  },
  {
    title: "Peer Code Reviews",
    description: "With our internal tools like Masterji, every code assignment gets feedback to improve your code",
    Icon: Code2,
  },
  {
    title: "Leet Lab",
    description: "Our in-house built LeetCode style platform that helps you to understand foundation of programming language",
    Icon: FlaskConical,
  },
  {
    title: "Revision classes",
    description: "We have so many peer classes by fellow learners that you get so many chances to learn that topic",
    Icon: Repeat,
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
};

const CohortBenefits = () => {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.05 }}
      className="bg-white text-black dark:bg-black dark:text-white py-20 px-5 transition-colors duration-300"
    >
      <motion.div
        variants={fadeUp}
        className="max-w-7xl mx-auto text-center mb-10"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-2">
          Key Benefits of Cohorts
        </h2>
        <p className="text-gray-700 dark:text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
          "Cohorts are the best way to learn — they keep you accountable, help you finish on time, and surround you with a community that grows with you."
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {benefits.map((benefit, index) => (
          <motion.div key={index} variants={fadeUp}>
            <BenefitCard {...benefit} />
          </motion.div>
        ))}

        {/* ✅ FIXED: Image block without animation to avoid mobile viewport bugs */}
        <div className="md:col-span-1 border border-gray-300 dark:border-gray-700 rounded-2xl bg-gray-50 dark:bg-black p-4 flex items-center justify-center min-h-[200px]">
          <img
            src="alumni.png" // make sure this exists in public/images/
            alt="Student collage showing students connected as nodes"
            className="object-cover w-full h-full rounded-xl"
          />
        </div>

        <motion.div
          variants={fadeUp}
          whileHover={{ scale: 1.02 }}
          className="md:col-span-2 border border-gray-300 dark:border-gray-700 rounded-2xl p-8 bg-gray-50 dark:bg-black transition-all shadow-sm flex flex-col items-center text-center space-y-6"
        >
          {/* Heading */}
          <div className="flex items-center gap-2">
            <Users className="w-6 h-6 text-orange-500 dark:text-orange-400" />
            <h3 className="text-2xl font-bold text-orange-600 dark:text-orange-400">
              Alumni Network and Job Listings
            </h3>
          </div>

          {/* Description */}
          <p className="text-sm text-gray-700 dark:text-gray-300 max-w-xl">
            The alumni network you always wished for in college. A dedicated space where students collaborate on real projects, build startups, join hackathons — and yes, even get job updates posted directly by our internal HR team.
          </p>

          {/* Info Badges Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl w-full">
            <div className="flex items-center gap-3 bg-white/60 dark:bg-zinc-900 p-4 rounded-lg border border-gray-200 dark:border-zinc-800 shadow-sm">
              <span className="text-2xl">🧠</span>
              <div className="text-left">
                <h4 className="font-medium text-gray-800 dark:text-gray-100">700+ Alumni</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400">Active contributors and mentors</p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white/60 dark:bg-zinc-900 p-4 rounded-lg border border-gray-200 dark:border-zinc-800 shadow-sm">
              <span className="text-2xl">🤝</span>
              <div className="text-left">
                <h4 className="font-medium text-gray-800 dark:text-gray-100">Live Collaborations</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400">Real projects and startups</p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white/60 dark:bg-zinc-900 p-4 rounded-lg border border-gray-200 dark:border-zinc-800 shadow-sm">
              <span className="text-2xl">💼</span>
              <div className="text-left">
                <h4 className="font-medium text-gray-800 dark:text-gray-100">Job Listings</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400">Verified roles weekly</p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white/60 dark:bg-zinc-900 p-4 rounded-lg border border-gray-200 dark:border-zinc-800 shadow-sm">
              <span className="text-2xl">🧑‍🏫</span>
              <div className="text-left">
                <h4 className="font-medium text-gray-800 dark:text-gray-100">Mentorship Access</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400">Guidance from top companies</p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </motion.section>
  );
};

export default CohortBenefits;
