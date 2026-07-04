"use client";

import { motion } from "framer-motion";

const timeline = [
  {
    year: "2024",
    title: "Started AI Journey",
    desc: "Began exploring Machine Learning, Data Science and Python while pursuing B.Tech in CSE (AI).",
  },
  {
    year: "2025",
    title: "Machine Learning Projects",
    desc: "Built AI solutions including Air Quality Prediction, Road Accident Severity Prediction and Phishing Detection.",
  },
  {
    year: "2026",
    title: "IEEE Research Publication",
    desc: "Published research paper on Air Quality Prediction using Machine Learning and satellite data.",
  },
  {
    year: "Now",
    title: "Open to Opportunities",
    desc: "Looking for internships and opportunities in Data Science, Machine Learning and AI.",
  },
];

export default function Timeline() {
  return (
    <section
      id="timeline"
      className="relative py-32 px-6"
    >
      <div className="max-w-5xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-black text-center mb-20"
        >
          My Journey
        </motion.h2>

        <div className="relative">

          {/* Vertical Line */}

          <div className="absolute left-6 top-0 h-full w-[3px] bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-500 rounded-full" />

          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                x: 50,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
              }}
              className="relative pl-20 pb-16"
            >
              {/* Circle */}

              <div className="absolute left-2 top-2 w-8 h-8 rounded-full bg-cyan-400 border-4 border-[#050816] shadow-[0_0_20px_rgba(34,211,238,0.8)]" />

              <div
                className="
                  rounded-3xl
                  bg-white/5
                  backdrop-blur-xl
                  border
                  border-white/10
                  p-8
                  hover:border-cyan-400
                  transition
                  duration-300
                "
              >
                <p className="text-cyan-400 font-bold text-lg">
                  {item.year}
                </p>

                <h3 className="text-2xl font-bold mt-2">
                  {item.title}
                </h3>

                <p className="text-gray-400 mt-4 leading-8">
                  {item.desc}
                </p>
              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}