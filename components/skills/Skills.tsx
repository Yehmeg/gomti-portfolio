"use client";

import { motion } from "framer-motion";

const skills = [
  "Python",
  "Machine Learning",
  "Data Science",
  "C++",
  "R",
  "SQL",
  "Pandas",
  "NumPy",
  "Scikit-Learn",
  "TensorFlow",
  "PyTorch",
  "XGBoost",
  "LightGBM",
  "CatBoost",
  "Git",
  "GitHub",
  "Docker",
  "Tableau",
  
  
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-32 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-5xl font-black text-center mb-6">
          Skills & Technologies
        </h2>

        <p className="text-center text-gray-400 mb-20">
          Technologies I use to build AI-powered solutions.
        </p>

        <div className="flex flex-wrap justify-center gap-5">

          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.05,
              }}
              whileHover={{
                scale: 1.08,
                y: -5,
              }}
              className="
                px-6
                py-4
                rounded-2xl
                bg-white/5
                border
                border-white/10
                backdrop-blur-xl
                text-white
                font-medium
                hover:border-cyan-400
                hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]
                transition-all
                duration-300
              "
            >
              {skill}
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}