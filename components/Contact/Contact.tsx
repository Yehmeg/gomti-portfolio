"use client";

import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin, FaFileDownload } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-32 px-6"
    >
      <div className="max-w-5xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
            rounded-[40px]
            border
            border-white/10
            bg-white/5
            backdrop-blur-xl
            p-12
            text-center
          "
        >

          <h2 className="text-5xl font-black">
            Let's Build Something Amazing
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto leading-8">
            I'm always interested in Machine Learning, Data Science,
            AI Research, internships, collaborations, and exciting
            opportunities.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mt-12">

            <a
              href="mailto:gomtikumari26@gmail.com"
              className="px-6 py-4 rounded-2xl bg-cyan-500 text-black font-semibold hover:scale-105 transition"
            >
              <FaEnvelope className="inline mr-2" />
              Email
            </a>

            <a
              href="https://github.com/Yehmeg"
              target="_blank"
              className="px-6 py-4 rounded-2xl border border-cyan-500 hover:bg-cyan-500/10 transition"
            >
              <FaGithub className="inline mr-2" />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/gomti-kumari-05bab4214/"
              target="_blank"
              className="px-6 py-4 rounded-2xl border border-cyan-500 hover:bg-cyan-500/10 transition"
            >
              <FaLinkedin className="inline mr-2" />
              LinkedIn
            </a>

            <a
              href="https://leetcode.com/u/Gomtiii/"
              target="_blank"
              className="px-6 py-4 rounded-2xl border border-cyan-500 hover:bg-cyan-500/10 transition"
            >
              <SiLeetcode className="inline mr-2" />
              LeetCode
            </a>

            <a
              href="/assets/Resume.pdf"
              download
              className="px-6 py-4 rounded-2xl border border-cyan-500 hover:bg-cyan-500/10 transition"
            >
              <FaFileDownload className="inline mr-2" />
              Resume
            </a>

          </div>

        </motion.div>

      </div>
    </section>
  );
}