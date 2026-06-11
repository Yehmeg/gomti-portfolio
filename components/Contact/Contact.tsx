import { profile } from "@/data/profile";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-6 text-white text-center"
    >
      <h2 className="text-5xl font-bold">
        Let's Build Something Impactful with AI
      </h2>

      <p className="mt-8 text-gray-400">
        {profile.email}
      </p>

      <div className="flex justify-center gap-6 mt-8">
        <a href={profile.github}>
          GitHub
        </a>

        <a href={profile.linkedin}>
          LinkedIn
        </a>

        <a href={profile.leetcode}>
          LeetCode
        </a>
      </div>
    </section>
  );
}