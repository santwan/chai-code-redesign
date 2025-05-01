import React, { useRef, useEffect, useState, useCallback } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import TweetEmbed from "./TweetEmbed.jsx";

const MobileCarousel = ({ tweets }) => {
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
    [currentIndex, containerWidth, tweets.length]
  );

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
  );
};

export default MobileCarousel;
