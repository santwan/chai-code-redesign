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
      viewport={{ once: false, amount: 0.3 }}
      className="bg-white text-black dark:bg-black dark:text-white py-20 px-5 transition-colors duration-300"
    >
      <motion.div
        variants={fadeUp}
        className="max-w-7xl mx-auto text-center mb-10"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-2 ">
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

        <motion.div
          variants={fadeUp}
          className="md:col-span-1 border border-gray-300 dark:border-gray-700 rounded-2xl flex items-center justify-center h-full bg-gray-50 dark:bg-black p-6"
        >
          <div
            className="rounded-xl overflow-hidden border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-zinc-900 p-4 flex justify-center items-center"
            role="img"
            aria-label="Student collage showing a network of connected student avatars"
          >
            <img
              src="alumni.png" // ✅ replace with your actual path
              alt="Student collage showing students connected as nodes"
              className="max-w-full h-auto rounded-lg shadow-sm"
            />
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="md:col-span-2 border border-gray-300 dark:border-gray-700 rounded-2xl p-6 bg-gray-50 dark:bg-black transition-colors"
        >
          <div className="flex items-center gap-2 mb-2">
            <Users className="w-6 h-6 text-orange-500 dark:text-orange-400" />
            <h3 className="text-xl font-semibold text-orange-600 dark:text-orange-400">
              Alumni Network and Job Listings
            </h3>
          </div>
          <p className="text-gray-700 dark:text-gray-300 text-sm">
            The alumni network you always wished for in college. We provide a dedicated platform
            where students connect, collaborate on projects, start agencies, and join hackathons.
            Our HR team also posts job updates you can apply to whenever you're ready.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CohortBenefits;
