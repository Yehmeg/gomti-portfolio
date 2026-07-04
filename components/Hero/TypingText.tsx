"use client";

import { TypeAnimation } from "react-type-animation";

export default function TypingText() {
  return (
    <div className="h-12 flex items-center">
    <TypeAnimation
      sequence={[
        "Machine Learning",
        2000,
        "Data Science",
        2000,
        "Predictive Analytics",
        2000,
        "Environmental AI",
        2000,
        "Artificial Intelligence",
        2000,
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
      className="
        text-2xl
        md:text-3xl
        font-bold
        bg-gradient-to-r
        from-cyan-400
        via-blue-400
        to-purple-500
        bg-clip-text
        text-transparent
      "
    />
    </div>
  );
}