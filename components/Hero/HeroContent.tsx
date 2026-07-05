"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import TypingText from "./TypingText";

export default function HeroContent() {
  return (
    <div className="text-center lg:text-left">

      {/* Greeting */}

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-cyan-400 text-lg md:text-xl font-medium"
      >
        Hey, I'm
      </motion.p>

      {/* Name */}

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="
          mt-3
          text-5xl
          md:text-6xl
          lg:text-7xl
          font-black
          text-white
          leading-tight
        "
      >
        Gomti Kumari
      </motion.h1>

      {/* Role */}

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="
          mt-6
          text-2xl
          md:text-3xl
          font-semibold
          text-gray-200
        "
      >
        Aspiring Data Scientist & ML Engineer
      </motion.h2>

      {/* Status */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="
          mt-5
          inline-flex
          items-center
          gap-2
          px-4
          py-2
          rounded-full
          border
          border-emerald-500/30
          bg-emerald-500/10
          text-emerald-400
          text-sm
        "
      >
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>

        Open to Data Science & ML Opportunities
      </motion.div>

      {/* Typing */}

      <div className="mt-8">
        <TypingText />
      </div>

      {/* Description */}

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="
          mt-8
          text-lg
          leading-8
          text-gray-400
          max-w-xl
        "
      >
        Building intelligent systems that transform
        data into real-world impact through Machine Learning,
        Predictive Analytics and Artificial Intelligence.
      </motion.p>

      {/* Buttons */}

      <div className="flex flex-wrap justify-center lg:justify-start gap-5 mt-10">

        <a
         href="#projects"
          className="
          px-8
          py-4
          rounded-2xl
          bg-gradient-to-r
          from-cyan-400
          to-blue-500
          font-semibold
          text-black
          transition-all
          duration-300
          hover:scale-105
          hover:shadow-[0_0_40px_rgba(34,211,238,0.5)]
          "
        >
          View Projects
        </a>


        <a
        href="/assets/resume.pdf"
          className="
          px-8
          py-4
          rounded-2xl
          border
          border-cyan-500/60
          bg-white/5
          backdrop-blur-lg
          hover:bg-cyan-500/10
          hover:border-cyan-400
          transition-all
          duration-300
          hover:scale-105
          flex
          items-center
          gap-3
          "
        >
          <FaDownload />

          Resume
        </a>

      </div>

      {/* Social */}

      <div className="flex justify-center lg:justify-start gap-6 mt-10 text-3xl">

        <a
          href="https://github.com/Yehmeg"
          
          target="_blank"
  className="
    w-14
    h-14
    rounded-full
    bg-white/5
    border
    border-white/10
    backdrop-blur-xl
    flex
    items-center
    justify-center
    text-2xl
    hover:scale-110
    hover:border-cyan-400
    hover:text-cyan-400
    transition-all
    duration-300
"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/gomti-kumari-05bab4214/"
          target="_blank"
  className="
    w-14
    h-14
    rounded-full
    bg-white/5
    border
    border-white/10
    backdrop-blur-xl
    flex
    items-center
    justify-center
    text-2xl
    hover:scale-110
    hover:border-cyan-400
    hover:text-cyan-400
    transition-all
    duration-300
"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://leetcode.com/u/Gomtiii/"
          target="_blank"
  className="
    w-14
    h-14
    rounded-full
    bg-white/5
    border
    border-white/10
    backdrop-blur-xl
    flex
    items-center
    justify-center
    text-2xl
    hover:scale-110
    hover:border-cyan-400
    hover:text-cyan-400
    transition-all
    duration-300
"
        >
          <SiLeetcode />
        </a>

      </div>

    </div>
  );
}