import React, { useRef, useEffect, useState } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import TweetEmbed from "./TweetEmbed.jsx";

const MobileCarousel = ({ tweets }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  const tweetContainerRef = useRef(null);
  const x = useMotionValue(0);
  const [containerWidth, setContainerWidth] = useState(0);

  // Get container width on resize
  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    });
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }
    return () => resizeObserver.disconnect();
  }, []);

  // Animate slide
  useEffect(() => {
    animate(x, -currentIndex * containerWidth, {
      type: "spring",
      stiffness: 280,
      damping: 25,
    });
  }, [currentIndex, containerWidth]);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % tweets.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [tweets.length]);

  return (
    <div
      ref={containerRef}
      role="region"
      aria-label="Testimonial carousel"
      className="w-full overflow-hidden relative pt-4"
    >
      <motion.div
        ref={tweetContainerRef}
        className="flex"
        style={{
          x,
          width: `${tweets.length * 100}%`,
        }}
        transition={{ type: "spring", stiffness: 280, damping: 25 }}
      >
        {tweets.map((id) => (
          <div
            key={id}
            className="w-full flex-shrink-0 flex justify-center items-center px-2"
            style={{ width: `${100 / tweets.length}%` }}
          >
            <TweetEmbed tweetId={id} />
          </div>
        ))}
      </motion.div>

      {/* Navigation Dots */}
      <div className="flex justify-center mt-4">
        {tweets.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full mx-1 cursor-pointer transition-all duration-200 ${
              index === currentIndex ? "bg-orange-500 scale-110" : "bg-gray-700"
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to tweet ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default MobileCarousel;
