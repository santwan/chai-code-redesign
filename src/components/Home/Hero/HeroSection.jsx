import { motion } from 'framer-motion';
import { Users, GitBranch, Video, MessageSquare, Sparkles } from "lucide-react";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 80 } },
};

const HeroSection = () => {

  const baseBadgeClass =
  "flex items-center gap-2 px-4 py-2 rounded-full " +
  "bg-zinc-100 text-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 " +
  "border dark:border-transparent border-zinc-200 dark:hover:border-orange-800 shadow-sm " +
  "hover:scale-105 transition-all cursor-pointer duration-300 dark:hover:animate-pulse";

  return (
    <motion.section
      initial="hidden"
      animate="show"
      variants={containerVariants}
      className="h-screen pt-20 md:h-auto md:pt-32 lg:pt-45 pb-5 flex flex-col items-center justify-center text-center px-4 bg-white text-black dark:bg-black dark:text-white transition-colors duration-300"
    >
      {/* Trust Badge */}
      <motion.div variants={fadeUp} className="relative flex items-center justify-center m-4 px-1 py-1">
        <div className="absolute inset-0 glow-border-rainbow rounded-full"></div>
        <div className="dark:border-white rounded-full text-sm font-medium text-gray-800 dark:text-gray-300 bg-white dark:bg-black lg:text-base 2xl:text-xl md:font-semibold px-4 py-1 z-10 relative">
          <p className="font font-mono">
            Trusted by
            <span className="text-orange-500 font-bold px-2 dark:text-red-500">1.5M</span>
            Code Learners
          </p>
        </div>
      </motion.div>

      {/* Main Heading (LCP Optimized - NO animation) */}
      <h1 className="max-w-full text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-300 transition-all duration-1000 ease-out transform hover:scale-105 hover:brightness-110">
        <div className="flex flex-col items-center md:flex-row md:justify-center md:gap-3">
          <span className="sm:w-full text-5xl font-semibold lg:font-bold bg-gradient-to-br from-orange-700 via-amber-300 to-orange-600 md:tracking-wide md:text-6xl 2xl:text-7xl text-transparent bg-clip-text">
            Consistency
          </span>
          <span className="text-5xl md:text-6xl 2xl:text-7xl font-bold">and</span>
          <span className="text-5xl md:text-6xl 2xl:text-7xl font-semibold bg-gradient-to-bl from-orange-600 via-amber-300/70 to-orange-700 lg:font-bold tracking-wide text-transparent bg-clip-text">
            Collaboration
          </span>
        </div>
      </h1>

      {/* Subheading */}
      <motion.div variants={fadeUp} className="text-2xl dark:text-orange-100/95 font-extrabold lg:text-3xl 2xl:text-4xl font-mono px-3 md:px-0 pt-5">
        Fuel Your Coding Journey with Community
      </motion.div>

      {/* Paragraph */}
      <p className="mt-6 md:text-lg max-w-2xl text-gray-700 dark:text-gray-300">
        Content is everywhere, we provide a learning experience that is unmatched. Bounties, peer learning,
        code reviews, virtual hostel, alumni network, doubt sessions, group projects, and more.
      </p>

      {/* CTA Button */}
      <motion.a
        variants={fadeUp}
        href="https://courses.chaicode.com/learn"
        className="mt-8 inline-flex items-center justify-center px-5 pt-3 pb-4 border border-orange-500 text-black dark:text-white rounded-md text-lg lg:text-xl font-semibold hover:bg-orange-500 hover:scale-105 transition"
      >
        Check all Live Cohorts
        <span className="ml-2 w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
      </motion.a>

      <div className="hidden md:flex flex-wrap gap-4 py-5">
      <div className={`${baseBadgeClass} hover:shadow-orange-500/20`}>
        <Users className="text-orange-500" size={18} />
        <span className="text-sm font-medium">Peer learning</span>
      </div>

      <div className={`${baseBadgeClass} hover:shadow-yellow-400/20`}>
        <GitBranch className="text-yellow-400" size={18} />
        <span className="text-sm font-medium">Code reviews</span>
      </div>

      <div className={`${baseBadgeClass} hover:shadow-orange-500/20`}>
        <Video className="text-orange-500" size={18} />
        <span className="text-sm font-medium">Virtual hostel</span>
      </div>

      <div className={`${baseBadgeClass} hover:shadow-yellow-400/20`}>
        <MessageSquare className="text-yellow-400" size={18} />
        <span className="text-sm font-medium">Doubt sessions</span>
      </div>

      <div className={`${baseBadgeClass} hover:shadow-yellow-400/20`}>
        <Sparkles className="text-yellow-400" size={18} />
        <span className="text-sm font-medium">Bounties</span>
      </div>
    </div>
    </motion.section>
  );
};

export default HeroSection;
