import { hackathons, type Hackathon } from "@/data/hackathons";

export default function Hackathons() {
  return (
    <section className="py-24 px-6 text-white">
      <h2 className="text-5xl font-bold text-center mb-16">
        Hackathons
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {hackathons.map((item: Hackathon, index: number) => (
          <div
            key={index}
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
              {item.title}
            </h3>

            <p className="text-cyan-400 mt-2">
              {item.project}
            </p>

            <p className="mt-4 text-gray-400">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}