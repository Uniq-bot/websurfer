"use client";

import React, { useState } from "react";
import { Check, Activity, Zap, Shield, Laptop } from "lucide-react";

export default function SpeedLab() {
  const [selectedSpeed, setSelectedSpeed] = useState<number>(300);
  const [testing, setTesting] = useState<boolean>(false);
  const [testResult, setTestResult] = useState<{
    ping: string;
    jitter: string;
    buffer: string;
    devices: string;
  }>({
    ping: "2.1 ms",
    jitter: "0.4 ms",
    buffer: "0.0 sec",
    devices: "35+ devices",
  });

  const speedConfigs: Record<
    number,
    { ping: string; jitter: string; buffer: string; devices: string; dash: number; label: string }
  > = {
    80: { ping: "3.8 ms", jitter: "0.8 ms", buffer: "0.4 sec", devices: "8-12 devices", dash: 380, label: "80 Mbps" },
    150: { ping: "2.9 ms", jitter: "0.6 ms", buffer: "0.1 sec", devices: "15-20 devices", dash: 480, label: "150 Mbps" },
    300: { ping: "2.1 ms", jitter: "0.4 ms", buffer: "0.0 sec", devices: "35+ devices", dash: 560, label: "300 Mbps" },
    1000: { ping: "1.2 ms", jitter: "0.2 ms", buffer: "0.0 sec", devices: "80+ devices", dash: 620, label: "1 Gbps" },
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
        ping: (parseFloat(conf.ping) - 0.2).toFixed(1) + " ms",
        jitter: conf.jitter,
        buffer: conf.buffer,
        devices: conf.devices,
      });
    }, 1200);
  };

  const currentConf = speedConfigs[selectedSpeed];

  return (
    <section className="py-24 bg-white" id="speed-lab">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative rounded-3xl bg-[#0A0D14] text-white p-8 sm:p-14 overflow-hidden shadow-2xl border border-white/5">
          {/* Subtle Accent Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#E5440C]/20 rounded-full blur-[100px] pointer-events-none" />

          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-10 border-b border-white/10 mb-12">
            <div>
              <div className="text-[11px] font-bold tracking-widest text-[#FF7A45] uppercase mb-2">
                INTERACTIVE PERFORMANCE LAB
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-white">
                <span className="font-sans font-bold">Simulate The</span>{" "}
                <span className="font-serif italic text-[#FF8F68]">Core Performance</span>
              </h2>
            </div>

            {/* Speed Switcher Tabs */}
            <div className="inline-flex items-center gap-1.5 p-1.5 rounded-full bg-white/10 backdrop-blur-md self-start lg:self-auto">
              {[80, 150, 300, 1000].map((spd) => (
                <button
                  key={spd}
                  onClick={() => handleSelectSpeed(spd)}
                  className={`px-4 py-1.5 rounded-full text-xs font-mono-num font-semibold transition-all cursor-pointer ${
                    selectedSpeed === spd
                      ? "bg-[#E5440C] text-white shadow"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  {spd === 1000 ? "1 Gbps" : `${spd} Mbps`}
                </button>
              ))}
            </div>
          </div>

          {/* Dashboard Body */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Speed Radial Gauge */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="relative w-64 h-64 sm:w-72 sm:h-72">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 240 240">
                  <circle
                    className="text-white/10"
                    strokeWidth="12"
                    stroke="currentColor"
                    fill="none"
                    cx="120"
                    cy="120"
                    r="100"
                  />
                  <circle
                    className="text-[#E5440C] transition-all duration-700 ease-out"
                    strokeWidth="12"
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
                  <div className="text-5xl sm:text-6xl font-mono-num font-extrabold text-white tracking-tight leading-none mb-1">
                    {selectedSpeed === 1000 ? "1.0" : selectedSpeed}
                  </div>
                  <div className="text-xs uppercase tracking-widest text-[#FF8F68] font-bold mb-4">
                    {selectedSpeed === 1000 ? "GIGABIT PER SEC" : "MBPS SYMMETRIC"}
                  </div>

                  <button
                    onClick={runTest}
                    disabled={testing}
                    className="text-xs font-bold px-4 py-1.5 rounded-full bg-[#E5440C]/20 border border-[#E5440C]/40 text-[#FF8F68] hover:bg-[#E5440C] hover:text-white transition-all cursor-pointer"
                  >
                    {testing ? "Testing Latency..." : "Run Simulated Ping Test"}
                  </button>
                </div>
              </div>
            </div>

            {/* Metrics Telemetry Grid */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    <Activity className="w-3.5 h-3.5 text-[#E5440C]" />
                    <span>GATEWAY PING</span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-mono-num font-bold text-white">
                    {testResult.ping}
                  </div>
                  <div className="mt-2.5 h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-[#E5440C] rounded-full transition-all duration-500 w-[96%]" />
                  </div>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    <Zap className="w-3.5 h-3.5 text-[#E5440C]" />
                    <span>JITTER STABILITY</span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-mono-num font-bold text-white">
                    {testResult.jitter}
                  </div>
                  <div className="mt-2.5 h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-400 rounded-full transition-all duration-500 w-[98%]" />
                  </div>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    <Shield className="w-3.5 h-3.5 text-[#E5440C]" />
                    <span>4K / 8K BUFFER</span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-mono-num font-bold text-white">
                    {testResult.buffer}
                  </div>
                  <div className="mt-2.5 h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-[#E5440C] rounded-full transition-all duration-500 w-[100%]" />
                  </div>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    <Laptop className="w-3.5 h-3.5 text-[#E5440C]" />
                    <span>CAPACITY</span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-mono-num font-bold text-white">
                    {testResult.devices}
                  </div>
                  <div className="mt-2.5 h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-sky-400 rounded-full transition-all duration-500 w-[92%]" />
                  </div>
                </div>
              </div>

              {/* Bullet Highlights */}
              <div className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#E5440C] flex-shrink-0" />
                  <span>50GB console game update downloads in approximately ~22 minutes</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#E5440C] flex-shrink-0" />
                  <span>Flawless 4K HDR live television streaming on multiple screens</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#E5440C] flex-shrink-0" />
                  <span>Direct Google, Netflix, and Steam local peering inside Nepal</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
