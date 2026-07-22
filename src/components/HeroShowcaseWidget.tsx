"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Terminal, User, Copy, Check, Play, Sparkles } from "lucide-react";
import ProfilePhotoTransition from "@/components/ProfilePhotoTransition";

const CODE_SNIPPET = `// Wasiur Rahman Sakib — Full-Stack & AI Architect
import { Engineer } from '@system/core';
import { AIWorkflows, Telemetry, Web3 } from '@tech/stack';

class FullStackArchitect extends Engineer {
  readonly name = "Wasiur Rahman Sakib";
  readonly location = "Dhaka, Bangladesh";
  
  public dailyStack = [
    "Next.js", "TypeScript", "React", "Node.js", 
    "Python", "FastAPI", "MongoDB", "AI Agents"
  ];

  async buildScalableSystem(spec: SystemSpec) {
    const aiAgents = await AIWorkflows.deploy({
      routing: "LLM-Router-v2",
      embeddings: "RAG-Vector-DB"
    });

    return new ProductionApp({
      frontend: "Next.js-App-Router",
      backend: "FastAPI-Node-Microservices",
      ai: aiAgents,
      status: "100% Audit Passed"
    });
  }
}

export default new FullStackArchitect();`;

const CLI_COMMANDS: Record<string, string> = {
  help: `Available CLI commands:
  - skills   : View active tech stack & tools
  - projects : List live production apps
  - contact  : Get direct email & social links
  - status   : Check current role availability
  - clear    : Clear terminal screen`,
  skills: `DAILY TECH STACK:
  • Frontend : Next.js, React, TypeScript, TailwindCSS, Framer Motion
  • Backend  : Node.js, Express, Python, FastAPI, REST APIs, WebSockets
  • AI & ML  : Vercel AI SDK, Gemini API, AI Agents, LLM Routing, RAG
  • Databases: MongoDB, Firebase, Mongoose`,
  projects: `FEATURED LIVE BUILDS:
  1. NeuroLink    [AI Wellness Platform | FastAPI + RAG]
  2. trustfund    [Milestone Fintech | Audit Ledger]
  3. Sol Mintx    [Solana SPL Token Pipeline]
  4. LifeOS       [IoT Hardware Telemetry Daemon]`,
  contact: `CONTACT INFO:
  • Email    : shakibsalehin1123@gmail.com
  • LinkedIn : linkedin.com/in/wasiur-rahman-sakib
  • Portfolio: wasi-747.vercel.app`,
  status: `STATUS:
  ● Available for Full-Stack & AI Engineering Roles (Remote / Hybrid)`,
};

export default function HeroShowcaseWidget() {
  const [activeTab, setActiveTab] = useState<"ide" | "terminal" | "profile">("profile");
  const [copied, setCopied] = useState(false);
  const [terminalHistory, setTerminalHistory] = useState<
    { cmd: string; output: string }[]
  >([
    {
      cmd: "system --info",
      output: "Wasiur Sakib OS v2.6.0 [Full-Stack & AI Architecture Engine Ready]",
    },
    {
      cmd: "help",
      output: CLI_COMMANDS.help,
    },
  ]);
  const [inputVal, setInputVal] = useState("");

  const handleCopyCode = () => {
    navigator.clipboard.writeText(CODE_SNIPPET);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRunCommand = (cmdStr: string) => {
    const cleanCmd = cmdStr.trim().toLowerCase();
    if (!cleanCmd) return;

    if (cleanCmd === "clear") {
      setTerminalHistory([]);
      setInputVal("");
      return;
    }

    const output = CLI_COMMANDS[cleanCmd] || `Command not found: '${cleanCmd}'. Type 'help' for available commands.`;
    setTerminalHistory((prev) => [...prev, { cmd: cleanCmd, output }]);
    setInputVal("");
  };

  return (
    <div className="w-full max-w-xl mx-auto flex flex-col rounded-3xl overflow-hidden glass-panel border border-zinc-800/80 shadow-2xl bg-zinc-950/80 backdrop-blur-xl">
      {/* Widget Top Header Bar */}
      <div className="flex items-center justify-between px-5 py-3.5 border-b border-zinc-800/80 bg-zinc-900/60 select-none">
        {/* Window Control Buttons */}
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
          <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
          <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
          <span className="text-[11px] font-mono text-zinc-500 ml-2 hidden sm:inline-block">
            {activeTab === "ide" ? "Architect.ts" : activeTab === "terminal" ? "zsh — terminal" : "Profile.view"}
          </span>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-1 bg-zinc-950/90 p-1 rounded-xl border border-zinc-800/80">
          <button
            onClick={() => setActiveTab("profile")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-heading font-semibold transition-all duration-300 cursor-pointer ${
              activeTab === "profile"
                ? "bg-accent text-zinc-950 shadow-md font-bold"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            <User className="w-3.5 h-3.5" />
            <span>PROFILE</span>
          </button>

          <button
            onClick={() => setActiveTab("ide")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-heading font-semibold transition-all duration-300 cursor-pointer ${
              activeTab === "ide"
                ? "bg-accent text-zinc-950 shadow-md font-bold"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>IDE</span>
          </button>

          <button
            onClick={() => setActiveTab("terminal")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-heading font-semibold transition-all duration-300 cursor-pointer ${
              activeTab === "terminal"
                ? "bg-accent text-zinc-950 shadow-md font-bold"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>CLI</span>
          </button>
        </div>
      </div>

      {/* Widget Content Body */}
      <div className="p-4 sm:p-6 min-h-[380px] sm:min-h-[420px] flex items-center justify-center relative overflow-hidden">
        <AnimatePresence mode="wait">
          {/* TAB 1: PROFILE PHOTO TRANSITION */}
          {activeTab === "profile" && (
            <motion.div
              key="profile-tab"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3 }}
              className="w-full flex items-center justify-center py-2"
            >
              <ProfilePhotoTransition />
            </motion.div>
          )}

          {/* TAB 2: INTERACTIVE CODE IDE */}
          {activeTab === "ide" && (
            <motion.div
              key="ide-tab"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full flex flex-col"
            >
              {/* Copy Code Toolbar */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-zinc-800/60">
                <span className="text-xs font-mono text-accent flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>TypeScript — Production System Architecture</span>
                </span>
                <button
                  onClick={handleCopyCode}
                  className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-zinc-900 hover:bg-zinc-800 text-[11px] font-mono text-zinc-300 hover:text-white border border-zinc-800 transition-colors duration-200 cursor-pointer"
                >
                  {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>{copied ? "COPIED" : "COPY CODE"}</span>
                </button>
              </div>

              {/* Code Snippet Box */}
              <pre className="font-mono text-[11px] sm:text-xs text-zinc-300 leading-relaxed overflow-x-auto p-3.5 rounded-2xl bg-zinc-950/90 border border-zinc-900 max-h-[300px] selection:bg-accent selection:text-zinc-950">
                <code>{CODE_SNIPPET}</code>
              </pre>
            </motion.div>
          )}

          {/* TAB 3: INTERACTIVE CLI TERMINAL */}
          {activeTab === "terminal" && (
            <motion.div
              key="terminal-tab"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full flex flex-col gap-3 font-mono text-xs text-zinc-300"
            >
              {/* Quick Command Pills */}
              <div className="flex flex-wrap gap-1.5 pb-2 border-b border-zinc-800/60">
                <span className="text-[10px] text-zinc-500 self-center uppercase mr-1">Quick Run:</span>
                {["help", "skills", "projects", "contact", "status", "clear"].map((cmd) => (
                  <button
                    key={cmd}
                    onClick={() => handleRunCommand(cmd)}
                    className="px-2 py-0.5 rounded bg-zinc-900 hover:bg-accent hover:text-zinc-950 text-[10px] font-mono text-zinc-400 border border-zinc-800 transition-colors duration-200 cursor-pointer"
                  >
                    &gt; {cmd}
                  </button>
                ))}
              </div>

              {/* Terminal History */}
              <div className="flex-1 overflow-y-auto max-h-[250px] flex flex-col gap-3 p-3 rounded-2xl bg-zinc-950/90 border border-zinc-900">
                {terminalHistory.map((item, idx) => (
                  <div key={idx} className="flex flex-col gap-1">
                    <div className="flex items-center gap-2 text-accent">
                      <span>wasiur@sakib-os ~ %</span>
                      <span className="text-white font-semibold">{item.cmd}</span>
                    </div>
                    <pre className="text-zinc-400 whitespace-pre-wrap leading-relaxed pl-3 border-l border-zinc-800">
                      {item.output}
                    </pre>
                  </div>
                ))}
              </div>

              {/* Command Input Form */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleRunCommand(inputVal);
                }}
                className="flex items-center gap-2 px-3 py-2 rounded-xl bg-zinc-900 border border-zinc-800"
              >
                <span className="text-accent">&gt;</span>
                <input
                  type="text"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  placeholder="Type a command (e.g. skills, projects)..."
                  className="w-full bg-transparent text-xs text-white placeholder-zinc-500 focus:outline-none font-mono"
                />
                <button type="submit" className="text-zinc-400 hover:text-accent cursor-pointer">
                  <Play className="w-3.5 h-3.5" />
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
