"use client";

import React, { useEffect, useState, useRef } from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { getGithubUser } from "@/lib/github";
import type { GithubUser } from "@/types/github";

interface ContributionDay {
  date: string;
  contributionCount: number;
  color: string;
}

interface GithubAnalyticsProps {
  className?: string;
}

export default function GithubAnalytics({ className = "" }: GithubAnalyticsProps) {
  const [github, setGithub] = useState<GithubUser | null>(null);
  const [hoveredDay, setHoveredDay] = useState<ContributionDay | null>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function loadGithub() {
      try {
        const data = await getGithubUser();
        setGithub(data);
      } catch (e) {
        console.error("Failed to load GitHub data:", e);
        setGithub(null);
      }
    }

    loadGithub();
  }, []);

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr + "T00:00:00");
    return date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  const getMonthLabels = (weeks: ContributionDay[][]) => {
    const months: { label: string; weekIndex: number }[] = [];
    const seenMonths = new Set<string>();

    weeks.forEach((week, weekIndex) => {
      if (week.length > 0) {
        const date = new Date(week[0].date + "T00:00:00");
        const monthKey = `${date.getFullYear()}-${date.getMonth()}`;
        if (!seenMonths.has(monthKey)) {
          seenMonths.add(monthKey);
          months.push({
            label: date.toLocaleDateString("en-US", { month: "short" }),
            weekIndex,
          });
        }
      }
    });

    return months;
  };

  if (!github) {
    return (
      <div className={`rounded-2xl border border-white/10 bg-white/5 p-4 animate-pulse space-y-3 ${className}`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/10" />
            <div className="space-y-1">
              <div className="h-4 w-20 bg-white/10 rounded" />
              <div className="h-2.5 w-16 bg-white/5 rounded" />
            </div>
          </div>
          <div className="w-14 h-5 bg-white/10 rounded-lg" />
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="rounded-lg border border-cyan-500/20 bg-cyan-500/5 h-14 flex items-center justify-between px-3">
              <div className="h-3 w-24 bg-white/10 rounded" />
              <div className="h-5 w-14 bg-white/10 rounded" />
            </div>
          ))}
        </div>
        <div className="h-40 bg-white/5 rounded-lg" />
      </div>
    );
  }

  const monthLabels = getMonthLabels(github.weeks);
  const maxWeeks = Math.min(github.weeks.length, 52);
  const cellGap = 2;
  const cellSize = 8;

  // Build month label spans for full 52 weeks
  const monthSpans = monthLabels.map((month, idx) => {
    const startWeek = month.weekIndex;
    const endWeek = idx < monthLabels.length - 1 ? monthLabels[idx + 1].weekIndex : maxWeeks;
    const span = endWeek - startWeek;
    return { ...month, startWeek, span };
  });

  return (
    <div
      className={`
        rounded-2xl
        border
        border-cyan-500/20
        bg-[#0B1220]/80
        backdrop-blur-xl
        overflow-hidden
        hover:border-cyan-400/50
        transition-all
        duration-500
        p-4
        ${className}
      `}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
            <img
              src={github.avatarUrl}
              className="w-8 h-8 rounded-lg"
              alt="avatar"
            />
          </div>
          <div className="min-w-0">
            <h2 className="text-base font-bold text-white truncate">GitHub</h2>
            <p className="text-cyan-400 text-xs truncate">@Yehmeg</p>
          </div>
        </div>
        <a
          href="https://github.com/Yehmeg"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 px-2 py-0.5 text-xs font-medium text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 rounded-lg hover:bg-cyan-500/20 transition-colors flex-shrink-0"
        >
          <FiExternalLink className="w-3 h-3" />
          View
        </a>
      </div>

      {/* Content Grid - stats row + heatmap aligned */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
        {/* Stats Grid - 4 compact one-line cards */}
        <div className="lg:col-span-4 grid grid-cols-2 lg:grid-cols-4 gap-2 mb-3">
          <a
            href="https://github.com/Yehmeg?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-cyan-500/20 bg-cyan-500/5 px-3 py-2 hover:border-cyan-400/50 hover:bg-cyan-500/10 transition-all flex items-center justify-between min-h-[52px]"
          >
            <span className="text-[10px] font-medium text-cyan-400 uppercase tracking-wider">REPOSITORIES</span>
            <span className="text-lg font-bold text-white tabular-nums ml-4">{github.publicRepos.toLocaleString()}</span>
          </a>

          <div className="rounded-lg border border-cyan-500/20 bg-cyan-500/5 px-3 py-2 flex items-center justify-between min-h-[52px]">
            <span className="text-[10px] font-medium text-cyan-400 uppercase tracking-wider">STARS</span>
            <span className="text-lg font-bold text-white tabular-nums ml-4">{github.stars.toLocaleString()}</span>
          </div>

          <div className="rounded-lg border border-cyan-500/20 bg-cyan-500/5 px-3 py-2 flex items-center justify-between min-h-[52px]">
            <span className="text-[10px] font-medium text-cyan-400 uppercase tracking-wider">ACTIVE DAYS</span>
            <span className="text-lg font-bold text-white tabular-nums ml-4">{github.activeDays.toLocaleString()}</span>
          </div>

          <div className="rounded-lg border border-cyan-500/20 bg-cyan-500/5 px-3 py-2 flex items-center justify-between min-h-[52px]">
            <span className="text-[10px] font-medium text-cyan-400 uppercase tracking-wider">CONTRIBUTIONS</span>
            <span className="text-lg font-bold text-white tabular-nums ml-4">{github.totalContributions.toLocaleString()}</span>
          </div>
        </div>

        {/* Heatmap Section - spans first 3 stat cards (75% width) */}
        <div className="relative lg:col-span-3 lg:col-start-1 lg:row-start-2">
        <h3 className="uppercase tracking-[0.1em] text-[10px] text-gray-400 mb-3 flex items-center gap-1.5">
          <span className="w-4 h-px bg-cyan-400/50" />
          Commit Activity · Last 52 Weeks
        </h3>

        <div className="rounded-lg border border-white/10 bg-[#050816] p-3">
          {/* Month labels - CSS Grid with 52 columns filling 75% container width */}
          <div
            className="mb-2"
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${maxWeeks}, 1fr)`,
              gap: `${cellGap}px`,
              padding: "0 16px",
            }}
          >
            {monthSpans.map((month) => (
              <div
                key={`${month.label}-${month.startWeek}-${month.span}`}
                className="text-[9px] text-gray-500 font-medium whitespace-nowrap overflow-hidden text-ellipsis"
                style={{
                  gridColumn: `${month.startWeek + 1} / span ${month.span}`,
                  textAlign: "left",
                }}
              >
                {month.label}
              </div>
            ))}
          </div>

          {/* Heatmap Grid - CSS Grid with 52 columns filling 75% container width */}
          <div
            className="flex flex-col"
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${maxWeeks}, 1fr)`,
              gridTemplateRows: `repeat(7, 12px)`,
              gap: `${cellGap}px`,
              height: "84px",
              padding: "0 16px",
            }}
          >
            {Array.from({ length: 7 }).map((_, dayIndex) => (
              <React.Fragment key={dayIndex}>
                {github.weeks.slice(0, maxWeeks).map((week, weekIndex) => {
                  const day = week[dayIndex];
                  if (!day) {
                    return (
                      <div
                        key={`${dayIndex}-${weekIndex}`}
                        className="rounded-[2px]"
                        style={{ backgroundColor: "#0d1117" }}
                      />
                    );
                  }
                  const count = day.contributionCount;
                  let bgColor = "#0d1117";
                  if (count > 0) {
                    if (count <= 3) bgColor = "#0e4429";
                    else if (count <= 6) bgColor = "#006d32";
                    else if (count <= 10) bgColor = "#26a641";
                    else bgColor = "#39d353";
                  }

                  return (
                    <div
                      key={`${dayIndex}-${weekIndex}`}
                      className="rounded-[2px] cursor-pointer transition-transform hover:scale-150 hover:z-10"
                      style={{ backgroundColor: bgColor }}
                      onMouseEnter={() => setHoveredDay(day)}
                      onMouseLeave={() => setHoveredDay(null)}
                      onMouseMove={(e) => {
                        if (tooltipRef.current) {
                          tooltipRef.current.style.left = `${e.clientX + 12}px`;
                          tooltipRef.current.style.top = `${e.clientY - 40}px`;
                        }
                      }}
                      title={`${formatDate(day.date)} — ${count} contribution${count !== 1 ? "s" : ""}`}
                    />
                  );
                })}
              </React.Fragment>
            ))}
</div>
          </div>

        </div>

        {/* Tooltip */}
        {hoveredDay && (
          <div
            ref={tooltipRef}
            className="fixed z-50 pointer-events-none"
            style={{ left: 0, top: 0 }}
          >
            <div className="bg-[#0B1220] border border-cyan-500/30 rounded-lg px-3 py-1.5 text-xs text-white shadow-lg whitespace-nowrap">
              {formatDate(hoveredDay.date)} — {hoveredDay.contributionCount} contribution{hoveredDay.contributionCount !== 1 ? "s" : ""}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}