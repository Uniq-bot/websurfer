"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, Play, CheckCircle2, Zap, Wifi, Tv } from "lucide-react";



export default function Hero({ onOpenOrder }: any) {
  const [activeSpeedPreview, setActiveSpeedPreview] = useState<number>(300);

  const previews: Record<number, { label: string; ping: string; stream: string }> = {
    150: { label: "150 Mbps", ping: "2.8 ms", stream: "4K Seamless" },
    300: { label: "300 Mbps", ping: "2.1 ms", stream: "8K + Gaming" },
    1000: { label: "1 Gbps", ping: "1.2 ms", stream: "Ultra GigaMesh" },
  };

  return (
    <section className="relative pt-10 pb-20 sm:pb-28 overflow-hidden bg-white">
      {/* Dynamic Ambient Background Glows */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-b from-[#E5440C]/10 via-[#FF7A45]/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute -top-20 -left-20 w-[450px] h-[450px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Big Bold Typography & High-Impact Perks */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
          

            {/* Massive Punchy Headline */}
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-slate-950 leading-[0.98] mb-6">
              PURE FIBER. <br />
              <span className="font-serif italic font-normal text-[#E5440C]">
                REAL SPEED.
              </span>
            </h1>

            {/* Short, Punchy 1-Sentence Description */}
            <p className="text-lg sm:text-xl text-slate-600 font-medium leading-snug mb-8 max-w-xl">
              Zero copper degradation. True symmetric upload & download speeds, paired with 175+ live HD channels.
            </p>

            {/* Interactive Speed Switcher Bar */}
            <div className="w-full max-w-lg p-2 rounded-2xl bg-slate-50 border border-slate-200/90 mb-8 flex items-center justify-between gap-2 shadow-sm">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider pl-2">
                Speed:
              </span>
              <div className="flex items-center gap-1.5">
                {[150, 300, 1000].map((spd) => (
                  <button
                    key={spd}
                    onClick={() => setActiveSpeedPreview(spd)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-mono-num font-bold transition-all cursor-pointer ${
                      activeSpeedPreview === spd
                        ? "bg-[#E5440C] text-white shadow-md shadow-[#E5440C]/25"
                        : "bg-white text-slate-700 hover:text-slate-950 border border-slate-200"
                    }`}
                  >
                    {spd === 1000 ? "1 Gbps" : `${spd} Mbps`}
                  </button>
                ))}
              </div>
              <div className="hidden sm:flex items-center gap-2 pr-2 text-xs font-semibold text-emerald-600">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>{previews[activeSpeedPreview].ping} Ping</span>
              </div>
            </div>

            {/* CTA Group */}
            <div className="flex items-center gap-4 flex-wrap mb-10">
              <button
                onClick={() => onOpenOrder()}
                className="inline-flex items-center gap-3 bg-[#E5440C] hover:bg-[#CC3B08] text-white font-bold text-base px-8 py-4 rounded-full shadow-xl shadow-[#E5440C]/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>Get Connected</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <a
                href="#speed-lab"
                className="inline-flex items-center gap-2.5 px-6 py-4 rounded-full border border-slate-200 text-slate-800 font-bold text-sm hover:border-[#E5440C] hover:text-[#E5440C] hover:bg-slate-50 transition-all"
              >
                <div className="w-6 h-6 rounded-full bg-[#FFF3EE] flex items-center justify-center text-[#E5440C]">
                  <Play className="w-3 h-3 fill-current ml-0.5" />
                </div>
                <span>Simulate Speed</span>
              </a>
            </div>

            {/* Big Stat Callouts */}
            <div className="w-full pt-6 border-t border-slate-100 grid grid-cols-3 gap-6">
              <div>
                <div className="text-3xl sm:text-4xl font-mono-num font-black text-slate-950 tracking-tight">
                  99.98%
                </div>
                <div className="text-[11px] uppercase tracking-wider text-slate-400 font-bold mt-1">
                  Uptime SLA
                </div>
              </div>

              <div className="border-l border-slate-200/80 pl-6">
                <div className="text-3xl sm:text-4xl font-mono-num font-black text-[#E5440C] tracking-tight">
                  &lt; 2 ms
                </div>
                <div className="text-[11px] uppercase tracking-wider text-slate-400 font-bold mt-1">
                  Nepal IXP Ping
                </div>
              </div>

              <div className="border-l border-slate-200/80 pl-6">
                <div className="text-3xl sm:text-4xl font-mono-num font-black text-slate-950 tracking-tight">
                  175+
                </div>
                <div className="text-[11px] uppercase tracking-wider text-slate-400 font-bold mt-1">
                  HD TV Channels
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Centerpiece & Attractions */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-visible">
              
              {/* Image Frame */}
              <div className="relative h-[420px] sm:h-[480px] w-full rounded-3xl overflow-hidden shadow-2xl border-2 border-slate-100 bg-slate-900 group">
                <Image
                  src="/assets/media_1795429318416_29fcdfa6.png"
                  alt="WebSurfer Optical Infrastructure"
                  fill
                  className="object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
                
                {/* Floating Overlay Badge on Top Left */}
                <div className="absolute top-5 left-5 bg-black/60 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 flex items-center gap-2 text-white">
                  <Zap className="w-3.5 h-3.5 text-[#FF7A45] fill-current" />
                  <span className="text-xs font-mono-num font-bold">100% Symmetrical</span>
                </div>
              </div>

              {/* Floating Attraction 1: Speed Gauge Card (Top Right) */}
              <div className="absolute -top-6 -right-3 sm:-right-6 bg-white/95 backdrop-blur-md border-2 border-[#E5440C]/25 rounded-2xl p-4 shadow-2xl flex flex-col items-center gap-1.5 transition-transform hover:-translate-y-1">
                <div className="relative w-16 h-16">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                    <path
                      className="text-slate-100"
                      strokeWidth="3.4"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      className="text-[#E5440C]"
                      strokeDasharray="92, 100"
                      strokeWidth="3.4"
                      strokeLinecap="round"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-sm font-mono-num font-black text-slate-900 leading-none">
                      {activeSpeedPreview === 1000 ? "1" : activeSpeedPreview}
                    </span>
                    <span className="text-[8px] font-black text-slate-400">
                      {activeSpeedPreview === 1000 ? "GBPS" : "MBPS"}
                    </span>
                  </div>
                </div>
                <span className="text-[10px] font-black text-[#E5440C] uppercase tracking-wider">
                  Peak Velocity
                </span>
              </div>

              {/* Floating Attraction 2: Dual-Band Wi-Fi 6 Chip (Bottom Left) */}
              <div className="hidden sm:flex absolute bottom-24 -left-6 bg-white/95 backdrop-blur-md border border-slate-200 rounded-2xl p-3.5 shadow-xl items-center gap-3 transition-transform hover:-translate-y-1">
                <div className="w-10 h-10 rounded-xl bg-[#FFF3EE] text-[#E5440C] flex items-center justify-center">
                  <Wifi className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-black text-slate-900">Wi-Fi 6 GigaMesh</div>
                  <div className="text-[10px] text-slate-500 font-semibold">OFDMA • Zero Dead Zones</div>
                </div>
              </div>

              {/* Bottom Live Core Hub Bar */}
              <div className="absolute -bottom-5 left-3 right-3 sm:left-4 sm:right-4 bg-white/95 backdrop-blur-md border border-slate-200 rounded-2xl p-3.5 shadow-xl flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-emerald-50 flex items-center justify-center">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 pulse-green" />
                  </div>
                  <div>
                    <div className="text-xs font-black text-slate-900">
                      Kathmandu Optical Core Hub
                    </div>
                    <div className="text-[11px] text-slate-500 font-medium">
                      0.0% Loss • Direct Google & Netflix Edge
                    </div>
                  </div>
                </div>
                <div className="inline-flex items-center gap-1 text-[11px] font-black px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>ONLINE</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
