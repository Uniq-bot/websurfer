"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Play, CheckCircle2 } from "lucide-react";

interface HeroProps {
  onOpenOrder: (planName?: string) => void;
}

export default function Hero({ onOpenOrder }: HeroProps) {
  return (
    <section className="relative pt-12 pb-24 overflow-hidden bg-white">
      {/* Subtle Ambient Radial Glow */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-gradient-to-b from-[#E5440C]/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Typography */}
          <div className="lg:col-span-7 flex flex-col items-start">


            {/* Main Headline with Serif Imperfection & Sans Precision */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-slate-950 leading-[1.08] mb-6">
              <span className="font-sans font-extrabold tracking-tight">Pure Optical Fiber.</span> <br />
              <span className="font-serif italic font-normal text-[#E5440C] tracking-normal">Uncompromising Speed.</span>
            </h1>

            {/* CTA Group */}
            <div className="flex items-center gap-4 flex-wrap mb-12">
              <button
                onClick={() => onOpenOrder()}
                className="inline-flex items-center gap-2.5 bg-[#E5440C] hover:bg-[#CC3B08] text-white font-semibold text-base px-7 py-3.5 rounded-full shadow-lg shadow-[#E5440C]/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>Explore Fiber Packages</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#speed-lab"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-slate-200 text-slate-700 font-semibold text-sm hover:border-[#E5440C]/40 hover:text-[#E5440C] hover:bg-slate-50 transition-all"
              >
                <div className="w-6 h-6 rounded-full bg-[#FFF3EE] flex items-center justify-center text-[#E5440C]">
                  <Play className="w-3 h-3 fill-current ml-0.5" />
                </div>
                <span>Simulate Speed Live</span>
              </a>
            </div>

            {/* Metric Strip */}
            <div className="w-full pt-8 border-t border-slate-100 grid grid-cols-3 gap-6">
              <div>
                <div className="text-2xl sm:text-3xl font-mono-num font-bold text-slate-900 tracking-tight">
                  99.98%
                </div>
                <div className="text-xs uppercase tracking-wider text-slate-400 font-medium mt-1">
                  Network Uptime
                </div>
              </div>

              <div className="border-l border-slate-200/80 pl-6">
                <div className="text-2xl sm:text-3xl font-mono-num font-bold text-slate-900 tracking-tight">
                  &lt; 3 ms
                </div>
                <div className="text-xs uppercase tracking-wider text-slate-400 font-medium mt-1">
                  Gateway Latency
                </div>
              </div>

              <div className="border-l border-slate-200/80 pl-6">
                <div className="text-2xl sm:text-3xl font-mono-num font-bold text-slate-900 tracking-tight">
                  1 Gbps
                </div>
                <div className="text-xs uppercase tracking-wider text-slate-400 font-medium mt-1">
                  Peak Throughput
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Visual & Floating Dynamic Gauges */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-visible">
              {/* Architecture Photo Container */}
              <div className="relative h-[440px] sm:h-[480px] w-full rounded-2xl overflow-hidden shadow-2xl border border-slate-100 bg-slate-900">
                <Image
                  src="/assets/media_1795429318416_29fcdfa6.jpg"
                  alt="WebSurfer Optical Infrastructure"
                  fill
                  className="object-cover object-center transform hover:scale-105 transition-transform duration-1000 ease-out"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-slate-950/10 to-transparent" />
              </div>

              {/* Floating Speed Gauge 1: 300 Mbps (Top Left) */}
              <div className="hidden sm:flex absolute -top-4 -left-6 bg-white/95 backdrop-blur-md border border-[#E5440C]/20 rounded-2xl p-4 shadow-xl flex-col items-center gap-1.5 transition-transform hover:-translate-y-1">
                <div className="relative w-16 h-16">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                    <path
                      className="text-slate-100"
                      strokeWidth="3.2"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      className="text-[#E5440C]"
                      strokeDasharray="85, 100"
                      strokeWidth="3.2"
                      strokeLinecap="round"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-xs font-mono-num font-bold text-slate-900 leading-none">300</span>
                    <span className="text-[9px] font-bold text-slate-400">MBPS</span>
                  </div>
                </div>
                <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wider">
                  Pure Symmetric
                </span>
              </div>

              {/* Floating Speed Gauge 2: 1 Gbps (Top Right) */}
              <div className="hidden sm:flex absolute top-16 -right-6 bg-white/95 backdrop-blur-md border border-slate-200 rounded-2xl p-4 shadow-xl flex-col items-center gap-1.5 transition-transform hover:-translate-y-1">
                <div className="relative w-16 h-16">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                    <path
                      className="text-slate-100"
                      strokeWidth="3.2"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      className="text-slate-900"
                      strokeDasharray="94, 100"
                      strokeWidth="3.2"
                      strokeLinecap="round"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-xs font-mono-num font-bold text-slate-900 leading-none">1</span>
                    <span className="text-[9px] font-bold text-slate-400">GBPS</span>
                  </div>
                </div>
                <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wider">
                  Wi-Fi 6 GigaMesh
                </span>
              </div>

              {/* Bottom Live Status Capsule */}
              <div className="absolute -bottom-5 left-4 right-4 bg-white/95 backdrop-blur-md border border-slate-200 rounded-xl p-3.5 shadow-xl flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-emerald-50 flex items-center justify-center">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 pulse-green" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">
                      Kathmandu Optical Core Hub
                    </div>
                    <div className="text-[11px] text-slate-500">
                      0.0% Packet Loss • 24/7 NOC Active
                    </div>
                  </div>
                </div>
                <div className="hidden sm:inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Optimal</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
