"use client";

import { motion } from "framer-motion";

const stats = [
  {
    value: "9.13",
    label: "CGPA",
  },

  {
    value: "IEEE",
    label: "Author",
  },

  {
    value: "3+",
    label: "AI Projects",
  },

  {
    value: "Finalist",
    label: "Hackathons",
  },
];

export default function Stats() {
  return (
    <div className="flex flex-wrap justify-center gap-10 mt-12">
      {stats.map((item, index) => (
        <motion.div
          key={index}
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: index * 0.2,
          }}
          className="
          text-center
          px-6
          py-4
          rounded-2xl
          bg-white/5
          backdrop-blur-lg
          border
          border-white/10
          "
        >
          <h3 className="text-2xl font-bold">
            {item.value}
          </h3>

          <p className="text-gray-400">
            {item.label}
          </p>
        </motion.div>
      ))}
    </div>
  );
}