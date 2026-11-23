"use client";

import React, { useState } from "react";
import { MapPin, CheckCircle, Clock } from "lucide-react";

export default function CoverageChecker() {
  const [searchQuery, setSearchQuery] = useState("");
  const [result, setResult] = useState<{
    status: "idle" | "ready" | "expansion";
    locationName: string;
    details: string;
  }>({
    status: "idle",
    locationName: "",
    details: "",
  });

  const popularHubs = [
    "Kathmandu Core",
    "Lalitpur - Jhamsikhel",
    "Bhaktapur",
    "Pokhara Lakeside",
    "Biratnagar",
    "Chitwan Narayangarh",
  ];

  const handleSearch = (queryOverride?: string) => {
    const q = (queryOverride || searchQuery).trim().toLowerCase();
    if (!q) return;

    if (
      q.includes("kathmandu") ||
      q.includes("baneshwor") ||
      q.includes("thamel") ||
      q.includes("lalitpur") ||
      q.includes("jhamsikhel") ||
      q.includes("bhaktapur") ||
      q.includes("pokhara") ||
      q.includes("biratnagar") ||
      q.includes("chitwan") ||
      q.includes("butwal")
    ) {
      setResult({
        status: "ready",
        locationName: queryOverride || searchQuery,
        details: "Fiber Ready! Optical distribution node active. Same-day / 24-hr installation available.",
      });
    } else {
      setResult({
        status: "expansion",
        locationName: queryOverride || searchQuery,
        details: "Optical feeder line is within 500m feasibility. Leave your details for priority dispatch.",
      });
    }
  };

  return (
    <section className="py-24 bg-slate-50 border-t border-slate-200" id="coverage">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-6">
            <div className="text-xs font-bold tracking-widest text-[#E5440C] uppercase mb-3">
              NATIONWIDE OPTICAL BACKBONE
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-slate-900 mb-4">
              <span className="font-sans font-bold">WebSurfer Active Across</span>{" "}
              <span className="font-serif italic text-[#E5440C]">Nepal</span>
            </h2>
            <p className="text-base text-slate-600 leading-relaxed mb-8">
              Our optical backbone extends across Kathmandu Valley, Pokhara, Chitwan, Biratnagar, and beyond with over 8,500 active distribution nodes.
            </p>

            {/* Address Search Box */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm mb-6">
              <label
                htmlFor="coverageInput"
                className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5"
              >
                Check Optical Node Feasibility
              </label>

              <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-full p-1.5 focus-within:border-[#E5440C] focus-within:bg-white transition-all">
                <MapPin className="w-5 h-5 text-[#E5440C] ml-3 flex-shrink-0" />
                <input
                  id="coverageInput"
                  type="text"
                  placeholder="Enter area (e.g. Baneshwor, Jhamsikhel, Pokhara...)"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                  className="w-full bg-transparent text-sm text-slate-900 outline-none px-2"
                />
                <button
                  onClick={() => handleSearch()}
                  className="px-5 py-2.5 rounded-full bg-[#E5440C] hover:bg-[#CC3B08] text-white text-xs font-semibold flex-shrink-0 transition-all cursor-pointer"
                >
                  Check
                </button>
              </div>

              {/* Result Indicator */}
              {result.status === "ready" && (
                <div className="mt-4 p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <div>
                    <strong>{result.locationName}:</strong> {result.details}
                  </div>
                </div>
              )}

              {result.status === "expansion" && (
                <div className="mt-4 p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-amber-600 flex-shrink-0" />
                  <div>
                    <strong>{result.locationName}:</strong> {result.details}
                  </div>
                </div>
              )}
            </div>

            {/* Quick Hub Pills */}
            <div className="flex items-center gap-2 flex-wrap text-xs">
              <span className="font-bold text-slate-400">Popular Hubs:</span>
              {popularHubs.map((hub) => (
                <button
                  key={hub}
                  onClick={() => {
                    setSearchQuery(hub);
                    handleSearch(hub);
                  }}
                  className="px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-700 hover:border-[#E5440C] hover:text-[#E5440C] transition-all cursor-pointer"
                >
                  {hub}
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Architectural Network Visualizer */}
          <div className="lg:col-span-6">
            <div className="bg-white p-7 rounded-3xl border border-slate-200 shadow-xl">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 pulse-green" />
                  <span className="text-xs font-bold text-slate-900">
                    Nepal Optical Grid • Status: Optimal
                  </span>
                </div>
                <span className="text-[11px] font-mono-num text-slate-400">
                  NOC-KTM-01
                </span>
              </div>

              {/* Minimal Network SVG Diagram */}
              <div className="bg-slate-50/80 rounded-2xl p-4 mb-6">
                <svg viewBox="0 0 460 260" className="w-full h-auto">
                  {/* Backbone Lines */}
                  <line x1="80" y1="130" x2="180" y2="110" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="4" />
                  <line x1="180" y1="110" x2="260" y2="90" stroke="#E5440C" strokeWidth="2.5" />
                  <line x1="260" y1="90" x2="360" y2="140" stroke="#E5440C" strokeWidth="2.5" />
                  <line x1="260" y1="90" x2="280" y2="180" stroke="#E5440C" strokeWidth="2" />
                  <line x1="360" y1="140" x2="420" y2="170" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="4" />
                  <line x1="180" y1="110" x2="160" y2="190" stroke="#CBD5E1" strokeWidth="2" />

                  {/* Pokhara Node */}
                  <g transform="translate(180, 110)">
                    <circle r="7" fill="#FFFFFF" stroke="#E5440C" strokeWidth="3" />
                    <text x="0" y="22" textAnchor="middle" className="text-[10px] font-semibold fill-slate-700">
                      Pokhara
                    </text>
                  </g>

                  {/* Kathmandu Core HQ */}
                  <g transform="translate(260, 90)">
                    <circle r="11" fill="#E5440C" />
                    <circle r="20" fill="none" stroke="#E5440C" strokeWidth="1.5" opacity="0.3" />
                    <text x="0" y="-16" textAnchor="middle" className="text-[11px] font-bold fill-[#E5440C]">
                      Kathmandu NOC HQ
                    </text>
                  </g>

                  {/* Lalitpur */}
                  <g transform="translate(280, 180)">
                    <circle r="6" fill="#FFFFFF" stroke="#E5440C" strokeWidth="2.5" />
                    <text x="0" y="20" textAnchor="middle" className="text-[10px] font-semibold fill-slate-700">
                      Lalitpur
                    </text>
                  </g>

                  {/* Chitwan */}
                  <g transform="translate(160, 190)">
                    <circle r="6" fill="#FFFFFF" stroke="#64748B" strokeWidth="2" />
                    <text x="0" y="20" textAnchor="middle" className="text-[10px] font-semibold fill-slate-700">
                      Chitwan
                    </text>
                  </g>

                  {/* Biratnagar */}
                  <g transform="translate(360, 140)">
                    <circle r="7" fill="#FFFFFF" stroke="#E5440C" strokeWidth="3" />
                    <text x="0" y="22" textAnchor="middle" className="text-[10px] font-semibold fill-slate-700">
                      Biratnagar
                    </text>
                  </g>

                  {/* Butwal */}
                  <g transform="translate(80, 130)">
                    <circle r="6" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="2" />
                    <text x="0" y="20" textAnchor="middle" className="text-[10px] font-semibold fill-slate-700">
                      Butwal
                    </text>
                  </g>
                </svg>
              </div>

              {/* Telemetry Stats */}
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-lg font-mono-num font-bold text-slate-900">24,000+ km</div>
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">Optical Fiber Laid</div>
                </div>
                <div className="border-x border-slate-100">
                  <div className="text-lg font-mono-num font-bold text-slate-900">&lt; 15 mins</div>
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">Avg NOC Response</div>
                </div>
                <div>
                  <div className="text-lg font-mono-num font-bold text-slate-900">Same-Day</div>
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">Deployment SLA</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
