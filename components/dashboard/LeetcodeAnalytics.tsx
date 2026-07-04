"use client";

import { useEffect, useState } from "react";
import { SiLeetcode } from "react-icons/si";
import { FiExternalLink } from "react-icons/fi";
import { FaCheckCircle, FaFire, FaMedal, FaChartLine } from "react-icons/fa";
import StatCard from "./StatCard";
import { getLeetcodeStats } from "@/lib/leetcode";
import { LeetcodeStats } from "@/types/leetcode";

// export interface LeetcodeStats {

//   totalSolved:number;

//   easySolved:number;

//   mediumSolved:number;

//   hardSolved:number;

//   ranking:number;

//   reputation:number;

//   avatar:string;

//   badges:number;

//   recentBadge:any;

// }
export default function LeetcodeAnalytics() {
  const [data, setData] = useState<LeetcodeStats | null>(null);

  useEffect(() => {
  async function load() {
    try {
      const json = await getLeetcodeStats();
      console.log(json);
      setData(json);
    } catch (err) {
      console.error(err);
    }
  }

  load();
}, []);


  if (!data)
    return (
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
        Loading...
      </div>
    );

  return (
    <div
      className="
      rounded-[30px]
      border
      border-yellow-500/20
      bg-[#101827]/80
      backdrop-blur-xl
      overflow-hidden
      hover:border-yellow-400
      transition-all
      duration-500
      "
    >
      {/* Header */}

      <div className="flex items-center justify-between p-6">

        <div className="flex items-center gap-4">

          <div className="w-14 h-14 rounded-xl bg-yellow-500/10 flex items-center justify-center">

            <img

            src={data.avatar}

            className="w-14 h-14 rounded-xl"

            alt="avatar"

            />

          </div>

          <div>

            <h2 className="text-3xl font-bold">
              LeetCode
            </h2>

            <p className="text-yellow-400">
              @gomtiii
            </p>

          </div>

        </div>

        <a
          href="https://leetcode.com/u/gomtiii/"
          target="_blank"
          className="
          p-3
          rounded-xl
          bg-white/5
          hover:bg-yellow-500/10
          transition
          "
        >
          <FiExternalLink size={22}/>
        </a>

      </div>

      <div
  className="
    mt-2
    mb-6
    min-w-[180px]
    flex
    items-center
    gap-4
    rounded-2xl
    border
    border-yellow-400/20
    bg-yellow-500/10
    px-5
    py-3
  "
>
  <FaChartLine className="text-yellow-400 text-xl" />

  <div>
    <p className="text-xs uppercase tracking-widest text-gray-400">
      Global Ranking
    </p>

    <p className="text-2xl font-bold text-white">
      #{data.ranking.toLocaleString()}
    </p>
  </div>
</div>


      {/* Stats */}

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 px-6">

        <StatCard
          title="Solved"
          value={data.totalSolved}
          icon={<FaCheckCircle/>}
          />
          <StatCard
          title="Badges"
          value={data.badges}
          icon={<FaMedal/>}
          />

          <StatCard
          title="Reputation"
          value={data.reputation}
          icon={<FaFire/>}
          />
          {/* <StatCard
            title="Rank"
            value={`#${data.ranking.toLocaleString()}`}
            icon={<FaChartLine />}
          
          /> */}



      </div>

      {/* Progress */}

      <div className="px-6 mt-8">

        <h3 className="uppercase tracking-[0.25em] text-sm text-gray-400 mb-5">
          Problem Solving Progress
        </h3>

        <div className="rounded-2xl border border-white/10 bg-[#0B1220] p-6">

          <div className="mb-5">

            <div className="flex justify-between text-sm mb-2">
              <span>Easy</span>
              <span>{data.easySolved}</span>
            </div>

            <div className="h-2 rounded-full bg-gray-700 overflow-hidden">
              <div
                className="h-full bg-green-400"
                style={{ width: `${(data.easySolved/951)*100}%` }}
              />
            </div>

          </div>

          <div className="mb-5">

            <div className="flex justify-between text-sm mb-2">
              <span>Medium</span>
              <span>{data.mediumSolved}</span>
            </div>

            <div className="h-2 rounded-full bg-gray-700 overflow-hidden">
              <div
                className="h-full bg-yellow-400"
                style={{ width: `${(data.mediumSolved/2077)*100}%` }}
              />
            </div>

          </div>

          <div>

            <div className="flex justify-between text-sm mb-2">
              <span>Hard</span>
              <span>{data.hardSolved}</span>
            </div>

            <div className="h-2 rounded-full bg-gray-700 overflow-hidden">
              <div
                className="h-full bg-red-500"
                style={{ width: `${(data.hardSolved/949)*100}%` }}
              />
            </div>

          </div>

        </div>

      </div>

      {/* Footer */}

      <div className="p-6">

        <a
          href="https://leetcode.com/u/gomtiii/"
          target="_blank"
          className="
          w-full
          flex
          justify-center
          items-center
          gap-3
          rounded-xl
          bg-yellow-400
          py-3
          text-black
          font-semibold
          hover:scale-[1.02]
          transition
          "
        >
          View LeetCode Profile

          <FiExternalLink/>

        </a>

      </div>

    </div>
  );
}