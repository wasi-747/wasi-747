"use client";

import { motion } from "framer-motion";
import { Award, Zap, Code, Shield } from "lucide-react";

interface StatItemProps {
  value: string;
  label: string;
  icon: React.ReactNode;
}

function StatCard({ value, label, icon }: StatItemProps) {
  return (
    <div className="glass-panel p-5 rounded-2xl flex items-center gap-4 hover:border-accent/40 transition-all duration-300 group">
      <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-zinc-950 transition-all duration-300">
        {icon}
      </div>
      <div>
        <div className="text-2xl font-bold font-heading text-white group-hover:text-accent transition-colors">
          {value}
        </div>
        <div className="text-xs text-zinc-400 font-sans tracking-wide uppercase">
          {label}
        </div>
      </div>
    </div>
  );
}

export default function BentoStats() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <StatCard
        value="4+ Years"
        label="Ecosystem Dev"
        icon={<Code className="w-6 h-6" />}
      />
      <StatCard
        value="6+ Apps"
        label="Deployed Prod"
        icon={<Award className="w-6 h-6" />}
      />
      <StatCard
        value="< 100ms"
        label="API Latency"
        icon={<Zap className="w-6 h-6" />}
      />
      <StatCard
        value="100%"
        label="Telemetry Uptime"
        icon={<Shield className="w-6 h-6" />}
      />
    </div>
  );
}
