"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Particles from "./Particles";

export default function Background() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

useEffect(() => {
  const move = (e: MouseEvent) => {
    setPosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  window.addEventListener("mousemove", move);

  return () => window.removeEventListener("mousemove", move);
}, []);
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#050816]">

      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, 40, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 15,
        }}
        className="
          absolute
          w-[500px]
          h-[500px]
          rounded-full
          bg-cyan-500/20
          blur-[120px]
          top-0
          left-0
        "
      />
      <motion.div
        animate={{
          x: position.x - 150,
          y: position.y - 150,
        }}
        transition={{
          type: "spring",
          stiffness: 40,
          damping: 20,
        }}
        className="
          absolute
          w-[300px]
          h-[300px]
          rounded-full
          bg-cyan-400/10
          blur-[100px]
          pointer-events-none
        "
      />
      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, -60, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 18,
        }}
        className="
          absolute
          w-[450px]
          h-[450px]
          rounded-full
          bg-purple-600/20
          blur-[120px]
          bottom-0
          right-0
        "
      />

      <div
        className="
          absolute
          inset-0
          opacity-[0.05]
          bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)]
          bg-[size:60px_60px]
        "
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050816]" />
      <Particles />
    </div>

  );
}