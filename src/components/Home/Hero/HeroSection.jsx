import { motion } from 'framer-motion';

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
  return (
    <motion.section
      initial="hidden"
      animate="show"
      variants={containerVariants}
      className="h-screen flex flex-col items-center justify-center text-center px-4 bg-white text-black dark:bg-black dark:text-white transition-colors duration-300"
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
      <motion.div variants={fadeUp} className="text-2xl font-extrabold lg:text-3xl 2xl:text-4xl font-mono lg:pt-5">
        Fuel Your Coding Journey with Community
      </motion.div>

      {/* Paragraph */}
      <p className="mt-6 text-lg font-serif sm:text-xl max-w-2xl text-gray-700 dark:text-gray-300">
        Content is everywhere, we provide a learning experience that is unmatched. Bounties, peer learning,
        code reviews, virtual hostel, alumni network, doubt sessions, group projects, and more.
      </p>

      {/* CTA Button */}
      <motion.a
        variants={fadeUp}
        href="https://courses.chaicode.com/learn"
        className="mt-8 inline-flex items-center justify-center px-6 py-3 border border-yellow-500 text-black dark:text-white rounded-md text-lg lg:text-2xl font-semibold hover:bg-yellow-500 hover:text-black transition"
      >
        Check all Live Cohorts
        <span className="ml-2 w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
      </motion.a>
    </motion.section>
  );
};

export default HeroSection;
