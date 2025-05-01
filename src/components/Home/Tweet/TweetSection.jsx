import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import TweetEmbed from "./TweetEmbed.jsx";
import MobileCarousel from "./MobileCarousel.jsx";

const tweets = [
  "1907673685479018737",
  "1910196260746723481",
  "1909186665014341701",
];

const TweetSection = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  const tweetContainerRef = useRef(null);
  const x = useMotionValue(0);
  const [containerWidth, setContainerWidth] = useState(0);

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

  useEffect(() => {
    animate(x, -currentIndex * containerWidth, {
      type: "spring",
      stiffness: 280,
      damping: 25,
    });
  }, [currentIndex, containerWidth]);

  const setIframePointerEvents = useCallback((enabled) => {
    const iframes = tweetContainerRef.current?.querySelectorAll("iframe");
    iframes?.forEach((iframe) => {
      iframe.style.pointerEvents = enabled ? "auto" : "none";
    });
  }, []);

  const handleDragEnd = useCallback(
    (event, info) => {
      const threshold = containerWidth / 4;
      let newIndex = currentIndex;

      if (info.offset.x < -threshold) {
        newIndex = (currentIndex + 1) % tweets.length;
      } else if (info.offset.x > threshold) {
        newIndex = (currentIndex - 1 + tweets.length) % tweets.length;
      }

      setCurrentIndex(newIndex);
    },
    [currentIndex, containerWidth]
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.3 }}
      className="w-full pb-4 md:pt-16 flex flex-col items-center"
    >
      <p className="mb-2 text-sm md:text-base tracking-wide text-center text-orange-500 font-mono">
        Together, we code. Together, we grow.
      </p>
      <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-6 md:mb-10 tracking-tight leading-snug bg-gradient-to-r from-orange-600 via-yellow-400 to-orange-500 text-transparent bg-clip-text">
        ❤️ Hear What Our Learners Say
      </h2>

      {isMobile ? (
        <MobileCarousel tweets={tweets} />
      ) : (
        <div className="flex w-full justify-center gap-10 flex-wrap">
          {tweets.map((id) => (
            <span
              key={id}
              className="transition-all duration-300 hover:scale-105 hover:shadow-[0_0_50px_rgba(255,150,0,0.7)]"
            >
              <TweetEmbed tweetId={id} />
            </span>
          ))}
        </div>
      )}

      <div className="m-2 md:mt-8 p-4">
        <a
          href="https://courses.chaicode.com/learn"
          className="bg-orange-700 hover:bg-orange-800 text-white font-bold py-3 px-6 md:py-4 md:px-10 rounded-full transition focus:outline-none focus:ring-4 focus:ring-orange-400 focus-visible:ring-2"
          aria-label="Join live cohorts on ChaiCode"
        >
          Join Cohorts Live Classes
        </a>
      </div>
    </motion.div>
  );
};

export default TweetSection;
