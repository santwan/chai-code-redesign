import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import AnimatedOnScroll from "../../AnimatedOnScroll.jsx";
import TweetEmbed from "./TweetEmbed.jsx";

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

  // Resize handling using ResizeObserver for better reactivity
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

  // Animate on index change
  useEffect(() => {
    animate(x, -currentIndex * containerWidth, {
      type: "spring",
      stiffness: 300,
      damping: 20,
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
    <AnimatedOnScroll
      animation="zoomIn"
      className="w-full pb-4 md:pt-16 flex flex-col items-center"
    >
      <p className="mb-2 text-[14px] md:text-base tracking-wide text-center text-gray-400">
        Love that we get from our Community
      </p>
      <h2 className="text-[28px] md:text-3xl font-bold text-center mb-5 md:mb-10 tracking-wider">
        ❤️ What People Are Saying
      </h2>

      {isMobile ? (
        <div ref={containerRef} className="w-full overflow-hidden relative pt-4">
          <motion.div
            ref={tweetContainerRef}
            className="flex"
            style={{
              x,
              width: `${tweets.length * 100}%`,
            }}
            drag="x"
            dragConstraints={{
              left: -containerWidth * (tweets.length - 1),
              right: 0,
            }}
            dragElastic={0.2}
            onDragStart={() => setIframePointerEvents(false)}
            onDragEnd={(e, info) => {
              handleDragEnd(e, info);
              setIframePointerEvents(true);
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
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
              <div
                key={index}
                className={`w-3 h-3 rounded-full mx-1 cursor-pointer transition-all duration-200 ${
                  index === currentIndex ? "bg-orange-500 scale-110" : "bg-gray-700"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
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

      <div className="m-2 md:m-6 p-4">
        <button className="bg-orange-600 text-white font-bold py-3 px-6 md:py-4 md:px-10 rounded-full transition duration-300 ease-in-out transform active:scale-95 hover:scale-105">
          Join Cohorts Live Classes
        </button>
      </div>
    </AnimatedOnScroll>
  );
};

export default TweetSection;
