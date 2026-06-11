import { achievements } from "@/data/achievements";

export default function Achievements() {
  return (
    <section className="py-24 px-6 text-white">
      <h2 className="text-5xl font-bold text-center mb-16">
        Achievements
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {achievements.map((achievement, index) => (
          <div
            key={index}
            className="
            p-6
            rounded-3xl
            bg-white/5
            backdrop-blur-lg
            border
            border-white/10
            hover:scale-105
            transition
            "
          >
            <h3 className="text-xl font-semibold">
              {achievement}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}