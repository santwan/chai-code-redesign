import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function TestimonialCard({ name, role, review, image, children }) {
  const cardRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-50, 50], [15, -15]);
  const rotateY = useTransform(x, [-50, 50], [-15, 15]);

  useEffect(() => {
    setIsMobile(window.matchMedia('(max-width: 768px)').matches);
  }, []);

  const handleMouseMove = (e) => {
    if (isMobile || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const posX = e.clientX - rect.left;
    const posY = e.clientY - rect.top;
    x.set(posX - rect.width / 2);
    y.set(posY - rect.height / 2);
  };

  const resetTilt = () => {
    if (!isMobile) {
      x.set(0);
      y.set(0);
    }
  };

  // ❗️Apply rotate styles only if NOT mobile
  const motionStyle = !isMobile ? { rotateX, rotateY } : {};

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTilt}
      onTouchMove={resetTilt}
      onTouchEnd={resetTilt}
      style={motionStyle}
      className="w-full h-auto rounded-xl border border-orange-400 dark:bg-black/40 backdrop-blur-md shadow-[0_0_20px_#ff9100] transition-transform duration-300 ease-out hover:scale-[1.03]"
    >
      <div className="w-full h-full flex flex-col items-center text-center p-6 gap-4">
        <img
          src={image}
          alt={name}
          className="w-16 h-16 rounded-full object-cover"
          loading="lazy"
        />
        <div>
          <h4 className="font-semibold text-lg">{name}</h4>
          <p className="text-sm text-gray-400">{role}</p>
        </div>
        <p className="text-gray-300 text-sm italic">“{review}”</p>
        {children}
      </div>
    </motion.div>
  );
}
