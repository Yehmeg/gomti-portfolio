import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-32 px-6 text-white"
    >
      <h2 className="text-5xl font-bold text-center">
        Featured Projects
      </h2>

      <div
        className="
        grid
        md:grid-cols-3
        gap-8
        mt-16
        "
      >
        {projects.map((project) => (
          <div
            key={project.title}
            className="
            p-6
            rounded-3xl
            bg-white/5
            backdrop-blur-lg
            border
            border-white/10
            "
          >
            <h3 className="text-2xl font-bold">
              {project.title}
            </h3>

            <p className="mt-4 text-gray-400">
              {project.description}
            </p>

            <p className="mt-4 text-cyan-400">
              {project.metric}
            </p>

            <div className="flex flex-wrap gap-2 mt-4">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="
                  px-3
                  py-1
                  rounded-full
                  bg-cyan-500/10
                  text-cyan-300
                  text-sm
                  "
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}