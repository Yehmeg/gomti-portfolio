"use client";

import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-16 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black">
            <span className="text-cyan-400 font-semibold tracking-[0.25em] uppercase">
              Projects
            </span>
          </h2>
          <p className="text-center text-gray-400 mt-3 max-w-2xl mx-auto">
            AI-powered solutions built to solve real-world problems using
            Machine Learning, Data Science, and Full-Stack Engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              shortDescription={project.shortDescription}
              tech={project.tech}
              image={project.image}
              video={project.video}
              github={project.github}
              demo={project.demo}
              featured={project.featured}
              metric={project.metric}
            />
          ))}
        </div>
      </div>
    </section>
  );
}