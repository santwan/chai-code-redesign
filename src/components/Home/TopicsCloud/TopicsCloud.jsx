import { motion } from "framer-motion";

const topics = [
  "Docker", "MCP Server", "Kubernetes", "Python", "React Native",
  "Django", "NextJS", "TypeScript", "Java", "GoLang",
  "Linux", "GraphQL", "MongoDB", "AWS", "Firebase"
];

const linkMap = {
  Docker: "https://www.youtube.com/results?search_query=docker",
  "MCP Server": "https://www.youtube.com/results?search_query=mcp+server",
  Kubernetes: "https://www.youtube.com/results?search_query=kubernetes",
  Python: "https://www.youtube.com/results?search_query=python",
  "React Native": "https://www.youtube.com/results?search_query=react+native",
  Django: "https://www.youtube.com/results?search_query=django",
  NextJS: "https://www.youtube.com/results?search_query=nextjs",
  TypeScript: "https://www.youtube.com/results?search_query=typescript",
  Java: "https://www.youtube.com/results?search_query=java",
  GoLang: "https://www.youtube.com/results?search_query=golang",
  Linux: "https://www.youtube.com/results?search_query=linux",
  GraphQL: "https://www.youtube.com/results?search_query=graphql",
  MongoDB: "https://www.youtube.com/results?search_query=mongodb",
  AWS: "https://www.youtube.com/results?search_query=aws",
  Firebase: "https://www.youtube.com/results?search_query=firebase",
};

const TopicsCloud = () => {
  const duplicatedTopics = [...topics, ...topics]; // For smooth looping

  return (
    <section className="w-full pb-20 dark:bg-black dark:text-white overflow-hidden">
        <span className="absolute left-0 w-full h-1 
              rounded-full animate-pulse 
              bg-gradient-to-r dark:from-orange-950/80 via-orange-500 dark:to-orange-950/80">
        </span>
      {/* Heading */}
      <div className="text-center mb-10 px-4">
        <h2 className="text-3xl md:text-4xl font-bold pt-15 mb-2 font-sans">Topics Cloud</h2>
        <p className="dark:text-gray-400 font-mono text-sm">
          You can find videos and courses on topics and much more
        </p>
      </div>

      {/* Seamless Marquee */}
      <div className="relative w-full overflow-hidden space-y-10">
        <motion.div
          className="flex w-max space-x-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 40,
            ease: "linear",
          }}
        >
          {duplicatedTopics.map((topic, idx) => (
            <a
              key={`${topic}-${idx}`}
              href={linkMap[topic] || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-black/60 dark:border-white/30 px-4 md:px-10 py-2 md:py-3 rounded-full text-sm md:text-lg font-semibold hover:bg-orange-600 hover:text-white transition whitespace-nowrap"
            >
              {topic}
            </a>
          ))}
        </motion.div>
        <motion.div
          className="flex w-max space-x-4"
          animate={{ x: ["-50%", "0%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 40,
            ease: "linear",
          }}
        >
          {duplicatedTopics.map((topic, idx) => (
            <a
              key={`${topic}-${idx}`}
              href={linkMap[topic] || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-black/60 dark:border-white/30 px-4 md:px-10 py-2 md:py-3 rounded-full text-sm md:text-lg font-semibold hover:bg-orange-600 hover:text-white transition whitespace-nowrap"
            >
              {topic}
            </a>
          ))}
        </motion.div>
        <motion.div
          className="flex w-max space-x-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          }}
        >
          {duplicatedTopics.map((topic, idx) => (
            <a
              key={`${topic}-${idx}`}
              href={linkMap[topic] || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-black/60 dark:border-white/30 px-4 md:px-10 py-2 md:py-3 rounded-full text-sm md:text-lg font-semibold hover:bg-orange-600 hover:text-white transition whitespace-nowrap"
            >
              {topic}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TopicsCloud;
