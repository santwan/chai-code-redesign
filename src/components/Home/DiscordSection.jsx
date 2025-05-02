import { motion } from "framer-motion";
import { Users, Sparkles, MessageCircle, Share2 } from "lucide-react";

const DiscordSection = () => {
  return (
    <section className="bg-white dark:bg-black text-black dark:text-white  px-5 transition-colors duration-300">
      
      <div className="max-w-7xl mx-auto">

        <span className="absolute left-0 w-full h-1 
              rounded-full animate-pulse 
              bg-gradient-to-r dark:from-orange-950/80 via-orange-500 dark:to-orange-950/80">
        </span>

        <div className="text-center p-8">
          {/* Badge */}
          <span className="inline-block bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-xs md:text-base font-mono px-3 py-1 rounded-full">
            We Write Code Community
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6 text-center md:text-left"
          >

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold leading-snug">
              Join our <span className="text-orange-500">community</span> where
              <br className="hidden md:block" />
              creativity thrives.
            </h2>

            {/* Key Highlights */}
            <ul className="space-y-2 text-sm md:text-base text-gray-700 dark:text-gray-300 font-medium">
              <li className="flex items-center gap-2">
                <Users className="w-5 h-5 text-orange-500" />
                80,000+ active coders collaborating daily
              </li>
              <li className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-orange-500" />
                Live voice rooms, challenges, and bounties
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-orange-500" />
                Doubt-solving, memes, and motivation in one place
              </li>
              <li className="flex items-center gap-2">
                <Share2 className="w-5 h-5 text-orange-500" />
                Direct updates from mentors and alumni
              </li>
            </ul>

            {/* CTA */}
            <motion.a
              href="https://discord.com/invite/WDrH3zuWFb" 
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.03 }}
              className="inline-block mt-4 bg-orange-500 md:text-lg font-semibold px-6 md:px-8 py-3 rounded-lg shadow hover:bg-orange-400 transition"
            >
              Join Us on Discord
            </motion.a>
          </motion.div>

          {/* Right Box */}
          <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className=" flex items-center justify-center bg-gray-50 dark:bg-[#111] "
              >
              <img
                  src="hitesh-discord.webp"
                  alt="Join on Discord"
                  className="h-auto w-auto object-contain rounded-lg"
              />
          </motion.div>
        </div>
        
      </div>


    </section>

    
  );
};

export default DiscordSection;
