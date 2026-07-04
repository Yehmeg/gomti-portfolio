"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";

const navLinks = [
  // { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Research", href: "#research" },
  { name: "Education", href: "#education" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7 }}
      className="
        fixed
        top-5
        left-1/2
        -translate-x-1/2
        z-50
        w-[95%]
        max-w-7xl
      "
    >
      <nav
        className="
          flex
          items-center
          justify-between
          px-8
          py-4
          rounded-2xl
          border
          border-white/10
          bg-white/5
          backdrop-blur-xl
          shadow-2xl
        "
      >
        {/* Logo */}

        <Link
          href="/"
          className="
            text-2xl
            font-black
            tracking-tight
            bg-gradient-to-r
            from-cyan-400
            to-purple-500
            bg-clip-text
            text-transparent
          "
        >
          <span className="text-3xl font-black tracking-tight">
              G<span className="text-cyan-400">K</span>
          </span>
        </Link>

        {/* Links */}

        <div className="hidden md:flex items-center gap-10">

          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="
                relative
                text-gray-300
                hover:text-white
                transition
                group
              "
            >
              {link.name}

              <span
                className="
                  absolute
                  left-0
                  -bottom-2
                  h-[2px]
                  w-0
                  bg-cyan-400
                  transition-all
                  duration-300
                  group-hover:w-full
                "
              />
            </a>
          ))}

        </div>

        {/* Resume */}

        <a
          href="/assets/resume.pdf"
          download
          className="
            hidden
            md:flex
            items-center
            gap-2
            px-5
            py-3
            rounded-xl
            bg-cyan-500
            hover:bg-cyan-400
            transition
            font-semibold
            text-black
          "
        >
          <FaDownload />
          Resume
        </a>

      </nav>
    </motion.header>
  );
}