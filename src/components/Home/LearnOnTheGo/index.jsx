import React from "react";
import { motion } from "framer-motion";
import FeaturesList from "./FeatureList.jsx";

const LearnOnTheGo = () => {
  return (
    <section className="w-full dark:bg-black py-16 px-6 md:px-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Mobile Image */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="mobile.png"
            alt="ChaiCode Mobile UI"
            className="w-[300px] md:w-[340px] lg:w-[400px]"
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-orange-600 dark:text-orange-400 mb-3">
            Learn on the go
          </h2>
          <p className="dark:text-gray-300 text-black/90 text-sm font-serif max-w-md mx-auto md:mx-0">
            Take your coding journey anywhere with the ChaiCode mobile app. Access
            courses, join live sessions, and connect with the community – all from your pocket.
          </p>

          {/* Feature List */}
          <FeaturesList />

          {/* Store Buttons */}
          <div className="flex gap-4 mt-8 justify-center md:justify-start">
            <a
              href="#"
              className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 rounded-md text-sm font-semibold shadow-md active:scale-95 transition"
            >
              Download on the <br />
              <span className="text-lg font-bold">App Store</span>
            </a>
            <a
              href="#"
              className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 rounded-md text-sm font-semibold shadow-md active:scale-95 transition"
            >
              Get it on <br />
              <span className="text-lg font-bold">Google Play</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LearnOnTheGo;
