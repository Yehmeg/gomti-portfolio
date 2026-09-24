"use client";

import React, { useEffect, useState } from "react";
import { FiExternalLink, FiCalendar, FiAward } from "react-icons/fi";
import { FaPercentage, FaChartLine, FaMedal } from "react-icons/fa";
import { getLeetcodeData } from "@/lib/leetcode";
import { LeetcodeData } from "@/types/leetcode";

export default function LeetcodeAnalytics() {
  const [data, setData] = useState<LeetcodeData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        const json = await getLeetcodeData();
        setData(json);
      } catch (err) {
        console.error(err);
        setError(err instanceof Error ? err.message : "Failed to load LeetCode data");
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  if (loading) {
    return (
      <div className="rounded-2xl border border-white/10 bg-white/5 p-3 animate-pulse space-y-3">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-yellow-500/10" />
          <div className="space-y-1 flex-1">
            <div className="h-4 w-28 bg-white/10 rounded" />
            <div className="h-2.5 w-18 bg-white/5 rounded" />
          </div>
          <div className="w-18 h-5 bg-white/10 rounded-lg" />
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="rounded-lg border border-yellow-500/20 bg-yellow-500/5 p-2.5">
              <div className="h-4 w-4 bg-white/10 rounded" />
              <div className="mt-1.5 h-5 w-14 bg-white/10 rounded" />
              <div className="mt-0.5 h-1.5 w-8 bg-white/5 rounded" />
            </div>
          ))}
        </div>
        <div className="space-y-2">
          <div className="h-3 w-36 bg-white/10 rounded" />
          {[1, 2, 3].map((i) => (
            <div key={i} className="space-y-1">
              <div className="flex justify-between">
                <div className="h-2 w-14 bg-white/10 rounded" />
                <div className="h-2 w-10 bg-white/10 rounded" />
              </div>
              <div className="h-1 bg-gray-700 rounded-full">
                <div className="h-full bg-white/10 rounded-full w-1/4" />
              </div>
            </div>
          ))}
        </div>
        <div className="h-36 bg-white/5 rounded-lg" />
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-5 text-center">
        <FiAward className="text-red-400 text-xl mx-auto mb-1.5" />
        <h3 className="text-sm font-bold text-red-400 mb-1">Unable to Load LeetCode Data</h3>
        <p className="text-gray-400 text-[10px] mb-2">{error || "Unknown error occurred"}</p>
        <a
          href="https://leetcode.com/u/gomtiii/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-yellow-400 text-black font-semibold hover:scale-105 transition text-[10px]"
        >
          View Profile on LeetCode
          <FiExternalLink size={10} />
        </a>
      </div>
    );
  }

  const { profile, stats, totalQuestions, contest, contestHistory, submissionCalendar, badges, badgeCount } = data;

  const activeDays = Object.values(submissionCalendar || {}).filter((count: number) => count > 0).length;

  const getProgressColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy": return "bg-green-400";
      case "Medium": return "bg-yellow-400";
      case "Hard": return "bg-red-500";
      default: return "bg-cyan-400";
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy": return "text-green-400";
      case "Medium": return "text-yellow-400";
      case "Hard": return "text-red-500";
      default: return "text-cyan-400";
    }
  };

  // Fallback for totalQuestions if not available
  const totalQ = totalQuestions || { easy: 962, medium: 2109, hard: 970 };

  const difficultyData = [
    { label: "Easy", solved: stats.easySolved, total: totalQ.easy, submissions: stats.easySubmissions, color: "green" },
    { label: "Medium", solved: stats.mediumSolved, total: totalQ.medium, submissions: stats.mediumSubmissions, color: "yellow" },
    { label: "Hard", solved: stats.hardSolved, total: totalQ.hard, submissions: stats.hardSubmissions, color: "red" },
  ];

  return (
    <div
      className="
      rounded-2xl
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
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between px-3 py-2 gap-2">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-yellow-500/10 flex items-center justify-center flex-shrink-0">
            <img
              src={profile.avatar}
              className="w-8 h-8 rounded-lg"
              alt="avatar"
            />
          </div>
          <div className="min-w-0">
            <h2 className="text-lg font-bold truncate">LeetCode</h2>
            <p className="text-yellow-400 text-[10px] truncate">@Gomtiii</p>
          </div>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          {/* View capsule */}
          <a
            href="https://leetcode.com/u/Gomtiii/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-2 py-1 text-xs font-medium text-yellow-400 bg-yellow-500/10 border border-yellow-500/20 rounded-lg hover:bg-yellow-500/20 transition-colors flex-shrink-0"
          >
            <FiExternalLink className="w-3 h-3" />
            View
          </a>
        </div>
      </div>

      {/* Main Stats Grid - 4 compact items: GLOBAL RANKING | SOLVED | SUBMISSIONS | ACCEPTANCE */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-1.5 px-3 mb-2">
        <div className="rounded-lg border border-yellow-500/20 bg-yellow-500/5 px-3 py-2 flex items-center justify-between min-h-[52px]">
          <span className="text-[10px] font-medium text-yellow-400 uppercase tracking-wider">GLOBAL RANKING</span>
          <span className="text-lg font-bold text-white tabular-nums ml-4">#{profile.ranking.toLocaleString()}</span>
        </div>

        <a
          href="https://leetcode.com/u/Gomtiii/"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg border border-yellow-500/20 bg-yellow-500/5 px-3 py-2 hover:border-yellow-400/50 hover:bg-yellow-500/10 transition-all flex items-center justify-between min-h-[52px]"
        >
          <span className="text-[10px] font-medium text-yellow-400 uppercase tracking-wider">SOLVED</span>
          <span className="text-lg font-bold text-white tabular-nums ml-4">{stats.totalSolved}</span>
        </a>

        <div className="rounded-lg border border-yellow-500/20 bg-yellow-500/5 px-3 py-2 flex items-center justify-between min-h-[52px]">
          <span className="text-[10px] font-medium text-yellow-400 uppercase tracking-wider">SUBMISSIONS</span>
          <span className="text-lg font-bold text-white tabular-nums ml-4">{stats.totalSubmissions.toLocaleString()}</span>
        </div>

        <div className="rounded-lg border border-yellow-500/20 bg-yellow-500/5 px-3 py-2 flex items-center justify-between min-h-[52px]">
          <span className="text-[10px] font-medium text-yellow-400 uppercase tracking-wider">ACCEPTANCE</span>
          <span className="text-lg font-bold text-white tabular-nums ml-4">{stats.acceptanceRate.toFixed(2)}%</span>
        </div>
      </div>

      {/* Middle Section: Problem Progress | Heatmap - horizontal on desktop */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-1.5 px-3 mb-2">
        {/* Problem Solving Progress - 1/3 width */}
        <div className="rounded-lg border border-white/10 bg-[#0B1220] p-2">
          <h3 className="uppercase tracking-[0.1em] text-[9px] text-gray-400 mb-1.5 flex items-center gap-0.5">
            <FaChartLine className="text-yellow-400 text-[9px]" />
            Problem Solving Progress
          </h3>
          <div className="space-y-1.5">
            {difficultyData.map(({ label, solved, total, submissions, color }) => {
              const percentage = total > 0 ? ((solved / total) * 100).toFixed(2) : "0.00";
              return (
                <div key={label} className="space-y-0.5">
                  <div className="flex items-center justify-between text-[9px]">
                    <span className="flex items-center gap-0.5">
                      <span className={`w-1 h-1 rounded-full ${color === "green" ? "bg-green-400" : color === "yellow" ? "bg-yellow-400" : "bg-red-500"}`} />
                      <span className={`font-medium ${getDifficultyColor(label)}`}>{label}</span>
                    </span>
                    <span className="font-mono text-white text-[10px]">{solved.toLocaleString()} / {total.toLocaleString()}</span>
                    <span className={`text-[9px] ${getDifficultyColor(label)}`}>{percentage}%</span>
                  </div>
                  <div className="h-1 rounded-full bg-gray-700 overflow-hidden">
                    <div
                      className={`h-full ${getProgressColor(label)} transition-all duration-1000 ease-out`}
                      style={{ width: `${Math.min((solved / total) * 100, 100)}%` }}
                    />
                  </div>
                  <p className="text-[8px] text-gray-500 text-right">
                    {submissions.toLocaleString()} submissions
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Submission Calendar Heatmap - 2/3 width */}
        <div className="lg:col-span-2 rounded-lg border border-white/10 bg-[#0B1220] p-2">
          <div className="flex items-center justify-between mb-3">
            <h3 className="uppercase tracking-[0.1em] text-[9px] text-gray-400 flex items-center gap-0.5">
              <FiCalendar className="text-yellow-400 text-[9px]" />
              Submission Activity (365 Days)
            </h3>
            <span className="text-[9px] text-gray-500 font-medium">Total active days: {activeDays}</span>
          </div>
          <SubmissionHeatmap data={submissionCalendar} />
        </div>
      </div>

      {/* Badges */}
      {badges.length > 0 && (
        <div className="px-3 mb-2">
          <h3 className="uppercase tracking-[0.1em] text-[9px] text-gray-400 mb-1.5 flex items-center gap-0.5">
            <FaMedal className="text-yellow-400 text-[9px]" />
            Badges ({badgeCount})
          </h3>
          <div className="flex flex-wrap gap-1">
            {badges.slice(0, 6).map((badge) => (
              <div
                key={badge.id}
                className="flex items-center gap-0.5 px-1.5 py-0.75 rounded bg-yellow-500/10 border border-yellow-500/20"
              >
                <img
                  src={badge.icon}
                  alt={badge.displayName}
                  className="w-2.5 h-2.5"
                />
                <span className="text-[9px] text-yellow-300 truncate max-w-[80px]">{badge.displayName}</span>
              </div>
            ))}
            {badges.length > 6 && (
              <span className="px-1.5 py-0.75 rounded bg-white/5 text-gray-400 text-[9px]">
                +{badges.length - 6} more
              </span>
            )}
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="px-3 py-2 border-t border-white/10" />
    </div>
  );
}

function SubmissionHeatmap({ data }: { data: Record<string, number> }) {
  const now = new Date();
  const endDate = new Date(now);
  endDate.setHours(23, 59, 59, 999);
  const startDate = new Date(endDate);
  startDate.setDate(startDate.getDate() - 364);

  const getColor = (count: number) => {
    if (count === 0) return "bg-[#0d1117]";
    if (count <= 2) return "bg-yellow-900/40";
    if (count <= 5) return "bg-yellow-700";
    if (count <= 10) return "bg-yellow-500";
    return "bg-yellow-300";
  };

  // Build weeks data structure (53 weeks max)
  const weeks: { date: Date; count: number }[][] = [];
  let currentWeek: { date: Date; count: number }[] = [];
  
  let cursor = new Date(startDate);
  cursor.setDate(cursor.getDate() - cursor.getDay());
  
  while (cursor <= endDate) {
    for (let day = 0; day < 7; day++) {
      const date = new Date(cursor);
      date.setDate(cursor.getDate() + day);
      
      if (date > endDate) break;
      
      const key = date.toISOString().split("T")[0];
      const count = data[key] || 0;
      
      currentWeek.push({ date, count });
    }
    
    if (currentWeek.length > 0) {
      weeks.push(currentWeek);
      currentWeek = [];
    }
    
    cursor.setDate(cursor.getDate() + 7);
  }

  // Limit to 53 weeks max
  const maxWeeks = Math.min(weeks.length, 53);
  const displayWeeks = weeks.slice(0, maxWeeks);

  // Month labels - find first occurrence of each month (include year to handle year boundaries)
  const monthLabels: { month: string; weekIndex: number }[] = [];
  const seenMonths = new Set<string>();
  
  displayWeeks.forEach((week, weekIndex) => {
    week.forEach(({ date }) => {
      const monthKey = date.toLocaleDateString("en-US", { month: "short", year: "2-digit" }); // e.g., "Sep 25", "Sep 26"
      if (!seenMonths.has(monthKey)) {
        seenMonths.add(monthKey);
        const monthLabel = date.toLocaleDateString("en-US", { month: "short" }); // display as "Sep"
        monthLabels.push({ month: monthLabel, weekIndex });
      }
    });
  });

  const cellGap = 2;
  const cellSize = 12;

  return (
    <div>
      {/* Month labels - CSS Grid with same columns as heatmap */}
      <div
        className="mb-2"
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${maxWeeks}, 1fr)`,
          gap: `${cellGap}px`,
        }}
      >
        {monthLabels.map((month, idx) => {
          const startWeek = month.weekIndex;
          const endWeek = idx < monthLabels.length - 1 ? monthLabels[idx + 1].weekIndex : maxWeeks;
          const span = endWeek - startWeek;
          return (
            <div
              key={`${month.month}-${startWeek}-${span}`}
              className="text-[8px] text-gray-500 font-medium whitespace-nowrap overflow-hidden text-ellipsis"
              style={{
                gridColumn: `${startWeek + 1} / span ${span}`,
                textAlign: "left",
              }}
            >
              {month.month}
            </div>
          );
        })}
      </div>

      {/* Heatmap Grid - CSS Grid with maxWeeks columns, 7 rows */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${maxWeeks}, 1fr)`,
          gridTemplateRows: `repeat(7, ${cellSize}px)`,
          gap: `${cellGap}px`,
          height: `${7 * cellSize}px`,
        }}
      >
        {Array.from({ length: 7 }).map((_, dayIndex) => {
          return (
            <React.Fragment key={dayIndex}>
              {displayWeeks.map((week, weekIndex) => {
                const day = week[dayIndex];
                if (!day) {
                  return (
                    <div
                      key={`${dayIndex}-${weekIndex}`}
                      className="rounded-[1px]"
                      style={{ backgroundColor: "#0d1117" }}
                    />
                  );
                }
                const count = day.count;
                let bgColor = "#0d1117";
                if (count > 0) {
                  if (count <= 2) bgColor = "#6b4f00";
                  else if (count <= 5) bgColor = "#b8860b";
                  else if (count <= 10) bgColor = "#e6c000";
                  else bgColor = "#fff000";
                }

                return (
                  <div
                    key={`${dayIndex}-${weekIndex}`}
                    className="rounded-[1px] transition hover:scale-125"
                    style={{ backgroundColor: bgColor }}
                    title={`${count} submissions on ${day.date.toLocaleDateString("en-US", { month: "short", day: "numeric" })}`}
                  />
                );
              })}
            </React.Fragment>
          );
        })}
</div>
    </div>
  );
}