"use client";

import { useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./icons";
import TiltCard from "./TiltCard";

interface ContributionDay {
  date: string;
  level: number;
  countText: string;
}

export default function GithubContributions() {
  const [stats, setStats] = useState({
    repos: 9,
    followers: 3,
    contributions: 207,
  });
  const [days, setDays] = useState<ContributionDay[]>([]);
  const [hoveredDay, setHoveredDay] = useState<ContributionDay | null>(null);

  useEffect(() => {
    async function fetchRealGithubStats() {
      try {
        const res = await fetch("/api/github-stats");
        if (res.ok) {
          const data = await res.json();
          setStats({
            repos: data.repos ?? 9,
            followers: data.followers ?? 3,
            contributions: data.contributions ?? 207,
          });
          if (data.days && data.days.length > 0) {
            setDays(data.days);
          }
        }
      } catch (err) {
        console.error("Error fetching live GitHub stats:", err);
      }
    }
    fetchRealGithubStats();
  }, []);

  // Map levels to orange theme colors
  const getCubeColorClass = (level: number) => {
    switch (level) {
      case 0:
        return "bg-zinc-900 border border-zinc-800/40";
      case 1:
        return "bg-[#ff8c32]/30 border border-[#ff8c32]/40";
      case 2:
        return "bg-[#ff8c32]/55 border border-[#ff8c32]/65";
      case 3:
        return "bg-[#ff8c32]/80 border border-[#ff8c32]/90";
      case 4:
        return "bg-[#ff8c32] shadow-sm shadow-orange-500/30";
      default:
        return "bg-zinc-900 border border-zinc-800/40";
    }
  };

  return (
    <div className="w-full flex flex-col items-center gap-8 py-6">
      {/* Header */}
      <div className="flex flex-col items-center text-center gap-2 max-w-lg">
        <span className="self-center text-[10px] font-heading font-extrabold tracking-widest text-accent bg-accent/10 px-3 py-1 rounded-full uppercase">
          Open Source
        </span>
        <h3 className="text-3xl md:text-4xl font-extrabold font-heading text-white tracking-tight">
          GitHub Contributions
        </h3>
        <p className="text-sm text-zinc-400 font-sans mt-1">
          Building in public, contributing to the community
        </p>
      </div>

      {/* Stats Block (Orange Theme Numbers) */}
      <div className="flex justify-center gap-12 sm:gap-20 my-2">
        {/* Stat 1 */}
        <div className="flex flex-col items-center gap-1">
          <span className="text-3xl sm:text-4xl font-extrabold font-heading text-gradient-orange tracking-tight">
            {stats.contributions.toLocaleString()}
          </span>
          <span className="text-[10px] font-heading font-bold text-zinc-500 uppercase tracking-widest">
            Contributions
          </span>
        </div>

        {/* Stat 2 */}
        <div className="flex flex-col items-center gap-1">
          <span className="text-3xl sm:text-4xl font-extrabold font-heading text-gradient-orange tracking-tight">
            {stats.repos}
          </span>
          <span className="text-[10px] font-heading font-bold text-zinc-500 uppercase tracking-widest text-center">
            Repositories <span className="block text-[8px] text-zinc-600 font-mono mt-0.5">PUBLIC</span>
          </span>
        </div>

        {/* Stat 3 */}
        <div className="flex flex-col items-center gap-1">
          <span className="text-3xl sm:text-4xl font-extrabold font-heading text-gradient-orange tracking-tight">
            {stats.followers}
          </span>
          <span className="text-[10px] font-heading font-bold text-zinc-500 uppercase tracking-widest">
            Followers
          </span>
        </div>
      </div>

      {/* Real-time Interactive GitHub 3D Tilt Card & Grid */}
      <TiltCard className="w-full max-w-4xl glass-panel p-6 md:p-8 rounded-3xl border border-zinc-800/80 hover:border-accent/40 transition-all duration-500 relative">
        <div className="flex flex-col gap-4 overflow-x-auto scrollbar-thin items-center justify-center">
          {/* Months Label Row */}
          <div className="flex text-[9px] font-mono text-zinc-500 font-bold justify-between w-full min-w-[680px] px-8 select-none">
            <span>Aug</span>
            <span>Sep</span>
            <span>Oct</span>
            <span>Nov</span>
            <span>Dec</span>
            <span>Jan</span>
            <span>Feb</span>
            <span>Mar</span>
            <span>Apr</span>
            <span>May</span>
            <span>Jun</span>
            <span>Jul</span>
          </div>

          <div className="flex gap-3 min-w-[680px] w-full items-center">
            {/* Weekday Labels */}
            <div className="flex flex-col justify-between text-[9px] font-mono text-zinc-500 font-bold py-1 h-[82px] select-none">
              <span>Mon</span>
              <span>Wed</span>
              <span>Fri</span>
            </div>

            {/* Interactive Grid Cubes (Chronologically ordered columns) */}
            <div className="flex-1 grid grid-flow-col grid-rows-7 gap-[3.5px] py-1 relative">
              {days.length > 0
                ? days.map((day, idx) => (
                    <div
                      key={idx}
                      onMouseEnter={() => setHoveredDay(day)}
                      onMouseLeave={() => setHoveredDay(null)}
                      className={`w-[10px] h-[10px] rounded-[2px] transition-all duration-150 cursor-pointer ${getCubeColorClass(
                        day.level
                      )} hover:scale-150 hover:z-30 hover:border-2 hover:border-accent hover:shadow-[0_0_12px_rgba(255,140,50,0.9)]`}
                    />
                  ))
                : // Fallback skeleton grid while loading
                  Array.from({ length: 364 }).map((_, idx) => (
                    <div
                      key={idx}
                      className="w-[10px] h-[10px] rounded-[2px] bg-zinc-900 border border-zinc-800/40"
                    />
                  ))}
            </div>
          </div>

          {/* Active Hover Tooltip Display */}
          <div className="h-6 flex items-center justify-between w-full text-[10px] font-mono text-zinc-400 px-2 mt-1 select-none">
            <div className="text-accent font-semibold">
              {hoveredDay ? hoveredDay.countText : "Hover over any cube to view daily activity"}
            </div>

            {/* Legend */}
            <div className="flex items-center gap-1.5 text-[9px]">
              <span>Less</span>
              <div className="w-2.5 h-2.5 rounded-[1.5px] bg-zinc-900 border border-zinc-800/40" />
              <div className="w-2.5 h-2.5 rounded-[1.5px] bg-[#ff8c32]/30 border border-[#ff8c32]/40" />
              <div className="w-2.5 h-2.5 rounded-[1.5px] bg-[#ff8c32]/55 border border-[#ff8c32]/65" />
              <div className="w-2.5 h-2.5 rounded-[1.5px] bg-[#ff8c32]/80 border border-[#ff8c32]/90" />
              <div className="w-2.5 h-2.5 rounded-[1.5px] bg-[#ff8c32]" />
              <span>More</span>
            </div>
          </div>
        </div>
      </TiltCard>

      {/* Footer Profile Link */}
      <a
        href="https://github.com/wasi-747"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-wider text-zinc-400 hover:text-accent transition-colors mt-2"
      >
        <GithubIcon className="w-4 h-4" />
        <span>View full profile on GitHub</span>
        <ArrowUpRight className="w-3.5 h-3.5" />
      </a>
    </div>
  );
}
