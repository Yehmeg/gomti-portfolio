"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroImage() {
  return (
    <div className="relative flex items-center justify-center">

      {/* Background Glow */}

      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="
          absolute
          w-[420px]
          h-[420px]
          rounded-full
          bg-cyan-500/20
          blur-[90px]
        "
      />

      {/* Purple Glow */}

      <motion.div
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="
          absolute
          w-[320px]
          h-[320px]
          rounded-full
          bg-purple-500/20
          blur-[80px]
        "
      />

      {/* Rotating Ring */}

      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        }}
        className="
          absolute
          w-[330px]
          h-[330px]
          rounded-full
          border-2
          border-dashed
          border-cyan-400/40
        "
      />

      {/* Photo */}

      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
        }}
        className="
relative
w-[300px]
h-[300px]
md:w-[380px]
md:h-[380px]
rounded-full
overflow-hidden
border-[5px]
border-cyan-400
shadow-[0_0_80px_rgba(34,211,238,0.45)]
bg-[#0B1220]
"
      >
        <Image
          src="/assets/profile.jpg"
          alt="Gomti Kumari"
          fill
          className="object-cover"
          priority
        />
      </motion.div>

    </div>
  );
}