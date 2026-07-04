"use client";

import { useEffect, useState } from "react";  
import { FaGithub, FaBook, FaUsers, FaCodeBranch } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import {GitHubCalendar} from "react-github-calendar";
import StatCard from "./StatCard";

interface GithubData {
  public_repos: number;
  followers: number;
  following: number;
  avatar_url: string;
}

export default function GithubAnalytics() {
  const [github, setGithub] = useState<GithubData | null>(null);

  useEffect(() => {
    async function loadGithub() {
      const { getGithubUser } = await import("@/lib/github");
      const data = await getGithubUser();
      setGithub(data);
    }

    loadGithub();
  }, []);

  if (!github) {
    return (
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
        Loading...
      </div>
    );
  }

  return (
    <div
      className="
      rounded-[30px]
      border
      border-cyan-500/20
      bg-[#101827]/80
      backdrop-blur-xl
      overflow-hidden
      hover:border-cyan-400
      transition-all
      duration-500
      "
    >
      {/* Header */}

      <div className="flex items-center justify-between p-6">

        <div className="flex items-center gap-4">

          <img
            src={github.avatar_url}
            alt="GitHub"
            className="w-14 h-14 rounded-xl"
          />

          <div>

            <h2 className="text-3xl font-bold">
              GitHub
            </h2>

            <p className="text-cyan-400">
              @Yehmeg
            </p>

          </div>

        </div>

        <a
          href="https://github.com/Yehmeg"
          target="_blank"
          className="
            p-3
            rounded-xl
            bg-white/5
            hover:bg-cyan-500/10
            transition
          "
        >
          <FiExternalLink size={22} />
        </a>

      </div>

      {/* Stats */}

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 px-6">

        <StatCard
          title="Repositories"
          value={github.public_repos}
          icon={<FaBook />}
        />

        <StatCard
          title="Followers"
          value={github.followers}
          icon={<FaUsers />}
        />

        <StatCard
          title="Following"
          value={github.following}
          icon={<FaUsers />}
        />


      </div>

      {/* Calendar */}

      <div className="px-6 mt-8">

        <h3
          className="
          uppercase
          tracking-[0.25em]
          text-sm
          text-gray-400
          mb-5
          "
        >
          Commit Activity · Last 52 Weeks
        </h3>

        <div
          className="
          rounded-2xl
          bg-[#0B1220]
          border
          border-white/10
          p-5
          overflow-x-auto
          "
        >
          <GitHubCalendar
            username="Yehmeg"
            colorScheme="dark"
            fontSize={11}
            blockSize={11}
            blockMargin={4}
          />
        </div>

      </div>

      {/* Footer */}

      <div className="p-6">

        <a
          href="https://github.com/Yehmeg"
          target="_blank"
          className="
          w-full
          flex
          items-center
          justify-center
          gap-3
          rounded-xl
          bg-cyan-500
          py-3
          text-black
          font-semibold
          hover:scale-[1.02]
          transition
          "
        >
          <FaGithub />

          View GitHub Profile

        </a>

      </div>

    </div>
  );
}