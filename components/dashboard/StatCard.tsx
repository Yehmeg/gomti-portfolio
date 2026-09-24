"use client";

import { motion } from "framer-motion";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  color?: string;
  compact?: boolean;
  
}

export default function StatCard({
  title,
  value,
  icon,
  color = "cyan",
  compact = false,
  
}: StatCardProps) {
  return (
    <motion.div
      whileHover={compact ? {} : {
        y: -5,
        scale: 1.02,
      }}
      transition={{
        duration: 0.25,
      }}
      className={`
        rounded-lg
        border
        backdrop-blur-xl
        transition-all
        ${compact ? "p-2" : "p-5"}
        ${
          color === "yellow"
            ? "border-yellow-500/20 bg-yellow-500/5 hover:border-yellow-400"
            : "border-cyan-500/20 bg-cyan-500/5 hover:border-cyan-400"
        }
      `}
    >
      <div
        className={`${
          color === "yellow"
            ? "text-yellow-400"
            : "text-cyan-400"
        } ${compact ? "text-base" : "text-2xl"}`}
      >
        {icon}
      </div>

      <h3
        className={`
          mt-1
          font-black
          ${compact ? "text-xl" : "text-4xl"}
        `}
      >
        {value}
      </h3>

      <p
        className={`
          mt-0.5
          uppercase
          tracking-[0.15em]
          text-gray-400
          ${compact ? "text-[9px]" : "text-xs"}
        `}
      >
        {title}
      </p>
    </motion.div>
  );
}