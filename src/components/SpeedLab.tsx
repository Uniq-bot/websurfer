"use client";

import React, { useState } from "react";
import { Activity, Zap, Film, Gamepad2, CloudDownload, Play, CheckCircle2 } from "lucide-react";

export default function SpeedLab() {
  const [selectedSpeed, setSelectedSpeed] = useState<number>(300);
  const [testing, setTesting] = useState<boolean>(false);
  const [testResult, setTestResult] = useState<{
    ping: string;
    jitter: string;
    movieTime: string;
    gameTime: string;
    backupTime: string;
    dash: number;
  }>({
    ping: "2.1 ms",
    jitter: "0.4 ms",
    movieTime: "6.5 mins",
    gameTime: "26 mins",
    backupTime: "2.1 mins",
    dash: 560,
  });

  const speedConfigs: Record<
    number,
    { ping: string; jitter: string; movieTime: string; gameTime: string; backupTime: string; dash: number }
  > = {
    80: { ping: "3.8 ms", jitter: "0.8 ms", movieTime: "25 mins", gameTime: "1.7 hrs", backupTime: "8 mins", dash: 380 },
    150: { ping: "2.9 ms", jitter: "0.6 ms", movieTime: "13 mins", gameTime: "53 mins", backupTime: "4.2 mins", dash: 480 },
    300: { ping: "2.1 ms", jitter: "0.4 ms", movieTime: "6.5 mins", gameTime: "26 mins", backupTime: "2.1 mins", dash: 560 },
    1000: { ping: "1.2 ms", jitter: "0.2 ms", movieTime: "1.8 mins", gameTime: "7.8 mins", backupTime: "38 secs", dash: 620 },
  };

  const handleSelectSpeed = (speed: number) => {
    setSelectedSpeed(speed);
    setTestResult(speedConfigs[speed]);
  };

  const runTest = () => {
    setTesting(true);
    setTimeout(() => {
      setTesting(false);
      const conf = speedConfigs[selectedSpeed];
      setTestResult({
        ...conf,
        ping: (parseFloat(conf.ping) - 0.2).toFixed(1) + " ms",
      });
    }, 900);
  };

  const currentConf = speedConfigs[selectedSpeed];

  return (
    <section className="py-20 sm:py-28 bg-white" id="speed-lab">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative rounded-3xl bg-[#0B0F19] text-white p-8 sm:p-14 overflow-hidden shadow-2xl border border-white/10">
          
          {/* Glowing Ambient Backdrop */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E5440C]/20 rounded-full blur-[120px] pointer-events-none" />

          {/* Header: Big & Punchy */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-white/10 mb-10">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[#FF7A45] text-xs font-black uppercase tracking-wider mb-3">
                <Zap className="w-3.5 h-3.5 fill-current" />
                <span>INTERACTIVE SPEED LAB</span>
              </div>
              <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-none">
                SIMULATE REAL <br />
                <span className="font-serif italic text-[#FF8F68] font-normal">
                  BANDWIDTH.
                </span>
              </h2>
            </div>

            {/* Quick Speed Switcher */}
            <div className="inline-flex items-center gap-1.5 p-1.5 rounded-full bg-white/10 backdrop-blur-md self-start lg:self-auto border border-white/10">
              {[80, 150, 300, 1000].map((spd) => (
                <button
                  key={spd}
                  onClick={() => handleSelectSpeed(spd)}
                  className={`px-4 py-2 rounded-full text-xs font-mono-num font-black transition-all cursor-pointer ${
                    selectedSpeed === spd
                      ? "bg-[#E5440C] text-white shadow-lg shadow-[#E5440C]/40"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  {spd === 1000 ? "1 Gbps" : `${spd} Mbps`}
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Attraction Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Speedometer Centerpiece */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="relative w-64 h-64 sm:w-76 sm:h-76">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 240 240">
                  <circle
                    className="text-white/10"
                    strokeWidth="14"
                    stroke="currentColor"
                    fill="none"
                    cx="120"
                    cy="120"
                    r="100"
                  />
                  <circle
                    className="text-[#E5440C] transition-all duration-700 ease-out"
                    strokeWidth="14"
                    strokeDasharray="628"
                    strokeDashoffset={628 - currentConf.dash}
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="none"
                    cx="120"
                    cy="120"
                    r="100"
                  />
                </svg>

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <div className="text-6xl sm:text-7xl font-mono-num font-black text-white tracking-tight leading-none mb-1">
                    {selectedSpeed === 1000 ? "1.0" : selectedSpeed}
                  </div>
                  <div className="text-xs uppercase tracking-widest text-[#FF8F68] font-black mb-4">
                    {selectedSpeed === 1000 ? "GIGABIT SYMMETRIC" : "MBPS SYMMETRIC"}
                  </div>

                  <button
                    onClick={runTest}
                    disabled={testing}
                    className="text-xs font-black px-5 py-2.5 rounded-full bg-[#E5440C] hover:bg-[#CC3B08] text-white shadow-lg transition-all cursor-pointer flex items-center gap-1.5"
                  >
                    <Play className="w-3 h-3 fill-current" />
                    <span>{testing ? "Testing Ping..." : "Run Live Ping Test"}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Right Telemetry & Download Simulation Cards */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Telemetry Row */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                      <Activity className="w-3 h-3 text-[#E5440C]" />
                      <span>Kathmandu Gateway Ping</span>
                    </div>
                    <div className="text-3xl font-mono-num font-black text-white">
                      {testResult.ping}
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded-full">
                    Optimal
                  </span>
                </div>

                <div className="p-5 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                      <Zap className="w-3 h-3 text-[#E5440C]" />
                      <span>Jitter Stability</span>
                    </div>
                    <div className="text-3xl font-mono-num font-black text-white">
                      {testResult.jitter}
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-sky-400 bg-sky-500/10 px-2 py-1 rounded-full">
                    0% Loss
                  </span>
                </div>
              </div>

              {/* Download Time Simulator: Visual Attraction */}
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-black uppercase tracking-wider text-slate-300">
                    Live Download Simulator (Estimated)
                  </span>
                  <span className="text-xs font-mono-num font-bold text-[#FF8F68]">
                    @{selectedSpeed === 1000 ? "1 Gbps" : `${selectedSpeed} Mbps`}
                  </span>
                </div>

                <div className="space-y-4">
                  {/* 4K Movie */}
                  <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5">
                    <div className="flex items-center gap-3">
                      <Film className="w-4 h-4 text-[#FF7A45]" />
                      <div>
                        <div className="text-xs font-black text-white">4K UHD Movie (15 GB)</div>
                        <div className="text-[10px] text-slate-400 font-medium">Dolby Atmos • Zero buffering</div>
                      </div>
                    </div>
                    <div className="text-sm font-mono-num font-black text-white bg-white/10 px-3 py-1 rounded-lg">
                      {testResult.movieTime}
                    </div>
                  </div>

                  {/* AAA Game */}
                  <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5">
                    <div className="flex items-center gap-3">
                      <Gamepad2 className="w-4 h-4 text-[#FF7A45]" />
                      <div>
                        <div className="text-xs font-black text-white">Console Game Update (60 GB)</div>
                        <div className="text-[10px] text-slate-400 font-medium">PlayStation / Steam fastpath</div>
                      </div>
                    </div>
                    <div className="text-sm font-mono-num font-black text-white bg-white/10 px-3 py-1 rounded-lg">
                      {testResult.gameTime}
                    </div>
                  </div>

                  {/* Cloud Backup */}
                  <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5">
                    <div className="flex items-center gap-3">
                      <CloudDownload className="w-4 h-4 text-[#FF7A45]" />
                      <div>
                        <div className="text-xs font-black text-white">High-Res Cloud Drive (5 GB)</div>
                        <div className="text-[10px] text-slate-400 font-medium">Symmetric upload speed</div>
                      </div>
                    </div>
                    <div className="text-sm font-mono-num font-black text-white bg-white/10 px-3 py-1 rounded-lg">
                      {testResult.backupTime}
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
