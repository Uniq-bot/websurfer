"use client";

import React, { useState } from "react";
import { MapPin, CheckCircle, Zap } from "lucide-react";

export default function CoverageChecker() {
  const [selectedHub, setSelectedHub] = useState<string>("Kathmandu Core");
  const [searchQuery, setSearchQuery] = useState("");
  const [searched, setSearched] = useState(false);

  const hubs = [
    { name: "Kathmandu Core", status: "Optimal", ping: "1.2 ms", x: 260, y: 90 },
    { name: "Lalitpur", status: "Optimal", ping: "1.5 ms", x: 280, y: 170 },
    { name: "Bhaktapur", status: "Optimal", ping: "1.8 ms", x: 330, y: 110 },
    { name: "Pokhara", status: "Optimal", ping: "2.8 ms", x: 180, y: 110 },
    { name: "Chitwan", status: "Optimal", ping: "3.1 ms", x: 160, y: 190 },
    { name: "Biratnagar", status: "Optimal", ping: "4.2 ms", x: 370, y: 150 },
    { name: "Butwal", status: "Optimal", ping: "3.5 ms", x: 90, y: 140 },
  ];

  const currentHub = hubs.find((h) => h.name.toLowerCase() === selectedHub.toLowerCase()) || hubs[0];

  const handleSearch = () => {
    if (!searchQuery.trim()) return;
    const match = hubs.find((h) => h.name.toLowerCase().includes(searchQuery.toLowerCase()));
    if (match) {
      setSelectedHub(match.name);
    } else {
      setSelectedHub(searchQuery.trim());
    }
    setSearched(true);
  };

  return (
    <section className="py-20 sm:py-28 bg-slate-50 border-t border-slate-200" id="coverage">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Big Typography & City Pills */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF3EE] text-[#E5440C] text-xs font-black uppercase tracking-wider mb-4">
              <Zap className="w-3.5 h-3.5 fill-current" />
              <span>NATIONWIDE OPTICAL BACKBONE</span>
            </div>

            <h2 className="text-4xl sm:text-6xl font-black text-slate-950 tracking-tight leading-[1.05] mb-4">
              FIBER READY IN <br />
              <span className="font-serif italic text-[#E5440C] font-normal">
                YOUR STREET.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 font-medium mb-8">
              8,500+ active optical distribution nodes across Nepal. Same-day installation ready.
            </p>

            {/* Quick Hub Pills (Attraction) */}
            <div className="mb-6">
              <div className="text-xs font-black uppercase tracking-wider text-slate-400 mb-3">
                Select Your Region to Verify:
              </div>
              <div className="flex items-center gap-2 flex-wrap">
                {hubs.map((hub) => (
                  <button
                    key={hub.name}
                    onClick={() => {
                      setSelectedHub(hub.name);
                      setSearched(false);
                    }}
                    className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                      selectedHub === hub.name
                        ? "bg-[#E5440C] text-white shadow-md shadow-[#E5440C]/30 scale-105"
                        : "bg-white border border-slate-200 text-slate-700 hover:border-[#E5440C] hover:text-[#E5440C]"
                    }`}
                  >
                    {hub.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Status Capsule */}
            <div className="p-5 rounded-2xl bg-white border-2 border-emerald-200/80 shadow-md flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <div className="text-sm font-black text-slate-950">
                    {selectedHub} — Optical Grid Active
                  </div>
                  <div className="text-xs text-slate-500 font-medium">
                    Same-day 24-hr field installation available
                  </div>
                </div>
              </div>
              <span className="text-xs font-mono-num font-black text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-full">
                {currentHub.ping} Ping
              </span>
            </div>

            {/* Search Input Box */}
            <div className="mt-4 flex items-center gap-2 bg-white border border-slate-200 rounded-full p-1.5 shadow-sm">
              <MapPin className="w-5 h-5 text-[#E5440C] ml-3 flex-shrink-0" />
              <input
                type="text"
                placeholder="Or enter your specific ward or area..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                className="w-full bg-transparent text-sm text-slate-900 outline-none px-2"
              />
              <button
                onClick={handleSearch}
                className="px-6 py-2.5 rounded-full bg-slate-950 hover:bg-[#E5440C] text-white text-xs font-bold transition-all cursor-pointer flex-shrink-0"
              >
                Verify Area
              </button>
            </div>
          </div>

          {/* Right Column: Visual Interactive Map Telemetry */}
          <div className="lg:col-span-6">
            <div className="bg-white p-7 rounded-3xl border-2 border-slate-200 shadow-xl">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 pulse-green" />
                  <span className="text-xs font-black text-slate-900 uppercase tracking-wide">
                    Live Optical Grid Monitor
                  </span>
                </div>
                <span className="text-xs font-mono-num font-bold text-[#E5440C]">
                  0.0% Latency Jitter
                </span>
              </div>

              {/* Interactive SVG Network Map */}
              <div className="bg-slate-950 rounded-2xl p-4 sm:p-6 mb-6 relative overflow-hidden shadow-inner">
                {/* Subtle map glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#E5440C]/20 rounded-full blur-2xl pointer-events-none" />

                <svg viewBox="0 0 460 250" className="w-full h-auto">
                  {/* Backbone Lines */}
                  <line x1="90" y1="140" x2="180" y2="110" stroke="#E5440C" strokeWidth="2.5" opacity="0.6" strokeDasharray="4" />
                  <line x1="180" y1="110" x2="260" y2="90" stroke="#E5440C" strokeWidth="3" />
                  <line x1="260" y1="90" x2="280" y2="170" stroke="#E5440C" strokeWidth="2.5" />
                  <line x1="260" y1="90" x2="330" y2="110" stroke="#E5440C" strokeWidth="2.5" />
                  <line x1="260" y1="90" x2="370" y2="150" stroke="#E5440C" strokeWidth="2" strokeDasharray="3" />
                  <line x1="180" y1="110" x2="160" y2="190" stroke="#E5440C" strokeWidth="2" />

                  {/* Render Map Hubs */}
                  {hubs.map((hub) => {
                    const isSelected = selectedHub.toLowerCase().includes(hub.name.toLowerCase().split(" ")[0]);
                    return (
                      <g
                        key={hub.name}
                        transform={`translate(${hub.x}, ${hub.y})`}
                        className="cursor-pointer transition-all"
                        onClick={() => setSelectedHub(hub.name)}
                      >
                        {isSelected && (
                          <circle r="18" fill="none" stroke="#E5440C" strokeWidth="2" className="animate-ping opacity-60" />
                        )}
                        <circle
                          r={isSelected ? "9" : "6"}
                          fill={isSelected ? "#E5440C" : "#FFFFFF"}
                          stroke={isSelected ? "#FFFFFF" : "#E5440C"}
                          strokeWidth="2.5"
                        />
                        <text
                          x="0"
                          y={hub.y > 150 ? 20 : -14}
                          textAnchor="middle"
                          className={`text-[10px] font-mono-num font-bold select-none ${
                            isSelected ? "fill-[#FF7A45] font-black" : "fill-slate-300"
                          }`}
                        >
                          {hub.name.split(" ")[0]}
                        </text>
                      </g>
                    );
                  })}
                </svg>
              </div>

              {/* Big Stat Counters */}
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-mono-num font-black text-slate-950">24,000+</div>
                  <div className="text-[10px] font-black uppercase tracking-wider text-slate-400">KM Fiber Laid</div>
                </div>
                <div className="border-x border-slate-100">
                  <div className="text-2xl font-mono-num font-black text-[#E5440C]">&lt; 15 mins</div>
                  <div className="text-[10px] font-black uppercase tracking-wider text-slate-400">NOC Dispatch</div>
                </div>
                <div>
                  <div className="text-2xl font-mono-num font-black text-slate-950">Same-Day</div>
                  <div className="text-[10px] font-black uppercase tracking-wider text-slate-400">Setup SLA</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
