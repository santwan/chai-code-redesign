import React from "react";
import BenefitCard from "./BenefitCard.jsx";
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

const CohortBenefits = () => {
  return (
    <section className="bg-black text-white py-20 px-5">
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h2 className="text-4xl font-bold mb-2">Key Benefits of Cohorts</h2>
        <p className="text-gray-400 text-sm max-w-2xl mx-auto">
          Cohorts are best way to learn because you finish the course in a timely manner
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {benefits.map((benefit, index) => (
          <BenefitCard key={index} {...benefit} />
        ))}

        <div className="md:col-span-1 border border-gray-600 rounded-2xl flex items-center justify-center h-full bg-black p-6">
          <div className="text-gray-400 text-sm text-center">
            {/* Replace below with actual image */}
            <span>[Student collage image goes here]</span>
          </div>
        </div>

        <div className="md:col-span-2 border border-gray-600 rounded-2xl p-6 bg-black">
          <div className="flex items-center gap-2 mb-2">
            <Users className="w-6 h-6 text-orange-400" />
            <h3 className="text-xl font-semibold text-orange-400">
              Alumni Network and job listings
            </h3>
          </div>
          <p className="text-gray-300 text-sm">
            The alumni Network that you always wished for in your college. We have a dedicated
            platform where students get to know each other, do projects, make agencies and join
            Hackathons. Our HR team also post regular job updates that you can apply directly
            whenever you are ready.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CohortBenefits;
