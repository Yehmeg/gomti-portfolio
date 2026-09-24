"use client";

import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface ProjectCardProps {
  title: string;
  shortDescription: string;
  tech: string[];
  image: string;
  video?: string;
  github: string;
  demo?: string;
  featured?: boolean;
  metric?: string;
}

export default function ProjectCard({
  title,
  shortDescription,
  tech,
  image,
  video,
  github,
  demo,
  featured = false,
  metric,
}: ProjectCardProps) {
  const displayTech = tech.slice(0, 5);
  const hasVideo = !!video;

  return (
    <article
      className={`
        group
        relative
        rounded-2xl
        overflow-hidden
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        hover:border-cyan-400/50
        hover:shadow-[0_0_30px_rgba(6,182,212,0.08)]
        transition-all
        duration-300
        flex
        flex-col
        h-full
        ${featured ? "ring-1 ring-cyan-400/20" : ""}
      `}
    >
      <div className="relative aspect-video overflow-hidden bg-[#050816]">
        {hasVideo ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className={`
              absolute inset-0 w-full h-full object-cover opacity-80
              transition-transform duration-500 group-hover:scale-105
            `}
            poster={image}
          >
            <source src={video} type="video/mp4" />
          </video>
        ) : (
          <Image
            src={image}
            alt={`${title} project screenshot`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className={`
              object-cover
              transition-transform
              duration-500
              group-hover:scale-105
              group-hover:brightness-110
            `}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/60 via-transparent to-transparent" />
        {featured && (
          <div className="absolute top-3 left-3">
            <span className="px-2 py-0.5 text-xs font-medium text-cyan-400 bg-cyan-500/10 border border-cyan-400/20 rounded-full uppercase tracking-wider">
              Featured
            </span>
          </div>
        )}
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-white leading-tight group-hover:text-cyan-400 transition-colors">
          {title}
        </h3>

        <p className="text-gray-400 text-sm mt-2 line-clamp-2 leading-relaxed flex-1">
          {shortDescription}
        </p>

        {metric && (
          <div className="mt-2 text-xs text-cyan-400 font-medium flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            {metric}
          </div>
        )}

        <div className="flex flex-wrap gap-1.5 mt-3">
          {displayTech.map((tag) => (
            <span
              key={tag}
              className="
                px-2.5
                py-0.5
                rounded
                bg-cyan-500/10
                text-cyan-300
                text-xs
                font-medium
                border
                border-cyan-500/20
                whitespace-nowrap
              "
            >
              {tag}
            </span>
          ))}
          {tech.length > 5 && (
            <span className="px-2.5 py-0.5 rounded text-xs font-medium text-gray-500 bg-white/5 border border-white/10">
              +{tech.length - 5}
            </span>
          )}
        </div>

        <div className="flex items-center gap-2 mt-4 pt-3 border-t border-white/10">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 text-sm font-medium text-black bg-cyan-400 rounded-lg hover:bg-cyan-300 transition-colors"
          >
            <FaGithub className="w-4 h-4" />
            GitHub
          </a>
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 text-sm font-medium text-cyan-400 bg-cyan-500/10 border border-cyan-400/20 rounded-lg hover:bg-cyan-500/20 transition-colors"
            >
              <FaExternalLinkAlt className="w-4 h-4" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}