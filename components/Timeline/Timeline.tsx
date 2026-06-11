import { timeline } from "@/data/timeline";

export default function Timeline() {
  return (
    <section className="py-24 px-6 text-white">
      <h2 className="text-5xl font-bold text-center mb-16">
        Journey
      </h2>

      <div className="max-w-4xl mx-auto">
        {timeline.map((item, index) => (
          <div
            key={index}
            className="
            border-l-2
            border-cyan-500
            pl-8
            mb-10
            "
          >
            <p className="text-cyan-400 font-bold">
              {item.year}
            </p>

            <h3 className="text-2xl font-semibold">
              {item.title}
            </h3>

            <p className="text-gray-400">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}