"use client";

import { motion } from "framer-motion";
import { FaCalendarAlt, FaStar, FaExternalLinkAlt } from "react-icons/fa";

interface Props {
  item: any;
}

export default function EducationCard({ item }: Props) {
  const Icon = item.icon;

  return (
    <motion.div
      initial={{ opacity: 0, x: 120 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -120 }}
      transition={{
        duration: 0.45,
        ease: "easeInOut",
      }}
      className="
        relative
        rounded-[34px]
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        p-10
        min-h-[500px]
        overflow-hidden
      "
    >
      {/* Badge */}
      {item.badge && (
        <div
          className="
            absolute
            top-8
            right-8
            px-4
            py-2
            rounded-full
            bg-cyan-500/15
            border
            border-cyan-400/20
            text-cyan-300
            text-xs
            font-semibold
            tracking-[0.18em]
          "
        >
          {item.badge}
        </div>
      )}

      {/* Icon */}
      <div
        className={`
          w-20
          h-20
          rounded-3xl
          flex
          items-center
          justify-center
          shadow-lg
          border
          ${
            item.color === "cyan"
              ? "bg-gradient-to-br from-cyan-500/20 to-blue-500/10 border-cyan-400/20"
              : "bg-gradient-to-br from-purple-500/20 to-pink-500/10 border-purple-400/20"
          }
        `}
      >
        <Icon
          className={`text-4xl ${
            item.color === "cyan"
              ? "text-cyan-400"
              : "text-purple-300"
          }`}
        />
      </div>

{item.isCollege ? (
  <>
    <p className="mt-8 text-xl text-cyan-300 font-semibold">
      {item.title}
    </p>

    <h2 className="mt-3 text-4xl font-black leading-tight">
      {item.subtitle}
    </h2>

    <p className="mt-8 text-lg text-gray-400">
      {item.institute}
    </p>

    <div className="flex flex-wrap items-center gap-6 mt-10">
      <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
        <p className="text-xs text-gray-500 uppercase">
          Academic Year
        </p>

        <h3 className="mt-3 flex items-center gap-2 text-xl font-bold">
          <FaCalendarAlt className="text-cyan-400" />
          {item.duration}
        </h3>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
        <p className="text-xs text-gray-500 uppercase">
          CGPA
        </p>

        <h3 className="mt-3 flex items-center gap-2 text-xl font-bold">
          <FaStar className="text-yellow-400" />
          {item.grade}
        </h3>
      </div>
      {item.profile && (
  <a
    href={item.profile}
    target="_blank"
    rel="noopener noreferrer"
    className="
      h-[90px]
      px-7
      rounded-2xl
      border
      border-cyan-400/20
      bg-cyan-500/10
      hover:bg-cyan-500/20
      transition-all
      duration-300
      flex
      flex-col
      justify-center
    "
  >
    <p className="text-xs uppercase tracking-widest text-cyan-300">
      Profile
    </p>

    <p className="mt-2 font-semibold text-white flex items-center gap-2">
      View Academic Profile ↗
    </p>
  </a>
)}
    </div>

  </>
) : (
  <>
    <h2 className="mt-8 text-4xl font-black">
      School Education
    </h2>

    <div className="grid md:grid-cols-2 gap-6 mt-10">

      {item.school.map((edu: any) => (

        <div
          key={edu.class}
          className="rounded-2xl border border-white/10 bg-white/5 p-6"
        >
          <h3 className="text-2xl font-bold">
            {edu.class}
          </h3>

          <p className="text-gray-400 mt-2">
            {edu.school}
          </p>

          <div className="flex justify-between mt-8">

            <div>
              <p className="text-xs uppercase text-gray-500">
                Score
              </p>

              <p className="text-xl font-bold mt-2 text-cyan-300">
                {edu.marks}
              </p>
            </div>

            <div>
              <p className="text-xs uppercase text-gray-500">
                Year
              </p>

              <p className="text-xl font-bold mt-2">
                {edu.year}
              </p>
            </div>

          </div>

        </div>

      ))}

    </div>
  </>
)}
    </motion.div>
  );
}