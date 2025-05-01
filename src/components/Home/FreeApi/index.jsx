import React from "react";
import { motion } from "framer-motion";
import { BookOpenCheck, Code2, MonitorSmartphone, Rocket } from "lucide-react";
import FreeAPIVideo from "./FreeAPIVideo";

const FreeAPISection = () => {
  return (
    <section className="bg-white dark:bg-black text-black dark:text-white py-16 px-5 transition-colors duration-300">

        <span className="absolute left-0 w-full h-1 
              rounded-full animate-pulse 
              bg-gradient-to-r dark:from-orange-950/80 via-orange-500 dark:to-orange-950/80">
        </span>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10  items-center py-15">
        
            {/* Left Content */}
            <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
            >
                <h2 className="text-4xl md:text-5xl font-bold font-handwriting mb-4">
                    <span className="text-orange-500">FreeAPI</span> - Open Source
                </h2>

                <h3 className="text-2xl font-semibold font-mono mb-4 flex flex-col md:flex-row md:items-center gap-2 justify-center md:justify-start">
                    <BookOpenCheck className="w-10 h-10 text-yellow-400 mx-auto md:mx-0" />
                    Unlock Your Potential with Our API Hub
                </h3>

                <div className="w-full md:w-7/8 mx-auto md:mx-0">
                    <p className="dark:text-gray-300 font-serif text-sm leading-relaxed space-y-2">
                    <span className="flex items-start gap-2">
                        <Code2 className="w-8 h-10 text-red-500 mt-[2px]" />
                        <span>
                        Our API Hub is designed to streamline your learning experience in API handling across various programming languages.
                        </span>
                    </span>

                    <span className="flex items-start gap-2 mt-2 ">
                        <MonitorSmartphone className="w-8 h-10 text-indigo-400 mt-[2px]" />
                        <span>
                        With this resource, you can effortlessly build and showcase your front-end portfolio in both web and mobile applications.
                        </span>
                    </span>

                    <span className="flex items-start gap-2 mt-2 ">
                        <Rocket className="w-5 h-8 text-green-400 mt-[2px]" />
                        <span>
                        Join us to enhance your skills and take your coding projects to the next level!
                        </span>
                    </span>
                    </p>
                </div>

                <div className="mt-6">
                    <a
                    href="https://freeapi.hashnode.space/api-guide/apireference/getARandomQuote"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block border-2 border-orange-400 text-lg font-semibold px-6 py-3 rounded-md bg-orange-500 hover:scale-105 hover:bg-orange-400 transition active:scale-90"
                    >
                    Check FreeAPI Docs
                    </a>
                </div>
            </motion.div>

            {/* Right: Video */}
            <FreeAPIVideo />
            
        </div>
        <span className="absolute left-0 w-full h-1 
              rounded-full animate-pulse 
              bg-gradient-to-r dark:from-orange-950/80 via-orange-500 dark:to-orange-950/80">
        </span>
    </section>
  );
};

export default FreeAPISection;
