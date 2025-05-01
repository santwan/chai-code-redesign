import { motion } from "framer-motion";

// Define logo assets and custom heights
const logos = [
  { src: "/logos/google.svg", name: "Google", height: "h-17" },
  { src: "/logos/spotify.svg", name: "Spotify", height: "h-42" },
  { src: "/logos/instagram.svg", name: "Instagram", height: "h-18" },
  { src: "/logos/microsoft.svg", name: "Microsoft", height: "h-46" },
  { src: "/logos/angular.svg", name: "Angular", height: "h-40" },
  { src: "/logos/salesforce.svg", name: "Salesforce", height: "h-30" },
  { src: "/logos/netflix.svg", name: "Netflix", height: "h-40" },
  { src: "/logos/airbnb.svg", name: "Airbnb", height: "h-25" },
  { src: "/logos/tinder.svg", name: "Tinder", height: "h-36" },
];

const LogoCarousel = () => {
  const duplicatedLogos = [...logos, ...logos]; // To make it loop seamlessly

  return (
    <section className="dark:bg-black py-16 overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-10 px-4">
        <h2 className="text-xl md:text-2xl font-semibold leading-relaxed text-center text-gray-800 dark:text-gray-200">
          Our learners don’t just land roles at top tech companies —<br className="hidden md:block" />
          they build funded startups, launch products, and lead from the front.
        </h2>
      </div>

      {/* Carousel */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex w-max space-x-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 25,
            ease: "linear",
          }}
        >
          {duplicatedLogos.map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="min-w-[160px] h-[100px] rounded-xl flex items-center justify-center p-4"
            >
              <img
                src={logo.src}
                alt={`${logo.name} logo`}
                className={`w-auto ${logo.height} object-contain hover:scale-75 transition duration-300`}
                loading="lazy"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LogoCarousel;
