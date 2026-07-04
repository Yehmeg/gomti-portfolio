"use client";

import { motion } from "framer-motion";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  color?: string;
  
}

export default function StatCard({
  title,
  value,
  icon,
  color = "cyan",
  

}: StatCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -5,
        scale: 1.02,
      }}
      transition={{
        duration: 0.25,
      }}
      className={`
        rounded-2xl
        border
        p-5
        backdrop-blur-xl
        transition-all
        ${
          color === "yellow"
            ? "border-yellow-500/20 bg-yellow-500/5 hover:border-yellow-400"
            : "border-cyan-500/20 bg-cyan-500/5 hover:border-cyan-400"
        }
      `}
    >
      <div
        className={`text-2xl ${
          color === "yellow"
            ? "text-yellow-400"
            : "text-cyan-400"
        }`}
      >
        {icon}
      </div>

      <h3
        className="
          mt-4
          text-4xl
          font-black
        "
      >
        {value}
      </h3>

      <p
        className="
          mt-1
          uppercase
          tracking-[0.2em]
          text-xs
          text-gray-400
        "
      >
        {title}
      </p>
    </motion.div>
  );
}