import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";

export const Particles = ({ className = "", quantity = 30 }) => {
  const particlesRef = useRef([]);

  useEffect(() => {
    particlesRef.current = Array.from({ length: quantity }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      velocity: Math.random() * 0.5 + 0.2,
    }));
  }, [quantity]);

  return (
    <div className={`fixed inset-0 ${className}`}>
      {particlesRef.current.map((particle, index) => (
        <motion.span
          key={index}
          className="absolute bg-white rounded-full"
          animate={{
            y: ["0%", "100%"],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: particle.velocity * 10,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            left: `${particle.x}%`,
            width: particle.size,
            height: particle.size,
          }}
        />
      ))}
    </div>
  );
};

