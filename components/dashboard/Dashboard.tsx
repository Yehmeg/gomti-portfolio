"use client";

import GithubAnalytics from "./GithubAnalytics";
import LeetcodeAnalytics from "./LeetcodeAnalytics";

export default function Dashboard() {
  return (
    <section className="py-16">

      <div className="max-w-7xl mx-auto px-4">

        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">
            Developer Dashboard
          </h2>
          <p className="text-gray-400 mt-3 text-lg">
            Live coding activity, contributions and competitive programming.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          <GithubAnalytics />
          <LeetcodeAnalytics />
        </div>

      </div>

    </section>
  );
}