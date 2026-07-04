"use client";

import { motion } from "framer-motion";
import { FaAward, FaGraduationCap, FaMedal, FaFileAlt } from "react-icons/fa";

export const achievements = [
  {
    title: "Siemens Scholarship Program",
    subtitle: "Scholar (2025–2029)",
    description:
      "Selected for the Siemens Scholarship Program in recognition of academic excellence, leadership potential, and professional development.",
    icon: FaAward,
    color: "cyan",
  },

  {
    title: "IEEE Publication",
    subtitle: "Research Paper Published",
    description:
      "Published a research paper on AI-based Air Quality Prediction using Machine Learning at an IEEE Conference.",
    icon: FaFileAlt,
    color: "purple",
  },

  {
    title: "Katalyst Scholar",
    subtitle: "Leadership & Mentorship Program",
    description:
      "Selected for the Katalyst Scholar Program to receive mentorship, career guidance, technical training, and leadership development.",
    icon: FaGraduationCap,
    color: "cyan",
  },

  {
    title: "SHEFi Season 17",
    subtitle: "Selected Mentee",
    description:
      "Chosen for SHEFi Season 17, a mentorship initiative empowering women in technology through industry mentoring and career development.",
    icon: FaMedal,
    color: "purple",
  },
];
export default function Achievements() {
  return (
    <section
  id="achievements"
  className="py-24 px-6"
>
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-black text-center">
          Achievements
        </h2>

        <p className="text-center text-gray-400 mt-6 mb-20">
          Milestones throughout my AI & Machine Learning journey.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {achievements.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="
                rounded-3xl
                border
                border-white/10
                bg-white/5
                backdrop-blur-xl
                p-8
                text-center
                hover:border-cyan-400
                transition-all
              "
            >
              <div className="text-5xl text-cyan-400 flex justify-center mb-6">
                {(() => {
                  const Icon = item.icon;
                  return <Icon />;
                })()}
              </div>

              <h3 className="text-2xl font-bold">
                {item.title}
              </h3>

              <p className="text-gray-400 mt-4">
                {item.description}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}