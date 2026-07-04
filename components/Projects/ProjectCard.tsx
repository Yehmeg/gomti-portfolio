"use client";

import Image from "next/image";
import { FaGithub } from "react-icons/fa";


interface ProjectCardProps {
  title: string;
  description: string;
  video: string;
  github: string;
  tags: string[];
}

export default function ProjectCard({
  title,
  description,
  video,
  github,
  tags,
}: ProjectCardProps) {

  return (
    <div
      className="
      group
      rounded-3xl
      overflow-hidden
      border
      border-white/10
      bg-white/5
      backdrop-blur-xl
      hover:border-cyan-400
      transition
      "
    >
      <div className="relative h-64">

       <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="
            absolute
            inset-0
            w-full
            h-full
            object-cover
            opacity-80
          "
        >
  <source

    src={video}
    type="video/mp4"
/>

</video>

      </div>

      <div className="p-8">

        <h3 className="text-3xl font-bold">
          {title}
        </h3>

        <p className="text-gray-400 mt-4">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mt-6">

          {tags.map((tag) => (
            <span
              key={tag}
              className="
                px-3
                py-1
                rounded-full
                bg-cyan-500/10
                text-cyan-300
                text-sm
              "
            >
              {tag}
            </span>
          ))}

        </div>

        <a
          href={github}
          target="_blank"
          className="inline-flex items-center gap-2 mt-8 text-cyan-400"
        >
          <FaGithub />
          GitHub
        </a>

      </div>
    </div>
  );
}
