import { motion } from "framer-motion";
import { Youtube, ArrowRight } from "lucide-react";
import React from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.2 * i, duration: 0.6, ease: "easeOut" },
  }),
};

const channels = [
  {
    name: "Chai aur Code",
    username: "@chaiaurcode",
    subs: "600K",
    videos: "545",
    lang: "हिंदी",
    link: "https://www.youtube.com/@chaiaurcode",
  },
  {
    name: "Hitesh Choudhary",
    username: "@HiteshCodeLab",
    subs: "987K",
    videos: "1.6K",
    lang: "English",
    link: "https://www.youtube.com/@HiteshCodeLab",
  },
];

export default function YouTubeChannelsSection() {
  return (
    <motion.section
      className="dark:bg-black dark:text-white pt-5 pb-20 overflow-hidden"
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.3 }}
      aria-labelledby="youtube-section-heading"
    >
      {/* Header */}
      <motion.div
        className="text-center mb-12 px-4 relative"
        variants={fadeUp}
      >
        <h2
          id="youtube-section-heading"
          className="text-3xl sm:text-4xl font-bold relative z-10"
        >
          Explore Our Engaging YouTube Channels
        </h2>
        <p className="text-gray-300 mt-2">
          Follow our channels for free learning resources.
        </p>
        <div
          className="absolute inset-x-0 top-10 h-20 bg-orange-400 opacity-20 blur-2xl rounded-full mx-auto w-1/2"
          aria-hidden="true"
        />
      </motion.div>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        {/* Full Image */}
        <motion.img
          src="hc-laptop.png"
          alt="Hitesh Choudhary presenting his YouTube channel on a laptop"
          className="w-full max-w-lg mx-auto rounded-xl shadow-lg"
          variants={fadeUp}
        />

        {/* Channel Info */}
        <div className="space-y-6">
          {channels.map((channel, idx) => (
            <motion.div
              key={idx}
              className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-[#1f1f1f] dark:to-[#121212] rounded-xl border border-gray-700 p-6 flex flex-col gap-3"
              custom={idx}
              variants={fadeUp}
            >
              <div className="flex items-center gap-3 text-orange-500 font-bold">
                <Youtube size={20} aria-hidden="true" />
                <span>{channel.name}</span>
              </div>
              <p className="text-gray-300 text-sm">{channel.username}</p>

              <div className="flex gap-3 text-xs">
                <span className="bg-white/10 px-3 py-1 rounded-full">
                  {channel.subs} subscribers
                </span>
                <span className="bg-white/10 px-3 py-1 rounded-full">
                  {channel.videos} videos
                </span>
              </div>

              <p className="text-orange-300 font-semibold">{channel.lang}</p>

              <motion.a
                href={channel.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${channel.name} YouTube channel`}
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 transition text-black font-semibold px-4 py-2 rounded-md mt-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Visit Channel <ArrowRight size={16} aria-hidden="true" />
              </motion.a>
            </motion.div>
          ))}

          {/* CTA Button */}
          <motion.div
            className="pt-4 text-center"
            variants={fadeUp}
            custom={channels.length}
          >
            <motion.button
              className="bg-orange-500 hover:bg-orange-600 px-6 py-2 rounded-full font-semibold text-black inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Explore all tutorials"
              role="button"
            >
              <code aria-hidden="true">&lt;/&gt;</code> Explore All Tutorials
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
