import React from "react";
import ReactPlayer from "react-player";
import { motion } from "framer-motion";

const FreeAPIVideo = () => {
  return (
    <motion.div
      className="aspect-video"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <ReactPlayer
        url="https://www.youtube.com/watch?v=DxedlhTyR7Q"
        width="100%"
        height="100%"
        controls
      />
    </motion.div>
  );
};

export default FreeAPIVideo;
