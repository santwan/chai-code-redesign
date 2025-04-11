import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect } from "react";

// Predefined animation styles
const variants = {
  fadeUp: {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
  },
  zoomIn: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 },
  },
  fadeLeft: {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  },
  fadeRight: {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 50 },
  },
};

const AnimatedOnScroll = ({
  children,
  animation = "fadeUp",
  delay = 0,
  duration = 0.6,
  once = false,
  className = "",
}) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: 0.3 });

  const variant = variants[animation] || variants.fadeUp;

  useEffect(() => {
    if (isInView) {
      controls.start(variant.animate);
    } else {
      controls.start(variant.exit);
    }
  }, [isInView, controls, variant]);

  return (
    <motion.div
      ref={ref}
      initial={variant.initial}
      animate={controls}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedOnScroll;
