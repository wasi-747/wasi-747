"use client";

import { useState } from "react";
import { Mail, Calendar, Check, Copy, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import TiltCard from "@/components/TiltCard";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const email = "wasisakib7846@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Main Email / Action Block */}
      <TiltCard className="lg:col-span-2 glass-panel-glow p-8 rounded-3xl hover:border-transparent transition-all duration-500">
        <div className="flex flex-col justify-between gap-8 h-full">
          <div className="flex flex-col gap-4">
            <span className="text-[10px] font-heading font-extrabold tracking-widest text-accent uppercase">
              Get in touch
            </span>
            <h3 className="text-3xl md:text-4xl font-extrabold font-heading text-white tracking-tight leading-tight">
              LET'S BUILD SOMETHING <br />
              <span className="text-gradient-orange">HIGH-PERFORMANCE</span> TOGETHER.
            </h3>
            <p className="text-sm text-zinc-400 font-sans max-w-lg mt-2 leading-relaxed">
              I am available for senior freelance contracting roles, ecosystem integrations, telemetry setup, or full-stack architectural design. Drop me a line or schedule a briefing call.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            {/* Email button */}
            <button
              onClick={handleCopyEmail}
              className="flex items-center justify-between gap-4 bg-zinc-900 border border-zinc-800 hover:border-accent/40 text-white px-6 py-4 rounded-2xl transition-all duration-300 group cursor-pointer text-left w-full sm:w-auto"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-zinc-950 flex items-center justify-center text-accent group-hover:text-accent-warm transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-heading font-bold text-zinc-500 uppercase tracking-wider">
                    Copy Email Address
                  </div>
                  <div className="text-sm font-sans font-medium text-zinc-300">
                    {email}
                  </div>
                </div>
              </div>
              <div className="text-zinc-500 group-hover:text-accent transition-colors ml-4">
                {copied ? (
                  <Check className="w-5 h-5 text-emerald-500" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </div>
            </button>

            {/* Book on Cal.com button */}
            <a
              href="https://cal.com/wasiur"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-4 bg-gradient-to-r from-accent to-accent-warm hover:from-accent-warm hover:to-accent text-zinc-950 px-6 py-4 rounded-2xl transition-all duration-300 group transform hover:scale-[1.02] active:scale-95 shadow-lg shadow-orange-950/15 w-full sm:w-auto"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-zinc-950/20 flex items-center justify-center text-zinc-950">
                  <Calendar className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="text-[10px] font-heading font-extrabold text-zinc-900/60 uppercase tracking-wider">
                    Booking Link
                  </div>
                  <div className="text-sm font-heading font-bold">
                    Schedule briefing call
                  </div>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-zinc-950 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </TiltCard>

      {/* Side Links / Alternate Info Block */}
      <TiltCard className="glass-panel p-8 rounded-3xl hover:border-transparent transition-all duration-500">
        <div className="flex flex-col justify-between gap-6 h-full">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-heading font-extrabold tracking-wider text-zinc-500 uppercase">
                Alternative Contact
              </span>
              <div className="text-sm font-sans font-medium text-zinc-300 mt-1">
                wasiursakib23@gmail.com
              </div>
              <p className="text-[11px] text-zinc-500 font-sans mt-0.5">
                Available for general inquiries or secondary channels.
              </p>
            </div>

            <div className="h-px bg-zinc-900 w-full" />

            {/* Social Links List */}
            <div className="flex flex-col gap-3">
              <span className="text-[10px] font-heading font-extrabold tracking-wider text-zinc-500 uppercase">
                Social Profiles
              </span>
              
              <a
                href="https://github.com/wasi-747"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-zinc-900/50 hover:bg-zinc-900 border border-zinc-900 hover:border-zinc-800 transition-all duration-200 group text-zinc-300 hover:text-white"
              >
                <div className="flex items-center gap-2.5">
                  <GithubIcon className="w-4 h-4 text-zinc-400 group-hover:text-accent transition-colors" />
                  <span className="text-xs font-heading font-bold uppercase tracking-wider">GitHub</span>
                </div>
                <span className="text-xs font-mono text-zinc-500 group-hover:text-accent-warm transition-colors">@wasi-747</span>
              </a>

              <a
                href="https://linkedin.com/in/wasiur-rahman-sakib"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-zinc-900/50 hover:bg-zinc-900 border border-zinc-900 hover:border-zinc-800 transition-all duration-200 group text-zinc-300 hover:text-white"
              >
                <div className="flex items-center gap-2.5">
                  <LinkedinIcon className="w-4 h-4 text-zinc-400 group-hover:text-accent transition-colors" />
                  <span className="text-xs font-heading font-bold uppercase tracking-wider">LinkedIn</span>
                </div>
                <span className="text-xs font-mono text-zinc-500 group-hover:text-accent-warm transition-colors">/in/wasiur-rahman-sakib</span>
              </a>
            </div>
          </div>

          {/* Local time tracker or simple footer note */}
          <div className="text-[10px] font-mono text-zinc-600">
            DESIGNED & DEPLOYED IN 2026
          </div>
        </div>
      </TiltCard>
    </div>
  );
}
