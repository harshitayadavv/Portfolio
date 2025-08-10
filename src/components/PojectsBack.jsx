import React from "react";
import { motion } from "framer-motion";

const ProjectsBack = () => {
  return (
    <div className="absolute inset-0 overflow-hidden bg-black">
      {/* Pure black background - no gradients */}
      <div className="absolute inset-0 bg-black" />
      
      {/* Minimal particles only */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 h-0.5 bg-white/10 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 0.3, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 8,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsBack;