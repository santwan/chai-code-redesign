import React, { useState } from "react";
import { motion } from "framer-motion";
import ReactPlayer from "react-player";

const CohortCard = ({ title, description, price, oldPrice, cta, video, link }) => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX || e.touches?.[0]?.clientX) - rect.left) / rect.width;
    const y = ((e.clientY || e.touches?.[0]?.clientY) - rect.top) / rect.height;
    const rotateX = (y - 0.5) * -20;
    const rotateY = (x - 0.5) * 20;
    setRotate({ x: rotateX, y: rotateY });
  };

  const resetRotation = () => {
    setRotate({ x: 0, y: 0 });
  };

  const handleBuy = () => {
    window.open(link, "_blank"); 
  };

  return (
    <motion.div
      className="relative hover:scale-110 rounded-2xl p-[2px] bg-gradient-to-br from-orange-600 via-yellow-400 to-orange-600 shadow-[0_0_30px_#ff8800aa] transition-all"
      onMouseMove={handleMove}
      onMouseLeave={resetRotation}
      onTouchMove={handleMove}
      onTouchEnd={resetRotation}
      style={{ perspective: 1000 }}
    >
      <motion.div
        style={{
          rotateX: rotate.x,
          rotateY: rotate.y,
          transformStyle: "preserve-3d",
        }}
        className="rounded-2xl bg-white dark:bg-black h-auto max-w-[300px] p-4 transition-all"
      >
        <div className="aspect-video mb-4 border border-orange-400/60">
          <ReactPlayer url={video} width="100%" height="100%" controls />
        </div>

        <h3 className="text-md font-semibold mb-1 mt-5">{title}</h3>
        <p className="text-gray-200 text-xs mb-3">{description}</p>

        <div className="flex items-center space-x-2 mb-3">
          <span className="text-lg font-bold">{price}</span>
          <span className="text-gray-200 text-sm line-through">{oldPrice}</span>
        </div>

        <button
          onClick={handleBuy}
          className="w-full bg-orange-400 text-black font-bold py-2 rounded hover:bg-orange-500 transition duration-300 ease-in-out transform active:scale-95"
        >
          {cta}
        </button>
      </motion.div>
    </motion.div>
  );
};

export default CohortCard;
