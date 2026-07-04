"use client";

import GithubAnalytics from "./GithubAnalytics";
import LeetcodeAnalytics from "./LeetcodeAnalytics";

export default function Dashboard() {
  return (
    <section className="py-24">

      <div className="max-w-7xl mx-auto">

        <h2
          className="
          text-6xl
          font-black
          text-center
          "
        >
          Developer Dashboard
        </h2>

        <p
          className="
          text-gray-400
          text-center
          mt-4
          mb-16
          "
        >
          Live coding activity, contributions and competitive programming.
        </p>

        <div
          className="
          grid
          lg:grid-cols-2
          gap-10
          "
        >
          <GithubAnalytics />

          <LeetcodeAnalytics />

        </div>

      </div>

    </section>
  );
}