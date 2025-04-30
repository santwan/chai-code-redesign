// components/LogoCarousel.jsx
import { motion } from "framer-motion";

// You can now specify logo path and custom height per logo here
const logos = [
  { src: "/logos/google.svg", height: "h-17" },
  { src: "/logos/spotify.svg", height: "h-42" },
  { src: "/logos/instagram.svg", height: "h-18" },
  { src: "/logos/microsoft.svg", height: "h-46" },
  { src: "/logos/angular.svg", height: "h-40" },
  { src: "/logos/salesforce.svg", height: "h-30" },
  { src: "/logos/netflix.svg", height: "h-40" },
  { src: "/logos/airbnb.svg", height: "h-25" },
  { src: "/logos/tinder.svg", height: "h-36" },
];

const LogoCarousel = () => {
  const duplicatedLogos = [...logos, ...logos]; // For seamless loop

  return (
    <section className="dark:bg-black py-16 overflow-hidden">
      <div className="text-center mb-10 px-4">
      <h2 className="text-xl md:text-2xl font-semibold leading-relaxed text-center text-gray-800 dark:text-gray-200">
        Our learners don’t just land roles at top tech companies —<br className="hidden md:block" />
        they build funded startups, launch products, and lead from the front.
      </h2>

      </div>

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
              key={index}
              className="min-w-[160px] h-[100px]  rounded-xl flex items-center justify-center p-4"
            >
              <img
                src={logo.src}
                alt="Logo"
                className={`w-auto ${logo.height} object-contain hover:scale-75 transition duration-300`}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LogoCarousel;
