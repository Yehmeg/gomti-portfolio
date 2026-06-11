// "use client";

// import { motion } from "framer-motion";
// import { profile } from "@/data/profile";
// import { FaGithub, FaLinkedin } from "react-icons/fa";

// export default function Hero() {
//   return (
//     <section
//       className="
//       min-h-screen
//       flex
//       items-center
//       justify-center
//       bg-black
//       text-white
//       px-6
//       "
//     >
//       <motion.div
//         initial={{ opacity: 0, y: 60 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//         className="text-center"
//       >
//         <h1 className="text-6xl md:text-8xl font-bold">
//           {profile.name}
//         </h1>

//         <h2 className="mt-6 text-2xl md:text-4xl text-gray-300">
//           {profile.tagline}
//         </h2>

//         <div
//           className="
//           mt-10
//           flex
//           justify-center
//           gap-6
//           text-3xl
//           "
//         >
//           <a
//             href={profile.github}
//             target="_blank"
//           >
//             <FaGithub />
//           </a>

//           <a
//             href={profile.linkedin}
//             target="_blank"
//           >
//             <FaLinkedin />
//           </a>
//         </div>
//       </motion.div>
//     </section>
//   );
// }
"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import { profile } from "@/data/profile";

import AuroraBackground from "@/components/Aurora/AuroraBackground";
import Stats from "@/components/Stats/Stats";

import {
  FaGithub,
  FaLinkedin,
  FaDownload,
} from "react-icons/fa";

export default function Hero() {
  return (
    <section
      className="
      relative
      min-h-screen
      overflow-hidden
      bg-[#050816]
      text-white
      flex
      items-center
      justify-center
      px-6
      "
    >
      <AuroraBackground />

      <motion.div
        initial={{
          opacity: 0,
          y: 50,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
        }}
        className="
        relative
        z-10
        text-center
        max-w-5xl
        "
      >
        <div
          className="
          inline-flex
          px-4
          py-2
          rounded-full
          bg-white/10
          backdrop-blur-md
          border
          border-white/10
          mb-6
          "
        >
          IEEE Published Author
        </div>

        <h1
          className="
          text-6xl
          md:text-8xl
          font-extrabold
          "
        >
          {profile.name}
        </h1>

        <h2
          className="
          mt-6
          text-2xl
          md:text-4xl
          text-gray-300
          "
        >
          {profile.tagline}
        </h2>

        <div
          className="
          mt-8
          text-cyan-400
          text-xl
          md:text-3xl
          font-semibold
          "
        >
          <TypeAnimation
            sequence={[
              "Machine Learning",
              2000,
              "Data Science",
              2000,
              "Environmental AI",
              2000,
              "Predictive Analytics",
              2000,
              "AI Research",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </div>

        <div
          className="
          flex
          justify-center
          gap-4
          flex-wrap
          mt-10
          "
        >
          <a
            href="/resume.pdf"
            className="
            flex
            items-center
            gap-2
            px-6
            py-3
            rounded-full
            bg-cyan-500
            hover:bg-cyan-600
            transition
            "
          >
            <FaDownload />
            Resume
          </a>

          <a
            href="#projects"
            className="
            px-6
            py-3
            rounded-full
            border
            border-cyan-500
            hover:bg-cyan-500/10
            transition
            "
          >
            Projects
          </a>
        </div>

        <div
          className="
          flex
          justify-center
          gap-8
          mt-8
          text-3xl
          "
        >
          <a
            href={profile.github}
            target="_blank"
          >
            <FaGithub />
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
          >
            <FaLinkedin />
          </a>
        </div>

        <Stats />
      </motion.div>
    </section>
  );
}